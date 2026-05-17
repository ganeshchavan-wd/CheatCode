import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Upload.css'

function Upload() {
  const [question, setQuestion] = useState('')
  const [subject, setSubject] = useState('')
  const [code, setCode] = useState('')

  const handleUpload = () => {
    if (!question || !subject || !code) {
      alert('Fill all fields')
      return
    }

    const existingCodes =
      JSON.parse(localStorage.getItem('codes')) || []

    const formattedSubject =
      subject.trim().toLowerCase() === 'c++'
        ? 'C++'
        : subject.trim().charAt(0).toUpperCase() +
          subject.trim().slice(1).toLowerCase()

    const newCode = {
      id: Date.now(),
      question: question.trim(),
      subject: formattedSubject,
      code: code.trim()
    }

    localStorage.setItem(
      'codes',
      JSON.stringify([...existingCodes, newCode])
    )

    alert('Code uploaded successfully')

    setQuestion('')
    setSubject('')
    setCode('')
  }

  return (
    <div>
      <Navbar />

      <div className="upload-container">
        <h2>Upload Code</h2>

        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Subject (Java / Python / C++ / DBMS)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Paste your code here..."
          rows="12"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>

        <button onClick={handleUpload}>
          Upload Code
        </button>
      </div>
    </div>
  )
}

export default Upload