import { Link } from "react-router-dom";
import routes from "@/config/routes";
import { human, market } from "../config/svg";

import "bootstrap/js/src/collapse.js";
import { HeaderCart } from "../components";
export default function Header(): JSX.Element {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">
            CLAIRE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link to="/" className="m-2 nav-link active fw-bold">
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={routes.category} className="nav-link fw-bold">
                  <img className="m-2" src={human} width="20" height="20" alt="Delete" />
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link to={routes.productList} className="nav-link fw-bold">
                  <img className="m-2" src={market} width="20" height="20" alt="Delete" />
                  Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link to={routes.shopCart} className="nav-link fw-bold">
                  <HeaderCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
