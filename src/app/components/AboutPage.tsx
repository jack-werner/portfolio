import React, {useEffect, useState} from "react";
import { ImageCard } from "./ImageCard";
import { ResumeDownload } from "./ResumeDownload";
import styles from "./styles/about-page.module.css";
import { TextCard } from "./TextCard";

export const AboutPage = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        console.log("mounting");
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            console.log({scrollTop}); 
            setHeight(scrollTop);
        }
        window.addEventListener('scroll', handleScroll); 

        return () => {
            window.removeEventListener('scroll', handleScroll);  
        }
    }, []);

    const maxHeight = 120;
    const minHeight = 10;

    let divHeight = Math.max(minHeight, maxHeight-height);

    const style = {
        marginTop: `${divHeight+10}vh`, // +10 to give some padding after the header
    };

    return(
        <div className={styles.background} style={style}>
            <div className={styles.container}>
                <ImageCard></ImageCard>
            </div>
            <TextCard/>
            {/* <div className={styles.scroll}>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
                <p>........</p>
            </div> */}
        </div>
    )
}