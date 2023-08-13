/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-implied-eval */
import { Box, Image } from "@chakra-ui/react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// let intervalId: any;

const Carousel = () => {
  // const [slide, setSlide] = useState(0);
  // const [progress, setProgress] = useState(0);

  const images = [
    {
      imageUrl: "/ice_landing_1.png",
      alt: "Landing 1",
      id: 1,
    },
    {
      imageUrl:
        "https://s.yimg.com/uu/api/res/1.2/ILvD8zEFyG7nYK9HIdjysQ--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-12/01af5a80-75ab-11ed-a3fd-ffe215618d28.cf.jpg",
      alt: "Landing 1",
      id: 2,
    },
    {
      imageUrl:
        "https://i0.wp.com/www.ear-fidelity.com/wp-content/uploads/2022/10/P1054788s-scaled.jpg?fit=2560%2C1707&ssl=1",
      alt: "Landing 1",
      id: 3,
    },
    // {
    //   imageUrl:
    //     "https://www.rollingstone.com/wp-content/uploads/2022/09/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg",
    //   alt: "Landing 1",
    //   id: 4,
    // },
    // {
    //   imageUrl:
    //     "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/untitled-1_3_0-sixteen_nine.jpg?size=948:533",
    //   alt: "Landing 1",
    //   id: 5,
    // },
  ];

  // useEffect(() => {
  //   const intervalId = setInterval(autoNextSlide, 15000); // Change slide every 5 seconds

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (progress < 5) {
  //       setProgress((prevProgress) => prevProgress + 1);
  //     } else {
  //       clearInterval(intervalId);
  //     }
  //   }, 1000); // Change progress every 1 second

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [progress]);

  // const autoNextSlide = () => {
  //   setSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1));
  // };
  // const prevSlide = () => {
  //   clearInterval(intervalId);
  //   setSlide((slide) => (slide === 0 ? images.length - 1 : slide - 1));
  //   // startInterval();
  // };

  // const nextSlide = () => {
  //   clearInterval(intervalId);
  //   setSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1));
  //   // startInterval();
  // };

  // const startInterval = () => {
  //   intervalId = setInterval(autoNextSlide, 5000); // Restart the interval
  // };

  const handleSwipe = useSwipeable({
    // onSwipedLeft: nextSlide,
    // onSwipedRight: prevSlide,
    swipeDuration: 100,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="95vh"
        {...handleSwipe}
      >
        <AnimatePresence>
          {images.map((item, idx) => (
            <MobileImage
              key={item.id}
              index={idx}
              slide={0}
              imageUrl={item.imageUrl}
            />
          ))}
        </AnimatePresence>

        {/* <Box display="flex" position="absolute" bottom="0.5rem">
          {renderLines()}
        </Box> */}
      </Box>
    </MotionConfig>
  );
};

type MobileImageProps = {
  imageUrl: string | any;
  slide: number;
  index: number;
};

const MobileImage = ({ imageUrl, slide, index }: MobileImageProps) => {
  return (
    // <motion.img
    //   src={imageUrl}
    //   width="100%"
    //   height="50vh"
    //   // display={slide === index ? "block" : "none"}
    //   // objectFit="cover"
    //   alt="landing-image"
    //   draggable={false}
    //   initial={{ opacity: 0 }} // Initial opacity when an image enters the scene
    //   animate={{ opacity: slide === index ? 1 : 0 }} // Animate opacity when an image is displayed
    //   exit={{ opacity: 0 }} // Animate opacity when an image exits the scene
    //   style={{
    //     display: slide === index ? "block" : "none",
    //     objectFit: "cover",
    //   }}
    // />
    <Image
      as={motion.img}
      src={imageUrl}
      width="100%"
      height="100%"
      display={slide === index ? "block" : "none"}
      objectFit="cover"
      alt="landing-image"
      draggable={false}
      // draggable={false}
      initial={{ opacity: 0 }} // Initial opacity when an image enters the scene
      animate={{ opacity: slide === index ? 1 : 0 }} // Animate opacity when an image is displayed
      exit={{ opacity: 0 }} // Animate opacity when an image exits the scene
    />
  );
};

export default Carousel;
