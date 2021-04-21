function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

$(document).ready(function(){
	$('.btn-menu2').click(function(){
		$('#menu-nav').toggleClass('active');
        $('h1').toggleClass('active');
        $('p').toggleClass('active');
        $('img').toggleClass('active');
        $(".bar1").toggleClass("active2");
        $(".bar2").toggleClass("active2");
        $(".btn-menu2").toggleClass("active");
        $(".side-nav-baru").toggleClass("active");
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




