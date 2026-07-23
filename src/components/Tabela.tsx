import Cliente from "../core/Cliente"

interface TabelaProps {
    Clientes: Cliente[]

}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {

        return (
            
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }


    return (
        <table>
            {renderizarCabecalho()}
        </table>
    )

}