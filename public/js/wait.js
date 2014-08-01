define(function(require) {
    require("zepto");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/wait');
    
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
                switch (show.status) {
                    case SHOW_WAITING:
                        break;
                    default:
                        window.location = '/';
                        break;
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
