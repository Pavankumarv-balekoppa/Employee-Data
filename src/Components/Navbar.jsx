import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid bg-primary p-2  justify-content-between">
                <Link to="/admin" className="nav-link active bg-warning rounded-5 ps-2 pe-2"><h1>LOGO</h1></Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-5" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-center ms-5">
                        <li className="nav-item ms-5 bg-light rounded">
                            <Link to="/admin" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item ms-5 bg-light rounded">
                            <Link to="/admin/employee" className="nav-link active">Employee</Link>
                        </li>
                        <li className="nav-item ms-5 bg-light rounded">
                            <Link to="/admin/create" className="nav-link active">Create User</Link>
                        </li>
                        <li className="nav-item ms-5 bg-light rounded ">
                            <Link to="/" className="nav-link active">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;