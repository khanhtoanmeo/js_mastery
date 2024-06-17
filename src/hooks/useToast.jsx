import {useState} from 'react';
import {IconButton, Snackbar} from '@mui/material';
import {Close} from "@mui/icons-material"

export default function useToast() {
  const [message, setMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'timeout') setMessage('');
  };

  const toast = (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      open={!!message}
      message={message}
      onClose={handleClose}
      action={ <IconButton  onClick={() => setMessage('')}>
      <Close  fontSize="large" />
    </IconButton>}
      
    />
  );

  return {toast, setToast: setMessage};
}
