import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface FormInputType {
    name: string;
    email: string;
    gender: string;
}

const BookForm = () => {

    const { handleSubmit, control } = useForm<FormInputType>({
        defaultValues: {
            name: "",
            email: "",
            gender: "male"
        }
    })

        const onSubmit: SubmitHandler<FormInputType> = (data) => {
        console.log(data);
        }


    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{maxWidth: "500px", m:"auto"}}>
            <Stack spacing={2}>
            <Controller name="name" control={control} render={({field}) => (
                <TextField id="name" label="名前を入力" variant="outlined" color="primary" {...field} />
            )}
            />
            <Controller name="email" control={control} render={({field}) => (
                <TextField id="email" label="メールアドレスを入力" variant="outlined" color="primary" {...field} />
            )}
            />
            <Controller name="gender" control={control} render={({...field}) => (
                <FormControl >
                    <FormLabel id="gender-button-group-label">性別を選択</FormLabel>
                    <RadioGroup
                        {...field}
                        aria-labelledby="gender-button-group-label"
                    >
                        <FormControlLabel value="male" control={<Radio />} label="男性" />
                        <FormControlLabel value="female" control={<Radio />} label="女性" />
                        <FormControlLabel value="other" control={<Radio />} label="その他" />
                    </RadioGroup>
                </FormControl>
            )}
            />
            <Button type="submit" variant="contained">送信</Button>
            </Stack>
        </Box>
    )
}

export default BookForm;
