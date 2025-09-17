import React from "react"
import "../styles/HomeSection.css"
type homeSectionProps = {
  mainTitle: string
  mainText: string
}
const HomeSection: React.FC<homeSectionProps> = ({ mainTitle, mainText }) => {
  return (
    <div className="home-section">
      <h1>{mainTitle}</h1>
      <p>{mainText}</p>
      <button>Visualizar</button>
    </div>
  )
}

export default HomeSection
