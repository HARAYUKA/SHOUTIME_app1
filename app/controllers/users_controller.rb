class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user
  before_action :admin_user

  def show
  end
end
