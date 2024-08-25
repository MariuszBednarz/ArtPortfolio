import { ImageProps } from "next/image";

export interface FilterArt {
  id: string;
  artCollection: string;
  artImage: {
    height: number;
    url: string;
    width: number;
  };
  artTitle: string;
  artYear: number;
  artType: string;
}

export type FilterState = null | undefined | string | number;

export interface FilterArtsProps {
  data: {
    arts: FilterArt[];
  };
  types: string[] | undefined;
  collections: string[] | undefined;
  years: (number | null)[] | undefined;
}

export interface ArtProps {
  data: {
    artDescription: {
      text: string;
    };
    artImage: {
      height: number;
      url: string;
      width: number;
    };
    artTitle: string;
    artType: string;
    artYear: string | null;
    createdAt: string;
    id: string;
  };
}

export interface BioProps {
  bio: {
    expo: string;
    id: string;
  }[];
}

export interface BurgerProps {
  toggleMenu: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}

export interface ButtonProps {
  text: string;
  type?: string;
  fill?: boolean;
  themeDisabled?: boolean;
  onClick?: () => void;
}

export interface CheckboxProps {
  selected: boolean;
  text: string;
  handleCheckbox: (text: string) => void;
}

export interface NavLinksProps {
  mobile?: boolean | undefined;
  toggleMenu?: () => void;
}

type Option = null | undefined | string | number;

export interface SelectProps {
  variant: "yearSelect" | "colSelect";
  options: (number | string | null)[] | undefined;
  selectedOption: Option;
  setSelectedOption: React.Dispatch<React.SetStateAction<Option>>;
  defaultValue: null | undefined;
  defaultText: string;
  fixed?: boolean;
}

export type ParamsProps = {
  params: { id: string; locale: string };
};

export interface Item {
  id: string;
}

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export interface ChevronProps {
  rotate: boolean;
  selected: boolean;
}

export interface CustomImageProps
  extends Omit<ImageProps, "onLoadingComplete"> {
  alt: string;
}

export interface AwardProps {
  data: {
    title: string;
    description: string | { expo: string; id: string }[];
  };
  lastItem?: boolean;
}

export interface FiltersProps {
  years: number[];
  year: number;
  setYear: React.Dispatch<React.SetStateAction<Option>>;
  collection: string;
  collections: string[];
  setCollection: React.Dispatch<React.SetStateAction<Option>>;
  type: string;
  types: string[];
  setType: React.Dispatch<React.SetStateAction<Option>>;
}
