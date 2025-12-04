import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Deals from "./pages/Deals.jsx";
import Support from "./pages/Support.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import TicketPage from "./pages/TicketPage.jsx";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import SuccessPage from "./pages/SuccessPage";
import Register from "./pages/Register.jsx";
import SupportChat from "./pages/SupportChat.jsx";
import DealDetails from "./pages/DealDetails.jsx";






function App() {
   return (
      <AuthProvider>
     
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/deals/:id" element={<DealDetails />} />

            <Route path="/support" element={<Support />} />
            <Route path="/support/chat" element={<SupportChat />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/results" element={<ResultsPage />} />
           <Route path="/ticket" element={<TicketPage />} /> 
           <Route path="/seats" element={<SeatSelectionPage />} />
           <Route path="/success" element={<SuccessPage />} /> 

            {/* <Route path="/services" element={<ServicesPage />} /> */}
  {/* <Route path="/payment" element={<PaymentPage />} />
*/}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Layout>
      </AuthProvider>
   );
}

export default App;
