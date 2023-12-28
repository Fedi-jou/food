import React from "react";
import { useParams, Link } from "react-router-dom";
import { recipeData } from "../data/tempDetails";

export default function SingleRecipe() {
  const { id } = useParams();

  // Access the specific recipe directly using the id
  const selectedRecipe = recipeData;
 console.log ( selectedRecipe , "teeeessst id ")
  const {
    image_url,
    publisher,
    publisher_url,
    source_url,
    title,
    ingredients
  } = selectedRecipe;

  console.log (selectedRecipe , " the result ")
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">
            back to recipe list
          </Link>
          <img
            src={image_url}
            className="d-block w-100"
            style={{ maxHeight: "30rem" }}
            alt="recipe"
          />
        </div>
        {/* details */}
        <div className="col-10 mx-auto col-md-6 my-3">
          <h6 className="text-uppercase">{title}</h6>
          <h6 className="text-warning text-capitalize text-slanted">
            provided by {publisher}
          </h6>
          <a
            href={publisher_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2 text-capitalize"
          >
            Publisher Webpage
          </a>
          <a
            href={source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-2 mx-2 text-capitalize"
          >
            recipe url
          </a>
          <ul className="list-group mt-4">
            <h2 className="mt-3 mb-4">Ingredients</h2>
            {ingredients && ingredients.map((item, index) => (
              <li key={index} className="list-group-item text-slanted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
