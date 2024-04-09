// src/App.jsx
import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5" align="center" marginY={4}>
          Reserva tu turno en nuestras agencias.
        </Typography>
        <ReservationForm />
      </Container>
    </>
  );
}

export default App;

