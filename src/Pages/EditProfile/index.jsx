import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../Components/Modal/';
import Fade from 'react-reveal/Fade';
import Api from '../../Api/api';
import Input from '../../Components/TextField';
import { storage } from '../../Api/api';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { UTurnLeftSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const editProfile = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const fileInputRef = useRef(null);

  const [client, setClient] = useState({
    email: '',
    emergencynumber: '',
    avatar: '',
    helth_insurance: '',
    username: '',
    gender: '',
    name: '',
    lastname: '',
    birthday: '',
  });

  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('https://ajudajaapi.herokuapp.com/docs/#/');

  const id = localStorage.getItem('id');

  const config = {
    headers: {
      authorization: `${localStorage.getItem('token')}`,
    },
  };

  useEffect(() => {
    if (imageUpload) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUpload);
    } else {
    }
  }, [imageUpload]);

  const uploadImage = () => {
    if (preview == null) {
      
      handleSubmit(client.avatar);
    } else {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(imageRef).then((url) => {
          setOpenModal(true);
          setImgUrl(url);
          handleSubmit(url);
        });
      });
    }
  };

  useEffect(() => {
    Api.get(`/private/client/${id}`, config)
      .then((resp) => {
        setClient({
          username: resp.data.user.username,
          email: resp.data.user.email,
          emergencynumber: resp.data.user_informations.emergencynumber,
          avatar: resp.data.user_informations.avatar,
          helth_insurance: resp.data.user_informations.helth_insuranceo,
          birthday: resp.data.user_informations.birthday,
          gender: resp.data.user_informations.gender,
          name: resp.data.user_informations.name,
          lastname: resp.data.user_informations.lastname,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    username,
    email,
    emergencynumber,
    avatar,
    helth_insurance,
    birthday,
    gender,
    name,
    lastname,
  } = client;

  const handleChange = (props) => (e) => {
    let newClient = { ...client, [props]: e.target.value };
    setClient(newClient);
  };

  const handleSubmit = (url) => {
    Api.put(
      `/private/update/users/${id}`,
      {
        username,
        email,
      },
      config,
    )
      .then((resp) => {})
      .catch((err) => console.log(err));

    Api.put(
      `/private/client/update/${id}`,
      {
        birthday,
        emergencynumber,
        helth_insurance,
        gender,
        name,
        lastname,
        avatar: url,
      },
      config,
    )
      .then((resp) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full   bg-white">
      {/* Content */}
      <div className="lg:w-[1080px] pt-32 pb-32 grid m-auto">
        <Fade bottom>
          <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-16 py-5 rounded-lg pb-10 px-4">
            <div className="flex justify-center items-center gap-5 ">
              {preview ? (
                <img
                  className="w-32 h-32 rounded-[50%] border border-[#E3E6E3]"
                  src={preview}
                  alt=""
                />
              ) : (
                <img
                  className="w-32 h-32 rounded-[50%] border border-[#E3E6E3]"
                  src={client.avatar}
                  alt=""
                />
              )}

              <button
                className="px-5 py-2 rounded-lg text-white font-bold border  bg-navBg hover:bg-opacity-0 text-sm hover:text-navFontColor hover:border "
                onClick={() => fileInputRef.current.click()}
              >
                Alterar foto
              </button>

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                id="fileImg"
                onChange={(e) => setImageUpload(e.target.files[0])}
                className="ml-36 absolute hidden placeholder-colorFontParagraph max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "
              />
            </div>
            <div className="pt-4 formAndButtons flex flex-col  content-center ">
              <form className="flex flex-col gap-5 items-center ">
                <Input
                  info={client.email}
                  label="Email"
                  handleChange={handleChange('email')}
                />
                <Input
                  info={emergencynumber}
                  label="Telefone de emergência"
                  handleChange={handleChange('emergencynumber')}
                />
                <Input
                  info={client.helth_insurance}
                  label="Convênio Médico"
                  handleChange={handleChange('helth_insurance')}
                />
              </form>

              <div className="buttons py-6 pt-14 flex flex-col gap-2 justify-center">
                <button
                  className="border px-8 py-2 rounded-lg w-[100%] text-navFontColor font-bold  hover:bg-navBg hover:text-white"
                  onClick={uploadImage}
                >
                  <Link to="/myprofile">Salvar</Link>
                </button>
                <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border ">
                  <Link to="/myprofile">Voltar</Link>
                </button>
              </div>
            </div>
          </div>
        </Fade>

        {openModal && (
          <Modal
            label="Tem certeza que deseja alterar suas"
            labelStrong="Informações"
            confirmModal={'/myprofile'}
            closeModal={setOpenModal}
          />
        )}
      </div>
    </div>
  );
};

export default editProfile;
