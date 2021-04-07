class CreateDiagnoses < ActiveRecord::Migration[5.2]
  def change
    create_table :diagnoses do |t|
      t.integer :question_number
      t.string :question_content
      t.string :result_text
      t.string :result_pictute

      t.timestamps
    end
  end
end
