"use client";

import {FormEvent, useState} from "react";
import {useAddTodo} from "@/hooks/useAddTodo";
import { supabase } from "@/lib/supabase";

export const InputTodoForm = () => {
    const [title, setTitle] = useState('')
    const {fetchTodos} = useAddTodo()

    const pushTodo = async (e: FormEvent) => {
        e.preventDefault()
        const result = await supabase.from('todos').insert({
            id: 2,
            title,
            completed: false,
            created_at: new Date(),
        })
        console.log(result);
        await fetchTodos()
        setTitle('')
    }

    return (
        <form onSubmit={pushTodo}>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}
