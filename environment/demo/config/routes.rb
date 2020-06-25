Rails.application.routes.draw do
   resources :users, only: [:new, :create]
   get 'login', to: 'sessions#new'
   post 'login', to: 'sessions#create'
   get 'welcome', to: 'sessions#welcome'
   get 'index', to: 'main#index'
   get 'signup', to: 'sessions#welcome'


  get 'main/signup'
  get 'sessions/welcome'
  get 'sessions/new'
  get 'main/index'
  get 'opinions/index'
  resources :opinions

  root 'main#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
