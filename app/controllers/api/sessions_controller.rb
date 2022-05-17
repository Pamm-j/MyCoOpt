class Api::SessionsController < ApplicationController
  def create
    @user = User.findbycredentials(params[:user][:email], params[:user][:password])
    if @user.nil? 
      render json: ['Hmm, the information you entered doesn’t match our records.'], status: 401
    else 
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout!
  end

end
