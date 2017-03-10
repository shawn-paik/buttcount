class CreateButts < ActiveRecord::Migration[5.0]
  def change
    create_table :butts do |t|
      t.integer 	:price
      t.references	:user, null: false
      t.timestamps
    end
  end
end
