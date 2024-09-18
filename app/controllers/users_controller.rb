require 'jwt'

class UsersController < ApplicationController
    def new
    end

    def test
      render plain: "This is a simple string response"
    end
  
    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        token = encode_token(user_id: user.id)
        render json: { token: token, message: 'Logged in!' }, status: :ok
        # redirect_to root_path, notice: 'Logged in!'
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def logout
      render json: { message: 'Logged out!' }, status: :ok
    end

    def create
      # Strong parameters to allow only the required attributes
      user_params = params.permit(:email, :username, :password)
  
      # Create a new user with the passed parameters
      user = User.new(user_params)
  
      if user.save
        token = encode_token(user_id: user.id)
        render json: { message: 'User created successfully!', token: token, user: user }, status: :created
      else
        render json: { error: 'Failed to create user', details: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    #placeholder - update later
    def encode_token(user_id)
      # Your method to encode JWT tokens
      JWT.encode({ LOGGED_IN: true, USER_ID: user_id }, 'j1FnHqRPD2ZRr0hyg6r8SNAjPq5ZoxQy', 'HS256')
    end
    
end
