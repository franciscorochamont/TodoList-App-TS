import { ListTodo } from "lucide-react";


export default function Header() {

  return (
    <header className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <ListTodo className="text-blue-700 "/>
                <p className="font-geist text-xl text-blue-700">
                    Mi Espacio
                </p>
            </div>
            <div>
                <h1 className="font-geist text-3xl sm:text-4xl text-slate-700 font-bold tracking-tight">
                    Mis tareas
                </h1>
                <p className="font-geist text-slate-600 text-sm sm:text-base">
                    Organiza tu día, una tarea a la vez.
                </p>
            </div>
    </header>
  );
}
