import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="og:image" content="https://digitalax.xyz/card.png/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/jacklane_2.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Letter Magic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Internal Rainbows.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/LiberationMono-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/LiberationMono-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/FHGiselle-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/A Love of Thunder.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Futurist Fixed-width Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AUdimat Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/DosisRegular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                    font-family: "Letter Magic";
                    font-weight: 400;
                    src: url("./fonts/Letter Magic.ttf");
                }

                @font-face {
                  font-family: "Fira Bold";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Bold.ttf");
                }

                @font-face {
                  font-family: "Fira Regular";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Regular.ttf");
                }

                @font-face {
                  font-family: "Dosis Regular";
                  font-weight: 400;
                  src: url("./fonts/DosisRegular.ttf");
                }

                @font-face {
                  font-family: "Internal Rainbows";
                  font-weight: 400;
                  src: url("./fonts/Internal Rainbows.otf");
                }

                @font-face {
                  font-family: "Fira Medium";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Medium.ttf");
                }

                @font-face {
                  font-family: "Fira Light";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Light.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Regular.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono Bold";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Bold.ttf");
                }

                @font-face {
                  font-family: "FH Giselle Light";
                  font-weight: 400;
                  src: url("./fonts/FHGiselle-Light.ttf");
                }

                @font-face {
                  font-family: "A Love of Thunder";
                  font-weight: 400;
                  src: url("./fonts/A Love of Thunder.ttf");
                }

                @font-face {
                  font-family: "Futurist";
                  font-weight: 400;
                  src: url("./fonts/Futurist Fixed-width Regular.ttf");
                }

                @font-face {
                  font-family: "Audimat";
                  font-weight: 400;
                  src: url("./fonts/AUdimat Regular.ttf");
                }

                @font-face {
                  font-family: "Jack Lane";
                  font-weight: 400;
                  src: url("./fonts/jacklane_2.woff");
                }
            `,
            }}
          ></style>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
