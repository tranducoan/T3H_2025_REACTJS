function kiemTraTuoi(a) {
    if (a >= 18) {
        console.log("Đủ 18 thì quẩy tiếp");
    } else if (a >= 16) {
        console.log("Đợi thêm ít năm nữa");
    } else {
        console.log("Còn quá là trẻ");
    }
}

// Ví dụ sử dụng
kiemTraTuoi(20);
kiemTraTuoi(17);
kiemTraTuoi(10);