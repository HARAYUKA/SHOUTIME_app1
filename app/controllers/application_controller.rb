class ApplicationController < ActionController::Base

  # ログイン後の画面遷移
  def after_sign_in_path_for(resource)
    user_url(resource)
  end

  # ログイン後の画面遷移
  def after_sign_out_path_for(resource)
    root_url
  end
end
