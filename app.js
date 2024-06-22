const pages = [];
let currentPage = 0;

$(document).ready(function(){

  $('#next').click(function(event){
    event.preventDefault;
    currentPage++;
    next.href=pages[currentPage];
  });

  $('#previous').click(function(event){
    event.preventDefault;
  if(currentPage!=0){
    currentPage--;
    next.href=pages[currentPage];
  }else{
    currentPage = pages.length-1;
    next.href=pages[currentPage];
  }
  });

  $('#nav').click(function(event){
    event.preventDefault;
    $('#sidebar').css('display','flex');
  });

  $('#x').click(function(event){
    event.preventDefault;
    $('#sidebar').css('display', 'none');
  });
  
})

