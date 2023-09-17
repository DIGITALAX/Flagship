import { useState } from "react";
import shuffle from "shuffle-array";
import { useTvResults } from "../../../../types/general.types";

const useTV = (): useTvResults => {
  const [newImages, setNewImages] = useState<string[]>([
    "QmPo8k7if9Hb1BNb2uonmBMqaVouBzdYstuV57ViQTU41K",
    "QmNiZzKwRmMuTEty8ai9J4cQdxVEfvSun6aUb7Lq4RAZTv",
    "QmPSuDp9VPX6F6h849wRECQMcVPtQprbEc4pRicoN9Juts",
    "QmUUNyK8XkWQVTRJQCWbCTyQzTBQgtj4GNJN5ohZgpKZiM",
  ]);
  const images: string[] = [
    "QmaDBD493NgWyYqSjN1xsuSgAsxpjJBrKo4fXxPw6szMVF",
    "QmS1bVB7eqEjMvhbE2Q6KH4TbSQog3AZrbnCSoiUd17t8r",
    "QmNiZzKwRmMuTEty8ai9J4cQdxVEfvSun6aUb7Lq4RAZTv",
    "QmPSuDp9VPX6F6h849wRECQMcVPtQprbEc4pRicoN9Juts",
    "QmUUNyK8XkWQVTRJQCWbCTyQzTBQgtj4GNJN5ohZgpKZiM",
    "QmNRAEVYJu8gYCJLfNtMHA7XCnoZ4eZ4oyWtyXtGNLnXQy",
    "QmT3Q6r6pNogpHSMyw8qA8hEm68hjihN7ACG4Qrkdvwftr",
    "QmXYd5LgJUCfpogprcvHnb4VKYDK2zzZoiyEqiZiuELKWx",
    "QmS1bVB7eqEjMvhbE2Q6KH4TbSQog3AZrbnCSoiUd17t8r",
    "QmfJ7qQrXjfowMZgURcUevKAFvRRRdXN4mrNdH1TctL4G6",
    "QmTk2wub1s9bjAiQVBwQQVWtbDUiijtybziPte3tJZjHUE",
    "QmWyPoN1cs4YsZ5xAJ3o7gNCvoJdQLcYzBjQrcKUb5n5wi",
    "Qmct9CwGgDCkAcfCd6zYdZ5oSsxUVymnBedP5XsWPSYbiV",
    "QmYDHVdKUsstM4S8jsMpoymUprYf8FGwNV5bhrgSLF21XH",
    "QmcSZdN55K4wAGP5xNa4cGCxMibLbrHCvJHAuxMVRhdrB5",
    "QmeYik5MoDByxptc3mYjHBVJERT9ibu4oYRqhrLAwq8n85",
    "QmbwcWJawgCyzsdMdD5a57iKA5ay52mnChpoWpexcUq6cj",
    "QmTSmvWanCoVuy482ZnXGz9GK4Qpn2c3d9yxLJahRMxEcf",
    "QmRBvwg9wR8qDXsypCkYfogJpQhLnp53HJmTGBnz278tcA",
    "QmYin5ZnCT5jUCptWvrx5ZvPr2NKb3ExUQ7psMEkjiB5hY",
    "QmUaz4R5Tif6QfRsnRQYYkt6rwd2B2n5SwhoeUmfAQH7yM",
    "QmaVirpj2kd2EcpcjWcGeJBkmeaocjubSnbRwUqGpPeKKY",
    "QmQc2Xn7nGu6DRier4K8vaWbTZEvdxRtSa6GzjSLU4PFUi",
    "QmSgfJesbjiTzSfemnPsZ1dvCEWVaKjkFopxjfswrmSWPu",
    "QmZztZSWxvzxx8R4E37hVobZR1gAQu9QouEbvD6DaNdLht",
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
    "QmRRw7N5G34aFChYabqSZagVCR6Z2pqKUjxoiHyqn63Xyx",
    "QmVgVqNS4pJ6Cy678wu9FMrUNY9FX27NghXdshuRrqv2PU",
    "QmZaouDaBDY2puZ6yT8NRQLWXpuWDSySNiSitqmmNfCCk1",
  ];

  const refreshImages = (): void => {
    let newImages: string[] = [];
    shuffle<string>(images);
    for (let i = 0; i < 4; i++) {
      newImages.push(images[i]);
    }
    setNewImages(newImages);
  };

  return { refreshImages, newImages };
};

export default useTV;
