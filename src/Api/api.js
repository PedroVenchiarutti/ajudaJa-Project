import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MESSAGING_SENDER_ID,
};

// const getToken = () => { 
//     const storageToken = localStorage.getItem('token');
  
//   return storageToken
// }



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const Api = axios.create({
  // baseURL: import.meta.env.VITE_URL_API
  baseURL: 'http://localhost:3333/api',

});

// Usamos o interceptores para executar uma função antes que a Request e/ou Response seja iniciado
// https://www.zappts.com/blog/refresh-token-usando-axios-interceptors/
Api.interceptors.response.use(
  (response) => { 
    return response;
  },
  async function (error) { 
    //Ele acessa o token 
    const access_token = localStorage.getItem('token')
    // Se tiver o erro 401 que é o erro que o token já não é mais válido, ele utiliza a função do refreshToken
    if(error.response.status === 401 && access_token) { 
      const response = await refreshToken(error)
      return response
    }
    return Promise.reject(error)
  }
)

async function refreshToken(error) { 
  //Função para refreshar o token
  return new Promise((resolve, reject) => { 
    try { 
      const refreshToken = localStorage.getItem('refreshToken')
     Api.post('/public/refresh-token', {refreshToken})
     // Post para trocar o token
     .then(async (res) => { 
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('refreshToken', res.data.refreshToken)
      return resolve(res);
     })
     .catch((err) => { 
      console.log(err)
      return reject(error)
     })
    } catch(err) { 
      return reject(err)
    }
  })
}

export default Api;
