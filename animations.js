$(document).ready(function() {
$('#menu a[href="#home"]').tab('show');
$('#menu a').click(function (e) {
  $(this).tab('show')
}); 
$('#menu a').on('hidden.bs.tab', function(event){
	$(event.target).removeClass('active')
});
$('#hamburger').click(function(){
	$('#menu').toggle('menu-open')
});
$(window).resize(checkMenu);
});

//launch function when hamburger is not visible
//also input function that makes the menu disappear after clicking a selection 
function checkMenu(){
	if ($('#hamburger').attr('visibility') == 'hidden') {
		$('#menu').attr('visibility', 'visible')
		$('#menu').attr('display', 'block')
	}
}