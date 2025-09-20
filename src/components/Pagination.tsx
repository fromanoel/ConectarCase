import "../styles/Pagination.css"
type PaginationProps = {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

const Pagination = ({ page, totalPages, setPage }: PaginationProps) => (
  <div className="pagination">
    <p>
      Página {page} de {totalPages}
    </p>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => setPage(i + 1)}
        className={page === i + 1 ? "active-page" : ""}
      >
        {i + 1}
      </button>
    ))}
  </div>
)

export default Pagination
