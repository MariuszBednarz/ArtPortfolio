import { Metadata } from "next";

import Art, { ArtParams } from "@/src/features/art/Art";

interface Props {
  params: {
    slug: string;
  };
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   if(

//   )
// }

const ArtPage = ({ params }: { params: ArtParams }) => {
  return <Art params={params} />;
};

export default ArtPage;
