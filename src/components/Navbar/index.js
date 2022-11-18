import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload();
        navigate("/")
    }

    return (
        <div className="">
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="nav-link mx-3">
            <h3 className="fw-bold">BukaAda</h3>
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div
            className="collapse navbar-collapse mx-4"
            id="navbarSupportedContent"
            >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <NavLink
                    to="/"
                    className="nav-link col2-item m-auto"
                    style={({ isActive }) => ({
                    color: isActive ? "#DE6C83" : "black",
                    })}
                >
                    Home
                </NavLink>
                </li>
                {localStorage.getItem("token") !== "admin" &&
                localStorage.getItem("token") &&
                    <li className="nav-item">
                    <NavLink
                        to="/cart"
                        className="nav-link col2-item m-auto"
                        style={({ isActive }) => ({
                        color: isActive ? "#DE6C83" : "black",
                        })}
                    >
                        Cart
                    </NavLink>
                    </li>
                }
                <li className="nav-item">
                <NavLink
                    to="/about"
                    className="nav-link col2-item m-auto"
                    style={({ isActive }) => ({
                    color: isActive ? "#DE6C83" : "black",
                    })}
                >
                    About
                </NavLink>
                </li>
                {!localStorage.getItem("token") &&
                    <li className="nav-item">
                    <NavLink
                        to="/login"
                        className="nav-link col2-item m-auto"
                        style={({ isActive }) => ({
                        color: isActive ? "#DE6C83" : "black",
                        })}
                    >
                        Login
                    </NavLink>
                    </li>
                }
                <li className="nav-item">
                    {localStorage.getItem("token") &&
                        <button className = "btn btn-danger" onClick={()=>handleLogout()}>
                            Logout
                        </button>
                    }
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}
  
export default Navbar