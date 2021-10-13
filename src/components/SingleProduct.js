import { useParams,useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'

const SingleProduct = () => {
    
    const history = useHistory();
    const params = useParams();
    
    const [product,setProduct] = useState({});
    useEffect( ()=>{
        fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
        .then(res => res.json())
        .then(product =>{
            setProduct(product);
        })
    },[params._id])
    
    
    
    return (
        <>
        

            <div className='container mx-auto w-4/5 mt-12 '>
                <button onClick={()=>{history.goBack()}} className='font-bold mb-12'>Back</button>
                <div className='flex'>
                    <img src={product.image} alt="" />
                    <div className='ml-6'>
                        <h1 className='font-bold text-lg'>{product.name}</h1>
                        <div>{product.size}</div>
                        <div className='mt-4'><b>₹{product.price}</b></div>
                        <button className='bg-yellow-500 px-4 py-1 rounded-full font-bold text-white mt-4'>Add to Cart</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default SingleProduct;