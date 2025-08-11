import Header from "./components/header/header";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { arbitrum, mainnet, base } from "@reown/appkit/networks";

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
    </>
  );
}

export default App;
