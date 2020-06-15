import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-dark bg-dark bg-primary sticky-top justify-content-between">
            <Link to="/" className="navbar-brand">
                Home
            </Link>
            <div>
                <Link to="/recruiterView" className="navbar-brand">
                    Recruiter
                </Link>
                <Link to="/jobseekerView" className="navbar-brand">
                    Jobseeker
                </Link>
            </div>
        </nav>
    );
}
