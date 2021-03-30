var req = new XMLHttpRequest( );            // 객체 생성
req.open("GET", "./image_list.json"); // 이미지 파일을 얻어 오도록 설정
req.onreadystatechange = function( ) {      // 콜백 함수 등록
    if (this.readyState == 4) {            // 모든 데이터가 정상으로 수신되었을         // 응답 출력
        var data = JSON.parse(this.response);            // 
            for (var i = 0; i < data.length; i++) {      // 
                var div = document.createElement("div"); // 
                div.setAttribute("class", "image");      // 
                div.onclick = function(){
                   this.classList.toggle("image-selected")
                };    
                div.onmouseover = function( ) {
                var element = this;
                    this.timerld = setTimeout(function(){
                        element.classList.add("image-magnified");
                    }, 1000); // 시간을 1초로 설정
                };
                div.onmouseout = function(){
                    clearTimeout(this.timerld);
                    this.classList.remove("image-magnified");
                };

                var img = document.createElement("img"); // 
                img.src = data[i];                       //
                div.appendChild(img);                    // 
                document.body.appendChild(div);          // 
        }
    }
}


function selectAll(btn) {
    var images = document.getElementsByClassName("image");
    for (var i = 0; i < images.length; i++) {
        if (btn.value == "Unselect All") {
            images[i].classList.remove("image-selected");
        } else {
            images[i].classList.add("image-selected");
        }
    }

    if (btn.value == "Unselect All") {
        btn.value = "select All";
    } else {
        btn.value = "Unselect All"
    }
}
function slideshow(btn) {
    var images = document.getElementsByClassName("image");
    var index = 0; 
    images[index].classList.add("image-magnified"); 


    var intervalld = setInterval(function( ) {
        images[index].classList.remove("image-magnified");
        index++;
        if(index < images.length){
            images[index].classList.add("image-magnified");
        }
        else{
            clearInterval(intervalld);
        }
    }, 2000);
}

req.send( );