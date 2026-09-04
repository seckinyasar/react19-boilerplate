# React19 Boilerplate

**Boilerplate for React 19, Next.js 15, Tailwind CSS 4, and Motion** projects. [See versions below](#dependencies).

It is designed to kickstart my frontend tasks. It will be regularly updated with new components and features.

## Installation

1. Install dependencies:

```bash
 npm install
```

2. Run the development server:

```bash
 npm run dev
```

## To Contribute

Contributions that make this boilerplate more useful are always welcome.

### What can you contribute?

- **UI & styling** — New components, layouts, themes, and Tailwind CSS patterns
- **Animations & Motion** — Smooth transitions, interactive effects, and Motion-based experiences
- **Accessibility & UX** — Keyboard support, focus management, responsive behavior, and usability improvements
- **Reusable patterns** — Clean examples that can be adapted across different projects

### Contribution guidelines

- Keep components reusable and easy to customize
- Follow the existing Tailwind CSS and Motion setup
- Make sure new examples are responsive and accessible
- Keep the implementation focused and include a clear description in your pull request

## Required environment variables

Before starting the development server, copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

The environment variables used by the project are:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000

BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000

DATABASE_URL="postgresql://user:pass@ep-xxx-pooler.region.aws.neon.tech/neondb?sslmode=require"
DATABASE_URL_UNPOOLED="postgresql://user:pass@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret

# Optional: enables Better Auth Magic Link email delivery.
RESEND_API_KEY=your-resend-api-key
RESEND_FROM_EMAIL=your-verified-sender@example.com
```

`RESEND_API_KEY` and `RESEND_FROM_EMAIL` are only required when Magic Link email delivery is enabled.

## Dependencies

The project includes the following dependencies:

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-tabs": "^1.1.4",
    "@xyflow/react": "^12.6.0",
    "axios": "^1.9.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.487.0",
    "motion": "^12.12.1",
    "next": "^15.3.5",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.1.0",
    "tw-animate-css": "^1.2.5",
    "zod": "^3.24.2"
  }
}
```
