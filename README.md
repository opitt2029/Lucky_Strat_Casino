# 🎰 Lucky Star Casino (幸運星幣城)

[![License: MIT](https://shields.io)](https://opensource.org)
[![Docker Support](https://shields.io)](https://docker.com)

幸運星幣城是一個基於模擬幣機制的線上娛樂遊戲平台。
⚠️ **本平台不涉及任何真實金錢交易，定位為社交娛樂遊戲平台。**

---

## 🏗️ 專案架構 (Project Structure)

本專案採用 **Monorepo** 結構管理前端、後端微服務及基礎設施設定：

```text
.
├── backend/                   # 後端微服務 (Java 21 / Spring Boot)
│   ├── admin-service/         # 後台管理服務
│   ├── game-service/          # 遊戲核心邏輯服務
│   ├── gateway-service/       # API 網關 (Spring Cloud Gateway)
│   ├── member-service/        # 會員與認證服務
│   ├── rank-service/          # 排行榜服務
│   └── wallet-service/        # 虛擬錢包服務
├── frontend/                  # 前端網頁應用 (React / Vite)
├── database/                  # 資料庫初始化腳本
│   ├── mysql/
│   └── postgres/
├── kafka/                     # Kafka 訊息佇列設定
├── docs/                      # 專案開發文件
├── .github/                   # GitHub PR 範本與分支規範
├── docker-compose.yml         # 基礎設施編排檔
└── .env.example               # 環境變數範本
```

---

## 🛠️ 技術棧 (Tech Stack)

### 💻 Frontend
* **核心框架**: React (Vite), React Router
* **狀態管理**: Redux Toolkit
* **網路請求**: Axios
* **樣式工具**: Tailwind CSS

### ⚙️ Backend (Microservices)
* **核心語言**: Java 21 / Spring Boot 3.x
* **服務網關**: Spring Cloud Gateway
* **安全認證**: Spring Security
* **資料存取**: Spring Data JPA
* **異步通訊**: Apache Kafka
* **快取機制**: Redis

### 🗄️ Database
* **關聯式資料庫**: PostgreSQL 16, MySQL 8.4

### 🚀 Infrastructure
* **容器化技術**: Docker, Docker Compose

---

## 📖 專案文件 (Documentation)

* 📄 [專案基底功能說明](docs/PROJECT_BASE_EXPLANATION.md)
* 🤝 [開發者貢獻與分支規範指南](CONTRIBUTING.md)

---

## 🚀 本地開發環境啟動 (Local Setup)

### 前置需求
* [Git](https://git-scm.com)
* [Docker Desktop](https://docker.comproducts/docker-desktop/) 或 Docker Engine
* [Docker Compose](https://docker.com) *(支援 `docker-compose` 或 Docker v2 的 `docker compose` 指令)*

### 啟動步驟

1. **複製環境變數範本**：
   ```bash
   cp .env.example .env
   ```
   *請根據本機 Port 需求與排衝突，自行調整 `.env` 內的設定。*

2. **啟動基礎服務與依賴環境**：
   ```bash
   docker compose up -d
   ```
   *(舊版本 Docker 可使用 `docker-compose up -d`)*

3. **檢查服務運行狀態**：
   ```bash
   docker compose ps
   ```

4. **管理後台與工具 UI**：
   * **Kafka UI**: [http://localhost:8085](http://localhost:8085)

---

## 📌 基礎設施注意事項 (Infrastructure Notes)

* **健康檢查 (Healthcheck)**：MySQL、PostgreSQL、Redis、Kafka 皆已內建基本 healthcheck，確保服務依賴順序正確。
* **Kafka 自動化**：所有需要的 Kafka topic 皆會由 `kafka-init` 容器在啟動時自動建立，無需手動配置。
* **資料庫初始化**：`database/mysql/` 與 `database/postgres/` 內的 `.sql` 腳本**僅會在 Volume 第一次建立時執行**。若需重新載入，請清除對應的 Docker Volume。

---

## 🌿 Git 分支與開發規範

為維持程式碼品質，本專案嚴格執行以下規範：
* **主要分支**：`main` (生產環境)、`develop` (測試與整合分支)。
* **功能開發**：請由 `develop` 簽出 `feature/issue編號-功能描述` 分支。
* **提交合併**：所有變更皆須發起 PR 並通過自動化測試與至少 1 位同儕審查 (Code Review)。
* 完整規範請參閱 [CONTRIBUTING.md](./CONTRIBUTING.md)。
