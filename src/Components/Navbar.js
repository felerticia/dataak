import React from "react";

const Navbar = () => {
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
                <a className="blue-text text-darken-2" href="/">
                  شناسنامه خبرگزاری تسنیم
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
