class Api::V1::CuisinesController < ApplicationController

  def index
    @cuisines = Cuisine.all
    render json: @cuisines
  end

  def show
    @cuisine = Cuisine.find(params[:id])
    @recipes = @cuisine.recipes 
    render json: { cuisine: @cuisine, recipes: @recipes }
  end

  def show_recipe
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end
end
