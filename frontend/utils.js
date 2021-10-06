import { useState, useCallback } from "react"

/**
 * Returns an array containing:
 *  domRect - a DOMRect object describing the size and the position of a rectangle on a viewport
 *  domRectRef - a memoized callback for keeping references to nodes' DOMRect objects
 * @returns {Array}
 */
export const useClientRect = () => {
  const [domRect, setRect] = useState(null)

  const domRectRef = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])

  return [domRect, domRectRef]
}
