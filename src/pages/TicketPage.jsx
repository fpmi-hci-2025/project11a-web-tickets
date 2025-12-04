import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TrashIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#683142"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

function TicketPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [consent, setConsent] = useState(false);


  const ticket = state?.ticket || null;

  const [passengers, setPassengers] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      gender: "",
      birthday: "",
      documentType: "Паспорт РБ",
      documentNumber: "",
      isBuyer: true,
      phone: "",
      email: ""
    }
  ]);

  function isFormValid() {
  for (const p of passengers) {
    if (
      !p.firstName.trim() ||
      !p.lastName.trim() ||
      !p.gender ||
      !p.birthday ||
      !p.documentNumber.trim() ||
      !p.phone.trim() ||
      !p.email.trim()
    ) {
      return false;
    }
  }
  if (!consent) return false;
  return true;
}


  function addPassenger() {
    setPassengers(prev => [
      ...prev,
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        gender: "",
        birthday: "",
        documentType: "Паспорт РБ",
        documentNumber: "",
        isBuyer: false,
        phone: "",
        email: ""
      }
    ]);
  }


  function removePassenger(id) {
    setPassengers(prev => prev.filter(p => p.id !== id));
  }

  function updateField(id, field, value) {
    setPassengers(prev =>
      prev.map(p => (p.id === id ? { ...p, [field]: value } : p))
    );
  }

  function handleContinue() {
  if (!isFormValid()) return;

  navigate("/seats", {
    state: { ticket, passengers }
  });
}


  return (
    <div>
      <style>{checkboxStyles}</style>

      <div style={{
        padding: "20px 60px",
        fontSize: "16px",
        color: "#683142",
        display: "flex",
        gap: "8px"
      }}>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Выбор маршрута
        </span>
        <span>›</span>
        <span style={{ fontWeight: 600 }}>Данные пассажиров</span>
        <span>›</span>
        <span style={{ opacity: 0.6 }}>Услуги</span>
        <span>›</span>
        <span style={{ opacity: 0.6 }}>Выбор места</span>
        <span>›</span>
        <span style={{ opacity: 0.6 }}>Оплата</span>
      </div>

      <div style={{
        padding: "0 60px",
        display: "flex",
        gap: "40px",
        background: "white"
      }}>

        <div style={{ flex: 1 }}>

          {passengers.map((p, index) => (
            <div
              key={p.id}
              style={{
                background: "#d3b19e",
                border: "2px solid #683142",
                borderRadius: "8px",
                padding: "20px 28px",
                marginBottom: "24px",
                position: "relative"
              }}
            >
              {index > 0 && (
                <button
                  onClick={() => removePassenger(p.id)}
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0
                  }}
                >
                  <TrashIcon />
                </button>
              )}

              <div>
                <h2 style={{ margin: 0, fontSize: "26px" }}>Пассажир</h2>
                <p style={{ margin: "6px 0 16px", opacity: 0.7 }}>
                  Взрослый, старше 12 лет
                </p>
              </div>

              <div style={{ display: "flex", gap: "14px", marginBottom: "16px" }}>
                <input
                  placeholder="Фамилия"
                  value={p.lastName}
                  onChange={e => updateField(p.id, "lastName", e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder="Имя"
                  value={p.firstName}
                  onChange={e => updateField(p.id, "firstName", e.target.value)}
                  style={inputStyle}
                />
                <select
                  value={p.gender}
                  onChange={e => updateField(p.id, "gender", e.target.value)}
                  style={selectStyle}
                >
                  <option value="">Пол</option>
                  <option value="М">М</option>
                  <option value="Ж">Ж</option>
                </select>
                <input
                  type="date"
                  value={p.birthday}
                  onChange={e => updateField(p.id, "birthday", e.target.value)}
                  style={inputStyle}
                />
              </div>

              <h3 style={{ marginBottom: "6px" }}>Документы</h3>

              <div style={{ display: "flex", gap: "14px", marginBottom: "16px" }}>
                <select
                  value={p.documentType}
                  onChange={e => updateField(p.id, "documentType", e.target.value)}
                  style={selectStyle}
                >
                  <option value="Паспорт РБ">Паспорт РБ</option>
                  <option value="ID-карта">ID-карта</option>
                </select>

                <input
                  placeholder="Номер документа"
                  value={p.documentNumber}
                  onChange={e => updateField(p.id, "documentNumber", e.target.value)}
                  style={inputStyle}
                />
              </div>

              <label className="custom-checkbox" style={{ marginBottom: "14px" }}>
                <input
                  type="checkbox"
                  checked={p.isBuyer}
                  onChange={e => updateField(p.id, "isBuyer", e.target.checked)}
                />
                <span className="checkmark"></span>
                Этот пользователь — покупатель
              </label>

              <h3>Контактная информация</h3>

              <div style={{ display: "flex", gap: "14px", marginTop: "8px" }}>
                <input
                  placeholder="Номер телефона"
                  value={p.phone}
                  onChange={e => updateField(p.id, "phone", e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder="Почта"
                  value={p.email}
                  onChange={e => updateField(p.id, "email", e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          ))}

          <button onClick={addPassenger} style={bigBtn}>
            Добавить пассажира
          </button>

          <label style={{ display: "flex", gap: "8px", marginTop: "20px", marginBottom: "20px" }}>
  <input
    type="checkbox"
    checked={consent}
    onChange={() => setConsent(!consent)}
  />
  Даю согласие на обработку персональных данных
</label>


          <button
  onClick={handleContinue}
  disabled={!isFormValid()}
  style={{
    ...bigBtn,
    background: isFormValid() ? "#683142" : "#a98d96",
    cursor: isFormValid() ? "pointer" : "not-allowed",
    color: "white",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px"
  }}
>
  Продолжить
  <span style={{ fontWeight: 700 }}>{ticket?.price} BYN</span>
</button>

        </div>

        <div style={{ width: "380px" }}>
          <h2 style={{ marginBottom: "10px" }}>
            🚆 {ticket?.from} — {ticket?.to}
          </h2>
          <p>{ticket?.date} {ticket?.timeStart} — {ticket?.timeEnd}</p>
          <p>Без обратного билета</p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  flex: 1,
  padding: "10px 12px",
  borderRadius: "6px",
  border: "2px solid #683142",
  background: "#d3b19e"
};

const selectStyle = { ...inputStyle };

const bigBtn = {
  background: "#a25f74",
  color: "white",
  border: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  fontSize: "18px",
  cursor: "pointer",
  marginTop: "10px",
  width: "300px"
};

const checkboxStyles = `
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #2d1b1f;
}

.custom-checkbox input {
  display: none;
}

.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #683142;
  border-radius: 4px;
  background: #d3b19e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s;
}

.custom-checkbox input:checked + .checkmark {
  background: #683142;
}

.custom-checkbox input:checked + .checkmark::after {
  content: "✔";
  color: white;
  font-size: 14px;
}
`;

export default TicketPage;
