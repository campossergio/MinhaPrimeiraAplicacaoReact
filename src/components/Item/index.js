// declarando parametros - props
// posso declarar obrigatoriamente com chaves {props.texto} ou {props.children}
// porém podemos chamar direto o ( { children} ) assim estamos desetruturando nossa 
// propriedade e acessando direto o componente

const Item = ( {children}) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            {children}
        </a>
    )
}

export default Item;