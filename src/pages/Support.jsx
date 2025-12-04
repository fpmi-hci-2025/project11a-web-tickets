import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "100px",
        background: "#fff"
      }}
    >
      <div
        style={{
          width: "85%",
          background: "#d3b19e",
          borderRadius: "12px",
          padding: "60px 40px",
          textAlign: "center"
        }}
      >
        <h1 style={{ color: "#4b3039", marginBottom: "20px" }}>
          Нужна помощь? Мы на связи!
        </h1>

        <p style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>
          Позвоните по номеру телефона
        </p>

        <p style={{ fontSize: "18px", margin: 0 }}>A1: 8 (029) 945-32-11</p>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>МТС: 0 (044) 954-32-11</p>

        <button
          onClick={() => navigate("/support/chat")}
          style={{
            background: "#683142",
            color: "white",
            border: "none",
            padding: "12px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "30px"
          }}
        >
          Написать в чат
        </button>

        <p
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: 600,
            color: "#4b3039"
          }}
        >
          Вернуться на главную
        </p>
      </div>
    </div>
  );
}

export default Support;
