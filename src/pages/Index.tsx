// Index.tsx
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { ContactForm } from "@/components/ContactForm";
import Reservations from "@/components/Birds";
import Footer from "@/components/Footer";
import Feedback from "@/components/Skills";
import  ShoppingCart  from "@/components/CareerJourney";
import { CartProvider } from "@/components/CartContext";

const Index: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <CartProvider>
    <div className={`relative min-h-screen bg-background ${isCartOpen ? "overflow-hidden" : ""}`}>
      {/* Main Content */}
      <div className={`${isCartOpen ? "blur-sm bg-opacity-50 pointer-events-none" : ""}`}>
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Hero />
        <Menu />
        <section id="contact">
          <ContactForm />
        </section>
        <section id="reservations">
          <Reservations />
        </section>
        <section id="feedback">
          <Feedback />
        </section>
        <Footer />
      </div>
     
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
    </div>
    </CartProvider>
  );
};

export default Index;