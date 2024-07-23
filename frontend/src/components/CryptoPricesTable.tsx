import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPrices } from "../pricesSlice";
import { RootState } from "../store";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface Price {
  id: string;
  price: number;
  timestamp: string;
}

const CryptoPriceTable: React.FC<{ symbol: string }> = ({ symbol }) => {
  const dispatch = useDispatch();
  const prices = useSelector((state: RootState) => state.prices.prices);

  const fetchPrices = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/prices/${symbol}`);
      dispatch(setPrices(response.data));
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prices.slice(0, 20).map((price: Price) => (
            <TableRow key={price.id}>
              <TableCell>{price.price.toFixed(2)}</TableCell>
              <TableCell>{new Date(price.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoPriceTable;
