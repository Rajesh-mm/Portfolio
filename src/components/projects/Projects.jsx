import React from 'react';
import "./projects.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Projects = () => {
  return (
    <section className="projects__container container section" id="projects">
        <h2 className="section__title">My Work Portfolio</h2>
        <span className="section__subtitle">Projects</span>

        <Swiper className="projects__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          998: {
          slidesPerView: 3,
          spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({ id,title,description,link }) => {
                return (
                    <SwiperSlide className="projects__card" key={id}>
                      <div className="projects__content">
                        <h3 className="projects__name">{title}</h3>
                        <p className="projects__description">{description}</p>
                      </div>
                      <a className="projects__link" href={link} target="_blank" rel="noopener noreferrer">link                 
                        <i className="bx bx-right-arrow-alt projects__button-icon"></i>{" "}
                      </a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Projects;