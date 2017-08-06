Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  scope '/users/:id' do
  	get '/students', to: 'students#index'
  	get '/calls', to: 'calls#index'
  end
  resources :users, only: [:create, :show, :update, :destroy]
  resources :students, only: [:create, :show, :update, :destroy]
  resources :calls,


end
