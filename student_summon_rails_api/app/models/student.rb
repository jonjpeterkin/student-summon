# == Schema Information
#
# Table name: students
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  room_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Student < ApplicationRecord
	# belongs_to :school
	belongs_to :room
	has_one :school, through: :room
	has_and_belongs_to_many :calls
	has_many :responses
	has_and_belongs_to_many :specialists, class_name: "User"
end
