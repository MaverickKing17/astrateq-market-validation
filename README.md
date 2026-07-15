# Astrateq Gadgets Driver Awareness Simulator

A state-of-the-art speculative concept validator for privacy-first, offline-only driver awareness evaluation. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion/react**.

---

## 📱 Concept Overview

**Astrateq Gadgets Driver** is a speculative mobile application concept designed to calculate driver alertness and safety margins without relying on invasive physical bio-tracking, cabin cameras, or cloud telemetry. Instead, the application runs **100% offline** on-device, leveraging local heuristic question models to evaluate risk trends based on sleep, driving duration, environmental factors, and scheduled rest breaks.

This web application serves as a **interactive prototype and interest validator** to assess community demand for such a tool.

---

## ✨ Core Interactive Features

### 1. The 60-Second Driver Awareness Simulation
- **Interactive Question Flow**: Answer simple, research-backed situational and behavioral questions (e.g., hours behind the wheel, sleep duration, rest breaks, environmental factors, and current time).
- **Dynamic Heuristic Engine**: Simulates how the local app's offline algorithms would weigh inputs to generate a unified **Driver Awareness Score**.

### 2. High-Contrast Conceptual Dashboard
- **Score Gauge**: An elegant, gradient-filled circular indicator visualizing the final alertness status (e.g., **81 - Good**).
- **Glassmorphic Metrics Cards**: Clear, high-contrast, and highly readable status cards representing individual safety indexes:
  - **Fatigue Risk**: Physical and mental fatigue accumulation risk level.
  - **Attention Stability**: Estimated focus persistence scale.
  - **Cognitive Load**: Heuristic task stress and alertness load.
  - **Environmental Factor**: Contextual driving difficulty multiplier.

### 3. Community Referral & Reward Program
- **Dynamic Tier Tracker**: Earn premium tier levels (e.g., *Alpha Contributor*, *Beta Pioneer*, *Astrateq Cohort*) based on referral counts.
- **Unique Shareable Invites**: Interactive share system with copy-to-clipboard invite links.

---

## 🛠️ Tech Stack & Design Architecture

- **Frontend Core**: React 18 & TypeScript for strict type-safe state handling and robust component modularity.
- **Styling**: Tailwind CSS with custom variables, optimized for high-contrast dark-mode typography and premium frosted-glass (glassmorphism) overlays.
- **Animations**: Fluid micro-interactions, spring physics transitions, and staggered list layout entry using `motion/react`.
- **Graphics**: Built-in, light-weight, high-performance SVG vectors for active gauge rings and sparkline graphs, completely bypassing heavy external image requests.

---

## 🚀 Local Development Setup

To run the simulator locally, follow these simple steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build Production Assets**:
   ```bash
   npm run build
   ```

4. **Lint & Verify Code**:
   ```bash
   npm run lint
   ```

---

*Disclaimer: This simulator is a conceptual product mockup meant for market interest validation and behavioral research simulation. It is not linked to live automotive telemetry or active biometric safety gear.*
