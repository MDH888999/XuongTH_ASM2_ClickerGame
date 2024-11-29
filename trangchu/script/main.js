// gia tri money ne
var kimcuong = 0;
kimcuong = localStorage.getItem('diamond');
document.getElementById('kimcuong').innerText = 'Nạp thẻ (' + kimcuong + ')';
var money = 0;
var mps = 0;
var mpc = 1;
var boostmps = 1;
var boostmpc = 1;
// so luong vat pham ne
var nole1 = 0;
var tool1 = 0;
var nole2 = 0;
var tool2 = 0;
var nole3 = 0;
var tool3 = 0;
var nole4 = 0;
var tool4 = 0;
var nole5 = 0;
var tool5 = 0;
var nole6 = 0;
var tool6 = 0;
// gia vat pham ne
var gianole1 = 10;
var giatool1 = 10;
var gianole2 = 500;
var giatool2 = 100;
var gianole3 = 5000;
var giatool3 = 1000;
var gianole4 = 50000;
var giatool4 = 10000;
var gianole5 = 500000;
var giatool5 = 100000;
var gianole6 = 5000000;
var giatool6 = 1000000;
//vp bang kc
var chuno = 0;
var giachuno = 50;
var sptool = 0;
var giasptool = 50;
var thuoctien = 0;
var giathuoctien = 400;
function oncl() {
    money += mpc;
    document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
}
setInterval(function () {
    money += mps;//add them tien moi 1s ne
    document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
}, 1000);

function muaNole1() {
    if (money >= gianole1) {
        money -= gianole1;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        nole1++;
        document.getElementById('soluongNole1').innerText = 'Nô lệ Hiếu Bùi: ' + nole1;
        gianole1 *= 2;
        document.getElementById('giaNole1').innerText = "Giá: " + gianole1 + 'VNĐ';
        mps += 1 * boostmps;
        document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaTool1() {
    if (money >= giatool1) {
        money -= giatool1;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        tool1++;
        document.getElementById('soluongTool1').innerText = 'Gậy đánh chó: ' + tool1;
        giatool1 *= 2;
        document.getElementById('giaTool1').innerText = 'Giá: ' + giatool1 + 'VNĐ';
        mpc += 1 * boostmpc;
        document.getElementById('mpc').innerText = 'Tiền mỗi click: ' + mpc;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaNole2() {
    if (money >= gianole2) {
        money -= gianole2;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        nole2++;
        document.getElementById('soluongNole2').innerText = 'Nô lệ Trung Bùi: ' + nole2;
        gianole2 *= 2;
        document.getElementById('giaNole2').innerText = "Giá: " + gianole2 + 'VNĐ';
        mps += 10 * boostmps;
        document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaTool2() {
    if (money >= giatool2) {
        money -= giatool2;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        tool2++;
        document.getElementById('soluongTool2').innerText = 'Gậy đánh chó: ' + tool2;
        giatool2 *= 2;
        document.getElementById('giaTool2').innerText = 'Giá: ' + giatool2 + 'VNĐ';
        mpc += 10 * boostmpc;
        document.getElementById('mpc').innerText = 'Tiền mỗi click: ' + mpc;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaNole3() {
    if (money >= gianole3) {
        money -= gianole3;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        nole3++;
        document.getElementById('soluongNole3').innerText = 'Nô lệ Vinh đần: ' + nole3;
        gianole3 *= 2;
        document.getElementById('giaNole3').innerText = "Giá: " + gianole3 + 'VNĐ';
        mps += 100 * boostmps;
        document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaTool3() {
    if (money >= giatool3) {
        money -= giatool3;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        tool3++;
        document.getElementById('soluongTool3').innerText = 'Kiếm cùn: ' + tool3;
        giatool3 *= 2;
        document.getElementById('giaTool3').innerText = 'Giá: ' + giatool3 + 'VNĐ';
        mpc += 100 * boostmpc;
        document.getElementById('mpc').innerText = 'Tiền mỗi click: ' + mpc;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaNole4() {
    if (money >= gianole4) {
        money -= gianole4;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        nole4++;
        document.getElementById('soluongNole4').innerText = 'Nô lệ Huy: ' + nole4;
        gianole4 *= 2;
        document.getElementById('giaNole4').innerText = "Giá: " + gianole4 + 'VNĐ';
        mps += 1000 * boostmps;
        document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaTool4() {
    if (money >= giatool4) {
        money -= giatool4;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        tool4++;
        document.getElementById('soluongTool4').innerText = 'Rìu cứu hỏa: ' + tool4;
        giatool4 *= 2;
        document.getElementById('giaTool4').innerText = 'Giá: ' + giatool4 + 'VNĐ';
        mpc += 1000 * boostmpc;
        document.getElementById('mpc').innerText = 'Tiền mỗi click: ' + mpc;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaNole5() {
    if (money >= gianole5) {
        money -= gianole5;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        nole5++;
        document.getElementById('soluongNole5').innerText = 'Nô lệ Khoa: ' + nole5;
        gianole5 *= 2;
        document.getElementById('giaNole5').innerText = "Giá: " + gianole5 + 'VNĐ';
        mps += 10000 * boostmps;
        document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaTool5() {
    if (money >= giatool5) {
        money -= giatool5;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        tool5++;
        document.getElementById('soluongTool5').innerText = 'Lightsaber: ' + tool5;
        giatool5 *= 2;
        document.getElementById('giaTool5').innerText = 'Giá: ' + giatool5 + 'VNĐ';
        mpc += 10000 * boostmpc;
        document.getElementById('mpc').innerText = 'Tiền mỗi click: ' + mpc;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaNole6() {
    if (money >= gianole6) {
        money -= gianole6;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        nole6++;
        document.getElementById('soluongNole6').innerText = 'Nô lệ Hào: ' + nole6;
        gianole6 *= 2;
        document.getElementById('giaNole6').innerText = "Giá: " + gianole6 + 'VNĐ';
        mps += 100000 * boostmps;
        document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaTool6() {
    if (money >= giatool6) {
        money -= giatool6;
        document.getElementById('money').innerText = "Tiền: " + money + 'VNĐ';
        tool6++;
        document.getElementById('soluongTool6').innerText = 'Kiếm thánh Excalibur: ' + tool6;
        giatool6 *= 2;
        document.getElementById('giaTool6').innerText = 'Giá: ' + giatool6 + 'VNĐ';
        mpc += 100000 *boostmpc ;
        document.getElementById('mpc').innerText = 'Tiền mỗi click: ' + mpc;
    }
    else {
        alert('Bạn không có đủ tiền!');
    }
}
function muaChuno() {
    if (chuno == 0) {
        if (kimcuong >= giachuno) {
            kimcuong -= giachuno;
            document.getElementById('kimcuong').innerText = 'Nạp thẻ (' + kimcuong + ')';
            chuno++;
            document.getElementById('soluongChuno').innerText = 'Minh chủ nô: ' + chuno;
            document.getElementById('giaChuno').innerText = 'Đã đạt số lượng tối đa!';
            boostmps *= 2;
            mps *= 2;
            document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
        }


        else {
            alert('Bạn không có đủ kim cương,có thể nạp ở nút nạp thẻ!');
        }
    }
    else {
        alert('Bạn chỉ có thể sở hữu 1 chủ nô');
    }
}
function muaSptool() {
    if (sptool == 0) {
        if (kimcuong >= giasptool) {
            kimcuong -= giasptool;
            document.getElementById('kimcuong').innerText = 'Nạp thẻ (' + kimcuong + ')';
            sptool++;
            document.getElementById('soluongSptool').innerText = 'Đá mài: ' + sptool;
            document.getElementById('giaSptool').innerText = 'Đã đạt số lượng tối đa!';
            boostmpc *= 2;
            mpc *= 2;
            document.getElementById('mpc').innerText = "Tiền mỗi click: " + mpc;
        }

        else {
            alert('Bạn không có đủ kim cương,có thể nạp ở nút nạp thẻ!');
        }
    }
    else {
        alert('Bạn chỉ có thể sở hữu 1 đá mài');
    }

}
function muaThuoc() {
    if (thuoctien == 0) {
        if (kimcuong >= giathuoctien) {
            kimcuong -= giathuoctien;
            document.getElementById('kimcuong').innerText = 'Nạp thẻ (' + kimcuong + ')';
            thuoctien++;
            document.getElementById('suluongThuoc').innerText = 'Tiên dược exilir: ' + thuoctien;
            document.getElementById('giaThuoc').innerText = 'Đã đạt số lượng tối đa!';
            mps *= 2;
            mpc *= 2;
            boostmps *= 2;
            boostmpc *= 2;
            document.getElementById('mps').innerText = "Tiền mỗi giây: " + mps;
            document.getElementById('mpc').innerText = "Tiền mỗi click: " + mpc;
        }
        else {
            alert('Bạn không có đủ kim cương,có thể nạp ở nút nạp thẻ!');
        }
    }
    else {
        alert('Bạn chỉ có thể sở hữu 1 lọ tiên dược');
    }
}