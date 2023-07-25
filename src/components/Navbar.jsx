import logo from "../assets/logo.jpg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="nav">
            <div className="nav__logo">
                <img src={logo}/>
                <h1>Safety Lab</h1>
            </div>
            <ul>
                <li><a href="#o-nama">O nama</a></li>
                <li><a href="#usluge">Usluge</a></li>
                <li><a href="#reference">Reference</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar