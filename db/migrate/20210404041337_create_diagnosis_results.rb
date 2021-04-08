class CreateDiagnosisResults < ActiveRecord::Migration[5.2]
  def change
    create_table :diagnosis_results do |t|
      t.string :result_text
      t.string :result_pictute
      t.string :result_type

      t.timestamps
    end
  end
end
