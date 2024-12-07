import './App.css'
import RoutersContainer from './Router/RoutersContainer.jsx'
import { Provider } from 'react-redux'

function App() {
  //const [count, setCount] = useState(0)

  return (

    <>
    <Provider>
    <RoutersContainer  />
    </Provider>
   

      
    </>
  )
}

export default App
