import styles from './styles.module.scss'
import { BsMouse } from 'react-icons/bs'
import  Image  from 'next/image'


export function Main(){
    function getSmooth(){
        const _mouseScr= document.querySelector('#mouseDonw');
        _mouseScr?.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector("#mouse")?.scrollIntoView({
                behavior: "smooth"
            })
        })
    }
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContent}>
                    <div className={styles.personalPhoto}>
                    <Image src='/images/pp.webp' width='200px' height='192px' className={styles.personalPhoto}/>
                    </div>
                    <span className={styles.introduction}>Hello, It's me</span> 
                    <span className={styles.nameTitle}>Ruan Tiengo</span>
                    <span className={styles.profession}>SOFTWARE ENGINEER</span>
            </div>    
            <div className={styles.mouse}>
                        
                        <a href='#mouse' id="mouseDonw" onClick={getSmooth}>
                            <BsMouse size="30px" color="white"/>
                        </a>
            <script>
                
            </script>
                        
            </div>
        </div>
    )
}