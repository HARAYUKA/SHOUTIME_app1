require 'rails_helper'

RSpec.describe Diagnosis, type: :model do

  it "有効なファクトリを持つ" do
    expect(FactoryBot.build(:diagnosis)).to be_valid
  end
  
  it "質問番号、質問内容、質問の種類があれば有効" do
    diagnosis = Diagnosis.new(
      question_number: 1,
      question_content: "あいうえお",
      question_type: "右上"
    )
    expect(diagnosis).to be_valid
  end
  
  it "質問番号がなければ無効" do
    diagnosis = FactoryBot.build(:diagnosis, question_number: nil)
    diagnosis.valid?
    expect(diagnosis.errors[:question_number]).to include("を入力してください")
  end
  
  
  it "質問内容がなければ無効" do
    diagnosis = FactoryBot.build(:diagnosis, question_content: nil)
    diagnosis.valid?
    expect(diagnosis.errors[:question_content]).to include("を入力してください")
  end
  
  it "質問の種類がなければ無効" do
    diagnosis = FactoryBot.build(:diagnosis, question_type: nil)
    diagnosis.valid?
    expect(diagnosis.errors[:question_type]).to include("を入力してください")
  end
  
  it "重複した質問番号は無効" do
    FactoryBot.create(:diagnosis, question_number: 1)
    diagnosis = FactoryBot.build(:diagnosis, question_number: 1)
    diagnosis.valid?
    expect(diagnosis.errors[:question_number]).to include("はすでに存在します")
  end
  
  it "重複した質問内容は無効" do
    FactoryBot.create(:diagnosis, question_content: 1)
    diagnosis = FactoryBot.build(:diagnosis, question_content: 1)
    diagnosis.valid?
    expect(diagnosis.errors[:question_content]).to include("はすでに存在します")
  end

  it "質問内容は５０文字以内" do
    diagnosis = FactoryBot.build(:diagnosis, question_content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    diagnosis.valid?
    expect(diagnosis.errors[:question_content]).to include("は50文字以内で入力してください")
  end
end
