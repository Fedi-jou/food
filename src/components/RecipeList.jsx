// import React, { Component } from "react";
// import Recipe from "./Recipe";

// export default class RecipeList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 1,
//       recipesPerPage: 3,
//     };
//   }

//   handlePageChange = (page) => {
//     this.setState({
//       currentPage: page,
//     });
//   };

//   render() {
//     const { recipes } = this.props;
//     const { currentPage, recipesPerPage } = this.state;

//     // Calculate the index of the first recipe on the current page
//     const indexOfFirstRecipe = (currentPage - 1) * recipesPerPage;

//     // Calculate the index of the last recipe on the current page
//     const indexOfLastRecipe = Math.min(indexOfFirstRecipe + recipesPerPage, recipes.length);

//     // Slice the recipes array to get the recipes for the current page
//     const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

//     // Calculate page numbers
//     const pageNumbers = Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }, (_, index) => index + 1);

//     return (
//       <>
//         <div className="container my-5">
//           {/* title */}
//           <div className="row">
//             <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
//               <h1 className="text-slanted">recipe list</h1>
//             </div>
//           </div>
//           {/* end of title */}
//           <div className="row">
//             {currentRecipes.map((recipe) => {
//               return <Recipe key={recipe.recipe_id} recipe={recipe} />;
//             })}
//           </div>

//           {/* Pagination */}
//           <div className="row">
//             <div className="col-10 mx-auto d-flex justify-content-center">
//               <ul className="pagination">
//                 {pageNumbers.map((number) => (
//                   <li
//                     key={number}
//                     className={`page-item ${currentPage === number ? "active" : ""}`}
//                   >
//                     <button
//                       onClick={() => this.handlePageChange(number)}
//                       className="page-link"
//                     >
//                       {number}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           {/* End of Pagination */}
//         </div>
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      recipesPerPage: 3,
    };
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { recipes } = this.props;
    const { currentPage, recipesPerPage } = this.state;

    // Calculate the index of the first recipe on the current page
    const indexOfFirstRecipe = (currentPage - 1) * recipesPerPage;

    // Calculate the index of the last recipe on the current page
    const indexOfLastRecipe = Math.min(indexOfFirstRecipe + recipesPerPage, recipes.length);

    // Slice the recipes array to get the recipes for the current page
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Calculate page numbers
    const pageNumbers = Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }, (_, index) => index + 1);

    return (
      <>
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {currentRecipes.map((recipe) => {
              return <Recipe key={recipe.recipe_id} recipe={recipe} />;
            })}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-10 mx-auto d-flex justify-content-center">
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li
                    key={number}
                    className={`page-item ${currentPage === number ? "active" : ""}`}
                  >
                    <button
                      onClick={() => this.handlePageChange(number)}
                      className="page-link rounded-circle mx-1"
                      style={{ minWidth: "30px", minHeight: "30px" }}
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End of Pagination */}
        </div>
      </>
    );
  }
}
