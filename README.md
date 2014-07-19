#SleepTime

Detects when the system wakes up from sleep mode and calls a callback function.   
The callback gets passed the duration the system was in sleep mode and the date
the system woke up again.

##Usage

```javascript
    var SleepTime = require('sleeptime');
    /* If the system idles for 5 seconds, call the function notify. */
    var sleepy = new SleepTime(function(diff,date){
                                  console.log("System slept for" + diff + " seconds" + 
                                              " and woke up at " + time);}, 5000);
    
    /* You don't have to specify a threshold. The module defaults the threshold to 10 seconds.  
     * So this works too: 
     */
    var sleepy = new SleepTime(function(diff,date){
                                  console.log("System slept for" + diff + " seconds" + 
                                              " and woke up at " + time);});
```

##Note:
The module was only tested on OSX...I can't say if it works on other systems but i don't see why it should not :)


## License

(The MIT License)

Copyright (c) 2011-2014 Tim Rach <tim.rach91@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
