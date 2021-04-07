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
      alert("未回答の質問があります");
    } 
    else {
        //チェックされているinputの数を取得
        var typeANum = $(".typeA:checked").length,
            typeBNum = $(".typeB:checked").length,
            typeCNum = $(".typeC:checked").length,
            typeDNum = $(".typeD:checked").length,
            typeENum = $(".typeE:checked").length;
            typeFNum = $(".typeF:checked").length;
            typeGNum = $(".typeG:checked").length;
        if( typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeDNum && typeANum >= typeENum && typeANum >= typeFNum && typeANum >= typeGNum) {
            $(".ResultA").fadeIn();
        } else if( typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeDNum && typeBNum >= typeENum && typeBNum >= typeFNum && typeBNum >= typeGNum) {
            $(".ResultB").fadeIn();
        } else if( typeCNum >= typeANum && typeCNum >= typeBNum && typeCNum >= typeDNum && typeCNum >= typeENum && typeCNum >= typeFNum && typeCNum >= typeGNum) {
            $(".ResultC").fadeIn();
        } else if( typeDNum >= typeANum && typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeENum && typeDNum >= typeFNum && typeDNum >= typeGNum) {
            $(".ResultD").fadeIn();
        } else if( typeENum >= typeANum && typeENum >= typeBNum && typeENum >= typeCNum && typeENum >= typeDNum && typeENum >= typeFNum && typeENum >= typeGNum) {
            $(".ResultE").fadeIn();
        } else if( typeFNum >= typeANum && typeFNum >= typeBNum && typeFNum >= typeCNum && typeFNum >= typeDNum && typeFNum >= typeENum && typeFNum >= typeGNum) {
            $(".ResultF").fadeIn();
        } else if( typeGNum >= typeANum && typeGNum >= typeBNum && typeGNum >= typeCNum && typeGNum >= typeDNum && typeGNum >= typeENum && typeGNum >= typeFNum) {
            $(".ResultG").fadeIn();
      }
    }
  });
});