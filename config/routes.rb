Rails.application.routes.draw do
 
  resources :butts
  resources :users
  resources :pages
  get '/pages/signout' => 'pages#destroy'
   devise_for :users, only: [:index, :show]
  # get '/pages/', :to => 'pages#home'
  
  root to: "pages#home"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
