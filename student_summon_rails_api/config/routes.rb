Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
	  post '/login', to: 'sessions#create'
	  scope '/users/:id' do
	  	# get '/students', to: 'students#index'
	  end
  	get '/calls', to: 'calls#index'
	  patch '/students', to: 'students#update'

	  resources :users, only: [:create, :show, :update, :destroy]
	  resources :students, only: [:index, :create, :show, :destroy]
	  resources :calls, only: [:index, :create, :show, :update, :destroy]
	end

end
