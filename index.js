
document.getElementById("here").append(makeComponent("第4回課題","残り4時間","有機化学機器"));

function getToday(n) {
	for (var i = 0; i < n; i++) {
        var newDiv = document.createElement("button");
    }
	return s;
}

function number() {
    // 課題の数を取得
    return 3;
}


function makeComponent(title, limit, lectureName) {
    let container = document.createElement("div");

    // let header = document.createElement("div");
    // let titleArea = document.createElement("div");
    // let limitArea = document.createElement("div");
    // let lectureArea = document.createElement("div");

    // titleArea.innerHTML = title;
    // limitArea.innerHTML = limit;
    // lectureArea.innerHTML = lectureName;
    // header.append(titleArea,limitArea);
    // container.append(header,lectureArea);

    // header.classList.add("d-flex","justify-content-between","red");
    // container.classList.add("column","gray");
    container.innerHTML = "";
    container.innerHTML += `
    <div class="column gray">
        <div class="justify-content-between d-flex">
            <div>${title}</div>
            <div>${limit}</div>
        </div>
        <div class="justify-content">
        ${lectureName}
        </div>
    </div>
    `;

    return container;
}
