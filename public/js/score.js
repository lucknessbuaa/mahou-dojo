define(function(require) {
    require("jquery");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');

    var SHOW_FINISHED = 'finished';

    $(function() {

        function queryScores(callback) {
            $.get('/scores', {}, 'json').then(callback);
        }

        socket.on('connect', function() {

            queryScores(function(data) {
                var myscores = [2, 13, 5, 7, 11];
                var me = document.getElementsByClassName('score-me');
                var items = document.getElementsByClassName('score-item');

                counter = 0;
                magicians = data.magicians;
                magicians.forEach(function(magician, index) {
                    var flag = 0;
                    magician.scores.forEach(function(score) {
                        var $item = $(items[counter++]);
                        if (myscores[index] === score) {
                            $item.addClass('bingo');
                            flag = 1;
                        }

                        var temp = 0;
                        switch (score) {
                            case 1:
                                temp = 'A';
                                break;
                            case 11:
                                temp = 'J';
                                break;
                            case 13:
                                temp = 'K';
                                break;
                            default:
                                temp = score;
                        }

                        $item.html('<span>' + temp + '</span>');
                    });
                    if (!flag) {
                        $(me[index]).addClass('false');
                    }
                });

                $('#score').attr('class', 'score');
            });
        });

        socket.on('connect_error', function(err) {
            console.error(err);
        });

        socket.on('connect_timeout', function(err) {
            console.error('connect timeout!');
        });

        if (localStorage.mobile) {
            $("#mobile").val(localStorage.mobile);
            $("#mobile").css('width','100%');
            $("#mobile").prop('disabled', true);
            $("#confirm").remove();
        }

        $('.mobile').removeClass('hide');

        $('#confirm').click(function() {
            var intRegex = /^\d{11}$/;
            var str = $("#mobile").val();
            if (intRegex.test(str)) {
                localStorage.setItem('mobile', $("#mobile").val());
                setTimeout(function() {
                    $.post('/prize', {'token': localStorage['audience-token'], 'mobile': localStorage.mobile}, function() {});
                }, 2000);
                
                $("#mobile").animate({'width':'100%'}, 500);
                $("#mobile").prop('disabled', true);
                $("#confirm").remove();
            } else {
                $("#mobile").val('');
                $("#mobile").attr("placeholder", "请正确输入手机号");
            }
        });
    });
});
