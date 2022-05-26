class Api::CartItemsController < ApplicationController
  # :create, :index, :show, :edit, :destroy
  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 401
    end
  end

  def index
    @cart_items = CartItem.where(shopper_id: params[:shopper_id])
    render :index
  end
  
  def show
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item
      render :show
    else
      render json: ['cart_item not found'], status: 404
    end
  end
  
  def update
    @cart_item = CartItem.find_by(id: params[:cartItem][:id])
    if @cart_item
      @cart_item.update(cart_item_params)
      render :show
    else
      render json: ['cart_item not updated'], status: 404
    end
  end

  def destroy
    if params["individual"] == "true" 
      # debugger
      cart_item = CartItem.find_by(id: params[:id])
      cart_item.destroy
    else
      cart_items = CartItem.where(shopper_id: params[:id])
      cart_items.each do |item|
        item.destroy
      end
    end
  end

  private
  def cart_item_params
    params.require(:cartItem).permit(:quantity, :product_id, :shopper_id, :size, :color, :delivery_type)
  end
end
 