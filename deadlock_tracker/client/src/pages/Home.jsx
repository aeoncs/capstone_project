import styles from './Home.module.css';

export default function Home () {

   


    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Welcome to Deadlock Tracker</h1>


            <form className={styles.form}>
                <label htmlFor="search"></label>
                <input className={styles.input} type="text" id="search" placeholder='Search for players by name or steam id' />
                <button className={styles.button} type="submit">Search</button>
            </form>

            <button type="button" className={styles.steambutton}><img src='https://community.fastly.steamstatic.com/public/images/signinthroughsteam/sits_01.png' alt='Sign in with Steam' /></button>
        </div>
    )
}