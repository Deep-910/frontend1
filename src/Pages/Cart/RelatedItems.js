import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function RelatedItems() {
    const relatedItems = [
        {id:1,url:'https://i.pinimg.com/564x/9d/74/4a/9d744ad69aab994dc5e9d2620cf4f752.jpg',title:'Civil Engineer hat',price:'160'},
        {id:2,url:'https://i.pinimg.com/564x/0f/81/dc/0f81dc6a319ad331a801cfea87fa437a.jpg',title:'Safety Jackets',price:'160'},
        {id:3,url:'https://i.pinimg.com/564x/c4/47/e5/c447e5ec955ea3353291751cf99d94ef.jpg',title:'Reflextive Tape',price:'160'},
        {id:4,url:'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg',title:'Silica Gel',price:'160'},
        {id:5,url:'https://i.pinimg.com/564x/9d/74/4a/9d744ad69aab994dc5e9d2620cf4f752.jpg',title:'Civil Engineer hat',price:'160'},
        {id:6,url:'https://i.pinimg.com/564x/0f/81/dc/0f81dc6a319ad331a801cfea87fa437a.jpg',title:'Safety Jackets',price:'160'},
        {id:7,url:'https://i.pinimg.com/564x/c4/47/e5/c447e5ec955ea3353291751cf99d94ef.jpg',title:'Reflextive Tape',price:'160'},
        {id:8,url:'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg',title:'Silica Gel',price:'160'},
    ]
  return (
    <div className='py-[2rem] '>
        <div className=' py-[1rem] flex overflow-scroll no-scrollbar items-center justify-between gap-5'>
            {relatedItems.map((image, index) => (
                <Link
                    key={index}
                    to={{
                        pathname: `/product/${image.id}`,
                        state: { product: image }
                    }}
                >
                    <div className='shadow-xl hover:border-orange-500 group p-[1rem] border-2 rounded-xl cursor-pointer h-[23rem] w-[15rem]'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs bg-orange-500 text-white p-1 rounded-xl'>Save 20%</p>
                            <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                        </div>
                        <img className='h-[11rem] w-full rounded-xl mt-2' src={image.url} alt="" />
                        <div className='mt-[0.5rem] h-[2rem]'>
                            <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                        </div>
                        <div className='px-[0.2rem]'>
                            <p className='font-bold'>{image.title}</p>
                            <div className='flex gap-3'>
                                <p>₹{image.price}</p>
                                <span className='line-through'>₹100.00</span>
                            </div>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default RelatedItems