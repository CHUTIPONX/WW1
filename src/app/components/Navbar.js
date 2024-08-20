import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/SOLO.png" width={197} height={40} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link active text-white" 
                href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link active text-white" 
                href="/service"
                >
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                href="/Signup"
                className="btn btn-outline-warning mx-2 fs-10"
              >
                Sign Up
              </Link>
              <Link
                href="/Signin"
                className="btn btn-outline-warning mx-2 fs-10"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
