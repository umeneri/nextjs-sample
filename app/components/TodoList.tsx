"use client";

import {useAddTodo} from "@/hooks/useAddTodo";

export const TodoList: React.FC = () => {
    const {todos} = useAddTodo()

    return (
        <>
            <>TODO LIST</>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )

}
