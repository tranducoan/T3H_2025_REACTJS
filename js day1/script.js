const resultsDiv = document.getElementById('results');

function displayResult(expression, result) {
    resultsDiv.innerHTML += `<p>${expression} = ${result}</p>`;
}

// 1. Phép toán logic với boolean
let x = true, y = true, z = false;
displayResult('x && y && z', x && y && z); // false: z là false, nên AND của tất cả là false
displayResult('x && y && !z', x && y && !z); // true: !z là true, nên AND của tất cả là true
displayResult('(x && y) || z', (x && y) || z); // true: (x && y) là true, nên OR với z là true
displayResult('(x && y) || !z', (x && y) || !z); // true: (x && y) là true, OR với !z (true) là true
displayResult('x && (y || z)', x && (y || z)); // true: (y || z) là true, nên AND với x là true
displayResult('x && !(y || z)', x && !(y || z)); // false: (y || z) là true, !(true) là false, nên AND với x là false
displayResult('x && (y || !z)', x && (y || !z)); // true: !z là true, (y || true) là true, nên AND với x là true
displayResult('x && (!y || z)', x && (!y || z)); // false: !y là false, (false || z) là false, nên AND với x là false

// 2. Phép toán với các kiểu dữ liệu khác nhau
let name = 'AAA', aaage = 20, isGood = true; //Lưu ý ở đây biến age bị gõ nhầm thành aaage
displayResult('age + 10', aaage + 10); // 30: Cộng số học
displayResult('age % 3', aaage % 3); // 2: Phép chia lấy dư
displayResult("name + ' BBB'", name + ' BBB'); // 'AAA BBB': Nối chuỗi
displayResult('!isGood', !isGood); // false: Phủ định boolean
displayResult("name == 'aaa' && age >= 20", name == 'aaa' && aaage >= 20); // false: So sánh chuỗi phân biệt chữ hoa/thường, nên false
displayResult("name != 'aaa' && isGood", name != 'aaa' && isGood); // true: name khác 'aaa' và isGood là true
displayResult("!(age < 10) && !isGood", !(aaage < 10) && !isGood); // false: !(aaage<10) là true, !isGood là false, AND là false.

// 3. Phép toán số học và kiểu dữ liệu chuỗi
let a = 10, b = 20, c = 30, d = '40';
displayResult('a + b + c', a + b + c); // 60: Cộng số học
displayResult('a - b / c', a - b / c); // 9.333...: Phép chia trước, sau đó trừ
displayResult('a - (b * c)', a - (b * c)); // -590: Nhân trong ngoặc trước, sau đó trừ
displayResult('d - (a * b) - c', d - (a * b) - c); // -190: d chuyển sang số, rồi trừ
displayResult('a + b + c + d', a + b + c + d); // '6040': d là chuỗi, nên tất cả chuyển sang chuỗi và nối
displayResult('d + a + b + c', d + a + b + c); // '40102030': d là chuỗi, nên tất cả chuyển sang chuỗi và nối
displayResult('d + a - b + c', d + a - b + c); // 60 : d chuyển đổi thành số, rồi thực hiện phép toán số học.
displayResult('a - b + d - c', a - b + d - c); // -20 : d chuyển đổi thành số, rồi thực hiện phép toán số học.
displayResult('d - c + a - b', d - c + a - b); // -20 : d chuyển đổi thành số, rồi thực hiện phép toán số học.
displayResult('a * b + d * c', a * b + d * c); // 800 : d chuyển đổi thành số, rồi thực hiện phép toán số học.

// 4. Phép toán logic và so sánh
x = true, y = false, z = 10;
displayResult('x && y', x && y); // false: y là false
displayResult('x && !y', x && !y); // true: !y là true
displayResult('x && z == 10', x && z == 10); // true: z == 10 là true
displayResult('(x && z == 10)', (x && z == 10)); // true: z == 10 là true
displayResult('!(x && z == 10)', !(x && z == 10)); // false: (x && z == 10) là true, phủ định là false
displayResult('!(x && z == 50)', !(x && z == 50)); // true: z == 50 là false, phủ định của false là true
displayResult('x && y && z == 10', x && y && z == 10); // false: y là false
displayResult('x && !y && z == 10', x && !y && z == 10); // true: tất cả đều true
displayResult('x || y || z == 10', x || y || z == 10); // true: x là true
displayResult('(x && y) || z != 10', (x && y) || z != 10); // false: (x && y) là false, z != 10 là false
displayResult('!(x && z == 10) || y', !(x && z == 10) || y); // false: !(x && z == 10) là false, y là false

// 5. Phép toán với số và chuỗi số
a = 1, b = '2', c = 3, d = '4';
displayResult('b + d', b + d); // '24': Nối chuỗi
displayResult('a + b + c + d', a + b + c + d); // '1234': Nối chuỗi
displayResult('a - b + c - d', a - b + c - d); // -2: b và d chuyển sang số
displayResult('a - b - c + d', a - b - c + d); // -2: b và d chuyển sang số
displayResult('(b + d) - (a + c)', (b + d) - (a + c)); // 20: b và d chuyển sang số
displayResult('(a + b) - (c + d)', (a + b) - (c + d)); // -4: b và d chuyển sang số
displayResult('a * c + b * d', a * c + b * d); // 11: b và d chuyển sang số
displayResult('-b + d', -b + d); // 2: b và d chuyển sang số
displayResult('-b - d', -b - d); // -6: b và d chuyển sang số
displayResult('-(b + d)', -(b + d)); // -6: b và d chuyển sang số

// 6. Phép toán logic và so sánh
let age = 25, isMarried = false, isRich = true;

displayResult('age > 25 && isMarried && isRich', age > 25 && isMarried && isRich); // false: age > 25 là false
displayResult('(age <= 25 || isMarried) && isRich', (age <= 25 || isMarried) && isRich); // true: age <= 25 là true
displayResult('(age > 10 || isRich) && isMarried', (age > 10 || isRich) && isMarried); // false: isMarried là false
displayResult('!(age >= 15 && isMarried) && isRich', !(age >= 15 && isMarried) && isRich); // true: !(age >= 15 && isMarried) là true
displayResult('!(age <= 20) || !(isMarried && isRich)', !(age <= 20) || !(isMarried && isRich)); // true: !(age <= 20) là true
displayResult('!(age > 8 && !isMarried) || isRich', !(age > 8 && !isMarried) || isRich); // true: (age > 8 && !isMarried) là true
displayResult('!(age < 8 && !isMarried) || isRich', !(age < 8 && !isMarried) || isRich); // true: !(age < 8 && !isMarried) là true
displayResult('(age == 8 && isMarried) || !isRich', (age == 8 && isMarried) || !isRich); // false: cả hai đều false

// 7. Phép toán và biểu thức
a = 11, b = '22', c = 33;
displayResult('a + b', a + b); // '1122': Nối chuỗi
displayResult('a - c', a - c); // -22: Trừ số học
displayResult('a + b + c', a + b + c); // '112233': Nối chuỗi
displayResult('a + c + b', a + c + b); // '113322': Nối chuỗi
displayResult('(a + b) % 3', (a + b) % 3); // 1: b chuyển sang số, cộng, rồi lấy dư
displayResult('a * b > 50', a * b > 50); // true: b chuyển sang số, nhân, rồi so sánh
displayResult('a ** b > 100', a ** b > 100); // true: b chuyển sang số, lũy thừa, rồi so sánh
displayResult('a - (b++) == 5', a - (b++) == 5); // false: b++ dùng giá trị cũ của b (22), nên 11 - 22 không bằng 5, sau đó b thành 23
displayResult('a - (++b) == 5', a - (++b) == 5); // true: ++b tăng b lên 24, nên 11 - 24 bằng -13, sau đó so sánh với 5.

// 8. Phép toán logic
let isTall = true, isMuscle = false, isHandsome = true;
displayResult('isTall && isMuscle', isTall && isMuscle); // false: isMuscle là false
displayResult('!isHandsome', !isHandsome); // false: Phủ định isHandsome
displayResult('!isTall || !isMuscle', !isTall || !isMuscle); // true: !isMuscle là true
displayResult('isTall || !(isMuscle && isHandsome)', isTall || !(isMuscle && isHandsome)); // true: !(isMuscle && isHandsome) là true
displayResult('isMuscle && !(isTall || isHandsome)', isMuscle && !(isTall || isHandsome)); // false: isMuscle là false