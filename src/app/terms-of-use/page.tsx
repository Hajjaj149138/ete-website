import type { Metadata } from "next";
import TermsOfUseClient from "./TermsOfUseClient";

export const metadata: Metadata = {
  title: "Terms of Use | Easy To Europe",
  description: "Read the terms and conditions for using Easy To Europe's website and consultancy services.",
  alternates: { canonical: "/terms-of-use" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TermsOfUseClient />;
}
