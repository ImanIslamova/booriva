



import styles from "./../../../../components/layot/nav/contacts/Contacts.module.css";
import Adress from "../../../../assets/icons/Adress";
import PhoneContacts from "../../../../assets/icons/PhoneContacts";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.adressContact}>
                <Adress/>
                <a href='https://maps.app.goo.gl/3rpsy7Z3XVXBsnfdA' target="_blank" className={styles.adressText}>
                    Грозный, проспект Кадырова 21б
                </a>
            </div>
            <div className={styles.phoneContact}>
                <PhoneContacts/>
                <a href="tel:+73339999999" className={styles.phoneText}>+7(333) 999 99 99</a>
            </div>
        </div>

    )

}
export default Contacts