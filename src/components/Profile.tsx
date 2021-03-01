import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62681086?s=460&u=3a33e1ff7e07f1530e6f57c3f6fcab87e6566650&v=4" alt="Affonso" />

            <div>
                <strong>Afonso Monteiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Check" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}