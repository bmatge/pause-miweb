#!/bin/bash
set -e

echo "🔄 Pull des dernières modifications..."
git pull

echo "🏗️  Build de l'image Docker..."
docker compose build --no-cache

echo "⬇️  Arrêt du conteneur..."
docker compose down

echo "🚀 Lancement..."
docker compose up -d

echo "✅ Déployé ! https://pause-miweb.matge.com"
