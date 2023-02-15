//敵機の情報（弾も）を定義する

var eMinimum=10;
var eCount=0;

var enemyArea=document.getElementById("enemyArea");

var enemy=[{
    vectorX:0,
    vectorY:0,
    side:0,
    x:0,
    y:0,
    // shotDown:FALSE,

}];

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
    
}

function enemyAction(){

}

function enemyUpdate(){
    console.log(input.ArrowDown+" move");
    console.log(input.ArrowDown+'px');
    player.style.top=input.x+'px';
    // player.style.bottom=key.ArrowDown;
    player.style.left=input.y+"px";
    // player.style.right=key.ArrowRight;

    timerEnemyUpdate=setTimeout("enemyUpdate()",5);
}