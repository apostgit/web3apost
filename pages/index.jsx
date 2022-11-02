import styles from '../components/Index/Index.module.scss'
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.header}>
        <RoughNotation type='underline' show={true} color={'#54e2e7'} animationDelay={500} iterations={3}>
          web3apost.xyz
        </RoughNotation>
      </div>

      <div className={styles.scrollable}>
        <div className={styles.greetings}>
          <p>HELLO 👋, I'M</p>
          <p>Panagiotis Apostolidis</p>
          <p>WEB + BLOCKCHAIN DEVELOPER 🧑‍💻</p>
          <p>I'm a full-stack and blockchain developer based in Greece.</p>

          <RoughNotation type='circle' show={true} color={'#fd6262'} animationDelay={1000} padding={15}>
            <button onClick={() => window.open('https://metabloq.io/')}>
              CTO @ Metabloq
            </button>
          </RoughNotation>
        </div>
      </div>
    </div>
  )
}
