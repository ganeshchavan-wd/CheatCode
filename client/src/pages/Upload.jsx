import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Upload.css'
import API from '../api/api'

function Upload() {
  const [question, setQuestion] = useState('')
  const [subject, setSubject] = useState('')
  const [customSubject, setCustomSubject] = useState('')
  const [code, setCode] = useState('')

  const handleUpload = async () => {
    const finalSubject = customSubject.trim() || subject

    if (!question || !finalSubject || !code) {
      alert('Fill all fields')
      return
    }

    try {
      await API.post('/codes', {
        question,
        subject: finalSubject,
        code
      })

      alert('Code uploaded successfully')

      setQuestion('')
      setSubject('')
      setCustomSubject('')
      setCode('')
    } catch (error) {
      alert('Upload failed')
    }
  }

  return (
    <div>
      <Navbar />

      <div className="upload-container">
        <h2>🚀 Upload Code</h2>

        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
          <option value="DBMS">DBMS</option>
        </select>

        <input
          type="text"
          placeholder="Or type custom subject"
          value={customSubject}
          onChange={(e) => setCustomSubject(e.target.value)}
        />

        <textarea
          rows="14"
          placeholder="Paste your code here..."
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