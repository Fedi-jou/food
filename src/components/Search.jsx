// import React, { Component } from "react";

// export default class RecipeSearch extends Component {
//   render() {
//     const { handleChange, handleSubmit, search } = this.props;

//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-10 mx-auto col-md-8 mt-5 text-center">
//             <h1 className="text-slanted text-capitalize">
//               search recipes with{" "}
//               <strong className="text-orange">Koujinty </strong>
//             </h1>
//             <form className="mt-4">
//               <label htmlFor="search" className="text-capitalize">
//                 type recipes 
//               </label>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="search"
//                   className="form-control"
//                   placeholder="chicken,onion,carrots"
//                   value={search}
//                   onChange={handleChange}
//                 />
//                 <div className="input-group-append">
//                   <button
//                     type="submit"
//                     disabled={search ? false : true}
//                     className="input-group-text bg-primary text-white"
//                     onClick={handleSubmit}
//                   >
//                     <i className="fas fa-search" />
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              search recipes with{" "}
              <strong className="text-orange">Koujinty </strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                type recipes
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="beef , chicken , carrot "
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    disabled={search ? false : true}
                    className="input-group-text bg-primary text-white border-0"
                    onClick={handleSubmit}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-search" style={{ fontSize: "1.5rem" }} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
