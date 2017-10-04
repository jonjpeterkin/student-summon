class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  def show
    user = current_user
    render json: {
      user_id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      title: user.title,
      job: user.job,
      roomId: user.room.id,
    }
  end

  def create
    # user = User.new(auth_params)
    # if user.save
    #   jwt = Auth.issue({user_id: user.id})
    #   render json: {jwt: jwt, userId: user.id, username: user.username, email: user.email}
    # else
    #   render json: {error: "Account creation failed."}
    # end
  end

  def update
    # user = current_user
    # if user.update(edit_params)
    #   render json: {userId: user.id, username: user.username, email: user.email}
    # else
    #   render json: {message: "Account edit failed"}
    # end
  end

  def destroy
    User.destroy(current_user)
    render json: {message: "Account deleted"}
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :password)
  end

  def edit_params
    params.require(:user).permit(:email, :password)
  end

end
