import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/ViewCode.css'

function ViewCode() {
  const { id } = useParams()

  const savedCodes =
    JSON.parse(localStorage.getItem('codes')) || []

  const code = savedCodes.find(
    item => item.id === Number(id)
  )

  if (!code) {
    return (
      <div>
        <Navbar />
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
          Code not found
        </h2>
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <div className="view-container">
        <h2>{code.question}</h2>

        <p>
          <strong>Subject:</strong> {code.subject}
        </p>

        <pre>
          <code>{code.code}</code>
        </pre>
      </div>
    </div>
  )
}

export default ViewCode