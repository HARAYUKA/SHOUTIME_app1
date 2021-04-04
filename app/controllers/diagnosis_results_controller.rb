class DiagnosisResultsController < ApplicationController
  def index
    @diagnosis_results = DiagnosisResult.all
  end

  def new
    @diagnosis_result = DiagnosisResult.new
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
