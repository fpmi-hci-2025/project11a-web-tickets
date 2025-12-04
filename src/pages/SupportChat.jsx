import { useNavigate } from "react-router-dom";
import maria from "../images/maria.png"; 

function SupportChat() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 165px)" }}>
      
      <div
        style={{
          width: "380px",
          background: "#d3b19e",
          padding: "40px 30px",
          borderRight: "3px solid #c49e8d"
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: 600, marginBottom: "20px" }}>
          Позвоните по номеру телефона
        </p>

        <p style={{ margin: 0 }}>A1: 8 (029) 945-32-11</p>
        <p style={{ marginBottom: "30px" }}>МТС: 0 (044) 954-32-11</p>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "#683142",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            marginBottom: "40px"
          }}
        >
          Вернуться на главную
        </button>

        <p style={{ fontSize: "16px", opacity: 0.8 }}>
          История переписки с техподдержкой сохраняется на вашем аккаунте
        </p>
      </div>

      <div style={{ flex: 1, background: "#fff", position: "relative" }}>
        
        <div
          style={{
            position: "absolute",
            bottom: "120px",
            left: "40px",
            display: "flex",
            gap: "12px"
          }}
        >
          <img
            src={maria}
            alt="Мария"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />

          <div
            style={{
              background: "#d3b19e",
              padding: "14px 20px",
              borderRadius: "12px",
              border: "2px solid #c49e8d",
              maxWidth: "420px",
              fontSize: "17px"
            }}
          >
            Здравствуйте. Я Ваш специалист техподдержки Мария.<br />
            Чем могу Вам помочь?
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "40px",
            right: "40px",
            display: "flex",
            gap: "12px",
            alignItems: "center"
          }}
        >
          <input
            placeholder="Опишите Вашу проблему"
            style={{
              flex: 1,
              padding: "14px 16px",
              borderRadius: "10px",
              border: "2px solid #c49e8d",
              background: "#d3b19e"
            }}
          />

          <button
            style={{
              width: "55px",
              height: "55px",
              background: "#a25f74",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              color: "white",
              fontSize: "22px"
            }}
          >
            ⤴
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupportChat;
