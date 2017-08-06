# == Schema Information
#
# Table name: rooms
#
#  id         :integer          not null, primary key
#  name       :string
#  school_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Room < ApplicationRecord
	belongs_to :school
	has_many :teachers, -> { where job: "teacher" }, class_name: "User"
	has_many :specialists, -> { where job: "specialist" }, class_name: "User"
	# has_many :users
	has_many :students

	# def teachers
	# 	self.users.where({job:"teacher"})
	# end

	# def specialists
	# 	self.users.where({job:"specialist"})
	# end
end
