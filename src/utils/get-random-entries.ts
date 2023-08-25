import * as crypto from "crypto"

export default function getRandomEntries<T>(array: T[], count: number): T[] {
  if (count >= array.length) {
    return array
  }

  const newArray: T[] = array.slice()

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.randomInt(0, i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }

  return newArray.slice(0, count)
}
