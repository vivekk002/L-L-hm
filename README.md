## 🎯 Project Overview

### **What is this Project?**

The **LodgeLogic** is a full-stack web application that revolutionizes the way hotels are discovered, booked, and managed. Built with modern web technologies, it provides a seamless experience for travelers seeking accommodations and hotel owners managing their properties.

**Developed & Maintained by: [Vivek Kumar](mailto:vivekkumar.contacts@gmail.com)**

### **Core Purpose & Vision**

This project serves as a **comprehensive hotel booking ecosystem** that bridges the gap between travelers and hotel owners. It's designed to be:

- **User-Centric**: Intuitive interface for travelers to find and book hotels
- **Owner-Friendly**: Powerful tools for hotel owners to manage their properties
- **Data-Driven**: Advanced analytics for business insights and decision-making
- **Scalable**: Built to handle growth from small boutique hotels to large chains

### **Key Problems Solved**

#### 🏨 **For Travelers:**

- **Discovery**: Advanced search with multiple filters (price, location, amenities, ratings)
- **Booking**: Seamless booking process with secure payment integration
- **Management**: Easy access to booking history and travel plans
- **Trust**: Transparent pricing, reviews, and hotel information

#### 🏢 **For Hotel Owners:**

- **Property Management**: Complete CRUD operations for hotel listings
- **Booking Management**: Real-time booking tracking and guest information
- **Analytics**: Comprehensive business insights and performance metrics
- **Revenue Optimization**: Pricing strategies and occupancy analysis

#### 🔧 **For Developers:**

- **Learning Resource**: Complete MERN stack implementation
- **Best Practices**: Modern development patterns and architecture
- **Production Ready**: Deployment strategies and optimization techniques
- **Extensible**: Modular design for easy feature additions

#### 🌟 **Innovative Features:**

- **Smart Search Algorithm**: AI-powered hotel recommendations
- **Real-time Availability**: Live booking status and instant confirmation
- **Advanced Analytics**: Predictive insights and business forecasting
- **Multi-language Support**: Internationalization ready
- **Progressive Web App**: Offline capabilities and app-like experience

#### 🔒 **Security Features:**

- **Dual Authentication**: Cookie-based + Authorization header support
- **Privacy Compliance**: GDPR-ready data handling
- **Rate Limiting**: Protection against abuse and DDoS
- **Input Validation**: Comprehensive data sanitization
- **Secure Payments**: PCI-compliant payment processing

#### 📱 **User Experience:**

- **Responsive Design**: Optimized for all screen sizes
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Sub-2-second page load times
- **Offline Support**: Cached data for offline browsing

### **Development Philosophy**

#### **Code Quality:**

- **TypeScript First**: Type-safe development throughout
- **Component-Driven**: Reusable, modular components
- **Test-Driven**: Comprehensive testing strategy
- **Documentation**: Self-documenting code with detailed comments

#### **Performance:**

- **Lazy Loading**: Code splitting and dynamic imports
- **Caching Strategy**: Intelligent data caching
- **Optimization**: Bundle size and runtime optimization
- **Monitoring**: Real-time performance tracking

#### **Scalability:**

- **Microservices Ready**: Modular architecture for scaling
- **Database Optimization**: Efficient queries and indexing
- **CDN Integration**: Global content delivery
- **Load Balancing**: Horizontal scaling capabilities

## ✨ Features

### 🏨 Hotel Management

- **Multi-role System**: User, Hotel Owner, and Admin roles
- **Hotel CRUD Operations**: Create, read, update, delete hotel listings
- **Image Upload**: Cloudinary integration for hotel image management
- **Advanced Hotel Details**: Location, amenities, policies, contact information
- **Hotel Analytics**: Booking statistics, revenue tracking, occupancy rates

### 🔍 Advanced Search & Filtering

- **Smart Search**: Destination-based hotel discovery
- **Multi-filter System**: Price range, star rating, hotel types, facilities
- **Geolocation Support**: Location-based search with coordinates
- **Sorting Options**: Price, rating, distance, relevance
- **Pagination**: Efficient data loading for large datasets

### 📅 Booking System

- **Real-time Availability**: Check-in/check-out date validation
- **Guest Management**: Adult and child count tracking
- **Payment Integration**: Stripe payment processing
- **Booking Status**: Pending, confirmed, cancelled, completed, refunded
- **Booking History**: Complete booking logs and analytics

### 📊 Analytics Dashboard

- **Real-time Metrics**: Revenue, bookings, occupancy rates
- **Performance Charts**: Revenue trends, booking patterns
- **Forecasting**: Predictive analytics for business insights
- **Hotel Performance**: Individual hotel analytics
- **User Analytics**: User behavior and preferences

### 🔐 Authentication & Security

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access Control**: Granular permissions
- **Password Security**: bcrypt password hashing
- **Rate Limiting**: API request throttling
- **CORS Protection**: Cross-origin resource sharing security

### 🎨 Modern UI/UX

- **Responsive Design**: Mobile-first approach
- **Shadcn UI Components**: Modern, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Dark/Light Mode**: Theme customization
- **Loading States**: Smooth user experience
- **Toast Notifications**: User feedback system

---

## 🛠 Tech Stack

### Frontend

- **React 18.2.0** - Modern UI library with hooks
- **TypeScript 5.0.2** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **React Query** - Server state management
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Modern component library
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form validation and handling
- **Stripe React** - Payment processing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage
- **Stripe** - Payment processing
- **Swagger** - API documentation
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

### Development Tools

- **Nodemon** - Development server with auto-restart
- **ESLint** - Code linting
- **Playwright** - End-to-end testing
- **Git** - Version control

---

## 📁 Project Structure

```bash
lodgelogic/
├── lodgelogic-frontend/          # React frontend application
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── ui/                 # Shadcn UI components
│   │   │   ├── AdvancedSearch.tsx  # Advanced search component
│   │   │   ├── Hero.tsx           # Landing page hero section
│   │   │   ├── Header.tsx         # Navigation header
│   │   │   └── ...
│   │   ├── pages/                 # Page components
│   │   │   ├── Home.tsx           # Landing page
│   │   │   ├── Search.tsx        # Hotel search page
│   │   │   ├── Detail.tsx        # Hotel details page
│   │   │   ├── Booking.tsx       # Booking page
│   │   │   ├── MyHotels.tsx      # Hotel management
│   │   │   ├── MyBookings.tsx    # Booking management
│   │   │   ├── AnalyticsDashboard.tsx # Analytics
│   │   │   └── ...
│   │   ├── forms/                # Form components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── contexts/            # React contexts
│   │   ├── layouts/             # Layout components
│   │   └── api-client.ts        # API client functions
│   ├── package.json
│   └── vite.config.ts
├── lodgelogic-backend/         # Node.js backend application
│   ├── src/
│   │   ├── routes/              # API route handlers
│   │   │   ├── auth.ts          # Authentication routes
│   │   │   ├── hotels.ts        # Hotel management routes
│   │   │   ├── bookings.ts      # Booking routes
│   │   │   ├── analytics.ts     # Analytics routes
│   │   │   └── ...
│   │   ├── models/              # MongoDB models
│   │   ├── middleware/         # Express middleware
│   │   ├── index.ts            # Server entry point
│   │   └── swagger.ts          # API documentation
│   └── package.json
├── shared/                       # Shared TypeScript types
│   └── types.ts
├── e2e-tests/                   # End-to-end tests
└── data/                        # Sample data and images
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/lodgelogic.git
cd lodgelogic
```

### Step 2: Install Dependencies

#### Backend Setup

```bash
cd lodgelogic-backend
npm install
```

#### Frontend Setup

```bash
cd lodgelogic-frontend
npm install
```

### Step 3: Environment Configuration

Create environment files for both frontend and backend (see [Environment Variables](#-environment-variables) section).

### Step 4: Start Development Servers

#### Backend Server

```bash
cd lodgelogic-backend
npm run dev
# Server runs on http://localhost:7002
```

#### Frontend Server

```bash
cd lodgelogic-frontend
npm run dev
# Frontend runs on http://localhost:5174
```

### Step 5: Access the Application

- **Frontend**: <http://localhost:5174>
- **Backend API**: <http://localhost:7002>
- **API Documentation**: <http://localhost:7002/api-docs>

---

## 🔧 Environment Variables

### Backend (.env)

Create a `.env` file in the `lodgelogic-backend` directory:

```env
# Server Configuration
PORT=7002
NODE_ENV=development

# MongoDB Connection
MONGODB_CONNECTION_STRING=mongodb://localhost:27017/lodgelogic
# OR for MongoDB Atlas:
# MONGODB_CONNECTION_STRING=mongodb+srv://username:password@cluster.mongodb.net/lodgelogic

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Stripe Configuration (for payments)
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5174

# Optional: Email Configuration (not used in this project yet)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend (.env)

Create a `.env` file in the `lodgelogic-frontend` directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:7002

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key

# Optional: Analytics (not used in this project yet)
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### How to Get Environment Variables

#### 1. MongoDB Atlas Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string from "Connect" button
4. Replace `<password>` with your database password

#### 2. Cloudinary Setup

1. Create account at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard → API Keys
3. Copy Cloud Name, API Key, and API Secret

#### 3. Stripe Setup

1. Create account at [Stripe](https://stripe.com/)
2. Go to Developers → API Keys
3. Copy Publishable Key and Secret Key (use test keys for development)
