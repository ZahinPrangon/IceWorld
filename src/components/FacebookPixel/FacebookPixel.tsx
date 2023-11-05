"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import * as pixel from "../../lib/fpixel";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    pixel.pageview();
  }, [loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={pixel.FB_PIXEL_ID}
      />
    </div>
  );
};

export default FacebookPixel;
