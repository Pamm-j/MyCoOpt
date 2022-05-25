class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def index
    @reviews = Review.where(product_id: params[:product_id])
    render :index
  end
  
  def show
    @review = Review.find_by(id: params[:id])
    if @review
      render :show
    else
      render json: ['review not found'], status: 404
    end
  end
  
  def update
    @review = Review.find_by(id: params[:review][:id])
    if @review
      @review.update(:title => review_params[:title])
      @review.update(:body => review_params[:body])
      @review.update(:rating => review_params[:rating])
      render :show
    else
      render json: ['review not updated'], status: 404
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:reviewer_id, :product_id, :title, :body, :rating)
  end
end
