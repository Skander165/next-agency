import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link passHref href="/contact" className={styles.link}>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" alt="" width="40px" height="40px" />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV <br /> 123 456 789
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET <br /> USA
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
