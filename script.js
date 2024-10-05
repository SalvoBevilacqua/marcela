const testo1 = document.querySelector('.testo-1');
const testo2 = document.querySelector('.testo-2');
const testo3 = document.querySelector('.testo-3');
const testo4 = document.querySelector('.testo-4');
const testo5 = document.querySelector('.testo-5');
const testo6 = document.querySelector('.testo-6');
const testo7 = document.querySelector('.testo-7');
const testo8 = document.querySelector('.testo-8');
const si = document.querySelector('.si');
const forse = document.querySelector('.forse');
const no = document.querySelector('.no');
const testo9 = document.querySelector('.testo-9');
const testo10 = document.querySelector('.testo-10');
const testo11 = document.querySelector('.testo-11');
const testoscarpeno = document.querySelector('.testo-scarpe-no');
const testo12 = document.querySelector('.testo-12');
const testoscarpesi = document.querySelector('.testo-scarpe-si');
const testo13 = document.querySelector('.testo-13');
const finish = document.querySelector('.finish');
const start = document.querySelector('.start');

testo1.addEventListener('click', function () {
    hideAndShow(testo1, testo2);
});

testo2.addEventListener('click', function () {
    hideAndShow(testo2, testo3);
});

testo3.addEventListener('click', function () {
    hideAndShow(testo3, testo4);
});

testo4.addEventListener('click', function () {
    hideAndShow(testo4, testo5);
});

testo5.addEventListener('click', function () {
    hideAndShow(testo5, testo6);
});

testo6.addEventListener('click', function () {
    hideAndShow(testo6, testo7);
});

testo7.addEventListener('click', function () {
    hideAndShow(testo7, testo8);
});

no.addEventListener('click', function () {
    hideAndShow(testo8, testo9);
});

forse.addEventListener('click', function () {
    hideAndShow(testo8, testo9);
});

testo9.addEventListener('click', function () {
    hideAndShow(testo9, testo10);
    setTimeout(function () {
        finish.classList.remove('d-none');
        window.close();
    }, 3000);
});

si.addEventListener('click', function () {
    hideAndShow(testo8, testo11);
});

testoscarpeno.addEventListener('click', function () {
    hideAndShow(testo11, testo12);
    setTimeout(function () {
        finish.classList.remove('d-none');
        window.close();
    }, 3500);
});

testoscarpesi.addEventListener('click', function () {
    hideAndShow(start, testo13);
});

function hideAndShow(target1, target2) {
    gsap.to(target1, {
        duration: 1,
        autoAlpha: 0,
        ease: "power3.in",
        onComplete: function () {

            target1.classList.add('d-none');
            target2.classList.remove('d-none');

            gsap.from(target2, {
                duration: 1,
                autoAlpha: 0,
                ease: "power3.in"
            });
        }
    });
}