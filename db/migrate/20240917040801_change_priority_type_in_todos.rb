class ChangePriorityTypeInTodos < ActiveRecord::Migration[7.2]
  def up
    # Convert the existing string column to an integer
    change_column :todos, :priority, :integer, using: 'priority::integer'
  end

  def down
    # Revert back to string in case of rollback
    change_column :todos, :priority, :string
  end
end
