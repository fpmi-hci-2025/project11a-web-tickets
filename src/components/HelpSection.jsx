import { useNavigate } from "react-router-dom";

function HelpSection() {
   const navigate = useNavigate();

   return (
      <section className="help-section">
         <div className="help-inner">
            <h2 className="help-title">Нужна помощь? Мы на связи!</h2>
            <button
               className="secondary-btn"
               onClick={() => navigate("/support")}
            >
               Обратиться в техподдержку
            </button>
         </div>
      </section>
   );
}

export default HelpSection;
