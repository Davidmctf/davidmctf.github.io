# Multi-stage build for Angular SSR
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application for production
RUN pnpm run build

# Production stage
FROM node:22-alpine AS production

# Set working directory
WORKDIR /usr/app

# Install pnpm globally for production
RUN npm install -g pnpm

# Copy built application from build stage
COPY --from=build /app/dist/portafolio ./

# Expose port 4000 (default for Angular SSR)
EXPOSE 4000

# Set environment to production
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["node", "server/server.mjs"]