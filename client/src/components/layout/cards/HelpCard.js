import React, { useState, useEffect } from 'react';

function HelpCard(props) {
  const [step, setStep] = useState(1)

  const {
    step1Coords,
    step2Coords,
    step3Coords,
    step4Coords,
    step5Coords,
    isOpen,
    closeHelp
  } = props

  useEffect(() => {
    document.getElementById("step1").style.zIndex = step == 1 ? 3 : 1
    document.getElementById("step1").style.zIndex = step == 1 ? 3 : 1
    document.getElementById("step2").style.zIndex = step == 2 ? 3 : 1
    document.getElementById("step3").style.zIndex = step == 3 ? 3 : 1
    document.getElementById("step4").style.zIndex = step == 4 ? 3 : 1
    document.getElementById("step4").style.backgroundColor = step == 4 ? "white" : "white"
    document.getElementById("step5").style.zIndex = step == 5 ? 3 : 1
    document.getElementById("step5").style.backgroundColor = step == 5 ? "white" : "white"
  }, [step])

  const incrementStep = () => {
    const lastStep = step
    const newStep = lastStep + 1
    setStep(newStep)

    if (lastStep >= 5) {
      setStep(1)
      closeHelp()
    }
  }

  const decrementStep = () => {
    const lastStep = step
    const newStep = lastStep - 1

    if (lastStep <= 1) {
      setStep(1)
      closeHelp()
    }

    setStep(newStep)
  }

  const positioning = {
    top: step === 1 && step1Coords ? step1Coords.bottom :
         step === 2 && step2Coords ? step2Coords.bottom :
         step === 3 && step2Coords ? step3Coords.bottom :
         step === 4 && step2Coords ? step4Coords.bottom + 20 :
         step === 5 && step2Coords ? step5Coords.bottom + 20 : 0,
    left: step === 1 && step1Coords ? step1Coords.left :
          step === 2 && step2Coords ? step2Coords.left :
          step === 3 && step3Coords ? step3Coords.left :
          step === 4 && step4Coords ? step4Coords.left :
          step === 5 && step5Coords ? step5Coords.left : 0
  }

  return isOpen ? (
    <div className="help-card-placer" style={positioning}>
      <div className="help-card-container">
        <div className="help-card-number-container">
          <div className="help-card-number white">{step}</div>
        </div>
        <span className="help-card-close white" onClick={closeHelp}>&times;</span>
        <p className="help-card-main-content white">
          {
            step === 1 ? "Pronađite potreban artikal unosom oznake u polje pretrage ili po imenu proizvoda." :
            step === 2 ? "Ne znate oznaku? Iskoristite pretragu preko dimenzija, unosom mera u tri predviđena polja." :
            step === 3 ? "Pokusajte pronaci proizvod biranjem jedne od predodredjenih kategorija." :
            step === 4 ? "Nijedna od navedenih funkcija nije pomogla da pronađete potreban artikal? Pretražite naše kataloge." :
            step === 5 ? "Ni tada niste pronašli rešenje? Obratite se našem timu za za dodatnu pomoć na, slanjem maila direktno ili pozivom na ponuđene brojeve." :
            null
          }
        </p>
        <div className="help-card-progress uk-margin-bottom">
          <span className={step === 1 ? "help-card-progress-step help-card-progress-step-active" : "help-card-progress-step"}></span>
          <span className={step === 2 ? "help-card-progress-step help-card-progress-step-active" : "help-card-progress-step"}></span>
          <span className={step === 3 ? "help-card-progress-step help-card-progress-step-active" : "help-card-progress-step"}></span>
          <span className={step === 4 ? "help-card-progress-step help-card-progress-step-active" : "help-card-progress-step"}></span>
          <span className={step === 5 ? "help-card-progress-step help-card-progress-step-active" : "help-card-progress-step"}></span>
        </div>
        <div className="help-card-next-prev-controller uk-margin-top">
          <span
            className="help-card-prev white"
            onClick={decrementStep}
          >
            <i className="fas fa-arrow-left"></i> Prethodno
          </span>
          <span
            className="help-card-next white"
            onClick={incrementStep}
          >
            Sledece <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  ) : null;
}

export default HelpCard;
