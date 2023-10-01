import {TodoList} from "@/components/TodoList";
import {InputTodoForm} from "@/components/InputTodoForm";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <TodoList/>
            <InputTodoForm/>
        </div>
    )
}
