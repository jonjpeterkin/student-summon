class StudentsController < ApplicationController
	def index
		students = current_user.students
		students = Student.format(students)
		render json: {students: students}
	end

	def create
		school = current_user.school
		student = Student.create_with({
				school: school,
				room: Room.find_or_create_by({school: school, name: student_params[:room]})
			}).includes(:school).where(schools: {id: school.id})
			.find_or_create_by({name: student_params[:name]})
		if student.save
			current_user.students << student
			render json: {student: Student.format(student)}
		else
			render json: {error: 'Student creation failed'}
		end
	end

	def show
	end

	def update
		student = Student.find(student_params[:id])
		room = Room.find_or_create_by({school: current_user.school, name: student_params[:room]})
		if student.update({name: student_params[:name], room: room})
			render json: {student: Student.format(student)}
		else
			render json: {error: 'Student update failed'}
		end
	end

	# removes student from a specialist's list of students,
	# but does not break pre-existing relations by removing the student from the db
	def destroy
		student = Student.find(student_params[:id])
		current_user.students.delete(student)
		render json: {message: 'student successfully removed from list of students'}
	end

	private

	def student_params
		params.require(:student).permit(:id, :name, :room)
	end
end