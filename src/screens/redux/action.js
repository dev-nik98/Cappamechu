import { Add_TO_CART } from "../../utils/constants"; 
import{Remove_FROM_CART,USER_LIST} from '../../utils/constants'

 export function addToCart(item){
    return{
        type:Add_TO_CART,
        data:item
    }}




    export function removeFromCart(item){
        return{
    
        type: Remove_FROM_CART,
        data:item
    }
}

export function getUserList(){
    return{

    type: USER_LIST,
    
}
}