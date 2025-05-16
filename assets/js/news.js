function generateQRCode() {
    // Lấy giá trị số tiền
    const amount = document.getElementById("amount").value;

    if (!amount || isNaN(amount) || amount <= 0) {
       Swal.fire("Lỗi", "Vui lòng nhập số tiền hợp lệ!", "error");
        return;
    }

    // URL VietQR với số tiền động
    const qrUrl = `https://api.vietqr.io/image/970422-23368886666888-nK10pD6.jpg?accountName=VO%20QUOC%20DAT&amount=${amount}`;

    // Cập nhật ảnh QR
    const qrImage = document.getElementById("qrCode");
    qrImage.src = qrUrl;
    qrImage.style.display = "block"; // Hiện ảnh QR
}