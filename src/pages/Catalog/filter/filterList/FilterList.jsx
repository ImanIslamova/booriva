import styles from './filterList.module.sass';

const FilterList = ({title}) => {
    return (
        <div className={styles.filterList}>
            {title}
        </div>
    )
}

export default FilterList;