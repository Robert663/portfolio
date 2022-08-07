import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Slide, Typography, Zoom } from '@mui/material';
import { FormHelperText } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3fhucal',
        'template_qbie9pa',
        e.currentTarget,
        'TDCm7XmYuyBBjMZd1'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email enviado com sucesso!');
        },
        (error) => {
          console.log(error.text);
          toast(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <Box
      minHeight="85vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h3" mb={5}>
        Entre em contato
      </Typography>
      <Slide direction='right' in timeout={1500}>
        <Container
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box id="form" component="form" ref={form} onSubmit={sendEmail}>
            <FormHelperText> O campo com (*) é obrigatório.</FormHelperText>
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              required
              label="Seu email"
              name="from_email"
              type="email"
            />
            <TextField fullWidth required label="Assunto" name="from_name" />
            <TextField
              fullWidth
              label="Descrição"
              multiline
              name="message"
              variant="filled"
              rows={5}
              sx={{ mt: 2 }}
            />
            <Box justifyContent="center" display="flex" mt={3}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: '70%' }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Container>
      </Slide>
    </Box>
  );
};
