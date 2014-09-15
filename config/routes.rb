Rails.application.routes.draw do
  root to: "root#root" 
  
  namespace :api do
    resources :posts, only: [:create, :destroy, :index, :show, :update]
  end
end
