let slideIndex = 0;

function moveSlider(direction) {
  const slides = document.querySelectorAll('.project');
  const numSlides = slides.length;
  slideIndex += direction;
  if (slideIndex >= numSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = numSlides - 1;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}


/////////////////
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//Resume Download buttn
function downloadResume() {
  // palitan mo URL resume file
  var resumeUrl = 'D:\John Paul Vacunawa Files\Bani Portfolio\CV_Sample.pdf';
  // Dito naman temporary anchor element
  var link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'CV_Sample.pdf'; // palitan mo file name if needed
  document.body.appendChild(link);
  link.click(); // click event ng pag download
  document.body.removeChild(link); // Clean up the temporary element
}
