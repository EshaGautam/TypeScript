import { Router } from "express";
import { TODO } from "../models/todos";

const router = Router();

let todos: TODO[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/add-todo', (req, res, next) => {
    const newTodo: TODO = req.body;
    todos.push(newTodo);
    res.status(200).json({ message: 'Todo added successfully', newTodo });
});

router.post('/delete-todo', (req, res, next) => {
    const todoId = req.body.id
     todos = todos.filter(todo => todo.id !== todoId);
    res.status(200).json({ message: 'Todo deleted successfully', todos });
});


router.post('/edit-todo', (req, res) => {
    const todoId = req.body.id;
    const updatedText = req.body.text;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex].text = updatedText;
        res.status(200).json({ message: 'Todo updated successfully', todo: todos[todoIndex] });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});


export default router;
