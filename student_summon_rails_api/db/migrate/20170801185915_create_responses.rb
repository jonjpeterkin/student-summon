class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
    	t.string :status
    	t.string :reason
      t.references :call, foreign_key: true
      t.references :student, foreign_key: true
      t.references :teacher, foreign_key: { to_table: :users }

    	t.timestamps
    end
  end
end
