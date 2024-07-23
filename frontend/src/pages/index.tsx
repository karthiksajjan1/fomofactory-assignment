import React, { useState } from "react";
import CryptoPriceTable from "../components/CryptoPricesTable";
import ChangeCrypto from "../components/ChangeCrypto";

const Home: React.FC = () => {
  const [symbol, setSymbol] = useState("BTC");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Change Crypto</button>
      {isModalOpen && (
        <ChangeCrypto
          onChange={(newSymbol) => setSymbol(newSymbol)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <CryptoPriceTable symbol={symbol} />
    </div>
  );
};

export default Home;
