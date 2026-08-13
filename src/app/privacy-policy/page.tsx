import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Easy To Europe",
  description: "Read Easy To Europe's privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
