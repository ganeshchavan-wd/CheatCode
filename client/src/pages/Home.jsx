import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SubjectCard from '../components/SubjectCard'
import CodeCard from '../components/CodeCard'
import '../styles/Home.css'

function Home() {
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [codes, setCodes] = useState([])

  useEffect(() => {
    const savedCodes =
      JSON.parse(localStorage.getItem('codes')) || []

    setCodes(savedCodes)
  }, [])

  const subjects = ['All', 'Java', 'Python', 'C++', 'DBMS']

const filteredCodes =
  selectedSubject === 'All'
    ? codes
    : codes.filter(
        code =>
          code.subject.toLowerCase() ===
          selectedSubject.toLowerCase()
      )

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div className="sidebar">
          <h2>Subjects</h2>

          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
              onClick={() => setSelectedSubject(subject)}
            />
          ))}
        </div>

        <div className="content">
          <h2>Available Codes</h2>

          <div className="code-list">
            {filteredCodes.map(code => (
              <CodeCard key={code.id} code={code} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home