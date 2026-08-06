import { useEffect, useState } from 'react'

function getInitialActiveId(sectionIds) {
  if (typeof window === 'undefined') {
    return sectionIds[0] ?? ''
  }

  const hashId = window.location.hash.replace('#', '')
  return sectionIds.includes(hashId) ? hashId : sectionIds[0] ?? ''
}

function getStickyHeaderOffset() {
  const header = document.querySelector('header')
  return header ? Math.ceil(header.getBoundingClientRect().height) : 0
}

function buildThresholdList() {
  const steps = 12
  return Array.from({ length: steps + 1 }, (_, index) => index / steps)
}

function getCurrentSectionId(sectionIds, headerOffset) {
  const sections = sectionIds
    .map((sectionId) => document.getElementById(sectionId))
    .filter(Boolean)

  if (!sections.length) {
    return ''
  }

  const activeLine = headerOffset + 1
  const rects = sections.map((section) => ({
    id: section.id,
    rect: section.getBoundingClientRect(),
  }))

  const crossingSection = rects.find(({ rect }) => rect.top <= activeLine && rect.bottom > activeLine)

  if (crossingSection?.id) {
    return crossingSection.id
  }

  const firstBelowLine = rects.find(({ rect }) => rect.top > activeLine)

  if (firstBelowLine?.id) {
    return firstBelowLine.id
  }

  return rects[rects.length - 1]?.id ?? sectionIds[0] ?? ''
}

export default function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState(() => getInitialActiveId(sectionIds))
  const [headerOffset, setHeaderOffset] = useState(() =>
    typeof window === 'undefined' ? 0 : getStickyHeaderOffset(),
  )

  useEffect(() => {
    const header = document.querySelector('header')

    if (header && 'ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(() => {
        setHeaderOffset(getStickyHeaderOffset())
      })

      resizeObserver.observe(header)

      return () => resizeObserver.disconnect()
    }

    const handleResize = () => {
      setHeaderOffset(getStickyHeaderOffset())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const intersectionRatios = new Map()

    const setBestVisibleSection = (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id

        if (entry.isIntersecting) {
          intersectionRatios.set(sectionId, entry.intersectionRatio)
        } else {
          intersectionRatios.set(sectionId, 0)
        }
      })

      let bestId = ''
      let bestRatio = 0

      intersectionRatios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = id
        }
      })

      bestId = getCurrentSectionId(sectionIds, headerOffset)

      if (bestId) {
        setActiveId((currentId) => (currentId === bestId ? currentId : bestId))
      }
    }

    const observer = new IntersectionObserver(setBestVisibleSection, {
      root: null,
      threshold: buildThresholdList(),
      rootMargin: `-${headerOffset}px 0px 0px 0px`,
    })

    sections.forEach((section) => observer.observe(section))

    const initialActive = getCurrentSectionId(sectionIds, headerOffset)
    if (initialActive) {
      setActiveId((currentId) => (currentId === initialActive ? currentId : initialActive))
    }

    return () => observer.disconnect()
  }, [sectionIds, headerOffset])

  useEffect(() => {
    const syncFromHash = () => {
      const hashId = window.location.hash.replace('#', '')

      if (sectionIds.includes(hashId)) {
        setActiveId(hashId)
      }
    }

    window.addEventListener('hashchange', syncFromHash)
    window.addEventListener('popstate', syncFromHash)

    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('popstate', syncFromHash)
    }
  }, [sectionIds])

  return activeId
}