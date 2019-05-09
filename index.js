import { TweenMax, TimelineMax } from "gsap"

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "100px",
  height: "100px",
  x: "100px",
  y: "100px"
})

const timeline = new TimelineMax({ repeat: -1 })

timeline.pause()

timeline.to("#box", 0.5, { x: 200 })
timeline.to("#box", 0.5, { y: 200 })
timeline.to("#box", 0.5, { x: 100 })
timeline.to("#box", 0.5, { y: 100 })

document
  .querySelector("#box")
  .addEventListener("click", () => {
    if (timeline.isActive()) {
      timeline.pause()
    } else {
      timeline.resume()
    }
  })

document.addEventListener("wheel", event => {
  if (event.wheelDelta > 0) {
    // timeline.progress(timeline.progress() + 0.1)
    TweenMax.to(timeline, 0.25, { progress: "+=0.1" })
  } else {
    TweenMax.to(timeline, 0.25, { progress: "-=0.1" })
  }
})

