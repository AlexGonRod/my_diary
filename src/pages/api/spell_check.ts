import type { APIRoute } from "astro";
import { fetchData } from '@lib/fetchData';
import { supabase } from "@lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formdata = await request.formData();
    const textarea = formdata.get('textarea')?.toString();

    if (!textarea) return new Response('No text added', { status: 400 })

    const { result_html_new } = await fetchData(textarea);

    const { error } = await supabase.from('messages').insert({ message: textarea, response: result_html_new })
    if (error) return new Response(error.message, { status: 500 })

    return redirect('/')
}
