# StoryBeyond

A clean, minimal one-page website for StoryBeyond digital agency.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- Static site generation (optimized for Vercel)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This creates a static export in the `out` directory, ready for deployment on Vercel or any static hosting service.

## Deployment

The site is configured for static export and can be deployed directly to Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page combining all sections
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── WhatIHelpWith.tsx
│   ├── HowItWorks.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/             # Static assets (if needed)
```

## Customization

All content is easily editable in the component files. The placeholder copy can be updated to match your specific needs.
