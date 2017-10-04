class CallsController < ApplicationController
	def index
		calls = current_user.calls
		calls = Call.format(calls)
		render json: {calls: calls}
	end

	def create
		time_for = Call.fmt_time_in(call_params[:time_for])
		call = Call.new(
			time_for: time_for,
			description: call_params[:description],
			students: call_params[:students]
		)
		call.specialist = current_user
		if call.save
			call = Call.format(call)
			render json: {call: call}
		else
			render json: {error: 'Call creation failed'}
		end
	end

	def show
		call = Call.find(call_params[:id])
		call = Call.format(call)
		render json: {call: call}
	end

	def update
		call = Call.find(call_params[:id])

	end

	def destroy
	end

	private

	def call_params
		params.require(:call).permit(:id, :time_for, :description, students: [])
	end

end