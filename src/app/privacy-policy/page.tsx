import type { Metadata } from "next";
import TextPage from "@/components/TextPage";

export const metadata: Metadata = { title: "Privacy Policy" };

// NOTE: placeholder copy — have this reviewed before launch.
export default function PrivacyPage() {
  return (
    <TextPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="We respect your privacy and only collect what we need to serve you well."
      sections={[
        {
          heading: "What we collect",
          body: <p>When you reserve a table, place an order or send an enquiry, we collect your name, phone number and any notes you share with us.</p>,
        },
        {
          heading: "How we use it",
          body: <p>We use these details only to confirm and fulfil your request. We do not sell your personal information.</p>,
        },
        {
          heading: "Contact",
          body: <p>To access or delete your information, speak to the team at any Earth Café location.</p>,
        },
      ]}
    />
  );
}
