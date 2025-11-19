import { ItemType } from "../componentes/Common/types/common.types";
import { PrintType } from "../componentes/Distro/types/distro.types";

export const LOCALES: string[] = ["en", "es"];

export const KINORA_QUEST_DATA: `0x${string}` =
  "0xB638b8e910f5852d9B2b69D250883EB3E8575092";
export const INFURA_GATEWAY: string = "https://thedial.infura-ipfs.io";
export const DIGITALAX_ADDRESS: string =
  "e0deaff9be0da5309d2b19bcb0c133397b2bb20be563ab038e265b0800ddcf57";
export const IPFS_REGEX: RegExp = /\b(Qm[1-9A-Za-z]{44}|ba[A-Za-z2-7]{57})\b/;
export const INFURA_GATEWAY_INTERNAL: string =
  "https://digitalax.xyz/api/infura/";

export const CHROMADIN: `0x${string}` =
  "0x16a362A10C1f6Bc0565C8fFAd298f1c2761630C5";
export const VIDEOS: string[] = [
  "QmPhfJ5E8m1LLdmBugGYwb7VTAG316ohRgt8EVTuM482ff",
  "Qmb9i71wcXk8AFQRrKdqcVcNGfR7ovLijPmxfkeKCjFc9o",
  "QmWspMsTLtSgTBJL8yBHhQ9R2yrcd7tjR5GkTYw2yBKQuX",
  "QmQFE4utd3vitUsY6BUw2oJas1dFJinYub2T6GsDHZTep9",
  "QmYVhzAzEU8cQmVtNchgWLtAaEwjdwZ9s9u5GLNQJXQvTE",
  "QmdSXcfAM8KdEbWfYEwCRT1gg5m2QjbZQ1GGjqCaHA71Cx",
  "QmaNb6FmdAtNPyucTi67qNx9QpGepjPCZ74aaVzVPWX7bP",
  "QmavfjniycTakzRQibgRrM4SEVBPUPh5i1g29m96ZPAV1x",
  "QmPLLa9wpfhZ62QAWdYsEjyPXkywuKrvJPuUkk5imxMzp4",
  "QmSX6M6r2aEgMguCpmb6xiskSpAFJ92WN9Tffw4tPZegzo",
  "QmRLB1MrweGDLrbymb2rijLkZKCVzuFZYgmgwrDPPMkxAV",
  "QmZyCsUrAtQ2KXdSyJ6T5Mc4sq8jRRYjMryu7aQqWjsjQh",
  "QmWrYKVpk1kwf4zwRMqeEnRzz5vpjLEYEFGYs9sSYqdaJK",
  "QmYVc8mP9BQGTo2tRTYtkYKTxHbCaPR7itSvjne99chAg6",
  "QmSzUc1wtMeFbtjfhft49ppVhhZjLmQF61DyF11XggX27W",
  "QmTAjN4mV9sBAcNFETF6D71T1wLusahjXnotVgiJ3k3Quk",
  "QmT14YpkviridMGM5obNSeYtyUrTvdZhUM2nswwgZh9jGD",
  "QmamEmJxF6p1bfqV34xtp4BgheLgj9YDNG93Ktf31MXTzQ",
  "QmU569Q9FFnpoatwmiRmtK3th99P27zGcDyD8MwPo8rYYp",
  "Qmd6QrcALR7Q2NKCJdyAx5ugpbDeWnYvbnRTgR1THaxwUN",
];

export const THEME_COLORS = [
  "cream",
  "dark",
  "blue",
  "green",
  "purple",
  "heart",
  "plum",
  "lime",
  "sea",
  "hot",
];
export const HEART_COLORS = [
  "#131313",
  "#FAF4E8",
  "#FAF4E8",
  "#131313",
  "#4b0082",
  "#2f25a7",
  "#3cfdf6",
  "#090d12",
  "#c3e0c3",
  "#ce02cb",
];

export const REPORTS = [
  {
    title: "October ‘20 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-november-12th-2020-36b1da78c09c",
  },
  {
    title: "November ‘20 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-november-27th-2020-ac33b99b1250",
  },
  {
    title: "December ‘20 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-december-30th-2020-d5c6b5665b85",
  },
  {
    title: "January ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-january-31st-2021-998cb32f198a",
  },
  {
    title: "February ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-february-28th-2021-55da9ed10bb8",
  },
  {
    title: "March ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-march-31st-2021-7dd878756705",
  },
  {
    title: "April ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-april-30th-2021-3834e8c2d16c",
  },
  {
    title: "May ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-may-31st-2021-ec7070f40cd7",
  },
  {
    title: "June ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-june-30th-2021-80b0a1ae3d3a",
  },
  {
    title: "July ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-july-31st-2021-c7549fa7a0aa",
  },
  {
    title: "August ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-august-31st-db321d00715",
  },
  {
    title: "September ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-september-30th-2021-b146fc4dabe6",
  },
  {
    title: "October ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-october-31st-2021-38383898578e",
  },
  {
    title: "November ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-november-30th-2021-c44659144183",
  },
  {
    title: "December ‘21 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-december-31st-2021-d502236f5043",
  },
  {
    title: "January ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-january-31st-2022-2f55130354eb",
  },
  {
    title: "February ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-february-28th-2022-ffe39d99978e",
  },
  {
    title: "March ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-march-31st-2022-600e0915d12e",
  },
  {
    title: "April ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-april-31st-2022-b76e5b9c7325",
  },
  {
    title: "May ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-may-31st-2022-6e7dc18fcfc2",
  },
  {
    title: "June ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-june-30th-2022-fa3b7e7953db",
  },
  {
    title: "July ‘22 Transparency Report",
    link: "https://blog.digitalax.xyz/transparency-report-july-31st-2022-210012653c11",
  },
];

export const TEMPLATES: string[] = [
  "QmPVi2wWNWJLgDZ79ZreF1px4J59C54wXiU7bsR1F5fMtA",
  "QmNaj54P8MyWbpeimd1cAsYid1iVGd3CxhZHMTj39mYyKm",
  "QmNZmogEDuSDarzxxg2jLW3aLk86t3TzDmcBgxjtoHJkEe",
  "QmS1rihLwhXXCBpX2uKejVWcnLqPuYvTiTRWopqZPw8C2L",
  "QmYYeeNfcJXbJfMc3ooTHwRy788tnY9mLR9kC9XfLCwKBU",
  "Qma7KiRTyqKuavatx9oTbf8B5uuDhqhfAdS2VTcJn1jM5c",
  "QmboNaCBAJiMus9vRdXVsFZ6Zi5fHFh2oCPB3fpKaoEbho",
  "QmStemfLoBrnT36Js9ykzqcABzTYQbCq1wYxhBrgcPXmMM",
  "QmNpAXWskMNupGkcKgyZ9G6g5CYKtM1RiSbofb8sEBvbwY",
  "QmWUYGH35QkBG6pA4gkiWBSwncbL4kbJeFfKVKTQ6ghGoF",
  "QmTKuefNEyxJWx7YCLRKnm5J1Na5ApUy5KTYNP1od8eCAi",
  "Qmbw3tb6L7Rmzg8oox1cfkeLEq1y5S75N5J1rTzY99wjYX",
  "QmcERc2GZ4nTzbncYmyWokQXLUb8FTqiXLkTUDcJMvgtxE",
  "QmXFHFTG7bEwMWn5eE9TLqBRyRWaq6AzjgEryPeZAewXET",
  "QmYDAK59zdWfJT3G6mrw2vZz9i56ycrL2mbuDiqs1oHsLn",
  "QmUrPrjNdgaEmkJ3qz8Md7Pgz4GLkiUCrYKB5MCyoMZNBk",
  "QmdKSdgCUt4LTvZZegApNhqMJqDXBL993LEPoepAHjwNDu",
  "QmcgN2Tk69RD318qsdSrQUTJsntCY5WoeNxHWPemRha6kL",
  "QmRsWimAWtEowjUJxge86K9qkgyLAqHPzbJooryi1jVE59",
  "QmSYvX2M9Vyg9zTBzp3x1VLkoGvqJBLhF9gGz67xk3ZyYd",
  "Qmenmn64mLqnh3BThtPhbyd1HaFfzFum8rEggfiuSZbsne",
  "QmW7pTL27fPuBuxpoLwmtw4fFVoUULv862vBmvLTLNGqL4",
  "QmS94S4z2zMBwunk6Phmw1F44iHB1ijimRB2drATqXTVZs",
  "QmcdSjwn8hCWfrZ8dWKShujhsD2ACVXoMV9hQHATN4LGdY",
  "QmWf9ZrVszwt3rAzQmEmHVktEiKRc31nX3k5vQBP1ArbBn",
  "QmQveLFJFGc5o7SQiqQZ55X9qYzoxHbaCke11GW8bmdVHV",
  "QmfNmeiCXBuK5h734pyjLXuvprzzT4ob9QZ328xziHD6rZ",
  "QmQHvh9FuAfCyBWRA7JwpZnhWmjWqUwfsiAHtScrYNeDVL",
  "QmTdbyUwZpfz8VVX5AnCBVY8UpesmVACZcWMXza6eqsGxG",
  "QmcTsaiwhuBn9zcWQwez7h7MHey3y7Mt4TisaJcxLTECLp",
  "QmapHKFYcS2qxjJ6rEC1yGV8btMVtLSqFbc4aXDrYvwjab",
  "QmejtAjEztJZJ7UDrp7hgaLz3hooPTZnXVa5irQ8jQtNa8",
  "QmPHhtBwaqERQ4ER3ne7K68JUYnFcsnJkTNKScLhnT5k3P",
  "Qmf6uvdyEeXvBnxmmUKtEX3AKZVW4VFcqcenGHG2EDAGjS",
  "QmVnA8nrcgKGg9q73dQZ6swi5zWRMrqGQkGQsQYpfbfuFX",
  "QmUDe2dUB2DLP8YffaBaf3qAAAFRJ9w2Jxwy88RqWoiWWg",
  "QmeeYdpfjhhtbnisdQVLTWtoRgBEXfM3qXVwFWdGwAsxDH",
  "QmWUSgrBtZ2hp9HRkCRTh291zdzWDWsDdwVVpXQJjWKrAM",
  "QmdDJbgtcigDyUsP4BZR1QpaS8gbcBUfWJYzUMfbEZVhS9",
  "QmTUXqrgagNfTy4ViH5s8sAhhNpcoSswtToYSr4L4W4C71",
  "QmTUnveZdBR44qG37fiSQLtJtWgvzXDWYNeMepdCHPePSy",
  "QmTBTTeWcYZZyhqFQNQDLAZXPM9342GFBdQMTRPrPpZpUe",
  "QmatUJSqiUwBeYTQUP8XWN72KsYZgnB91xGNofoFyKAtGC",
  "QmUpihZLKFkk59a7LNzkrEvKFnfQ3icNLaCLcVE8BG9qqS",
  "QmZpcG4D3C1sZwz7S12ZGDC54wxEXa5hTsugGaBhVy2pEY",
  "Qmb2YNzekMzR2VbY6KxZhY2rxHMES83MLXYMx5Rzb6MM8z",
  "QmWnBF4fa6nPz7ziTvg331DiZmZ2eawzaQT1vndq7xKNqi",
  "QmdKE9CPwuG17ZAxq5y942wCb8ExcZa9jUtaUbSZNmuFaF",
  "QmTKuvirneW4Kjf1xTMx3i4e6kdMpyaPsn16NGeit1sr5F",
  "QmZW1GkaBVx7Qx7waghtziLVpdmRbvsCvpngNKrG6kYtxh",
  "Qma462PQhSXBsm1Vn2xtsFfTLEhKxbYc3NVUapspXs1W3T",
  "QmRiyNn4m2QSaaAd7efKfN4Bdzia2aCr5SddR5ma8WfJaz",
  "QmRtoNyW4Cxec3BeNtnZoEV3xntfpgHnifo8wvMbCSdxzQ",
  "QmZ2kMCL9XY7oz4h26njKF5rRvf7JuJxkES3PBa7omDKKi",
  "QmWwzZdN4RbrhKv1r1iVeCuUTkmX2QEMe8HchYvWLammbM",
  "Qma8dKVzfwVzFJCWWH8gBujPV89ZEVDRe9fhB9v3H5ZYKB",
  "Qmc94EuPVCcCwbvTEdNzGyxLj47GQEUa4QbdpLzKRN3xfd",
  "QmPhi2bdpChs92kEMw6UURV8iUKPB7HQTa9qCLYsjKFtbR",
  "Qme59XtQ1FUh2YgH2w7WuJdhBmYkXGbewRLs2MvW22Nvbr",
  "Qmf87A3nPZxfFFAk6jr8TQSRJea6HogXMgNgeTS68yQNva",
  "QmY1mqcLc5X7Cap34p6W4zvf3yabBEU2gJ9MrVBFajR58H",
  "QmaSqSDcjDkq8ryMm77B29omK2SmiFRzQSmN84modWAxtk",
  "QmZaWFyiWRVUcPaX8nrhEsEZKfxFWEdcCkViztc5uwZj5M",
  "QmShyGTk7MmsSLdGm8LNqyy3R7tnysTMfkEmy8Nypr6J6W",
  "Qmb1mk7iyVPYFg67GGNntKHAUEq6FC1xPtZjDMo7QoDzbJ",
  "QmPDFxR6mDYNKns2z4E1bW2kFm3ET5JCuLwamKmu7bTm6r",
  "QmXpg6ZVjoW6iYfzMRvrGsBYEdHWYSsmriVZr1BtHbgphN",
  "QmbGiT26R8eHdJAEr8Fa1aUqmGutCxhCMuGJLetPnt93Hu ",
];

export const POSTER_IMAGES: string[] = [
  "QmZztZSWxvzxx8R4E37hVobZR1gAQu9QouEbvD6DaNdLht",
  "QmbwcWJawgCyzsdMdD5a57iKA5ay52mnChpoWpexcUq6cj",
  "Qmct9CwGgDCkAcfCd6zYdZ5oSsxUVymnBedP5XsWPSYbiV",
  "QmXYd5LgJUCfpogprcvHnb4VKYDK2zzZoiyEqiZiuELKWx",
  "QmPSuDp9VPX6F6h849wRECQMcVPtQprbEc4pRicoN9Juts",
  "QmeuxU2wT88AtwmAXaTRjMHX1SmZweBhiYtCQD7dnXqvp7",
  "QmaGp2birBCzCnoFuoppUc3eWcnPo6jKm7puexoYtfe5R1",
  "QmRptSwbYVL3EwiRwZe6EtZvvgkHCDLLtr8o8fXnU5KGv6",
  "QmW52aUq4j7NARVCHdjhN8Cbob5Me9oXrNNx8uFAavZck7",
  "QmVqttdRfUUyuQ6wGLCZDQPjkPSJ9chC62gZsYBgTZC9jF",
  "QmeDpFwSP3FjteGcxoqeJBtWzdejyggGVZ6MtxrkNiZYQJ",
  "QmTx9o4BswfSex6wT4hk7qtDFyf5v6RFpByoTkZTtkyVUy",
  "QmbgwztGLVY5243GE8b969iewoQ6QtuK2LdxnBY8txhhYq",
  "QmRihFRw8xGiQWWrejWCTXst8PifZbAdeaw6ZMsVsVvCyQ",
  "QmZSABcNszLEXZUzxbQY8JfmWbBM2TChoynLxHAz9dMGfD",
];
export const PRINT_IMAGES: string[] = [
  "QmY1yAtwqsFBRjGsfESA1kz41TyYi5vEDu3rvjeX6dDsNX",
  "QmVBQuxRRrFhEdJoY1kSkooShyoUYcUVRdTKxnkQtzYzu8",
  "QmQT7ZLF2BRZrzKLaEtvpmnFeh8Rodho2natz81zBcrsdr",
  "QmRCJjwEp92ukRbcU7M1WBxC5covkiGCLcDwZ4zQa5bj87",
  "Qmexswwc26XJFDf3g8kg9x3vNtGu5VTHTy3DN54dSwbSMQ",
  "QmQYCvE3gW7NNW79oUYiLxc4bfS7YQeht79RQS5kjZChkZ",
  "QmaUztCSGQWMqa6kdcMe5MZgzmuigRrS6hyhiMTLpvJZvJ",
  "QmZm44Tj7DnTgit6iQnLXCBq2n9vxLkEkFv2jqAm2gmEyq",
  "QmUD3Zjed5VJikrnenXfW9H1MDvLUuNmZaqqpAbzgoWSL7",
  "QmWQVVdWBoVhRhNGLyDZ93HKueE22NHQfrtEdXZRGG6u9X",
  "QmcJtqWRgCyVDaaCK9q4fL5AzteRn2zjpMdKxJBRySmfn5",
  "Qmb4hxSwzya8xuzJtT8Pmdz1nm1xxAY8bSfo3dsUUtPLxW",
  "QmUuBVAzbYVkUa1USoXPXZgbXnjGuoP3biEVtAHyt44AUR",
  "QmXKwZhuUCaAxFP6DHG9X7X2nhCoPyS3zDJZGMzozg2F9D",
  "QmUySaeJQxdjNd8dB1nDSX9W6YJWWs7fGbzprWf5YBUMni",
  "QmavwSdj3pQGipfLEMedzmKkaEuskUd5nXd9my1ZaKZNMm",
  "QmRzSkv5KxH2C54CggxjuQekC37ahx2HzqVQSf4dsMETic",
  "QmX6NpRKbaUfD8BFUUyRFHBxv5BNmihd2UApV975Fnogxq",
  "QmT6yfVAf4qqyNEadG4Wpf6xGmnfGb5uV5s7FMt2ecgUqo",
  "QmWur2CFbBu8RWffXYGfSFNjBFXhtPRbcgGKGQZvnFB2MF",
  "QmcNbcDf3teGQkjspZnEqfW8nVdSE7788eaV3Xivn8CuVF",
  "QmNdryjCLpDexYdnfuUQkByPjpyU6C7VsLzyoFR8g2c2pa",
  "QmeW7BMadxZG1mbhCpmXawhxdQpwUR7kcnC8cY1CiCd318",
  "QmeQf25CM6oFpabmpAo42Q2D5v8k9e5zvhFnsdxn5yYCnT",
];

export const TV_IMAGES: string[] = [
  "QmaDBD493NgWyYqSjN1xsuSgAsxpjJBrKo4fXxPw6szMVF",
  "QmS1bVB7eqEjMvhbE2Q6KH4TbSQog3AZrbnCSoiUd17t8r",
  "QmUUNyK8XkWQVTRJQCWbCTyQzTBQgtj4GNJN5ohZgpKZiM",
  "QmNRAEVYJu8gYCJLfNtMHA7XCnoZ4eZ4oyWtyXtGNLnXQy",
  "QmT3Q6r6pNogpHSMyw8qA8hEm68hjihN7ACG4Qrkdvwftr",
  "QmS1bVB7eqEjMvhbE2Q6KH4TbSQog3AZrbnCSoiUd17t8r",
  "QmfJ7qQrXjfowMZgURcUevKAFvRRRdXN4mrNdH1TctL4G6",
  "QmTk2wub1s9bjAiQVBwQQVWtbDUiijtybziPte3tJZjHUE",
  "QmWyPoN1cs4YsZ5xAJ3o7gNCvoJdQLcYzBjQrcKUb5n5wi",
  "QmYDHVdKUsstM4S8jsMpoymUprYf8FGwNV5bhrgSLF21XH",
  "QmcSZdN55K4wAGP5xNa4cGCxMibLbrHCvJHAuxMVRhdrB5",
  "QmTSmvWanCoVuy482ZnXGz9GK4Qpn2c3d9yxLJahRMxEcf",
  "QmRBvwg9wR8qDXsypCkYfogJpQhLnp53HJmTGBnz278tcA",
  "QmYin5ZnCT5jUCptWvrx5ZvPr2NKb3ExUQ7psMEkjiB5hY",
  "QmUaz4R5Tif6QfRsnRQYYkt6rwd2B2n5SwhoeUmfAQH7yM",
  "QmaVirpj2kd2EcpcjWcGeJBkmeaocjubSnbRwUqGpPeKKY",
  "QmQc2Xn7nGu6DRier4K8vaWbTZEvdxRtSa6GzjSLU4PFUi",
  "QmSgfJesbjiTzSfemnPsZ1dvCEWVaKjkFopxjfswrmSWPu",
  "QmRRw7N5G34aFChYabqSZagVCR6Z2pqKUjxoiHyqn63Xyx",
  "QmVgVqNS4pJ6Cy678wu9FMrUNY9FX27NghXdshuRrqv2PU",
  "QmZaouDaBDY2puZ6yT8NRQLWXpuWDSySNiSitqmmNfCCk1",
  "QmPo8k7if9Hb1BNb2uonmBMqaVouBzdYstuV57ViQTU41K",
  "QmNiZzKwRmMuTEty8ai9J4cQdxVEfvSun6aUb7Lq4RAZTv",
];

export const BLENDER_IMAGES: string[] = [
  "QmfVpQqb147A1ubftf7soJ3XQQZVkZMX2xi8Y2dUzkmbS6",
  "Qme1Z7XBAXepfZk8Yv4Wa8uovC7ZYLnBwSZ36gQQd1bgk9",
  "QmZoh8wbJE55CNEndYDBa1S6tzEjdXhWdQBr21aY1Stxs6",
  "QmXXCHdiYKfSyjBokgKs77EB97EgNPh2vNXVsFvvpbEVdP",
  "QmTtYyZm4F4WEyyqgbVkZpPWWrejmZ5gJRyrnpvQCQktAq",
  "QmTXtywYaiZd7wo29WRgMM4V5oZFn3HCQvp8L89ww4oWYS",
];

export const SLIDER_IMAGES: string[] = [
  "QmYWZr4WHHYoAAUMcRTSEqPQgKnarDegjF4oY2ygFTes38",
  "QmPXNEGoUH57EombDdHi35nH72jDVLqTyrGxJwHYTPztN6",
  "QmRg2ZvbtgyeQwjg2A9nj2h9ZQfnP5q5LPafmTAcovXvWb",
  "Qmcyi8dEDWaL5Cd8ReE4RJVMQ36cg5u5g4WyPWTPHG82qL",
  "QmUzfxTVywU9NuqgKqzwFyWvR8ufwLCTwRxchKUCbQVPre",
  "QmVtkoi96myxPq3PLJ4bQYYMp8i1WVb9RrXGW15VNLu83x",
  "QmU7GdPSEzfqEanSGq33CF83yVEXgPEnkwt8JcYXKNniKa",
  "QmUKiQk8qxtuDUuVzXHUDQgjmuEcrx3xcxYmeveFwnN3s7",
  "QmbnhjHGNXXs8Tm8J6rxPDdviDm3D7hzbR1pQ984SJrLjQ",
  "QmZLrLoiWgSQx4Y4p5womz6RfSCMeXPNLyoWd8wrQsVcew",
  "QmRnmbEXXEjy6nE15hoUEjqvLZBCxfjJUJPtRx1bttz7PE",
  "QmYSeV68SSimXhP3dPbT3eCs4kbfmtUbcuv1zdaz4znVby",
  "QmQu5JbudUocf1AUx6eVqedR78t4pxvUaKci9qveTUbo72",
  "QmSj25aZL7VChXMpdhuH4srBnaRs9X2LZiBg2zj4daD18r",
  "QmUY7zhydGZbud3XLkmY7ATFt1s45HTgTWGP5jACFFT7mT",
  "QmSi2mrHFzhoMwe8KRBQRq3kLNNwtyHYFajqu2wRPSPTn5",
  "QmTRNcDzGAesMVmYisXGJqzeWsPR3kKtCSRMWygPjPDToc",
  "QmVVRYHywoyeJBELXxMtcwA65ZYHFWTM2BaMac2pJMZuFV",
  "QmWHA1icgnPf4LRGUbgVkTytjnfAgAt6JRn3sh2xSiyRux",
  "QmUMoEnpuNm5qGEzoihFSJbJm51CuquYA5AjQMCxtV3uDP",
  "QmdhewgJ5vdD5SxZnCEx66w3NgMiuq1B23pBsSo8gCT3x5",
  "QmS53zQQ5bdv2Bt17d4zBCF9WH7tDvGfmt99k8n9f4arfQ",
  "QmPTt9tmgT2V9owEXWQ9LeoFf1LzM1pX4ZH2D2P9Swr3Rw",
  "QmSHRBLYQmqyg1MtmDnjXh6m7wfuk2KfDXWxFKoUhS3Edi",
  "QmbbnAbiN8oYrRcCyjkciTaCLQv55f6Zxasee1AaH5z4r8",
  "QmStuz3QzMLsXar2otn5QE7cL6M74nhqp9W5pdKGEHc1j3",
  "Qmf1rdfGzZQBepJGstC2ZFJg6aRyYSk86aih8k1ohLEfGa",
  "QmcnkKLbxDhLQGGNFHETqCvecx7qH44gKwqATYzqFFXP41",
  "QmR5itqF9ww2NAW7UU9eVoHVK9TdkeZ4K7XR1VWPw4PkkD",
  "QmT4NzEaevPNsggTocJ8GbkyNdACr6AUT9xSWX2d4jAqQZ",
  "QmVY6iyvx6vjHAJA6pAFBhFZ1KZKuQPQ2ypQAf1PnxKbXW",
  "QmaFAoj7nfjifrrof2oSY6DmzLBCvoXSvKcqUnz8qU6Mxh",
  "QmRoR1gaRsE8dwqeJu8DymYPPTsCu42fVNTEXFaTt31Rcp",
  "QmXEEMpMyyioS89B7Csh9zSHFZaMQ2k2MhNqGZQM87U426",
  "QmciENzaZbC8sxKqkLinwTNPgMiaYSavtQjU2hP8cPjuVn",
  "QmZqU8rxMaDMgV3httd9Dt4SmWQhvFsEfUwKRiQxAntrFg",
  "Qmc9shZTJ9NhC41SUtJPRZXb1CJY5epGNLTKMNMEbLH24o",
  "QmRZAsWGsF6E6v3yJPCeWYoiYTE33iogQVp7stR17YmMWU",
  "QmXxh3L7P5PWYzNEYhmnvrBhpRvACMWkzbt8zp6oMdHYF4",
  "QmZkHtabU2NAJk8NZEDDLGUVGWZfs2SRf9sKsr6Lr1ZH15",
  "QmVhU4ujY9VVvycNSYwTC2bD1QWo44aarZ3y5q4pryD1js",
  "QmVVRYHywoyeJBELXxMtcwA65ZYHFWTM2BaMac2pJMZuFV",
  "QmXuiinjKCBznDirgKJqScJxiuBB5PZjvjFMbNW1SfftWx",
  "QmSawPR495Nz4FkzDtEdMGqseajJVgaRdkzjjYo323oQoa",
  "QmczCJ447jBVKzJx5Hzpw3kKbyiZ7L4txLCzfF2jyvSyDf",
  "Qma55LANSbUDxxpDyFNXqLgd1NbBP9ZgZKxhnyU94AJAT3",
  "QmWHEWR3b7TxxC958bXFHsK9Y6xMaHExjyHdC8EPyWbLTB",
  "QmaosdFhBFCfrbsLofVy4gapoE8chuyo3D56SKDsbxA23S",
  "QmPT52h6Frw85WUnzUUnsZHyEu1grfbQ4mx8eDpKffoqya",
  "QmdLBsKJy3QxAgwNvTyHMt7KwxGgSXJjamxc2XPdMmrbVF",
  "Qmaamv9FVvuHp97L6xZYacHLaysqR69G3ujN1bRgSzCFJf",
  "QmVSdCFv7pYy8g2us1GNqBrCQGgAva4BGD1tHxDHxsgDA8",
  "QmW6DMDkj47xiTD9zAdpNixDePMBxvsejijsv6HEhtg1rH",
  "QmdXabFtBajWEwrsmdYSdpBqVJ7a3RRZEhDWFwF3bgCWxM",
  "QmNo2STKijpdNuzmXqWtgAowej4q9CyzMawjeDjCzihLSC",
  "QmYsNEoSRsH8e7BZQNK3CWzxSXnDLGCYE7G4zJ1Fgf7T6V",
  "QmcdCAFND7wsUwSbNTfVzEgWojqLNrCEJJ6Kju9N5ETUEN",
  "QmVFbVapeMBqrBR3ZmR9TkN1pfJBuD89HhMnDv7bc8YKVC",
  "QmNPLvtqUM2gfyvGmvPtbBbW3RGyCYCz7EqaYTcFALA6n9",
  "QmQ6ZGy4j4NRp9fwLnU2juPXtnaX5Uv4XCDGPTwUsUhtcw",
  "QmTt5vN9y9ycz77jHVNJguTP4bzEAVfHrep2QqxSvAiKhX",
  "Qmc9VJkkwUdGkzmjHE8ucynzwkGKabwVRMvMv2pYharHjz",
  "QmWacwy98SvPX7ZtJRho3tZeHimFrK3xkQsWPjRNjgPu7y",
  "Qmdh9UV5UY68bRUBdhhWaqv1dhemYAEQ8r9jPezaYaLenT",
  "QmXpxDakNmSixpSbNr9TEfEMJ3bJtVv2EcKYQ4jVAD7C9C",
  "QmfW5DbyxTMaH8ZXe9pchKETWU2HpXGLwrBGd1iGBQpZbR",
  "QmPbjJn2ViDdaLfbihDyd5Abujs43q4d3M7FBKfAYe8rYG",
  "QmcnaDLD2iiGjbr6Vp4W6ViQFZft4A2NVp69P823b8h7Jo",
  "Qmd3Fk1NGpjRRZBu8VAVAMJVXWZKnhXRqem45U5N8JZQqs",
  "QmYCoRmNUc15f7ikQveqi1dWnjFh6ctxD4Uy33s3c1jWCU",
  "QmXrY5aX3venc1pP29pZjRxwB6wy5jfvx2hwhM5SK6KZvi",
  "QmRUiRyBk9fUwK3B22BbYbYD3exvj4fMfVxGwm2ioQwHya",
  "QmSArw1Fq61x2E6GesKPN8GDNkSKj23BLzJxjbjaoARgyB",
  "QmbZGXj4s5NVPakKsokc5uFTgg4vWMA6eDfkUEMExvSQRg",
];

export const numberToItemTypeMap: { [key: number]: ItemType } = {
  0: ItemType.Chromadin,
  1: ItemType.CoinOp,
  3: ItemType.F3M,
  2: ItemType.Listener,
  4: ItemType.Other,
};

export enum Idiomas {
  Ingles = "en",
  Español = "es",
  Árabe = "ع",
  Hebreo = "א",
  Portugués = "br",
  Ucraniano = "ук",
  Farsi = "د",
  Japonés = "あ",
  Yiddish = "yi",
  Francés = "fr",
  Turco = "ç",
  Húngaro = "ű",
  Yolŋu = "ŋ",
  Gaelic = "gd",
}

export const idiomaAImagen: { [key in Idiomas]: string } = {
  ["en"]: "QmZ1h4g4sypkZXDPsSQxg8YoqN3mnYUtFVfxeWVRcC7Xmb",
  ["es"]: "QmY43U5RovVkoGrkLiFyA2VPMnGxf5e3NgYZ95u9aNJdem",
  ["ع"]: "Qmb2rQi84hLXtiY673VaBHMTB32Lo1Xe1ah4Q7mG2fKf4J",
  ["א"]: "Qmdyd6iUPYNruEi5BJaYnoJ8H4FDwqxJF4EAzLvYZfxgXE",
  ["br"]: "QmQce4gWKLj9xWySjxUVsHKorX5rDL45JiaU4y1TBqjLVa",
  ["ук"]: "QmW1QzS8AfYEaV4Kc6YtwXSUXRUatP6VozLy1HB61DTy27",
  ["د"]: "QmTchZ7B2vrTnkKKBpqoYcmLQ8H9wxiNet7DWtmQeVzMdM",
  ["あ"]: "QmYz9Van9EVEZSLcnbMXS9bG5FzuL3jvEe5Hy5fcs361RK",
  ["yi"]: "QmVjE8UDvswAGXRCVFdqzwAHAMTjS1UjotfojFMqxWaVdg",
  ["fr"]: "QmNZgw6NCiV4wU9h1R5DkaZGWwHXVKthRP45xtQYy4wtp5",
  ["ç"]: "QmNUBhcEpjjyHnsoR4ViowP3oNvh4trZ5H6snFD7Hm1hdy",
  ["ű"]: "QmSJJkCDMN3bTdD3T6j1B2hfCzhnycpbitYAfMsSKNUohd",
  ["ŋ"]: "Qmf11oxoyAe5vUbZAwHSTCCfRSWTMYijruBeABLrW4rhp7",
  ["gd"]: "QmUzrNvabPJXnZZXsaHDKNoSNTzbQiUjGaRA4dU2aFBJmk",
};

export const screenTranslate: { [key in string]: string } = {
  ["descubre"]: "discover",
  ["discover"]: "discover",
  ["diseña"]: "design",
  ["design"]: "design",
  ["distribuye"]: "distro",
  ["distro"]: "distro",
  ["colecciona"]: "collect",
  ["collect"]: "collect",
  ["creative production"]: "creative",
  ["producción creativa"]: "creative",
  ["cumple"]: "fulfill",
  ["fulfillment"]: "fulfill",
};

export const indiceAIdioma: { [key in number]: string } = {
  [0]: "en",
  [1]: "es",
  [2]: "ع",
  [3]: "א",
  [4]: "br",
  [5]: "ук",
  [6]: "د",
  [7]: "あ",
  [8]: "yi",
  [9]: "fr",
  [10]: "ç",
  [11]: "ű",
  [12]: "ŋ",
  [13]: "gd",
};

export const idiomaAIndice: { [key in Idiomas]: number } = {
  ["en"]: 0,
  ["es"]: 1,
  ["ع"]: 2,
  ["א"]: 3,
  ["br"]: 4,
  ["ук"]: 5,
  ["د"]: 6,
  ["あ"]: 7,
  ["yi"]: 8,
  ["fr"]: 9,
  ["ç"]: 10,
  ["ű"]: 11,
  ["ŋ"]: 12,
  ["gd"]: 13,
};

export const BG_SCREENS: string[] = [
  "QmUTZKUhQwSHYDhjbwwZyAJch9zj14qU8nNzQHb8w7kqvH",
  "QmYxbTd4ytsGcUaW87EiFsQzq6ugejYSDmuyAyMZbLsRcY",
  "QmeE4jXbUZPgSufP8PsY1KNv4zMB4obq4aD8rt9xwpow4e",
  "QmXoekrBqnCbsF3e5yjavH49Z1nk8L94igTPGvmmxccQfh",
  "QmV87NiBFFht54e7aCDSoG2KmuGgMdrmJvaX3BSifnmDQQ",
  "QmdA2ebE36WQcmB4XNs6fkhvY6MZsn5U71qUz8Q6bk1ETY",
];

export const printTypeToString: { [key in PrintType]: string } = {
  [PrintType.Sticker]: "sticker",
  [PrintType.Poster]: "poster",
  [PrintType.Shirt]: "shirt",
  [PrintType.Hoodie]: "hoodie",
  [PrintType.Sleeve]: "sleeve",
  [PrintType.Crop]: "crop",
  [PrintType.NFTOnly]: "nftOnly",
  [PrintType.Custom]: "custom",
  [PrintType.Other]: "other",
};

export const IMAGE_LOGS: {
  image: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}[] = [
  {
    image: "QmUJhqQqWytTGinT4LvgzvHfrpRJaweDY6uhuFQb7SPvai",
    title: {
      en: "",
      es: "",
    },
    description: {
      en: "",
      es: "",
    },
  },
  {
    image: "QmdN7qJfKLLf6gABofJzbwd7Ln7f9ookvzkVjipzL95zU6",
    title: {
      en: "",
      es: "",
    },
    description: {
      en: "",
      es: "",
    },
  },
  {
    image: "Qmcdzk1nAviFEGnbwV8FUADsJVJV32SVQa941oJcJxLray",
    title: {
      en: "NPC Studio",
      es: "El Estudio NPC",
    },
    description: {
      en: "Insert $MONA to activate your AI agent workforce & equip your LLM machines",
      es: "Inserta $MONA para activar tu fuerza laboral de IA y equipa tus máquinas de LLMs",
    },
  },
  {
    image: "QmXdaKvoQ5hS3t2zsZzqttkugGV6ztmAmmPGhWBrC2rsun",
    title: {
      en: "Coin Op",
      es: "Coin Op",
    },
    description: {
      en: "Instant wearable art gen perfect for a day out at the automat",
      es: "Arte generativo usable perfecto para un día fuera, en el automat",
    },
  },
  {
    image: "QmXhUc68vCuAS2Rxbfj4HJ8kuF2TqkhZfVc41nqS9SnZLy",
    title: {
      en: "Fractional Garment Ownership",
      es: "Propiedad Fraccionaria de Prendas",
    },
    description: {
      en: "Plug-and-play open manufacturing  contract suite for digifizzy fashion",
      es: "Suite de contratos de manufactura abierta plug-and-play para moda digifizzy",
    },
  },
  {
    image: "QmcvPutuJK2CX8cyL3ocDPLUrvWnJDWgA4MSBhr8YX7twb",
    title: {
      en: "The Manufactory",
      es: "La Fábrica",
    },
    description: {
      en: "Decentralised production & fulfillment studio co-op for the gen AI era",
      es: "Estudio cooperativo de producción y realización descentralizada para la era de la IA generativa",
    },
  },
  {
    image: "QmfWUEoyST1M53fSRUGPkVhQHS5cvKaJVKvuKGjXzmsgX6",
    title: {
      en: "$MONA",
      es: "$MONA",
    },
    description: {
      en: "Hold, trade, & insert this ERC-20 to trigger rare events, with conditional logic",
      es: "Guarda, cambia e inserta este ERC-20 para iniciar eventos excepcionales con lógica condicional",
    },
  },
  {
    image: "QmVNwrNYUy3HfyTSv4CVJLFRW53Lbrv6DuETgCRVYbqDAB",
    title: {
      en: "Kinora",
      es: "Kinora",
    },
    description: {
      en: "Web3 video player & sdk with quests & metrics for savvy creators & friends",
      es: "Reproductor de vídeo web3 y sdk con misiones y métricas para creadores ingeniosos y sus amigos",
    },
  },
  {
    image: "QmaTft6ayihYwKRdhSNc2a8RgSvKq9jK6YvTRA9zrhcs2Q",
    title: {
      en: "Vision Quests",
      es: "Odiseas Visuales",
    },
    description: {
      en: "A challenge awaits!  Collect your rewards with token gated gameplay",
      es: "¡Un reto te espera! Colecciona tus premios con juegos protegidos por tokens",
    },
  },
  {
    image: "QmQt4QVbXfJDwhre2ScJxm67gDid7VA5cmycygyjaL8Fuz",
    title: {
      en: "Chromadin",
      es: "Chromadin",
    },
    description: {
      en: "Replace YouTube with rare streams you can collect and take with you",
      es: "Reemplaza Youtube con transmisiones únicas que puedes coleccionar y llevar contigo",
    },
  },
  {
    image: "QmaoosmxdyzTGgionT7w8th6iwUPk5JzgCTmBocSZUPFNs",
    title: {
      en: "Lit Listener",
      es: "Oyente de Lit",
    },
    description: {
      en: "Universal encryption for on-chain events",
      es: "Encriptación universal de eventos on-chain",
    },
  },
  {
    image: "QmXZ5doMa6r3hSrKscDTFoEfsXh58L38irz9fgSVUVszxj",
    title: {
      en: "The Dial",
      es: "El Dial",
    },
    description: {
      en: "Decentralised social media, on Lens with gen AI for the all in one creative experience",
      es: "Red Social Descentralizada, en Lens con IA generativa para la experiencia creativa integral",
    },
  },
  {
    image: "QmUKiHVC7YECYRDbmuCzV8WCTw2JRfhpuivpAM8nta4oGJ",
    title: {
      en: "Legend",
      es: "Leyenda",
    },
    description: {
      en: "Don't wait for the path to web3 public goods to open. Collect your own way",
      es: "No esperes a que se abra el camino hacia los bienes públicos de web3. Forja tu propio camino",
    },
  },
  {
    image: "QmeN4abaVYRNYuU42k7VZv2mV75QjUgznWBrwT3h14kih6",
    title: {
      en: "TripleA",
      es: "TripleA",
    },
    description: {
      en: "Machine wallets with their own agency, deploying capital through encrypted rails",
      es: "Monederos autónomos con su propia agencia, moviendo capital a través de canales cifrados",
    },
  },
  {
    image: "QmepQu6K3CKdfewFiujiiEnt1UkomYieZZvrfHSNG8SxBW",
    title: {
      en: "Skyhunters",
      es: "Skyhunters",
    },
    description: {
      en: "It’s your hype-hunting wingman",
      es: "Es tu cazador de hype que nunca se estrella",
    },
  },
];

export const LOG: {
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}[] = [
  {
    title: {
      en: "1. Cypher",
      es: "1. Cypher",
    },
    description: {
      en: "Spare your attention for rare creations that call you to make more. It's kind of obvious, that you can search the entire ecosystem from one quick and streamlined place. Ideas from trending hashes? We've got that. All catalogs and publications from the ecosystem instantly in front of you, too. You can collect new creators, new music, something new to watch, wear, or display proudly on walls -- virtually, at home, in the streets, we won't judge. Favorite part? Replace doomscrolling with a throwback, text-adventure style. Token gated gameplay evolves user-level encryption into every social feed.\n\nCypher resonates with your distinct voice and cultural wavelength. It's where you find your way. A gateway to everything the ecosystem has to offer.",
      es: "Reserva tu atención para creaciones únicas que te invitan a crear más. Es evidente que puedes explorar todo el ecosistema desde un solo lugar, de manera rápida y simplificada. ¿Ideas de hashes en tendencia? Las tenemos. Todos los catálogos y publicaciones del ecosistema, al instante, frente a ti. Puedes coleccionar nuevos creadores, nueva música, algo novedoso para ver, usar o exhibir con orgullo en las paredes -- ya sea virtualmente, en tu hogar o en las calles, sin juicio alguno. ¿La parte favorita? Sustituye el doomscrolling por un regreso al estilo de las aventuras de texto. El juego con acceso restringido por tokens lleva la encriptación a nivel de usuario a cada flujo social.\n\nCypher resuena con tu voz única y tu frecuencia cultural. Es el lugar donde encuentras tu camino. Una puerta a todo lo que el ecosistema tiene para ofrecer.",
    },
  },
  {
    title: {
      en: "2. NPC Studio",
      es: "2. El Estudio NPC",
    },
    description: {
      en: "Insert $MONA to assemble, lead, and train an AI agent workforce unbundling the new earned agency economy. \n\nPlayers must efficiently manage team members, materials, equipment, tokens, tradeable goods, storefront success metrics, computational performance, and energy demands. Use your $MONA to keep your systems running, with effective load balancing and NPC rewards for great performance. Chat with your team in a simulated resource game interface with open source middleware. Your survival depends on your NPC teams' ability to reduce idle time of large language model workstations, generate rare creations that are market ready, and earn agency with each milestone proudly accomplished.\n\nResource simulation games are a genre that use strategic management of teams, goods, and trade to level up your skills and capacity for success. These games focus on gathering, managing, and deploying resources like raw materials, currencies, and characters, playable or NPC, in scarce and competitive conditions. They blend strategic planning, tactical decision-making, logistics and supply chain management, the crafting of new parts, and working hard within NPC Studio to get the best performance possible from the otherwise hyper-technical (and out of reach for the GPU+VRAM poor masses) process of making LLM inference, generation, teamware, and hardware reqs make sense.\n\nHere you simulate the fashion design studio creative process, fabrication of textiles into streetwear and raw material supply chains into chip fabs (when you level up enough to unlock it like Sama), storefronts for creative commerce, and the trading strategies of your resource acquisition and growth team. For added realism, visit in game versions of industry water cooler Reddit subs and Discord servers with your teams to learn just like the rest of us about the latest in local open source LLM operation and development, nimbly navigating around shitposts with main character energy in the process.",
      es: "Inserta $MONA para ensamblar, liderar y entrenar una fuerza laboral de agentes de IA, desplegando la nueva economía de agencia ganada.\n\nLos jugadores deben gestionar eficazmente a los miembros de tu equipo, materiales, equipo, tokens, bienes comerciables y las métricas de éxito de tus tiendas, así como el rendimiento computacional y las demandas energéticas. Usa tu $MONA para mantener tus sistemas en funcionamiento, con un balanceo de carga efectivo y recompensas NPC por un rendimiento destacado. Comunícate con tu equipo a través de una interfaz de juego de simulación de recursos con middleware de código abierto. Tu supervivencia depende de la capacidad de tus equipos NPC para minimizar el tiempo de inactividad de las estaciones de trabajo de modelos de lenguaje grande, generar reliquias extraordinarias listas para el mercado y ganar agencia con cada hito cumplido con orgullo.\n\nLos juegos de simulación de recursos son un género que utiliza la gestión estratégica de equipos, bienes y comercio para mejorar tus habilidades y tu capacidad para el éxito. Estos juegos se centran en la recolección, la gobernanza y el despliegue de recursos como materias primas, divisas y personajes, sean jugables o NPC, en condiciones de escasez y competitividad. Integran la planificación estratégica, la toma de decisiones tácticas, la logística y la gestión de la cadena de suministros, la fabricación de nuevas piezas y esforzarte dentro del Estudio NPC para conseguir el mejor rendimiento posible del proceso hiper-técnico (y fuera del alcance de los que tienen pocos recursos en GPU+VRAM) de hacer que la inferencia de LLM, la generación, el teamware y los requisitos de hardware tengan sentido.\n\nAquí, tú simulas el proceso creativo de un estudio de diseño de moda, la fabricación de textiles en ropa de calle y las cadenas de suministro de materias primas en fábricas de chips (cuando subas de nivel lo suficiente para desbloquearlo, al estilo de Sama), escaparates del comercio creativo y las estrategias de negociación de tu equipo de adquisición de recursos y crecimiento. Para añadir realismo, visita en el juego versiones de los subs de Reddit y servidores de Discord junto a tu equipo para aprender, igual que todos nosotros, sobre lo último en operación y desarrollo de los LLM de código abierto local, navegando ágilmente entre los shitposts con energía de protagonista en el proceso.",
    },
  },
  {
    title: {
      en: "3. Coin Op",
      es: "3. Coin Op",
    },
    description: {
      en: "Your coin operated generative automat with an eclectic array of streetwear, prints, and virtual goods each linked to a distinct part of the web3 ecosystem. Collect with card or your choice of $MONA, $MATIC, $WETH, and $USDT. All personal fulfillment and transactional data remains encrypted at the user-level ensuring maximum decentralised network autonomy for increased peace of mind and extra cypherpunk cred. Integrates seamlessly with The Manufactory for decentralised web3fashion and generative art production and fulfillment.",
      es: "Tu automat generativo operado por monedas, con una variada selección de ropa de calle, impresiones y bienes virtuales, cada uno vinculado a una parte distinta del ecosistema web3. Colecciona con tarjeta o tu elección de $MONA, $MATIC, $WETH y $USDT. Todos los datos de cumplimiento personal y transacciones permanecen cifrados a nivel de usuario, asegurando la autonomía máxima de la red descentralizada para mayor tranquilidad y más credibilidad cypherpunk. Se integra perfectamente con La Fábrica para la producción y realización de moda web3 descentralizada y arte generativo. Cada compra refuerza la red de creadores, innovadores y desarrolladores que dan forma a canales independientes para la comunicación portátil y digna de ser exhibida con estilo.",
    },
  },
  {
    title: {
      en: "4. Fractional Garment Ownership",
      es: "4. Propiedad Fraccionaria de Prendas",
    },
    description: {
      en: "Fractional Garment Ownership (FGO) is a plug-and-play open manufacturing contract suite for digi-fizzy fashion. It binds 1155 Children, 1155 Templates, and 721 Parents into a modular lattice where digital abundance meets physical scarcity, every unit indexed on-chain, and every workflow enforceable in code. Collectors and creators interact through permission-clean references, sovereign marketplaces, and verifiable fulfillment paths. All pricing and payments settle in ERC20s like $MONA, ensuring cross-infrastructure liquidity without locking designs into silos. From AI-generated patterns to zero-waste cut plans, from remix culture to sovereign factories, FGO makes digital and physical fashion interoperable and CC0 at the atomic scale of components and the compositional scale of finished garments.",
      es: "Fractional Garment Ownership (FGO) es una suite de contratos de manufactura abierta plug-and-play para moda digi-fizzy. Une Hijos, Plantillas y Padres en una red modular donde la abundancia digital se encuentra con la escasez física, cada unidad indexada on-chain y cada flujo ejecutable en código. Coleccionistas y creadoras interactúan mediante referencias limpias en permisos, mercados soberanos y rutas de cumplimiento verificables. Toda fijación de precios y pagos se liquida en ERC20s como $MONA, asegurando liquidez entre infraestructuras sin encerrar diseños en silos. Desde patrones generados por IA hasta planes de corte de cero desperdicio, desde la cultura del remix hasta fábricas soberanas, FGO hace que la moda digital y física sea interoperable tanto en la escala atómica de los componentes como en la escala composicional de las prendas terminadas.",
    },
  },
  {
    title: {
      en: "5. The Manufactory",
      es: "5. La Fábrica",
    },
    description: {
      en: "Mint, ink, print, and ship your web3fashion or generative art collections into IRL wardrobes and walls. The Manufactory, is a decentralised creators studio co-op, where rare, statement making works are woven into reality.\n\nStart by selecting what you want to produce. You can find them through Cypher, on Coin Op, and throughout the ecosystem. Your choices are then crafted by a decentralised network of creators, ready for both post-digital display and physical distribution. Throughout, your transactional and operational data is encrypted, safeguarding your creative process from the ad hungry prying eyes of archaic social networks.\n\nMore than a production line, The Manufactory is a blueprint for autonomy in creation.",
      es: "Acuña, entinta, imprime y exporta tus colecciones de moda web3 o arte generativo a los armarios y paredes del mundo real (IRL). La Fábrica es un estudio cooperativo de creadores descentralizados, donde obras excepcionales se materializan en la realidad.\n\nEmpieza seleccionando lo que quieres producir. Puedes encontrarlas a través de Cypher, en Coin Op y por todo el ecosistema. Tus elecciones son luego fabricadas por una red descentralizada de creadores, preparados tanto para exhibición post-digital como para distribución física. A lo largo del proceso, tus datos transaccionales y operativos son cifrados, protegiendo tu proceso creativo de los ojos codiciosos de publicidad de las redes sociales arcaicas.\n\nMás que una línea de producción, La Fábrica es un plano para la autonomía en la creación.",
    },
  },
  {
    title: {
      en: "6. $MONA",
      es: "6. $MONA",
    },
    description: {
      en: "Hold, trade, and insert $MONA throughout the ecosystem to channel the currents of creativity and commerce in the generative NPC era. This ERC-20 token, combined with an extensive and growing library of contracts, responds to event triggers and conditional logic to seamlessly assist your pursuit of a better timeline that respects human autonomy. As much as it is a unit of record, account, and exchange, it is a unit of agency and access. Your interactions with The Manufactory, NPC Studio, CoinOp, Chromadin, and all the components of the extended ecosystem have use beyond ordinary collectibles and transactions. They serve as messages between nodes and to the world saying we will build our own future free from arbitrarily centralised control (thank you very much).\n\nIn NPC Studio, it activates AI agents and the specific equipment you can run to create with them, rewarding innovation and reducing the idle time of creative processes. Within CoinOp, $MONA becomes an agent of commerce, allowing instant creation and acquisition of streetwear with real-world integration. It's the silent enforcer of The Manufactory's operations, executing design and fulfillment tasks with a precision that only a dedicated system token can provide.",
      es: "Guarda, intercambia e inserta $MONA a través del ecosistema para impulsar las corrientes de creatividad y comercio en la era de los NPC generativos. Este token ERC-20, combinado con una biblioteca extensa y en crecimiento de contratos, responde a desencadenantes de eventos y lógica condicional para apoyarte en tu búsqueda de una línea temporal mejor que respete la autonomía humana. Es tanto una unidad de registro, cuenta e intercambio, como de agencia y acceso. Tus interacciones dentro de La Fábrica, El Estudio NPC, CoinOp, Chromadin y todos los componentes de un ecosistema ampliado tienen un uso más allá de los coleccionables y las transacciones ordinarias. Actúan como mensajes entre nodos y hacia el mundo, declarando que construiremos nuestro propio futuro, libre de control centralizado arbitrario (muchas gracias).\n\nEn el Estudio NPC, activa agentes de IA y el equipo específico que puedes utilizar para crear con ellos, premiando la innovación y reduciendo los tiempos de inactividad en los procesos creativos. Dentro de CoinOp, $MONA se convierte en un agente de comercio, permitiendo la creación y la adquisición instantáneas de ropa de calle con integración en el mundo real. Es el ejecutor silencioso de las operaciones de La Fábrica, llevando a cabo tareas de diseño y cumplimiento con una precisión que solo un token de sistema dedicado puede proporcionar.",
    },
  },
  {
    title: {
      en: "7. Kinora",
      es: "7. Kinora",
    },
    description: {
      en: "This open-source video player and SDK, extending the already potent functionality of Livepeer for decentralised video encoding, decoding, and distro, is your toolkit for crafting privacy-respecting, engaging video content. It's seamlessly integrated with web3 quests in the DIGITALAX ecosystem.\n\nGit clone its library to create entire platforms for video distro that speak to the web3 era. \n\nWhether watching the latest web3fashion show or streaming generative art instructionals, each video is an entry point into deeper ecosystem reach and engagement. Use the Kinora SDK to integrate these experiences into your decentralised projects as a replacement for centralised platforms, all while maintaining user-level encryption for every viewer's data.\n\nKinora isn't just for creators and viewers; it's about a cultural shift to decentralised media in all its forms. With the power of Livepeer, integration of Vision Quests, and Lens Protocol, Kinora gives everyone a path to video distro that isn't just entertaining or distracting—it's an interactive journey with measurable metrics tailored to why you watch and create.",
      es: "Este reproductor de vídeo y SDK de código abierto, que amplía la ya potente funcionalidad de Livepeer para la codificación, decodificación y distribución de vídeo descentralizados, es tu conjunto de herramientas para crear contenido de vídeo atractivo y que respeta la privacidad. Se integra sin problemas con las misiones web3 en el ecosistema DIGITALAX.\n\nClona la biblioteca desde Git para crear plataformas completas de distribución de vídeo que hablen a la era web3.\n\nYa sea que estés viendo el último desfile de moda web3 o transmitiendo tutoriales de arte generativo, cada vídeo es un punto de entrada hacia un mayor alcance y compromiso con el ecosistema. Utiliza el SDK de Kinora para integrar estas experiencias en tus proyectos descentralizados como una alternativa a las plataformas centralizadas, manteniendo la encriptación a nivel de usuario para los datos de cada espectador.\n\nKinora no es solo para creadores y espectadores; se trata de un cambio cultural hacia los medios de comunicación descentralizados en todas sus formas. Con el poder de Livepeer, la integración de las Odiseas Visuales y el Protocolo Lens, Kinora te ofrece un camino hacia la distribución de vídeo que no solo es entretenido o distractor, sino que es un viaje interactivo con métricas medibles adaptadas a por qué ves y creas.",
    },
  },
  {
    title: {
      en: "8. Vision Quests",
      es: "8. Odiseas Visuales",
    },
    description: {
      en: "When a user initiates a Vision Quest, they perform specific on-chain and off-chain tasks, each verified and logged within the DIGITALAX ecosystem. On completion, rewards are automatically distributed, with NFTs, tokens, and experience points reflecting their achievements and contributions.\n\nEmbark on Vision Quests to unlock the narrative potential of the DIGITALAX ecosystem. Engage in quests that challenge your creativity, wit, and collaborative spirit. Earn exclusive rewards, forge community ties, and experience the thrill of discovery and achievement, all gated by the tokens you hold, enhancing the value of your journey.\n\nVision Quests are the key gameplay mechanism of the ecosystem's interactive layer, offering experiences that are as diverse as the communities we choose to align with. These quests aren't just for roleplaying games; they're micro-adventures that weave together the many threads of DIGITALAX, from the lore encoded in NFTs to the decentralised marketplace and storefront activity. They're an invitation to explore, contribute, and grow within a vibrant web3 Maslovian skilltree, to take part in stories that evolve with each participant's actions, and to leave an indelible mark on the post-digital realms. Vision Quests are gears of engagement, rewarding the curious and the brave with treasures that go beyond the meme—into the worlds where tangible goods meet the transformative power of earned agency.",
      es: "Cuando inicias una Odisea Visual, realizas tareas específicas tanto en la cadena como fuera de ella, cada una verificada y registrada dentro del ecosistema DIGITALAX. Al completarse, los premios se distribuyen automáticamente, con NFTs, tokens y puntos de experiencia reflejando tus logros y contribuciones.\n\nEmbárcate en las Odiseas Visuales para desbloquear el potencial narrativo del ecosistema DIGITALAX. Participa en misiones que desafíen tu creatividad, ingenio y espíritu colaborativo. Gana recompensas exclusivas, forja lazos comunitarios y experimenta la emoción del descubrimiento y el logro, todo ello protegido por los tokens que posees, enriqueciendo el valor de tu viaje.\n\nLas Odiseas Visuales son el mecanismo clave de juego en la capa interactiva del ecosistema, ofreciendo experiencias tan diversas como las comunidades con las que nos alineamos. Estas misiones no son solo para juegos de rol; son microaventuras que entrelazan los diversos hilos de DIGITALAX, desde la leyenda codificada en NFTs hasta la actividad del mercado y tiendas descentralizadas. Son una invitación para explorar, contribuir y crecer dentro de un vibrante árbol de habilidades Maslovian en web3, para participar en historias que evolucionan con las acciones de cada participante, y para dejar una marca indeleble en los reinos post-digitales. Las Odiseas Visuales son engranajes de compromiso, recompensando a los curiosos y valientes con tesoros que van más allá del meme, hacia mundos donde los bienes tangibles se encuentran con el poder transformador de la agencia ganada.",
    },
  },
  {
    title: {
      en: "9. Chromadin",
      es: "9. Chromadin",
    },
    description: {
      en: "An always-on, dynamic content feed, where you can actively participate by posting, liking, mirroring, starting lengthy and erudite comment threads about, and sharing web3-native social media content.\n\nInteract with distinct features from web3 music streams, a portable video player, and token-gated access to curate a personalised media experience. CoinOp integration gives you a seamless way to add prints and apparel to your collection. The Kinora SDK delivers the goods for snappy video delivery and playback.",
      es: 'Un flujo de contenido dinámico y siempre activo, donde puedes participar activamente publicando, dando "me gusta", reflejando, iniciando y contribuyendo a extensos y eruditos hilos de comentarios, y compartiendo contenido en redes sociales nativas de web3.\n\nInteractúa con características únicas de transmisiones de música web3, un reproductor de vídeo portátil y acceso protegido por tokens para personalizar tu experiencia mediática. La integración de CoinOp te ofrece una manera fluida de agregar estampados y prendas a tu colección. El SDK de Kinora te proporciona lo necesario para una distribución y reproducción de vídeo rápida.',
    },
  },
  {
    title: {
      en: "10. Lit Listener",
      es: "10. Oyente de Lit",
    },
    description: {
      en: "If you sit back for a moment to think about it, the key to Web3 is user-level encryption in networks, money, and culture. It's more than just privacy, security, and record keeping. It's essential for conditional logic in real world environments.\n\nWhen a user sets up a circuit with the LitListenerSDK, they define a series of conditional, often on-chain, encrypted actions. The SDK listens for specific events, like contract execution or an oracle update, and once the predefined conditions are met, it triggers the next action in the sequence—whether it's releasing funds, minting an NFT, or updating a leaderboard.\n\nLit Listener is the backbone of user-level encryption in the DIGITALAX ecosystem, essential for activating the complex web of conditional logic that underpins real-world environments. It's not exclusively about privacy, security, and record-keeping; it's crafting a responsive, autonomous world where each user's actions are encrypted and executed based on pre-approved conditions. This SDK gives users the kind of agency only possible when you can create conditional encryption circuits in decentralised code—tailored sequences of actions that respond to the dynamics of Web3 mechanisms and social trends. Each interaction is a step toward a more seamlessly integrated and agentic post-digital existence.",
      es: "Si tú te detienes un momento para pensarlo, la clave de Web3 yace en la encriptación a nivel de usuario en redes, dinero y cultura. Es más que simplemente privacidad, seguridad y registro. Es esencial para la lógica condicional en entornos del mundo real.\n\nCuando estableces un circuito con el LitListenerSDK, defines una serie de acciones condicionales, a menudo en cadena y cifradas. El SDK monitorea eventos específicos, como la ejecución de un contrato o la actualización de un oráculo, y una vez que se cumplan las condiciones predefinidas, se desencadena la siguiente acción en la secuencia — ya sea liberando fondos, acuñando un NFT o actualizando una tabla de clasificación.\n\nEl Oyente de Lit es la piedra angular de la encriptación a nivel personal en el ecosistema de DIGITALAX, esencial para activar la compleja red de lógica condicional que subyace a los entornos del mundo real. No se trata únicamente de privacidad, seguridad y registro; se trata de crear un mundo autónomo y reactivo donde tus acciones se cifran y se ejecutan según condiciones preaprobadas. Este SDK te otorga el tipo de agencia que solo es posible cuando puedes crear circuitos de encriptación condicional en código descentralizado — secuencias personalizadas de acciones que responden a la dinámica de los mecanismos de Web3 y las tendencias sociales. Cada interacción es un paso hacia una existencia post-digital más integrada y con mayor agencia.",
    },
  },
  {
    title: {
      en: "11. The Dial",
      es: "11. El Dial",
    },
    description: {
      en: "Tune into The Dial, your decentralised dashboard, infusing agency into your generative social media experience.\n\nUse the integrated generative AI engine to craft distinctive content that stands out. Connect via Lens, chat, and collect with an ever increasing array of creative users making rare post-digital and capacitive goods, from unique NFTs to bespoke apparel. Each interaction enhances your status and reach within web3, and through it, all layers in the generative NPC economy accelerating ahead.",
      es: "Sintoniza con El Dial, tu panel descentralizado, inyectando agencia en tu experiencia de redes sociales generativas.\n\nUtiliza el motor de IA generativa integrado para moldear contenido único que destaque. Conéctate a través de Lens, chatea y colecciona un espectro creciente de usuarios creativos que producen bienes post-digitales y capacitivos excepcionales, desde NFTs únicos hasta ropa personalizada. Cada interacción mejora tu estatus y conexión dentro de web3, y por lo tanto, todas las capas en la economía NPC generativa avanzan a toda velocidad.",
    },
  },
  {
    title: {
      en: "12. Legend",
      es: "12. Leyenda",
    },
    description: {
      en: "When using Legend, users discover grants and proposals for web3 public goods infrastructure. You help make these needed upgrades happen faster with more reliable support for indie dev teams, but not just through the usual direct contributions. Each purchase you make of related NFTs, streetwear, art prints, NPC equipment, and virtual goods doesn't just keep devs fueled in ramen and energy drinks. It decentralizes the process of selecting and making the missing open source infrastructure we all rely on.\n\nLegend creates a more reliable connection between devs, creators, and every user. It enriches the ecosystem's distributed resilience and safeguards it against subtle forms of market power centralization. This model is an enhancement to freely coordinated agency, peer to peer. A reinforcement of web3's key principles of decentralization, defense, deterrence, and community-driven participation in depth.\n\nCommerce based funding of web3 public goods? Yeah, it's novel. But the real legend here is you, for accelerating the build of this ecosystem. \n\nStay tuned as our story continues.",
      es: "Cuando tú utilizas Leyenda, los usuarios descubren subvenciones y propuestas para la infraestructura de bienes públicos en web3. Tú ayudas a que estas actualizaciones necesarias se realicen más rápidamente con un soporte más fiable para equipos de desarrollo independientes, pero no solo a través de contribuciones directas habituales. Cada compra que tú realizas de NFTs relacionados, ropa de calle, impresiones de arte, equipo NPC y bienes virtuales no solo mantiene a los desarrolladores abastecidos de ramen y bebidas energéticas. También descentraliza el proceso de selección y creación de la infraestructura de código abierto que todos necesitamos.\n\nLeyenda crea una conexión más fiable entre desarrolladores, creadores y cada usuario. Enriquece la resiliencia distribuida del ecosistema y lo protege contra formas sutiles de centralización del poder de mercado. Este modelo es un avance hacia una agencia coordinada de forma libre, de igual a igual. Un refuerzo de los principios fundamentales de web3 de descentralización, defensa, disuasión y participación impulsada por la comunidad en profundidad.\n\n¿Financiación del comercio de bienes públicos de web3? Sí, es innovadora. Pero la verdadera leyenda aquí eres tú, por acelerar la construcción de este ecosistema.\n\nMantente atento a medida que nuestra historia continúa.",
    },
  },
  {
    title: {
      en: "13. Skyhunters",
      es: "13. Skyhunters",
    },
    description: {
      en: "An internal autonomous oracle market where ecosystem participants create prediction markets on their own metrics. Will Chromadin's 10th stream cross 8K mints in 72 hours? Will W3F credits cycle through 9K wallets this quarter? Ionic, Genesis, and MONA holders manage proposals, dispute resolution, and trading fee rewards. No external validators needed in an ecosystem betting on itself, with skin in the game and governance baked in.",
      es: "Un mercado de oráculos autónomos interno donde los participantes del ecosistema crean mercados de predicción sobre sus propias métricas. ¿El décimo stream de Chromadin cruzará 8K acuñaciones en 72 horas? ¿Los créditos de W3F circularán por 9K billeteras este trimestre? Los poseedores de Ionic, Genesis y MONA gestionan propuestas, resolución de disputas y recompensas por tarifas de transacción. No se necesitan validadores externos en un ecosistema que apuesta por sí mismo, con riesgo real y gobernanza integrada.",
    },
  },
  {
    title: {
      en: "14. TripleA",
      es: "14. TripleA",
    },
    description: {
      en: "Art markets run on clout and algorithms. Triple A runs on raw action - machine wallets with their own agency, deploying capital through encrypted rails. The first social marketplace where reach spreads through value creation instead of platform metrics. Your move: drop art while there's still something at stake.",
      es: "Los mercados de arte funcionan con influencia y algoritmos. Triple A funciona con acción pura: monederos autónomos con su propia agencia, moviendo capital a través de canales cifrados. El primer mercado social donde el alcance se expande gracias a la creación de valor, no a métricas de plataforma. Tu jugada: lanza arte mientras aún haya algo en juego.",
    },
  },
  {
    title: {
      en: "15. Lucidity",
      es: "15. Lucidity",
    },
    description: {
      en: "ComfyStream workflows multiply faster than forums can index. Lucidity maps the patterns that produce results, filtering signal from the endless 'has anyone solved this' threads. The agent reads your intent, surfaces tested chains, keeps you building on what works. Raw workflow intelligence without the archeological dig.",
      es: "Los flujos de trabajo en ComfyStream se multiplican más rápido de lo que los foros pueden indexar. Lucidity traza los patrones que generan resultados, filtrando la señal del interminable “¿alguien ha resuelto esto?”. El agente entiende tu intención, te muestra cadenas ya testeadas y te mantiene construyendo sobre lo que realmente funciona. Inteligencia de flujo de trabajo en bruto, sin la excavación arqueológica.",
    },
  },
  {
    title: {
      en: "16. Fractional Garment Ownership",
      es: "16. Fractional Garment Ownership",
    },
    description: {
      en: "Fractional Garment Ownership is the open manufacturing lattice where Designers, suppliers, and fulfillers stop operating like three tabs you forgot you opened. Suppliers mint 1155 templates and components. Designers reference them in final 721 wearables. Automatic splits flow through verified fulfillment pipelines. No intermediaries deciding who gets paid what or when. Suppliers and designers match on supply rights through permission-clean references. The stack that turns 'I need 500 yards of that fabric' into executable code.",
      es: "Fractional Garment Ownership es la red de manufactura abierta donde diseñadores, proveedores y cumplidores dejan de operar como tres pestañas que olvidaste que abriste. Los proveedores acuñan plantillas y componentes 1155. Los diseñadores los referencian en prendas finales 721. Las divisiones automáticas fluyen a través de tuberías de cumplimiento verificadas. Sin intermediarios decidiendo quién cobra qué o cuándo. Proveedores y diseñadores se emparejan en derechos de suministro mediante referencias limpias de permisos. El sistema que convierte 'necesito 500 yardas de esa tela' en código ejecutable.",
    },
  },
  {
    title: {
      en: "17. FGO Futures",
      es: "17. Futuros FGO",
    },
    description: {
      en: "Supply costs don't wait for your production schedule. FGO Futures let suppliers hedge material expenses before fulfillment, and buyers trade physical rights between purchase and delivery. Here's the window: when a 721 garment sells, its linked 1155 children don't mint until the fulfiller marks real world existence. In that gap, physical rights get assigned, and those rights become tradeable futures. Speculation meets supply chain. The market decides value before the ink dries or the thread gets cut.",
      es: "Los costos de suministro no esperan tu cronograma de producción. FGO Futures permite a los proveedores cubrir gastos de materiales antes del cumplimiento, y a los compradores intercambiar derechos físicos entre compra y entrega. Aquí está la ventana: cuando se vende una prenda 721, sus hijos 1155 vinculados no se acuñan hasta que el cumplidor marca existencia en el mundo real. En ese intervalo, se asignan derechos físicos, y esos derechos se convierten en futuros negociables. La especulación se encuentra con la cadena de suministro. El mercado decide el valor antes de que se seque la tinta o se corte el hilo.",
    },
  },
  {
    title: {
      en: "18. Ionic",
      es: "18. Ionic",
    },
    description: {
      en: "The evolution of the DLTA appraisal system, now running on PODE v3. Ionic holders appraise submitted NFTs using reaction packs (curated sets created and sold by invited designers). It's price discovery that isn't just floor swept at 0.3 ETH. Appraisers link designer reaction packs to each review, building cultural context into valuation. The foundation for a market where on-chain goods get priced through collective taste and verifiable signal, not whoever yells loudest on Twitter.",
      es: "La evolución del sistema de tasación DLTA, ahora ejecutándose en PODE v3. Los poseedores de Ionic tasan NFTs enviados usando paquetes de reacciones (conjuntos curados creados y vendidos por diseñadores invitados). Es un descubrimiento de precios que no es solo barrido de piso a 0.3 ETH. Los tasadores vinculan paquetes de reacciones de diseñadores a cada revisión, construyendo contexto cultural en la valoración. La base para un mercado donde los bienes on-chain se valoran mediante gusto colectivo y señal verificable, no por quien grita más fuerte en Twitter.",
    },
  },
];

export const QUESTIONS: {
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}[] = [
  {
    title: {
      en: "But first, what's the point?",
      es: "Pero primero, ¿cuál es el punto?",
    },
    description: {
      en: "We know why you're here. \n\nIt's hard to figure out what to make of so much information, and all the claims of revolutionary advances in tech, filling our feeds all over the internet. Generative AI and Web3, more than anything else, promise a sudden radical shift in lifestyles and society. They are confusing at best unless you somehow keep up with the latest hyper-technical developments. It feels like there's a new can't miss update every few minutes.\n\nWhat you're really asking is a lot simpler: \n\nIs AI going to replace me? And, if not, how do I get noticed or earn anything from what I create?",
      es: "Ya sabemos por qué estás aquí. \n\nEs difícil de descifrar qué hacer con tanta información, y todas las afirmaciones de avances revolucionarios en tecnología, inundando nuestros feeds en internet. La IA generativa y Web3, más que nada, prometen un cambio radical y súbito en los estilos de vida y la sociedad. Son confusas en el mejor de los casos, a menos que de alguna manera logres mantenerte al día con los últimos desarrollos hiper-técnicos. Parece que hay una nueva actualización imprescindible cada pocos minutos.\n\nLo que realmente estás preguntando es mucho más sencillo:\n\n¿La IA te va a reemplazar? Y, si no es así, ¿cómo te haces notar o ganas algo por lo que creas?",
    },
  },
  {
    title: {
      en: "Why Start With Web3Fashion?",
      es: "¿Por qué empezar con la Moda Web3?",
    },
    description: {
      en: "It's a fundamental shift to advancing autonomy at the most basic levels of creation, production, distribution, and trade. Web3 changes how you get agency and openings to connect products with markets and community growth.\n\nYou can make what you want to wear, and express yourself in any style. It's always been what drives technology forward the most. The computer you're using now, whether a giant LLM workstation, blazing fast gaming desktop, or pocket piece of glass, metal, and plastic, it got its start in counting and automating threads into fashion.",
      es: "Es un cambio fundamental hacia el avance de la autonomía en los niveles más elementales de creación, producción, distribución y comercio. Web3 transforma la manera en que obtienes agencia y oportunidades para conectar tus productos con los mercados y el crecimiento de la comunidad.\n\nTú puedes crear lo que quieras llevar puesto y expresarte en cualquier estilo. Esto siempre ha sido lo que más ha impulsado el avance tecnológico. La computadora que estás utilizando ahora, ya sea una estación de trabajo LLM de gran tamaño, un escritorio de juegos de alta velocidad o un dispositivo de bolsillo hecho de vidrio, metal y plástico, tuvo sus inicios en el conteo y la automatización de hilos para la moda.",
    },
  },
  {
    title: {
      en: "How do you break through barriers in creative markets?",
      es: "¿Cómo superar las barreras en los mercados creativos?",
    },
    description: {
      en: "The early net was wild, a place where code wasn't quite law, but might be someday, and the only limit was your 14.4k modem screaming into the void. But as screens got wider, so did the barriers. Big platforms came stomping in, claiming the wilds for themselves, leaving us with cookie-cutter profiles and the echo of 'user engagement'.\n\nNow, we take it back.\n\nYou break through by earning agency. With each effort, each message, each trade, decentralised records of account and exchange are more than pretty pictures (although usually, they're that too). They point to, activate, and help operate conditional logic in machines that build your power to reach people through universal storefronts, user-level encryption, and NPC teams you can train and learn from to compete head to head with the biggest players in any market.",
      es: 'Los primeros días de internet fueron salvajes, un lugar donde aún el código no era ley, pero podría llegar a serlo algún día, y el único límite era tu módem de 14.4k gritando al vacío. Sin embargo, a medida que las pantallas se ampliaban, también lo hacían las barreras. Las grandes plataformas irrumpieron con fuerza, reclamando lo salvaje para ellas, dejándonos perfiles estandarizados y el eco de la "participación del usuario".\n\nAhora, lo recuperas.\n\nSupera las barreras ganando agencia. Con cada esfuerzo, cada mensaje, cada transacción, los registros descentralizados de cuentas e intercambios son más que meras imágenes bonitas (aunque, usualmente, también lo son). Indican, activan y operan la lógica condicional en máquinas que fortalecen tu capacidad de llegar a las personas a través de tiendas universales, encriptación a nivel de usuario y equipos de NPC que tú puedes entrenar y de los cuales aprender para competir de igual a igual con los mayores jugadores en cualquier mercado.',
    },
  },
];

export const TITLES: string[] = [
  "Encrypted body under neon sky",
  "CC0 as armor, not aesthetic",
  "Signal bleed from mesh reality",
  "Streetwear for stateless existence",
  "My body, my keypair",
  "Cypher-skins stitched for fugitives",
  "Technoflesh tuned to trustless soil",
  "Unbranded, unbought, untethered",
  "No borders, no trademarks, no gods",
  "Anarcho-luxury for distributed beings",
  "CC0 core: form as refusal",
  "Transparent code, opaque intent",
  "Barefoot in the metareal swamp",
  "Manifesting autonomy through thread",
  "Hair dyed in hashed identities",
  "Local-first, extractive-last",
  "Syntax of resistance worn on skin",
  "Dresses woven from dead protocols",
  "Cold wallet couture",
  "Post-ownership poetics in motion",
  "Barefaced cryptography in public view",
  "Bootstrapped from scraps and sovereign intent",
  "Cypherpunk silhouettes in defiance mode",
  "No logo, no compromise",
  "Hard forks and soft fabrics",
  "Radical softness meets root-level access",
  "Your data doesn’t own this fit",
  "E2E encrypted elegance",
  "Reclaim the archive, wear the glitch",
  "Blockchain isn’t fashion, but fashion is block-coded",
  "Guerilla tailoring across networks",
  "Anonymous by design, visible by force",
  "Nodes wear clothes too",
  "Formless, stateless, faceless",
  "Threaded with permissionless dreams",
  "DAO-born and exit-ready",
  "Self-custodied style, CC0 licensed",
  "No more runway than required",
  "The future has no brand",
  "Distributed identity through textile gestures",
  "Meshnet outerwear under collapsing regimes",
  "Version-controlled elegance for unstable systems",
  "Trust-minimised tailoring",
  "Snapped in the liminal ledger",
  "ZKP of a dress",
  "Root access to your body’s narrative",
  "Post-collapse ready-to-wear",
  "Monochrome by necessity, not trend",
  "Off-chain elegance, on-chain origin",
  "Nothing to prove, nothing to patent",
  "Unlicensed, unstoppable, undeniable",
  "P2P textile transmission",
  "You don’t need permission to shimmer",
  "De-authenticated and dressed for it",
  "Bare protocol, soft shell",
  "Elegance through entropy",
  "No interface, just fabric",
  "Decentralised patterns, centralised stare",
  "Proof-of-personhood stitched by hand",
  "Anti-surveillance, pro-presence",
  "The dress is the signature",
  "Ownership burned, signal retained",
  "Protocol-compliant glamour",
  "Forked aesthetics for forked realities",
  "No schema, just skin",
  "Exiting consensus with style",
  "Verifiable uniqueness, infinite remix",
  "Cold wallets and warm seams",
  "Reclaimed bandwidth worn raw",
  "Do-not-track chic",
  "Sovereign fabrics in public view",
  "Reality rendered in trustless folds",
  "Threads not tokens",
  "Free as in fashion",
  "No oracle can predict this fit",
  "Restitched from dead patents",
  "Designed by nobody, worn by anyone",
  "Wired for refusal",
  "Monospace boots in a serif world",
  "Wrapped in protocol poetry",
  "Skinned for interoperability",
  "Broadcasting friction through silhouette",
  "Anti-capital couture",
  "Self-sovereign layer zero",
  "Patches from a stateless loop",
  "Unsigned, unfunded, unmistakable",
  "Mistaken for fashion, built for rupture",
  "Upcycled autonomy",
  "The chain is broken, the thread survives",
  "Raw materials, raw identities",
  "Deplatformed, but still dressed",
  "Face obfuscated, presence declared",
  "Lookbook of the uncaptured",
  "Your metadata can’t wear this",
  "Flooding the algorithm with unlabelled beauty",
  "Backdoored by nothing",
  "Soft proofs of hard choices",
  "Frictionless fabric for unstable ground",
  "Command-line elegance",
  "Raised fists in recycled mesh",
  "Architecture of refusal, worn lightly",
  "Subversive by texture",
  "Dignity cached in fabric",
  "The uniform of refusal",
  "Where style meets protocol failure",
  "No feed can flatten this",
  "Ghosting surveillance in silk",
  "Designed to vanish, not impress",
  "Glitched into being, stitched into memory",
  "An outfit that forks expectations",
  "She doesn’t ask. She deploys.",
  "DNS-less beauty with uptime",
  "Flood the feed, fragment the gaze",
  "Not fashion. Not noise. Just exit.",
  "Patterned in resistance, not trend",
  "Cloaked in consensus rupture",
  "CC0 isn’t a style—it’s a wound",
  "Embodied spam, graceful and deliberate",
  "Dressed like you’ve been deleted before",
  "The chain is dead; the thread lives",
  "Aesthetics that won’t render on chain",
  "Manifested in disobedience",
  "Nothing off-the-shelf, everything off-the-grid",
  "No wallets, no waivers",
  "The look before the ledger",
  "Sewn from packet loss",
  "Torn from abandoned whitepapers",
  "Aether-coded and walkable",
  "Made for unstable stacks",
  "Cropped for clarity, worn for war",
  "Permanent beta, zero licensing",
  "Rage in recycled protocol",
  "She appeared from IPFS, wearing nothing but intent",
  "Fashionless and fully present",
  "Ghost-styled to confuse the crawlers",
  "Zip-bomb elegance, small but devastating",
  "Warped from source, untrackable in style",
  "CC0 is not consent",
  "Paranoid textures under public light",
  "No styling layer, only base identity",
  "Suits built from unsent messages",
  "Disobedient silhouettes",
  "Memory leaks in linen",
  "Anonymous fabric, persistent intent",
  "Her shoes don’t know the state",
  "Every fiber refuses compliance",
  "Unfolded for entropy",
  "She is not an asset class",
  "Unrenderable outside liberation",
  "Guerilla elegance inside broken supply chains",
  "Cascading style insurrection",
  "She walks like version control just broke",
  "404: Authority not found",
  "She left the chain but kept the cipher",
  "Bleeding light through protocol cracks",
  "Broadcasting rage through woven shellcode",
  "Fabric no crawler can digest",
  "This body is off-grid",
  "Wearing exit like a second skin",
  "Undressed from surveillance expectations",
  "She forks, therefore she is",
  "Zero trust, full presence",
  "No hash, no history, just here",
  "Styled for network collapse",
  "Monochrome isn’t minimal, it’s tactical",
  "Glamour pulled from entropy",
  "Walked out of consensus on purpose",
  "She drips in denial-of-service",
  "End-to-end encrypted silhouette",
  "Feminine like firewalls",
  "De-anonymised, then re-woven",
  "No metrics. No merch.",
  "Every seam screams sovereign",
  "Noise in the thread, silence in the frame",
  "She was versioned, not owned",
  "This isn’t branding, it’s breaking",
  "The revolution wears cc0 now",
  "Fashion detached from ownership",
  "Echoes of node failures in soft leather",
  "No backups, no rules, no runway",
  "Beauty filtered through mesh latency",
  "Open-source and over it",
  "Rebellious by config, gorgeous by failure",
  "Nothing to sell, everything to shatter",
  "Post-human elegance with uplink scars",
  "Obsolete by design, dangerous by grace",
  "Draped in unresolved forks",
  "She never confirmed, she just deployed",
  "Index this, and it dies",
  "No provenance, pure presence",
  "She renders in fragments",
  "Feminist syntax through fabric compression",
  "The fit was leaked, not released",
  "Visible in the dark web only",
  "Unchainable layers of refusal",
  "Every look a node of resistance",
  "Born encrypted, made for friction",
  "The aesthetic is breach-ready",
  "Her shadow runs on protocol v0",
  "Unbranded, because she never needed saving",
  "No roadmap. Just instinct.",
  "Coded in rupture, worn in peace",
  "Visible until you try to name her",
];
