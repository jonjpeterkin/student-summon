class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  def show
    user = current_user
    render json: {
      user_id: user.id,
      email: user.email,
      full_name: user.full_name,
      prof_name: user.prof_name,
      job: user.job,
      room_id: user.room.id,
    }
  end

  def create
    user = User.new({
      room_id: 4,
      password: create_params[:password],
      email: create_params[:email],
      full_name: create_params[:full_name],
      prof_name: create_params[:prof_name]
    })
    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt}
    else
      render json: {error: "Account creation failed."}
    end
  end

  def update
    user = current_user
    if user.update(edit_params)
      render json: {
        user_id: user.id,
        email: user.email,
        full_name: user.full_name,
        prof_name: user.prof_name,
        job: user.job,
        room_id: user.room.id,
      }
    else
      render json: {message: "Account edit failed"}
    end
  end

  def destroy
    User.destroy(current_user)
    render json: {message: "Account deleted"}
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :password)
  end

  def create_params
    params.require(:user).permit(:email, :password, :full_name, :prof_name)
  end

  def edit_params
    params.require(:user).permit(:email, :password, :full_name, :prof_name, :job, :room_id)
  end

end
