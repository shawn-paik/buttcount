Rails.application.routes.draw do
 
  resources :butts
  resources :users
  resources :pages

   devise_for :users, only: [:index, :show]
  # get '/pages/', :to => 'pages#home'
  
  root to: "pages#home"

  get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	get '/logout' => 'sessions#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
