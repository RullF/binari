import { IconName } from "react-icons/fa";
import '../css/Carousel.css';
import image3 from '../assets/slide_3.jpg'
import image4 from '../assets/atsacara.jpg'
import image5 from '../assets/slide_1.jpg'

const Car = ()=>{
    return(
<div className="carousel">
  <div className="carousel-inner">
    <input
      className="carousel-open"
      type="radio"
      id="carousel-1"
      name="carousel"
      aria-hidden="true"
      hidden
      defaultChecked="checked"
    />
    <div className="carousel-item">
      <img src={image4} />
    </div>
    <input
      className="carousel-open"
      type="radio"
      id="carousel-2"
      name="carousel"
      aria-hidden="true"
      hidden
    />
    <div className="carousel-item">
    <img src={image5} />
    </div>
    <input
      className="carousel-open"
      type="radio"
      id="carousel-3"
      name="carousel"
      aria-hidden="true"
      hidden
    />
    <div className="carousel-item">
    <img src={image3} />
    </div>
    <label htmlFor="carousel-3" className="carousel-control prev control-1">
      ‹
    </label>
    <label htmlFor="carousel-2" className="carousel-control next control-1">
      ›
    </label>
    <label htmlFor="carousel-1" className="carousel-control prev control-2">
      ‹
    </label>
    <label htmlFor="carousel-3" className="carousel-control next control-2">
      ›
    </label>
    <label htmlFor="carousel-2" className="carousel-control prev control-3">
      ‹
    </label>
    <label htmlFor="carousel-1" className="carousel-control next control-3">
      ›
    </label>
    <ol className="carousel-indicators">
      <li>
        <label htmlFor="carousel-1" className="carousel-bullet">
          •
        </label>
      </li>
      <li>
        <label htmlFor="carousel-2" className="carousel-bullet">
          •
        </label>
      </li>
      <li>
        <label htmlFor="carousel-3" className="carousel-bullet">
          •
        </label>
      </li>
    </ol>
  </div>
</div>

    )
}

export default Car;