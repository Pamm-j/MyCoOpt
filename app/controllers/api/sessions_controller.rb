class Api::SessionsController < ApplicationController
  def create
    @user = User.findbycredentials(params[:user][:email], params[:user][:password])
    if @user.nil? 
      render json: ['you are a liar', 'you are an idiot'], status: 401
    else 
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout!
  end

end
