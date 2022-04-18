import { Level, levels } from '../../helpers/imc';
import styles from './style.module.css';
import UpImg from '../../assets/up.png';
import DownImg from '../../assets/down.png';

type Props = {
    item: Level
}

export const GridItem = ( { item }: Props ) => {
    return (
        <div className={styles.grid} style={{backgroundColor: item.color}}>
            <div className={styles.gridImg}>
                <img src={item.icon == 'down' ? DownImg : UpImg} width={30} alt="" />
            </div>
            <div className={styles.gridTitle}> {item.title} </div>

            {item.yourImc &&
                <div className={styles.yourImc}> O seu IMC é {item.yourImc} Kg/m²</div>
            }
            
            <div className={styles.gridInfo}> IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong> </div>
        </div>
    );
}