# Frontend

Lucky Star Casino 前端基底，使用 React、Vite、React Router、Redux Toolkit、Axios 與 Tailwind CSS。

## 開發指令

```bash
cd frontend
npm install
npm run dev
```

預設網址：

```text
http://localhost:5173
```

## 目前已建立內容

- Vite + React 專案設定
- React Router 路由設定
- Redux Toolkit store 與基本 slice
- Axios `httpClient`
- Tailwind CSS 設定
- 首頁、遊戲大廳、錢包、排行榜、後台、404 頁面

## API 設定

前端預設透過 `/api` 呼叫後端，由 Vite proxy 轉發到 Gateway：

```text
VITE_API_BASE_URL=/api
VITE_GATEWAY_URL=http://localhost:8080
```

後續若 Gateway 實作完成，前端 API 可集中放在 `src/api/` 底下管理。
