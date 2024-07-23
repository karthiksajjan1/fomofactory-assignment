import React, { useState } from "react";
import CryptoPriceTable from "../components/CryptoPricesTable";
import ChangeCrypto from "../components/ChangeCrypto";
import { Button, Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  const [symbol, setSymbol] = useState("BTC");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cryptocurrency Prices
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
        sx={{ mb: 2 }} // margin bottom for spacing
      >
        Change Crypto
      </Button>
      {isModalOpen && (
        <ChangeCrypto
          onChange={(newSymbol) => setSymbol(newSymbol)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <CryptoPriceTable symbol={symbol} />
    </Container>
  );
};

export default Home;
