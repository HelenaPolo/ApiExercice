$(document).ready(function(){
  $(function(){
    $.getJSON('https://my-bao-server.herokuapp.com/api/breadpuns', function(data){
      $("#joke").html(data + "<br>");
    });
  });
  animateToast('#toast1');
  animateToast('#toast2');
  animateToast('#toast3');
  animateToast('#toast4');
  animateToast('#toast5');
  animateToast('#toast6');
});

$(function(){
  $("#button").click(function(e){
    $.getJSON('https://my-bao-server.herokuapp.com/api/breadpuns', function(data){
      $("#joke").html(data + "<br>");
    });
  });
});

function makeNewPosition(){    
  var height = $(window).height();
  var width = $(window).width();
  var newHeight = Math.floor(Math.random() * height);
  var newWidth = Math.floor(Math.random() * width);

  return [newHeight,newWidth];    
}

function animateToast(toastId){
  var newPosition = makeNewPosition();
  $(toastId).animate({ top: newPosition[0], left: newPosition[1] }, 15000,   function(){
    animateToast(toastId);        
  });
};
