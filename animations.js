$(document).ready(function() {
$('#menu a[href="#home"]').tab('show');
$('#menu a').click(function (e) {
  $(this).tab('show')
}); 
$('#menu a').on('hidden.bs.tab', function(event){
	$(event.target).removeClass('active')
});
});

