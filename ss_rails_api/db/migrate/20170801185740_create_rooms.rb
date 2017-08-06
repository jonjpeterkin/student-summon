class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.references :school, foreign_key: true

      t.timestamps
    end
  end
end
