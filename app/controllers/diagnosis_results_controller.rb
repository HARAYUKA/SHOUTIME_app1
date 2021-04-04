class DiagnosisResultsController < ApplicationController
  before_action :set_diagnosis_result, only: [:edit, :update, :destroy]

  def index
    @diagnosis_results = DiagnosisResult.all
  end

  def new
    @diagnosis_result = DiagnosisResult.new
  end

  def create
    @diagnosis_result = DiagnosisResult.new(diagnosis_result_params)
    if @diagnosis_result.save
      flash[:success] = "診断結果を新規作成しました。"
      redirect_to diagnosis_results_url
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @diagnosis_result.update_attributes(diagnosis_result_params)
      flash[:success] = "診断結果を修正しました。"
      redirect_to diagnosis_results_url
    else
      render :edit
    end
  end

  def destroy
    @diagnosis_result.destroy
    flash[:danger] = "#{@diagnosis_result.result_type}の質問を削除しました"
    redirect_to diagnosis_results_url
  end

  private

    def set_diagnosis_result
      @diagnosis_result = DiagnosisResult.find(params[:id])
    end

    def diagnosis_result_params
      params.require(:diagnosis_result).permit(:result_type, :result_text, :result_picture)
    end
end
