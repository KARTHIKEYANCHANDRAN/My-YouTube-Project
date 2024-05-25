import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = [ "All" , "Comedy" , "Horror" , "IPL" , "Music" , "Cooking" , "Gaming" , "Fitness" , "Popular" , "Tennis"];
  return (
    <div className='flex ml-48 mt-20'>
      {list.map((arr)=> <Button key={arr} name={arr} />)}
    </div>
  )
}

export default ButtonList
