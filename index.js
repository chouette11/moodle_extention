    //div生成
    //creatElementでJS内でhtmlのDOMを生成できる
    const div = document.createElement("div");
    //classNameでdivのクラスを付与できる
    div.className = "list-row";
  
    for(var i=0;i<number();i++){
    //button()タグ生成
    const button = document.createElement("button");
    
    div.appendChild(button);

    }
    document.getElementById("view_today").appendChild(div);


function number() {
    // 課題の数を取得
    return 3;
}