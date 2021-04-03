class AddQuestionTypeToDiagnoses < ActiveRecord::Migration[5.2]
  def change
    add_column :diagnoses, :question_type, :string
  end
end
