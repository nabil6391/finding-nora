import * as React from 'react'
import './App.css'
import Grid from './components/grid/'

const SOLUTION = 'NORA'.split('')
const NOISE = 'BCDEFGHIJKLM'.split('')

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <p>{SOLUTION.join('')}</p>
        <Grid size={5} solution={SOLUTION} noise={NOISE} />
      </div>
    )
  }
}

export default App
