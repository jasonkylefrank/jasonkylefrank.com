"use client";
import { Analytics } from "@vercel/analytics/react";

// <Analytics /> has to run client-side, so this wrapper lets us encapsulate it
//  in a client component (so the main layout file does not have be a client component)
export default function AnalyticsWrapper() {
  return <Analytics />;
}
