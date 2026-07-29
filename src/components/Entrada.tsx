interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number' 
    valor: any
    somenteLeitura?: boolean

}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                className={`
                    border border-purple-500 rounded-lg
                `}/>

        </div>
    )
}