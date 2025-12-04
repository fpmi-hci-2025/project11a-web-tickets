import { useNavigate } from "react-router-dom";

function TicketSearchForm({ compact = false, style = {} }) {
   const navigate = useNavigate();

   // финальные данные — жестко зафиксированы
   const form = {
      from: "Минск",
      to: "Гродно",
      startDate: "2025-12-18",
      endDate: "2025-12-21"
   };

   function handleSubmit(e) {
      e.preventDefault();
      navigate("/results", { state: form });
   }

   return (
      <form
         className={compact ? "ticket-form compact" : "ticket-form"}
         onSubmit={handleSubmit}
         style={style}
      >
         {/* ГОРОДА */}
         <div className="ticket-form-row">
            <div className="ticket-input">
               <span className="ticket-label">Пункт отправки</span>
               <input
                  value={form.from}
                  disabled
               />
            </div>

            <div className="ticket-input">
               <span className="ticket-label">Пункт назначения</span>
               <input
                  value={form.to}
                  disabled
               />
            </div>
         </div>

         {/* ДАТЫ */}
         <div className="ticket-form-row">
            <div className="ticket-input">
               <span className="ticket-label">Дата начала поездки</span>
               <div className="ticket-input-row">
                  <input
                     type="date"
                     value={form.startDate}
                     disabled
                  />

                  {/* SVG НЕ ТРОГАЮ */}
                  <span className="ticket-icon">
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

            <div className="ticket-input">
               <span className="ticket-label">Дата конца поездки</span>
               <div className="ticket-input-row">
                  <input
                     type="date"
                     value={form.endDate}
                     disabled
                  />

                  {/* SVG НЕ ТРОГАЮ */}
                  <span className="ticket-icon">
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
   );
}

export default TicketSearchForm;
