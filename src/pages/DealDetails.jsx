import { useNavigate, useParams } from "react-router-dom";

function DealDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = {
    discount10: {
      title: "Скидка 10% на билеты",
      text1: "С 01.10.2025 по 29.10.2025 на все билеты действует скидка 10%. Закажи билеты заранее и оплати своё путешествие дешевле!",
      text2: "Акция не суммируется с другими акциями и промокодами.",
      text3: "При возникновении вопросов или сложностей с получением скидки обращайтесь в нашу техподдержку."
    },
    "2for1": {
      title: "2 билета по цене 1",
      text1: "Отличная акция для пар — второй билет бесплатно!",
      text2: "Предложение действует на любые направление в пределах Беларуси.",
      text3: "Количество мест по акции ограничено."
    },
    tomas: {
      title: 'Промокод "Tomas"',
      text1: "Примените промокод “Tomas” и получите скидку 30% как новый пользователь.",
      text2: "Акция работает только для первого заказа.",
      text3: "Не действует в комбинации с другими скидками."
    },
    discount20: {
      title: "Скидка 20%",
      text1: "Скидка 20% при покупке более 2 билетов в одном заказе.",
      text2: "Действует для любых маршрутов.",
      text3: "Скидка применяется автоматически."
    },
    discount30: {
      title: "Скидка 30%",
      text1: "Покупай 4 билета и больше — получай скидку 30%.",
      text2: "Акция действует круглый год.",
      text3: "Детали уточняйте у поддержки."
    },
    belarus: {
      title: 'Промокод "Belarus"',
      text1: "Чем дальше едешь — тем выгоднее! Промокод снижает стоимость на дальние расстояния.",
      text2: "Размер скидки зависит от километража.",
      text3: "Промокод можно использовать многократно."
    }
  };

  const deal = data[id];

  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      <h1 style={{ marginBottom: "30px", color: "#4b3039" }}>{deal.title}</h1>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>{deal.text1}</p>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>{deal.text2}</p>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        {deal.text3.split("техподдержку")[0]}
        <span
          onClick={() => navigate("/support")}
          style={{ color: "#683142", cursor: "pointer", fontWeight: "bold" }}
        >
          техподдержку
        </span>.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <button
          onClick={() => navigate("/deals")}
          style={buttonStyle}
        >
          Вернуться к каталогу
        </button>

        <button
          onClick={() => navigate("/")}
          style={buttonStyle}
        >
          Заказать билеты
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  background: "#683142",
  color: "white",
  border: "none",
  padding: "14px 28px",
  borderRadius: "10px",
  fontSize: "20px",
  cursor: "pointer"
};

export default DealDetails;
