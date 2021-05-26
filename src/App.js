 // importando nosso Item
 import Item from './components/Item';
 import Card from './components/Card';

// usando o Item dentro da ul - <Item />

// usando arrow funciton
const App = () => {
  return(
    <>
      <h1>Hello World!!! - Minha primeira aplicação com React</h1>
      <ul>
        <Item>
          Item 01
        </Item>
        <Item>
          Item 02
        </Item>
        <Item>
          Item 03
        </Item>
      </ul>
      <Card />
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
// receber a propriedade com <Item texto='Item 01' /> quando é declarado no index.js {props.texto}
