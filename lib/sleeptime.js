/**
 * The module
 * @param {Function} wakeUpCallback The function to call when the system wakes 
 *                                  up. Gets passed the duration the system was
 *                                  in sleepmode (in miliseconds) and the date 
 *                                  the system woke up.
 * @param {Integer}  thresh         Optional: Defines the time (in miliseconds) 
 *                                  that has to pass to count the system as 
 *                                  sleeping - Defaults to 10 seconds.
 */
function SleepTime(wakeUpCallback, thresh){
    this.thresh = (typeof thresh === "undefined") ? 10000 : thresh;
    this.lasTickDidTrigger = false;
    this.wakeUpCallback = wakeUpCallback;
    this.lastTick = Date.now();
    this.start();
}


/**
 * Set up the tick-loop
 */
SleepTime.prototype.start = function() {
    var self = this;
    var interval = (self.thresh/2);
    self.timer = setInterval(function(){self.tick();}, interval);
};

/**
 * Stop the tick-loop
 */
SleepTime.prototype.stop = function() {
    if (this.timer) {
        clearInterval(this.timeer);
        this.timer = null;
    }
};

/**
 * Checks the time difference between the last tick and now.
 * Calls the callback if the difference is great enough.
 */
SleepTime.prototype.tick = function() {
    var self = this;
    var now = Date.now();
    var diff = now - self.lastTick;
    /**
     * Only trigger, if the last tick did not already call the callback.
     * Happens occasionally on OSX.
     */
    if(diff > self.thresh){
        if (!this.lasTickDidTrigger) {
            this.lasTickDidTrigger = true;
            self.wakeUpCallback(diff, now);
        }else{
            this.lasTickDidTrigger = false;
        }
    }
    self.lastTick = now;
};

module.exports = SleepTime;
