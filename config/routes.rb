Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults:{format: :json} do 
    resource :session, only:[:create, :destroy]
    resources :users, only:[:create]
    resources :products, only:[:index, :show]
    resources :categories, only:[:index, :show]
    resources :cart_items
    resources :reviews
  end
end
 