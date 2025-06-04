let footer = document.querySelector('.footer');
let homeLink = prefix + "index.html";
let guidanceLink = prefix + "pages/guidance.html";
let statisticsLink = prefix + "pages/statistics.html";
let communityLink = prefix + "pages/community.html";
let contactLink = prefix + "pages/contact.html";
let newsLink = prefix + "pages/news.html";

footer.innerHTML = `
  <footer class="footer">
    <div class="inner-wrap">
      <div class="inner-container">
        <div class="inner-about">
          <h2>CHÚNG TÔI</h2>
          <p>
          WasteLess là nền tảng hướng tới nâng cao ý thức bảo vệ môi trường, hỗ trợ phân loại rác, chia sẻ kiến thức và kết nối cộng đồng vì một hành tinh xanh.
          </p>
        


        </div>
        <div class="inner-Alumium">
          <h2>TÍNH NĂNG</h2>
          <p>Phân loại rác bằng AI</p>
          <p>Bản đồ điểm thu gom</p>
          <p>Cộng đồng chia sẻ</p>
          <p>Thống kê lượng rác</p>
          <p>Bài viết nâng cao ý thức</p>
        </div>
        <div class="inner-policy">
          <h2>CHÍNH SÁCH</h2>
          <ul>
           <li>
  <a href="${homeLink}" target="_self">
    Trang chủ
  </a>
</li>
<li>
  <a href="${statisticsLink}" target="_self">
    Thống kê
  </a>
</li>
<li>
  <a href="${communityLink}" target="_self">
    Cộng đồng
  </a>
</li>
<li>
<li>
  <a href="${newsLink}" target="_self">
    Xếp hạng
  </a>
</li>
<li>
  <a href="${newsLink}" target="_self">
    Hợp tác
  </a>
</li>



  <a href="${guidanceLink}" target="_self">
    Hướng dẫn
  </a>
</li>



          </ul>
        </div>
        <div class="inner-contact"> <h2>LIÊN HỆ</h2>
          <p><i class="fa-solid fa-location-dot"></i> 24IT1, TP.Đà Nẵng </p>
          <p><i class="fa-solid fa-phone"></i> 0787 540 572</p>
          <p><i class="fa-solid fa-envelope"></i>datvq.24it@vku.udn.vn</p></div>
      </div>
      <div class="social">
      
        <div class="inner-title">SOCIAL</div>
        <div class="inner-social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fa-brands fa-facebook-f"></i>

                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa-brands fa-twitter"></i>

                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa-brands fa-instagram"></i>

                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
          </div>
          <div class="inner-logoo">
                          <a href="${homeLink}">
                            <img src="${logoPath}" alt="Waste Less">
                          </a>
                          <span>Waste Less</span>
                      </div>
      <div class="inner-bottom">
        <p> &copy; 2025 WASTE LESS. All rights reserved.</p>
      </div>
    </div>
  </footer>
  `;

AOS.init();
gsap.registerPlugin(ScrollTrigger);

// Inner ABOUT
gsap.from(".footer .inner-about", {
  scrollTrigger: {
    trigger: ".footer .inner-about",
    start: "top 95%",
  },
  y: 70,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// Inner TÍNH NĂNG
gsap.from(".footer .inner-Alumium", {
  scrollTrigger: {
    trigger: ".footer .inner-Alumium",
    start: "top 95%",
  },
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

// Inner CHÍNH SÁCH
gsap.from(".footer .inner-policy", {
  scrollTrigger: {
    trigger: ".footer .inner-policy",
    start: "top 95%",
  },
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
});

// Inner LIÊN HỆ
gsap.from(".footer .inner-contact", {
  scrollTrigger: {
    trigger: ".footer .inner-contact",
    start: "top 95%",
  },
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.7,
  ease: "power3.out",
});

// SOCIAL icons - animate từng icon
gsap.utils.toArray(".footer .inner-social ul li").forEach((el, index) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
    },
    y: 40,
    opacity: 0,
    duration: 0.5,
    delay: index * 0.1,
    ease: "back.out(1.7)",
  });
});
gsap.utils.toArray(".footer .inner-title").forEach((el, index) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
    },
    y: 90,
    opacity: 0,
    duration: 0.5,
    delay: index * 0.2,
    ease: "back.out(1.7)",
  });
});

// LOGO & tên thương hiệu
gsap.from(".footer .inner-logoo", {
  scrollTrigger: {
    trigger: ".footer .inner-logoo",
    start: "top 90%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "elastic.out(1, 0.4)",
});


