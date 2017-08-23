$(document).ready(function() {
$('#menu a[href="#home"]').tab('show');
$('#menu a').click(function (e) {
  $(this).tab('show')
}); 
$('#menu a').on('hidden.bs.tab', function(event){
	$(event.target).removeClass('active')
});
});

$('#hamburger').click(function(){
	$('#menu').toggle('menu-open')
});

$(window).resize(function(){
	if ($(window).width() <= 800){
		//look at window-width
		//write condition to always have menu visible for certain widths
	}
})