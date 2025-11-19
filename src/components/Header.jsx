import { NavLink, useNavigate } from "react-router-dom";

function Header() {
   const navigate = useNavigate();

   return (
      <header className="header">
         <div className="header-inner">
            <button className="logo" onClick={() => navigate("/")}>
               <img src="/logo.png" alt="logo" className="logo-icon" />
               <span className="logo-text">Паровозик Томас</span>
            </button>

            <div className="header-right">
               <nav className="nav">
                  <NavLink
                     to="/deals"
                     className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                     }
                  >
                     Акции и промокоды
                  </NavLink>

                  <NavLink
                     to="/support"
                     className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                     }
                  >
                     Техподдержка
                  </NavLink>
               </nav>

               <button
                  className="header-login-btn"
                  onClick={() => navigate("/login")}
               >
                  Войти
               </button>
            </div>
         </div>
      </header>
   );
}

export default Header;
