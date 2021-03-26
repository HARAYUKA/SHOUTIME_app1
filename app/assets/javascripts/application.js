// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(function(){
  $radio = $(':radio');
  //$radio.click(check);//チェックと連動させる
  $('#check').click(check);//診断ボタン押させる
  
  function check(){
      var total = 0;
      var result = '';
      
      $radio.filter(':checked').map(function(){
          total += Number(this.value);
      });
      
      if (total > 6) {
          result = 'ｷﾀ━(ﾟ∀ﾟ)━!';
      } else if( total > 3 ) {
          result = '(・∀・)ｲｲ!';
      } else if( total > 0) {
          result = '( ´_ゝ｀)';
      } else {
          result = '何も選択されていません';
      }
          
      $('#result').html(result);
  }
});