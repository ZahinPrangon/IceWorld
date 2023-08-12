/* eslint-disable react/no-array-index-key */
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

import HeroProductFeatures from "../HeroProductWrapper/HeroProductWrapper";

// type Props = {
//   name: string;
//   description: string;
//   image: string;
// };

const IceProducts = [
  {
    name: "Ice Matte",
    description: "Some BS",
    features: [
      "🎵 Immersive music experience with superior bass quality ",
      "💪 Powerful 10 mm dynamic drivers for crystal clear sound",
      "🔋 Up to 24 hours of playtime and 6 hours of continuous use",
      "📞 Dual mic to ensure consistent call clarity ",
      "💦 IPX4 sweat and water resistance for worry-free use",
      "☁️ 0.4g ulta lightweight so easy to carry everywhere ",
      "3️⃣ Small, Medium and Large eartips for comfortable use of all ear size",
      "🎮 Low latency gaming mode for lag-free gaming sessions",
    ],
  },
];
const Product = () => {
  return (
    <Box>
      <Grid
        templateColumns="repeat(2, 1fr)"
        marginTop="4rem"
        maxWidth="1280px"
        justifyContent="center"
        marginX="auto"
        gap="20px"
        background="white"
        marginBottom="6rem"
      >
        <Image
          src="https://scontent.fcgp13-1.fna.fbcdn.net/v/t39.30808-6/362899094_184180311317366_863277743415034894_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=1qTfb0lOTBYAX-wipbq&_nc_ht=scontent.fcgp13-1.fna&oh=00_AfD6XadaUyN8vQDGVFEi-Y17lRY5Fgw147qD9VosOQmh_w&oe=64D49FBB"
          alt="ice-world"
        />
        <Box marginTop="3rem" px="1.25rem">
          <Text
            // as="h1"
            // size="2xl"
            fontSize="64px"
            textTransform="uppercase"
            color="black"
            mb="20px"
          >
            Ice Cloud
          </Text>
          {IceProducts[0]?.features.map((feature, idx) => (
            <Text key={idx} fontSize="16px">
              {feature}
            </Text>
          ))}
        </Box>
      </Grid>
      <HeroProductFeatures />
    </Box>
  );
};

export default Product;
