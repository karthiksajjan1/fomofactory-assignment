import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

interface ChangeCryptoProps {
  onChange: (newSymbol: string) => void;
  onClose: () => void;
}

const ChangeCrypto: React.FC<ChangeCryptoProps> = ({ onChange, onClose }) => {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = () => {
    onChange(symbol);
    onClose();
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Change Crypto Symbol</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Crypto Symbol"
          type="text"
          fullWidth
          variant="outlined"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeCrypto;
