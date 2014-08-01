var require = {
    baseUrl: "/",
    paths: {
        'jquery': 'components/jquery/dist/jquery.min',
        'velocity': 'components/velocity/jquery.velocity.min',
        'socket-io': 'components/socket.io-client/socket.io',
        'uuid': 'components/node-uuid/uuid',
        'moment': 'components/moment/min/moment.min',
        'zepto': 'components/zepto/zepto'
    },
    shim: {
        'velocity': {
            deps: ['jquery']
        }
    }
};