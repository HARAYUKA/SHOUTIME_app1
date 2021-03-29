$(function(){
  //一度結果を非表示にする
  $(".result").hide();
  //ボタンがクリックされた時
  $("button").on("click", function(){
    //一度結果を非表示にする
    $(".result").hide();
    //問題数を取得
    var qNum = $("ul li").length;
    if( $("ul li input:checked").length < qNum ){
      //全てチェックしていなかったらアラートを出す
      alert("未回答の問題があります");
    } 
    else {
        //チェックされているinputの数を取得
        var typeANum = $(".typeA:checked").length,
            typeBNum = $(".typeB:checked").length,
            typeCNum = $(".typeC:checked").length,
            typeDNum = $(".typeD:checked").length,
            typeENum = $(".typeD:checked").length;
        if( typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeDNum && typeANum >= typeENum) {
            $(".ResultA").fadeIn();
        } else if( typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeDNum && typeBNum >= typeENum) {
            $(".ResultB").fadeIn();
        } else if( typeCNum >= typeANum && typeCNum >= typeBNum && typeCNum >= typeDNum && typeCNum >= typeENum) {
            $(".ResultC").fadeIn();
        } else if( typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeANum && typeDNum >= typeENum) {
            $(".ResultD").fadeIn();
        } else if( typeENum >= typeBNum && typeENum >= typeCNum && typeENum >= typeANum && typeENum >= typeDNum) {
            $(".ResultE").fadeIn();
      }
    }
  });
});