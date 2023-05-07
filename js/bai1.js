/**
 * input: diemChuan, khuVuc, doiTuong, diem1, diem2, diem3
 * 
 * step:
 *  + tính điểm khuvuc
 *  + tính điểm đối tượng
 *  + lập công thức: total=diem1+diem2+diem3+khuVuc+doiTuong;
 *  + so sánh:
 *      diemChuan>total: rớt
 *      diemChuan<=total: đậu
 * 
 * output:
 */


function main() {
    var diemChuan = getELE("diemChuan-b1").value;
    var khuVuc = getELE("khuVuc-b1").value;
    var doiTuong = getELE("doiTuong-b1").value;
    var diem1 = getELE("diem1-b1").value;
    var diem2 = getELE("diem2-b1").value;
    var diem3 = getELE("diem3-b1").value;
    var total = Number(diem1) + Number(diem2) + Number(diem3) + Number(khuVuc) + Number(doiTuong);

    //ràng buộc giá trị
    if (diemChuan < 0 || diem1 < 0 || diem2 < 0 || diem3 < 0) {
        alert("Hãy nhập số điểm lớn hơn 0");
        return 0;
    }

    //so sánh và đưa ra kết quả
    if (total >= diemChuan) {
        getELE("result-b1").innerHTML = "Bạn đã đậu; " + "Tổng điểm: " + total;
    } else {
        getELE("result-b1").innerHTML = "Bạn đã rớt; " + "Tổng điểm: " + total;
    }
}
getELE("btnCalc-b1").onclick = main;

function getELE(id) {
    return document.getElementById(id);
}
