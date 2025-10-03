#!/bin/bash
set -e

echo "🛠 Building Next.js static site..."
npm run build

echo "📂 Listing files in out/ folder:"
ls -la out

echo "🚀 Deploying to Cloudflare..."
npx wrangler deploy --assets=out

echo "✅ Deployment completed!"
