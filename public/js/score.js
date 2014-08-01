define(function(require) {
    require("zepto");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');
    
    var SHOW_FINISHED = 'finished';
    
    $(function() {
        socket.on('connect', function() {
            var cb_map = {};

            function queryStatus(callback) {
                var id = new Date().getTime();
                socket.emit('query', {
                    data: 'status',
                    id: id
                });

                cb_map[String(id)] = callback;
            }

            socket.on('query', function(data) {
                var cb = cb_map[String(data.id)];
                if (!cb) {
                    return;
                }

                delete cb_map[String[data.id]];
                cb.call(null, data.result);
            });

            queryStatus(function(show) {
                if(show.status !== SHOW_FINISHED) {
                    window.location = '/';
                } else {
                    var myscores = [1, 11, 5, 7, 3];
                    var me = document.getElementsByClassName('score-me');
                    var items = document.getElementsByClassName('score-item');

                    counter = 0;
                    magis = show.scores;
                    for (var i = 0; i < magis.length; i++) {
                        s = magis[i].scores;
                        for (var j = 0; j < s.length; j++) {
                            if (s[j] == myscores[i]) {
                                items[counter].className += ' bingo';
                            }
                            var temp = 0;
                            switch (s[j])
                            {
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
                                    temp = s[j];
                            }
                            items[counter++].innerHTML = '<span>'+temp+'</span>';
                        }
                    }
                    document.getElementById('score').className = 'score';
                }
            });
        });

        socket.on('connect_error', function(err) {
            console.error(err);
        });

        socket.on('connect_timeout', function(err) {
            console.error('connect timeout!');
        });
    });
});