var id = 0;

function play() {
  setTimeout(function(){
    if ($('#'+id).is(':hover')) {
    }
    else{
      $('#'+id).remove();
    }
    play();
    console.log('1')
  }, 1000);
};


$("body").on("click", ".worker", function () {
  $('#'+id).remove();
  var tool = $('.tooltip').clone().appendTo( "body" );
  id = $(tool).attr('id');
  play();
});

$("body").on("click", ".more-workers", function () {
  $('#'+id).remove();
  var tool = $('.tooltip').clone().appendTo( "body" );
  id = $(tool).attr('id');
  play();
  });

   