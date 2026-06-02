 


    function toggleMenu() {

      const menu = document.getElementById("popupMenu");

      menu.classList.toggle("active");

    }

    const menuButton = document.querySelector(".menu-button");

    window.addEventListener("scroll", () => {

      if (window.scrollY > 120) {

        menuButton.classList.add("visible");

      } else {

        menuButton.classList.remove("visible");

      }

    });

    function setLanguage(lang) {

      const jp = document.querySelectorAll('.jp');
      const en = document.querySelectorAll('.en');

      if (lang === 'jp') {

        jp.forEach(el => el.style.display = 'inline');
        en.forEach(el => el.style.display = 'none');

      } else {

        jp.forEach(el => el.style.display = 'none');
        en.forEach(el => el.style.display = 'inline');

      }

    }

    setLanguage('en');
    document.querySelectorAll('.gallery-scroll').forEach(gallery => {

  gallery.addEventListener('wheel', (e) => {

    e.preventDefault();

    gallery.scrollLeft += e.deltaY;

  });

});
const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

images.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.classList.add("active");
    lightboxImg.src = img.src;

  });

});

closeLightbox.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click", () => {

  lightbox.classList.remove("active");

});


