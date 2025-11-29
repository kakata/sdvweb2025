FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Allow optional build-time injection of the public Vite env var
ARG VITE_API_KEY
ENV VITE_API_KEY=$VITE_API_KEY

# Build the static site
COPY . .
RUN npm run build

# Serve with a lightweight web server
FROM nginx:1.27-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
