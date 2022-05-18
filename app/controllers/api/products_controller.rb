class Api::ProductsController < ApplicationController
  def index
    @products = Product.where(category_id: params[:categoryId])
    if @products
      render :index
    else
      render json: ['category not found'], status: 404
    end
  end
  
  def show
    @product = Product.find_by(id: params[:id])
    if @product
      render :show
    else
      render json: ['product not found'], status: 404
    end
  end
end
