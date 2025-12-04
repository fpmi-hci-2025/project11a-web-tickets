import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ticketsData from "../data/tickets.json";

function ResultsPage() {
   const { state } = useLocation();
   const navigate = useNavigate();

   const [form, setForm] = useState({
      from: state?.from || "",
      to: state?.to || "",
      date: state?.date || ""
   });

   const [tickets, setTickets] = useState([]);
   const [filtered, setFiltered] = useState([]);

   const [sortMenuOpen, setSortMenuOpen] = useState(false);
   const [filterMenuOpen, setFilterMenuOpen] = useState(false);

   const [sortType, setSortType] = useState(null);
   const [filterType, setFilterType] = useState(null);

   const dateRef = useRef(null);

   const cities = [
      "Минск", "Брест", "Гродно", "Могилёв", "Витебск",
      "Гомель", "Барановичи", "Лида", "Мозырь", "Пинск"
   ];

   const filteredFrom = cities.filter(c => c !== form.to);
   const filteredTo = cities.filter(c => c !== form.from);


   function handleSubmit(e) {
      e.preventDefault();
      navigate("/results", { state: form });
   }

   function handleChange(e) {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));
   }

   useEffect(() => {
      const results = ticketsData.filter(ticket =>
         ticket.from === state.from &&
         ticket.to === state.to &&
         ticket.date === state.date
      );
      setTickets(results);
      setFiltered(results);
   }, [state]);

   useEffect(() => {
      let list = [...tickets];

      if (filterType === "morning") {
         list = list.filter(t => parseInt(t.timeStart) < 12);
      }
      if (filterType === "day") {
         list = list.filter(t => {
            const h = parseInt(t.timeStart);
            return h >= 12 && h < 18;
         });
      }
      if (filterType === "evening") {
         list = list.filter(t => parseInt(t.timeStart) >= 18);
      }

      if (sortType === "priceAsc") {
         list.sort((a, b) => a.price - b.price);
      }
      if (sortType === "priceDesc") {
         list.sort((a, b) => b.price - a.price);
      }
      if (sortType === "timeStart") {
         list.sort((a, b) => a.timeStart.localeCompare(b.timeStart));
      }
      if (sortType === "timeEnd") {
         list.sort((a, b) => a.timeEnd.localeCompare(b.timeEnd));
      }

      setFiltered(list);
   }, [sortType, filterType, tickets]);

   return (
      <div className="results-page">

         <form
            onSubmit={handleSubmit}
            className="ticket-form compact"
            style={{
               padding: "40px 100px",
               backgroundColor: "#d3b19e"
            }}
         >
            <div className="ticket-form-row">
               <div className="ticket-input">
                  <span className="ticket-label">Пункт отправки</span>
                  <input
                     list="from-list"
                     name="from"
                     value={form.from}
                     onChange={handleChange}
                  />
                  <datalist id="from-list">
                     {filteredFrom.map(c => (
                        <option key={c} value={c} />
                     ))}
                  </datalist>
               </div>

               <div className="ticket-input">
                  <span className="ticket-label">Пункт назначения</span>
                  <input
                     list="to-list"
                     name="to"
                     value={form.to}
                     onChange={handleChange}
                  />
                  <datalist id="to-list">
                     {filteredTo.map(c => (
                        <option key={c} value={c} />
                     ))}
                  </datalist>
               </div>
            </div>

            <div className="ticket-form-row">
               <div className="ticket-input">
                  <span className="ticket-label">Дата поездки</span>

                  <div className="ticket-input-row">
                     <input
                        type="date"
                        name="date"
                        value={form.date}
                        ref={dateRef}
                        onChange={handleChange}
                        onClick={() => dateRef.current?.showPicker()}
                     />
                     <span
                        className="ticket-icon"
                        onClick={() => dateRef.current?.showPicker()}
                     >
                        <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                     >
                        <g clipPath="url(#clip0_821_788)">
                           <path
                              d="M22.1667 4.66634H21V2.33301H18.6667V4.66634H9.33333V2.33301H7V4.66634H5.83333C4.53833 4.66634 3.51167 5.71634 3.51167 6.99967L3.5 23.333C3.5 24.6163 4.53833 25.6663 5.83333 25.6663H22.1667C23.45 25.6663 24.5 24.6163 24.5 23.333V6.99967C24.5 5.71634 23.45 4.66634 22.1667 4.66634ZM22.1667 23.333H5.83333V11.6663H22.1667V23.333ZM22.1667 9.33301H5.83333V6.99967H22.1667V9.33301ZM10.5 16.333H8.16667V13.9997H10.5V16.333ZM15.1667 16.333H12.8333V13.9997H15.1667V16.333ZM19.8333 16.333H17.5V13.9997H19.8333V16.333ZM10.5 20.9997H8.16667V18.6663H10.5V20.9997ZM15.1667 20.9997H12.8333V18.6663H15.1667V20.9997ZM19.8333 20.9997H17.5V18.6663H19.8333V20.9997Z"
                              fill="#683142"
                           />
                        </g>
                        <defs>
                           <clipPath id="clip0_821_788">
                              <rect width="28" height="28" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                     </span>
                  </div>
               </div>
            </div>

            <div className="ticket-form-actions">
               <button type="submit" className="primary-btn">
                  Найти билеты
               </button>
            </div>
         </form>

         <div style={{ padding: "20px 100px", display: "flex", gap: "16px" }}>
            <div style={{ position: "relative" }}>
               <button
                  className="primary-btn"
                  style={{ background: "#683142", width: "180px" , fontSize: '19px'}}
                  onClick={() => {
                     setSortMenuOpen(p => !p);
                     setFilterMenuOpen(false);
                  }}
               >
                  ☰ Сортировка
               </button>

               {sortMenuOpen && (
   <div className="dropdown-menu">

      <div className="dropdown-item" onClick={() => setSortType("priceAsc")}>
         Цена ↑
      </div>

      <div className="dropdown-item" onClick={() => setSortType("priceDesc")}>
         Цена ↓
      </div>

      <div className="dropdown-item" onClick={() => setSortType("timeStart")}>
         По времени отправления
      </div>

      <div className="dropdown-item" onClick={() => setSortType("timeEnd")}>
         По времени прибытия
      </div>

      <div className="dropdown-separator"></div>

      <div className="dropdown-item" onClick={() => setSortType(null)}>
         Сброс
      </div>
   </div>
)}

            </div>

            <div style={{ position: "relative" }}>
               <button
                  className="primary-btn"
                  style={{ background: "#683142", width: "180px" , fontSize: '19px'}}
                  onClick={() => {
                     setFilterMenuOpen(p => !p);
                     setSortMenuOpen(false);
                  }}
               >
                  Фильтры
               </button>

               {filterMenuOpen && (
   <div className="dropdown-menu">



      <div className="dropdown-item" onClick={() => setFilterType("morning")}>
         Утро
      </div>

      <div className="dropdown-item" onClick={() => setFilterType("day")}>
         День
      </div>

      <div className="dropdown-item" onClick={() => setFilterType("evening")}>
         Вечер
      </div>

      <div className="dropdown-separator"></div>

      <div className="dropdown-item" onClick={() => setFilterType(null)}>
         Сброс
      </div>
   </div>
)}

            </div>
         </div>

         <div style={{ padding: "0 100px" }}>
            {filtered.length === 0 && (
               <div
                  style={{
                     marginTop: "40px",
                     padding: "30px",
                     fontSize: "22px",
                     textAlign: "center",
                     background: "#f7e1d3",
                     borderRadius: "10px",
                     border: "2px solid var(--secondary)"
                  }}
               >
                  Билетов не найдено
               </div>
            )}

            {filtered.length > 0 && (
               <div className="results-list">
                  {filtered.map(ticket => (
                     <div key={ticket.id} className="result-card">
                        <div className="result-card-left">
                           <div className="result-route">
                              🚆 {ticket.from} – {ticket.to}
                           </div>
                           <div className="result-time">
                              {ticket.date} {ticket.timeStart} — {ticket.timeEnd}
                           </div>
                        </div>

                        <div className="result-price" onClick={() => navigate("/ticket", { state: { ticket } })}
>
   {ticket.price} BYN

   <span className="result-arrow">
      <svg
         width="26"
         height="26"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M8 5L15 12L8 19"
            stroke="#683142"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   </span>
</div>

                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

export default ResultsPage;
