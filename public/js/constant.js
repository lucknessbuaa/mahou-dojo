define(function() {
    return {
        SHOW_WAITING: 'waiting',
        SHOW_PLAYING: 'playing',
        SHOW_SCORE: 'score',
        SHOW_FINISHED: 'finished',

        MAGICIAN_WAITING: 'waiting',
        MAGICIAN_PLAYING: 'playing',
        MAGICIAN_SCORE: 'score',
        MAGICIAN_FINISHED: 'finished',

        scores: {
            ACE: 1,
            THREE: 3,
            FIVE: 5,
            SEVEN: 7,
            NINE: 9,
            JACK: 11,
            KING: 13
        },

        score: function(score) {
            var keys = Object.keys(this.scores);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (this.scores[key] === score) {
                    return key.toLowerCase();
                }
            }
        }
    };
});