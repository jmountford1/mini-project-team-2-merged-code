class TodosController < ApplicationController
    before_action :authenticate_user
    before_action :set_todo, only: %i[show update destroy]

    def create
        # Initialize a new Todo with the parameters, including the current user's ID
        @todo = Todo.new(todo_params.merge(user_id: @current_user.id))
        
        if @todo.save
          render json: @todo, status: :created
        else
          render json: @todo.errors, status: :unprocessable_entity
        end
      end

    #read all the todos
    def index
        @todos = Todo.all 
        render json: @todos
    end

    #read certain todo
    def show
        render json: @todo
    end

    #update a todo
    def update
        if @todo.update(todo_params.merge(user_id: @current_user.id))
            render json: @todo
        else
            render json: @todo.errors, status: :unprocessable_entity
        end
    end

    #delete a todo
    def destroy
        @todo.destroy
        head :no_content
    end


    def search
        # Fetch all todos for the authenticated user
        @todos = @current_user.todos
      
        render json: @todos
      end

    private
    #format the todo item
    def todo_params
        params.require(:todo).permit(:title, :content, :priority, :user_id, :completed)
    end
    #find the todo item
    def set_todo
        @todo = Todo.find(params[:id])
    end
      # Authenticate the user by decoding the JWT
      def authenticate_user
        auth_header = request.headers['Authorization']
        if auth_header
          token = auth_header.split(' ')[1]
          begin
            decoded_token = JWT.decode(token, 'j1FnHqRPD2ZRr0hyg6r8SNAjPq5ZoxQy', true, algorithm: 'HS256')
            # Ensure you are referencing the correct key name
            user_id = decoded_token[0]['USER_ID']['user_id']
            @current_user = User.find(user_id)
          rescue JWT::DecodeError
            render json: { error: 'Invalid token. Please login again.' }, status: :unauthorized
          end
        else
          render json: { error: 'Token missing. Please login again.' }, status: :unauthorized
        end
      end
      

end
