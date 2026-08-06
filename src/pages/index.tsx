import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";

import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteSelecionado,
    tabelaVisivel,
    excluirCliente,
      
  } = useClientes();

  function exibirTabela(): void {
   
  }

    return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-t from-blue-500 to-punch-500
   `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
             
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
