document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const captions = [
        "3rd International Hybrid Conference of the Department of Library and Information Science",
        "Department of Library and Information Science: Unveiling of Festschrifts",
        "IJHHR: Call for Papers",
        "Faculty of Vocational Technical Education: 10 years anniversary and Conference",
        "FINAL 2024/2025 FIRST SEMESTER CBT EXAMINATIONS TIMETABLE",
        "CENTRE FOR LION GADGETS AND TECHNOLOGIES 3RD INTERNATIONAL CONFERENCE",
        "DISCLAIMER: Clarification on Unverified CBRT Verification Code Message  ",
        "CALL FOR PAPER: THE JOURNAL OF ECONOMICS AND ALLIED RESEARCH (JEAR) VOLUME 10, ISSUE 2, JUNE 2025",
        "2025/2026 ZEANI NATIONAL SCHOLARSHIP AWARD (NSA)",
        "4TH INTERNATIONAL SCIENTIFIC CONFERENCE & 2ND ACADEMIC LECTURE/ALUMNI HOME COMING",
        "2024/2025 DIPLOMA ADMISSION LISTS",
        "2023/2024 Second Semester PhD Admission",
        "Mobilities Call",
        "OPENING OF PORTAL FOR JAMB UPDATES",
        "Fostering Safety and Dialogue: Breaking the Silence in Learning Spaces",
        "6th Chinua Achebe International Conference",
        "International Conference on Data-Driven Innovations and Applications (ICDIA)"

    ];
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds
    
    function updateCaption(index) {
        const captionTitle = document.querySelector('.caption h2');
        captionTitle.textContent = captions[index];
    }
    
    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Advance to next slide, loop back to first if at end
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new current slide
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
        
        // Update caption
        updateCaption(currentSlide);
    }
    
    // Set interval for auto-sliding
    let slideTimer = setInterval(nextSlide, slideInterval);
    
    // Pause slideshow on hover
    const carousel = document.querySelector('.hero-carousel-container');
    carousel.addEventListener('mouseenter', function() {
        clearInterval(slideTimer);
    });
    
    carousel.addEventListener('mouseleave', function() {
        slideTimer = setInterval(nextSlide, slideInterval);
    });
    
    // Click on indicators to jump to slide
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            clearInterval(slideTimer);
            
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
            
            // Update caption
            updateCaption(currentSlide);
            
            // Restart auto-sliding
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });
});

//button scroll up

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}