/** USE STATE
 * 
 * 1º importar o useState que traz uma variável ou uma função
 * 2º crio uma variável
 * 3º chamar a função onClick
 */
import { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [valor, setValor] = useState(0) 

    function Adicionar () {
        setValor(valor + 1)
    }

    function Remover () {
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu Primeiro Card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;