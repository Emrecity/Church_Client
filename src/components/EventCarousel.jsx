import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const EventCarousel = ({data}) => {

  const mobile =  window.innerWidth < 768? 1:3

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: mobile,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };



    return (
        <>
        <div className="px-5 slider-container">
      <Slider {...settings}>
        {data?.ListUpcomingEvents.map((item,index)=>{
          return <Card title={item.title} description={item.description} date={item?.date} time={item.time} venue={item.venue}/>
        })}
      </Slider>
    </div>
        </>
      );
}

export default EventCarousel