module.exports = {
    baseUrl: "public",
    paths: {
        'jquery': 'components/jquery/dist/jquery.min',
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
