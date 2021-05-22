// usando arrow funciton
const App = () => {
  return(
    <>
      <h1>Hello World!!! - Minha primeira aplicação com React</h1>
      <ul>
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          Item 01
        </a>
          <li>Item 02</li>
          <li>Item 03</li>
      </ul>
    </>
  )
}

export default App;

/*
OUTRA FORMA DE EXPORTAR O REACT DEFAULT

export default function App (){
  return(
    <h1>Hello World!!!</h1>
  )
}
*/

// HREF NÃO PODE ESTAR VAZIO, E class DEVE SER ESCRITO COMO className

