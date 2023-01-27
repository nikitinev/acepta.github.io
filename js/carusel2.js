            var slideIndex2 = 0;
            showSlides2();

            function showSlides2() {
              var i;
              var slides2 = document.getElementsByClassName("mySlides2");
              var dots2 = document.getElementsByClassName("dot2");
              for (i = 0; i < slides2.length; i++) {
                slides2[i].style.display = "none";  
              }
              slideIndex2++;
              if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
              for (i = 0; i < dots2.length; i++) {
                dots2[i].className = dots2[i].className.replace(" active2", "");
              }
              slides2[slideIndex2-1].style.display = "block";  
              dots2[slideIndex2-1].className += " active";
              setTimeout(showSlides2, 6000); // Меняйте изображение каждые 2 секунды
            }