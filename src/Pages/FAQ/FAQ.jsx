import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {
  principalDIV,
  cardFAQ,
  cardTitleFAQOne,
  cardTitleFAQ,
  cardContentFAQ,
  FAQ5ToUp,
} from './classTailwind';
import Fade from 'react-reveal/Fade';

export default function FAQ() {
  const [FAQ1, setFAQ1] = useState(false);
  const [FAQ2, setFAQ2] = useState(false);
  const [FAQ3, setFAQ3] = useState(false);
  const [FAQ4, setFAQ4] = useState(false);
  const [FAQ5, setFAQ5] = useState(false);

  return (
    <div className="w-full">
      <div className={principalDIV(FAQ5)}>
        <Fade left>
          <div className={cardFAQ()}>
            <div
              className={cardTitleFAQOne(FAQ1)}
              onClick={(e) => setFAQ1(!FAQ1)}
            >
              <h2 className="font-medium">O que é o Ajuda.Já?</h2>
              {FAQ1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div className={cardContentFAQ(FAQ1)}>
              <SubdirectoryArrowRightIcon />
              <p className="text-sm">
                O Ajuda já é um site que tem como objetivo ajudar pessoas que
                possuem alguma(s) condição(ões) de saúde, e correm algum risco
                no dia-a-dia.
              </p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={cardFAQ()}>
            <div className={cardTitleFAQ(FAQ1)} onClick={(e) => setFAQ2(!FAQ2)}>
              <h2 className="font-medium">Como o Ajuda.Já funciona?</h2>
              {FAQ2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div className={cardContentFAQ(FAQ2)}>
              <SubdirectoryArrowRightIcon />
              <p className="text-sm">
                Ao se cadastrar no Ajuda.Já, você terá a disosição, um QRCODE
                que Quando escaneado, ele levará ao seu perfil que irá conter
                informações sobre você, que podem evitar acidentes e problemas
                futuros.
              </p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={cardFAQ()}>
            <div className={cardTitleFAQ(FAQ2)} onClick={(e) => setFAQ3(!FAQ3)}>
              <h2 className="font-medium">Por que eu usaria o Ajuda.Já? </h2>
              {FAQ3 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div className={cardContentFAQ(FAQ3)}>
              <SubdirectoryArrowRightIcon />
              <p className="text-sm">
                Caso você ou alguém de sua familia se encaixe nesse perfil de
                usuario, e eventualmente essa pessoa sofra algum acidente por
                exemplo, esse alguém não irá correr o risco de receber uma
                injeção cuja ele tem alergia ou algum medicamento que não possa
                tomar.
              </p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={cardFAQ()}>
            <div className={cardTitleFAQ(FAQ3)} onClick={(e) => setFAQ4(!FAQ4)}>
              <h2 className="font-medium">Lorem ipsum</h2>
              {FAQ4 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div className={cardContentFAQ(FAQ4)}>
              <SubdirectoryArrowRightIcon />
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                facilis aperiam velit enim rem ratione, possimus, quos aut sint
                pariatur, voluptatum eligendi perferendis modi commodi officiis!
                Molestiae sit molestias voluptate.
              </p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={cardFAQ()}>
            <div
              className={FAQ5ToUp(FAQ4, FAQ5)}
              onClick={(e) => setFAQ5(!FAQ5)}
            >
              <h2 className="font-medium">Lorem ipsum</h2>
              {FAQ5 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div className={cardContentFAQ(FAQ5)}>
              <SubdirectoryArrowRightIcon />
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                facilis aperiam velit enim rem ratione, possimus, quos aut sint
                pariatur, voluptatum eligendi perferendis modi commodi officiis!
                Molestiae sit molestias voluptate.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
