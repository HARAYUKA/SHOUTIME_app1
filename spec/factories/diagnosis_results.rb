FactoryBot.define do
  factory :diagnosis_result do
    sequence(:result_text) { |n| "サンプル#{n}" }
    result_picture { File.new("#{Rails.root}/spec/fixtures/test.jpg") }
    result_type "右上"   
  end
end
