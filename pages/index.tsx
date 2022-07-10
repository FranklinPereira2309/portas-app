import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  const [qtdPortas, setQtdPortas] = useState(10)
  const [comPresente, setComPresente] = useState(5)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdPortas}
            onChange={novaQuantidade => setQtdPortas(novaQuantidade)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica
            text="Tem Presente?"
            value={comPresente}
            onChange={novoPresente => setComPresente(novoPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
