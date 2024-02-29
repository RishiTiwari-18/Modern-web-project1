Shery.makeMagnet(".nav a, .elem h5, .content h1, .leg h4" , {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    
  });



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline()

    tl.from(".nav",{
      y:30,
      opacity:0,
      ease: Expo
    })

    .to(".boundingelem",{
        y:0,
        ease: Expo.easeOut,
        duration:1.5,
        stagger:.2,
    })
    .to(".boundingelemsm",{
        y:0,
        ease: Expo.easeOut,
        duration:1,
        delay:-1.3,
        stagger:.2,
    })

    .from(".footer",{
        opacity:0,
        delay:-1,
        duration:1.5,
        ease: "power2.out",
        
    })
}



function cursor() {
    var main = document.querySelector(".main")

    window.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            x:dets.x-5,
            y:dets.y-5,
            duration:.7,
            ease: "power4.out",
        })


    })

    main.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            scale:1,
        })
    })

    main.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            scale:0,
        })
    })


}

function menu(){
    var content = document.querySelector("#menu")
    var menu = document.querySelector(".content")
    var logo = document.querySelector(".nav a")
    var year = document.querySelector(".page4 .leg")
    var button = document.querySelector(".text a")
   

    content.addEventListener("click",function(){
        gsap.to(menu,{
            y:0,

        })

        gsap.to(content,{
            y:0,
        })
        
    })

}





cursor()
firstPageAnim()
menu()


document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove",function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;

       gsap.to(elem.querySelector("img"),{

        ease: Power1,
        top:diff ,
        left: dets.clientX,
       })
    });
});


 var zoom = document.querySelectorAll(".zoom").forEach(function(zoom){
    zoom.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            scale:3,
        })
    })

    zoom.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            scale:1,
        })
    })

   
 })

