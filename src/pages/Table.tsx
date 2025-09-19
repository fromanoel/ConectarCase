import MainTitle from "../components/MainTitle"
import RouteNav from "../components/RouteNav"

const Table = () => {
  return (
    <>
      <RouteNav />
      <MainTitle
        title="Tabela de evolução do PIB:"
        subtitle={
          <>
            Consulte os <strong>dados anuais</strong> do{" "}
            <strong>PIB brasileiro</strong> de forma detalhada e organizada em
            tabela.
          </>
        }
      />
      <p>Table page!</p>
    </>
  )
}

export default Table
