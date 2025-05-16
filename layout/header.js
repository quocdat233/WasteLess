let header = document.querySelector('.header');
const currentPath = window.location.pathname;
const isInPages = currentPath.includes("/pages/");
let prefix = isInPages ? "../" : "";
let logoPath = prefix + "assets/images/logo.png";

const navLinks = [
  { href: prefix + "index.html",            label: "Trang chủ", match: "/index.html" },
  { href: prefix + "pages/statistics.html", label: "Thống kê", match: "/pages/statistics.html" },
  { href: prefix + "pages/news.html",       label: "Hợp tác", match: "/pages/news.html" },
  { href: prefix + "pages/community.html",  label: "Cộng đồng", match: "/pages/community.html" },
  { href: prefix + "pages/guidance.html",   label: "Hướng dẫn", match: "/pages/guidance.html" }

  // { href: prefix + "pages/contact.html",    label: "Xếp hạng", match: "/pages/contact.html" },
];

function getActiveClass(linkMatchPath) {
  return linkMatchPath && currentPath.includes(linkMatchPath) ? "active" : "";
}

// Tạo HTML menu
let menuHTML = navLinks.map(link => `
  <li><a href="${link.href}" class="${getActiveClass(link.match)}">${link.label}</a></li>
`).join("");

header.innerHTML = `
<header class="header" data-aos="fade-down" data-aos-duration="11500">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="inner-main">
          <div class="inner-logo">
            <a href="${prefix}index.html">
              <img src="${logoPath}" alt="Waste Less">
            </a>
            <span>Waste Less</span>
          </div>
          <div class="inner-menu">
            <ul>${menuHTML}</ul>
          </div>
          <div class="left">
          <div class="inner-search">
            <i class="fas fa-search search-icon"></i>
            <input type="text" id="search-input" class="form-control search-input" placeholder="Tìm kiếm...">
          </div>
          <div class="inner-icon-mobi">
            <i class="fa-solid fa-bars"></i>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-menu-overlay"></div>
</header>
`;

AOS.init();
document.querySelector('.inner-icon-mobi').addEventListener('click', function() {
  const menu = document.querySelector('.inner-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  
  menu.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
  
  // Thêm nút đóng nếu chưa có
  if (!document.querySelector('.menu-close-btn')) {
    const closeBtn = document.createElement('div');
    closeBtn.className = 'menu-close-btn';
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeBtn.addEventListener('click', closeMobileMenu);
    menu.prepend(closeBtn);
  }
});

function closeMobileMenu() {
  document.querySelector('.inner-menu').classList.remove('active');
  document.querySelector('.mobile-menu-overlay').classList.remove('active');
  document.body.classList.remove('menu-open');
}

// Đóng menu khi click overlay
document.querySelector('.mobile-menu-overlay').addEventListener('click', closeMobileMenu);