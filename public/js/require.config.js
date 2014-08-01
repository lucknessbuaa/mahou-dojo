var require = {
    baseUrl: "/",
    paths: {
        'jquery': 'components/jquery/dist/jquery.min',
        'velocity': 'components/velocity/jquery.velocity.min',
        'backbone': 'components/backbone/backbone',
        'socket-io': 'components/socket.io-client/socket.io',
        'underscore': 'components/underscore/underscore',
        'uuid': 'components/node-uuid/uuid',
        'moment': 'components/moment/min/moment.min'
    },
    shim: {
        'velocity': {
            deps: ['jquery']
        },
    }
};