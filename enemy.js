//敵機の情報（弾も）を定義する

var eMinimum=2;
var eCount=0;
var enemyNum=20;

var enemyArea=document.getElementById("enemyArea");


var enemy= new Array(enemyNum);

for(let i=0;i < enemyNum;i++){
        enemy[i] = {vectorX:0,vectorY:0,side:0,eX:-1000,eY:-1000,shotDown:0};
}

for(let i=0;i < enemyNum;i++){
        console.log(enemy[i]);

        var eImg=document.createElement("img");
    eImg.class="enemy";
    eImg.id=i;
    eImg.src="/img/enemy.jpg";

    enemyArea.appendChild(eImg);
    eImg.style.cssText='position: absolute; top: '+enemy[i].eY+'px; left: '+enemy[i].eX+'px; ';
}




// var enemy=[{
//     vectorX:0,
//     vectorY:0,
//     side:0,
//     eX:0,
//     eY:0,
//     shotDown:FALSE

// }];

function enemyIncidence(){
    if(eCount>=enemyNum){
        eCount=0;
    }

    var incidenceSide=Math.floor(Math.random()*4);//0、右1、上2、左3、下
    
    enemy[eCount].shotDown=1;
    switch(incidenceSide){
        case 0: enemy[eCount].vectorX=Math.floor(Math.random())-1;//右
                enemy[eCount].vectorY=Math.floor(Math.random()*2)-1;
                enemy[eCount].eX      =screenWidth;
                enemy[eCount].eY      =Math.floor(Math.random()*screenHeight);
                break;
        case 1: enemy[eCount].vectorX=Math.floor(Math.random()*2)-1;//上
                enemy[eCount].vectorY=Math.floor(Math.random());
                enemy[eCount].eX      =Math.floor(Math.random()*screenWidth);
                enemy[eCount].eY      =0;
                break;
        case 2: enemy[eCount].vectorX=Math.floor(Math.random());//左
                enemy[eCount].vectorY=Math.floor(Math.random()*2)-1;
                enemy[eCount].eX      =0;
                enemy[eCount].eY      =Math.floor(Math.random()*screenHeight);
                break;
        case 3: enemy[eCount].vectorX=Math.floor(Math.random()*2)-1;//下
                enemy[eCount].vectorY=Math.floor(Math.random())-1;
                enemy[eCount].eX      =Math.floor(Math.random()*screenWidth);
                enemy[eCount].eY      =screenHeight;
                break;
        default:enemy[eCount].vectorX=Math.floor(Math.random())-1;//もしもの時のやつ
                enemy[eCount].vectorY=Math.floor(Math.random()*2)-1;
                enemy[eCount].eX      =screenWidth;
                enemy[eCount].eY      =Math.floor(Math.random()*screenHeight);
                break;
    }


    
    
    

    console.log("enemyIncidence"+enemy[eCount].vectorX);
    console.log("enemyIncidence"+enemy[eCount].eX);

    eCount++;
    
}

function enemyAction(){
        
        for(var i=0;i<eCount;i++){
                var img=document.getElementById(i);
                console.log("enemyaction"+eCount);
                console.log(i);
                console.log("enemyaction"+enemy[i].eX);

                if(enemy[i].shotDown==1){
                        enemy[i].eX+=enemy[i].vectorX*eMinimum;
                        enemy[i].eY+=enemy[i].vectorY*eMinimum;
                        img.style.top=enemy[i].eX+'px';
                        img.style.left=enemy[i].eY+'px';
                }else{
                        
                }
                

                if(enemy[i].eX<(-playerWidth-100) || enemy[i].eX>(playerWidth+screenWidth+100) || enemy[i].eY<(-playerHeight-100) || enemy[i].eY>(screenHeight+playerHeight+100)){
                        enemy[i].eX=-1000;
                        enemy[i].eY=-1000;
                        enemy[i].shotDown=0;
                }
        }

        
}

