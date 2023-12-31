import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCardButton.module.css'
import CartContext from "../../store/cart-context"
import { useContext,useEffect,useState } from "react"
const HeaderCardButton = props =>{
    const [btnIsHighLighted,setBtnIsHighLighted] =useState(false)
    const cartctx=useContext(CartContext)
    const numberOfCartItems = cartctx.items.reduce((curNumber,item)=>{
        return curNumber+ item.amount
    },0)
    const {items} = cartctx
    const btnClasses= `${classes.button} ${btnIsHighLighted ? classes.bump: ''}`
    useEffect(()=>{
        if(items.length===0){
            return
        }
      setBtnIsHighLighted(true)
      const timer =setTimeout(()=>{
        setBtnIsHighLighted(false)
      },300)
      return ()=>{
        clearTimeout(timer)
      }

    },[items])
    return ( 
    <button className={btnClasses}  onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    )
} 
export default HeaderCardButton