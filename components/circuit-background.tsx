"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodes: {
      x: number
      y: number
      vx: number
      vy: number
      pulse: number
      pulseSpeed: number
    }[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      })
    }

    const isDark = theme === "dark"
    const primaryColor = isDark ? "59, 130, 246" : "37, 99, 235"
    const secondaryColor = isDark ? "139, 92, 246" : "124, 58, 237"

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.pulse += node.pulseSpeed

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const pulseValue = Math.sin(node.pulse) * 0.5 + 0.5
        const nodeSize = 1.5 + pulseValue * 1.5

        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${primaryColor}, ${0.4 + pulseValue * 0.4})`
        ctx.fill()

        ctx.shadowBlur = 10 + pulseValue * 10
        ctx.shadowColor = `rgba(${primaryColor}, 0.8)`
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)

            const opacity = 0.3 * (1 - distance / 200)
            gradient.addColorStop(0, `rgba(${primaryColor}, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(${secondaryColor}, ${opacity * 0.8})`)
            gradient.addColorStop(1, `rgba(${primaryColor}, ${opacity})`)

            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.shadowBlur = 0
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [theme])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" style={{ opacity: 0.3 }} />
  )
}
