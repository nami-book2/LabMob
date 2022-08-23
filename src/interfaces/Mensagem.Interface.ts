export interface IMensagem {
    titulo?: string,
    mensagem?: string,
    topico?: number[],
    image?: {
        uri?: string
        base64: string | any
    }
    file?: string
}

export interface IMensagemResponse {
    status: string,
    message: string,
    data: {
        id: number
        titulo: string
        mensagem: string
        image: string
        topico: {
            id: number
            item: string
        }[]
        user: {
            id: number
            name: string
        }[]
    }
}
export interface IMensagemState {
    id: number
    titulo: string
    mensagem: string
    image: string
    topico: {
        id: number
        item: string
    }[]
    user: {
        id: number
        name: string
    }
}