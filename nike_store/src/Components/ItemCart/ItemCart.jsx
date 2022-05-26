
import { useCartContext } from '../../Context/CartContext'
import './ItemCart.css'

const ItemCart = ({item}) => {
    const { deleteItem } = useCartContext()
    return (
        <div key={item.id} className="item row">
            <div className='itemDetail col-sm-8 row'>
                <div className="img">
                    <img src={item.imagenes[0]} alt="product image" />
                </div>
                <div className='col info'>
                    <p>{item.nombre}</p>
                    <p>{item.precio} €</p>
                </div>
            </div>

            <div className="itemBtns col-sm-4">
                <div className="counter">
                    <button  className='bg-dark btn-sm text-light'>-</button>
                    <div>{item.count}</div>
                    <button  className='bg-dark btn-sm text-light'>+</button>
                </div>
                <button onClick={()=>deleteItem(item.id)} className='btn bg-dark text-light'>Delete Product</button>
            </div>
        </div>
    )
}

export default ItemCart
