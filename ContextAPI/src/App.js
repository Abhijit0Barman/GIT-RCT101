import "./styles.css";
import { Navbar } from "./components/Navbar";
import { MiddleSection } from "./components/MiddleSection";
import { Footer } from "./components/Footer";

export default function App() {

  return (
    <div>
      <Navbar />
      <MiddleSection />
      <Footer />
    </div>
  );
}
