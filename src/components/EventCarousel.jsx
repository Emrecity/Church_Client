import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const EventCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

      const data = [{title:'Event 1',description:'Description 1'},{title:'Event 2',description:'Description 2'},{title:'Event 3',description:'Description 3'},{title:'Event 4',description:'Description 4'},{title:'Event 5',description:'Description 5'},{title:'Event 6',description:'Description 6'}]

    return (
        <>
        <div className="px-5 slider-container">
      <Slider {...settings}>
        {data.map((item,index)=>{
          return <Card title={item.title} description={item.description}/>
        })}
      </Slider>
    </div>
        </>
      );
}

export default EventCarousel