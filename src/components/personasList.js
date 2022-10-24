import React, { useState } from "react";
import { Modal } from "react-bootstrap";
export const PersonasList=(props)=>{
    const handleClose = () => setPersona({...persona,display:false});
    const [persona,setPersona]=useState({
        id:'',
        nombre:'',
        apellido:'',
        desc:'',
        display:false
    });
    function editar(id,nombre,apellido,desc){
        setPersona({
            id:id,
            nombre:nombre,
            apellido:apellido,
            desc:desc,
            display:true
        });
    }
    const handleChangeText = (name,value)=>{
        setPersona({...persona,[name]:value.target.value});
    }
    function actualizar(){
        props.actualizar(persona);
        setPersona({...persona,display:false});
    }
    return(
        <>
        <p className="btn btn-outline-primary" onClick={()=>window.location.reload(false)}>Actualizar</p>
        <Modal show={persona.display} onHide={handleClose} id="modal">
            <Modal.Header closeButton>
                <Modal.Title>EDITAR</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">person</i>
                    </div>
                    <input type="text" className="form-control" placeholder="Nombre" name="nombre" onChange={(value)=>handleChangeText('nombre',value)} value={persona.nombre}/>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">format_align_justify</i>
                    </div>
                    <input type="text" className="form-control" placeholder="Apellido" name="apellido" onChange={(value)=>handleChangeText('apellido',value)} value={persona.apellido}></input>
                </div>
                <textarea name="desc" rows="4" className="form-control" placeholder="Descripción" onChange={(value)=>handleChangeText('desc',value)} value={persona.desc}></textarea>
            </Modal.Body>
            <Modal.Footer>
            <p className="btn btn-secondary" onClick={handleClose}>
                Close
            </p>
            <p className="btn btn-outline-success" onClick={()=>actualizar()}>
                Save Changes
            </p>
            </Modal.Footer>
        </Modal>
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
                                            <p className="btn btn-warning" onClick={()=>editar(p.id,p.nombre,p.apellido,p.desc)}>Editar</p>
                                            <p className="btn btn-danger" onClick={()=>props.eliminar(p.id)}>Eliminar</p>
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