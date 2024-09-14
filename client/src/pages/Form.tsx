import BookForm from "@/features/form/components/BookForm";
import { Container, Typography } from "@mui/material";
import React from "react";

const Form = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ mt: 2 }}>
                Input Form
            </Typography>
            <BookForm />
        </Container>
    );
};

export default Form;
