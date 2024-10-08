'use client';
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {

    const [nav,setNav] = useState(false)
    const [color,setColor] = useState('transparent')
    const [textColor,setTextColor] = useState('white')
    const handleNav =()=>{
        setNav(!nav)
    }

    useEffect(()=>{
        const changeColor =()=>{
            if (window.scrollY>=90) {
                setColor('#ffffff')
                setTextColor('#000000')
            }
            else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll',changeColor)
    },[])

  return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 z-10 w-full ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
            <h1 className='font-bold text-4xl text-green-500'>ZOL</h1>
            </Link>
            <ul style={{color:`${textColor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='sign-in'>Sign in</Link>
                </li>
                <li className='p-4'>
                    <Link href='/sign-up'>Sign up</Link>
                </li>
            </ul>
            {/* mobile button */}
            <div onClick={handleNav} className=  'block sm:hidden z-10'>
                {nav? <AiOutlineClose size={20} style={{color:`${textColor}`}}/> :
                <AiOutlineMenu size={20} style={{color:`${textColor}`}}/>}
            </div>
            {/* Mobile menu */}
            <div className={nav? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
            :'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'} >
            <ul>
                <li className='px-4 text-4xl hover:text-gray-500 '>
                    <Link href='sign-in'>Sign in</Link>
                </li>
                <li className='px-4 text-4xl hover:text-gray-500 '>
                    <Link href='/sign-up'>Sign up</Link>
                </li>
                <li className='px-4 text-4xl hover:text-gray-500 '>
                    <Link href='/contact'>Contact us</Link>
                </li>
                <li className='px-4 text-4xl hover:text-gray-500 '>
                    <Link href='sign-in'>About us</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar