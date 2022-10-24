import React,{useState} from "react";
export const PersonaForm=(props)=>{
    const [state,setState]=useState({
        nombre:'',
        apellido:'',
        desc:''
    });
    const handleChangeText = (name,value)=>{
        setState({...state,[name]:value.target.value});
    }
    const handleSubmit=e=>{
        //si quitamos esto ala ctualizar la pagina no se guarda el registro;
        e.preventDefault();
        props.savePerson(state);
    }
    function limpiar(e){
        e.preventDefault();
        setState({...state,nombre:'',apellido:'',
        desc:''});
    }
    return(
        <>
            <div className="alert alert-success alertaOff" role="alert">Usuario guardado !</div>
            <form className="card card-body" onSubmit={handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">person</i>
                    </div>
                    <input type="text" className="form-control" placeholder="Nombre" name="nombre" onChange={(value)=>handleChangeText('nombre',value)} required value={state.nombre}/>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">format_align_justify</i>
                    </div>
                    <input type="text" className="form-control" placeholder="Apellido" name="apellido" onChange={(value)=>handleChangeText('apellido',value)} required value={state.apellido}></input>
                </div>
                <textarea name="desc" rows="4" className="form-control" placeholder="Descripción" onChange={(value)=>handleChangeText('desc',value)} required value={state.desc}></textarea>
                <div className="btn-group btn-group-lg">
                    <button className="btn btn-warning" onClick={(e)=>limpiar(e)}>Limpiar</button>
                    <button className="btn btn-success">Guardar</button>
                </div>
            </form>
        </>
    );
}