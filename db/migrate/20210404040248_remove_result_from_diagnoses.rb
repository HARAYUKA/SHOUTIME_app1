class RemoveResultFromDiagnoses < ActiveRecord::Migration[5.2]
  def change
    remove_column :diagnoses, :result_text, :string
    remove_column :diagnoses, :result_pictute, :string
  end
end
