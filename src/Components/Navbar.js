import React from "react";

const Navbar = props => {
  const { title, address } = props;
  return (
    <nav className="mainNav white" role="navigation">
      <div className="nav-wrapper container">
        <div className="row">
          <div className="col s12">
            <a
              href="/"
              className="left waves-effect waves-light btn  light-blue darken-2"
            >
              اعمال کلمات کلیدی
            </a>
            <ul className="right">
              <li>
                <a className="blue-text text-darken-2" href={address}>
                  {title}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
