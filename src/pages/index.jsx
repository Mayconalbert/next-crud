import Layout from "../components/Layout"

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-t from-blue-500 to-punch-500
   `}>
    <Layout titulo="Cadrastro simples">
      <span>Conteudo</span>
    </Layout>
    </div>
  )
}
