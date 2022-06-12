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

  // showCart();
  // push product
  var srcImgs = sessionStorage.CartSrcImgs.split(',');
  var nameProducts = sessionStorage.CartNameProducts.split(',');
  var sizeProducts = sessionStorage.CartSizeProducts.split(',');
  var priceProducts = sessionStorage.CartPriceProducts.split(',');
  var quantitys = sessionStorage.CartQuantitys.split(',');
  var sl = sessionStorage.CartSL;
  // showCart();
  var shopCartBox = document.querySelector('.list');
  var content = '';
  for(var i = 0; i < sl; i++) {
    content += '<div class="item"><div class="image"><img src="'+srcImgs[i]+'" alt="" /></div><div class="description cart"><span>'+nameProducts[i]+'</span></div><div class="product__describe-custom cart"><input class="product__describe-custom-reduced is-form" type="button" value="-"><input aria-label="quantity" class="product__describe-custom-input" max="100" min="1" name="" type="number" value="'+quantitys[i]+'"><input class="product__describe-custom-increase is-form" type="button" value="+"></div><div class="info"><div class="total-price"><h6 class="text-muted">'+priceProducts[i]+'</h6></div><div class="size">'+sizeProducts[i]+'</div></div></div>';
  }
  shopCartBox.innerHTML = content;


 