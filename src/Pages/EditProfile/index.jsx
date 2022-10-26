import React, {useState} from "react";
import EditProfilePNG from '/images/editprofile.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Modal from "../../Components/Modal/";
import Fade from 'react-reveal/Fade';


const editProfile = () => {

    const [username, setUsername] = useState('');
    const [lastName, setLastname] = useState('');
    const [healthInsurance, setHealthInsurance] = useState('');
    const [illness, setIllness] = useState([{id: 1, description: ''}])
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [url, setUrl] = useState('https://ajudajaapi.herokuapp.com/docs/#/')
    const [addInformation, setAddInformation] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    
    const [state, setState ] = useState([])

    const handleAdd = e => { 
        e.preventDefault()
        const abc = [...state, []]
        setState(abc)
    }

    const handleChange = (e, i)=> { 
        let inputData = [...state]
        inputData[i] = e.target.value
        setState(inputData)
    }

    const handleDelete = (e, i) => { 
        e.preventDefault()
        let deleteVal = [...state]
        deleteVal.splice(i, 1)
        setState(deleteVal)
    }

    const handleChangeIllness = (i,e) => { 
        let newFormValues = [...illness];
        let add = i + 1
        newFormValues[i].id = add++
        newFormValues[i].description = e.target.value;
        setIllness(newFormValues)
    
    }

    const addFormFields = (e) => { 
        e.preventDefault()
        let newFormValues = [...illness];
        let abc = [...illness, {id: '' , description: ''}]
            setIllness(abc)
        

    }

    const removeFormFields = (i) => { 
        let newFormValues = [...illness];
        newFormValues.splice(i, 1);
        setIllness(newFormValues)
    }



    return (
        <div className="w-full   bg-white">


                    {/* Content */}
                <div className="lg:w-[1080px] pt-32 pb-32 grid m-auto">
                  <Fade bottom>
                      
                      <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-10 py-5 rounded-lg pb-10 px-4">
                          <div className="flex justify-center items-center ">
                              <img className="w-[200px]" src={EditProfilePNG} alt="" />
                              <div className=" flex flex-col gap-2">
                                  <button className="px-6 py-2 rounded-lg text-white font-bold border  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Alterar foto</button>
                              </div>

                          
                          </div>
                          <div className="pt-4 formAndButtons flex flex-col lg:w-[550px] content-center ">
                              <form className="flex flex-col gap-5 items-center ">
                                  <input className=" border-b-2 w-[400px] text-xl" onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Nome"/>

                                    {addInformation ? <input className=" border-b-2 w-[400px] text-xl" onChange={e => setLastname(e.target.value)} value={lastName} type="text" placeholder="Sobrenome"/> : null}
                                  

                                  <input className="border-b-2 w-[400px] text-xl" onChange={e => setEmail(e.target.value)} value={email}  type="email" placeholder="E-mail"/>

                                  <input className="border-b-2 w-[400px] text-xl" onChange={e => setCellphone(e.target.value)} value={cellphone}  type="tel" placeholder="Telefone" />

                                 {addInformation ?  <input className="border-b-2 w-[400px] text-xl" onChange={e => setHealthInsurance(e.target.value)} value={healthInsurance}  type="tel" placeholder="Convênio Médico" /> : null }   
                                 

                                  <div className="flex gap-2 mr-16">
                                      <label className="text-xl " htmlFor="">
                                         Data de Nascimento
                                      </label>
                                      <input className="border-b-2 text-xl " type="date" value={birthday} onChange={e => e.target.value} />
                                  </div>
                                      <div className="self-start pl-1 lg:pl-[78px] font-bold text-xl"><label className="pr-6" > Contatos de emergência </label>
                                      <button onClick={handleAdd}>
                      
                                          <AddCircleOutlineIcon/>
                                      </button>
                                      </div>
                                  {state.map((data, i) => {
                                      return (
                                         <div key={i} className="flex gap-2">
                      
                                             <input className=" border-b-2  text-xl "  placeholder="Número de Emergência" onChange={e => handleChange(e, i)} type="tel" />
                                             <button onClick={e => handleDelete(e,i)}><DeleteForeverIcon/></button>
                                         </div>
                                      )
                                  })}

                                { addInformation ?  illness.map((element, index)=> (
                                       <div key={index} className="flex justify-center lg:justify-start  gap-1 items-center px-2">
                                
                                       <input className="border w-[300px] p-1 rounded-md" type="text"  placeholder="Insira sua doença ou alergia aqui"  onChange={e => handleChangeIllness(index, e)} />
                                       <button onClick={(e)=> addFormFields(e)} >
                                           <AddCircleOutlineIcon/> </button>
                                           {index ?
                                            <button onClick={() => removeFormFields(index)}>
                                            <DeleteForeverIcon />
                                        </button> : <div className="invisible"><DeleteForeverIcon /></div> }
                                
                                       </div>
                                )) : null}
                      
                      
                              </form>
                      
                              <div className="buttons py-6 pt-14 flex gap-4 justify-center">
                      
                                  <button className="border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white" onClick={_ => setOpenModal(true)}> Salvar</button>
                              <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border " onClick={_ => setAddInformation(!addInformation)}> {addInformation ? 'Voltar' : 'Informações Adicionais'}</button>
                              </div>
                             
                          </div>
                      </div>

                      
                  </Fade>

                  {openModal && <Modal label='Tem certeza que deseja alterar suas' labelStrong='Informações' confirmModal={'/myProfile'} closeModal={setOpenModal}/>}
                </div>

         
        </div>
    )
}

export default editProfile 