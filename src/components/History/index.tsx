import styles from './styles.module.scss'
export function Historic() {
    return (


        <section id={styles['conference-timeline']}>
            <div className={styles['styles.timeline-start']}>
                <div className={styles.start}><h1>WORK EXPERIENCES</h1></div>
            </div>
            <div className={styles['conference-center-line']}></div>
            <div className={styles['conference-timeline-content']}>



                <div className={styles['timeline-article']}>
                    <div className={styles['content-left-container']}>
                        <div className={styles['content-left']}>
                            <h3>MAXIMUS <span>(Jan. 2007 - Dec 2018)</span></h3>
                            <h4>Student</h4>
                            <p>  I always loved math, solving logical puzzles used  to be
                                my hobby. I got silver medal on Brazilian Astronomy Olympiad (OBA 2018) <span className={styles['article-number']}>01</span></p>
                        </div>

                    </div>
                    <div className={styles['content-right-container']}>


                    </div>
                    <div className={styles['meta-date']}>
                        <span className={styles.date}>01</span>

                    </div>
                </div>

                <div className={styles['timeline-article']}>

                    <div className={styles['content-right-container']}>
                        <div className={styles['content-right']}>
                            <h3>UFOP  <span>(July 2019 - Now)</span></h3>
                            <h4>Computer Engineer Student</h4>
                            <p>On that place I discovered what is development, I never stopped anymore. <span className={styles['article-number']}>02</span></p>
                        </div>
                    </div>
                    <div className={styles['meta-date']}>
                        <span className={styles.date}>02</span>

                    </div>
                </div>

            </div>

            <div className={styles['timeline-article']}>
                <div className={styles['content-left-container']}>
                    <div className={styles['content-left']}>
                        <h3>MEU GURU <span>(July 2021 - Now)</span></h3>
                        <h4>Tutor</h4>
                        <p>I'm working here as a freelancer helping people to solve their problems<span className={styles['article-number']}>03</span></p>
                    </div>

                </div>
                <div className={styles['content-right-container']}>


                </div>
                <div className={styles['meta-date']}>
                    <span className={styles.date}>03</span>

                </div>
            </div>

            <div className={styles['timeline-end']}>End</div>
        </section>



    )
}