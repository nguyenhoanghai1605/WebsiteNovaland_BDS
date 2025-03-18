// Lấy đối tượng nút đăng ký
var submitButton = document.querySelector('.btn-full-width');

// Gán sự kiện click cho nút đăng ký
submitButton.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của form khi click nút đăng ký
    event.preventDefault();

    // Lấy giá trị các trường input
    var nameInput = document.querySelector('input[name="subscriber_name"]').value;
    var emailInput = document.querySelector('input[name="subscriber_email"]').value;
    var phoneInput = document.querySelector('input[name="subscriber_phone"]').value;

    // Kiểm tra các trường input có được điền đầy đủ hay không
    if (nameInput && emailInput && phoneInput) {
        // Gửi dữ liệu form đăng ký lên server (thay thế phần code này bằng phần xử lý gửi dữ liệu thực tế)
        console.log('Họ và tên:', nameInput);
        console.log('E-Mail:', emailInput);
        console.log('Số điện thoại:', phoneInput);
        alert('Đăng ký thành công!');

        // Reset giá trị các trường input sau khi gửi thành công
        document.querySelector('input[name="subscriber_name"]').value = '';
        document.querySelector('input[name="subscriber_email"]').value = '';
        document.querySelector('input[name="subscriber_phone"]').value = '';
    } else {
        // Hiển thị thông báo lỗi nếu các trường input chưa được điền đầy đủ
        alert('Vui lòng điền đầy đủ thông tin.');
    }

});