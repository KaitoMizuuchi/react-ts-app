import BookList from "@/features/home/components/BookList";
import { Container, Typography } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ mt: 2 }}>
                Reading List
            </Typography>
            <BookList />
        </Container>
    );
};

export default Home;
