"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import NavigationLink from "@/components/reusable/NavLink";

export default function Arts({ data, types, collections, years }: any) {
  const [year, setYear] = useState<number | null | undefined>(undefined);
  const [type, setType] = useState<string | null>(null);
  const [collection, setCollection] = useState<string | null>(null);

  const t = useTranslations("Arts");

  const filteredArts = useMemo(() => {
    return data.arts.filter((art: any) => {
      const yearMatch =
        year === undefined
          ? true
          : year === null
          ? art.artYear === null
          : art.artYear === year;
      const typeMatch = type ? art.artType === type : true;
      const collectionMatch = collection
        ? art.artCollection === collection
        : true;

      return yearMatch && typeMatch && collectionMatch;
    });
  }, [data.arts, year, type, collection]);

  const handleYearChange = (selectedYear: string | null) => {
    if (selectedYear === "clear") {
      setYear(undefined);
    } else if (selectedYear === "null") {
      setYear(null);
    } else {
      setYear(Number(selectedYear));
    }
  };
  const handleTypeChange = (selectedType: string | null) => {
    if (type === selectedType) {
      setType(null);
    } else if (type === null) {
      setType(selectedType);
    } else {
      setType(selectedType);
    }
  };
  const handleCollectionChange = (selectedCollection: string | null) => {
    if (collection === selectedCollection) {
      setCollection(null);
    } else if (collection === null) {
      setCollection(selectedCollection);
    } else {
      setCollection(selectedCollection);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <select onChange={(e) => handleYearChange(e.target.value)}>
          <option value="clear">Clear filter</option>
          <option value="null">No year</option>
          {years &&
            years.map((el: any) => {
              return <option key={el}>{el}</option>;
            })}
        </select>
      </div>
      <div>
        {collections &&
          collections.map((el: any) => {
            return (
              <button
                className={clsx("p-2 m-2 border border-slate-900", {
                  " border-2": el === collection,
                })}
                key={el}
                onClick={() => handleCollectionChange(el)}
              >
                {t(el)}
              </button>
            );
          })}
      </div>
      <div>
        {types &&
          types.map((el: any) => {
            return (
              <button
                className={clsx("p-2 m-2 border border-slate-900", {
                  " border-2": el === type,
                })}
                key={el}
                onClick={() => handleTypeChange(el)}
              >
                {t(el)}
              </button>
            );
          })}
      </div>
      <div>Art Collections{JSON.stringify(collections)}</div>
      <div>Art Type{JSON.stringify(types)}</div>
      <div>Art Years{JSON.stringify(years)}</div>
      Art {filteredArts.length}
      {filteredArts.map((el: any) => (
        <div key={el.id}>
          {JSON.stringify(el)}
          <NavigationLink href={`art/${el.id}`}>Link to subpage</NavigationLink>
        </div>
      ))}
    </main>
  );
}
