$(function(){
  //一度結果を非表示にする
  $(".Result_recommend,.result, .results").hide();
  //ボタンがクリックされた時
  $("button").on("click", function(){
    //一度結果を非表示にする
    $(".Result_recommend,.result, .results").hide();
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
        var eyes = [
            { type: "A", Num: typeANum, result: ".左上（結果）" },
            { type: "B", Num: typeBNum, result: ".右上（結果）" },
            { type: "C", Num: typeCNum, result: ".左側（結果）" },
            { type: "D", Num: typeDNum, result: ".右側（結果）" },
            { type: "E", Num: typeENum, result: ".左下（結果）" },
            { type: "F", Num: typeFNum, result: ".右下（結果）" },
            { type: "G", Num: typeGNum, result: ".輻輳開散（結果）" },
          ];
        
        var filtered = $.grep(eyes,
          function(element, index) {
            
            return (element.Num >= max);
          }
        );
      
        let selector = filtered.map(eyes => eyes.result).join(',');
        $(`.Result_recommend,${selector},.results`).fadeIn();
        var i = $("button").index(this)
        var p = $(".Result_recommend").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p },　900, 'swing');
        return false;
    }
  });
});