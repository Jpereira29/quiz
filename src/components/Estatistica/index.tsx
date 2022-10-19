import styles from "./Estatistica.module.css"

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}
export function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? '#FDD60F',
                color: props.corFonte ?? '#333'
            }}>
                {props.valor}
            </div>

            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}