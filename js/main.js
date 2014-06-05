$(document).ready(function()
{
	$("#div1").fadeOut();

	$("#click").click(function()
	{
		$("#div1").fadeIn(4000);
		$("#div2").fadeOut();
		$("#div3").fadeToggle();
		$("#div4").fadeTo(1000, 0.4);
	});
});