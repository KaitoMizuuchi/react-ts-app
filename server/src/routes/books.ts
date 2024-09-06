import { Router } from "express";
import { createBook, getAllBooks, getBookById, updateBookById } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.route("/")
    .get(getAllBooks)
    .post(createBook)

bookRouter.route("/:id")
    .get(getBookById)
    .put(updateBookById)
//     .delete(deleteBook)

export default bookRouter;
