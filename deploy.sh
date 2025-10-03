#!/bin/bash
set -e

echo "🛠 Building Next.js static site..."
npm run build   # or bun run build if using Bun

echo "📂 Checking out/ folder contents:"
ls -la out

echo "🚀 Deploying to Cloudflare..."
npx wrangler deploy --assets=out

echo "✅ Deployment completed!"
