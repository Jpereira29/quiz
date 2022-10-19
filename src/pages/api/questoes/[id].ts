import { questoes } from "../bancoDeQuestoes"
export default function handler(req, res) {
    const idSelecionado = +req.query.id

    const questaoSelecionada = questoes.filter(questao=> questao.id === idSelecionado)

    if(questaoSelecionada.length === 1) {
      const qtaoelecionada = questaoSelecionada[0].embaralharRespostas()
      res.status(200).json(qtaoelecionada.paraObjeto())
    } else {
      res.status(204).send()
    }
  }
  