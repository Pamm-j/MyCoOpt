class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
  end
  
  def show
    @category = Category.find_by(id: params[:id])
    if @category
      render :show
    else
      render json: ['category not found'], status: 404
    end
  end
end
