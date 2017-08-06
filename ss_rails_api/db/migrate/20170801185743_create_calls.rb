class CreateCalls < ActiveRecord::Migration[5.1]
  def change
    create_table :calls do |t|
    	t.string :description
      t.references :specialist, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
