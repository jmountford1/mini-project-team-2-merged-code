Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  #Test route
  post '/test', to: 'users#test'

  #Routes for authentication
  post '/login', to: 'users#login'
  post '/logout', to: 'users#logout'
  post '/create', to: 'users#create'

  
  #Routes for handling TODO items
  post '/create-todo', to: 'todos#create'
  post '/delete-todo', to: 'todos#destroy'
  post '/update-todo', to: 'todos#update'
  post '/query-todos', to: 'todos#search'

end
