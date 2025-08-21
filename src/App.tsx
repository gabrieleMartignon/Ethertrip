import Header from "./components/header/header";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { sepolia } from "@reown/appkit/networks";
import MainSection from "./components/mainsection/mainsection";
import OurNumbers from "./components/travelcardSection/travelcardsection";
import Footer from "./components/footer/footer.tsx";

const projectId = import.meta.env.VITE_PROJECT_ID;

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [sepolia],
  projectId,
  features: {
    analytics: true,
  },
});

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <OurNumbers />
      <Footer />
    </>
  );
}

export default App;
