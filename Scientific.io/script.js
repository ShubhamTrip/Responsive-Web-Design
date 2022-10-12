let msec=0;
let sec=0;
let min=0;
let hr=0;

let run=false;

function start(){
   run = true;
   stopwatch();
}
function stop(){
   run= false;
   stopwatch();
}
function reset(){
   run = false;
   hr=0;
   min=0;
   sec=0;
   msec=0;
   document.getElementById('second').innerHTML='00';
   document.getElementById('msec').innerHTML='00';
   document.getElementById('minute').innerHTML='00';
   document.getElementById('hours').innerHTML='00';
}

function stopwatch(){
    
    if(run==true){
        msec=msec+1;
        if(msec==100){
            sec=sec+1;
            msec=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }

        let strmsec = msec;
        let strsec =sec;
        let strhr = hr;
        let strmin = min;
        if(msec<10){
            strmsec='0'+strmsec;
        }
        if(sec<10){
            strsec='0'+strsec;
        }
        if(min<10){
            strmin='0'+strmin;
        }
        if(hr<10){
            strhr='0'+strhr;
        }
        
            document.getElementById('second').innerHTML=strsec;
            document.getElementById('msec').innerHTML=strmsec;
            document.getElementById('minute').innerHTML=strmin;
            document.getElementById('hours').innerHTML=strhr;
        
        setTimeout('stopwatch()',10);
    }

}