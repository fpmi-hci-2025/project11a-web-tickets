import { useNavigate } from "react-router-dom";
import catImage from "../images/cat.png";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 165px)",

        backgroundImage: `url(${catImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "#d3b19e",
          padding: "40px 60px",
          borderRadius: "14px",
          border: "2px solid #683142",
          maxWidth: "520px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "20px", color: "#4b3039" }}>
          Приятного путешествия!
        </h1>

        <p style={{ margin: "8px 0", color: "#4b3039" }}>
          Ваш заказ успешно оплачен.
        </p>
        <p style={{ margin: "8px 0", color: "#4b3039" }}>
          Билеты отправлены на электронную почту и в ваш личный кабинет.
        </p>
        <p style={{ margin: "8px 0 26px", color: "#4b3039" }}>
          Не забудьте взять в поездку оригиналы документов, указанных при покупке.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "none",
            color: "#4b3039",
            fontSize: "22px",
            cursor: "pointer",
            fontWeight: "700",
            textDecoration: "underline",
            padding: 0
          }}
        >
          На главную
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
