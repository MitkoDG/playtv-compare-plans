import logo from '../assets/images/ddg-style.project.jpg'
import logoNoBackground from "../assets/images/logo.png"

export const Footer = () => {
  return (
    <footer className="main-footer">
      <nav className="nav-footer">
        <a href="https://dimitargegov.website/" alt="Logo">
          <img src={logoNoBackground} alt="Logo" />
        </a>
          <li className="list-footer">Last updated: 07/06/2024</li>
          <li className="list-footer">
            <li className="howitworks">How it works ?</li>
          </li>
          <li className="list-footer">
            <a
              href="https://playtv.bg/%d0%b0%d0%b1%d0%be%d0%bd%d0%b0%d0%bc%d0%b5%d0%bd%d1%82%d0%b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
            </a>
          </li>
      </nav>
    </footer>
  )
}
