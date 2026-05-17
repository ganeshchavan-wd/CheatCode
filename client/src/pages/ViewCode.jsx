import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import API from '../api/api'
import '../styles/ViewCode.css'

function ViewCode() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)
  const [question, setQuestion] = useState('')
  const [subject, setSubject] = useState('')
  const [code, setCode] = useState('')

  useEffect(() => {
    fetchCode()
  }, [])

  const fetchCode = async () => {
    try {
      const res = await API.get(`/codes/${id}`)
      setQuestion(res.data.question)
      setSubject(res.data.subject)
      setCode(res.data.code)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    alert('Code copied!')
  }

  const handleSave = async () => {
    try {
      await API.put(`/codes/${id}`, {
        question,
        subject,
        code
      })

      alert('Code updated successfully!')
      setIsEditing(false)
    } catch (error) {
      alert('Update failed')
    }
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this question?'
    )

    if (!confirmDelete) return

    try {
      await API.delete(`/codes/${id}`)
      alert('Question deleted!')
      navigate('/')
    } catch (error) {
      alert('Delete failed')
    }
  }

  return (
    <div>
      <Navbar />

      <div className="view-container">
        {isEditing ? (
          <>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="edit-input"
            />

            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="edit-input"
            />

            <textarea
              rows="15"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="edit-textarea"
            ></textarea>

            <button
              onClick={handleSave}
              className="save-btn"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <h2>{question}</h2>

            <p>
              <strong>Subject:</strong> {subject}
            </p>

            <div className="action-buttons">
              <button onClick={handleCopy}>
                Copy Code
              </button>

              <button
                onClick={() => setIsEditing(true)}
              >
                Edit Code
              </button>

              <button
                onClick={handleDelete}
                className="delete-btn"
              >
                Delete
              </button>
            </div>

            <pre>
              <code>{code}</code>
            </pre>
          </>
        )}
      </div>
    </div>
  )
}

export default ViewCode