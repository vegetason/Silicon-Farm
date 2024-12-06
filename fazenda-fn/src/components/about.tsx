/* eslint-disable react/no-unescaped-entities */
//import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Carousel } from "antd";
import Frame from '../assets/i1.webp';
import second from '../assets/i3.webp';
import third from '../assets/i4.webp';
import fourth from '../assets/i5.webp';
import person from '../assets/i6.webp';
import person2 from '../assets/i1.webp';
import ur from '../assets/i3.webp';


function Testimonial() {
  // const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Bernard Dushimimana',
      role: ('Sr.Manager'),
      organization: ('Andela'),
      image: person,
      content: (`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into `),
    },
    {
      id: 2,
      name: 'Susan',
      role: ('Sr.Manager'),
      organization: ('Andela'),
      image: person2,
      content: (`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect `),
    },
    {
      id: 3,
      name: 'Dr. Jack',
      role: ('Director'),
      organization: ('University of Rwanda'),
      image: ur,
      content: (`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into el `),
    },
  ];

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="block md:hidden flex-col px-4 py-16 bg-gradient-to-b from-white to-indigo-50 dark:from-dark-frame-bg dark:to-dark-bg relative font-serif">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`group relative bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
              currentIndex === index ? 'visible' : 'hidden'
            }`}
          >
            <div className="flex flex-col sm:flex-row  mb-6 items-center">
              <img className="sm:w-1/4" src={testimonial.image} alt="" />

              <ul>
                <li className="text-xs ml-3  dark:text-slate-300 text-neutral-600">
                  {testimonial.name}
                </li>
                <li className="text-xs mt-2  dark:text-slate-300 ml-3">
                  {testimonial.role}, {testimonial.organization}
                </li>
              </ul>
            </div>
            <p className="text-base  dark:text-slate-300 text-neutral-900">
              {testimonial.content}
            </p>
          </div>
        ))}

        <span className="absolute top-1/2 left-3 transform -translate-y-1/2  text-neutral-600 rounded-full bg-slate-50 p-1 drop-shadow-2xl opacity-50 ">
          <AiOutlineLeft
            size={20}
            onClick={prevTestimonial}
            className="cursor-pointer"
          />
        </span>

        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-neutral-600 rounded-full bg-slate-50 p-1 drop-shadow-2xl opacity-50 ">
          <AiOutlineRight
            size={20}
            onClick={nextTestimonial}
            className="cursor-pointer"
          />
        </span>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-indigo-50 dark:from-dark-frame-bg dark:to-dark-bg">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group relative bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden "
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-indigo-100 dark:ring-indigo-900">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full border-2 border-white dark:border-dark-bg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {testimonial.organization}
                </p>
              </div>
            </div>
            <div className="relative">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function About({ styles }: any) {
  // const { t } = useTranslation();

  const aboutCards = [
    {
      title: ('performance'),
      body: ('body1'),
      img: Frame,
      orientation: 'flex-row',
    },
    {
      title: ('analytics'),
      body: ('body2'),
      img: second,
      orientation: 'flex-row-reverse',
    },
    {
      title: ('continuos'),
      body: ('body3'),
      img: third,
      orientation: 'flex-row',
    },
    {
      title: ('goal'),
      body: ('body4'),
      img: fourth,
      orientation: 'flex-row-reverse',
    },
  ];

  return (
    <div className=" bg-white   mt-auto dark:bg-dark-frame-bg font-serif">
      <div className=" justify-between w-full h-full pb-5">
        {/* <div>
          <h1 className="text-center text-neutral-700 mb-5 font lg:text-4xl md:text-2xl pt-10 pb-4  dark:text-slate-100">
            {('hero2')}
          </h1>
        </div>

        {aboutCards.map(({ title, body, img, orientation }) => (
          <div
            key={body}
            className={`mt-10 card-image lg:mx-10 sm:mx-5 md:flex ${orientation} `}
          >
            <div className="shadow-md sm:shadow-none mx-auto md:mx-0 bg-indigo-100  items-center  md:items-start flex-col dark:bg-dark-bg md:w-[45%] md:py-10 md:px-4 max-w-[35em] sm:w-full   sm:rounded-3xl  md:mr-2">
              <h2 className="pt-3 header-style lg:px-5 lg:text-2xl sm:text-xl lg:text-start sm:text-center md:text-start dark:text-slate-200">
                {title}
              </h2>
              <div>
                <div className="xl:hidden md:hidden mb-0 mt-4">
                  <img src={img} alt="frame" />
                </div>
                <p className="text-style mt-0 lg:px-5 bg-[#E0E7FF] dark:bg-dark-bg rounded-b-3xl md:rounded-none p-8 md:px-0 md:py-4 dark:text-slate-300">
                  {body}
                </p>
              </div>
            </div>
            <div className="sm:hidden md:flex xl:flex lg:flex">
              <img
                className="rounded-2xl dark:opacity-80 lg:max-h-[25em]"
                src={img}
                alt="frame"
              />
            </div>
          </div>
        ))}

        <div className="px-5 mt-20">
          <h1 className="font text-center text-neutral-700 lg:text-4xl sm:text-2xl dark:text-slate-100">
            {' '}
            {('Come shape the future together')}
          </h1>
        </div> */}
        <Testimonial />
      </div>
    </div>
  );
}
export { About };

