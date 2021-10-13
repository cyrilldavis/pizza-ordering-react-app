import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {

    const {cart} = useContext(CartContext);

    return (
        <nav className='container flex mx-auto items-center justify-between w-4/5 py-4'>
            <Link to='/'>
                <div >
                    <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
                </div>
            </Link>
            <ul className='flex items-center'>
                <li><Link to='/'>Home</Link></li>
                <li className='ml-6'><Link to='/products'>Products</Link></li>
                <li className='ml-6'>
                    <Link to='/cart'>
                        <div style={{ background: '#F59E0D', padding: '6px 12px' }} className='flex rounded-full'>
                            <span>{cart.totalItems}</span>
                            <img className='ml-2' src="/images/cart.png" alt="carticon" />
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
