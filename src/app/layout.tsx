/* eslint-disable react/no-danger */
/* eslint-disable import/no-extraneous-dependencies */
// import MessengerCustomerChat from "react-messenger-customer-chat";

// Import the functions you need from the SDKs you need

import Script from "next/script";

import FacebookPixel from "@/components/FacebookPixel/FacebookPixel";

import { AuthProvider } from "./(root)/Providers";

const GTM_ID = "GTM-5FLBVM3V";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyD_1awJA9CIL58xQxwoDfQXFYK262ilAjk",
  //   authDomain: "icelagbe-3cc72.firebaseapp.com",
  //   projectId: "icelagbe-3cc72",
  //   storageBucket: "icelagbe-3cc72.appspot.com",
  //   messagingSenderId: "759475942400",
  //   appId: "1:759475942400:web:af2cc056338955217dd4e5",
  //   measurementId: "G-XJX7ZS26NV",
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // useEffect(() => {
  //   const unSubscriber =
  // })

  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <noscript>
        <img
          alt="facebook-pixel"
          height="1"
          width="1"
          style={{
            display: "none",
            visibility: "hidden",
          }}
          src="https://www.facebook.com/tr?id=875994250211128&ev=PageView&noscript=1"
        />
      </noscript>

      <body>
        <AuthProvider>{children}</AuthProvider>
        <FacebookPixel />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
    // </ClerkProvider>
  );
}
