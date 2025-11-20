import { useNavigate } from "react-router-dom";
import PromoCard from "./PromoCard.jsx";

function PromotionsSection() {
   const navigate = useNavigate();

   return (
      <section className="promotions-section">
         <h2 className="promotions-title">Акции и промокоды</h2>

         <div className="promotions-grid">
            <PromoCard
               title="Скидка 10%"
               subtitle="Скидка 10% на билеты на ж/д-поездки по Беларуси"
            />
            <PromoCard
               title="2 билета по цене 1"
               subtitle="Выгодное предложение для пар"
            />
            <PromoCard
               title='Промокод "Tomas"'
               subtitle="Для новых пользователей на 30% скидку"
            />
         </div>

         <div className="promotions-actions">
            <button
               className="secondary-btn"
               onClick={() => navigate("/deals")}
            >
               Посмотреть акции и промокоды
            </button>
         </div>
      </section>
   );
}

export default PromotionsSection;
