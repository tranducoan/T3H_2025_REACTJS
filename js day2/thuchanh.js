const resultsDiv = document.getElementById('results');

function displayResult(message) {
    resultsDiv.innerHTML += `<p>${message}</p>`;
}

// 1. In ra dãy số từ 1 đến 500.
let result = "1. In ra dãy số từ 1 đến 500: ";
for (let i = 1; i <= 500; i++) {
    result += i + " ";
}
displayResult(result);

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
displayResult("2. In ra các số chia hết cho 2 và 3 từ 1 đến 300:");
for (let i = 1; i <= 20 ; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        result += i + " ";
    }displayResult(i);
}
// 3. Tính tổng các số chẵn trong đoạn [-30, 50].
let tongChan = 0;
for (let i = -30; i <= 50; i++) {
    if (i % 2 === 0) {
        tongChan += i;
    }
}
displayResult("3. Tính tổng các số chẵn trong đoạn [-30, 50]: " + tongChan);

// 4. Nhập vào số n. Tính giai thừa của số n.
function tinhGiaiThua(n) {
    let giaiThua = 1;
    for (let i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}
displayResult("4. Tính giai thừa của 5: " + tinhGiaiThua(5));

// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
function timSoChiaHet(a, b, x) {
    for (let i = a; i <= b; i++) {
        if (i % x === 0) {
            return i;
        }
    }
    return -1;
}
displayResult("5. Tìm số nhỏ nhất chia hết cho 3 trong khoảng 10 đến 20: " + timSoChiaHet(10, 20, 3));

// 6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
function tinhTongS(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += 1 / (i * (i + 1));
    }
    return s;
}
displayResult("6. Tính tổng S với n = 5: " + tinhTongS(5));

// 7. Nhập vào số n. Hãy in ra số ước của n.
function demSoUoc(n) {
    let dem = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            dem++;
        }
    }
    return dem;
}
displayResult("7. Số ước của 12: " + demSoUoc(12));

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
function kiemTraNguyenTo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
displayResult("8. 17 là số nguyên tố: " + kiemTraNguyenTo(17));

// 9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
function themKhongVaoChuoi(s, l) {
    while (s.length < l) {
        s = '0' + s;
    }
    return s;
}
displayResult("9. Thêm '0' vào chuỗi '123' đến khi độ dài >= 5: " + themKhongVaoChuoi("123", 5));

// 10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.
function timUCLN(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function timBCNN(a, b) {
    return (a * b) / timUCLN(a, b);
}
displayResult("10. ƯCLN của 12 và 18: " + timUCLN(12, 18));
displayResult("10. BCNN của 12 và 18: " + timBCNN(12, 18));

// 11. Trò chơi đoán số.
function troChoiDoanSo() {
    let correct = Math.floor(Math.random() * 20) + 1;
    let dem = 0;
    while (dem < 5) {
        let answer = parseInt(prompt("11. Nhập số bạn đoán:"));
        if (answer === correct) {
            alert("11. Đoán đúng!");
            return;
        } else {
            alert("11. Đoán sai!");
            dem++;
        }
    }
    alert("11. Bạn đã thua cuộc!");
}
displayResult("11. Mở console để chơi trò chơi đoán số.");
//troChoiDoanSo(); // Bỏ comment để chơi

// 12. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
function inBangCuuChuong(n) {
    displayResult(`12. Bảng cửu chương của ${n}:`);
    for (let i = 1; i <= 10; i++) {
        displayResult(n + " x " + i + " = " + n * i);
    }
}
inBangCuuChuong(3);

// 13. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
function inHinhVuong(n) {
    displayResult(`13. Hình vuông cạnh ${n}:`);
    for (let i = 0; i < n; i++) {
        let hang = "";
        for (let j = 0; j < n; j++) {
            hang += "* ";
        }
        displayResult(hang);
    }
}
inHinhVuong(3);

// 14. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
function inHinhChuNhat(m, n) {
    displayResult(`14. Hình chữ nhật m=<span class="math-inline">\{m\}, n\=</span>{n}:`);
    for (let i = 0; i < n; i++) {
        let hang = "";
        for (let j = 0; j < m; j++) {
            hang += "* ";
        }
        displayResult(hang);
    }
}
inHinhChuNhat(4, 3);

// 15. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
function inTamGiacVuongCan(n) {
    displayResult(`15. Tam giác vuông cân cạnh ${n}:`);
    for (let i = 1; i <= n; i++) {
        let hang = "";
        for (let j = 0; j < i; j++) {
            hang += "* ";
        }
        displayResult(hang);
    }
}
inTamGiacVuongCan(3);

// 16. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả.
function tinhBMI(w, h) {
    let bmi = w / (h * h);
    let ketQua = "";
    if (bmi < 18.5) {
        ketQua = "Gầy";
    } else if (bmi < 23) {
        ketQua = "Bình thường";
    } else if (bmi < 25) {
        ketQua = "Thừa cân";
    } else {
        ketQua = "Béo phì";
    }
    displayResult(`16. BMI = ${bmi.toFixed(2)}, Kết quả: ${ketQua}`);
}
tinhBMI(60, 1.7); // Ví dụ: cân nặng 60kg, chiều cao 1.7m
// 17. Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.
function doanSoNgauNhien() {
    let a = Math.floor(Math.random() * 6) + 5; // Số ngẫu nhiên từ 5 đến 10
    let n;
    do {
        n = parseInt(prompt("17. Nhập số n (5-10):"));
    } while (n !== a);
    alert("17. Chúc mừng bạn đã đoán đúng số " + a);
}
displayResult("17. Mở console để chơi trò chơi đoán số ngẫu nhiên.");
//doanSoNgauNhien(); // Bỏ comment để chơi