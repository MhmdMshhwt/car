x=document.getElementById("car").style.transform;
var i=1;
function wheeling(){
    coach1();
    coach2();
    fanosLightFront();
    fanosLightBack();
    if(i==1)
    {
        document.getElementById("audio").play();
        document.getElementById("car").style.transform="translateX(-40vw)";
        i=0;
    }
    else
    {
        document.getElementById("audio").pause();
        document.getElementById("audio").load();
        i=1;
    }
}
function back(){
    document.getElementById("car").style.transform="translateX(10vw)";
    fanosLightBack();
}

function stoping(){
    
}
m=1;
function coach1(){
    if(m==1)
    {
        document.getElementById("moving").style.animationIterationCount="infinite";
        m=0;
    }
    else
    {
        document.getElementById("moving").style.animationIterationCount="0";
        m=1;
    }
}
m2=1;
function coach2(){
    if(m2==1)
    {
        document.getElementById("moving2").style.animationIterationCount="infinite";
        m2=0;
    }
    else
    {
        document.getElementById("moving2").style.animationIterationCount="0";
        m2=1;
    }
}
var x=1;
function fanosLightFront(){
    if(x==1)
    {
        document.getElementById("fanosFront").style.backgroundColor="white";
        document.getElementById("fanosFront").style.boxShadow="-10px 0px 10px #fff";    
        x=0;
    }
    else
    {
        document.getElementById("fanosFront").style.backgroundColor="gray";
        document.getElementById("fanosFront").style.boxShadow="none";
        x=1;
    }
    
}
var y=1;
function fanosLightBack(){
    if(y==1)
    {
        document.getElementById("fanosBack").style.backgroundImage="radial-gradient(#ff0000,#440303, #9b0606)";
        document.getElementById("fanosBack").style.boxShadow="5px 0px 10px #ff0000";    
        y=0;
    }
    else
    {
        document.getElementById("fanosBack").style.boxShadow="none";
        y=1;
    }
    
}
