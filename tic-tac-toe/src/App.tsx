
import { useState } from 'react'
import './App.css'
const initialBoard = () => Array(9).fill(null)

function App() {

  const [board, setBoard] = useState(initialBoard())

  console.log('board =>', board);
  
  return (
    <div className='game'>

    <div className='status'> Player X turn
    <button>Rest Game</button>
    </div>

    <div className="board">
      {/* board */}
    </div>

    </div>
  )
}

export default App
