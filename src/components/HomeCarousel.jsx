"use client";

import { Card, Carousel } from "flowbite-react";

const HomeCarousel = () => {
  return (
    <Card className="max-w-2xl my-4 mx-2 sm:mx-auto shadow-sm rounded-sm">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={6000}>
          <img src="/carousel/carousel-1.jpg" alt="Carousel 1" />
          <img src="/carousel/carousel-2.jpg" alt="Carousel 2" />
          <img src="/carousel/carousel-3.jpg" alt="Carousel 3" />
          <img src="/carousel/carousel-4.jpg" alt="Carousel 4" />
          <img src="/carousel/carousel-5.jpg" alt="Carousel 5" />
          <img src="/carousel/carousel-5.jpg" alt="Carousel 6" />
        </Carousel>
      </div>
    </Card>
  );
};

export default HomeCarousel;
