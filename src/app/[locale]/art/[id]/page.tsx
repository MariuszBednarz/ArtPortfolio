import Art from "@/src/features/art/Art";
import { ArtParams } from "@/src/features/art/Art";

const ArtPage = ({ params }: { params: ArtParams }) => {
  return <Art params={params} />;
};

export default ArtPage;
