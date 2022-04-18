import react, { useState } from 'react';
import styles from './App.module.css';
import poweredImg from './assets/powered.png';
import { GridItem } from './components/gridItem';
import { levels, Level, calculo} from './helpers/imc';
import LeftArrow from './assets/leftarrow.png';

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalcImc = () => {
    if (height > 0 && weight > 0){
      setToShow(calculo(height, weight));
    } else{
      alert('Preencha os dois campos')
    }
  }    

  const handleBackMain = () => {
    setToShow(null)
    setHeight(0)
    setWeight(0)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContent}>
          <img src={poweredImg} alt=""/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          
          <input 
            type="number"
            placeholder='Digite a sua Altura. Ex: 1.70 (em metros)'
            value={height > 0 ? height : ''}
            onChange={e => setHeight(parseFloat(e.target.value))}
            disabled= {toShow ? true : false}
          />
          <input 
            type="number"
            placeholder='Digite o seu Peso. Ex: 68.7 (em Kg)'
            value={weight > 0 ? weight : ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
            disabled = {toShow ? true : false}
          />

          <button 
          disabled = {toShow ? true : false }
          onClick={handleCalcImc}> 
          Calcular </button>
        </div>

        <div className={styles.rightside}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, index)=>(
                <GridItem key={index} item={item}/>
              )
              )}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.backArrow} onClick={handleBackMain}>
                <img src={LeftArrow} alt="" width={30}/>
              </div>
              <GridItem item={toShow} /> 
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;