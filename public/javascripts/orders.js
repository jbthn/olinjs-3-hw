$(function () {
	$('#hidden').hide();

	$('#orderForm').on('submit', function () {
		$.post("/order/new", $('#orderForm').serialize());
		$('#hidden').show();
		return false;
	});

	$(':button').on('click', function () {
		$.post('/order/complete', { id : $(this).prop('name') });
		$('#' + $(this).prop('name')).remove();
	});
});