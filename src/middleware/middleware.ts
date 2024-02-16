import { defineMiddleware } from "astro:middleware";
import { supabase } from "@lib/db/supabase";

const protectedUrls = ['/signin', '/signout', '/register', '/']

export const onRequest = defineMiddleware(
    async ({url, redirect, cookies}, next) => {
        if(protectedUrls.includes(url.pathname)) {
            const user = cookies.get('sb-token')
            const { data } = await supabase.auth.getUser();
            const isLogged = data?.user !== null && user?.value !== undefined;

            if(!isLogged) {
                return redirect('/signin')
            }

            return redirect('/')
        }
        return next()
    }
)
