import { Link } from 'react-router-dom'

function CodeCard({ code, onDelete }) {
  return (
    <div className="code-card">
      <h3>{code.question}</h3>
      <p>{code.subject}</p>

      <div className="card-buttons">
        <Link to={`/view/${code._id}`}>
          <button>View Code</button>
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(code._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default CodeCard