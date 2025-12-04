import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function ServicesPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const ticket = state?.ticket;
  const passengers = state?.passengers;

  const [insurance, setInsurance] = useState("no");
  const [refund, setRefund] = useState("no");
  const [sms, setSms] = useState("no");
  const [paymentMethod, setPaymentMethod] = useState("card");

  function handleContinue() {
    navigate("/seats", {
      state: { ticket, passengers, insurance, refund, sms, paymentMethod }
    });
  }

  return (
    <div style={{ padding: "20px 60px" }}>
      <div style={{
        fontSize: "16px",
        display: "flex",
        gap: "8px",
        marginBottom: "30px",
        color: "#683142"
      }}>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Выбор маршрута</span>
        <span>›</span>
        <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>Данные пассажиров</span>
        <span>›</span>
        <span style={{ fontWeight: 600 }}>Услуги</span>
        <span>›</span>
        <span style={{ opacity: 0.6 }}>Выбор места</span>
        <span>›</span>
        <span style={{ opacity: 0.6 }}>Оплата</span>
      </div>

      <div style={{
        background: "#d3b19e",
        padding: "20px",
        borderRadius: "10px",
        border: "2px solid #683142",
        marginBottom: "36px",
        fontSize: "18px"
      }}>
        <b>🚆 {ticket?.from} — {ticket?.to}</b>
        <p style={{ margin: "4px 0" }}>
          {ticket?.date} {ticket?.timeStart} — {ticket?.timeEnd}
        </p>
        <p style={{ margin: "4px 0" }}>
          {ticket?.trainInfo}
        </p>
      </div>

      <h2 style={{ marginBottom: "18px" }}>Добавьте спокойствия и комфорта</h2>

      <ServiceBlock
        title="Страхование на время поездки"
        price="19,24 BYN"
        value={insurance}
        onChange={setInsurance}
        description1="Застраховать жизнь и здоровье от несчастных случаев на время поездки ( страховая сумма 3 500 000,00 ₽)."
        description2="Если на вокзале или в поезде возникнут проблемы со здоровьем, вы получите деньги за каждый день лечения."
      />

      <ServiceBlock
        title="100% возврат билета по любой причине"
        price="27,72 BYN"
        value={refund}
        onChange={setRefund}
        description1="Я хочу получить больше денег при возврате"
        description2="На вашу карту вернётся 8 876,00 ₽. Онлайн-возврат можно сделать не позднее чем за 1 час до начала поездки."
      />

      <ServiceBlock
        title="Бесплатное СМС с напоминанием о поездке"
        price=""
        value={sms}
        onChange={setSms}
        description1="Я хочу получить сообщение"
      />

      <h2 style={{ marginTop: "40px" }}>Выберите способ оплаты</h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>

        <div
          onClick={() => setPaymentMethod("sbp")}
          style={{
            border: paymentMethod === "sbp" ? "2px solid #683142" : "2px solid #ceb3a5",
            padding: "14px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            width: "240px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <input
            type="radio"
            checked={paymentMethod === "sbp"}
            onChange={() => setPaymentMethod("sbp")}
          />
          <span>Система быстрых платежей</span>
        </div>

        <div
          onClick={() => setPaymentMethod("card")}
          style={{
            border: paymentMethod === "card" ? "2px solid #683142" : "2px solid #ceb3a5",
            padding: "14px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            width: "240px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <input
            type="radio"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          <span>Банковская карта</span>
        </div>

      </div>

      <button
        onClick={() => navigate("/success")}
        style={{
          background: "#683142",
          color: "white",
          border: "none",
          padding: "14px 28px",
          borderRadius: "10px",
          fontSize: "20px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Продолжить
      </button>

    </div>
  );
}

function ServiceBlock({ title, price, description1, description2, value, onChange }) {
  return (
    <div style={{
      background: "#d3b19e",
      border: "2px solid #683142",
      padding: "20px 24px",
      borderRadius: "12px",
      marginBottom: "18px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: "0 0 12px 0" }}>{title}</h3>
        {price && <b style={{ fontSize: "18px" }}>{price}</b>}
      </div>

      {description1 && (
        <label style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
          <input
            type="radio"
            checked={value === "yes"}
            onChange={() => onChange("yes")}
          />
          {description1}
        </label>
      )}

      {description2 && (
        <p style={{ margin: "0 0 10px 28px", fontSize: "14px", opacity: 0.8 }}>
          {description2}
        </p>
      )}

      <label style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
        <input
          type="radio"
          checked={value === "no"}
          onChange={() => onChange("no")}
        />
        Нет, спасибо
      </label>
    </div>
  );
}

export default ServicesPage;
