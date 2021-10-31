import styles from './styles.module.scss'

export function Programming(){
    return (
        <div className={styles.programmingContainer}>
             <div className={styles.pattern}>
                 <div className={styles.programmingContent}>
                     <h1>TECHNICAL SKILLS</h1>
                     <h3>"We can only see a little of the future, but enough to realize that there is a lot to be done." - Alan Turing</h3>
                        <div className={styles.levelContainer}>
                            <div className={styles.levelContent}>
                                <div className={styles.loader}><span>25%</span></div>
                                <h3>WEB DEV</h3>
                                <p>Node</p>
                                <p></p>
                            </div>
                            <div className={styles.levelContent}>
                                <div className={styles.loader}><span>25%</span></div>
                                <h3>FRONT DEV</h3>
                                <p>Vanilla js</p>
                                <p>React</p>
                            </div>
                            <div className={styles.levelContent}>
                                <div className={styles.loader}><span>25%</span></div>
                                <h3>TOOLING</h3>
                                <p>PostgresSQL</p>
                                <p></p>
                            </div>
                        </div>
                     <div className={styles.languageContainer}>
                        <h2>LANGUAGE SKILLS</h2>
                        <h3>“First, solve the problem. Then, write the code.” – John Johnson</h3>
                        <div className={styles.languageContent}>
                    

                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>JAVASCRIPT</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div> 
                                    <div className={styles.percent}>60% </div>
                                </div>
                            </div>
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>C</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.red}`}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div> 
                                    <div className={styles.percent}>60% </div>
                                </div>
                            </div>

                            

                        </div>
                        <div className={styles.languageContent}>
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>JAVA</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div> 
                                    <div className={styles.percent}>40% </div>
                                </div>
                                <div className={styles.finalLanguages}></div>
                            </div>
                            
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>PYTHON</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.red} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div> 
                                    <div className={styles.percent}>20% </div>
                                    
                                </div>
                                <div className={styles.finalLanguages}></div>
                            </div>
                        </div>

                        <div className={`${styles.languageContent} ${styles.context}`}>
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>PORTUGUESE (NATIVE)</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div> 
                                    <div className={styles.percent}>100% </div>
                                </div>
                                
                            </div>
                            
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>ITALIAN (ADVANCED)</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div> 
                                    <div className={styles.percent}>80% </div>
                                    
                                </div>
                                
                            </div>
                        </div>

                        <div className={`${styles.languageContent}`}>
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>ENGLISH (ADVANCED)</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div> 
                                    <div className={styles.percent}>80% </div>
                                </div>
                                
                            </div>
                            
                            <div className={styles.boxContainer}>
                                <span className={styles.languageName}>VENEZIAN (BASIC)</span>
                                <div className={styles.boxLanguage}>
                                    <div className={`${styles.percentLevel} ${styles.green} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} `}></div>
                                    <div className={`${styles.percentLevel} ${styles.background} ${styles.lastBorder} `}></div> 
                                    <div className={styles.percent}>20% </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>  
                 </div>
            </div>
        </div>
    );
}