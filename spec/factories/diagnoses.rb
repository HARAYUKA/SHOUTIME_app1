FactoryBot.define do
  factory :diagnosis do
    sequence(:question_number) { |n| n+36 }
    sequence(:question_content) { |n| "テスト#{n}" }
    question_type "右上"
  end
end
