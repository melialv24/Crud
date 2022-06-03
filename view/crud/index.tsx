import React, { useState, FormEvent, ChangeEvent } from 'react'
import { CrudV } from './components'

export const CrudC = () => {

    const [data, setData] = useState([{ id: '1', name: 'melissa', phone: '3044970663'}])
    const deleteData = (id: string): void => {
        const arr = data.filter(x => x.id !== id)
        setData(arr)
    }
    const [form, setForm ] = useState({id:'',name: '' , phone: ''})
    const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const {name, id, phone} = form
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newRow = {id: id, name: name, phone: phone}
        setData([...data, newRow])
        setForm({id:'',name: '' , phone: ''})
    }

    return (
        <CrudV
            data = {{
                data,
                name,
                id, 
                phone
            }}
            deleteData= {deleteData}
            handleInputChange = {handleInputChange}
            handleSubmit = {handleSubmit}
        />
    )
}
