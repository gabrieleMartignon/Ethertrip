import Header from "./components/header/header";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { arbitrum, mainnet, base } from "@reown/appkit/networks";
import BodyContent from "./components/bodycontent/bodycontent";

const projectId = import.meta.env.VITE_PROJECT_ID;

createAppKit({
  adapters: [new EthersAdapter()],
  networks : [mainnet, arbitrum, base],
  projectId,
  features: {
    analytics: true, 
  },
});




function App() {
  return (
    <>
      <Header />
      <BodyContent/>
    </>
  );
}

export default App;
