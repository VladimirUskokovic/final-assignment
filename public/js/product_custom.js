/* JS Document */

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/
	// initImage();
	//
	// $(window).on('resize', function()
	// {
	// 	//setHeader();
	// });

	/* 

	10. Init Image

	*/

	function initImage()
	{
		var images = $('.image_list li');
		var selected = $('.image_selected img');

		images.each(function()
		{
			var image = $(this);
			image.on('click', function()
			{
				var imagePath = new String(image.data('image'));
				selected.attr('src', imagePath);
			});
		});
	}
});