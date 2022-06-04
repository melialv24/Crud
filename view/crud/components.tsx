import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {TCrud} from './types'

export const CrudV: FC<TCrud>= ({
    data: {
        data,
        name,
        phone,
        id
    },
    deleteData,
    handleSubmit,
    handleInputChange
}) => {
    return (
        <div style={{ width: '80%', margin: 'auto', padding: '20px 0px'}}>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', padding: '20px 0px'}}>
                    <div className="input-group" style={{ padding: '0px 5px'}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Id</span>
                        </div>
                        <input
                            className="form-control"
                            name='id'
                            value={id}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-group" style={{ padding: '0px 5px'}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Name</span>
                        </div>
                        <input
                            className="form-control"
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-group" style={{ padding: '0px 5px'}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Phone</span>
                        </div>
                        <input
                            className="form-control"
                            name='phone'
                            value={phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                
                
                <button type='submit'  className='btn btn-primary'>Guardar</button>
            </form>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col"> # </th>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((x,i) => 
                        <tr key={x.id}>
                            <th scope="row">{i}</th>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.phone}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={() => deleteData(x.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                }

                </tbody>
            </table>
        </div>
    )
}
