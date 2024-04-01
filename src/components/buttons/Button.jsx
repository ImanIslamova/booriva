import styles from './button.module.sass';

const Button = ({text}) => {
    return (
        <div className={styles.button}>
            {/* <svg width="206" height="50" viewBox="0 0 206 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.02517 34.6954L2.38232 29.5822L0.533659 9.75796C2.99437 7.03817 11.4153 1.56554 25.4131 1.43332C42.9104 1.26805 63.7914 0.201108 83.8509 1.16106C103.91 2.12101 134.516 2.69527 141.577 2.96073C148.637 3.22619 177.275 3.68572 186.448 7.1171C193.786 9.8622 200.419 14.8445 202.818 16.9926C202.059 17.3756 200.97 18.6104 202.685 20.4857C204.399 22.361 205.235 25.1773 205.438 26.351C204.421 26.9987 202.38 28.4584 202.355 29.116C202.324 29.9379 195.627 29.8919 198.932 31.0451C201.577 31.9676 202.154 34.3901 202.112 35.486C199.472 36.4156 193 38.2712 188.237 38.2568C183.474 38.2423 179.284 38.8119 177.785 39.0985L177.722 40.7425C179.941 41.1002 183.931 41.8812 182.134 42.1429C179.889 42.47 177.699 41.3588 175.817 41.9054C173.935 42.452 171.287 43.5871 173.501 44.0819C174.171 44.4863 174.835 44.7004 175.433 44.7965C176.174 44.7257 176.974 44.6749 177.573 44.6465C177.185 44.801 176.392 44.9506 175.433 44.7965C174.174 44.9165 173.088 45.0938 173.454 45.3148C174.036 45.6659 176.396 46.2485 177.503 46.4959L179.314 47.7986L173.368 47.5751C170.098 47.4521 170.719 48.7102 171.439 49.3546C170.567 49.459 168.305 49.566 166.237 49.159C163.651 48.6502 164.742 49.3086 160.275 49.3464C156.701 49.3767 143.674 48.7908 137.606 48.4941C138.112 48.2388 138.455 47.7029 135.78 47.6023C132.435 47.4766 132.064 47.4626 127.96 47.7199C123.857 47.9772 85.8422 46.507 73.2073 46.032L54.9981 45.3474C49.15 45.8135 35.3 46.6234 26.6847 46.1349C15.9157 45.5243 6.70373 43.1201 6.71157 42.9146C6.71784 42.7503 4.77927 41.5387 3.80921 40.9535C4.78711 41.3332 6.75077 41.8872 6.78213 41.0653C6.81349 40.2434 4.92301 37.7715 3.97385 36.6384L7.02517 34.6954Z" 
                fill="#FDA3C4"/>
                <path d="M13.639 46.6733C12.4498 46.6286 12.3689 47.4487 12.4771 47.8643L10.0538 47.979C8.85084 48.6197 6.66955 49.8684 7.5677 49.7375C8.46585 49.6067 10.1925 49.2189 10.9436 49.0413C11.4495 48.786 14.8398 48.3647 24.3531 48.7224C36.2448 49.1695 35.1457 48.7166 36.2605 48.7585C37.3754 48.8004 15.1255 46.7292 13.639 46.6733Z" fill="#FDA3C4"/>
            </svg> */}
            {text}
        </div>
    )
}

export default Button;