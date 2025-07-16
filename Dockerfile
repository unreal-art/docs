# Build stage using Bun
FROM oven/bun:1.2.18-alpine AS builder
WORKDIR /app

COPY package.json bun.lock* ./

COPY . .

# Install dependencies
RUN bun install

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN bun run build

# Production stage using Bun
FROM oven/bun:1.2.18-alpine AS runner
WORKDIR /app

# Set to production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public folder
COPY --from=builder /app/public ./public

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the user to non-root
USER nextjs

# Expose the port the app will run on
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application using Bun
CMD ["bun", "server.js"]
