import React, { useState, useEffect } from 'react';
import PersonSVG from '/images/image-firs-seasson.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Api from '../../Api/api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Options from '../../Components/Options/';
import { InputLabel } from '@mui/material';
import { loadingAlert, loginHandler } from '../../Components/Alerts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserInformation = () => {
  const INFO_ID = localStorage.getItem('infoId');
  const [formValues, setFormsValues] = useState(['']);
  const title = 'Algum dos campos adicionados não estão preenchidos';
  const text =
    'Preencha-o ou apague para que possamos prosseguir com o seu cadastro!';
  const icon = 'error';

  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i] = e.target.value;
    setFormsValues(newFormValues);
  };

  const addFormFields = () => {
    let newFormValues = [...formValues];
    let abc = [...formValues, { description: '' }];
    setFormsValues(abc);
  };

  const removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormsValues(newFormValues);
  };

  const validaForm = () => {
    formValues.map((i) => {
      if (i == '[object Object]' || i == '' || i == ' ') {
        loginHandler({ title, text, icon });
        stop();
      }
    }, addAllergy());
  };

  const addAllergy = () => {
    Api.post('/public/client/allergy/add', {
      info_id: INFO_ID,
      description: Object.values(formValues).toString(),
    }).then((resp) => {
      console.log(resp);
      navigate('/myprofile');
    });
  };

  return (
    <div className="bg-white ">
      <div className="w-full pt-28">
        <div className=" sm:p-5 md:w-[700px] lg:w-[1080px] m-auto pt-6">
          <div className="title px-2 pb-10">
            <h1 className="text-2xl  md:text-3xl font-bold pb-3">
              Informe aqui alguma alergia, condição ou síndrome que você possui!
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mb-28">
            <div className="flex lg:mt-[33px] flex-col gap-2 pl-5 ">
              <InputLabel>
                Insira alguma vulnarabilidade que você possua:
              </InputLabel>
              {formValues.map((element, index) => (
                <>
                  <div
                    key={index}
                    className="flex justify-center lg:justify-start  gap-1 items-center px-2"
                  >
                    <Options
                      value={formValues[index]}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <button onClick={() => addFormFields()}>
                      <AddCircleOutlineIcon />{' '}
                    </button>
                    {index ? (
                      <button onClick={() => removeFormFields(index)}>
                        <DeleteForeverIcon />
                      </button>
                    ) : (
                      <div className="invisible">
                        <DeleteForeverIcon />
                      </div>
                    )}
                  </div>
                </>
              ))}

              <div className="buttons flex lg:justify-start lg:pl-2 justify-center gap-4 pt-10">
                <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">
                  Voltar
                </button>
                <button
                  onClick={validaForm}
                  className="border px-6 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white "
                >
                  Avançar
                </button>
              </div>
            </div>

            <div className=" p-6 lg:flex-row  flex content-center items-center lg:items-start flex-col gap-2">
              <p className="text-lg ">
                Essas informações estarão visiveis em seu perfil,
                <strong> qualquer pessoa que escanar seu código QR </strong>
                irá visualiza-las.
              </p>

              <img
                className="w-[350px] md:block hidden"
                src={PersonSVG}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
