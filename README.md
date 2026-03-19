# meme

## 🚀 Quick Start

### Frontend
```bash
cd frontend
docker compose up -d
```

**URL:** https://meme.vm.devalliance.com.ar

### Backend
```bash
cd backend
docker compose up -d
```

**API:** https://meme.vm.devalliance.com.ar/api
**Docs:** https://meme.vm.devalliance.com.ar/api/docs

## 📁 Structure
```
meme/
├── frontend/
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── index.html
│   └── nginx.conf
├── backend/
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── package.json
│   ├── .env
│   └── src/
│       └── server.js
└── README.md
```

## 🔧 Configuration

- **Subdomain:** meme.vm.devalliance.com.ar
- **SSL:** Let's Encrypt (automático vía Traefik)
- **Network:** proxy (externa)

## 📝 Notes

Created with `create-project.sh` on 2026-03-18
