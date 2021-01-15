import React from "react"
import Iframe from "react-iframe"

const MelodyPage = () => {
  return (
    <div>
      <Iframe
        onLoad={() => console.log("loaded!")}
        url="https://melodymaker.herokuapp.com/"
        width="500px"
        height="860px"
        id="melodyMaker"
        styles={{ transform: "scale(0.5)", overflow: "hidden" }}
      />
    </div>
  )
}

export default MelodyPage
