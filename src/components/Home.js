import axios from "axios";
import {React, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {HomeStyled} from './styled/homeCss'
import Logo from '../img/form.png'
import Lupa from '../img/lupa.png'


const baseURL = "http://localhost:4000/form/"

function Home() {
  const [form, setForm] = useState([])
   

    const loadForm = async () => {
      const result = await axios.get(baseURL)
      setForm(result.data)
    }

    useEffect(()=>{
      loadForm()
    },[]);

    const deletForm = async (id)=> {
      await axios.delete(`${baseURL + id}`)
      loadForm()
    }

   
  //Ordenando array
    form.sort(function(a,b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });

  //Pesquisa de cliente 
    const buscCliente =({target})=>{
      if(!target.value){
        loadForm()
          return
      }
      const filt = form.filter((f)=>f.nome.toLowerCase().includes(target.value))
      setForm(filt)
     }



  return (<HomeStyled>
    <div>
      <header className="header">
      <img alt="logo" src={Logo}></img>
      <h1>Lista de Clientes</h1>
      </header>
      <div className="topo">
        <div className="pesquisa">
        <img alt="lupa" src={Lupa}></img>
        <input type="search" placeholder="buscar cliente" onChange={buscCliente}></input>
        </div>
      <Link to="/novocliente"><button>+Novo cliente</button></Link>
      </div>
        {form.map((item)=>{
          return(
            <ul key={item.id}>
            <li>{item.nome}</li>
            <li>{item.telefone}</li>
            <div className="btn-home">
            <li><Link to={{ pathname: `/cliente/${item.id}` }}> <button>Ver</button></Link> </li>
            <li><Link to={{ pathname: `/editar/${item.id}` }}> <button>Editar</button></Link></li>
            <li><button className="btn-del" onClick={ () => {deletForm(item.id)}}>Deletar</button></li>
           </div>
          </ul>
        )
        })}
    </div>
    </HomeStyled>);
}

export default Home;
