import { Box, Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface FormInputType {
  name: string;
  email: string;
}

const Contact = () => {
  const { handleSubmit, control } = useForm<FormInputType>()
  
  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    console.log(data);
  }


  return (
    <Container sx={{my: 3}}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{maxWidth: "500px", m:"auto"}}>
        <Stack spacing={2}>
          <Controller name="name" control={control} defaultValue="" render={({field}) => (
            <TextField id="name" label="名前を入力" variant="outlined" color="primary" {...field} />
          )}
          />
          <Controller name="email" control={control} defaultValue="" render={({field}) => (
            <TextField id="email" label="メールアドレスを入力" variant="outlined" color="primary" {...field} />
          )}
          />
          <Button type="submit" variant="contained">送信</Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default Contact
