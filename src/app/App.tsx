import { Navbar } from "@/components/layout";
import { Home } from "@/components/features/home";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Home />
      </main>
    </>
  );
}

export default App;
