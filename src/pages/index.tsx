import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 21, '2'),
    new Cliente('Biatriz', 43, '3'),
    new Cliente('Pedro', 54, '4')
  ]
  function clienteSelecionado(cliente) {
    console.log(cliente.nome)

  }
  function clienteExcluido(cliente) {
    console.log(`Excluir... ${cliente.nome}`)

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-t from-blue-500 to-punch-500
   `}>
    <Layout titulo="Cadrastro Simples">
      <Tabela clientes={clientes} 
      clienteSelecionado={clienteSelecionado}
      clienteExcluido={clienteExcluido}
      />
      </Layout>
    </div>
  )
}
