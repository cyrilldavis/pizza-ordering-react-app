import ProductCard from './ProductCard'
import { useEffect,useState } from 'react'

const Products = () => {
        const [products,setProducts] = useState([]);
        useEffect( ()=>{
            fetch('https://ecom-rest-apis.herokuapp.com/api/products')
            .then(response => response.json())
            .then((products)=>{
                setProducts(products);
            })
        },[])


    return (
        <>
            <div className=' container mx-auto w-4/5'>
                <h3 className='font-bold text-lg'>Products</h3>
                <div className='grid grid-cols-5 my-8 gap-24 mb-24'>
                   {
                        products.map(product=><ProductCard key={product._id} product={product}/>)
                   } 
                </div>
            </div>


        </>

    )
}

export default Products
