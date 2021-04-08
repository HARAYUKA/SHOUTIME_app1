require 'rails_helper'

RSpec.describe DiagnosisResult, type: :model do
  
  it "診断結果のテキスト、診断結果の絵、診断結果の種類があれば有効" do
    expect(FactoryBot.build(:diagnosis_result)).to be_valid
  end

  it "診断結果のテキストがなければ無効" do
    diagnosis_result = FactoryBot.build(:diagnosis_result, result_text: nil)
    diagnosis_result.valid?
    expect(diagnosis_result.errors[:result_text]).to include("を入力してください")
  end

  it "診断結果の絵がなければ無効" do
    diagnosis_result = FactoryBot.build(:diagnosis_result, result_picture: nil)
    diagnosis_result.valid?
    expect(diagnosis_result.errors[:result_picture]).to include("を入力してください")
  end

  it "診断結果の種類がなければ無効" do
    diagnosis_result = FactoryBot.build(:diagnosis_result, result_type: nil)
    diagnosis_result.valid?
    expect(diagnosis_result.errors[:result_type]).to include("を入力してください")
  end
end
