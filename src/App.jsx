
import './App.css'
import Cards from './Components/Cards'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponents'

function App() {


  return (
    <>
    <ClassComponent/>
    <FuncComponent/>
    <Cards elemento={1}/> {/* 1*/}
    <Cards elemento={2}/> {/* 2*/}
    <Cards elemento={3}/> {/* 3*/}
    </>
  )
}

export default App
