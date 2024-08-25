// import { useState, useMemo } from "react";

// import { FilterArt, FilterState } from "@/types/components";

// const useLogic = (data: any) => {
//   const [year, setYear] = useState<FilterState>(undefined);
//   const [type, setType] = useState<FilterState>(null);
//   const [collection, setCollection] = useState<FilterState>(null);

//   const filteredArts = useMemo(() => {
//     return data.arts.filter((art: FilterArt) => {
//       const yearMatch =
//         year === undefined
//           ? true
//           : year === null
//           ? art.artYear === null
//           : art.artYear === year;
//       const typeMatch = type ? art.artType === type : true;
//       const collectionMatch = collection
//         ? art.artCollection === collection
//         : true;
//       return yearMatch && typeMatch && collectionMatch;
//     });
//   }, [data.arts, year, type, collection]);

//   const handleTypeChange = (selectedType: string | null) => {
//     if (type === selectedType) {
//       setType(null);
//     } else if (type === null) {
//       setType(selectedType);
//     } else {
//       setType(selectedType);
//     }
//   };

//   return { handleTypeChange, filteredArts, setYear, setCollection };
// };

// export default useLogic;
