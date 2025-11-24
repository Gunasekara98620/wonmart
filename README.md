# Won Mart (Pvt) Ltd - Nongshim Korea Food Products

This is a [Next.js](https://nextjs.org/) project for Won Mart (Pvt) Ltd, the sole distributor in Sri Lanka of food products from Nongshim Korea.

## Features

- Responsive design using Tailwind CSS
- Modern UI with animations and transitions
- Product catalog with detailed product pages
- Contact form with validation
- SEO optimized pages
- Mobile-friendly navigation

## Technologies Used

- [Next.js 14](https://nextjs.org/) with App Router
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [React](https://reactjs.org/) for UI components

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── products/     # Products page and dynamic routes
│   │   ├── layout.tsx    # Root layout with Navbar and Footer
│   │   ├── page.tsx      # Home page
│   │   └── ...
│   ├── components/       # Reusable UI components
│   ├── data/             # Static data files
│   └── ...
├── public/               # Static assets
└── ...
```

## Deployment

To build the application for production:

```bash
npm run build
```

To export the application as static files:

```bash
npm run build
```

The exported files will be in the `out` directory, ready for deployment to any static hosting service.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!