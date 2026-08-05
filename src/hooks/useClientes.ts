import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../Backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function useCliente() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  async function salvarCliente(cliente: Cliente) {
    try {
      console.log("Tentando salvar o cliente:", cliente);
      await repo.salvar(cliente);
      console.log("Salvo com sucesso!");
      obterTodos(); // Recarrega a lista e volta para a tabela
    } catch (erro: any) {
      console.error("ERRO DO FIREBASE:", erro);
      alert(`Erro ao salvar: ${erro?.message || erro}`);
    }
  }return {
    
    novoCliente,
    salvarCliente,
    excluirCliente,
    clienteSelecionado,
    obterTodos,
    cliente,
    clientes
  }
}


