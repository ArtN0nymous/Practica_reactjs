import './App.css';
import { PersonasList } from './components/personasList';
import { PersonaForm } from './components/personaForm';
import database from './firebase';
import { useEffect, useState } from 'react';
function App() {
  const [personas,setPersonas]=useState([]);
  const savePerson=e=>{
    database.db.collection('personas').add({
      nombre:e.nombre,
      apellido:e.apellido,
      desc:e.desc
    }).then((result)=>{
      console.log('Guardado');
    }).catch((err)=>{
      console.log(err.code+' '+err.message);
    });
  }
  useEffect(()=>{
    leerPersonas();
  },[]);
  const leerPersonas=()=>{
    database.db.collection('personas').onSnapshot((result)=>{
      let p=[];
      result.forEach((doc)=>{
        p.push({
          id:doc.id,
          nombre:doc.data().nombre,
          apellido:doc.data().apellido,
          desc:doc.data().desc
        });
      });
      setPersonas(p);
    },(err)=>{
      console.log(err.code+' '+err.message);
    });
  }
  const eliminarPersona=(id)=>{
    database.db.collection('personas').doc(id).delete().then((result)=>{
      console.log('Documento Eliminado');
    }).catch((error)=>{
      console.log(error.code+' '+error.message);
    });
  }
  const actualizarPersona=(persona)=>{
    database.db.collection('personas').doc(persona.id).update({
      nombre:persona.nombre,
      apellido:persona.apellido,
      desc:persona.desc
    }).then((result)=>{
      console.log('Actualizado');
    }).catch((error)=>{
      console.log(error.code+' '+error.message);
    });
  }
  return (
    <>
      <div className='container p-4'>
        <div className="row">
          <PersonaForm savePerson={savePerson}/>
          <PersonasList leerPersonas={()=>leerPersonas()} personas={personas} eliminar={eliminarPersona} actualizar={actualizarPersona}/>
        </div>
      </div>
    </>
  );
}

export default App;
