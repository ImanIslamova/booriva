import styles from './ticker.module.sass';

const Ticker = () =>{
    return (
        <div className = {styles.ticker}>
            <div className = {styles.tickerbox}>
                <div className = {styles.tickertext}>топовые товары</div>
                <div className = {styles.tickertext}>топовые товары</div>
                <div className = {styles.tickertext}>топовые товары</div>
                <div className = {styles.tickertext}>топовые товары</div>
                <div className = {styles.tickertext}>топовые товары</div>
                <div className = {styles.tickertext}>топовые товары</div>
            </div>
        </div>
    )
}

export default Ticker;