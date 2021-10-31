console.log("something");

//Event listener use to add class property on html element
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('logonav').style.display="block";
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          document.getElementById('logonav').style.display="none";
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end
