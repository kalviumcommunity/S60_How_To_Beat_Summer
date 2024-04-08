import './App.css';
import Ddata from './Dummydata';

function App() {
  return (
    <>
    <div>
      <h2>Category: {Ddata.category}</h2>
      <img src={Ddata.image} />
      <h4>Health: {Ddata.health}</h4>
      <h4>Beauty: {Ddata.beauty}</h4>
      <h4>Dos: {Ddata.dos}</h4>
      <h4>Donts: {Ddata.donts}</h4>
    </div>
    </>
  )
}

export default App
