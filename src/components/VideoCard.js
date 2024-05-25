import React from 'react'

const VideoCard = ({info}) => {

   // console.log(info);
 if(info === undefined) return null;

  const {snippet , statistics} = info ;
  const {channelTitle , title , thumbnails } = snippet ;
    
  return (
    <div className=' h-60 my-3 mx-2 cursor-pointer hover:p-1 transition-all duration-3000   rounded-lg w-56 p-3'>
        <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold overflow-hidden line-clamp-2 text-ellipsis'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
      
    </div>
  )
}

export default VideoCard
