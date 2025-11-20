function PromoCard({ title, subtitle }) {
   return (
      <div className="promo-card">
         <div className="promo-text">
            <h3>{title}</h3>
            <p>{subtitle}</p>
         </div>

         <span className="promo-arrow">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
               <g clipPath="url(#clip0_481_2491)">
                  <path
                     d="M10.3834 33.7163L13.3334 36.6663L30 19.9997L13.3334 3.33301L10.3834 6.28301L24.1 19.9997L10.3834 33.7163Z"
                     fill="#683142"
                  />
               </g>
               <defs>
                  <clipPath id="clip0_481_2491">
                     <rect width="40" height="40" fill="white" />
                  </clipPath>
               </defs>
            </svg>
         </span>
      </div>
   );
}

export default PromoCard;
