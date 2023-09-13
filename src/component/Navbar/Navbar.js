function Navbar({ addtoquery, newquery }) {
  function addtoprops() {
    return addtoquery();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ bsscrollheight: "100px" }}
            >
              <li className="nav-item">
                <a className="nav-link" href="/food">
                  Food
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/weather"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Weather
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kanban"
                >
                  Project Tracker
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  newquery(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success"
                onClick={() => addtoprops()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
