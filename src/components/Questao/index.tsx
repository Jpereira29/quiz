import styles from "./Questao.module.css"
import { QuestaoModel } from "../../models/questao"
import { Enunciado } from "../Enunciado"
import { Resposta } from "../Resposta"
import { Temporizador } from "../Temporizador"

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps {
    questao: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}
export function Questao({ questao, respostaFornecida, tempoEsgotado, tempoPraResposta }: QuestaoProps) {
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />

            <Temporizador duracao={tempoPraResposta ?? 10} tempoEsgotado={tempoEsgotado} key={questao.id} />

            {questao.respostas.map((resposta, i) => {
                return <Resposta
                    key={`${questao.id}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={respostaFornecida}
                />
            })}
        </div>
    )
}