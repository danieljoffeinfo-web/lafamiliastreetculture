'use client'

import { useEffect, useRef } from 'react'
import { SITE } from '@/lib/site'

/** Idle lens: small ring with a centre dot, parked over the shoe. */
const IDLE_RADIUS = 34
const IDLE_ANCHOR = { x: 0.56, y: 0.44 }
/** Follow-the-cursor easing. 1 = instant, lower = lazier. */
const EASE = 0.18

export default function RevealStage() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let box = stage.getBoundingClientRect()
    const idle = () => ({
      x: box.width * IDLE_ANCHOR.x,
      y: box.height * IDLE_ANCHOR.y,
      r: IDLE_RADIUS,
    })
    const openRadius = () => Math.min(150, Math.max(88, box.width * 0.155))

    let current = idle()
    let target = idle()
    let pressed = false
    let frame = 0

    const paint = () => {
      stage.style.setProperty('--x', `${current.x}px`)
      stage.style.setProperty('--y', `${current.y}px`)
      stage.style.setProperty('--r', `${current.r}px`)
    }

    const tick = () => {
      const dx = target.x - current.x
      const dy = target.y - current.y
      const dr = target.r - current.r

      current = {
        x: current.x + dx * EASE,
        y: current.y + dy * EASE,
        r: current.r + dr * EASE,
      }
      paint()

      const settled = Math.abs(dx) < 0.35 && Math.abs(dy) < 0.35 && Math.abs(dr) < 0.35
      frame = settled ? 0 : requestAnimationFrame(tick)
      if (settled) {
        current = { ...target }
        paint()
      }
    }

    const run = () => {
      if (reduceMotion) {
        current = { ...target }
        paint()
        return
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const open = (event: PointerEvent) => {
      box = stage.getBoundingClientRect()
      target = {
        x: event.clientX - box.left,
        y: event.clientY - box.top,
        r: openRadius(),
      }
      stage.classList.add('is-live')
      run()
    }

    const close = () => {
      pressed = false
      target = idle()
      stage.classList.remove('is-live')
      run()
    }

    const onMove = (event: PointerEvent) => {
      // Coarse pointers (touch) only track while the finger is down.
      if (!finePointer && !pressed) return
      open(event)
    }

    const onDown = (event: PointerEvent) => {
      pressed = true
      open(event)
    }

    const onResize = () => {
      box = stage.getBoundingClientRect()
      if (!stage.classList.contains('is-live')) {
        target = idle()
        run()
      }
    }

    paint()

    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerdown', onDown)
    stage.addEventListener('pointerleave', close)
    stage.addEventListener('pointercancel', close)
    stage.addEventListener('pointerup', close)
    window.addEventListener('resize', onResize)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerdown', onDown)
      stage.removeEventListener('pointerleave', close)
      stage.removeEventListener('pointercancel', close)
      stage.removeEventListener('pointerup', close)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="stage" ref={stageRef}>
      <div className="stage-layer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE.hero.base} alt={SITE.hero.baseAlt} draggable={false} />
      </div>

      <div className="stage-layer stage-reveal" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE.hero.reveal} alt="" draggable={false} />
      </div>

      <div className="stage-ring" aria-hidden="true" />
      <div className="stage-dot" aria-hidden="true" />

      {/*
        Drawn as SVG text locked to textLength, so the wordmark is always exactly
        as wide as the shoe above it — no font-size guessing against the viewport,
        and no reflow when the webfont lands.
      */}
      <h1 className="wordmark">
        <svg viewBox="0 0 1000 100" aria-hidden="true">
          <text x="0" y="93" textLength="1000" lengthAdjust="spacing">
            LA FAMILIA
          </text>
        </svg>
        <span className="sr-only">La Familia</span>
      </h1>
    </div>
  )
}
