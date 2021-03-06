# == Schema Information
#
# Table name: calls
#
#  id            :integer          not null, primary key
#  description   :string
#  time_for      :datetime
#  specialist_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Call < ApplicationRecord
  belongs_to :specialist, class_name: "User"
  has_one :origin, class_name: "Room", through: :specialist, source: :room
  has_and_belongs_to_many :students
  has_many :rooms, through: :students
  has_many :responses

  def self.format(calls)
  	fmtd_calls = Array(calls).map do |call|
			attrs = call.attributes
			students = Student.format(call.students)
			attrs.merge({
        students: students,
        origin: call.origin.name,
        time_for: call.fmt_time_out
      })
  	end
  	calls.is_a?(Enumerable) ? fmtd_calls : fmtd_calls[0]
  end

  def self.fmt_time_in(time_for)
    hour = time_for.split(':')[0]
    minute = time_for.split(':')[1]
    now = Time.now
    Time.new(now.year, now.month, now.mday, hour, minute, 0)
  end

  def fmt_time_out
    self.time_for.localtime.strftime('%-m/%-d/%Y %-I:%M %p')
  end



end
