module.exports = function(year, month, day, hours, minutes, seconds) {
    hours = hours || 0;
    seconds = seconds || 0;
    minutes = minutes || 0;
    
    return new Date(year, month - 1, day, hours, minutes, seconds);
};