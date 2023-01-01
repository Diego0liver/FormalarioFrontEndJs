import React from 'react'
import axios from "axios";
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {AddFormStyled} from './styled/addCss'


const Add = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    let history = useNavigate()
    const addForm = data => axios.post("http://localhost:4000/form/", data)
    .then(()=>{history("/")}).catch(()=>{alert('erro')})


  return (<AddFormStyled>
    <h1>Novo cliente</h1>
    <form onSubmit={handleSubmit(addForm)}>
    <div className='form-cont'> 
    <label>Nome:</label>
    <input type='text' name="nome" {...register("nome", 
    { required: true })} className={errors.nome ? "no" : "ok"}></input>
    <label>Sobre nome:</label>
    <input type='text'  name="sobre_nome" {...register("sobre_nome",
    { required: true })} className={errors.sobre_nome ? "no" : "ok"}></input>
    </div>
    <div className='form-cont'> 
    <label >Telefone:</label>
    <InputMask
    mask="(99)9999-9999"
    name="telefone"
    placeholder='(xx)xxxx-xxxx' {...register("telefone",
    { required: true })} className={errors.telefone ? "no" : "ok"} />
    <label >E-mail:</label>
    <input type="email"  name="email" placeholder='exemplo@ex.com' {...register("email",
    { required: true })} className={errors.email ? "no" : "ok"}></input>
    </div>
    <div className='form-cont'>
    <label >Data de nascimento:</label>
    <input type='date' name="datas" {...register("datas",
    { required: true })}  className={errors.data ? "no" : "ok"}></input>
    <label >Sexo:</label>
    <select  type='text' name="sexo" {...register("sexo",
    { required: true })} className={errors.sexo ? "no" : "ok"} >
    <option value=""></option>
    <option value="Homem">Homem</option>
    <option value="Mulher">Mulher</option>
    <option value="Outros">Outros</option></select>
    </div>
    <div className='form-cont'>
    <label >Estado civil:</label>
    <select type='text' name="estado_civil" {...register("estado_civil",
    { required: true })}className={errors.estado_civil ? "no" : "ok"} >
      <option value=""></option>
    <option value="Solteiro(a)">Solteiro(a)</option>
    <option value="Casado(a)">Casado(a)</option>
    <option value="Viuvo(a)">Viuvo(a)</option>
    <option value="Uniao E.">Uniao E.</option>
    </select>
    <label >CPF:</label>
    <InputMask mask="999.999.999-99" type='text' name="cpf" {...register("cpf",
    { required: true })} className={errors.cpf ? "no" : "ok"} ></InputMask>
    </div>
    <div className='form-cont'>
    <label >Renda salarial:</label>
    <input type='number' name="renda" {...register("renda",
    { required: true })} className={errors.renda ? "no" : "ok"} ></input>
    <label >CEP:</label>
    <InputMask mask="99999-999" type='text' name="cep" {...register("cep",
    { required: true })} className={errors.cep ? "no" : "ok"}></InputMask>
    </div>
    <div className='form-cont'>
    <label >Rua:</label>
    <input type='text' name="rua" {...register("rua",
     { required: true })} className={errors.rua ? "no" : "ok"}></input>
    <label >Cidade:</label>
    <input type='text' name="cidade" {...register("cidade",
    { required: true })} className={errors.cidade ? "no" : "ok"}></input>
    </div>
    <div className='form-cont'>
    <label >Estado:</label>
    <input type='text' name="estado" {...register("estado",
     { required: true })} className={errors.estado ? "no" : "ok"}></input>
    <label >Numero da casa:</label>
    <input type='number' name="n_casa" {...register("n_casa",
    { required: true })} className={errors.n_casa ? "no" : "ok"}></input>
    </div>
    <div className='form-cont'>
    <button className='btn' type="submit" >Salvar</button>
    <button className='btn' onClick={()=>history("/")}>Voltar</button>
    </div>
  </form>
  </AddFormStyled>
  )
}

export default Add