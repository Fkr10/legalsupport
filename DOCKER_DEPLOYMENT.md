# Docker & Deployment Guide

## Overview

LegalSupportNow is containerized using Docker with Nginx for production-grade serving. The setup includes:

- **Multi-stage builds** for optimized image size
- **Nginx** for static file serving and SPA routing
- **Security headers** for enhanced protection
- **Health checks** for container orchestration
- **Gzip compression** for better performance
- **Cache optimization** for static assets

## Quick Start

### Build and Run with Docker

```bash
# Build the Docker image
npm run docker:build
# or
docker build -t legalsupportnow:latest .

# Run the container
npm run docker:run
# or
docker run -p 8080:8080 legalsupportnow:latest
```

The application will be available at `http://localhost:8080`

### Using Docker Compose

```bash
# Start the application
npm run docker:compose:up
# or
docker-compose up -d

# View logs
npm run docker:compose:logs
# or
docker-compose logs -f

# Stop the application
npm run docker:compose:down
# or
docker-compose down
```

## File Structure

```
├── Dockerfile                      # Multi-stage production build
├── docker-compose.yml              # Production compose config
├── docker-compose.dev.yml          # Development compose override
├── .dockerignore                   # Files excluded from image
├── .env.docker                     # Docker environment variables
└── nginx/
    └── legalsupportnow.conf        # Nginx configuration for SPA
```

## Configuration

### Port Configuration

The application runs on port **8080** inside the container. To use a different port:

```bash
docker run -p 3000:8080 legalsupportnow:latest
```

### Environment Variables

Edit `.env.docker` to configure environment variables:

```bash
NODE_ENV=production
PORT=8080
```

## Performance Features

### Gzip Compression
- Compresses CSS, JS, JSON, SVG, fonts
- Minimum compression size: 1KB
- Compatible with modern browsers

### Asset Caching
- HTML files: Never cached (Cache-Control: no-cache)
- CSS/JS/Images: Cached for 1 year (365 days)
- Immutable assets use max-age=31536000

### Security Headers
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: no-referrer-when-downgrade
- CSP: Allows self, http, https, data, blob, inline scripts

## Health Checks

The container includes health checks that verify the application is running:

```bash
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3
  CMD curl -f http://localhost:8080/ || exit 1
```

## Multi-stage Build

The Dockerfile uses multi-stage builds to minimize the final image size:

1. **Builder Stage**: Uses Node.js to build the application
2. **Production Stage**: Uses Nginx Alpine to serve the built files

## SPA Routing

Nginx is configured to serve the React SPA correctly:

- All unknown routes redirect to `index.html`
- React Router handles client-side routing
- 404 errors also serve `index.html` for SPA compatibility

## SSL/HTTPS

To enable HTTPS with a reverse proxy:

1. Use a reverse proxy like Traefik, Nginx, or HAProxy in front of the container
2. Or use Docker services like `nginx-proxy` with `docker-letsencrypt-nginx-proxy-companion`
3. Forward HTTPS traffic to port 8080

Example with Nginx proxy:

```nginx
server {
  listen 443 ssl http2;
  server_name yourdomain.com;

  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;

  location / {
    proxy_pass http://legalsupportnow:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## Kubernetes Deployment

For Kubernetes deployment, create a deployment manifest:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: legalsupportnow
spec:
  replicas: 3
  selector:
    matchLabels:
      app: legalsupportnow
  template:
    metadata:
      labels:
        app: legalsupportnow
    spec:
      containers:
      - name: legalsupportnow
        image: legalsupportnow:latest
        ports:
        - containerPort: 8080
        livenessProbe:
          httpGet:
            path: /
            port: 8080
          initialDelaySeconds: 10
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
```

## Troubleshooting

### Container won't start
```bash
docker-compose logs
```

### Performance issues
- Check if gzip compression is enabled
- Verify asset caching headers
- Use `curl -I http://localhost:8080/` to check headers

### 404 errors on refresh
- Verify nginx configuration is properly mounted
- Check that index.html exists in `/usr/share/nginx/html`

## Development

For local development with hot reload:

```bash
# Run with development compose config
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# This mounts your source code for live reload
```

## Production Best Practices

1. Use specific image tags instead of `latest`
2. Implement resource limits in docker-compose.yml
3. Use health checks with appropriate timeout values
4. Implement log aggregation (ELK, Splunk, etc.)
5. Use environment variables for sensitive data
6. Implement rate limiting at reverse proxy level
7. Monitor container metrics and performance
8. Regular security updates for base images

## Size Optimization

The multi-stage build significantly reduces image size:

- **Builder stage**: ~500MB (Node.js + build dependencies)
- **Final image**: ~50-100MB (Nginx + static files)

## Updates

To update the application:

1. Pull the latest changes
2. Rebuild the image: `npm run docker:build`
3. Stop the old container: `docker-compose down`
4. Start the new container: `docker-compose up -d`

## Support

For Docker-related issues, check:
- Docker logs: `docker-compose logs`
- Nginx logs inside container: `/var/log/nginx/`
- Container health: `docker ps` (check STATUS column)
