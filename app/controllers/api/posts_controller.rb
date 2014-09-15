class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    
    if @post.save 
      render json: @post
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def show
  end
  
  def index
    @posts = Post.all
    render json: @posts
  end
  
  def update
  end
  
  def destroy
  end
  
  private
  
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
