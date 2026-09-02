# 🛒 Products Backend

Простой и лёгкий бэкенд для управления товарами, построенный на **Node.js**, **Express** и **MongoDB**.

Проект создан для демонстрации базового CRUD-взаимодействия с базой данных и может служить отправной точкой для более сложных микросервисов или учебных целей.

## ✨ Что умеет этот проект

- ➕ **Создавать** новый товар (POST /products/add) 
- 📋 **Получать** список всех товаров (GET /product)
- 🔍 **Получать** товар по ID (GET /products/:id)
- ✏️ **Обновлять** товар по ID (PUT /products/:id)
- 🗑️ **Удалять** товар по ID (DELETE /products/:id)
- ❤️ **Проверять** работоспособность сервера (GET /health)

## ⚙️ Требования

- 🐳 **Docker** (рекомендуется) или **Node.js** (20+)
- 🗄️ **MongoDB** (управляемый кластер или локальная БД)
- 🔐 Переменные окружения (см. раздел «Быстрый старт»)

## 📂 Структура проекта

```text
.
├── models         # Схемы данных (Mongoose). Здесь описываются модели MongoDB.
├── routes         # Маршруты (роутеры). Определяют эндпоинты и связывают их с контроллерами.
├── services       # Бизнес-логика. Взаимодействие с базой данных и обработка данных.
├── controller     # Обработчики запросов. Принимают req/res, вызывают сервисы и возвращают ответы.
├── index.js       # Точка входа. Запускает сервер и подключает всё вместе.
├── config.js      # Конфигурация приложения. Переменные окружения и настройки.
└── Dockerfile     # Инструкция для сборки Docker-образа.
```

## 📌 Примечание по HEALTHCHECK

В `Dockerfile` закомментирована инструкция HEALTHCHECK. Она не используется, потому что управление проверками работоспособности (liveness и readiness probes) в Kubernetes выполняется через манифесты [Helm-чарта](https://github.com/Vitaliy-Yashin/products-deploy/tree/main/ChartProduct). Это позволяет гибко настраивать проверки без пересборки образа.

При локальном запуске через Docker Compose вы можете раскомментировать её, если требуется автоматический перезапуск контейнера при сбоях.

```dockerfile
HEALTHCHECK --interval=30s --timeout=2s --start-period=5s --retries=3 \
   CMD node -e "require('http').get('http://localhost:5000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
```

## 🚀 Быстрый старт

1.  **Клонировать репозиторий:**
```bash
git clone https://github.com/Vitaliy-Yashin/products-backend.git && cd products-backend
```    

2. **Собрать образ**
```bash
docker build -t product-backend:<version> .
```

3. **Запутисть контейнер с парметрами окружения**
CLI (docker run)
```bash
docker run -d -p 5000:5000 \
  -e DB_HOST=rc1b-...mdb.yandexcloud.net \
  -e DB_PORT=27018 \
  -e DB_NAME=products_db \
  -e DB_USER=admin \
  -e DB_PASSWORD=your_secure_password \
  -e DB_AUTH_SOURCE=admin \
  --name products-backend \
  products-backend:<version>
```

Docker Compose
```yaml
services:
  backend:
    container_name: products-backend
    restart: always
    ports:
      - "5000:5000"
    environment:
      DB_HOST: rc1b-...mdb.yandexcloud.net
      DB_PORT: 27018
      DB_NAME: products_db
      DB_USER: admin
      DB_PASSWORD: your_secure_password
      DB_AUTH_SOURCE: admin
```

```bash
docker-compose up -d
```


