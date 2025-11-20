import TicketSearchForm from "../components/TicketSearchForm.jsx";
import HelpSection from "../components/HelpSection.jsx";
import PromotionsSection from "../components/PromotionsSection.jsx";

function Home() {
   return (
      <div className="home-page">
         <section className="hero-section">
            <div className="hero-card">
               <TicketSearchForm />
            </div>
         </section>

         <HelpSection />
         <PromotionsSection />
      </div>
   );
}

export default Home;
