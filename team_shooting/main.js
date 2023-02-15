



var screenWidth=500;
var screenHeight=500;

var playerWidth=190;
var playerHeight=190;

var playerMinimum=100;

var updateFreq=10;
var enemyIncFreq=500;
var EIFCount=enemyIncFreq;

var input={
    x:0,
    y:0,
    // click_left:None,
    // scorp:90
};


//1秒に６０回以上判定

var player=document.getElementsByClassName("player")[0];

console.log(enemy[0].vectorX);
console.log(enemy[0].eX);

update();

document.addEventListener('keydown',keydownEvent);
// document.addEventListener('keyup',keyupEvent);

document.addEventListener('mousedown',mousedownEvent);
document.addEventListener('mouseup',mouseupEvent);

console.log(player);





function keydownEvent(e){//e.repeat 論理型
    clearTimeout(timerUpdate);
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

    timerUpdate=setTimeout("update()",updateFreq);
    
    
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

    if(e.button==0){

    }
    return false;
}

function mouseupEvent(e){
    console.log(e.button);
    document.getElementById("keyup_log").innerText="up"+e.button;

    return false;
}



function update(){
    EIFCount+=updateFreq;

    

    //自機にされた操作を判定　if文

    console.log(input.x+" move");
    console.log(input.x+'px');
    player.style.top=input.x+'px';
    // player.style.bottom=key.ArrowDown;
    player.style.left=input.y+'px';
    // player.style.right=key.ArrowRight;

    if(EIFCount>=enemyIncFreq){
        enemyIncidence();
        EIFCount=0;
    }

    enemyAction();

    

    timerUpdate=setTimeout("update()",updateFreq);
}

