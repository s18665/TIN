
var gametimer;

window.onload=function ()
{
    canv=document.getElementById("game");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
}

function launchGame()
{
    gametimer=setInterval(game,500);
    direction="right";
    y=5;
    x=5;

    slen=5;

    yfood=2;
    xfood=2;
}


var score = 0;

var img = new Image();
img.src = 'GameOver.bmp';

var direction="right";
var y=5;
var x=5;

var slen=5;

var yfood=2;
var xfood=2;

var snakearray=[];

function game()
{
    ctx.clearRect(0,0,400,400);
    if(direction==="up"){y--};
    if(direction==="down"){y++};
    if(direction==="left"){x--};
    if(direction==="right"){x++};
    displayscore();
    displayhighscore();
    checkgameover();
    snakearray.push([x,y]);

    if(snakearray[snakearray.length-1][0]===yfood&&snakearray[snakearray.length-1][1]===xfood)
    {
        slen++;
        createnewfood();
    }

    blackdraw(yfood,xfood);
    if(snakearray.length>slen)
    {
        snakearray.shift();
    }
    drawarray();

}

function checkgameover()
{
    for (var i=0; i<snakearray.length-1; i++)
    {
        if(snakearray[i][0]===x&&snakearray[i][1]===y)
        {
            clearInterval(gametimer);
            x=11;
            y=11;
            yfood=12;
            xfood=12;
            snakearray=[];
            ctx.drawImage(img,0,0);
        }
    }
    if(x<0||x>9||y<0||y>9)
    {
        clearInterval(gametimer);
        x=11;
        y=11;
        yfood=12;
        xfood=12;
        snakearray=[];
        ctx.drawImage(img,0,0);
    }
}

function drawarray()
{
    for (var i=0; i<snakearray.length; i++)
    {
        //console.log(snakearray[i][0],snakearray[i][1]);
        if(i===snakearray.length-1)
        {
            headdraw(snakearray[i][0],snakearray[i][1]);
        }
        else
        {
            greendraw(snakearray[i][0],snakearray[i][1]);
        }

    }
}

function createnewfood()
{
    yfood=Math.floor(Math.random()*10);
    xfood=Math.floor(Math.random()*10);
    for (var i=0; i<snakearray.length; i++)
    {
        //console.log(snakearray[i][0],snakearray[i][1]);
        if(snakearray[i][0]===yfood&&snakearray[i][1]===xfood)
        {
            createnewfood();
        }
    }
}


function keyPush(evt)
{
    if(evt.key===" "){launchGame()};
    if(evt.key==="ArrowUp") {direction="up"};
    if(evt.key==="ArrowDown") {direction="down"};
    if(evt.key==="ArrowLeft") {direction="left"};
    if(evt.key==="ArrowRight") {direction="right"};
}

function greendraw(x, y)
{
    ctx.fillStyle="#e0930d";
    ctx.fillRect(x*40,y*40,40,40)
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(x*40+1,y*40+1,38,38);
}

function headdraw(x, y)
{
    ctx.fillStyle="#e0930d";
    ctx.fillRect(x*40,y*40,40,40)
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(x*40+1,y*40+1,38,38);
    ctx.fillStyle="#000000";
    ctx.fillRect(x*40+16,y*40+16,8,8);
}

function blackdraw(x, y)
{
    ctx.fillStyle = "#000000";
    ctx.fillRect(x*40,y*40,40,40);
}
function displayscore()
{
    document.getElementById("cs").innerHTML=("Score: "+(slen-4).toString());
}

function displayhighscore()
{
    var highscore = localStorage.getItem("highscore");
    score=slen-4;
    if (score > highscore) {
        localStorage.setItem("highscore", score);
    }

    document.getElementById("hs").innerHTML=("High score: "+(highscore).toString());
}
