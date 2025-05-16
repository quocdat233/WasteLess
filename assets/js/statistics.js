mapboxgl.accessToken = 'pk.eyJ1IjoicXVvY2RhdDIzMyIsImEiOiJjbWFxY2RvOWYwN3hpMmtvZThvd292a29pIn0.3br8KABsEr9Ad_XJUuXbvQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [108.2068, 16.0471],
    zoom: 5
});

let mapMarkers = [];
let lastCenter = [105.0, 10.5];

const projects = [
    {
        name: "Điểm phân loại rác thông minh Quận 1 - TP.HCM",
        lat: 10.7769,
        lng: 106.7009,
        province: "TP.HCM",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=TPHCM+PhanLoaiRac",
        bins: 4,
        types: "Hữu cơ, Vô cơ, Tái chế, Nguy hại",
        date: "15/3/2024",
        description: "Lắp đặt hệ thống thùng rác phân loại kèm hướng dẫn sử dụng bằng mã QR và AI hỗ trợ."
    },
    {
        name: "Chương trình đổi rác lấy quà - Đại học Bách Khoa Hà Nội",
        lat: 21.0056,
        lng: 105.8431,
        province: "Hà Nội",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=HaNoi+DoiRacLayQua",
        bins: 3,
        types: "Nhựa, Giấy, Kim loại",
        date: "5/5/2024",
        description: "Sinh viên mang rác tái chế đến đổi lấy phần quà thiết thực và coupon tiêu dùng."
    },
    {
        name: "Thí điểm thu gom rác điện tử - Đà Nẵng",
        lat: 16.0471,
        lng: 108.2068,
        province: "Đà Nẵng",
        status: "Sắp triển khai",
        image: "https://via.placeholder.com/300x200?text=DaNang+RacDienTu",
        bins: 2,
        types: "Thiết bị nhỏ, Pin đã qua sử dụng",
        date: "1/6/2024",
        description: "Hợp tác với doanh nghiệp để thu gom và xử lý rác điện tử tại các điểm trường học và công cộng."
    },
    {
        name: "Trạm phân loại rác cộng đồng - Quận 7, TP.HCM",
        lat: 10.7296,
        lng: 106.7173,
        province: "TP.HCM",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=TPHCM+Quan7Rac",
        bins: 5,
        types: "Hữu cơ, Nhựa, Giấy, Kim loại, Nguy hại",
        date: "20/11/2023",
        description: "Trạm rác hợp tác với Women’s Union, hỗ trợ phân loại tại nguồn và hướng dẫn tái chế cho hộ gia đình."
    },
    {
        name: "Điểm thu gom vỏ hộp sữa - Hà Nội",
        lat: 21.0285,
        lng: 105.8542,
        province: "Hà Nội",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=HaNoi+VoHopSua",
        bins: 2,
        types: "Vỏ hộp sữa, Giấy",
        date: "10/2/2024",
        description: "Hợp tác với Tetra Pak, thu gom vỏ hộp sữa tại 50 trường học để tái chế thành giấy công nghiệp."
    },
    {
        name: "Chương trình tái chế nhựa - Hải Phòng",
        lat: 20.8449,
        lng: 106.6881,
        province: "Hải Phòng",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=HaiPhong+TaiCheNhua",
        bins: 3,
        types: "Nhựa, Kim loại, Giấy",
        date: "1/9/2023",
        description: "Dự án ReForm Plastic, biến nhựa phế liệu thành vật liệu xây dựng và nội thất."
    },
    {
        name: "Trạm thu gom rác tái chế - Cần Thơ",
        lat: 10.0452,
        lng: 105.7469,
        province: "Cần Thơ",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=CanTho+RacTaiChe",
        bins: 4,
        types: "Nhựa, Giấy, Kim loại, Thủy tinh",
        date: "12/4/2024",
        description: "Hệ thống thùng rác thông minh với cảm biến đầy, kết nối ứng dụng VECA."
    },
    {
        name: "Điểm phân loại rác nông thôn - Vĩnh Phúc",
        lat: 21.3089,
        lng: 105.5968,
        province: "Vĩnh Phúc",
        status: "Sắp triển khai",
        image: "https://via.placeholder.com/300x200?text=VinhPhuc+RacNongThon",
        bins: 3,
        types: "Hữu cơ, Tái chế, Nguy hại",
        date: "15/7/2024",
        description: "Thí điểm phân loại rác tại nguồn ở khu vực nông thôn, kết hợp đào tạo cộng đồng."
    },
    {
        name: "Chương trình thu gom chai thủy tinh - Huế",
        lat: 16.4667,
        lng: 107.5790,
        province: "Thừa Thiên Huế",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=Hue+ChaiThuyTinh",
        bins: 2,
        types: "Thủy tinh, Nhựa",
        date: "25/10/2023",
        description: "Hợp tác với O-I BJC Vietnam, tái sử dụng chai thủy tinh cho các dự án trồng cây."
    },
    {
        name: "Điểm tái chế cộng đồng - Bình Dương",
        lat: 11.1830,
        lng: 106.6778,
        province: "Bình Dương",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=BinhDuong+TaiChe",
        bins: 4,
        types: "Nhựa, Giấy, Kim loại, Hữu cơ",
        date: "8/3/2024",
        description: "Trạm tái chế hợp tác với Dong Tien Paper Factory, sản xuất giấy công nghiệp và tấm lợp."
    },
    {
        name: "Thùng rác thông minh - Nha Trang",
        lat: 12.2388,
        lng: 109.1967,
        province: "Khánh Hòa",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=NhaTrang+ThungRac",
        bins: 3,
        types: "Hữu cơ, Tái chế, Nguy hại",
        date: "18/12/2023",
        description: "Thùng rác tích hợp AI nhận diện loại rác, hỗ trợ phân loại tại các khu du lịch."
    },
    {
        name: "Chương trình đổi rác lấy cây - Quảng Ninh",
        lat: 20.9516,
        lng: 107.0789,
        province: "Quảng Ninh",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=QuangNinh+DoiCay",
        bins: 3,
        types: "Nhựa, Giấy, Kim loại",
        date: "20/4/2024",
        description: "Người dân đổi rác tái chế lấy cây xanh, góp phần phủ xanh khu vực Hạ Long."
    },
    {
        name: "Điểm thu gom pin cũ - Vinh",
        lat: 18.6796,
        lng: 105.6813,
        province: "Nghệ An",
        status: "Sắp triển khai",
        image: "https://via.placeholder.com/300x200?text=Vinh+PinCu",
        bins: 2,
        types: "Pin, Thiết bị điện tử nhỏ",
        date: "10/6/2024",
        description: "Thu gom pin và thiết bị điện tử nhỏ để xử lý an toàn, tránh ô nhiễm môi trường."
    },
    {
        name: "Trạm phân loại rác - Buôn Ma Thuột",
        lat: 12.6816,
        lng: 108.0382,
        province: "Đắk Lắk",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=BuonMaThuot+Rac",
        bins: 4,
        types: "Hữu cơ, Nhựa, Giấy, Nguy hại",
        date: "5/1/2024",
        description: "Dự án cộng đồng với sự tham gia của các trường học và hợp tác xã địa phương."
    },
    {
        name: "Chương trình tái chế nhựa biển - Phú Quốc",
        lat: 10.2249,
        lng: 103.9650,
        province: "Kiên Giang",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=PhuQuoc+NhuaBien",
        bins: 3,
        types: "Nhựa, Kim loại, Thủy tinh",
        date: "15/5/2024",
        description: "Thu gom nhựa từ bãi biển, tái chế thành sản phẩm du lịch thân thiện môi trường."
    },
    {
        name: "Điểm phân loại rác công viên - Hải Dương",
        lat: 20.9373,
        lng: 106.3146,
        province: "Hải Dương",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=HaiDuong+CongVien",
        bins: 3,
        types: "Hữu cơ, Tái chế, Nguy hại",
        date: "10/11/2023",
        description: "Lắp đặt thùng rác phân loại tại công viên, kèm bảng hướng dẫn chi tiết."
    },
    {
        name: "Chương trình giáo dục tái chế - Quảng Nam",
        lat: 15.8794,
        lng: 108.3350,
        province: "Quảng Nam",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=QuangNam+GiaoDuc",
        bins: 3,
        types: "Nhựa, Giấy, Kim loại",
        date: "25/3/2024",
        description: "Tổ chức workshop tại trường học, dạy học sinh phân loại và tái chế rác."
    },
    {
        name: "Trạm thu gom rác tái chế - Thái Nguyên",
        lat: 21.5923,
        lng: 105.8443,
        province: "Thái Nguyên",
        status: "Sắp triển khai",
        image: "https://via.placeholder.com/300x200?text=ThaiNguyen+TaiChe",
        bins: 3,
        types: "Nhựa, Giấy, Thủy tinh",
        date: "1/7/2024",
        description: "Dự án hợp tác với doanh nghiệp địa phương để xây dựng trạm tái chế hiện đại."
    },
    {
        name: "Điểm phân loại rác khu công nghiệp - Bắc Ninh",
        lat: 21.1861,
        lng: 106.0763,
        province: "Bắc Ninh",
        status: "Đã triển khai",
        image: "https://via.placeholder.com/300x200?text=BacNinh+KhuCongNghiep",
        bins: 4,
        types: "Hữu cơ, Nhựa, Kim loại, Nguy hại",
        date: "30/9/2023",
        description: "Hệ thống phân loại rác cho công nhân tại khu công nghiệp, giảm thiểu rác thải công nghiệp."
    },
    {
        name: "Chương trình đổi rác lấy đồ dùng - Lâm Đồng",
        lat: 11.9404,
        lng: 108.4585,
        province: "Lâm Đồng",
        status: "Đang diễn ra",
        image: "https://via.placeholder.com/300x200?text=LamDong+DoiDo",
        bins: 3,
        types: "Nhựa, Giấy, Thủy tinh",
        date: "15/4/2024",
        description: "Người dân đổi rác tái chế lấy đồ gia dụng, khuyến khích tái sử dụng tại Đà Lạt."
    }
];

function showPopup(project) {
    document.getElementById('popupName').textContent = project.name;
    document.getElementById('popupImage').src = project.image;
    document.getElementById('popupSpecies').textContent = project.types || 'Chưa xác định';
    document.getElementById('popupDate').textContent = project.date || 'Chưa xác định';
    document.getElementById('popupDescription').textContent = project.description || 'Không có mô tả';
    document.getElementById('projectPopup').classList.remove('hidden');
    lastCenter = [project.lng, project.lat];
    map.flyTo({ center: lastCenter, zoom: 14 });
}

function hidePopup() {
    document.getElementById('projectPopup').classList.add('hidden');
}

function recenterMap() {
    if (lastCenter && lastCenter.length === 2 && !isNaN(lastCenter[0]) && !isNaN(lastCenter[1])) {
        map.flyTo({
           center: [108.2068, 16.0471],
        zoom: 5,
        speed: 1.2,
        curve: 1.4,
        essential: true
        });
    } else {
        map.flyTo({
            center: [108.2068, 16.0471],
            zoom: 5,
            speed: 1.2,
            curve: 1.4,
            essential: true
        });
    }
    // Show toast notification
    if (typeof Toastify !== 'undefined') {
        Toastify({
            text: "Bản đồ đã được làm mới!",
            duration: 2000,
            gravity: "top",
            position: "right",
            backgroundColor: "rgba(94, 128, 93, 0.6)"
        }).showToast();
    }
}
function renderProjects(filteredProjects) {
    // Clear existing markers
    mapMarkers.forEach(marker => marker.remove());
    mapMarkers = [];

    // Add new markers for filtered projects
    filteredProjects.forEach(p => {
        const markerEl = document.createElement('div');
        markerEl.className = 'marker';
        const marker = new mapboxgl.Marker(markerEl)
            .setLngLat([p.lng, p.lat])
            .addTo(map);
        markerEl.addEventListener('click', () => showPopup(p));
        mapMarkers.push(marker);
    });

    // Update project count
    document.getElementById('projectCount').textContent = filteredProjects.length;
}

function applyFilters() {
    const selectedProvince = document.getElementById('filterProvince').value;
    const selectedStatus = document.querySelector('.status-filter.active')?.dataset.status || '';
    const filtered = projects.filter(p =>
        (!selectedProvince || p.province === selectedProvince) &&
        (!selectedStatus || p.status === selectedStatus)
    );
    renderProjects(filtered);
    renderSlide(filtered);
}

function renderSlide(filteredProjects) {
    const slideContainer = document.getElementById('projectSlide');
    slideContainer.innerHTML = '';
    filteredProjects.forEach(p => {
        const el = document.createElement('div');
        el.className = 'project-slide-item';
        el.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.province} - ${p.status}</p>
        `;
        el.addEventListener('click', () => showPopup(p));
        slideContainer.appendChild(el);
    });
}

// Add event listeners for filters
document.getElementById('filterProvince').addEventListener('change', applyFilters);
document.querySelectorAll('.status-filter').forEach(btn =>
    btn.addEventListener('click', () => {
        document.querySelectorAll('.status-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilters();
    })
);

// Initial render
applyFilters();