Rails.application.routes.draw do
  get 'static/Pages'
  root to: 'static_pages#root'
end
