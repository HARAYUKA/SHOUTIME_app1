Rails.application.routes.draw do
  get 'diagnoses/index'
  root 'homes#index'

  resources :diagnoses, except: :index
  resources :diagnosis_results
  
end
