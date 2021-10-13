function handlePageLoad () {
    //alert("Hello world!!!! - page has finished loading")
}


// function to calculate the total and average
function calc(){
  var nm = document.getElementById("txt_name").value;
  var m1 = document.getElementById("txt_m1").value;
  var m2 = document.getElementById("txt_m2").value;
  var m3 = document.getElementById("txt_m3").value;
  var m4 = document.getElementById("txt_m4").value;
  var m5 = document.getElementById("txt_m5").value;
  if(!nm){
  	alert("Enter the name to continue");
  }
  else if(!m1 || !m2 || !m3 || !m4 || !m5){
  	alert("Enter all grades to continue");
  }
  else{  
   var sum = (+m1 + +m2 + +m3 + +m4 + +m5).toFixed(50);
   var avg = (sum / 5).toFixed(50);
   document.getElementById("dv_result").innerHTML = "Hi " + nm + ", Total is " + sum + " and Average is " + avg;
  }
}

function clearall(){
  var clr = document.getElementsByClassName("txtcls");

  for (var i = 0; i < clr.length; i++){

      clr[i].value = "";
      //console.log("Clearing marks " + i);
    }
  document.getElementById("dv_result").innerHTML = ""
}