class SessionsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    user = User.find_by(email: user_params[:email])
    if user && user.authenticate(user_params[:password])
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, user_id: user.id}, status: 200
    else
      render json: {error: "Invalid Credentials"}, status: 401
    end
  end

  private

  def user_params
    params.require(:auth).permit(:email, :password)
  end
end