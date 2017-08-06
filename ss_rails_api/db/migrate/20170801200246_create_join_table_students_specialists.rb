class CreateJoinTableStudentsSpecialists < ActiveRecord::Migration[5.1]
  def change
    create_join_table :students, :users do |t|
      # t.index [:student_id, :user_id]
      # t.index [:user_id, :student_id]
    end
  end
end
