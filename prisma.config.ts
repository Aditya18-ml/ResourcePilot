import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    // 👇 Replace this with YOUR actual Neon URL (copy from your .env)
    url: "postgresql://neondb_owner:npg_hSfXokB96YOt@ep-weathered-rice-aoenpk2o.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
})