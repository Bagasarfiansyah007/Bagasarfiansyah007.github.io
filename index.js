$(document).ready(function(){
	$('.btn-menu2').click(function(){
		$('#menu-nav').toggleClass('active');
        $('h1').toggleClass('active');
        $('p').toggleClass('active');
        $('img').toggleClass('active');
        $(".bar1").toggleClass("active2");
        $(".bar2").toggleClass("active2");
        $(".btn-menu2").toggleClass("active");
	});
});

$(document).ready(function(){
	$('.btn-menu').click(function(){
		$('#menu-nav').toggleClass('active');
        $('h1').toggleClass('active');
        $('p').toggleClass('active');
        $('img').toggleClass('active');
        $(".bar1").toggleClass("active2");
        $(".bar2").toggleClass("active2");
	});
});

$(document).ready(function(){
    $(".btn-menu").hover(function(){
        $(".bar1").toggleClass("active");
        $(".bar2").toggleClass("active");
    });
});

$(document).ready(function(){
    $(".btn-menu2").hover(function(){
        $(".bar1").toggleClass("active");
        $(".bar2").toggleClass("active");
    });
});
