
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
        if (x <= 11) d += 1
      }
      if(d >= 11){
        d -= 1;
        alert("Đã quá giới hạn mua hàng, không thể thêm sản phẩm!");
      }
      $this.attr('value', d).val(d)
    })
  })


 //CHỌN SIZE
const buttons = document.querySelectorAll(".button_size");
buttons.forEach(function(btn, index){
    btn.addEventListener("click", function(){
      document.querySelector(".button_size.active").classList.remove("active");
      this.classList.add("active");    
  })
})

// Ẩn/hiện no-product in cart
checkCart();
function checkCart() {
  var cartListProduct = document.getElementsByClassName('cart__box');
  var noProduct = document.querySelector('.no-product');
  if(cartListProduct.length == 0) {
    noProduct.style.display = 'flex';
  } else {noProduct.style.display = 'none';}
}

// Thêm product vào cart
var btnAdd = document.querySelector('.product__describe-choose--add');
btnAdd.onclick = function() {
  var cartListProduct = document.querySelector('.cart-list-product');
  var content = cartListProduct.innerHTML;
  var srcImg = document.getElementById('one').src;
  var nameProduct = document.querySelector('.product__describe-infor-name').querySelector('h1').innerText;
  var price = document.querySelector('.product__describe-infor-price--current').innerText;
  var numberProduct = document.querySelector('.product__describe-custom-input').value;
  content = '<div class="cart__box"><div class="cart__img"><img src="'+srcImg+'" alt=""></div><div class="cart__info"><div class="cart__title"><h6>'+nameProduct+'</h6></div><div class="cart__int text-muted"><div class="cart__number"><h6>'+numberProduct+'</h6></div><h6>x</h6><div class="cart__price"><h6>'+price+'</h6></div></div></div></div>' + content;
  cartListProduct.innerHTML = content;
  checkCart();
}








