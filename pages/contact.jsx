import Circle from "../components/Circle";
import styles from "../styles/Contact.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input type="text" className={styles.inputS} placeholder="Username" />
        <input
          type="text"
          className={styles.inputS}
          placeholder="Phone Number"
        />
        <input type="text" className={styles.inputL} placeholder="Email" />
        <input type="text" className={styles.inputL} placeholder="Subject" />
        <textarea
          rows={6}
          className={styles.textArea}
          placeholder="Message"
        ></textarea>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default contact;
