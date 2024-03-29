import titleLine from './titleline.svg';

import styles from './title.module.sass';

const Title = ({title, subtitle}) => {
    return (
        <h1 className={styles.title}>
            {title}
            <p className={styles.subtitle}>
                {subtitle} 
                <img src={titleLine} alt="line" className='title-line'/>
            </p>
        </h1>
    )
}
export default Title;