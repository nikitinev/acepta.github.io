            var slideIndex4 = 0;
            showSlides4();

            function showSlides4() {
              var i;
              var slides4 = document.getElementsByClassName("mySlides4");
              var dots4 = document.getElementsByClassName("dot4");
              for (i = 0; i < slides4.length; i++) {
                slides4[i].style.display = "none";  
              }
              slideIndex4++;
              if (slideIndex4 > slides4.length) {slideIndex4 = 1}    
              for (i = 0; i < dots4.length; i++) {
                dots4[i].className = dots4[i].className.replace(" active4", "");
              }
              slides4[slideIndex4-1].style.display = "block";  
              dots4[slideIndex4-1].className += " active";
              setTimeout(showSlides4, 6000); // Меняйте изображение каждые 2 секунды
            }