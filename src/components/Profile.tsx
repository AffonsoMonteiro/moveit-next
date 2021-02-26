import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62681086?s=460&u=3a33e1ff7e07f1530e6f57c3f6fcab87e6566650&v=4" alt="Affonso" />

            <div>
                <strong>Afonso Monteiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}