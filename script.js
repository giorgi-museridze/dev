

// $('#link').click(function(){
//   $("#rowhid").css("display","flex");
// })

function ShowElement(){
  let x = document.getElementById("rowhid");
  let y = document.getElementById("link");
  if(y.innerHTML == "show more"){
      x.style.display = "flex";
      y.innerHTML = "show less";
  }
  else{
      x.style.display = "none";
      y.innerHTML = "show more";
  }
}