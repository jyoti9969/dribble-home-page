import { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/themes/theme1.webp', text: 'Branding' },
  { src: '/themes/theme2.webp', text: 'Illustration' },
  { src: '/themes/theme3.webp', text: 'Animation' },
  { src: '/themes/theme4.webp', text: 'Mobile' },
  { src: '/themes/theme5.webp', text: 'Typography' },
  { src: '/themes/theme6.webp', text: 'Product Design' },
  { src: '/themes/theme7.webp', text: 'Web Design' },
  { src: '/themes/theme1.webp', text: 'Branding' },
  { src: '/themes/theme2.webp', text: 'Illustration' },
  { src: '/themes/theme3.webp', text: 'Animation' },
  { src: '/themes/theme4.webp', text: 'Mobile' },
  { src: '/themes/theme5.webp', text: 'Typography' },
  { src: '/themes/theme6.webp', text: 'Product Design' },
  { src: '/themes/theme7.webp', text: 'Web Design' },
 

];

const CardCarousel = () => {
    const [offset, setOffset] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);
    const cardWidth = 100; 
    const cardSpacing = 20; 
    const moveSpeed = 2000;

    const loopImages = [...images, ...images];
  
    const totalWidth = (cardWidth + cardSpacing) * loopImages.length;
    const slideWidth = cardWidth + cardSpacing;
  
    const moveLeft = () => {
      setOffset((prevOffset) => prevOffset - slideWidth);
    };
  
    useEffect(() => {
      if (!isHovering) {
        intervalRef.current = setInterval(moveLeft, moveSpeed);
      }
      return () => clearInterval(intervalRef.current);
    }, [isHovering]);
  
    useEffect(() => {
    
      if (Math.abs(offset) >= (slideWidth * images.length)) {
        setOffset(0);
      }
    }, [offset]);
  
    const handleMouseEnter = () => {
      setIsHovering(true);
      clearInterval(intervalRef.current);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    return (
      <div
        className="relative w-full h-[200px] pt-7 overflow-hidden"
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
              className="flex-shrink-0 w-[100px] h-[100px] relative mr-[20px] group"
              style={{ marginRight: cardSpacing }}
            >
              <img
                src={image.src}
                alt={image.text}

                className="w-full h-full object-cover rounded-lg  border-t-lime-200 border-r-lime-200 border-2 transition-shadow duration-300 group-hover:shadow-[10px_-10px_15px_rgba(0,0,0,0.3)]"
              />
              <div className="absolute bottom-[-20px] w-full text-black text-[10px] ">
                {image.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CardCarousel;
