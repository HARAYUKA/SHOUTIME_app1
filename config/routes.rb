Rails.application.routes.draw do
  devise_for :users
  
  get 'diagnoses/index'
  root 'homes#index'

  resources :diagnoses, except: :index
  resources :diagnosis_results
  
end
