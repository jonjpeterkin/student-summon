class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :job
      t.string :title
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.references :room, foreign_key: true

      t.timestamps
    end
  end
end
