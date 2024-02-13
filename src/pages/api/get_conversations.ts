import type { APIRoute } from "astro";
import { supabase } from "@lib/db/supabase";

export const GET: APIRoute = async () => {
    let conversations;
    try {
        const { data, error } = await supabase.from('messages').select()
        if (error) {
            console.log(error)
            return new Response(error.message, { status: 400 })
        }

        conversations = data
    } catch (error) {
        console.log(error.message)
        return new Response(error?.message, { status: 500 })
    }

    return new Response(JSON.stringify(conversations), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
