import type { APIRoute } from "astro";
import { supabase } from "@lib/db/supabase";

export const GET: APIRoute = async ({request}) => {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    let response, errors;
    try {
        const { data, error } = await supabase.from('messages').select().eq('id', Number(id))
        if (error) errors = error;

        response = data;

    } catch (err) {
        return new Response('Error getting data', { status: 400 })
    }

    return new Response(JSON.stringify(response && response[0]), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
