import {atom, map} from 'nanostores'

export type Message = {
    id: Number,
    message: string,
    response: string
};

export const BaseMessage = atom('');
export const NewMessage = map<Record<string, Message>>({});
export const isLoading = atom(false)

export function SetNewMessage(id: number, message: string, response: string) {
    try {
        NewMessage.setKey('message', {id, message, response})
    } catch (error) {
        return new Response('bad request', {status: 400})
    }
}

