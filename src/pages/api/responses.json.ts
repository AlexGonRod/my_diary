import results from '@data/results.json';
import type { APIRoute } from 'astro';

export const GET:APIRoute = ({ request }) => {
    console.log(JSON.stringify(results))
    return new Response(JSON.stringify(results), { status: 200 })
}
