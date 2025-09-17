import React from "react"
import "../styles/HomeCard.css"
type homeCardProps = {
  mainTitle: string
  mainText: string
  bgImage: string
}
const HomeCards: React.FC<homeCardProps> = ({
  mainTitle,
  mainText,
  bgImage,
}) => {
  return (
    <div className="home-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1>{mainTitle}</h1>
      <p>{mainText}</p>
    </div>
  )
}

export default HomeCards
