import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, clearCart}) => {
    console.log(cart);
    //const [totalProduct, setTotalProduct] = useState(0);
    //finding the total price from the cart array
    let totalPrice = 0;
    let shippingCharge = 0;
    let totalProduct = 0;

    for(const product of cart){  
        //console.log(product.quantity)            
        totalProduct = totalProduct + product.quantity 
        totalPrice = totalPrice + (product.price * product.quantity)  ;
        shippingCharge = shippingCharge + (product.shipping * product.quantity);
    }
    

    //finding the total tax amount from the cart array
    let tax = 0;
    tax = parseFloat((totalPrice * 0.1).toFixed(2));
    //finding grand total
    const grandTotal = totalPrice + shippingCharge + tax;
    
    return (
        <div className='sticky top-0 p-10'>
            <p className='text-2xl font-bold'>Order Summary</p>
            <div className='mt-5 flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <p>Selected Items:</p>
                    <p className='font-bold'>{totalProduct}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total Price:</p>
                    <p className='font-bold'>${totalPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total Shipping Charge:</p>
                    <p className='font-bold'>${shippingCharge}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Tax:</p>
                    <p className='font-bold'>${tax}</p>
                </div>
                <div className='border-b-2 border-slate-400'></div>
                <div className='flex justify-between mt-2 items-center'>
                    <p className='text-xl font-semibold'>Grand Total:</p>
                    <p className='text-xl font-semibold'>${grandTotal.toFixed(2)}</p>
                </div>
            </div>
            <button className=" bg-red-500 hover:bg-red-700 p-3 rounded-lg hover text-white flex justify-between w-full mt-5  items-center" onClick={()=>clearCart()}>
                <p>Clear Cart</p>  
                <FontAwesomeIcon icon={faTrash}  />
            </button>
        </div>
    );
};

export default Cart;