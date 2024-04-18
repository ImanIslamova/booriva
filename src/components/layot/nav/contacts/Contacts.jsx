



import styles from "./../../../../components/layot/nav/contacts/Contacts.module.css";
import Adress from "../../../../assets/icons/Adress";
import PhoneContacts from "../../../../assets/icons/PhoneContacts";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.adressContact}>
                <Adress/>
                <div className={styles.adressText}>
                    Грозный, проспект Кадырова 21б
                </div>
            </div>
            <div className={styles.phoneContact}>
                <PhoneContacts/>
                <div className={styles.phoneText}>+8(333) 999 99 99</div>
            </div>
        </div>

    )

}
export default Contacts