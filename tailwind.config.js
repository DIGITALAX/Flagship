/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply"],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        offBlack: "#111313",
        offBlue: "#01030c",
        offWhite: "#F2F2F2",
        lightYellow: "#FCF894",
        grayBlue: "#CDE1E1",
        midGray: "#505A5A",
        bright: "#CDFB51",
        grad1: "#8BCDF4",
        grad2: "#C9F5FD",
        grad3: "#C6F8FE",
        ama: "#FBDB86",
        verde: "#25EC68",
        borderBlue: "#B8F3FF",
        darkP: "#462D4A",
        foot: "#F7F8E8",
        midWhite: "#FAF4E8",
        dull: "#CDAAA4",
        skyBlue: "#BBEEFF",
        grayMid: "#C9D8E4",
        purp: "#CFB0FA",
        deep: "#4FC0F3",
        grad1: "#173FD7",
        grad2: "#6CE3D6",
        grad3: "#0772BB",
        grayL: "#FBF9F5",
        darkG: "#2A3940",
        lensG: "#7FDA1F",
        lightB: "#BCF9FF",
        themB: "#9FD4FB",
        themG: "#BEFD4E",
        themPU: "#fcde9d",
        themPUT: "#4b0082",
        mainBg: "var(--mainBg)",
        mainText: "var(--mainText)",
        banner: "var(--banner)",
        diy: "var(--diy)",
        diyText: "var(--diyText)",
        mevText: "var(--mevText)",
        mevSlash: "var(--mevSlash)",
        themH: "#f6ec7b",
        themHT: "#2f25a7",
        themP: "#621145",
        themPT: "#3cfdf6",
        themL: "#6cec8b",
        themLT: "#090d12",
        themS: "#361495",
        themST: "#c3e0c3",
        themHP: "#ffffff",
        themHPT: "#ce02cb",
        themGray: "#1D1F1F",
        lightPurp: "#CEC0E7",
        lightY: "#FFFFF9",
        lightPurple: "#EDE5FB",
        lightWhite: "#FBFBF1",
        brightGreen: "#AAFDBE",
        bronze: "#BB552D",
        midBlue: "#709AF3",
        pinkish: "#B42AA1",
        shame: "#F6F5F0",
        ruido: "#86AC5E",
        moda: "#CFB0FA",
        amarillo: "#F2D777",
        verde: "#259000",
        brille: "#E8FF0B",
        amo: "#44D7B6",
        cost: "#847FF2",
        girasol: "#FBD201",
        nuba: "#C9D8E4",

        mos: "#05A5B7",
        pez: "#81A8F8",
        ballena: "#FFD85F",
        fuego: "#111929",
        mar: "#27BBCC",
        nave: "#0b0e16",
        chispa: "#D0DEE0",
        orilla: "#46B171",
        windows: "#0035F2",
        solapa: "#58B5F5",
      },
      fontFamily: {
        holo: "Nan Holo",
        york: "New York",
        air: "Air Strike",
        emiken: "Emiken",
        atmos: "Atmosphere",
        alber: "Alberto",
        glitch: "Doctor Glitch",
        conso: "Conso Regular",
        consoM: "Conso Medium",
        gaia: "Gaia",
        fira: "Fira Regular",
        firaL: "Fira Light",
        firaB: "Fira Bold",
        retro: "Retro",
        firaM: "Fira Medium",
        din: "DIN Condensed",
        futur: "Futurist",
        mag: "Letter Magic",
        rain: "Internal Rainbows",
        lib: "Liberation Mono",
        libB: "Liberation Mono Bold",
        gisL: "FH Giselle Light",
        thun: "A Love of Thunder",
        fut: "Futurist",
        aud: "Audimat",
        jacklane: "Jack Lane",
        dosis: "Dosis Regular",
        mana: "Manaspace",
        vcr: "Vcr",
        bit: "Bitblox",
        aust: "Austral",
        pot: "Bit Potion",
      },
      keyframes: {
        unblur: {
          "0%": {
            filter: "blur(20)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
      },
      animation: {
        unblur: "unblur 0.5s linear",
      },
      fontSize: {
        super1: "0.4rem",
        super: "0.46rem",
        xxs: "0.6rem",
      },
      gridAutoRows: {
        auto: "auto auto",
      },
      gridAutoColumns: {
        auto: "auto auto",
      },
      screens: {
        midi: "1140px",
        half: "900px",
        alm: "740px",
        over: "1490px",
        galaxy: "300px",
        above: "350px",
        wide: "1280px",
        preG: "480px",
      },
      cursor: {
        sewing: "url('/images/sewingCursor.png'), auto",
        sewingH: "url('/images/sewingCursorH.png'), auto",
        sewingS: "url('/images/sewingCursorSmall.png'), auto",
        sewingHS: "url('/images/sewingCursorHSmall.png'), auto",
      },
      height: {
        98: "28rem",
        100: "36rem",
        110: "38rem",
        120: "50rem",
        130: "55rem",
        150: "70rem",
        160: "95rem",
      },
      width: {
        100: "30rem",
        calc: "calc(100vw - 20rem - 20rem - 1rem)",
        calc2: "calc(100vw - 10rem)",
        calc3: "calc(100vw)",
      },
      backgroundImage: {
        spots:
          "url('https://thedial.infura-ipfs.io/ipfs/QmXcLBvsHDC8kNDe3WFQHzPpotVKG1AHsAHou1AbiYe6yp')",
        ruido:
          "url('https://thedial.infura-ipfs.io/ipfs/QmVEauHNPMTjyfYvLaz3tJeoEmubApYeMy7EpKycL12umE')",
      },
    },
  },
  plugins: [],
};
