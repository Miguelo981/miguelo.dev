import useWindowDimensions from '../../hooks/useWindowDimensions';
import { allSkills } from '../../mocks/skills.mock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const MOBILE_WIDTH = 800;

export default function TechList() {
    const { width } = useWindowDimensions();
{/* <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={width > MOBILE_WIDTH ? 12 : 6}
            loop
            {...(width > MOBILE_WIDTH && { pagination: { clickable: true } })}
          >
            {
              allSkills.map((skill, index) => (
                <SwiperSlide key={"skill-" + index} className="flex justify-center h-full">
                  <picture className='w-8 lg:w-16 h-auto mx-auto my-auto zoom-in'>
                    <source srcSet={`${skill.Icon}`} media="(min-width: 992px)" />
                    <source srcSet={`${skill.Icon}.small.webp`} media="(min-width: 0px)" />
                    <img loading="lazy" src={`${skill.Icon}.small.webp`} alt={skill.Name} />
                  </picture>
                </SwiperSlide>
              ))
            }
        </Swiper> */}
    return (
      <div className='flex flex-wrap gap-4 items-center'>
        {
          allSkills.map((skill, index) => (
            <div key={"skill-" + index} className="flex justify-center h-full">
              <picture className='w-6 lg:w-10 h-auto mx-auto my-auto zoom-in'>
                <source srcSet={`${skill.Icon}`} media="(min-width: 992px)" />
                <source srcSet={`${skill.Icon}.small.webp`} media="(min-width: 0px)" />
                <img loading="lazy" src={`${skill.Icon}.small.webp`} alt={skill.Name} />
              </picture>
            </div>
          ))
        }
      </div>
    )
};