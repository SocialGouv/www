import Image from "next/image"

import imageHome from "./tour-mirabeau.jpg"

export default function Home() {
  return (
    <div className="fr-container">
      <Image
        sizes="100vw"
        src={imageHome}
        alt="photo de la tour Mirabeau"
        style={{ width: "auto", height: "100%" }}
      />
      <h2 className="fabnum-title-h2">La Fabrique Numérique</h2>
    </div>
  )
}
