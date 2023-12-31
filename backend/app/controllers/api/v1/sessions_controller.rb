class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def user_session
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id 
      render json: {user: @user}, status: :ok 
    else
      render json: {error: 'Invalid username or password'}, status: :unauthorized
    end
  end

  def user_session_end
    session.delete(:user_id)
    render json: { message: 'Logged out successfully' }, status: :ok
  end

  
end