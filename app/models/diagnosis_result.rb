class DiagnosisResult < ApplicationRecord
  mount_uploader :result_picture, ResultPictureUploader
end
