import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
   const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')


  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 21, '2'),
    new Cliente('Biatriz', 43, '3'),
    new Cliente('Pedro', 54, '4')
  ]
  function clienteSelecionado(cliente) {
    setCliente(cliente)
    setVisivel('form')

  }
  function clienteExcluido(cliente) {
    console.log(`Excluir... ${cliente.nome}`)

  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('form')

  }
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-t from-blue-500 to-punch-500
   `}>
    
    <Layout titulo="Cadrastro Simples">
      {visivel === 'tabela' ? (
        <>
          <div className="flex justify-end">
          <Botao cor="green" className="mb-4"
            onClick={() => setVisivel('form')}>
            Novo cliente</Botao>

          </div>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
          />

        </>
      ):(
        <Formulario 
        cliente={cliente}
        clienteMudou={novoCliente}
       
        cancelado={() => setVisivel('tabela')}></Formulario>

      )}
      </Layout>
    </div>
  )
}
