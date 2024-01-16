import type { APIRoute } from "astro";
import { fetchData } from '@lib/fetchData';
import { supabase } from "@lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const { data } = await supabase.auth.getUser()

    if (data.user !== null) {
        const formdata = await request.formData();
        const textarea = formdata.get('textarea')?.toString();

        if (!textarea) return new Response('No text added', { status: 500 })

        const result = await fetchData(textarea);
        console.log(result)

        if (result?.status !== 'success') return new Response(result?.message, { status: 400 })

        const { error } = await supabase.from('messages').insert({ message: result?.result_text_old, response: result?.result })

        if (error) return new Response(error.message, { status: 500 })

        return redirect('/')
    }


}

