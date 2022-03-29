function f(n){
    const date = new Date();
    const Y = date.getFullYear();
    const M = date.getMonth();
    const D = date.getDate();
    const H = date.getHours();
    const m = date.getMinutes();

    setTimeout(() => {
      var count = 0;
      const labelList = document.getElementsByClassName('w-100 event-name-container text-truncate line-height-3');
        for (var k = 0; k < labelList.length; k++) {
        const aria_label = document.getElementsByClassName('w-100 event-name-container text-truncate line-height-3')[k].getElementsByTagName("a")[0].ariaLabel;
        
        var limit = "";
        for (var i = aria_label.indexOf("活動は") + 4; i < aria_label.indexOf("活動は") + 23; i++) {
          limit += aria_label[i];
        }
        const year = limit[0] + limit[1] + limit[2] + limit[3];
        const month = limit[6] + limit[7];
        const day = limit[10] + limit[11];
        const hour = limit[14] + limit[15];
        const minute = limit[17] + limit[18];
        var remaining = "残り";
        var days = (parseInt(year) - Y) * 365 + (parseInt(month) - M - 1) * 30 + (parseInt(day) - D);
        var hours = (parseInt(hour) - H);
        var minutes = (parseInt(minute) - m);
        if (minutes < 0) {
          hours--;
          minutes += 60;
        }
        if (hours < 0) {
          days--;
          hours += 24;
        }
        if (days > 0) {
          remaining += `${days}日`;
        }
        if (hours > 0) {
          remaining += `${hours}時間`;
        }
        if (minutes > 0) {
          remaining += `${minutes}分`;
        }
        if (days < 0 || hours < 0 || minutes < 0) {
          count++;
          var positive = ["あなたは頑張っている", "ドンマイ！", "次頑張ろう！", "まだ大丈夫！", "大変だったんだね", "たまには息抜きしてね"]
          remaining = positive[minutes * 100 % (k + 1)];
        }
        var def_limit = document.getElementsByClassName("text-right text-nowrap ml-1")[k];
        def_limit.textContent = remaining;
      }
      if (count > 8) {
        for (var k = 0; k < count; k++) {
          var def_limit = document.getElementsByClassName("text-right text-nowrap ml-1")[k];
          def_limit.textContent = "甘えるな";
        }
      }

       // 新しい div 要素を作成します
      var newDiv = document.createElement("div");
      // いくつかの内容を与えます
      var newContent = document.createTextNode("なんかゴリ押したらいけました");
      // テキストノードを新規作成した div に追加します
      newDiv.appendChild(newContent);

      // DOM に新しく作られた要素とその内容を追加します
      var parrent = document.getElementById("page-content");
      var child = document.getElementById("region-main-box")
      parrent.insertBefore(newDiv, child);
    }, 4000);
  }
  
  f(document.body);