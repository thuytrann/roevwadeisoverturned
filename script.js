

/*document.onreadystatechange = function() {
  
  if (document.readyState !== "complete" && document.getElementById('loader')) {
    
    

      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
      
  } else {
    
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};*/
var introcontainer = document.getElementById('intro-container');

var intro = document.getElementById('intro-animation');
var restore =document.getElementById('restore');



var typewriter = new Typewriter(intro, {

  delay: 1,
  wrapperClassName: 'Typewriter__wrapper',
  loop: false
});

if (restore){
restore.addEventListener('click', () => {
typewriter.callFunction(() => {
      document.getElementById('intro-skip').addEventListener('click', () => {
        introcontainer.style.opacity ="0";
        introcontainer.style.zIndex ="-1";

        typewriter.stop();

      })
    })
    
    .typeString('On Friday, June 24, 2022, the US Supreme Court overturned Roe v. Wade, taking away the federal constitutional right to abortion.')
    .pauseFor(2000)
    .deleteAll(2)


    .changeDelay(1)
    .typeString('Following was a wave of trigger bans of abortion from 17 states and more counting.')
    .pauseFor(2000)
    .deleteAll(2)

    .typeString('Protest around the country as people with uteruses outcry for the injustices occurred against their bodily autonomy.')
    .pauseFor(2000)
    .deleteAll(2)
    .typeString('Outside of America, there are also waves of people protesting for abortion rights through out the world.')
    .pauseFor(2000)
    .deleteAll(2)

    .callFunction(() => {
      document.getElementById('arg-3').style.visibility="visible";
    })
    .typeString('Emerging from Argentina, the Green Wave is a mass movement advocating for legal and safe abortion, adopting the color green as their symbol.') 
    
    
    
    .pauseFor(2500)
    .deleteAll(2)

    .callFunction(() => {
      document.getElementById('arg-2').style.visibility="visible";
    })
    .typeString('Mexico...')

    
    .pauseFor(2000)
    .deleteAll(2)

    .callFunction(() => {
      document.getElementById('arg-1').style.visibility="visible";
    })
    .typeString('Columbia...')

    
    .pauseFor(2000)
    .deleteAll(2)

    .typeString('and America also embraced the color green.')
    .callFunction(() => {
      document.getElementById('arg-4').style.visibility="visible";
    })
    .pauseFor(2500)
    .deleteAll(2)

    .typeString('Now that abortion right is not protected on a federal level.<br>What can we do?')
    .pauseFor(3000)
    .deleteAll(2)
    .start()
    .callFunction(() => {

      introcontainer.style.opacity ="0";
      document.getElementById('arg-1').style.visibility="hidden";
      document.getElementById('arg-2').style.visibility="hidden";
      document.getElementById('arg-3').style.visibility="hidden";
      document.getElementById('arg-4').style.visibility="hidden";
      introcontainer.style.zIndex ="-1";
    });
    
}

);
}







function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie="visited=yes;path=/";}

function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}

checkSession();

function checkSession(){
   var c = getCookie("visited");
   if(introcontainer){
    if (c === "yes") {
      //alert("Welcome back!");
 
 
    } else {
      setCookie("visited", "yes", 365);
      
      introcontainer.style.opacity ="1";
      introcontainer.style.visibility ="visible";
      introcontainer.style.zIndex ="5";
 
    }
   }
   
}
if(restore){
  restore.onclick = function () {
    
    setCookie("no");
    //alert("Welcome new visitor!");
    introcontainer.style.opacity ="1";
    introcontainer.style.visibility ="visible";
    introcontainer.style.zIndex ="51";
  };
}






var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var hovercursor = document.querySelectorAll('.hovercursor');
var clickcursor = document.querySelectorAll('.clickcursor');
var lgreen = document.querySelectorAll('.lgreen');
var dgreen = document.querySelectorAll('.dgreen');
var alllinks = document.querySelectorAll('a');
var cursortext = document.getElementById('cursor-text');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursortext.innerHTML = ''
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

alllinks.forEach(item => {
  item.addEventListener('mouseover', () => {
    
    cursortext.innerHTML = 'CLICK'
    cursorinner.classList.add('cursorinnerhover')
  });
  item.addEventListener('mouseleave', () => {
    
    cursorinner.classList.remove('cursorinnerhover')
  });
})

hovercursor.forEach(item => {
  item.addEventListener('mouseover', () => {
    
    
    cursortext.innerHTML = 'HOVER'
    cursorinner.classList.add('cursorinnerhover')
  });
  item.addEventListener('mouseleave', () => {
    
    cursorinner.classList.remove('cursorinnerhover')
  });
})

clickcursor.forEach(item => {
  item.addEventListener('mouseover', () => {
    
    cursortext.innerHTML = 'CLICK'
    cursorinner.classList.add('cursorinnerhover')
  });
  item.addEventListener('mouseleave', () => {
    
    cursorinner.classList.remove('cursorinnerhover')
  });
})

lgreen.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('lgreencursor');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('lgreencursor')
  });
})

dgreen.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('dgreencursor');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('dgreencursor')
  });
})

gsap.registerPlugin(ScrollTrigger);

function messagePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


$(".section-landingpage").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".nav-item-logo");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom 50%",
      scrub: 1
    }
  });

  tl.fromTo(targetElement, {
      paddingRight: "1vw",
      fontSize: "5vw",
      borderBottom: "2px solid #A0DC00",
      
      duration: 1
    },
    {
      paddingRight: "30vw",
      fontSize: ".85vw",
      borderBottom: "none",
      
      duration: 1
    }
  );
});




//Color changing nav


const target_1 = $(".main-menu");

var position_target_1 = getElementPosition(target_1, true);

ScrollTrigger.addEventListener("refreshInit", function () {
  position_target_1 = getElementPosition(target_1, true);
});


    //Main Menu



gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-landingpage",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-statistics",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", 
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-blockquote",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00",
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-representatives",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-gallery",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none",
  immediateRender: false
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-resources",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-resources",
    start: () => "bottom " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});



//Vertical

const target_2 = $(".vertical-menu");

var position_target_2 = getElementPosition(target_2, true);

ScrollTrigger.addEventListener("refreshInit", function () {
  position_target_2 = getElementPosition(target_2, true);
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".takeaction-page",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none", 
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-landingpage",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "#A0DC00",
});
gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-statistics",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none",
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-blockquote",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none"
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-representatives",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-gallery",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none",
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-resources",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-others",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none", 
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".takeaction-page",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none", 
  immediateRender: false
});




function getElementPosition(element, bottom = false) {
  let position = element.offset().top - $(window).scrollTop();
  return !bottom ? position : position + element.outerHeight();
}

//Main Page Parallax


var scene = document.getElementById('js-scene');
if (scene !== null){
  var parallax = new Parallax(scene);
}

var state = document.getElementById('state-js-scene');
if (state !== null){
  var parallax = new Parallax(state);
}

//special message

var message = document.getElementById('special-message-audio');

$('button').click(function(){
  $('.pop-up').addClass('open');
  message.load();
  message.play();
});

$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
  message.pause();
});




//Gallery

const delSections = document.querySelectorAll(".delayed-gallery");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none"
  });
  
  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });
  
  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});



//Resources



let root = document.documentElement;
let body = document.body;
let pages = document.querySelectorAll(".page");
let tiles = document.querySelectorAll(".tile");
let cancel = document.querySelectorAll(".close");

for (let i = 0; i < tiles.length; i++) {
  addListeners(tiles[i], pages[i], cancel[i]);
}


function addListeners(tile, page, cancel) {
let content = tile.querySelector('.inner-content');


tile.addEventListener("click", function() {
animateHero(tile, page);



let tlout = gsap.timeline();


                tlout.to(content, {
                    duration: .4,
                    opacity: 0

                });
                tlout.to('.page .inner-content ', {
                    delay: .4,
                    duration: .2,
                    opacity: 1,

                })


            });

            cancel.addEventListener("click", function() {
                animateHero(page, tile);

                let tlin = gsap.timeline();


                tlin.to('.page .inner-content ', {
                    duration: .4,
                    opacity: 0

                })

                tlin.to(content, {
                    delay: .3,
                    duration: .3,
                    opacity: 1

                })

            });
        }

        function animateHero(fromHero, toHero) {

            let animated = gsap.timeline();

            let clone = fromHero.cloneNode(true);

            let from = calculatePosition(fromHero);
            let to = calculatePosition(toHero);

            gsap.set([fromHero, toHero], {
                visibility: "hidden"
            });
            gsap.set(clone, {
                position: "absolute",
                margin: 0
            });

            body.appendChild(clone);

            let style = {
                duration: 2,
                x: to.left - from.left,
                y: to.top - from.top,
                width: to.width,
                height: to.height,
                autoRound: false,
                ease: Power1.easeOut,
                onComplete: onComplete
            };

            gsap.set(clone, from);
            gsap.to(clone, style);

         let cloneAnimation = clone.querySelector('.tile .inner-content');
            gsap.to(cloneAnimation, {
                duration: 1.0,
                opacity: 0
            })




            function onComplete() {

                gsap.set(toHero, {
                    visibility: "visible"
                });
                body.removeChild(clone);
            }
        }

        function calculatePosition(element) {

            var rect = element.getBoundingClientRect();

            var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
            var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

            var clientTop = root.clientTop || body.clientTop || 0;
            var clientLeft = root.clientLeft || body.clientLeft || 0;

            return {
                top: Math.round(rect.top + scrollTop - clientTop),
                left: Math.round(rect.left + scrollLeft - clientLeft),
                height: rect.height,
                width: rect.width,
            };
        }


//flip card





var card = document.querySelector('.card');
if (card !== null){
card.addEventListener( 'mouseover', function() {
  card.classList.toggle('is-flipped');
});
}

//information page
var Marquee3k;
if (Marquee3k != null){
  Marquee3k.init();
}



//take action

/*$('.action-button').click(function(){
  
  $('.action-expand').addClass('active');
  $('.action-button').addClass('l-selected');
 
});

$('.donate-button').click(function(){
  
  $('.donate-expand').addClass('active');
  $('.donate-button').addClass('l-selected');
 
});*/

var acc = document.getElementsByClassName("right-menu-item");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("dropdown");
    var expand = this.nextElementSibling;
    if (expand.style.maxHeight) {
      expand.style.maxHeight = null;
    } else {
      expand.style.maxHeight = expand.scrollHeight + "px";
    } 
  });
}


var menu = document.getElementsByClassName("left-menu-item");
var options = document.querySelectorAll(".right-menu");

for (let i = 0; i < menu.length; i++) {
  
  menu[i].addEventListener("click", function() {
    this.classList.toggle("l-selected");
    
    
    if (options[i].classList.contains("active")) {
      options[i].classList.remove("active");
    } else {
      options[i].classList.add("active");    
    } 
    for(let j = 0; j < menu.length; j++){
      
      if(menu[j]!=menu[i]){
        menu[j].classList.remove("l-selected");
        options[j].classList.remove("active");
      }
    }
  });
}



