class RenameResultPictuteColumnToDiagnosisResults < ActiveRecord::Migration[5.2]
  def change
    rename_column :diagnosis_results, :result_pictute, :result_picture
  end
end
