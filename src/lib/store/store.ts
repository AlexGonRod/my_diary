import {atom, map} from 'nanostores';

export type Error = {
    message?: string,
    formMessage?: string
}
export type Conversations = {
    message: string[],
    responses: string[]
}

export const NewMessage = atom('');
export const NewResponse = map({});
export const Conversations = map([]);
export const isLoading = atom(false);
export const Errors = map<Error>({});

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

export function SetNewError({ message, formMessage }: Error) {
    try {
        Errors.set({ message, formMessage })
    } catch (error) {
        return new Response('Bad request', {status: 400})
    }
}

export function setConversations(conversations: any) {
    try {
        conversations.forEach(c => Conversations.setKey(c.id, conversations))
    } catch (error) {
        return new Response('Bad Request', {status: 400})
    }
}

