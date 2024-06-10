import titleLine from './titlePink.svg';

import styles from './title.module.sass';

const TitleOrder = ({title, subtitle}) => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.titleOr}>
                {title}
                <img src={titleLine} alt="line" className='title-line'/>
            </h1>
            <p className={styles.subtitleOr}>
                {subtitle} 
            </p>
          
        </div>
      
        
    )
}
export default TitleOrder;