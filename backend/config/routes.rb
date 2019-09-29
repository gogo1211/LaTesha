require 'api_constraints.rb'

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope path: :api, defaults: { format: :json }  do
    scope path: :v1 do
      post   'auth/login'          => 'auth#create'
      resources :contacts
    end
  end
end
