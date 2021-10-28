
import styles from './styles.module.scss'
import { BsGithub, BsBook } from 'react-icons/bs'
import { CgCoffee } from 'react-icons/cg'
import { GiTalk } from 'react-icons/gi'
import { useEffect, useState } from 'react';

export function Repositories(){
    const [github,setGithub] = useState([]);
    const [userChess,setUserChess] = useState([]);
    
    useEffect(()=>{
            fetch('https://api.github.com/users/ruantiengo/repos').then(res => res.json()).then(data=> {
                setGithub(data);
            })
            
    },[])
    
    github ? console.log(github) : console.log(0);
    return (
        <div className={styles.gitContainer}>
            <div className={styles.pattern}>
                <div className={styles.gitContent}>
                
                    <div className={styles.gitItem}>
                        <BsGithub color='#dddddd' size='100px'/>
                        <p className={styles.inf}>{github.length}</p>
                        <p>Projects done</p>
                    </div>
                    <div className={styles.gitItem}>
                        <GiTalk color='#dddddd' size='100px'/>
                        <p className={styles.inf}>3</p>
                        <p>Human languages</p>
                    </div>
                    <div className={styles.gitItem}>
                        <BsBook color='#dddddd' size='100px'/>
                        <p className={styles.inf}>4</p>
                        <p>Programming languages</p>
                    </div>
                    <div className={styles.gitItem}>
                        <CgCoffee color='#dddddd' size='100px'/>
                        <p className={styles.inf}>10.001</p>
                        <p>Cups Of Coffee</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}