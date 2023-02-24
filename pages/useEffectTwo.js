import Link from "next/link"
import { useState, useEffect } from "react"
import styles from '@/styles/UseEffectTwo.module.css'

export default function UseEffectTwo() {

    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return (
        <div className={styles.main}>
            <Link href="/">Go Home and Find a Job</Link>
            <div className={styles.content}>
                <div>
                    Account Balance after Paying Tuition
                </div>
                <div className={styles.number}>
                    ${number}
                </div>
            </div>
        </div>
    )
}