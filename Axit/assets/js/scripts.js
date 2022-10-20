$(document).ready(function () {

// -------------------- Tabs -------------------------
	(function ($) {
		jQuery.fn.lightTabs = function (options) {

			var createTabs = function () {
				tabs = this;
				i = 0;

				showPage = function (i) {
					$(tabs).children("div").children("div").hide();
					$(tabs).children("div").children("div").eq(i).show();
					$(tabs).children("ul").children("li").removeClass("active");
					$(tabs).children("ul").children("li").eq(i).addClass("active");
				}

				showPage(0);

				$(tabs).children("ul").children("li").each(function (index, element) {
					$(element).attr("data-page", i);
					i++;
				});

				$(tabs).children("ul").children("li").click(function () {
					showPage(parseInt($(this).attr("data-page")));
				});
			};
			return this.each(createTabs);
		};
	})(jQuery);

	$('.tabs').lightTabs();
//end tabs

// -------------------- Nav -------------------------


$('.burger').on('click', function () {

$(this).toggleClass('active');

$('nav').toggleClass('active');

});
//end nav


// -------------------- Scroll -------------------------

$("nav").on("click","a", function (event) {

	event.preventDefault();

	var id  = $(this).attr('href'),

	top = $(id).offset().top;

	$('body,html').animate({scrollTop: top}, 1500);

	$(this).parents().removeClass('active');
});
//end scroll


// -------------------- Header -------------------------

$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
	$('header').addClass('sticky');
   }
   else {
   $('header').removeClass('sticky');
   }
   });

});