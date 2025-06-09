import React, { useState } from 'react'

function NewsletterForm({ onBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks for signing up, ${name}!`)
    onBack()
  }

  return (
    <div>
      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onBack}>Back</button>
      </form>
    </div>
  )
}

export default NewsletterForm
