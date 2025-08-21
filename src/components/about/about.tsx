import Header from "../header/header";
import Footer from "../footer/footer.tsx";
export default function About() {
  return (
    <>
      <Header />
      <div className="w-[83vw] h-[65vh] flex m-auto justify-around items-center bg-blue-50 rounded-2xl shadow-md mt-[17vh] font-montserrat text-justify font-semibold">
        <p className="m-auto w-[60%]">
          This project was conceived and developed as part of the "Typescript,
          React, and Web3" course within the Master's program in Blockchain
          Development at <b>start2impact University</b>. The primary objective
          was to design and implement a <b>decentralized application (dApp)</b>{" "}
          that enables users to purchase products through blockchain-based
          payment systems.
          <br />
          <br />
          <b>Technologies integrated into this application include:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <b>IPFS</b> for decentralized image storage
            </li>
            <li>
              <b>Ether.js</b> to handle blockchain transaction logic
            </li>
            <li>
              <b>Tailwind CSS</b> for responsive and modern UI styling
            </li>
            <li>
              <b>React Router</b> for client-side routing and navigation
            </li>
            <li>
              <b>Reown</b> as the wallet connection interface
            </li>
          </ul>
        </p>
      </div>
      <Footer />
    </>
  );
}
