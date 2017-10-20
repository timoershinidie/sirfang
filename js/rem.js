 window.onresize = window.onload = function() {
     console.log( document.documentElement.clientWidth);
                document.documentElement.style.fontSize = document.documentElement.clientWidth/320*10+ 'px';
     console.log(document.documentElement.style.fontSize);
            };