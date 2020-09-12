$(function() {
  $('.error').hide();
  /*$('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });
  */
 $(".button").click(function() {
    // validate and process form
    // first hide any error messages
    $('.error').hide();

    var name = $("input#name").val();
    if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
    var phone = $("input#phone").val();
    if (phone == "") {
      $("label#phone_error").show();
      $("input#phone").focus();
      return false;
    }

    var dataString = 'name='+ name + '&phone=' + phone;
    //alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "https://panorama30.ru/wp-content/themes/panorama/bin/process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Ваша заявка отправлена!</h2>")
        .append("<p>Наш администратор свяжется с Вами<br> в ближайшее время.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='https://panorama30.ru/wp-content/themes/panorama/img/check.png' />");
        });
      }
    });
    return false;
  });


  $(".form_btn").click(function(evt) {
    var phone = document.querySelector('#tel');
    var whats = document.querySelector('#whats');
    var vk = document.querySelector('#vk');
    var inst = document.querySelector('#inst');

    if (phone.value || whats.value || vk.value || inst.value) {
  		// validate and process form
  		// first hide any error messages
      $('.error').hide();

      if ($('#solo').is(':checked')) { var solo = 'да'; }
      if ($('#double').is(':checked')) { var double = 'да'; }
      if ($('#triple').is(':checked')) { var triple = 'да'; }
      if ($('#tripleWithTwoStvorki').is(':checked')) { var tripleWithTwoStvorki = 'да'; }
      if ($('#four').is(':checked')) { var four = 'да'; }
      if ($('#balcony').is(':checked')) { var balcony = 'да'; }
      if ($('#balconyWithStvorki').is(':checked')) { var balconyWithStvorki = 'да'; }

      var material = $("select#material").val();
      var profile = $("select#profile").val();
      var glass = $("select#glass").val();
      var color = $("select#color").val();
      var wood = $("select#wood").val();
      var woodProfile = $("select#woodProfile").val();
      var alProfile = $("select#alProfile").val();
      var alColor = $("select#alColor").val();

      if ($('#otliv').is(':checked')) { var otliv = 'да'; }
      if ($('#otkos').is(':checked')) { var otkos = 'да'; }
      if ($('#setka').is(':checked')) { var setka = 'да'; }
      if ($('#podokonik').is(':checked')) { var podokonik = 'да'; }

      var montage = $("select#montage").val();
      var size = $("textarea#size").val();
      var communication = $("select#communication").val();

      var tel = $("input#tel").val();
      var whats = $("input#whats").val();
      var vk = $("input#vk").val();
      var inst = $("input#inst").val();

      var dataString = 'solo='+ solo + '&double=' + double + '&triple=' + triple + '&tripleWithTwoStvorki=' + tripleWithTwoStvorki
      + '&four=' + four + '&balcony=' + balcony + '&balconyWithStvorki=' + balconyWithStvorki

      + '&material=' + material + '&profile=' + profile + '&glass=' + glass + '&color=' + color + '&wood=' + wood
      + '&woodProfile=' + woodProfile + '&alProfile=' + alProfile + '&alColor=' + alColor

      + '&otliv=' + otliv + '&otkos=' + otkos + '&setka=' + setka + '&podokonik=' + podokonik

      + '&montage=' + montage + '&size=' + size + '&communication=' + communication + '&tel=' + tel + '&whats=' + whats + '&vk=' + vk
      + '&inst=' + inst;
  		//alert (dataString);return false;



  		$.ajax({
        type: "POST",
        url: "https://panorama30.ru/wp-content/themes/panorama/bin/form-calc.php",
        data: dataString,
        success: function() {
          $('#price_form').html("<div id='message'></div>");
          $('#message').html("<h2>Ваша заявка отправлена!</h2>")
          .append("<p>Наш администратор свяжется с Вами<br> в ближайшее время.</p>")
          .hide()
          .fadeIn(1500, function() {
            $('#message').append("<img id='checkmark' src='https://panorama30.ru/wp-content/themes/panorama/img/check.png' />");
          });
        }
      });

      return false;
    } else {
      evt.preventDefault();
      phone.classList.add('slider-price3__input--error');
      vk.classList.add('slider-price3__input--error');
      whats.classList.add('slider-price3__input--error');
      inst.classList.add('slider-price3__input--error');
    }
  });






});
runOnLoad(function(){
  /* $("input#name").select().focus();*/
});
