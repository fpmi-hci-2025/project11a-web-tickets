import { useNavigate } from "react-router-dom";
import { useState } from "react";
import catImage from "../images/cat.png";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    repeat: ""
  });

  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    form.repeat.trim() &&
    form.password === form.repeat;

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleRegister() {
    if (!isValid) return;

    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100vh - 165px)",
        backgroundImage: `url(${catImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0"
      }}
    >
      <div
        style={{
          width: "700px",
          background: "#d3b19e",
          borderRadius: "14px",
          border: "2px solid #683142",
          padding: "40px 50px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "26px" }}>Регистрация</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px"
          }}
        >
          <input
            placeholder="Имя"
            style={inputStyle}
            value={form.firstName}
            onChange={e => updateField("firstName", e.target.value)}
          />
          <input
            placeholder="Фамилия"
            style={inputStyle}
            value={form.lastName}
            onChange={e => updateField("lastName", e.target.value)}
          />
          <input
            placeholder="Номер телефона"
            style={inputStyle}
            value={form.phone}
            onChange={e => updateField("phone", e.target.value)}
          />
          <input
            placeholder="Почта"
            style={inputStyle}
            value={form.email}
            onChange={e => updateField("email", e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            style={inputStyle}
            value={form.password}
            onChange={e => updateField("password", e.target.value)}
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            style={inputStyle}
            value={form.repeat}
            onChange={e => updateField("repeat", e.target.value)}
          />
        </div>

        <button
          style={{
            ...registerBtn,
            background: isValid ? "#683142" : "#8d6c75",
            cursor: isValid ? "pointer" : "not-allowed"
          }}
          disabled={!isValid}
          onClick={handleRegister}
        >
          Зарегистрироваться
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "16px",
            cursor: "pointer",
            fontWeight: 600
          }}
          onClick={() => navigate("/login")}
        >
          Войти
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px 12px",
  border: "2px solid #683142",
  borderRadius: "8px",
  background: "#d3b19e",
  color: "#4b3039"
};

const registerBtn = {
  marginTop: "24px",
  width: "100%",
  color: "white",
  padding: "12px 0",
  borderRadius: "8px",
  border: "none",
  fontSize: "18px"
};

export default Register;
