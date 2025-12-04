import { useNavigate } from "react-router-dom";
import ArrowRight from "../components/ArrowRight";

function Deals() {
  const navigate = useNavigate();

  const deals = [
    {
      title: "Скидка 10%",
      desc: "Скидка 10% на билеты на жд-поездки по Беларуси",
      link: "/deals/discount10"
    },
    {
      title: "2 билета по цене 1",
      desc: "Выгодное предложение для пар",
      link: "/deals/2for1"
    },
    {
      title: "Промокод “Tomas”",
      desc: "Для новых пользователей на 30% скидку",
      link: "/deals/tomas"
    },
    {
      title: "Скидка 20%",
      desc: "Скидка 20% на билеты на жд-поездки при заказе больше 2х билетов",
      link: "/deals/discount20"
    },
    {
      title: "Скидка 30%",
      desc: "На 4 билета и больше",
      link: "/deals/discount30"
    },
    {
      title: "Промокод “Belarus”",
      desc: "Чем больше расстояние - тем дешевле!",
      link: "/deals/belarus"
    }
  ];

  return (
    <div style={{ width: "100%", paddingTop: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#4b3039"
        }}
      >
        Акции и промокоды
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        {deals.map((deal, index) => (
          <div
            key={index}
            onClick={() => navigate(deal.link)}
            style={{
              background: "#d3b19e",
              borderRadius: "12px",
              border: "2px solid #683142",
              padding: "30px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "0.2s",
            }}
          >
            <div>
              <h2 style={{ margin: 0, marginBottom: "10px", color: "#4b3039" }}>
                {deal.title}
              </h2>
              <p style={{ margin: 0 }}>{deal.desc}</p>
            </div>

            <ArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
