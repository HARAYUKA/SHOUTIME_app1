module DiagnosisResultsHelper

  def result_status(result)
    return "【左上に目を動かすのが苦手】" if result.result_type == "ResultA"
    return "【右上に目を動かすのが苦手】" if result.result_type == "ResultB"
    return "【左側に目を動かすのが苦手】" if result.result_type == "ResultC"
    return "【右側に目を動かすのが苦手】" if result.result_type == "ResultD"
    return "【左下に目を動かすのが苦手】" if result.result_type == "ResultE"
    return "【右下に目を動かすのが苦手】" if result.result_type == "ResultF"
    return "【近くを見たり、遠くを見るのが苦手】" if result.result_type == "ResultG"
  end
end
