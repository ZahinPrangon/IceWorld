import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

import Card from "@/components/Card/Card";
import Section from "@/layouts/Section/Section";

import Carousel from "../Carousel/Carousel";
import HeroProductWrapper from "../HeroProductWrapper/HeroProductWrapper";

const CardMetaData = [
  {
    id: 1,
    imageUrl: "/ice-white.png",
    heading: "Ice Cloud",
    title: "Pearl White",
    subTitle: "True Wireless Earbuds",
    price: "৳ 1,500",
    discountedPrice: "৳ 1,999",
    discount: "43% OFF",
    features: [
      "Fast Charging",
      "Touch Controls",
      "IPX4 Sweatproof",
      "Bluetooth 5.0",
    ],
    href: "/products/ice",
  },
  {
    id: 2,
    imageUrl: "/ice-black.png",
    heading: "Ice Cloud",
    title: "Matte Black",
    subTitle: "True Wireless Earbuds",
    price: "৳ 1,500",
    discountedPrice: "৳ 1,999",
    discount: "43% OFF",
    features: [
      "Fast Charging",
      "Touch Controls",
      "IPX4 Sweatproof",
      "Bluetooth 5.0",
    ],
    href: "/products/ice",
  },
];

const Homepage = () => {
  const router = useRouter();

  return (
    <Flex flexDir="column">
      <Carousel />
      <Section
        title="Earbuds"
        subTitle="
              Engineered to fit. Great calls and music, designed for compact
              comfort.
            "
      >
        <Flex gap="1.5rem" flexWrap="wrap" justifyContent="center">
          {CardMetaData.map((card) => {
            return (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                subTitle={card.subTitle}
                price={card.price}
                discountedPrice={card.discountedPrice}
                discount={card.discount}
                features={card.features}
                href={card.href}
                onClick={() => router.push(card.href)}
              />
            );
          })}
        </Flex>
      </Section>
      <HeroProductWrapper />
      {/* <Section
        title="Reviews"
        subTitle="Customers ❤️ us. Here's what they have to say about our products."
      >
        <Reviews />
      </Section> */}
    </Flex>
  );
};

export default Homepage;
