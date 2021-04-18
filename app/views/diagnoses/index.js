$(function(){
  //一度結果を非表示にする
  $(".result, .results").hide();
  //ボタンがクリックされた時
  $("button").on("click", function(){
    //一度結果を非表示にする
    $(".result, .results").hide();
    //問題数を取得
    var qNum = $("ul.questions li").length;
    if( $("ul.questions li input:checked").length < qNum ){
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
        var a = [typeANum, typeBNum, typeCNum, typeDNum, typeENum, typeFNum, typeGNum];
        var max = Math.max.apply(null, a);
        console.log(max);
        if( typeANum > typeBNum && typeANum > typeCNum && typeANum > typeDNum && typeANum > typeENum && typeANum > typeFNum && typeANum > typeGNum) {
            $(".左上（結果）,.results").fadeIn();
        } else if( typeBNum > typeANum && typeBNum > typeCNum && typeBNum > typeDNum && typeBNum > typeENum && typeBNum > typeFNum && typeBNum > typeGNum) {
            $(".右上（結果）,.results").fadeIn();
        } else if( typeCNum > typeANum && typeCNum > typeBNum && typeCNum > typeDNum && typeCNum > typeENum && typeCNum > typeFNum && typeCNum > typeGNum) {
            $(".左側（結果）,.results").fadeIn();
        } else if( typeDNum > typeANum && typeDNum > typeBNum && typeDNum > typeCNum && typeDNum > typeENum && typeDNum > typeFNum && typeDNum > typeGNum) {
            $(".右側（結果）,.results").fadeIn();
        } else if( typeENum > typeANum && typeENum > typeBNum && typeENum > typeCNum && typeENum > typeDNum && typeENum > typeFNum && typeENum > typeGNum) {
            $(".左下（結果）,.results").fadeIn();
        } else if( typeFNum > typeANum && typeFNum > typeBNum && typeFNum > typeCNum && typeFNum > typeDNum && typeFNum > typeENum && typeFNum > typeGNum) {
            $(".右下（結果）,.results").fadeIn();
        } else if( typeGNum > typeANum && typeGNum > typeBNum && typeGNum > typeCNum && typeGNum > typeDNum && typeGNum > typeENum && typeGNum > typeFNum) {
            $(".輻輳開散（結果）,.results").fadeIn();
        } else if( typeANum == typeBNum && typeANum == typeCNum && typeANum == typeDNum && typeANum == typeENum && typeANum == typeFNum && typeANum == typeGNum) {
            $(".左上（結果）,.右上（結果）,.左側（結果）,.右側（結果）,.左下（結果）,.右下（結果）,.輻輳開散（結果）,.results").fadeIn();
        } else if( typeANum < typeBNum && typeBNum == typeCNum && typeBNum == typeDNum && typeBNum == typeENum && typeBNum == typeFNum && typeBNum == typeGNum) {
            $(".右上（結果）,.左側（結果）,.右側（結果）,.左下（結果）,.右下（結果）,.輻輳開散（結果）,.results").fadeIn();
      }
    }
  });
});