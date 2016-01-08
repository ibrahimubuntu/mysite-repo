$(document).ready(function(){
	var counter = 0;
	var counter1 =0;
	var counter2=0;
	var counter3=0;
	$('li.fields').slideUp(500);
	$('#mimVideo').slideUp(500);
	$('li.fields1').slideUp(500);
	$('li.fields3').slideUp(500);
	$('#abstract').on('click', 'li.title', function() {
		counter++;
			if (counter%2==0) {
				$('li.fields').slideUp(500);
				$('#spanAbstract').addClass('glyphicon-chevron-down');
				$('#spanAbstract').removeClass('glyphicon-chevron-up');
				counter = 0;
			}else
			{
				$('li.fields').slideDown(500);
				$('#spanAbstract').addClass('glyphicon-chevron-up');
				$('#spanAbstract').removeClass('glyphicon-chevron-down');
			};
	});
	$('div.headVideo').on('click','h1.page-header',function(){
		counter1++;
		if (counter1%2==0) {
			$('#mimVideo').slideUp(500);
			$('#spanVideo').addClass('glyphicon-chevron-down');
			$('#spanVideo').removeClass('glyphicon-chevron-up');
			counter1 = 0;
		}else
		{
			$('#mimVideo').slideDown(500);
			$('#spanVideo').addClass('glyphicon-chevron-up');
			$('#spanVideo').removeClass('glyphicon-chevron-down');
		};
	})
	$('#feature').on('click', 'li.title1', function() {
		counter2++;
			if (counter2%2==0) {
				$('li.fields1').slideUp(500);
				$('#spanFeature').addClass('glyphicon-chevron-down');
				$('#spanFeature').removeClass('glyphicon-chevron-up');
				counter2 = 0;
			}else
			{
				$('li.fields1').slideDown(500);
				$('#spanFeature').addClass('glyphicon-chevron-up');
				$('#spanFeature').removeClass('glyphicon-chevron-down');
			};
	});
	$('#links').on('click', 'li.title2', function() {
		counter3++;
			if (counter3%2==0) {
				$('li.fields3').slideUp(500);
				$('#spanLink').addClass('glyphicon-chevron-down');
				$('#spanLink').removeClass('glyphicon-chevron-up');
				counter3 = 0;
			}else
			{
				$('li.fields3').slideDown(500);
				$('#spanLink').addClass('glyphicon-chevron-up');
				$('#spanLink').removeClass('glyphicon-chevron-down');
			};
	});
});