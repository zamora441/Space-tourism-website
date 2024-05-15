import MainLayout from './layouts/MainLayout'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './styles.css'
import Index from './views/IndexView'
import Destination from './views/DestinationView'
import CrewView from './views/CrewView'
import TechnologyView from './views/TechnologyView'
import { HashRouter } from 'react-router-dom'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout/> }>
          <Route index element={<Index />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<CrewView />} />
          <Route path='technology' element={ <TechnologyView/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
