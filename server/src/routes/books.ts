import { Router } from "express";
import { createBook, getAllBooks, getBookById } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.route("/")
    .get(getAllBooks)
    .post(createBook)

bookRouter.route("/:id")
    .get(getBookById)
//     .put(updateBook)
//     .delete(deleteBook)

export default bookRouter;
