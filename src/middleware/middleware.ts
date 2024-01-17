import { defineMiddleware } from "astro:middleware";
const protectedUrls = ['/signin', '/signout', '/register', '/']
import { supabase } from "@lib/supabase";

export const onRequest = defineMiddleware(
    async ({url, redirect, cookies}, next) => {
        if(protectedUrls.includes(url.pathname)) {
            const { data } = await supabase.auth.getUser();
            const isLogged = data?.user !== null

            if(!isLogged) {
                return redirect('/signin')
            }
            return redirect('/')
        }
        return next()
    }
)
