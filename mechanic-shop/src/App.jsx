import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen.jsx'
import Home from './components/Home.jsx'
import NewsletterForm from './components/NewsletterForm.jsx'
import TicketForm from './components/TicketForm.jsx'
import AccountForm from './components/AccountForm.jsx'

function App() {
  const [page, setPage] = useState('loading')

  if (page === 'loading') {
    return <LoadingScreen onFinish={() => setPage('home')} />
  }

  if (page === 'home') {
    return <Home onSelect={setPage} />
  }

  if (page === 'newsletter') {
    return <NewsletterForm onBack={() => setPage('home')} />
  }

  if (page === 'ticket') {
    return <TicketForm onBack={() => setPage('home')} />
  }

  if (page === 'account') {
    return <AccountForm onBack={() => setPage('home')} />
  }

  return null
}

export default App
