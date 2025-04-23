import Image from 'next/image'
import React from 'react'

const ScrollableSection = ({Data}) => {
  return (
    <div>

<div className="overflow-hidden whitespace-nowrap py-10">
      <div className="animate-scroll flex gap-10">
        {Data.map((item, index) => (
          <div key={index} className="inline-block min-w-[200px]">
            <Image
              src={item.image}
              alt={`slider-img-${index}`}
              width={200}
              height={150}
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        ))}
      </div>
      
      
    </div>
    </div>
  )
}

export default ScrollableSection