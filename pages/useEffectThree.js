import Link from "next/link"
import { useState, useEffect } from "react"
import styles from '@/styles/UseEffectThree.module.css'


export default function UseEffectThree() {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10);
    }, [number])

    return (
        <div className={styles.main}>
            <Link href="/">Go Home and Take the Bus</Link>
            <div className={styles.content}>
                <div >
                    <button className={styles.button} onClick={() => setNumber(number + 1)}>+10 Years</button>
                </div>
                <div>
                    BCIT Parking Fee in {value} years later
                </div>
                <div className={styles.number}>
                    ${value} + tax
                </div>
            </div>
        </div>
    )
}