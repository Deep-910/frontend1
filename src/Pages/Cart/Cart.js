import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import RelatedItems from './RelatedItems';

function Cart({ selectedItems, removecart }) {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleremoveCart = (item) => {
    removecart(item);
  }

  useEffect(() => {
    // Calculate the total price based on the selected items and quantity
    const totalPrice = selectedItems.reduce((acc, item) => {
      return acc + item.p_price * count;
    }, 0);
    setTotalPrice(totalPrice);
  }, [selectedItems, count]);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className='px-[1rem] lg:px-[7rem] py-[3rem]'>
      {/* top */}
      <div className='flex py-[2rem] justify-between items-center'>
        <h1 className='text-3xl lg:text-7xl font-semibold'>My Cart</h1>
        <Link to={'/'}>
          <div className='hover:text-orange-500 transition-all ease-in-out delay-75 flex justify-evenly items-center w-[15rem] border-l-2'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <p className='font-bold'>Continue Shopping</p>
          </div>
        </Link>
      </div>
      {/* items */}
      <div className='py-[3rem]'>
        {/* category */}
        <div className='hidden lg:flex font-bold justify-between px-[5rem] items-center border-b-2 pb-[2rem]'>
          <p>Product</p>
          <div className='flex justify-evenly gap-[10rem] w-[45rem] items-center'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
        {/* product list */}
        <div className='flex flex-col lg:px-[3rem] justify-evenly'>
          {selectedItems.map((items, index) => (
            <div key={index} className='py-[1rem] flex flex-col lg:flex-row justify-between border-b-2'>
              <div className='flex gap-[0.5rem] items-center'>
                <img className='w-[10rem] h-[8rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${items.img1}`} alt={items.pname} />
                <div className='w-[10rem]'>
                  <p className='font-bold text-sm'>{items.pname}</p>
                  {/* <p className='text-sm'>Color: Orange</p> */}
                </div>
              </div>
              <div className='ml-[1rem] flex lg:justify-evenly gap-[2rem] lg:gap-[10rem] items-center lg:w-[40rem]'>
                <p className='w-[5rem] text-sm text-center font-bold'>₹{items.p_price}</p>
                <div className='w-[8rem] flex gap-5 items-center justify-center text-lg border-2 px-[1rem] rounded-xl'>
                  <p className='cursor-pointer' onClick={handleSub}>-</p>
                  <p className='cursor-default w-2 text-sm'>{count}</p>
                  <p className='cursor-pointer ml-2' onClick={handleAdd}>+</p>
                </div>
                <p className='w-[4rem] text-center text-sm font-bold'>₹{totalPrice}</p>
              </div>
              <div className='mt-[1rem] lg:mt-0 flex items-center justify-center'>
                <button onClick={() => handleremoveCart(items)}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* checkout */}
      <div className='shadow-xl border-2 rounded-xl px-[1rem] lg:px-[3rem] py-[2rem] bg-[#EDF0F3]'>
        <p className='text-5xl font-bold text-orange-500'>CheckOut</p>
        <div className='flex flex-col-reverse lg:flex-row lg:justify-between py-[2rem] items-center lg:px-[2rem]'>
          {/* left */}
          <div className='flex flex-col gap-[1rem]'>
            <p className='text-xl font-semibold'>Apply Promo Code</p>
            <input className='text-xl p-1 outline-none border-2 rounded-md' type="text" placeholder='Enter Promo Code' />
          </div>
          {/* right */}
          <div className='flex flex-col gap-[1rem] justify-evenly pb-[1rem] w-[13rem]'>
            <div className='flex items-center justify-between'>
              <p className='font-thin'>SubTotal</p>
              <p className='font-semibold'>₹{totalPrice}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-thin'>Shipping</p>
              <p className='font-semibold'>Free</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-thin'>Total</p>
              <p className='font-semibold'>₹{totalPrice}</p>
            </div>
            <Link to={'/checkout'}>
              <button className='apply_button'>CheckOut</button>
            </Link>
          </div>
        </div>
      </div>
      {/* similar items */}
      <div className='py-[2rem]'>
        <p className='text-4xl pt-[3rem] font-bold'>Par With your Cart</p>
        <RelatedItems/>
      </div>
    </div>
  )
}

export default Cart;
