class CreateCuisines < ActiveRecord::Migration[7.0]
  def change
    create_table :cuisines do |t|
      t.string :name
      t.string :string

      t.timestamps
    end
  end
end
