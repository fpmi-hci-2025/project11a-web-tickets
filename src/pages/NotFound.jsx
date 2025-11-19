import { Link } from "react-router-dom";

function NotFound() {
   return (
      <div className="page page-centered">
         <h1>404</h1>
         <p>Страница не найдена.</p>
         <Link to="/" className="link-button">
            На главную
         </Link>
      </div>
   );
}

export default NotFound;
