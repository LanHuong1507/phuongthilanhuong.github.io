$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   // Viết code vào
   $("#btnDK").click(function(){
       $("#myModal").modal();
   });
   function kiemTraMa() {
    var i=1;
     var mauKT=/^[0-9]{10}$/;
     if ($("#Ma").val()=="") {
       $("#tbMa").html("Không Được Để Trống");
       return false;
   }
   if (!mauKT.test($("#Ma").val())) {
       $("#tbMa").html("Phải là 10 chữ số");
       return true;
   }
   $("#tbMa").html("*");
   return true;
   }
   $("#Ma").blur(kiemTraMa);
   function kiemTraTen() {
       var mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
       if ($("#Ten").val()=="") {
           $("#tbTen").html("Không Được Để Trống");
           return false;
       }
       if (!mauKT.test($("#Ten").val())) {
           $("#tbTen").html("Mỗi ký tự đầu viết hoa không sử dụng số");
           return true;
       }
       $("#tbTen").html("*");
       return true;
   }
   $("#Ten").blur(kiemTraTen);
   function kiemTraNgay() {
    if ($("#Ngay").val()=="") {
        $("#tbNgay").html("Không được để trống");
        return false;
    }
    var today=new Date();
    var ntt=new Date($("#NTT").val());
    today=today.setDate(today.getDate()+7);
    if(today>ntt){
        $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
        return false;
    }
    $("#tbNTT").html("*");
    return true;
}
$("#Ngay").blur(kiemTraNgay);
   function kiemTraEmail() {
    var mauKT=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@iuh.edu.vn$/;
    if ($("#Email").val()=="") {
        $("#tbEmail").html("Không được để trống");
        return false;
    }
    if (!mauKT.test($("#Email").val())) {
        $("#tbEmail").html("Theo dang xxxxxx@iuh.edu.vn");
        return true;
    }
    $("#tbEmail").html("*");
       return true;
   }
   $("#Email").blur(kiemTraEmail);
   function kiemTraSDT() {
       var mauKT=/^0\d{3}-\d{3}-\d{3}$/;
       if ($("#SDT").val()=="") {
        $("#tbSDT").html("Khong de trong");
        return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dang 0XXX-XXX-XXX trong X la so");
            return true;
        }
        $("#tbSDT").html("*");
       return true;
   }
   $("#SDT").blur(kiemTraSDT);
   $("#Save").click(function(){
       if(kiemTraTen()==true&&kiemTraMa()==true&&kiemTraSDT()==true&&kiemTraNgay()==true&&kiemTraEmail()==true){
       row="<tr>";
       row+="<th>"+(i++)+"</th>";
       row+="<th>"+$("#Ma").val()+"</th>";
       row+="<th>"+$("#Ten").val()+"</th>";
       row+="<th>"+$("#Ngay").val()+"</th>";
       row+="<th>"+$("#Email").val()+"</th>";
       row+="<th>"+$("#SDT").val()+"</th>";
       $("#danhSach").append(row);
       $("#myModal").modal("hide");
       }
   })
})