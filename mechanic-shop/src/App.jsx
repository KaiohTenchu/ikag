import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Mechanic's Shop</h1>
      </header>
      <main>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Oil Change</li>
            <li>Tire Rotation</li>
            <li>Brake Inspection</li>
            <li>Engine Diagnostics</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Mechanic's Shop</p>
      </footer>
    </div>
  )
}

export default App
