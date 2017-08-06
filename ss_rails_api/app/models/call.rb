# == Schema Information
#
# Table name: calls
#
#  id            :integer          not null, primary key
#  description   :string
#  specialist_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Call < ApplicationRecord
  belongs_to :specialist, class_name: "User"
  has_one :origin, class_name: "Room", through: :specialist
  has_and_belongs_to_many :students
  has_many :rooms, through: :students
  has_many :responses
end
