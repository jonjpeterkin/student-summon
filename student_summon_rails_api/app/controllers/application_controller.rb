class ApplicationController < ActionController::API
	before_action :authenticate_user

  def authenticate_user
    render json: {error: "Unauthorized User"} unless signed_in?
  end

  def signed_in?
    !!current_user
  end

  def current_user
    if request.env["HTTP_AUTHORIZATION"].present?
      User.find(Auth.decode(request.env["HTTP_AUTHORIZATION"])[0]["user_id"])
    end
  end
end
