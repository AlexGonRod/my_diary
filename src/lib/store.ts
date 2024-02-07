import {atom, map} from 'nanostores';

export type Error = {
    form?: string;
    message?: string
}

export const NewMessage = atom('');
export const NewResponse = atom('');
export const Errors = map<Error>({form: '', message: ''});

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

export function SetNewError({form, message}: Error) {
    try {
        if(form) Errors.setKey('form', form)
        if(message) Errors.setKey('message', message)
    } catch (error) {
        return new Response('Bad request', {status: 400})
    }
}

