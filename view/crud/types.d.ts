
export type TData = {
    id:  string, 
    name: string, 
    phone: string
}

export type TCrud = {
    data: {
        data: Tdata[],
        name: string,
        phone: string,
        id: string
    }
    deleteData: (id: string) => void
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}