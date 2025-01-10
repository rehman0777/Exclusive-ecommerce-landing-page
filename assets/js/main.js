// ------------------------ navbar hambarger --------------

$(document).ready(function(){
  $("#hamburger").click(function(){
    $(".headerNavBar").toggleClass("translate-x-full");
  })
})
$(document).ready(function(){
  $("#headerNavClose").click(function(){
    $(".headerNavBar").toggleClass("translate-x-full");
  })
})

// ------------------------ Hero side bar --------------

$(document).ready(function(){
  $("#heroSideBar").click(function(){
    $(".heroSideBar").toggleClass("hidden");
  })
})

// --------------- banner dropdown ----------------
$(document).ready(function () {
  $("#womenFashion").click(function () {
    $("#womenFashionDropdown").toggleClass("hidden");
    $(".womenFashionIcon").toggleClass("rotate-90");
  });
  
  $(".womenDropdown-item").click(function () {
    $("#womenFashionDropdown").addClass("hidden");
  });
});

$(document).ready(function () {
  $("#menFashion").click(function () {
    $("#menFashionDropdown").toggleClass("hidden");
    $(".menFashionIcon").toggleClass("rotate-90");
  });

  $(".menDropdown-item").click(function () {
    $("#menFashionDropdown").addClass("hidden");
  });
});

// --------------- Sale products slider ------------------
var swiper = new Swiper(".mySwiper", {
  loop: true, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// --------------- countdown timmer ------------------

$(document).ready(function () {
  const targetDate = new Date('2025-4-31');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      $('#days').text('0');
      $('#hours').text('0');
      $('#minutes').text('0');
      $('#seconds').text('0');
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      $('#days').text(days);
      $('#hours').text(hours);
      $('#minutes').text(minutes);
      $('#seconds').text(seconds);
    }
  }

  setInterval(updateCountdown, 1000);
});

// ----------------- for loadmore product ---------------

document.addEventListener("DOMContentLoaded", function () {
  const viewAllSaleProducts = document.getElementById("viewAllSaleProducts");

  if (viewAllSaleProducts) {
    let isViewingAll = false;  

    viewAllSaleProducts.addEventListener("click", function () {
      const saleProductParents = document.getElementsByClassName("saleProductParent");
      const saleProductChilds = saleProductParents[0].querySelectorAll(".saleProductChild");

      if (isViewingAll) {
        saleProductChilds.forEach(function (saleProductChild, index) {
          if (index > 0) {
            saleProductChild.classList.remove("flex");
            saleProductChild.classList.add("hidden");
          }
        });

        viewAllSaleProducts.textContent = "View All Products";
      } else {
        saleProductChilds.forEach(function (saleProductChild) {
          saleProductChild.classList.remove("hidden");
          saleProductChild.classList.add("flex");
        });

        viewAllSaleProducts.textContent = "Less Products";
      }

      isViewingAll = !isViewingAll;
    });
  }
});

// --------------- browser category slider ------------------
var mySwiper = new Swiper('.browserCategory .browserCategory-container', {
  loop: true,
  speed: 1000,
  autoplay: false,
  // {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // }


  // Navigation arrows
  navigation: {
    nextEl: '.category-button-next',
    prevEl: '.category-button-prev',
  },
  breakpoints: {
   

    425: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1250: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }
})




