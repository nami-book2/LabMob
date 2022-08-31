export interface ITopico {
    status: string,
    messagem: string,
    data: {
        id: number
        topico: string
    }[]
}

export interface ITopicoServer {
    id: number,
    topico: string  
}

export interface ITopicoState {
    id: number,
    topico: string  
}