import { Trash2 } from "lucide-react";
import type { Todo } from "../types";

type TodosListProps = {
    todo: Todo;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodosItem({ todo, onComplete, onDelete } : TodosListProps) {

    return (
        <li className="flex items-center justify-between
            mt-7 bg-blue-500 p-2.5 rounded-xl text-white font-geist text-2xl"
        >
            <label className="flex flex-1 items-center gap-4 cursor-pointer">
                <input
                    type="checkbox"
                    className="accent-blue-500 size-5"
                    checked={todo.completed}
                    onChange={() => onComplete(todo.id)}
                />
                <span className={`${todo.completed ? 'line-through text-gray-200' : ''}`}>
                    {todo.text}
                </span>
            </label>
            <button
                type="button"
                aria-label="Borrar Todo"
                onClick={() => onDelete(todo.id)}
                className="cursor-pointer"
            >
                <Trash2 />
            </button>
        </li>
    );
}
