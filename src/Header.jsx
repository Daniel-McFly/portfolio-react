import Hamburger_icon from './assets/Hamburger_icon.png'
import logodanielb from './assets/logo-daniel-b.png'
import logodaniel from './assets/logo-daniel.png'
import logodaniel1 from './assets/logo-daniel1.png'
import xicon from './assets/x.png'




  

function Header(){
    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            
        } else {
            menuMobile.classList.add('open');
            
        }
      }
    return(
        <div>
            <header>
        <nav>
            <span className="logo">
                <img className="logo-img glow" src={logodaniel}/>
            </span>
            <input type="checkbox" id="checknav"/>
            
            <ul className="menu">
                <li><a href="#quemsou">Sobre Mim</a></li>
                <li><a href="#sonho">Sonho</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a className="github" href="https://github.com/Daniel-McFly" target="_blank">GitHub</a></li>
            </ul>
        </nav>
        <div className="menu2">
            <span className="logo1">
                <img className="logo-img1" src={logodaniel}/>
            </span>
            <div className="mobile-menu-icon">
                <button onClick={menuShow}><img className="icon" src={Hamburger_icon} alt=""/></button>
            </div>
        </div>
        <div className="mobile-menu">
            <ul className="menu">
                <li><a href="#quemsou">Sobre Mim</a></li>
                <li><a href="#sonho">Sonho</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a className="github" href="https://github.com/Daniel-McFly" target="_blank">GitHub</a></li>
            </ul>
        </div>
      </header>
        </div>
    )
}



export default Header

