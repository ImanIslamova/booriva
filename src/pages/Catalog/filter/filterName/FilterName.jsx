import styles from './filterName.module.sass';

const FilterName = ({title}) => {
    return (
        <p className={styles.filterName}>
            {title}:
        </p>
    )
}

export default FilterName;
