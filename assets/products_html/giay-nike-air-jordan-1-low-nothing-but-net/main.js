
//THAY ĐỔI HÌNH ẢNH SẢN PHẨM

function changeImage(id){
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imagePath);
}

//TĂNG GIẢM SỐ LƯỢNG SẢN PHẨM (JQUERY)

$('input.product__describe-custom-input').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    }
      else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('product__describe-custom-reduced')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('product__describe-custom-increase')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  })

 


// var input = document.getElementById('msgbtn');
//     input.onclick = function(){
//         showMsg1();
//         showMsg2();
//     };
     
//     function showMsg1(){
//         alert('Lần gọi thứ nhất');
//     }
     
//     function showMsg2(){
//         alert('Lần gọi thứ hai');
//     }

// function reducedItems(){
//     let x = document.getElementsByClassName("reduced");
//     for (let i = 0; i < x.length; i++) {
//         x[i].onclick = function() {
//             this.style.color = "red";
//         }
//     }
 
// }




