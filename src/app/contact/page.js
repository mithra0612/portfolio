"use client";
import Contact from "@/components/contacts";
import CustomCursor from "@/components/CustomCursor";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
