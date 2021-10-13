
import { CartContext } from '../CartContext'
import { useState, useEffect, useContext } from 'react'

const Cart = () => {
    let total = 0;
    const [products, setProducts] = useState([]);
    const { cart,setCart } = useContext(CartContext);
    useEffect(() => {
        if (!cart.items) {
            return;
        }
        fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })


        })
            .then(res => res.json())
            .then(products => {
                setProducts(products);
            })
    }, [cart]);

    const getQty = (productId) => {
        return cart.items[productId];
    }
    const increment = (productId) => {
       const existingQty = cart.items[productId];
       const _cart = {...cart};
       _cart.items[productId] = existingQty + 1;
       _cart.totalItems += 1;
       setCart(_cart);
    }
    const decrement = (productId) => {
        const existingQty = cart.items[productId];
        if(existingQty === 1) {
            return;
        }
       const _cart = {...cart};
       _cart.items[productId] = existingQty - 1;
       _cart.totalItems -= 1;
       setCart(_cart);
    }
    const getSum = (productId,price) => {
        const sum = price*getQty(productId);
        total += sum;
        return sum;
    }
    const handleDelete = (productId) => {
        const _cart = {...cart};
        const qty = _cart.items[productId];
        delete _cart.items[productId];
        _cart.totalItems -= qty;
        setCart(_cart);
        setProducts(products.filter((product) => product._id !== productId));
    }

    const handleOrderNow = ()=> {
        window.alert('Order placed!');
        setProducts([]);
        setCart({});
    }



    return (

        products.length ?

        <div>
            <h1 className='font-bold mb-10'>Cart Items</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='h-16' src={product.image} alt="minipizza" />
                                    <span className='font-bold ml-4 w-48 '>{product.name}</span>
                                </div>
                                <div >
                                    <button onClick={() => { decrement(product._id) }} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                                    <b className='px-4'>{getQty(product._id)}</b>
                                    <button onClick={() => { increment(product._id) }} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                                </div>
                                <span>₹{getSum(product._id, product.price)}</span>
                                <button onClick={() => { handleDelete(product._id) }} className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
                            </div>
                        )
                    })
                }
            </ul>


            <hr className='my-6' />

            <div className='my-2 text-right'>
                <h1><b>Grand Total: ₹{total}</b></h1>

            </div>
            <div className='text-right'>
                <button onClick={handleOrderNow} className='bg-yellow-500 px-4 py-1 rounded-full'>Order Now</button>
            </div>
        </div>
        : <img className='mx-auto w-1/3 mt-12' src="/images/empty-cart.png" alt="" />


    )
}

export default Cart
