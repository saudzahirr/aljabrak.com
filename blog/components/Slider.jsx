import React from 'react'
import Carousel from 'react-elastic-carousel';
import Slide from './Slide';

const Slider = ({data}) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
  return (
    
    <Carousel breakPoints={breakPoints} >
      {data.map(item => (<div key={item.createdAt}><Slide data={item} /></div>))}
    </Carousel>
      
  )
}

export default Slider