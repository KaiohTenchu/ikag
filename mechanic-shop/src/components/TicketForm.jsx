import React, { useState } from 'react'

function TicketForm({ onBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [issue, setIssue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Ticket submitted. We will contact you soon!')
    onBack()
  }

  return (
    <div>
      <h2>Submit a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Issue Description
          <textarea value={issue} onChange={(e) => setIssue(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onBack}>Back</button>
      </form>
    </div>
  )
}

export default TicketForm
