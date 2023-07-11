import { m } from 'framer-motion';
import React, { useState } from 'react';
// @mui
import { Button, Typography, TextField, Stack } from '@mui/material';
//
import { varFade, MotionViewport } from '../../components/animate';

import { HOST_API } from '../../config';

// ----------------------------------------------------------------------

export default function FaqsForm() {

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    // e.preventDefault();
    console.log("email", form);
    try {
      fetch(`${HOST_API}/send-email`, { // replace with your server's address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'Email sent') {
            console.log("Email sent successfully");
          } else {
            console.log("Failed to send the email");
          }
        })
        .catch(error => {
          console.log("email error", error);
        });

    } catch (error) {
      console.log("email error", error);
    }
  };

  return (
    <Stack component={MotionViewport} spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h4">Haven't found the right help?</Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField name="name" fullWidth label="Name" onChange={handleChange} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField name="email" fullWidth label="Email" onChange={handleChange} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField name="subject" fullWidth label="Subject" onChange={handleChange} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField name="message" fullWidth label="Enter your message here." multiline rows={4} onChange={handleChange} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button  type="submit" size="large" variant="contained" onClick={(e) => { sendEmail()} }>
          Submit Now
        </Button>
      </m.div>
    </Stack>
  );
}
