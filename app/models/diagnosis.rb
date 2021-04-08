class Diagnosis < ApplicationRecord

  validates :question_number, presence: true, uniqueness: true
  validates :question_content, presence: true, uniqueness: true, length: { maximum: 50 }
  validates :question_type, presence:true
end
