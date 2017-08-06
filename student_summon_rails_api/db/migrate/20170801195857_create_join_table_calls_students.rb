class CreateJoinTableCallsStudents < ActiveRecord::Migration[5.1]
  def change
    create_join_table :calls, :students do |t|
      # t.index [:call_id, :student_id]
      # t.index [:student_id, :call_id]
    end
  end
end
