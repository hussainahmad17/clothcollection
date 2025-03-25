"use client"

import { useState } from "react"
import Image from "next/image"

export default function FallbackImage({ src, alt, ...props }) {
  const [error, setError] = useState(false)

  return <Image src={error ? "/images/placeholder.jpg" : src} alt={alt} onError={() => setError(true)} {...props} />
}

