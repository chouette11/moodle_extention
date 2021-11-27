function f(n){
    let cs = n.childNodes;
    let timeline = document.getElementsByClassName("usertext mr-1")[0];
    if (timeline.textContent == "学生 福田　恵一朗") {
      timeline.textContent = timeline.textContent + "さん ようこそ！";
    }
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace("有機", "でござるよ。");
      }
      else{
        f(c);
      }
    }
  }
  
  f(document.body);