import { copyFile, mkdir } from "node:fs/promises"
import { join } from "node:path"

const rootDir = import.meta.dirname
const src = join(rootDir, "..", "types", "static-assets.d.ts")
const destDir = join(rootDir, "..", "dist")
const dest = join(destDir, "static-assets.d.ts")

await mkdir(destDir, { recursive: true })
await copyFile(src, dest)
