define(function(require) {
    require("jquery");
    var constant = require("js/constant");
    var token = require("js/token");

    var SHOW_FINISHED = 'finished';

    function short_score(score) {
        var shorten = score;
        switch (score) {
            case 1:
                shorten = 'A';
                break;
            case 11:
                shorten = 'J';
                break;
            case 13:
                shorten = 'K';
                break;
            default:
                shorten = score;
        }

        return shorten;
    }

    function readCardSelection(showId) {
        var key = 'scores-' + showId + '-' + token;
        var data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }

    $(function() {
        function queryScores(callback) {
            $.get('/scores', {}, 'json').then(callback);
        }

        queryScores(function(show) {
            var myscores = readCardSelection(show.id);
            var me = document.getElementsByClassName('score-me');
            var items = document.getElementsByClassName('score-item');

            counter = 0;
            var predict = 0;
            show.magicians.forEach(function(magician, index) {
                var myscore = '';
                if (myscores && myscores[String(magician.id)]) {
                    myscore = constant.reverseScore(myscores[String(magician.id)]);
                }

                var bingo = false;
                magician.scores.forEach(function(score) {
                    var $item = $(items[counter++]);
                    if (myscore === score) {
                        $item.addClass('bingo');
                        bingo = true;
                        predict++;
                    }

                    $item.html('<span>' + short_score(score) + '</span>');
                });

                $(me[index]).html('<span>' + short_score(myscore) + '</span>');
                if (!bingo) {
                    $(me[index]).addClass('false');
                }
            });

            predict = Math.floor(predict*100/18) + '%';
            $('#score').attr('class', 'score');
            $('.predict').text(predict);
            $('.info').attr('class', 'info');
        });

        if (localStorage.mobile) {
            $("#mobile").val(localStorage.mobile);
            $("#mobile").css('width', '100%');
            $("#mobile").prop('disabled', true);
            $("#confirm").remove();
        }

        $('.mobile').removeClass('hide');

        $('#confirm').click(function() {
            var intRegex = /^\d{11}$/;
            var str = $("#mobile").val();
            if (intRegex.test(str)) {
                localStorage.setItem('mobile', $("#mobile").val());
                $.post('/mobile', {
                    token: token,
                    mobile: localStorage.mobile
                }, 'json');

                $("#mobile").animate({
                    'width': '100%'
                }, 500);
                $("#mobile").prop('disabled', true);
                $("#confirm").remove();
            } else {
                $("#mobile").val('');
                $("#mobile").attr("placeholder", "请正确输入手机号");
            }
        });
    });
});