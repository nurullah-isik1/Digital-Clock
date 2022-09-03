function digital_clocks(){
    var zaman = new Date;
    document.getElementById('result').innerHTML=say(zaman.getHours())+":" 
    +say(zaman.getMinutes())+":" 
    +say(zaman.getSeconds());
    setInterval(digital_clocks,1000);
}
function say(x){
    if(x < 10){
        x="0"+x;
        
    }
    return x;
}
digital_clocks();
const { app } = require('electron');
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=16384');
