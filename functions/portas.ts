import { arrayBuffer } from "stream/consumers";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";

export function criarPortas(qtd: number, selecionada: number): PortaModel[]{
    return Array.from({length: qtd}, (_, i)=> {
        const numero = i + 1
        const temPresente = numero === selecionada

        return new PortaModel(numero, temPresente)
        
    })
}