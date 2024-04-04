import { useState } from "react";
import SliderItem from "./SliderItem";
import "./Sliders.css";

function Sliders() {
    const [currentSlide, setcurrentSlide] = useState(0);

    const SlideFunctions = {
        next: () => {
            setcurrentSlide((prevState) => (prevState + 1) % 3);
        },
        prev: () => {
            setcurrentSlide((prevState) => (prevState - 1 + 3) % 3);
        }
    };

    return (
        <section className="slider">
            <div className="slider-elements">
                {currentSlide === 0 && <SliderItem imageSrc="img/slider/slider1.jpg" />}
                {currentSlide === 1 && <SliderItem imageSrc="img/slider/slider2.jpg" />}
                {currentSlide === 2 && <SliderItem imageSrc="img/slider/slider3.jpg" />}

                <div className="slider-buttons">
                    <button>
                        <i className="bi bi-chevron-left" onClick={SlideFunctions.prev}></i>
                    </button>
                    <button>
                        <i className="bi bi-chevron-right" onClick={SlideFunctions.next}></i>
                    </button>
                </div>
                <div className="slider-dots">
                    <button className={`slider-dot ${currentSlide === 0 ? "active" : ""}`} onClick={()=> setcurrentSlide(0) }>
                        <span></span>
                    </button>
                    <button className={`slider-dot ${currentSlide === 1 ? "active" : ""}`} onClick={() => setcurrentSlide(1)}>
                        <span></span>
                    </button>
                    <button className={`slider-dot ${currentSlide === 2 ? "active" : ""}`} onClick={() => setcurrentSlide(2)}>
                        <span></span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Sliders;
