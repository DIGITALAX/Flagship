import { NextRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Custom404 = ({ router }: { router: NextRouter }): JSX.Element => {
  const { t } = useTranslation("404");
  return (
    <div className="relative min-h-screen min-w-screen h-screen w-screen flex items-center justify-center cursor-sewingS">
      <div className="relative w-fit h-fit flex flex-row gap-2 items-center justify-center text-mainText font-fira p-6 text-center">
        {t("glitch")}
        <div
          onClick={() => router.push("/")}
          className="hover:opacity-80 cursor-sewingHS flex items-center justify-center relative"
        >
          {t("home")}
        </div>
      </div>
    </div>
  );
};

export default Custom404;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["404", "footer"])),
  },
});
