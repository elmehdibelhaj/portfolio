import { Navbar } from "@/components/layout";
import { Home } from "@/components/features/home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Home />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
