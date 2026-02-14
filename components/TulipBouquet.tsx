import React from 'react';

const TulipBouquet: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-2 overflow-hidden bg-[#eddec1]/30 rounded-3xl relative">
      <style>{`
        /* Variables convertidas a CSS nativo */
        :root {
          --light-green: #25af59;
          --green: #139a3e;
          --light-pink: #f3a69e;
          --pink: #ff8081;
          --yellowish: #eddec1;
        }

        .flower-container {
          position: relative;
          width: 300px;
          height: 450px;
          margin: 0 auto;
          transform: scale(0.8);
          /* Animación suave de flotación global */
          animation: floatContainer 6s ease-in-out infinite;
        }

        /* Clase base del tulipán */
        .tulip {
          width: 10px;
          height: 400px;
          position: absolute;
        }

        /* Posicionamiento de los 3 tulipanes */
        .main-tulip {
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .leftBabyTulip {
          transform: scale(0.6);
          left: 10px;
          top: 74px;
          z-index: 1;
        }

        .rightBabyTulip {
          transform: scale(0.8);
          right: 30px;
          top: 42px;
          z-index: 1;
        }

        /* Elementos compartidos */
        .stem, .stemLeaf, .tulipHead, .tulipLeaf, .tulipHair, .tulipEyes, .tulipSmile, .tulipBlush {
          position: absolute;
        }

        /* --- TALLO (Con Animación de Baile) --- */
        .stem {
          height: 200px;
          width: 10px;
          border-radius: 50px;
          background-color: var(--light-green);
          left: 50%;
          bottom: 0;
          /* Punto de anclaje en la base para que baile desde el suelo */
          transform-origin: bottom center;
          transform: translateX(-50%);
          z-index: 0;
        }

        /* Aplicamos el baile a los tallos con ritmos distintos */
        .main-tulip .stem {
            animation: stemDance 3s ease-in-out infinite;
        }
        .leftBabyTulip .stem {
            animation: stemDance 2.5s ease-in-out infinite alternate-reverse -0.5s;
        }
        .rightBabyTulip .stem {
            animation: stemDance 3.5s ease-in-out infinite 0.7s;
        }


        .stemLeaf {
          background-color: var(--green);
          width: 60px;
          height: 60px;
        }

        .leaf {
          border-radius: 90% 0 90% 0;
        }

        .rightStemLeaf {
          top: 60%;
          width: 100px;
          transform: rotate(-10deg);
          left: -1px;
        }

        .leftStemLeaf {
          top: 20%;
          width: 80px;
          transform: rotate(90deg);
          left: -63px;
          z-index: -2;
        }

        /* Ajustes específicos de las hojas bebés */
        .leftBabyTulip .rightStemLeaf {
          top: 105px;
          transform: rotate(-32deg);
          left: -15px;
        }
        
        .leftBabyTulip .leftStemLeaf {
          transform: scale(0.7) rotate(90deg);
          left: -54px;
        }

        .rightBabyTulip .tulipHead {
          transform: rotate(23deg);
          left: -80px;
        }
        
        .rightBabyTulip .leftStemLeaf {
          visibility: hidden;
        }
        
        .rightBabyTulip .rightStemLeaf {
          top: 70px;
          transform: rotate(-32deg);
          left: -15px;
        }

        /* --- CABEZA DEL TULIPÁN (Con rebote) --- */
        .tulipHead {
          top: -159px;
          left: -102px;
          background-color: var(--light-pink);
          width: 200px;
          height: 165px;
          border-radius: 0 0 50% 50%;
          z-index: 0;
          /* Mantenemos la rotación base y añadimos la animación de rebote */
          transform: rotate(-11deg);
          animation: headBob 2s ease-in-out infinite alternate;
        }

        /* Desfase en el rebote de las cabezas */
        .leftBabyTulip .tulipHead { animation-delay: 0.3s; }
        .rightBabyTulip .tulipHead { animation-delay: 0.6s; }


        .tulipLeaf {
          background-color: var(--pink);
          width: 40px;
          height: 40px;
          z-index: -1;
        }

        .rightTulipLeaf {
          transform: rotate(90deg);
          left: 4px;
        }

        .leftTulipLeaf {
          left: -33px;
        }

        /* Pelo / Pétalos */
        .tulipHair {
          width: 0;
          height: 0;
          top: -60px;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
        }

        .lightTulip {
          border-bottom: 60px solid var(--light-pink);
        }

        .darkTulip {
          border-bottom: 60px solid var(--pink);
          top: -32px;
          z-index: -1;
        }
        
        .darkTulip::after {
            content: '';
            position: absolute;
            left: -30px;
            top: 60px;
            width: 0; 
            height: 0; 
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            border-bottom: 32px solid #ff8081;
        }

        .darkTulip-1 { left: 30px; }
        .darkTulip-2 { left: 110px; }

        .lightTulip-1 {
          transform: rotate(-27deg);
          top: -43px;
          left: -17px;
        }

        .lightTulip-2 { left: 70px; }

        .lightTulip-3 {
          transform: rotate(27deg);
          top: -43px;
          left: 156px;
        }

        /* Cara */
        .tulipEyes {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #222;
          top: 55px;
        }
        .leftEye { left: 69px; }
        .rightEye { left: 119px; }

        .tulipSmile {
          width: 37px;
          height: 18.5px;
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          border: 5px solid #222;
          transform: rotate(180deg);
          top: 73px;
          left: 81px;
          border-bottom: 0;
        }

        .tulipBlush {
          border-radius: 50%;
          background-color: var(--pink);
          width: 30px;
          height: 30px;
          opacity: 0.5;
        }
        .leftBlush { top: 66px; left: 44px; }
        .rightBlush { top: 66px; left: 123px; }
        
        /* --- KEYFRAMES DE LAS ANIMACIONES (EL BAILE) --- */
        
        /* 1. Flotación suave de todo el contenedor */
        @keyframes floatContainer {
            0%, 100% { transform: scale(0.8) translateY(0px); }
            50% { transform: scale(0.8) translateY(-15px); }
        }

        /* 2. Baile del tallo (balanceo desde la base) */
        /* Importante: mantener el translateX(-50%) para que siga centrado */
        @keyframes stemDance {
            0%, 100% { transform: translateX(-50%) rotate(-3deg); }
            50% { transform: translateX(-50%) rotate(3deg); }
        }

        /* 3. Rebote de la cabeza (Head Bob) */
        /* Importante: mantener la rotación base original de cada cabeza */
        @keyframes headBob {
            0%, 100% { transform: rotate(-11deg) translateY(0); }
            50% { transform: rotate(-11deg) translateY(-8px) rotate(2deg); /* Pequeño salto y giro extra */ }
        }
        
        /* Ajuste para la cabeza del bebé derecho que tiene otra rotación base */
        .rightBabyTulip .tulipHead {
             animation-name: headBobRight;
        }
        @keyframes headBobRight {
            0%, 100% { transform: rotate(23deg) translateY(0); }
            50% { transform: rotate(23deg) translateY(-8px) rotate(-2deg); }
        }

      `}</style>

      <div className="flower-container">
        
        {/* Tulipán Central (Main) */}
        <div className="tulip main-tulip">
          <div className="stem">
            <div className="tulipHead">
              <div className="tulipHair lightTulip lightTulip-1"></div>
              <div className="tulipHair darkTulip darkTulip-1"></div>
              <div className="tulipHair lightTulip lightTulip-2"></div>
              <div className="tulipHair darkTulip darkTulip-2"></div>
              <div className="tulipHair lightTulip lightTulip-3"></div>
              <div className="tulipFace">
                <div className="leftEye tulipEyes"></div>
                <div className="rightEye tulipEyes"></div>
                <div className="tulipSmile"></div>
                <div className="leftBlush tulipBlush"></div>
                <div className="rightBlush tulipBlush"></div>
              </div>
            </div>
            <div className="rightTulipLeaf tulipLeaf leaf"></div>
            <div className="leftTulipLeaf tulipLeaf leaf"></div>
            <div className="rightStemLeaf stemLeaf leaf"></div>
            <div className="leftStemLeaf stemLeaf leaf"></div>
          </div>
        </div>

        {/* Tulipán Bebé Izquierdo */}
        <div className="tulip leftBabyTulip">
          <div className="stem">
            <div className="tulipHead">
              <div className="tulipHair lightTulip lightTulip-1"></div>
              <div className="tulipHair darkTulip darkTulip-1"></div>
              <div className="tulipHair lightTulip lightTulip-2"></div>
              <div className="tulipHair darkTulip darkTulip-2"></div>
              <div className="tulipHair lightTulip lightTulip-3"></div>
              <div className="tulipFace">
                <div className="leftEye tulipEyes"></div>
                <div className="rightEye tulipEyes"></div>
                <div className="tulipSmile"></div>
                <div className="leftBlush tulipBlush"></div>
                <div className="rightBlush tulipBlush"></div>
              </div>
            </div>
            <div className="rightTulipLeaf tulipLeaf leaf"></div>
            <div className="leftTulipLeaf tulipLeaf leaf"></div>
            <div className="rightStemLeaf stemLeaf leaf"></div>
            <div className="leftStemLeaf stemLeaf leaf"></div>
          </div>
        </div>

        {/* Tulipán Bebé Derecho */}
        <div className="tulip rightBabyTulip">
          <div className="stem">
            <div className="tulipHead">
              <div className="tulipHair lightTulip lightTulip-1"></div>
              <div className="tulipHair darkTulip darkTulip-1"></div>
              <div className="tulipHair lightTulip lightTulip-2"></div>
              <div className="tulipHair darkTulip darkTulip-2"></div>
              <div className="tulipHair lightTulip lightTulip-3"></div>
              <div className="tulipFace">
                <div className="leftEye tulipEyes"></div>
                <div className="rightEye tulipEyes"></div>
                <div className="tulipSmile"></div>
                <div className="leftBlush tulipBlush"></div>
                <div className="rightBlush tulipBlush"></div>
              </div>
            </div>
            <div className="rightTulipLeaf tulipLeaf leaf"></div>
            <div className="leftTulipLeaf tulipLeaf leaf"></div>
            <div className="rightStemLeaf stemLeaf leaf"></div>
            <div className="leftStemLeaf stemLeaf leaf"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TulipBouquet;