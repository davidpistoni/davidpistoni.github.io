var clicking = function(e){
  if($(e.target).hasClass('ilu')){
    $(e.target).toggleClass('ilu');
  }
  else{
    $(e.target).toggleClass('ilu');
    $('.all').toggleClass('all-in');
    cuacks++;
    alert('Cuaaack No: \t' + cuacks);
  }

};
var cuacks = 0;
$('.pop-up').on('click', clicking);
