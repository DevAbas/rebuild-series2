import React, { useRef, useEffect } from "react"

// Global context
import { useGlobalStateContext } from "../../context/globalContext"

// Custom hooks
import useWindowSize from "../../hooks/useWindowSize"

// Styled components
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"

const HomeBanner = ({ changeCursorType }) => {
  const windowSize = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  let canvas = useRef(null)

  useEffect(() => {
    let renderingElement = canvas.current
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode()
    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")
    let lastX
    let lastY
    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, windowSize.width, windowSize.height)

    renderingElement.addEventListener("mouseover", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("click", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", ev => {
      moving = false
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", ev => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = ev.pageX - renderingElement.offsetLeft
        let currentY = ev.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          src={require("../../assets/video/video.mp4")}
          width="100%"
          height="100%"
          loop
          autoPlay
        ></video>
      </Video>
      <Canvas
        ref={canvas}
        width={windowSize.width}
        height={windowSize.height}
        onMouseEnter={() => changeCursorType("hovered")}
        onMouseLeave={changeCursorType}
      />
      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>DIG</Headline>
        <Headline variants={item}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
