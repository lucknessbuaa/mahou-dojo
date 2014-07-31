module.exports = function(year, month, day) {
    return function(hours, minutes, seconds) {
        seconds = seconds || 0;
        minutes = minutes || 0;
        return new Date(year, month - 1, day, hours, minutes, seconds);
    }
};