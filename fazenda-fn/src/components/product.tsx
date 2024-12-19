// @ts-nocheck
import React, { useRef } from 'react';
import { Card, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const ProductPreview = () => {
  const videoRef = useRef(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card 
        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        cover={
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/ddf0u9tgz/video/upload/v1733487463/12-plus_l724sj.mp4"
            className="w-full h-auto object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
            onCanPlay={() => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            }}
          />
        }
      >
        <div className="text-center">
          <Title level={2} className="mb-4">Upcoming Website Product</Title>
          <Paragraph className="text-gray-600 mb-6">
            Get ready for our revolutionary new web solution that will transform 
            the way you interact with online platforms.
          </Paragraph>
          <div className="flex justify-center space-x-4">
            <Button 
              type="primary" 
              size="large" 
              className="hover:scale-105 transition-transform"
            >
              Learn More
            </Button>
            <Button 
              ghost 
              size="large" 
              className="hover:scale-105 transition-transform"
            >
              Notify Me
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductPreview;