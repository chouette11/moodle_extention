function f(n){
    let cs = n.childNodes;
    let timeline = document.getElementsByClassName("usertext mr-1")[0];
    if (timeline.textContent == "学生 福田　恵一朗") {
      timeline.textContent = timeline.textContent + "さん ようこそ！";
    }
    var aria_label = "";
    setTimeout(() => {

      aria_label = document.getElementsByClassName('w-100 event-name-container text-truncate line-height-3')[0].getElementsByTagName("a")[0].ariaLabel;
      
      var limit = "";
      for (var i = aria_label.indexOf("活動は") + 4; i < aria_label.indexOf("活動は") + 23; i++) {
        limit += aria_label[i];
      }

      var def_limit = document.getElementsByClassName("text-right text-nowrap ml-1")[0];
      def_limit.textContent = limit;
    }, 4000);
    
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