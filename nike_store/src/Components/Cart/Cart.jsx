import { useContext } from "react"
import { contexApp } from "../../App"

const Cart = () => {
  const string= useContext(contexApp)

  console.log(string)
  return (
    <div>
      CART
    </div>
  )
}

export default Cart
