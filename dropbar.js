function dropbar(a){
var html = "";
html += "<div class=\"cp_qa\">";
var i;
var id = 30;
for(i=0;i<Object.keys(a).length;i++){
  id += 1;
html += " <br><br><br><br>";
html += "<div class=\"cp_actab\">";
html += "<input id=\"cp_tabfour0"+id+"\" type=\"checkbox\" name=\"tabs\">";
html += "<label for=\"cp_tabfour0"+id+"\">"+a[i].title+"</label>";
html += "<div class=\"cp_actab-content\">";
  html += "<p >";

  html += "<h4 >【プログラム説明】</h4>";
  html += a[i].description;
  html += "<h4 >【工夫を加えた点】</h4>";
  html += a[i].point;
  html += "</p>";
html += "</div>";
html += "</div>";
html+= a[i].code;
html += "<br>";
html += "<br>";
}
html += "</div>";

document.write(html);
}


function dropbar2(a){
var html = "";
html += "<div class=\"cp_qa\">";
var i;
var id = 30;
html+="<br><br><br><br><br><br>";
for(i=0;i<Object.keys(a).length;i++){
  id += 1;
html += "<div class=\"cp_actab\">";
html += "<input id=\"cp_tabfour0"+id+"\" type=\"checkbox\" name=\"tabs\">";
html += "<label for=\"cp_tabfour0"+id+"\">"+a[i].title+"</label>";
html += "<div class=\"cp_actab-content\">";
  html += "<p >";
  html += a[i].description;
  html += "</p>";
html += "</div>";
html += "</div>";

}
html += "</div>";

document.write(html);
}
