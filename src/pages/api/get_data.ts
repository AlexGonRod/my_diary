import type { APIRoute } from "astro";
import { supabase } from "@lib/supabase";

export const GET: APIRoute = async ({request}) => {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    const { data, error } = await supabase.from('messages').select().eq('id', Number(id))

    if (error) return new Response('Error getting data', { status: 404 })

    return new Response(JSON.stringify(data[0]), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
