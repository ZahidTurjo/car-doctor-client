import slider1 from '../../../../assets/images/homeCarousel/1.jpg'
import slider2 from '../../../../assets/images/homeCarousel/2.jpg'
import slider3 from '../../../../assets/images/homeCarousel/3.jpg'
import slider4 from '../../../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full" />
   
    <div className="absolute 
     transform -translate-y-1/2 left-5 right-5 top-1/2 ">
<div>
<p className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Servicing</p>
     <p className='text-xl font-semibold text-white my-6'>There are many variations of passages of  available, but the majority 
       <br /> have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-active  bg-orange-300">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
</div>
    </div>
    <div className="absolute
     flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2}className="w-full" />
     
    <div className="absolute 
     transform -translate-y-1/2 left-5 right-5 top-1/2 ">
<div>
<p className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Servicing</p>
     <p className='text-xl font-semibold text-white my-6'>There are many variations of passages of  available, but the majority 
       <br /> have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-active  bg-orange-300">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
</div>
    </div>
    <div className="absolute
     flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider3} className="w-full" />
     
    <div className="absolute 
     transform -translate-y-1/2 left-5 right-5 top-1/2 ">
<div>
<p className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Servicing</p>
     <p className='text-xl font-semibold text-white my-6'>There are many variations of passages of  available, but the majority 
       <br /> have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-active  bg-orange-300">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
</div>
    </div>
    <div className="absolute
     flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">     
     
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider4} className="w-full" />
     
    <div className="absolute 
     transform -translate-y-1/2 left-5 right-5 top-1/2 ">
<div>
<p className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Servicing</p>
     <p className='text-xl font-semibold text-white my-6'>There are many variations of passages of  available, but the majority 
       <br /> have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-active  bg-orange-300">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
</div>
    </div>
    <div className="absolute
     flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;