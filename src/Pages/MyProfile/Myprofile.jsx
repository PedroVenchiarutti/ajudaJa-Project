import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import Fade from 'react-reveal/Fade';
import Api from '../../Api/api';
import InputReadOnly from '../../Components/ReadOnly';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyProfile = () => {
  const [client, setClient] = useState({
    username: '',
    email: '',
    cellphone: '',
    birthday: '',
    avatar: '',
    helth_insurance: '',
  });

  const [qrcode, setQrCode] = useState('');

  const id = localStorage.getItem('id');

  const [url, setUrl] = useState(
    `https://ajuda-ja-project-deploy.vercel.app/myprofilepublic/${id}`,
  );

  const config = {
    headers: {
      authorization: `${localStorage.getItem('token')}`,
    },
  };

  const GenerateQRCode = (_) => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      setQrCode(url);
    });
  };


  const getData = async () => { 
    try { 
      const res = await Api.get(`/private/client/${id}`, config)
      setClient({
            username: res.data.user.username,
            email: res.data.user.email,
            cellphone: res.data.user_informations.emergencynumber,
            birthday: res.data.user_informations.birthday , 
            helth_insurance: res.data.user_informations.helth_insurance,
            name: res.data.user_informations.name,
            avatar: res.data.user_informations.avatar
           })
    } catch(err) { 
      console.log(err)
    }
  }


  useEffect(() => {
    GenerateQRCode();
    getData()
  }, []);

  return (
    <div className="w-full  bg-white h-full ">
      <div className="lg:w-[1080px]  pt-32  pb-32 grid m-auto">
        {/* Content */}
        <Fade bottom>
          <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-10 py-5 rounded-lg pb-10 px-4">
            <div className="flex justify-center items-center ">
              <img
                className="w-32 h-32 rounded-[50%] border border-[#E3E6E3] object-cover mr-7"
                src={client.avatar}
                alt=""
              />

              <img src={qrcode} alt="" />
            </div>
            <div className="pt-4 formAndButtons flex flex-col lg:w-[500px] content-center gap-4 px-4 ">
              <InputReadOnly value={client.name} label="Nome" />

              <InputReadOnly value={client.email} label="Email" />

              <InputReadOnly
                value={client.cellphone}
                label="Número de Emergência"
              />

              <InputReadOnly
                value={client.birthday}
                label="Data de Nascimento"
              />

              <InputReadOnly
                value={client.helth_insurance}
                label="Convênio Médico"
              />

              <div className="buttons py-6 pt-14 flex gap-4 justify-center">
                <Link
                  to="/editprofile"
                  className="border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white "
                >
                  Editar
                </Link>

                <a href={qrcode} download="qrcode.png">
                  <button className=" px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border ">
                    Baixar Código QR
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MyProfile;
