/*jshint esversion: 6*/
//smooth scrolling function
//setting a default duration opf 1000ms

function smoothScrolling(target, duration = 1000) {
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect()['top'];
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    var id = requestAnimationFrame(animation);

    //where the magic happens
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        id = requestAnimationFrame(animation);
        //stop animation when time is over
        if (timeElapsed > duration) {

            cancelAnimationFrame(id);
            return "end of scroll";
        }

    }
    //custom ease function
    function ease(t, b, c, d) {
        t /= d;
        return c * t * t + b;
    }

}
let btn = document.querySelector('.section-1');
let btn2 = document.querySelector('.section-2');
btn.addEventListener('click', () => smoothScrolling('.container', 600));
btn2.addEventListener('click', () => smoothScrolling('.banner', 600));