class Api::V1::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        recipe = Recipe.find(params[:id])
        comment = recipe.comments.new(comment_params)

        if comment.save 
            user = User.find(comment.user_id)
            render json: {comment: comment, username: user.username}, status: :created 
        else
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def comment_params 
        params.require(:comment).permit(:content, :user_id)
    end
end
