import "./App.css";
import { Header,
   MainContent,
    Footer,
     ProductSection,
      FAQ 
    } from "./components/Websection";

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
