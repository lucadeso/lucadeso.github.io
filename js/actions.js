
$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});

window.onbeforeunload = function () {
        window.scrollTo(0,0);
};



// seleziona tutti i link con cancelletto
$('a[href*="#"]')
  // eccetto questi
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#tab1"]')
  .not('[href="#tab2"]')
  .not('[href="#tab3"]')


  .click(function(event) {
    // link on-page
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // capisci a quale elemento scendere
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // esiste uno scroll target?
      if (target.length) {
        // default se c'è animazione
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400, function() {
        });
      }
    }
  });

///////

// toggle quando clicco


// mostra primo toogle di default
$('#toggle a:first-child').addClass('active');
$('.things').hide();
$('.things:first').show();

// come cambiare le varie sezioni
  $('#toggle a').click(function(){
  $('#toggle a').removeClass('active');
  $(this).addClass('active');
  $('.things').hide();

  var activeTab = $(this).attr('href');
  $(activeTab).fadeIn();
  return false;
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());


// attivare fade-in

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })

///////

// onda

let xs = []
for (var i = 0; i <= 1000; i++) {
  xs.push(i)
}

let t = 0

function animate() {

  let points = xs.map(x => {

    let y = 25 + 10 * Math.sin((x + t) / 10)

    return [x, y]
  })

  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  document.querySelector("path").setAttribute("d", path)

  t += 0.5

  requestAnimationFrame(animate)
}

animate()


/////

//secondo slideshow

var slideIndex = 1;
showSlides(slideIndex);

// controllo prima e dopo
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail di controllo delle immagini
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activation", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
