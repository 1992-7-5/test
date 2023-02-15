/*自機の操作　　（十字キー：←、↑、→、↓　　…自機の移動
                マウスカーソル：　　　　…自機の照準
                左クリック：　　　　　　…shoot

）
*/



//1秒に６０回以上判定
function move(){
    //自機にされた操作を判定　if文

    player.style.top=key.ArrowUp;
    // player.style.bottom=key.ArrowDown;
    player.style.left=key.ArrowLeft;
    // player.style.right=key.ArrowRight;

    timer_move=setTimeout(move(),10);
}