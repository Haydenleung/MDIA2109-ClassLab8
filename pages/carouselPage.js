import Carousel from "@/components/carousel"
import Link from "next/link"
import styles from '@/styles/CarouselPage.module.css'

export default function CarouselPage() {

    return (
        <div className={styles.main}>
            <Link href="/">Back to Reality</Link>
            <Carousel className={styles.content} />
        </div>
    )
}