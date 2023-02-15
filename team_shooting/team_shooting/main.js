



var screenWidth=500;
var screenHeight=500;

var playerWidth=190;
var playerHeight=190;

var playerMinimum=100;

var input={
    x:0,
    y:0,
    // click_left:None,
    // scorp:90
};


//1秒に６０回以上判定

var player=document.getElementsByClassName("player")[0];

move();
enemyIncidence();
// enemyIncidence();
// enemyUpdate();

document.addEventListener('keydown',keydownEvent);
// document.addEventListener('keyup',keyupEvent);

document.addEventListener('mousedown',mousedownEvent);
document.addEventListener('mouseup',mouseupEvent);

console.log(player);



function keydownEvent(e){
    console.log(e.key);
    var key=e.key;
    document.getElementById("keydown_log").innerText="down"+key;
    
    if(key=='ArrowDown' && (input.x>=0 && input.x<=screenHeight-playerHeight)){
        console.log("down"+input.x);
        input.x+=playerMinimum;
    }else if(key=='ArrowUp' && (input.x>=playerMinimum && input.x<=screenHeight)){
        console.log("up"+input.x);
        input.x-=playerMinimum;
    }else if(key=='ArrowLeft' && (input.y>=playerMinimum && input.y<=screenWidth)){
        console.log("left"+input.y);
        input.y-=playerMinimum;
    }else if(key=='ArrowRight' && (input.y>=0 && input.y<=screenWidth-playerMinimum)){
        console.log("right"+input.y);
        input.y+=playerMinimum;
    }else{
        return false;
    }
    
    
}

function keyupEvent(e){
    console.log(e.key);
    var key=e.key;
    document.getElementById("keyup_log").innerText="up"+key;

    return false;
}

function mousedownEvent(e){
    console.log(e.button);
    document.getElementById("keydown_log").innerText="down"+e.button;

    return false;
}

function mouseupEvent(e){
    console.log(e.button);
    document.getElementById("keyup_log").innerText="up"+e.button;

    return false;
}



function move(){
    //自機にされた操作を判定　if文

    console.log(input.x+" move");
    console.log(input.x+'px');
    player.style.top=input.x+'px';
    // player.style.bottom=key.ArrowDown;
    player.style.left=input.y+'px';
    // player.style.right=key.ArrowRight;

    timerMove=setTimeout("move()",10);
    clearTimeout(timerEnemyIncidence);
}

function enemyIncidence(){
    var incidenceSide=Math.floor(Math.random()*4);//0、右1、上2、左3、下
    
    switch(incidenceSide){
        case 0: enemy[eCount][vectorX]=Math.floor(Math.random())-1;//右
                enemy[eCount][vectorY]=Math.floor(Math.random()*2)-1;
                enemy[eCount][x]      =screenWidth;
                enemy[eCount][y]      =Math.floor(Math.random()*screenHeight);
                break;
        case 1: enemy[eCount][vectorX]=Math.floor(Math.random()*2)-1;//上
                enemy[eCount][vectorY]=Math.floor(Math.random());
                enemy[eCount][x]      =Math.floor(Math.random()*screenWidth);
                enemy[eCount][y]      =0;
                break;
        case 2: enemy[eCount][vectorX]=Math.floor(Math.random());//左
                enemy[eCount][vectorY]=Math.floor(Math.random()*2)-1;
                enemy[eCount][x]      =0;
                enemy[eCount][y]      =Math.floor(Math.random()*screenHeight);
                break;
        case 3: enemy[eCount][vectorX]=Math.floor(Math.random()*2)-1;//下
                enemy[eCount][vectorY]=Math.floor(Math.random())-1;
                enemy[eCount][x]      =Math.floor(Math.random()*screenWidth);
                enemy[eCount][y]      =screenHeight;
                break;
        default:enemy[eCount][vectorX]=Math.floor(Math.random())-1;//もしもの時のやつ
                enemy[eCount][vectorY]=Math.floor(Math.random()*2)-1;
                enemy[eCount][x]      =screenWidth;
                enemy[eCount][y]      =Math.floor(Math.random()*screenHeight);
                break;
    }


    
    
    var eImg=document.createElement("img");
    eImg.class="enemy";
    eImg.id=eCount;
    eImg.src="/team_shooting/img/circle.png";

    enemyArea.appendChild(eImg);
    eImg.style.cssText='position: absolute; top: '+enemy[eCount][y]+'px; left: '+enemy[eCount][x]+'px; ';

    

    eCount++;

    timerEnemyIncidence=setTimeout("enemyIncidence()",300);
    clearTimeout(timerMove);
    
}
