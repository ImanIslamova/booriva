import styles from './ticker.module.sass';

const Ticker = ({text}) =>{
    return (
        <div className = {styles.ticker}>
            <div className = {styles.tickerbox}>
                <div className = {styles.tickertext}>{text}</div>
                <div className = {styles.tickertext}>{text}</div>
                <div className = {styles.tickertext}>{text}</div>
                <div className = {styles.tickertext}>{text}</div>
                <div className = {styles.tickertext}>{text}</div>
                <div className = {styles.tickertext}>{text}</div>
            </div>
        </div>
    )
}

export default Ticker;