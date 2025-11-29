# Vue Supabase Auth

Проект для изучения Supabase с использованием Vue 3.

## Описание

Этот проект создан для изучения работы с Supabase в приложении на Vue 3. Проект демонстрирует базовую реализацию регистрации и авторизации пользователей с использованием Supabase Authentication.

## Технологии

- Vue 3
- Vite
- Supabase
- Vue Router
- Pinia

## Установка

### 1. Установка зависимостей

```bash
pnpm install
```

или

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Для получения этих значений:
1. Зарегистрируйтесь на [supabase.com](https://supabase.com)
2. Создайте новый проект
3. Перейдите в Settings → API
4. Скопируйте `Project URL` и `anon public` ключ

### 3. Запуск проекта

```bash
pnpm dev
```

или

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Доступные команды

- `pnpm dev` - запуск dev-сервера
- `pnpm build` - сборка для production
- `pnpm preview` - предпросмотр production сборки

## Цель проекта

Этот проект создан для изучения Supabase и интеграции Supabase Authentication с Vue 3.

## Лицензия

MIT
