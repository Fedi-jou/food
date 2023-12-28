import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      search: "",
      error: ""
    };
  }

  handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Filter recipes based on the search term
    const filteredRecipes = recipeData.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm)
    );

    this.setState({
      recipes: filteredRecipes,
      search: searchTerm,
      error: ""
    });
  };

  render() {
    const { search, error, recipes } = this.state;

    return (
      <>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={(e) => e.preventDefault()} // Prevent form submission
        />
        {error ? (
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="text-orange text-center text-uppercase mt-5">
                    {error}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </>
    );
  }
}
