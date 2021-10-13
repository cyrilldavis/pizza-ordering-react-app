import Products from './Products'

const Home = () => {
    return (
        <>
        <div className='container flex mx-auto w-4/5 py-24 items-center justify-between'>
            <div className='w-1/2'>
                <h6 className='text-lg'><em>Are you hungry?</em></h6>
                <h1 className='font-bold text-6xl'>Don't wait!</h1>
                <button className='bg-yellow-500 font-bold text-white my-4 px-4 py-2 rounded-full'>Order Now</button>
            </div>
            <div className='w-2/5'>
                <img src="/images/pizza.png" alt="" />
            </div>
        </div>
        <Products/>
        </>
    )
}

export default Home
