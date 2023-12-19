import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  Footer,
  FAQ,
} from "./components/MainPage";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
