## Imaginify | GenAI Image Processing SaaS Platform 🖼️✨

## Overview 📝  
**Imaginify** is a powerful AI-driven image processing platform that offers advanced image restoration, recoloring, object removal, generative fill, and background removal. Users can securely authenticate, manage their image transformations using a credit-based system, and leverage efficient image storage and search functionalities.


## 📋 Table of Contents

- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
- [🕸️ Snippets](#️-snippets)
- [🔗 Links](#-links)
- [🚀 More](#-more)
- [🚨 Tutorial](#-tutorial)
---

## ⚙️ Tech Stack

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: Clerk
- **Image Processing**: Cloudinary
- **Payments**: Stripe
- **UI Components**: Shadcn

---

## 🔋 Features

- **Authentication and Authorization**: Secure user access with registration, login, and route protection.
- **Community Image Showcase**: Explore user transformations with easy navigation using pagination.
- **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately.
- **Image Restoration**: Revive old or damaged images effortlessly.
- **Image Recoloring**: Customize images by replacing objects with desired colors easily.
- **Image Generative Fill**: Fill in missing areas of images seamlessly.
- **Object Removal**: Clean up images by removing unwanted objects with precision.
- **Background Removal**: Extract objects from backgrounds with ease.
- **Download Transformed Images**: Save and share AI-transformed images conveniently.
- **Transformed Image Details**: View details of transformations for each image.
- **Transformation Management**: Control over deletion and updates of transformations.
- **Credits System**: Earn or purchase credits for image transformations.
- **Profile Page**: Access transformed images and credit information personally.
- **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use.
- **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface.

---

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

## Prerequisites

Make sure you have the following installed on your machine:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

## Cloning the Repository

```bash
git clone https://github.com/rizz778/imaginify.git
cd imaginify

## Installation
```bash
   npm run dev

## Environment Variables
```bash

NEXT_PUBLIC_SERVER_URL=
MONGODB_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
