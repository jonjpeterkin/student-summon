# == Schema Information
#
# Table name: responses
#
#  id         :integer          not null, primary key
#  status     :string
#  type       :string
#  call_id    :integer
#  student_id :integer
#  teacher_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Response < ApplicationRecord
	belongs_to :call
	has_one :specialist, class_name: "User", through: :call
	belongs_to :teacher, class_name: "User"
	belongs_to :student

end
