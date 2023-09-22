// "use client";

// /* eslint-disable import/no-absolute-path */
// import {
//   Box,
//   Collapse,
//   Flex,
//   Grid,
//   GridItem,
//   Hide,
//   Link,
//   Show,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// // eslint-disable-next-line import/no-absolute-path

// const listingStyles = {
//   fontSize: "12px",
//   letterSpacing: "0.644px",
//   lineHeight: "16px",
//   fontWeight: "200",
//   cursor: "pointer",
// };

// const listingHeaderStyles = {
//   fontSize: "0.8em",
//   letterSpacing: "0.1em",
//   fontWeight: "400",
//   lineHeight: "14px",
// };

// const FooterColumn = [
//   // {
//   //   id: 1,
//   //   name: "Products",
//   //   listings: [
//   //     {
//   //       id: 1,
//   //       name: "Ice",
//   //       href: "/products/ice",
//   //     },
//   //     {
//   //       id: 2,
//   //       name: "Coming Soon!",
//   //       href: "/products/coming-soon",
//   //     },
//   //   ],
//   // },
//   {
//     id: 2,
//     name: "About Us",
//     listings: [
//       {
//         id: 1,
//         name: "About Us",
//         href: "/about-us",
//       },
//       {
//         id: 2,
//         name: "Contact Us",
//         href: "/contact-us",
//       },
//     ],
//   },
// ];

// const CollapsibleFooter = () => {
//   const router = useRouter();
//   const { isOpen, onToggle } = useDisclosure();
//   // const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
//   const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();

//   return (
//     <Box pb="48px">
//       <Box>
//         <Flex
//           onClick={onToggle}
//           justifyContent="space-between"
//           p="15px 10px 15px 0px"
//           alignItems="center"
//           borderBottom="1px solid white"
//           {...listingHeaderStyles}
//           px="16px"
//           // borderTop="1px solid white"
//         >
//           <Text>{FooterColumn[0]?.name}</Text>
//           {isOpen ? <BsChevronUp /> : <BsChevronDown />}
//         </Flex>
//         <Collapse in={isOpen} animateOpacity>
//           <Box p="8px" {...listingStyles}>
//             {FooterColumn[0]?.listings.map((listing) => (
//               <Box
//                 color="white"
//                 key={listing.id}
//                 p="6px"
//                 onClick={() => router.push(listing.href)}
//               >
//                 {listing.name}
//               </Box>
//             ))}
//           </Box>
//         </Collapse>

//         {/* <Flex
//           onClick={onToggle2}
//           justifyContent="space-between"
//           p="15px 10px 15px 0px"
//           alignItems="center"
//           borderBottom="1px solid white"
//           {...listingHeaderStyles}
//         >
//           <Text>{FooterColumn[1]?.name}</Text>
//           {isOpen2 ? <BsChevronUp /> : <BsChevronDown />}
//         </Flex> */}
//         {/* <Collapse in={isOpen2} animateOpacity>
//           <Box p="8px" {...listingStyles}>
//             {FooterColumn[1]?.listings.map((listing) => (
//               <Box color="white" key={listing.id} p="6px">
//                 {listing.name}
//               </Box>
//             ))}
//           </Box>
//         </Collapse> */}

//         <Flex
//           onClick={onToggle3}
//           justifyContent="space-between"
//           p="15px 10px 15px 0px"
//           alignItems="center"
//           borderBottom="1px solid white"
//           {...listingHeaderStyles}
//           px="16px"
//         >
//           <Text>Follow Us</Text>
//           {isOpen3 ? <BsChevronUp /> : <BsChevronDown />}
//         </Flex>
//         <Collapse in={isOpen3} animateOpacity>
//           <Box p="8px" {...listingStyles}>
//             {Socials.map((listing) => (
//               <Link
//                 display="flex"
//                 color="white"
//                 key={listing.id}
//                 p="6px"
//                 gap="12px"
//                 alignItems="center"
//                 as={Link}
//                 href={listing.href}
//                 target="_blank"
//               >
//                 <Box>{listing.icon}</Box>
//                 <Box>{listing.name}</Box>
//               </Link>
//             ))}
//           </Box>
//         </Collapse>
//       </Box>
//     </Box>
//   );
// };

// const Footer = () => {
//   return (
//     <Box
//       pt={{ xs: "45px" }}
//       color="white"
//       width="100%"
//       position="absolute"
//       height={{ xs: "7rem", md: "4rem" }}
//       bottom="-50px"
//     >
//       <Hide below="md">
//         <Grid templateColumns="repeat(3, 2fr)" gap={4} px="20px">
//           <GridItem
//             colSpan={1}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Image
//               src={Logo}
//               width={60}
//               height={60}
//               alt="iceworld-logo"
//               priority
//             />
//           </GridItem>
//           {FooterColumn.map((column) => (
//             <GridItem key={column.id} colSpan={1}>
//               <Flex flexDirection="column">
//                 <Text {...listingHeaderStyles} pb="30px">
//                   {column.name}
//                 </Text>
//                 {column.listings.map((listing) => (
//                   <Box
//                     color="white"
//                     key={listing.id}
//                     {...listingStyles}
//                     pb="20px"
//                   >
//                     {listing.name}
//                   </Box>
//                 ))}
//               </Flex>
//             </GridItem>
//           ))}
//           <GridItem colSpan={1}>
//             <Text {...listingHeaderStyles} pb="30px">
//               Follow Us
//             </Text>
//             <Flex flexDir="column" gap="6px">
//               {Socials.map((social) => (
//                 <Flex direction="row" key={social.id}>
//                   <Link
//                     href={social.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     {...listingStyles}
//                     display="flex"
//                   >
//                     <Text mr="12px">{social.icon}</Text>
//                     <Text>{social.name}</Text>
//                   </Link>
//                 </Flex>
//               ))}
//             </Flex>
//           </GridItem>
//         </Grid>
//         <Flex
//           justifyContent="center"
//           // position="absolute"
//           // bottom="0px"
//           color="#757575"
//           textAlign="center"
//           alignItems="center"
//           width="100%"
//           lineHeight="1.6"
//           // marginTop="50px"
//           // marginBottom="30px"
//           fontSize="0.75rem"
//         >
//           Copyright © 2023 Ice.{" "}
//         </Flex>
//       </Hide>

//       <Show below="md">
//         <CollapsibleFooter />
//         <Flex
//           justifyContent="center"
//           color="#38B6FF"
//           textAlign="center"
//           alignItems="center"
//           width="100%"
//           lineHeight="1.6"
//           paddingBottom="12px"
//           fontSize="0.75rem"
//         >
//           Copyright © 2023 Ice.{" "}
//         </Flex>
//       </Show>
//     </Box>
//   );
// };

// export default Footer;

"use client";

import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { SocialIcon } from "react-social-icons";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};
const listingStyles = {
  fontSize: "12px",
  letterSpacing: "0.644px",
  lineHeight: "16px",
  fontWeight: "200",
  cursor: "pointer",
};

const listingHeaderStyles = {
  fontSize: "0.8em",
  letterSpacing: "0.1em",
  fontWeight: "400",
  lineHeight: "14px",
};

const Socials = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/icebd.official",
    icon: (
      <SocialIcon
        network="facebook"
        style={{
          height: "14px",
          width: "14px",
        }}
      />
    ),
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com/icebd.official",
    icon: (
      <SocialIcon
        network="instagram"
        style={{
          height: "14px",
          width: "14px",
        }}
      />
    ),
  },
];

export default function LargeWithLogoLeft() {
  return (
    <Box
      background="#000f15"
      color="white"
      // pt={{ xs: "45px" }}
      // color="white"
      width="100%"
      position="absolute"
      // height={{ xs: "7rem", md: "4rem" }}
      bottom="-50px"
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} justifyContent="center">
            <Box>
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="iceworld-logo"
                priority
              />
            </Box>
          </Stack>
          <Stack align="flex-start">
            <ListHeader {...listingHeaderStyles}>Support</ListHeader>
            <Link href="/about-us" {...listingStyles}>
              About Us
            </Link>
            <Link href="/contact-us" {...listingStyles}>
              Contact Us
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader {...listingHeaderStyles}>Follow Us</ListHeader>
            {Socials.map((social) => (
              <Flex direction="row" key={social.id}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  // fontSize="16px"
                  display="flex"
                >
                  {/* <Text mr="12px">{social.icon}</Text> */}
                  <Text {...listingStyles}>{social.name}</Text>
                </Link>
              </Flex>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
