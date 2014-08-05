var require = {
    baseUrl: "/",
    paths: {
        'jquery': 'components/jquery/dist/jquery.min',
        'bootstrap': 'components/bootstrap/dist/js/bootstrap.min',
        'velocity': 'components/velocity/jquery.velocity.min',
        'backbone': 'components/backbone/backbone',
        'socket-io': 'components/socket.io-client/socket.io',
        'underscore': 'components/underscore/underscore',
        'uuid': 'components/node-uuid/uuid',
        'moment': 'components/moment/min/moment.min',
        'zepto': 'components/zepto/zepto'
    },
    shim: {
        'velocity': {
            deps: ['jquery']
        },
    }
};
