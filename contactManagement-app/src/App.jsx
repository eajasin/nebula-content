import { useState } from 'react'

import './App.css'
import ContactListForm from '../components/ContactListForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactListForm />
    </>
  )
}

export default App
