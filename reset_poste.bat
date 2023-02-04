@echo off

docker exec api npm run migrations
docker exec api npm run seed

