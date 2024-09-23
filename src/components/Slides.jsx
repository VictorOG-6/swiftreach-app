import {React, useState, useEffect} from 'react'
import welcomeimgdark1 from '/welcomeimgdark1.png'
import welcomeimgdark4 from '/welcomeimgdark4.png'
import welcomeimgdark6 from '/welcomeimgdark6.png'
import welcomeimglight1 from '/welcomeimglight1.png'
import welcomeimglight4 from '/welcomeimglight4.png'
import welcomeimglight6 from '/welcomeimglight6.png'

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0)  

  const slides = [
    {
        img: welcomeimgdark1,
        img1: welcomeimglight1,
        text: 'Swift Reach is a company that uses electric autonomous aircraft(drones) to deliver medicine to hospitals and health centres on demand', 
    },
    {
        img: welcomeimgdark6,
        img1: welcomeimglight6,
        text: 'Our mission basically is wrapped around providing basic access to medicine through delivery',
    },
    {
        img: welcomeimgdark4,
        img1: welcomeimglight4,
        text: 'Swift Reach ensures reliable and secure deliveries between parties including safe encryption of customer data',
    },
  ]  

  const totalSlides = slides.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalSlides]);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className='flex flex-col items-center gap-4 mb-16'>
      <div className="relative">
        <img src={slides[currentSlide].img} alt="hero-img" className='flex flex-col items-center dark:hidden' />
        <img src={slides[currentSlide].img1} alt="hero-img" className='hidden dark:flex flex-col items-center' />
        <button onClick={goToPrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl p-2">
          &#10094;
        </button>
        <button onClick={goToNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl p-2">
          &#10095;
        </button>
      </div>
      <p className='w-[80vw] text-center text-2xl font-semibold mb-4'>
        {slides[currentSlide].text}
      </p>
      <div className='flex gap-4'>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-[#123524]' : 'bg-[#12352420]'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slides