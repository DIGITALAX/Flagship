const DOMAIN_WITH_PATH_REGEX =
  /^(?:[a-z0-9-]+\.)+[a-z]{2,}(?::\d+)?(?:[/?#].*)?$/i;

const splitTokenEdges = (token: string) => {
  const prefix = token.match(/^[([{<"'`]+/)?.[0] ?? "";
  const suffix = token.match(/[)\]}>.,!?;:'"`]+$/)?.[0] ?? "";
  const core = token.slice(prefix.length, token.length - suffix.length);

  return { prefix, core, suffix };
};

const normalizeExternalUrl = (token: string): string | null => {
  if (!token) return null;

  let candidate = token.trim();

  // Fix malformed protocol like "https:/example.com".
  candidate = candidate.replace(/^https?:\/(?!\/)/i, (protocol) => `${protocol}/`);

  if (/^www\./i.test(candidate)) {
    candidate = `https://${candidate}`;
  } else if (!/^https?:\/\//i.test(candidate)) {
    if (!DOMAIN_WITH_PATH_REGEX.test(candidate)) {
      return null;
    }
    candidate = `https://${candidate}`;
  }

  try {
    const parsed = new URL(candidate);
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
};

const descriptionRegex = (description: string, colorChange: boolean) => {
  if (description.trim() == "" || !description) return "";

  const specialPhrase =
    "... This post is encrypted. Do you hold the keys to unlock its' secrets?";
  const replacedDescription = description?.replace(/\n\n/g, "\n \n");
  const lines = replacedDescription?.split(/[\r\n]+/);

  const styledLines = lines?.map((line: string) => {
    if (line.includes(specialPhrase)) {
      const parts = line.split(specialPhrase);
      const styledSpecialPhrase =
        parts[0] +
        specialPhrase
          .split(" ")
          .map((word) => `<span style="color: #FF0000;">${word}</span>`)
          .join(" ") +
        parts[1];
      return `<span>${styledSpecialPhrase}</span>`;
    } else {
      const words = line.split(/(?=[@#])|\s+/);
      const styledWords = words.map((word) => {
        const { prefix, core, suffix } = splitTokenEdges(word);
        if (!core) return word;

        if (core[0] === "#") {
          return colorChange
            ? `${prefix}<em id="hashtags" style="color: #f9ed00; font-style: normal; word-break: break-all; margin-right: 4px;">${core}</em>${suffix}`
            : `${prefix}<em id="hashtags" style="color: #81A8F8; font-style: normal; word-break: break-all; margin-right: 4px;">${core}</em>${suffix}`;
        } else if (core[0] === "@") {
          const link = `https://cypher.digitalax.xyz/autograph/${
            core?.includes(".lens")
              ? core?.replace(".lens", "").replace("@", "")
              : core?.replace("@", "")
          }`;
          return colorChange
            ? `${prefix}<a href="${link}" rel="noreferrer" target="_blank" style="word-break: break-all; margin-right: 4px;"> <span style="color: #f9ed00;">${core}</span> </a>${suffix}`
            : `${prefix}<a href="${link}" target="_blank" rel="noreferrer" style="word-break: break-all; margin-right: 4px;"> <span style="color: #81A8F8;">${core}</span> </a>${suffix}`;
        }

        const normalizedUrl = normalizeExternalUrl(core);
        if (normalizedUrl) {
          return colorChange
            ? `${prefix}<a href="${normalizedUrl}" style="word-break: break-all; margin-right: 4px;" target="_blank" rel="noreferrer nofollow ugc"> <span style="color: #f9ed00;">${core}</span> </a>${suffix}`
            : `${prefix}<a href="${normalizedUrl}" style="word-break: break-all; margin-right: 4px;" target="_blank" rel="noreferrer nofollow ugc"> <span style="color: #81A8F8;">${core}</span> </a>${suffix}`;
        }

        return word;
      });
      return `<span>${styledWords.join(" ")}</span>`;
    }
  });

  const formattedDescription = styledLines.join("<br />");
  return `<div style="word-wrap: break-word; max-width: 100%;">${formattedDescription}</div>`;
};

export default descriptionRegex;
