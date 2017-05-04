	class CreateButts < ActiveRecord::Migration[5.0]
  def change
    create_table :butts do |t|
      t.float 	:price
      t.boolean :smoked
      t.boolean :last_cig
      t.boolean :loosie
      t.boolean :bummed
      t.references :pack
      t.timestamps
    end
  end
end
