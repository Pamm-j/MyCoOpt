class Api::ProductsController < ApplicationController
  def index
    term = params[:searchTerm].downcase
    @products = Product.where("lower(name) LIKE '%#{term}%' OR lower(description) LIKE '%#{term}%'")
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
 