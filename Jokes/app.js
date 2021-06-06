$(document).ready(function(){
  animateToast('#toast1');
  animateToast('#toast2');
  animateToast('#toast3');
  animateToast('#toast4');
  animateToast('#toast5');
  animateToast('#toast6');
  getJoke();
});
function getJoke(){
  $.getJSON('https://my-bao-server.herokuapp.com/api/breadpuns', function(data){
    $("#joke").html(data + "<br>");
  });
}
$("#button").click(getJoke);

function makeNewPosition(){    
  let height = $(window).height();
  let width = $(window).width();
  let newHeight = Math.floor(Math.random() * height);
  let newWidth = Math.floor(Math.random() * width);

  return [newHeight,newWidth];    
};

function animateToast(toastId){
  let newPosition = makeNewPosition();
  $(toastId).animate({ top: newPosition[0], left: newPosition[1] }, 15000,   function(){
    animateToast(toastId);        
  });
};
