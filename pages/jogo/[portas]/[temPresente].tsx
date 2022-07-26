import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from '../../../functions/portas'
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Jogo() {
    const [portas, setPortas] = useState([])
    const [validar, setvalidar] = useState(false)
    
    const router = useRouter()
    
    useEffect(()=> {
        
        const qtdPortas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdePortasValidas = qtdPortas >= 3 && qtdPortas <= 100
        const temPresenteValido = temPresente >= 1 &&  temPresente <= qtdPortas

        setvalidar(qtdePortasValidas && temPresenteValido)
      

    }, [portas])

    useEffect(()=> {
        
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))

    }, [router?.query])

        

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta =>
                setPortas(atualizarPortas(portas, novaPorta))}

            />
        })
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {validar
                    ? renderizarPortas()
                    : <h2>Valores inválidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href={'/'}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}