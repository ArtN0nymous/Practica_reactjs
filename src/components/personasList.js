import React, { useEffect, useState } from "react";
export const PersonasList=(props)=>{
    return(
        <>
        <p className="btn btn-outline-primary" onClick={()=>window.location.reload(false)}>Actualizar</p>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       props.personas.map((p,i)=>{
                            return(
                                <tr key={i}>
                                    <th scope="row">{i}</th>
                                    <td>{p.nombre}</td>
                                    <td>{p.apellido}</td>
                                    <td>{p.desc}</td>
                                    <td>
                                        <div className="btn-group btn-group-sm">
                                            <p className="btn btn-warning">Editar</p>
                                            <p className="btn btn-success" onClick={()=>props.eliminar(p.id)}>Eliminar</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}