import { Router } from "express";
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.route("/")
    .get(getAllBooks)
    .post(createBook)

bookRouter.route("/:id")
    .get(getBookById)
    .put(updateBookById)
    .delete(deleteBookById);

export default bookRouter;
