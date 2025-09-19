import React, { type ReactNode } from "react"
import "../styles/MainTitle.css"
type mainTitleProps = {
  title: string
  subtitle: ReactNode
}
const MainTitle: React.FC<mainTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="home-headline">
      <h1 className="home-title">
        {title}
        <span className="home-subtitle">{subtitle}</span>
      </h1>
    </div>
  )
}

export default MainTitle
