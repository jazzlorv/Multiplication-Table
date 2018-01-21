function dothis(){


  
  var columnp = parseInt(document.getElementById("colput").value);
  // console.log(columnp);
  var rowp = parseInt(document.getElementById("rowput").value);
  /*console.log(rowp);*/
  var bgcolor1 = document.getElementById("bgcput").value;
  var fontcolor1 = document.getElementById("fcput").value;
  
  
  var htmlContainer = "<table border='1' id='tab'>";
  var row = rowp;
  var column = columnp;
  
  for(var indexrow = 1; indexrow <= row; indexrow++){ 
    htmlContainer += "<tr>";
    for (var indexcolumn = 1; indexcolumn <= column; indexcolumn++) {
      htmlContainer += "<td style='width:50px;background-color:" + bgcolor1 + ";color:" + fontcolor1 + ";'>" + indexrow*indexcolumn + "</td>";
    }
    
    htmlContainer += "</tr>";
  }
  
  htmlContainer += "</table>";
  
  document.getElementById("tables").innerHTML = htmlContainer;
}



