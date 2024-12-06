import React, { useState, useRef } from 'react';
import { Button, Card } from "antd";
import { motion, AnimatePresence, useInView } from 'framer-motion';

type RotatingImageProps = {
  images: string[];
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});

  const cards = [
    {
      images: [
        "https://hova.ai/img/pos.e05b7f43.png",
        "https://hova.ai/img/inventory.bd12a7dd.png",
        "https://hova.ai/img/data.3602ec2e.png"
      ],
      title: "Smart Inventory",
      description:
        "Say goodbye to overstocking and stockouts. We help you to optimize inventory levels based on sales data, saving you money and ensuring you always have what customers need.",
    },
    {
      images: [
        "https://hova.ai/img/pos.e05b7f43.png",
        "https://hova.ai/img/inventory.bd12a7dd.png",
        "https://hova.ai/img/data.3602ec2e.png"
      ],
      title: "Smart Inventory",
      description:
        "Say goodbye to overstocking and stockouts. We help you to optimize inventory levels based on sales data, saving you money and ensuring you always have what customers need.",
    },
    {
      images: [
        "https://hova.ai/img/pos.e05b7f43.png",
        "https://hova.ai/img/inventory.bd12a7dd.png",
        "https://hova.ai/img/data.3602ec2e.png"
      ],
      title: "Smart Inventory",
      description:
        "Say goodbye to overstocking and stockouts. We help you to optimize inventory levels based on sales data, saving you money and ensuring you always have what customers need.",
    },
    {
      images: [
        "https://hova.ai/img/pos.e05b7f43.png",
        "https://hova.ai/img/inventory.bd12a7dd.png", 
        "https://hova.ai/img/data.3602ec2e.png"
      ],
      title: "Smart Inventory",
      description:
        "Say goodbye to overstocking and stockouts. We help you to optimize inventory levels based on sales data, saving you money and ensuring you always have what customers need.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const titleContainerVariants={
    hidden:{opacity:0,y:-50},
    visible:{
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const titleVariants={
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id='Services'
      ref={ref}
      className="services-container min-h-[100vh] bg-gray-50 py-16 px-4 relative pt-16"
    >
      <div className="container mx-auto">
        <motion.div variants={titleContainerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-12">
          <motion.h3 variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-sm md:text-base text-gray-600 uppercase tracking-wide mb-2">
            OUR SERVICES
          </motion.h3>
          <motion.h1 variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-2xl md:text-4xl font-bold text-gray-800">
            Solutions We Provide
          </motion.h1>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center"
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
            >
              <Card 
                className="w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                cover={<RotatingImage images={card.images} />}
              >
                <Card.Meta 
                  title={
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {card.title}
                    </h4>
                  }
                  description={
                    <p className="text-gray-600 text-sm ">
                      {card.description}
                    </p>
                  }
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          variants={containerVariants}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a variants={cardVariants} href="https://forms.gle/ChgLprTynnQUFn9x7" target="_blank" rel="noopener noreferrer">
            <Button className="w-[200px]">Hire Us</Button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

function RotatingImage({ images }: RotatingImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotationVariants = {
    initial: { 
      rotate: 90, 
      opacity: 0,
      scale: 0.7
    },
    animate: { 
      rotate: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 120 
      }
    },
    exit: { 
      rotate: -90, 
      opacity: 0,
      scale: 0.7,
      transition: { 
        duration: 0.5 
      }
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full h-48 flex items-center justify-center bg-white p-4">
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Service image ${currentImageIndex + 1}`}
          className="absolute max-h-full max-w-full object-contain"
          variants={rotationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
}

export default Services;