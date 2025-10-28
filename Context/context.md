You are an expert Next.js 14 and Tailwind CSS developer.

Build a fully responsive, production-ready website for **Won Mart Pvt Ltd**, the **Sole Distributor in Sri Lanka of the Food Products of Nongshim Korea**.  
The company imports and distributes **Korean Shin Ramen Noodles** and other food products from **Nongshim Company, Korea**.

### Project Requirements:
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Font: Use a clean, modern font family like **"Inter"** or **"Poppins"**
- Color palette:
  - Red: `#E6001E` (primary brand color)
  - Black: `#000000`
  - Gray: `#F5F5F5`
  - Food Green: `#2E8B57`
  - White: `#FFFFFF`

### Page Structure:
1. **Landing Page (Home)**
   - Interactive hero section with company tagline:  
     “Sole Distributor in Sri Lanka of Nongshim Korea Food Products.”
   - Background animation or subtle motion (e.g., noodles steam or product fade-in)
   - “Shop Now” or “Explore Products” call-to-action button
   - Section showing company’s partnership with Nongshim Korea
   - Footer with social media links, company address, and copyright

2. **About Page**
   - Company history and mission
   - Section showing collaboration with Nongshim Korea
   - Clean layout with alternating image and text sections

3. **Products Page**
   - Display each product using a **reusable ProductTile component**
   - ProductTile component should include:
     - Product image
     - Product name
     - Short description
     - “Learn More” or “Buy Now” button
   - Responsive grid layout (2–4 columns based on screen size)

4. **Contact Us Page**
   - Contact form (name, email, message)
   - Embedded Google Map (optional)
   - Company contact details and location in Sri Lanka

### Reusable Components:
- `Navbar` → contains “Home”, “About”, “Products”, “Contact Us”
- `Footer` → with copyright and quick links
- `HeroSection`
- `ProductTile`
- `SectionTitle`
- `Button`
- `ContactForm`

### Design Guidelines:
- Use Tailwind utility classes for all styling
- Add smooth animations using Framer Motion
- Maintain consistent padding and spacing (use Tailwind’s spacing scale)
- Implement dark text on light backgrounds and highlight accents in #E6001E
- Ensure full mobile responsiveness (flex/grid layouts)

### Deliverables:
- Modular folder structure under `/components` for reusable UI
- Pages under `/app` directory: `page.tsx`, `about/page.tsx`, `products/page.tsx`, `contact/page.tsx`
- Include meta tags and SEO-friendly titles
- Add favicon and brand logo placeholder

Generate clean, well-commented code ready for deployment.
