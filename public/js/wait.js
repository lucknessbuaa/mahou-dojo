define(function(require) {
    require("zepto");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');
    
    var SHOW_WAITING = 'waiting';
    
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
                if(show.status !== SHOW_WAITING) {
                    window.location = '/';
                } else {
                    deadline = new Date(show.time);
                    var min = 60*1000;
                    var hour = 60*min;
                    var day = 24*hour;

                    function update () {
                        var now = new Date();
                        var delta = deadline - now;
                        if (delta >= 0) {
                            var delta_day = Math.floor(delta/day);
                            delta -= delta_day * day;
                            var delta_hour = Math.floor(delta/hour);
                            delta -= delta_hour * hour;
                            var delta_min = Math.floor(delta/min);

                            document.getElementById('time').innerHTML = delta_day+'天'+delta_hour+'时'+delta_min+'分';
                        } else {
                            document.getElementById('time').innerHTML = '0天0时0分';
                            clearInterval(timer);
                            window.location = '/';
                        }
                    }
                    update();
                    var timer = setInterval(function(){update()}, 60000);

                }
            });

            socket.on('start', function() {
                console.log('start');
                window.location = '/';
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
