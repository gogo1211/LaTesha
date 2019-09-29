class AuthController < ApplicationController
  def create
    sleep 3
    if (params[:username] == 'Admin' && params[:password] == 'test1A')
      render json: { authorized: true, username: params[:username] }, status: :ok
    else
      render json: { authorized: false }, status: :unauthorized
    end
  end
end
