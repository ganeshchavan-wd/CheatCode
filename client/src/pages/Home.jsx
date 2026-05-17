import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SubjectCard from '../components/SubjectCard'
import CodeCard from '../components/CodeCard'
import API from '../api/api'
import '../styles/Home.css'

function Home() {
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [codes, setCodes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCodes()
  }, [])

  const fetchCodes = async () => {
    try {
      setLoading(true)
      const res = await API.get('/codes')
      setCodes(res.data)
    } catch (error) {
      console.log(error)
      alert('Failed to load codes')
    } finally {
      setLoading(false)
    }
  }

  const dynamicSubjects = [
    'All',
    ...new Set(codes.map((code) => code.subject))
  ]

  let filteredCodes =
    selectedSubject === 'All'
      ? codes
      : codes.filter(
          (code) =>
            code.subject.toLowerCase() ===
            selectedSubject.toLowerCase()
        )

  filteredCodes = filteredCodes.filter((code) =>
    code.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this code?'
    )

    if (!confirmDelete) return

    try {
      await API.delete(`/codes/${id}`)
      fetchCodes()
    } catch (error) {
      console.log(error)
      alert('Delete failed')
    }
  }

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div className="sidebar">
          <h2>Subjects</h2>

          {dynamicSubjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
              onClick={() => {
                setSelectedSubject(subject)
                setSearchTerm('')
              }}
            />
          ))}
        </div>

        <div className="content">
          <h2>{selectedSubject} Codes</h2>

          <div className="search-wrapper">
            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder={`Search in ${selectedSubject}...`}
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="search-input"
            />
          </div>

          <div className="code-list">
            {loading ? (
              <p className="no-data">Loading codes...</p>
            ) : filteredCodes.length > 0 ? (
              filteredCodes.map((code) => (
                <CodeCard
                  key={code._id}
                  code={code}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p className="no-data">No codes found</p>
            )}
          </div>
        </div>
      </div>

      <footer className="developer-footer">
        <h4>Developers</h4>
        <div className="developer-container">
          <div className="developer-person">
            <p>Chinmayi Udata</p>
          </div>

          <div className="developer-person">
            <p>Ganesh Chavan</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
