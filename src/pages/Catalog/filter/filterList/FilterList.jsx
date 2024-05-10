import styles from './filterList.module.sass';

const FilterList = ({name}) => {
    return (
        <div className={styles.filterList}>
            {name}
        </div>
    )
}

export default FilterList;