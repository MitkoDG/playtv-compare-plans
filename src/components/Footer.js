import logo from "../assets/images/ddg-style.project.jpg";

export const Footer = () => {
    return (
        <footer className="main-footer">
            <nav className="nav-footer">
                <a href="https://dimitargegov.site/" alt="Logo"><img src={logo} alt="Logo" /></a>
                <li className="list-footer">Last updated: 31/08/2023</li>
                <li className="list-footer"><li className="howitworks">How it works ?</li></li>
                <li className="list-footer"><a href="https://playtv.bg/%d0%b0%d0%b1%d0%be%d0%bd%d0%b0%d0%bc%d0%b5%d0%bd%d1%82%d0%b8-4/" target="blank" rel="noopener noreferrer">Official Website</a></li>
            </nav>
        </footer>
    )
};