import Image from "next/image";

import { ContentWrapper } from "@/src/components";

import useDataFetch from "@/src/hooks/useLogic";

//DONE:
//1. Move art/id to features - DONE
//2. Closing mobile nav on redirect - DONE
//4. Add no results - DONE
//5. Add Loading - DONE
//6. SEO - DONE
//8. Filter styles & responsivity - DONE
//11. fetch logic moved to hooks - DONE
// "any" types fix

//TODO:
// mobile page-width (scrollbar bug)
// Analitics
// Add art/id page design
// Favicon
// Small components logic - move to custom hook

export type ArtParams = {
  locale: string;
  id: string;
};

const Art = ({ params }: { params: ArtParams }) => {
  const { art } = useDataFetch(false, params);
  // const { artTitle, artImage, artDescription, artCollection } = art?.art;
  return (
    <ContentWrapper>
      <p>{art && art?.art.artTitle}</p>
      {art && (
        <div
          dangerouslySetInnerHTML={{ __html: art.art.artDescription.html }}
        ></div>
      )}
      {art && (
        <Image
          src={art?.art.artImage.url}
          width={art?.art.artImage.width}
          height={art?.art.artImage.height}
          alt=""
          className="w-full object-contain mx-auto"
        />
      )}
    </ContentWrapper>
  );
};

export default Art;
