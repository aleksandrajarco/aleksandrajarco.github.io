var i = 0;
var txt = 'Aleksandra Jarco';
var speed = 300;
(function() {
                var imgLen = document.getElementById('imgGallary');
                var images = imgLen.getElementsByTagName('img');
                var counter = 1;

                if (counter <= images.length) {
                    setInterval(function() {
                        images[0].src = images[counter].src;
                        console.log(images[counter].src);
                        counter++;

                        if (counter === images.length) {
                            counter = 1;
                        }
                    }, 4000);
                }
            })();

 

(function typeWriter() {

                if (i <= txt.length) {
                    document.getElementById("name").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            })()


