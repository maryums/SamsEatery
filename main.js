$(document).ready(() => {
   $('.navigation').on('mouseenter', () => {
		$('#bs-example-navbar-collapse-1').fadeToggle(1000);
  });
	 $('.navigation').on('mouseleave', () => {
		$('#bs-example-navbar-collapse-1').fadeOut();
  });

}); 
