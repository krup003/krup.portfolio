"use client"

import { useEffect, useRef, useState } from "react"

import GitHubActivity from "@/components/ui/github-activity"

const GITHUB_USERNAME = "krup003"

const DARK_TOKENS = {
  "--foreground": "#fafafa",
  "--color-foreground": "#fafafa",
  "--card": "#17171a",
  "--color-card": "#17171a",
  "--background": "#303036",
  "--color-background": "#303036",
  "--color-neutral-200": "#0e0e10",
} as React.CSSProperties

const ACCENT = ["#383838", "#5c5c5d", "#838383", "#868689", "#fafafa"]

const Logo = ({ src, invert }: { src: string; invert?: boolean }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt="" style={{ objectFit: "contain", filter: invert ? "invert(1)" : undefined }} />
)

const REPOS = [
  {
    name: "FileShare",
    count: 166,
    href: "https://github.com/krup003/Fileshare-tool-monorepo",
    logo: <Logo src="/logos/folder.png" />,
  },
  {
    name: "CodeShare",
    count: 126,
    href: "https://github.com/krup003/CodeShare",
    logo: <Logo src="/logos/codeshareicon.svg" invert />,
  },
  {
    name: "Krup",
    count: 16,
    href: "https://github.com/krup003/portfolio",
    logo: <Logo src="/logos/oldPortfolio.svg" />,
  },
]

const WEEKS = 53
const CARD_PADDING = 32
const MIN_CELL = 11
const MAX_CELL = 64
const CELL_STEP = 0.25
const SAFETY = 1

const gapFor = (cell: number) => Math.max(2, Math.round(cell / 4))

const widthFor = (cell: number) => {
  const gap = gapFor(cell)
  return WEEKS * (cell + gap) - gap + CARD_PADDING
}

const fitCell = (available: number) => {
  const cap = available - SAFETY
  let best = MIN_CELL
  for (let cell = MIN_CELL; cell <= MAX_CELL && widthFor(cell) <= cap; cell += CELL_STEP) {
    best = cell
  }
  return best
}

function useFittedCell() {
  const ref = useRef<HTMLDivElement>(null)
  const [cell, setCell] = useState(MIN_CELL)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const measure = () => setCell(fitCell(el.clientWidth))

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, cell] as const
}

export default function GithubActivityCard() {
  const [ref, cellSize] = useFittedCell()

  return (
    <div className="px-[3%] py-10">
      <div ref={ref} className="flex">
        <GitHubActivity
          username={GITHUB_USERNAME}
          repos={REPOS}
          accent={ACCENT}
          cellSize={cellSize}
          showMonths
          style={DARK_TOKENS}
          className="bg-[#0e0e10] [&_button>svg]:text-[#3e4346] [&_img]:p-1.5"
        />
      </div>
    </div>
  )
}
