import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="og:image"
            content="https://www.digitalax.xyz/card.png/"
            charSet="UTF-8"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/jacklane_2.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/FiraCode-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/FiraCode-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/FiraCode-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Bitblox.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/FiraCode-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Letter Magic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Internal Rainbows.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/LiberationMono-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/LiberationMono-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/FHGiselle-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/A Love of Thunder.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Futurist Fixed-width Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/AUdimat Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/DosisRegular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Manaspace.ttf"
            as="font"
            crossOrigin="anonymous"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Austral.otf"
            as="font"
            crossOrigin="anonymous"
            type="font/otf"
          />
          <link
            rel="preload"
            href="https://digitalax.xyz/fonts/Vcr.ttf"
            as="font"
            crossOrigin="anonymous"
            type="font/ttf"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                    font-family: "Letter Magic";
                    font-weight: 400;
                    src: url("https://digitalax.xyz/fonts/Letter Magic.ttf");
                }

                @font-face {
                  font-family: "Fira Bold";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/FiraCode-Bold.ttf");
                }

                @font-face {
                  font-family: "Fira Regular";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/FiraCode-Regular.ttf");
                }

                @font-face {
                  font-family: "Dosis Regular";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/DosisRegular.ttf");
                }

                @font-face {
                  font-family: "Austral";
                  src: url("https://digitalax.xyz/fonts/Austral.otf");
                }

                @font-face {
                  font-family: "Vcr";
                  src: url("https://digitalax.xyz/fonts/Vcr.ttf");
                }

                @font-face {
                  font-family: "Bitblox";
                  src: url("https://digitalax.xyz/fonts/Bitblox.otf");
                }

                @font-face {
                  font-family: "Internal Rainbows";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/Internal Rainbows.otf");
                }

                @font-face {
                  font-family: "Fira Medium";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/FiraCode-Medium.ttf");
                }

                @font-face {
                  font-family: "Fira Light";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/FiraCode-Light.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/LiberationMono-Regular.ttf");
                }

                @font-face {
                  font-family: "Manaspace";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/Manaspace.ttf");
                }  

                @font-face {
                  font-family: "Liberation Mono Bold";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/LiberationMono-Bold.ttf");
                }

                @font-face {
                  font-family: "FH Giselle Light";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/FHGiselle-Light.ttf");
                }

                @font-face {
                  font-family: "A Love of Thunder";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/A Love of Thunder.ttf");
                }

                @font-face {
                  font-family: "Futurist";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/Futurist Fixed-width Regular.ttf");
                }

                @font-face {
                  font-family: "Audimat";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/AUdimat Regular.ttf");
                }

                @font-face {
                  font-family: "Jack Lane";
                  font-weight: 400;
                  src: url("https://digitalax.xyz/fonts/jacklane_2.woff");
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
