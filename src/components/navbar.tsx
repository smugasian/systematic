import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

type Props = {}

function navbar({}: Props) {
  return ( 
    <div className='flex fixed w-full justify-between items-center bg-gray-800 p-2'>
        {/* logo section */}
        <div className='flex gap-2 items-center'>
            <img src="/public/el.jpg" alt="Logo" className='h-10'/>
            <h1 className='text-white text-2xl font-serif'>Systematic</h1>
        </div>

        <div className='flex gap-1'>
            <Link href="/" className='text-white hover:bg-gray-700 p-2 rounded'>Home</Link>
            <Link href="/Linkbout" className='text-white hover:bg-gray-700 p-2 rounded'>About</Link>
            <Link href="/contact" className='text-white hover:bg-gray-700 p-2 rounded'>Contact</Link>
            <Button variant="default">Query</Button>
        </div>
    </div>
  )
}

export default navbar