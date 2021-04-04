module DiagnosisResultsHelper

  def result_status(result)
    return "【左上に目を動かすのが苦手】" if result.result_type == "左上"
    return "【右上に目を動かすのが苦手】" if result.result_type == "右上"
    return "【左側に目を動かすのが苦手】" if result.result_type == "左側"
    return "【右側に目を動かすのが苦手】" if result.result_type == "右側"
    return "【左下に目を動かすのが苦手】" if result.result_type == "左下"
    return "【右下に目を動かすのが苦手】" if result.result_type == "右下"
    return "【近くを見たり、遠くを見るのが苦手】" if result.result_type == "輻輳開散"
  end
end
