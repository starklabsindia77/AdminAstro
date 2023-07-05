import React, { useState } from 'react';
// import { SMTPClient } from 'emailjs';
import { Button, TextField, Typography, Stack } from '@mui/material';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../components/animate';
// const client = new SMTPClient({
// 	user: 'astroscore1@gmail.com',
// 	password: 'Baba@1234',
// 	host: 'smtp.your-email.com',
// 	ssl: true,
// });

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    try{
      // client.send(
      //   {
      //     text: form.message,
      //     from: form.name + ` <${from.email}>`,
      //     to: 'astroscore1@gmail.com',
      //     //cc: 'else <else@your-email.com>',
      //     subject: from.subject,
      //   },
      //   (err, message) => {
      //     console.log(err || message);
      //   }
      // );

    }catch(error){
      console.log("email error", error);
    }
  };

  return (
    <Stack component={MotionViewport} spacing={5} onSubmit={sendEmail}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">
          Feel free to contact us. <br />
          We'll be glad to hear from you. 
        </Typography>
      </m.div>

      <Stack spacing={3}>
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
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button type="submit" size="large" variant="contained">
          Submit Now
        </Button>
      </m.div>
    </Stack>
  );
}
