class DiagnosisResult < ApplicationRecord
  mount_uploader :result_picture, ResultPictureUploader

  validates :result_text, presence: true
  validates :result_picture, presence: true
  validates :result_type, presence: true
end
