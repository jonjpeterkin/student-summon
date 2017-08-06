# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  job             :string
#  title           :string
#  first_name      :string
#  last_name       :string
#  email           :string
#  password_digest :string
#  room_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  belongs_to :room
  # has :school, through: :room
  has_many :calls, inverse_of: "specialist", foreign_key: "specialist_id"
  has_many :responses, inverse_of: "teacher", foreign_key: "teacher_id"
  has_and_belongs_to_many :students, inverse_of: "specialist", association_foreign_key: "specialist_id"

  scope :specialists, -> { where job: "specialist" }
  scope :teachers, -> { where job: "teacher" }

  # has_secure_password
end
