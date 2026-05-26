# Lucky Star Casino

幸運星幣城是一個基於模擬幣機制的線上娛樂遊戲平台。

本平台不涉及任何真實金錢交易，定位為社交娛樂遊戲平台。

## Requirements

- Docker
- Docker Compose
- Git

> 目前本機環境已驗證 `docker-compose` 指令可解析設定；若使用 Docker Compose v2，也可以改用 `docker compose`。

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Redux Toolkit
- Axios
- Tailwind CSS

### Backend

- Java 21
- Spring Boot 3.x
- Spring Cloud Gateway
- Spring Security
- Spring Data JPA
- Kafka
- Redis

### Database

- PostgreSQL 16
- MySQL 8.4

### Infrastructure

- Docker
- Docker Compose

## Project Structure

```text
backend/
  admin-service/
  game-service/
  gateway-service/
  member-service/
  rank-service/
  wallet-service/
frontend/
database/
  mysql/
  postgres/
kafka/
docs/
```

## Documentation

- [專案基底功能說明](docs/PROJECT_BASE_EXPLANATION.md)

## Local Setup

1. 複製環境變數範本：

   ```bash
   cp .env.example .env
   ```

2. 依照本機 port 需求調整 `.env`。

3. 啟動基礎服務：

   ```bash
   docker-compose up -d
   ```

4. 檢查服務狀態：

   ```bash
   docker-compose ps
   ```

5. 開啟 Kafka UI：

   ```text
   http://localhost:8085
   ```

## Frontend Development

前端基底位於 `frontend/`，目前已建立 React + Vite + Router + Redux Toolkit + Axios + Tailwind CSS。

本機開發：

```bash
cd frontend
npm install
npm run dev
```

Docker 開發：

```bash
docker compose up -d frontend
```

預設入口：

```text
http://localhost:5173
```

## Infrastructure Notes

- MySQL、PostgreSQL、Redis、Kafka 都有基本 healthcheck。
- Kafka topic 會由 `kafka-init` service 自動建立。
- MySQL 與 PostgreSQL 的 init SQL 只會在 volume 第一次建立時執行。
