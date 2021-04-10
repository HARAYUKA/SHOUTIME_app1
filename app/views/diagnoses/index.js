$(function(){
  //一度結果を非表示にする
  $(".result").hide();
  //ボタンがクリックされた時
  $("button").on("click", function(){
    //一度結果を非表示にする
    $(".result").hide();
    //問題数を取得(layouts/_header.html.erbのul liも含まれる)
    var qNum = $("li").length - 2; //「-2」は_header.html.erbのul liの数
    if( $("li input:checked").length < qNum ){
      //全てチェックしていなかったらアラートを出す
      alert("未回答の質問があります");
    } 
    else {
        //チェックされているinputの数を取得
        var typeANum = $(".左上:checked").length,
            typeBNum = $(".右上:checked").length,
            typeCNum = $(".左側:checked").length,
            typeDNum = $(".右側:checked").length,
            typeENum = $(".左下:checked").length,
            typeFNum = $(".右下:checked").length,
            typeGNum = $(".輻輳開散:checked").length;
        if( typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeDNum && typeANum >= typeENum && typeANum >= typeFNum && typeANum >= typeGNum) {
            $(".左上（結果）").fadeIn();
        } else if( typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeDNum && typeBNum >= typeENum && typeBNum >= typeFNum && typeBNum >= typeGNum) {
            $(".右上（結果）").fadeIn();
        } else if( typeCNum >= typeANum && typeCNum >= typeBNum && typeCNum >= typeDNum && typeCNum >= typeENum && typeCNum >= typeFNum && typeCNum >= typeGNum) {
            $(".左側（結果）").fadeIn();
        } else if( typeDNum >= typeANum && typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeENum && typeDNum >= typeFNum && typeDNum >= typeGNum) {
            $(".右側（結果）").fadeIn();
        } else if( typeENum >= typeANum && typeENum >= typeBNum && typeENum >= typeCNum && typeENum >= typeDNum && typeENum >= typeFNum && typeENum >= typeGNum) {
            $(".左下（結果）").fadeIn();
        } else if( typeFNum >= typeANum && typeFNum >= typeBNum && typeFNum >= typeCNum && typeFNum >= typeDNum && typeFNum >= typeENum && typeFNum >= typeGNum) {
            $(".右下（結果）").fadeIn();
        } else if( typeGNum >= typeANum && typeGNum >= typeBNum && typeGNum >= typeCNum && typeGNum >= typeDNum && typeGNum >= typeENum && typeGNum >= typeFNum) {
            $(".輻輳開散（結果）").fadeIn();
      }
    }
  });
});