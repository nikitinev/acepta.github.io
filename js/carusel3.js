            var slideIndex = 0;
            showSlides3();

            function showSlides3() {
              var i;
              var slides = document.getElementsByClassName("mySlides3");
              var dots = document.getElementsByClassName("dot3");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active3", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active3";
              setTimeout(showSlides3, 6000); // Меняйте изображение каждые 2 секунды
            }