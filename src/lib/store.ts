import {atom, map} from 'nanostores';

export type Error = {
    message?: string
}

export const NewMessage = atom('');
export const NewResponse = map({});
export const isLoading = atom(false);
export const Errors = map<Error>({message: ''});

export function SetNewResponse( response: string) {
    try {
        NewResponse.set(response)
    } catch (error) {
        return new Response('Bad request', {status: 400})
    }
}
export function SetNewMessage(message: string) {
    try {
        NewMessage.set(message)
    } catch (error) {
        return new Response('Bad request', {status: 400})
    }
}

export function SetNewError({message}: Error) {
    try {
        Errors.setKey('message', message)
    } catch (error) {
        return new Response('Bad request', {status: 400})
    }
}

