import { Plus } from "lucide-react"
import Header from "./components/Header"
import TodosList from "./components/TodosItem"
import { useState, type ChangeEvent, type SubmitEvent } from "react"
import type { Todo } from "./types"

function App() {

    const [todos, setTodos] = useState<Todo[]>([])
    const [text, setText] = useState("")
    const [error, setError] = useState("")

    // Validar el input del Todo
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()
        const trimmed = text.trim()
        if(trimmed === ""){
            setError("Escribe un Todo")
            return
        }
        setTodos(prev => [
            ...prev,
            { id: Date.now(), text: trimmed, completed: false}
        ])
        setText("")
        setError("")

    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleToggleComplete = (id: number) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const  handleDelete = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id ))
    }

    return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <div className="mx-auto w-full max-w-2xl">
          <Header />
      </div>
      <main className="w-full max-w-2xl bg-white rounded-2xl border border-slate-300
        shadow-lg shadow-slate-200 p-5">
        <form
            className="flex flex-col md:flex-row gap-2.5"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="¿Que necesitas hacer?"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl
                    font-geist text-lg"
                value={text}
                onChange={handleInputChange}
            />
            <button
                className="bg-blue-500 font-bold text-white font-geist
                flex items-center justify-center p-2 rounded-xl cursor-pointer"
                type="submit"
            >
                <Plus />
                Agregar
            </button>
        </form>
        {error && <p className="text-red-500 font-geist font-semibold mt-3">{error}</p>}
        <div className="bg-gray-100 p-3 mt-6 rounded-sm
            flex items-center justify-center gap-5 font-geist font-semibold
            text-gray-600">
            <button className="hover:text-gray-900 cursor-pointer">
                Todos
            </button>
            <button className="hover:text-gray-900 cursor-pointer">
                Completos
            </button>
            <button className="hover:text-gray-900 cursor-pointer">
                Pendientes
            </button>
        </div>
        <ul>
            {todos.map((todo) => (
                <TodosList
                    key={todo.id}
                    todo={todo}
                    onComplete={handleToggleComplete}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
      </main>
    </div>
  )
}

export default App
