class DiagnosesController < ApplicationController
  protect_from_forgery except: :index
  
  def index
    @diagnoses = Diagnosis.all
  end

  def show
    @diagnoses = Diagnosis.all
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
end
