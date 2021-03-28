//かんたん診断
$(function(){
 $radio = $(':radio');
  $radio.click(check);//チェックと連動させる
 $('#check').click(check);//診断ボタン押させる
  
 function check(){
     var total = 0;
     var result = '';
      
     $radio.filter(':checked').map(function(){
         total += Number(this.value);
     });
      
     if (total > 6) {
         result = '〇あなたはもしかしたらこんな「目」かも';
     } else if( total > 3 ) {
         result = '〇あなたはもしかしたらこんな「目」かも';
     } else if( total > 0) {
         result = '〇あなたはもしかしたらこんな「目」かも';
     } else {
         result = '何も選択されていません';
     }
          
     $('#result').html(result);
 }
});