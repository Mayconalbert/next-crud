import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../Backend/db/ColecaoCliente";

export default function Home() {

 const { 
    cliente,
   clientes, 
   novoCliente, 
   salvarCliente,
   selecionarCliente, 
   excluirCliente } = useClientes()
    return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-t from-blue-500 to-punch-500
   `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              {/* Corrigido: Agora chama a função novoCliente para resetar o formulário */}
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
