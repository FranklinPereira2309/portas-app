import PortaModel from "../model/porta";

export function criarPortas(qtd: number, comPresente: number): PortaModel[]{
    return Array.from({length: qtd}, (_, i)=> {
        const numero = i + 1
        const temPresente = numero === comPresente

        return new PortaModel(numero, temPresente)
        
    })
}

export function atualizarPortas(porta: PortaModel[], portaModificada: PortaModel) {
    return porta.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero

        if(igualModificada){
            return portaModificada
        }else{
            return portaModificada.aberta? portaAtual : portaAtual.desselecionar()
        }
    })
}