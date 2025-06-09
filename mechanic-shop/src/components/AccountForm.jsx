import React, { useState } from 'react'

function AccountForm({ onBack }) {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [vin, setVin] = useState('')
  const [mileage, setMileage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Account created! Virtual demo coming soon.')
    onBack()
  }

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Make
          <input value={make} onChange={(e) => setMake(e.target.value)} />
        </label>
        <label>
          Model
          <input value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
        <label>
          Year
          <input value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <label>
          VIN
          <input value={vin} onChange={(e) => setVin(e.target.value)} />
        </label>
        <label>
          Mileage
          <input value={mileage} onChange={(e) => setMileage(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onBack}>Back</button>
      </form>
    </div>
  )
}

export default AccountForm
