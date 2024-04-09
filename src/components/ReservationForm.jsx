

// import React from 'react';
// import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// const assistanceOptions = [
//   'NUEVOS PRODUCTOS', 'SERVICIO AL CLIENTE', 'SOLUCIÓN DE PROBLEMAS',
//   'CASOS EN INSTANCIAS LEGALES', 'CONSULTAS', 'CONVENIOS', 'PAGOS'
// ];

// const ecuadorCities = [
//   'ALAUSI', 'AMBATO', 'AZOGUES', 'BABAHOYO', 'BAHÍA DE CARÁQUEZ', 'CAÑAR', 'CHONE',
//   'CUENCA', 'DAULE', 'DURÁN', 'EL COCA', 'EL EMPALME', 'EL TRIUNFO', 'ESMERALDAS',
//   'GUARANDA', 'GUALACEO', 'GUAYAQUIL', 'IBARRA', 'JIPIJAPA', 'LA CONCORDIA',
//   // ...add all other cities as required
// ];

// const availableTimes = [
//   '12:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
//   // ...add all other times as required
// ];

// const ReservationForm = () => {
//   const [formValues, setFormValues] = React.useState({
//     assistance: '',
//     city: '',
//     agency: '',
//     date: '',
//     time: '',
//     idNumber: ''
//   });

//   const handleChange = (event) => {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formValues);
//     // Here you would typically send the form data to a server or otherwise process it
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//       <FormControl fullWidth margin="normal">
//         <InputLabel>¿Cómo te podemos ayudar?</InputLabel>
//         <Select
//           name="assistance"
//           value={formValues.assistance}
//           onChange={handleChange}
//         >
//           {assistanceOptions.map((option, index) => (
//             <MenuItem key={index} value={option}>{option}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <FormControl fullWidth margin="normal">
//         <InputLabel>Ciudad</InputLabel>
//         <Select
//           name="city"
//           value={formValues.city}
//           onChange={handleChange}
//         >
//           {ecuadorCities.map((city, index) => (
//             <MenuItem key={index} value={city}>{city}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <TextField
//         id="date"
//         label="Fecha de reserva"
//         type="date"
//         fullWidth
//         margin="normal"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         name="date"
//         value={formValues.date}
//         onChange={handleChange}
//         autoComplete="off"
//       />

//       <FormControl fullWidth margin="normal">
//         <InputLabel>Hora</InputLabel>
//         <Select
//           name="time"
//           value={formValues.time}
//           onChange={handleChange}
//         >
//           {availableTimes.map((time, index) => (
//             <MenuItem key={index} value={time}>{time}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="idNumber"
//         label="Número de identificación"
//         name="idNumber"
//         value={formValues.idNumber}
//         onChange={handleChange}
//         autoComplete="off"
//       />

//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//       >
//         Solicitar
//       </Button>
//     </Box>
//   );
// };

// export default ReservationForm;




import React from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const assistanceOptions = [
  'NUEVOS PRODUCTOS', 'SERVICIO AL CLIENTE', 'SOLUCIÓN DE PROBLEMAS',
  'CASOS EN INSTANCIAS LEGALES', 'CONSULTAS', 'CONVENIOS', 'PAGOS'
];

const ecuadorCities = [
  'ALAUSI', 'AMBATO', 'AZOGUES', 'BABAHOYO', 'BAHÍA DE CARÁQUEZ', 'CAÑAR', 'CHONE',
  'CUENCA', 'DAULE', 'DURÁN', 'EL COCA', 'EL EMPALME', 'EL TRIUNFO', 'ESMERALDAS',
  'GUARANDA', 'GUALACEO', 'GUAYAQUIL', 'IBARRA', 'JIPIJAPA', 'LA CONCORDIA',
  // ...add all other cities as required
];

const availableTimes = [
  '12:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
  // ...add all other times as required
];

const ReservationForm = () => {
  const [formValues, setFormValues] = React.useState({
    assistance: '',
    city: '',
    date: '',
    time: '',
    idNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // If the field is idNumber, only allow numeric input and max length 10
    if (name === 'idNumber' && value.length <= 10 && (/^\d*$/.test(value))) {
      setFormValues({ ...formValues, [name]: value });
    } else if (name !== 'idNumber') {
      // For all other fields, set the value as normal
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the ID number is exactly 10 digits long
    if (formValues.idNumber.length === 10) {
      console.log(formValues);
      // Here you would typically send the form data to a server or otherwise process it
    } else {
      alert('El número de identificación debe tener 10 dígitos.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>¿Cómo te podemos ayudar?</InputLabel>
        <Select
          name="assistance"
          value={formValues.assistance}
          onChange={handleChange}
        >
          {assistanceOptions.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Ciudad</InputLabel>
        <Select
          name="city"
          value={formValues.city}
          onChange={handleChange}
        >
          {ecuadorCities.map((city, index) => (
            <MenuItem key={index} value={city}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="date"
        label="Fecha de reserva"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        name="date"
        value={formValues.date}
        onChange={handleChange}
        autoComplete="off"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Hora</InputLabel>
        <Select
          name="time"
          value={formValues.time}
          onChange={handleChange}
        >
          {availableTimes.map((time, index) => (
            <MenuItem key={index} value={time}>{time}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        margin="normal"
        required
        fullWidth
        id="idNumber"
        label="Número de identificación"
        name="idNumber"
        value={formValues.idNumber}
        onChange={handleChange}
        autoComplete="off"
        inputProps={{ maxLength: 10, pattern: '\\d*' }}
        type="tel" // 'tel' type inputs automatically bring up a numeric keypad on mobile devices
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Solicitar
       </Button>
     </Box>
   );
 };

 export default ReservationForm;
