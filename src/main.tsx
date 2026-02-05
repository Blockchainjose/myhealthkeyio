import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import { PostHogProvider } from "@posthog/react";
import App from "./App.tsx";
import "./index.css";

// Extend window type for PostHog
declare global {
  interface Window {
    posthog?: typeof posthog;
  }
}

// Initialize PostHog only if the API key exists
const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: "https://us.i.posthog.com",  // Change to eu if your org is in EU
    defaults: '2025-11-30',
    person_profiles: "identified_only",
    
    // Pageview and pageleave tracking
    capture_pageview: true,
    capture_pageleave: true,  // Includes scroll depth
    
    // Autocapture
    autocapture: true,
  });
  
  // Make posthog available globally for debugging
  window.posthog = posthog;
}

createRoot(document.getElementById("root")!).render(
  posthogKey ? (
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  ) : (
    <App />
  )
);