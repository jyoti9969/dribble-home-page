import { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/human1.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator"},
  { src: '/human2.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human3.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human4.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human5.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human6.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator"},
  { src: '/human2.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human3.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human4.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human5.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  { src: '/human6.webp', text: 'Lara',career:"Designer", text1:"brand", text2:"web",text3:"illustrator" },
  
 

];

const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const cardWidth = 100; 
  const cardSpacing = 20; 
  const moveSpeed = 1000; 

  const totalWidth = cardWidth + cardSpacing;
  const carouselWidth = totalWidth * images.length;
  const slideWidth = totalWidth;

  const moveLeft = () => {
    setOffset((prevOffset) => (prevOffset - slideWidth) % carouselWidth);
  };

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(moveLeft, moveSpeed);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative h-[250px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex"
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-full py-3rounded-2xl   relative mr-[20px]"
            style={{ marginRight: cardSpacing }}
          >
            <img
              src={image.src}
              alt={image.text}
              className=" object-cover h-full w-full rounded-2xl"
              
            />
            <div className="absolute bottom-0 w-full bg-transparent bg-opacity-50 text-white text-[10px] px-3 p-1">
              <p>{image.text}</p>
              <p>{image.career}</p>
              <div className='flex flex-row justify-around  p-2'>
               <button className='rounded-full border px-1 text-[8px]  font-semibold'>{image.text1}</button>
              <button className='rounded-full border px-1 text-[8px]  font-semibold'>{image.text2}</button>
              <button className='rounded-full border px-1 text-[8px]  font-semibold'>{image.text3}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
