 
Lumina is a premium, high-performance web application designed to be your ultimate digital sanctuary for knowledge management. Built with cutting-edge technologies, Lumina offers a seamless, beautiful, and secure experience for organizing and accessing your most important resources.

 <img width="1333" height="1247" alt="SCR-20260323-gxfe" src="https://github.com/user-attachments/assets/1eaad6e5-0b7c-4826-b7e7-3a1bebd2fc77" />


## ✨ Features

- **🎨 Exquisite Design**: A stunning, modern interface featuring glassmorphism, smooth micro-animations, and a curated dark-mode aesthetic.
- **🔐 Secure Authentication**: Robust user management powered by **NextAuth.js v5**, supporting secure credentials and session handling.
- **🚀 Advanced Workflows**: Automated onboarding and background processes utilizing **Upstash Workflow** and **QStash** for high reliability.
- **🖼️ Rich Media Support**: seamless image uploading and processing integrated with **ImageKit.io**.
- **⚡ High-Performance Database**: Blazing fast data access with **Neon PostgreSQL** and **Drizzle ORM** for type-safe queries.
- **🛡️ Rate Limiting & Protection**: Infrastructure-level security with **Upstash Redis** to ensure system stability.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Database**: [Drizzle ORM](https://orm.drizzle.team/) + [Neon (PostgreSQL)](https://neon.tech/)
- **Authentication**: [NextAuth.js v5](https://authjs.dev/)
- **Infrastructure**: [Upstash](https://upstash.com/) (Redis, QStash, Workflow)
- **Storage**: [ImageKit.io](https://imagekit.io/)
- **Formatting/Linting**: [Biome](https://biomejs.dev/)

---

## 🚀 Getting Started

Follow these steps to set up Lumina locally.

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (recommended)

### 2. Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```env
# Database
DATABASE_URL=your_neon_postgresql_url

# Authentication
AUTH_SECRET=your_next_auth_secret

# ImageKit
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_endpoint
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key

# Upstash (Redis & QStash)
UPSTASH_REDIS_URL=your_redis_url
UPSTASH_REDIS_TOKEN=your_redis_token
QSTASH_URL=your_qstash_url
QSTASH_TOKEN=your_qstash_token
QSTASH_CURRENT_SIGNING_KEY=your_signing_key
QSTASH_NEXT_SIGNING_KEY=your_next_signing_key

# External Services
RESEND_TOKEN=your_resend_api_key
NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000/api
```

### 3. Installation

```bash
pnpm install
```

### 4. Database Setup

Synchronize your database schema:

```bash
pnpm db:generate
pnpm db:migrate
```

### 5. Running the Application

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience Lumina.

---

## 📜 Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates an optimized production build.
- `pnpm start`: Runs the built application in production mode.
- `pnpm lint`: Runs ESLint and checks for code quality.
- `pnpm db:generate`: Generates database migration files.
- `pnpm db:migrate`: Applies migrations to the database.
- `pnpm db:studio`: Opens Drizzle Studio for visual database management.

---

## 🤝 Contributing

Lumina is built for the future of digital organization. If you'd like to contribute, please fork the repository and submit a pull request.

---

Built with ❤️ by Yahya Elmoshneb
