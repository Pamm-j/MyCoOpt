class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :full_name)
  end
end
