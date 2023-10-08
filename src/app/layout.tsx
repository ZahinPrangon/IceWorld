/* eslint-disable import/no-extraneous-dependencies */
// import MessengerCustomerChat from "react-messenger-customer-chat";

// Import the functions you need from the SDKs you need

import FacebookPixel from "@/components/FacebookPixel/FacebookPixel";

import { AuthProvider } from "./(root)/Providers";

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
      {/* <script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '875994250211128');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=875994250211128&ev=PageView&noscript=1"
/></noscript> */}

      <body>
        <AuthProvider>{children}</AuthProvider>
        <FacebookPixel />
      </body>
    </html>
    // </ClerkProvider>
  );
}
