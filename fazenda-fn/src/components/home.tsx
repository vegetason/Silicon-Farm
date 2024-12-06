import { Card, Carousel, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export function Home() {
  const cards = [
    {
      title: "Hardware Services",
      description: "To be Africa’s leading retail analytics and consultancy partner, empowering businesses with insights and expert guidance to drive growth, efficiency, and lasting success",
      image: "https://hova.ai/img/insight.8f2e24d4.png",
    },
    {
      title: "Software Services",
      description: "To be Africa’s leading retail analytics and consultancy partner, empowering businesses with insights and expert guidance to drive growth, efficiency, and lasting success",
      image: "https://hova.ai/img/insight.8f2e24d4.png",
    },
  ];

  return (
    <div id="Home" className="h-[100vh] w-full bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="h-full flex justify-center items-center">
        <Carousel
          autoplay
          arrows
          infinite
          dots
          dotPosition="bottom"
          className="w-full max-w-[90vw] p-4"
        >
          {cards.map((card, index) => (
            <div key={index}>
              <Card className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <Title level={3} className="text-gray-800">
                      {card.title}
                    </Title>
                    <Paragraph className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </Paragraph>
                  </div>
                  <div className="flex-1 hidden md:flex justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto max-h-60 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
