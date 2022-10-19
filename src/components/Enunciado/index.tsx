import styles from "./Enunciado.module.css"
interface EnunciadoProps {
    texto: string
}

export function Enunciado({ texto }: EnunciadoProps) {
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>
                {texto}
            </span>
        </div>
    )
}