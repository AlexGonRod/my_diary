import type { APIRoute } from "astro";
import { supabase } from "@lib/supabase";

export const GET: APIRoute = async () => {
    const { data, error } = await supabase.from('messages').select()

        console.log(data)

    if (error) console.log(error.message)
    // return new Response('Error getting data', { status: 404 })

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
