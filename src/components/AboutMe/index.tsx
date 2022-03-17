import styles from "./styles.module.scss";

export function AboutMe() {
  return (
    <div className={styles.aboutMeContainer} id="mouse">
      <div className={styles.introdution}>
        <div>
          <h1>RUAN TIENGO</h1>
          <h3>DEDICATED SOFTWARE ENGINEER</h3>
          <p>
            I am a 21 years old software engineer student focused in web
            development using JavaScript and Node. I really enjoy learn new
            technologies and build applications.
          </p>
        </div>

        <div className={styles.bio}>
          <div className={styles.aboutMe}>
            <h2>PERSONAL INFO</h2>
            <p className={styles.informationQuestion}>NAME</p>
            <p className={styles.informationAnswer}>Ruan Tiengo</p>

            <p className={styles.informationQuestion}>UNIVERSITY</p>
            <p className={styles.informationAnswer}>UFOP</p>

            <p className={styles.informationQuestion}>LOCATION</p>
            <p className={styles.informationAnswer}>🇧🇷 MG-BR</p>

            <button type="button">
              <a href="others/curriculo.pdf" target="_blank" rel="noreferrer">
                CURRICULUM
              </a>
            </button>
            <button type="button">
              <a
                href="https://www.github.com/ruantiengo"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </button>
          </div>

          <div className={styles.questions}>
            <h2>QUESTIONS</h2>
            <div className={styles.questionsContainer}>
              <p className={styles.question}>WHO AM I?</p>
              <p className={styles.answer}>
                I'm person who loves to program. Since my first C code at
                university i just fell in love for programming.
              </p>

              <p className={styles.question}>WHAT I'M REALLY GOOD AT?</p>
              <p className={styles.answer}>
                I'm always ready to learn and listen. I'm a fast thinker, i
                really love to find resolutions for small and big problems.
              </p>

              <p className={styles.question}>HOW CAN YOU CONTACT ME?</p>
              <p className={styles.answer}>
                You can just send me a email or call me on linkedin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
