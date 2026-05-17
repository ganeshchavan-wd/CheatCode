import { Link } from 'react-router-dom'

function CodeCard({ code }) {
  return (
    <div className="code-card">
      <h3>{code.question}</h3>
      <p>{code.subject}</p>

      <Link to={`/view/${code.id}`}>
        <button>View Code</button>
      </Link>
    </div>
  )
}

export default CodeCard