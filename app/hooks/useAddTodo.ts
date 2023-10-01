"use client";

import {useEffect, useState} from "react";
import { supabase } from "@/lib/supabase";

export const useAddTodo = () => {
    const [todos, setTodo]:  [{[a:string]: any}[], any] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        const response = await supabase.from('todos').select("*")
        setTodo(response.data || [])
    }

    return {todos, fetchTodos}
}
