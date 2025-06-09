import React from 'react'

function Home({ onSelect }) {
  return (
    <div className="home">
      <header className="header">
        <h1>IKAG Auto Solutions</h1>
        <p>DFW LOCAL. VETERAN OWNED. FAMILY OPERATED.</p>
      </header>
      <main>
        <h2>Welcome</h2>
        <p>Please choose an option below:</p>
        <div className="buttons">
          <button onClick={() => onSelect('newsletter')}>Sign Up for Newsletter</button>
          <button onClick={() => onSelect('ticket')}>Submit a Ticket</button>
          <button onClick={() => onSelect('account')}>Create an Account</button>
        </div>
      </main>
    </div>
  )
}

export default Home
