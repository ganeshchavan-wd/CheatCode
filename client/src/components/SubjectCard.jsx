function SubjectCard({ subject, onClick }) {
  return (
    <div className="subject-card" onClick={onClick}>
      {subject}
    </div>
  )
}

export default SubjectCard