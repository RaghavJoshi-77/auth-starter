-----

# Create Next Auth Starter

[](https://www.google.com/search?q=https://www.npmjs.com/package/create-next-auth-starter)
[](https://www.google.com/search?q=https://github.com/RaghavJoshi-77/auth-starter/blob/main/LICENSE)

A command-line tool to bootstrap a new Next.js project with a full authentication setup in seconds. It comes pre-configured with NextAuth.js, Drizzle ORM, and Neon Serverless Postgres.

-----

## Usage

Getting started is as simple as running one command. This will create a new directory, scaffold your project, and provide you with the next steps.

```bash
npx create-next-auth-starter my-app
```

That's it\! The CLI will handle the rest.

## ✨ Features

  * **Authentication Ready**: Secure, session-based authentication powered by **NextAuth.js (v4)**.
  * **Modern Tech Stack**: Built with the **Next.js 14 App Router**.
  * **Type-Safe Database ORM**: Includes **Drizzle ORM** for a lightweight, fast, and type-safe SQL experience.
  * **Serverless Database**: Ready to connect to **Neon**, a modern serverless PostgreSQL platform.
  * **OAuth Providers**: Pre-configured for Google and GitHub social logins.
  * **Styling**: **Tailwind CSS** for a utility-first CSS workflow.
  * **Developer Experience**: Written in **TypeScript** for robust, scalable code.

## 🚀 Tech Stack

| Category         | Technology                                             |
| ---------------- | ------------------------------------------------------ |
| **Framework** | [Next.js](https://nextjs.org/)                         |
| **Authentication**| [NextAuth.js](https://next-auth.js.org/)               |
| **ORM** | [Drizzle](https://orm.drizzle.team/)                   |
| **Database** | [Neon](https://neon.tech/) (Serverless Postgres)       |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/)               |
| **Language** | [TypeScript](https://www.typescriptlang.org/)          |

## ⚙️ Configuration (After Installation)

Once the CLI has created your project, follow these steps to get your development server running:

### 1\. Navigate to Your Project

```bash
cd my-app
```

### 2\. Set Up Environment Variables

Create a `.env` file in the root of your new project by copying the example file:

```bash
cp .env.example .env
```

Now, open the `.env` file and fill in the required values:

```env
# Database (Get this from your Neon project dashboard)
DATABASE_URL="postgres://user:password@host/dbname"

# GitHub OAuth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Generate a secret using: `openssl rand -hex 32`
```

### 3\. Install Dependencies

```bash
npm install
```

### 4\. Push Database Schema

This project uses Drizzle ORM. To push your schema (defined in the `/drizzle` folder) to your Neon database, run the following command:

```bash
npm run db:push
```

**Note**: You may need to add this script to your `package.json` if it doesn't exist:
`"db:push": "drizzle-kit push:pg"`

### 5\. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see your application running.

## Contributing

Contributions are welcome\! If you have a suggestion or find a bug, please fork the repo and create a pull request or open an issue.

## License

This project is distributed under the MIT License. See `LICENSE` for more information.

### Future plans for updates
1. Will try to implement Resend email service to handle email verifications.
2. will try to upgrade the ui 