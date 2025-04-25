# BMC Electrical Website

A modern, responsive website for BMC Electrical services, built with Next.js and Tailwind CSS.

## Features

- Modern UI with responsive design
- Service showcase
- Online quote requests
- Newsletter subscription
- Contact form
- Dark/Light theme support
- Service area lookup

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Prerequisites

- Node.js 20.x
- npm or yarn
- Supabase account
- SendGrid account (for email functionality)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_from_email
TO_EMAIL=your_to_email
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/champions-platform.git
cd champions-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the platform.

## Database Setup

The project uses Supabase as the database. The migration files are located in the `supabase/migrations` directory.

## Building for Production

```bash
npm run build
```

## License

MIT License - See LICENSE file for details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request