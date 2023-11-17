// import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";

// const useProperPath = () => {
//   const locale = useLocale();
//   const router = useRouter();

//   function cleanUrl(url: string) {
//     return url.replace(/^\/(pl|en)(\/|$)/, "/");
//   }

//   const handleSwitch = (pathname: string) => {
//     const newPath = cleanUrl(pathname);
//     if (locale === "pl") router.replace(`/en${newPath}`);
//     if (locale === "en") router.replace(`/pl${newPath}`);
//   };
//   return { handleSwitch };
// };

// export default useProperPath;
