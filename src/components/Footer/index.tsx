import styles from "./styles.module.scss";
import {
  ImFacebook,
  ImTwitter,
  ImYoutube,
  ImGithub,
  ImLinkedin,
} from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div>
          <a
            href="https://www.facebook.com/ruan.tiengo"
            className={styles.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook color="#fff" />
          </a>

          <a
            href="https://www.instagram.com/tiengoruan/"
            className={styles.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram color="#fff" />
          </a>

          <a
            href="https://www.twitter.com"
            className={styles.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <ImTwitter color="#fff" />
          </a>
          <a
            href="https://www.youtube.com/user/ruantiengo"
            className={styles.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <ImYoutube color="#fff" />
          </a>
          <a
            href="https://github.com/ruantiengo/"
            className={styles.github}
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/ruan-tiengo/"
            className={styles.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin color="#fff" />
          </a>
        </div>
      </div>
      <div className={styles.autor}>
        <span>Ruan Tiengo profile, 2021</span>
      </div>
    </div>
  );
}
