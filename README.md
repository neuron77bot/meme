# meme

## 🚀 Quick Start

### Frontend
```bash
cd frontend
docker compose up -d
```

**URL:** https://meme.vm.devalliance.com.ar

### Development
```bash
cd frontend
docker compose logs -f
```

## 📁 Structure
```
meme/
├── frontend/
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── index.html
│   └── nginx.conf
└── README.md
```

## 🔧 Configuration

- **Subdomain:** meme.vm.devalliance.com.ar
- **SSL:** Let's Encrypt (automático vía Traefik)
- **Network:** proxy (externa)

## 📝 Notes

Created with `create-project.sh` on 2026-03-18
