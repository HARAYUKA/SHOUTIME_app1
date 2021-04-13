class DiagnosesController < ApplicationController
  protect_from_forgery except: :index
  before_action :authenticate_user!, except: :index
  before_action :admin_user, except: :index
  before_action :set_diagnosis, only: [:edit, :update, :destroy]
  
  def index
    @diagnoses = Diagnosis.all.order(:question_number)
    @diagnosis_results = DiagnosisResult.all
  end

  def show
    @diagnoses = Diagnosis.all.order(:question_number)
  end

  def new
    @diagnosis = Diagnosis.new
  end

  def create
    @diagnosis = Diagnosis.new(diagnosis_params)
    if @diagnosis.save
      flash[:success] = "質問を新規作成しました。"
      redirect_to @diagnosis
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @diagnosis.update_attributes(diagnosis_params)
      flash[:success] = "質問内容を修正しました。"
      redirect_to @diagnosis
    else
      render :edit
    end
  end

  def destroy
    @diagnosis.destroy
    flash[:danger] = "#{@diagnosis.question_number}の質問を削除しました"
    redirect_to diagnosis_url(@diagnosis)
  end

  private

    def set_diagnosis
      @diagnosis = Diagnosis.find(params[:id])
    end

    def diagnosis_params
      params.require(:diagnosis).permit(:question_number, :question_content, :question_type)
    end
  
end
