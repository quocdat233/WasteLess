
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search-input");

        searchInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim();
                if (keyword !== "") {
                    alert("Đang tìm kiếm: " + keyword);
                    searchInput.blur();
                    setTimeout(() => {
                        searchInput.value = "";
                    }, 1000);
                }
            }
        });
    });

    window.addEventListener('DOMContentLoaded', function () {
        var currentPage = window.location.pathname.split("/").pop();

        var menuLinks = document.querySelectorAll('.inner-menu a');

        menuLinks.forEach(function(link) {
            var linkPath = link.getAttribute('href');

            if (linkPath === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });


//SECTION-ONE
document.addEventListener('scroll', function () {
    const heading = document.querySelector('.section-one div');
    const scrollY = window.scrollY;
    const fadeStart = 0;
         const fadeEnd = 300;

  
    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    heading.style.opacity = Math.max(opacity, 0);
  });




    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".counter");
    
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    
        const animateCount = (counter, duration = 2000) => {
            const target = +counter.getAttribute("data-target");
            let start = 0;
            const startTime = performance.now();
    
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOut(progress);
                const value = Math.floor(easedProgress * target);
    
                counter.textContent = value.toLocaleString();
    
                // Thêm dấu cộng nếu chưa có
                if (!counter.textContent.includes('+')) {
                    counter.textContent += '+';
                }
    
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = value.toLocaleString() + '+';
                }
            };
    
            requestAnimationFrame(updateCounter);
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.6 });
    
        counters.forEach(counter => {
            observer.observe(counter);
        });
    });
    


    /*PHONE*/




//CHUYỂN FORM
const container = document.getElementById('container');
 const registerBtn = document.getElementById('register');
 const loginBtn = document.getElementById('login');
 
 registerBtn.addEventListener('click', () => {
     container.classList.add("active");
     resetPasswordVisibility("signin");
 });
 
 loginBtn.addEventListener('click', () => {
     container.classList.remove("active");
     resetPasswordVisibility("signup"); 
 });
 function togglePasswordVisibility(type) {
    const passwordField = document.getElementById(type === 'signup' ? 'signup-password' : 'signin-password');
    const eyeToggle = document.getElementById(type === 'signup' ? 'signup-eye-toggle' : 'signin-eye-toggle');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeToggle.classList.remove('fa-eye-slash');
        eyeToggle.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        eyeToggle.classList.remove('fa-eye');
        eyeToggle.classList.add('fa-eye-slash');
    }
}

function resetPasswordVisibility(type) {
    const passwordField = document.getElementById(type === 'signup' ? 'signup-password' : 'signin-password');
    const eyeToggle = document.getElementById(type === 'signup' ? 'signup-eye-toggle' : 'signin-eye-toggle');

    passwordField.type = 'password';
    eyeToggle.classList.remove('fa-eye');
    eyeToggle.classList.add('fa-eye-slash');
}   







//kéo form
const initialTop = container.offsetTop;
  const initialLeft = container.offsetLeft;

  dragElement(container);

  function dragElement(elm) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      elm.onmousedown = function (e) {
          if (["INPUT", "TEXTAREA", "BUTTON", "I", "A", "SPAN"].includes(e.target.tagName)) return;

          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;

          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
      };

      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;

          elm.style.top = (elm.offsetTop - pos2) + "px";
          elm.style.left = (elm.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
      }
  }


//ĐÓNG FORM//
function openForm() {
    const form = document.querySelector('.form');
    const registerBtn = document.getElementById('header-register');
    const loginBtn = document.getElementById('header-login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    form.style.display = "block";
    form.classList.add('show');

    // Đóng khi click ra ngoài form
    document.addEventListener('click', handleOutsideClick);
}

function closeForm() {
    const form = document.querySelector('.form');
    form.classList.remove('show');

    setTimeout(() => {
        form.style.top = initialTop + 'px';
        form.style.left = initialLeft + 'px';
    }, 310);

    // Gỡ bỏ listener để tránh memory leak
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const form = document.querySelector('.form');
    if (form && !form.contains(event.target) && !event.target.matches('#header-register, #header-login')) {
        closeForm();
    }
}

  

//SECTION-TWO

const mainFeature = document.getElementById("main-feature");
const mainIcon = document.getElementById("main-icon");
const mainTitle = document.getElementById("main-title");
const mainDesc = document.getElementById("main-desc");
const featureList = document.getElementById("feature-list");

featureList.addEventListener("click", function (e) {
  const box = e.target.closest(".feature-box");
  if (!box) return;

  // Lấy phần tử hình ảnh, tiêu đề, mô tả trong box được click
  const boxImage = box.querySelector("img");
  const boxTitle = box.dataset.title;
  const boxDesc = box.dataset.desc;
  const boxIcon = box.dataset.icon;

  // Lưu nội dung hiện tại ở khung chính
  const oldImageHTML = mainIcon.innerHTML;
  const oldTitle = mainTitle.textContent;
  const oldDesc = mainDesc.textContent;
  const oldIcon = mainIcon.dataset.icon || "";

  // Thay đổi nội dung khung chính
  mainIcon.innerHTML = boxImage.outerHTML;
  mainTitle.textContent = boxTitle;
  mainDesc.textContent = boxDesc;

  // Gán lại dataset-icon để lưu icon cũ
  mainIcon.dataset.icon = boxIcon;

  // Gán lại box vừa click thành thông tin cũ (ảnh, tiêu đề, mô tả)
  box.querySelector("img").outerHTML = oldImageHTML;
  box.querySelector("p").textContent = oldTitle;
  box.dataset.icon = oldIcon;
  box.dataset.title = oldTitle;
  box.dataset.desc = oldDesc;
});



//END-SECTION-TWO

// SECTION-THREE
document.addEventListener("DOMContentLoaded", () => {
    const timelineCards = document.querySelectorAll(".timeline-content");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const timelineContainer = document.querySelector(".timeline");

    timelineCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });

    if (prevBtn && timelineContainer) {
      prevBtn.addEventListener("click", () => {
        timelineContainer.scrollBy({ left: -320, behavior: "smooth" });
      });
    }

    if (nextBtn && timelineContainer) {
      nextBtn.addEventListener("click", () => {
        timelineContainer.scrollBy({ left: 320, behavior: "smooth" });
      });
    }
  });



//   HIỆU ỨNG
