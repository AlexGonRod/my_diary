import type { APIRoute } from "astro";
import { fetchData } from '@lib/fetchData';
import { supabase } from "@lib/supabase";
import { SetNewMessage } from '@lib/store';

export const POST: APIRoute = async ({ request, redirect }) => {
    const formdata = await request.formData();
    const textarea = formdata.get('textarea')?.toString();

    if (!textarea) return new Response('No text added', { status: 500 })
    let res = {}

    try {

        const result = await fetchData(textarea);
        if (result?.status !== 'success') console.log(result?.message)
        const { data, error } = await supabase.from('messages').upsert({ message: result?.result_text_old, response: result?.result }).select()
        if (error) return new Response(error.message, { status: 500 })

        res = data[0];
        SetNewMessage(res?.id, res?.message, res?.response)
    } catch (error) {
        console.log(error)
        return new Response('Internal server error', { status: 500 })
    }

    return redirect(`/${res.id}`)
}
