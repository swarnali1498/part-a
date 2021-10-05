function home(){
    document.getElementById("home").style.display = "block";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
}
function about_me(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
}
function education(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
}
function projects(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("experience").style.display = "none";
}
function experience(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "block";
}
function showtime()
{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    if(h==0)
    {
        hour=12;
        t="AM";
    }
    else if(h>12)
    {
        hour=h-12;
        t="PM";
    }
    else
    {
        hour=h;
        t="AM";
    }
    var day=date.getDay(),day1;
    if(day==0)
    day1="Sunday";
    if(day==1)
    day1="Monday";
    if(day==2)
    day1="Tuesday";
    if(day==3)
    day1="Wednesday";
    if(day==4)
    day1="Thursday";
    if(day==5)
    day1="Friday";
    if(day==6)
    day1="Saturday";
    var d=date.getDate()+"-"+(Number(date.getMonth())+1)+"-"+date.getFullYear()+" "+day1;
    hour=(hour<10)?"0"+hour:hour;
    min=(m<10)?"0"+m:m;
    sec=(s<10)?"0"+s:s;
    var time=hour+" : "+min+" : "+sec+" "+t;
    document.getElementById("time").innerHTML=d+" "+time;
    setTimeout(showtime,1000);
}
showtime();