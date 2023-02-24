import Link from "next/link"
import { useState, useEffect } from "react";
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNubmer] = useState(0);

    useEffect(() => {
        console.log(number);
        setNubmer(number + 1);
    })

    return (
        <div className={styles.main}>
            <Link href="/">Go Home and Take a Nap</Link>
            <div className={styles.content}>
                <div>
                    Number of Assignments:
                </div>
                <div className={styles.number}>
                    {number}
                </div>
            </div>
        </div >
    )
}