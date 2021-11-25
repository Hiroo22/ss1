function showSlideShow(a){
  var html = " ";
  var i = 0;
  html += "<h3>10月の作品</h3>";

  html += "<ul class=\"slider\">";
for(i = 0; i < Object.keys(a).length;i++){
    html += "<li ><a href = \""+a[i].access_URL_1+"\"><div class=\"sample1\">";
    	html += "<img src="+a[i].img_src+">";
      html += "<div class=\"mask\">";
    		html += "<div class=\"caption\""+a[i].title+"><br>";
        html += "【プログラム説明】<br>"+a[i].description+"<br>";
        html += "【工夫点】<br>"+a[i].point+"<br>";
        html += "</div>";
    	html += "</div>";
    html += "</div></a></li>";

}
    html += "</ul>";


    html += "<script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script>";
    html += "<script src=\"https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js\"></script>";
    html += "<script src=\"slide_show.js\"></script>";

  document.write(html);
}


function calcTotal(a,b){
  var total = 0;
  var num1 = Object.keys(a).length;
  var stu = "";
  var i=0;
  for(i=0;i<num1;i++){
    total += Object.keys(a[b[i].code]).length
  }
  return total;
}

function returnRand(max){
  return Math.floor(Math.random()*max)
}

function showSlideShow2(a,b){
  var html = " ";
  var i = 0;
  html += "<h3>"+b[0].title+"の作品</h3>";
  html += "<ul class=\"slider\">";
  var n1, n2;
  var aa;
for(i = 0; i < calcTotal(a,b);i++){
    n1 = returnRand(Object.keys(a).length);
    n2 = returnRand(Object.keys(a[b[n1].code]).length)
    aa = a[b[n1].code][n2]
    if(aa.month != 10) continue;
    html += "<li ><a href = \""+aa.access_URL_1+"\"><div class=\"sample1\">";
    	html += "<img src="+aa.img_src+">";
      html += "<div class=\"mask\">";
    		html += "<div class=\"caption\""+aa.title+"><br>";
        html += "【プログラム説明】<br>"+aa.description+"<br>";
        html += "【工夫点】<br>"+aa.point+"<br>";
        html += "</div>";
    	html += "</div>";
    html += "</div></a></li>";

}
    html += "</ul>";


    html += "<script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script>";
    html += "<script src=\"https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js\"></script>";
    html += "<script src=\"slide_show.js\"></script>";

  document.write(html);
}
