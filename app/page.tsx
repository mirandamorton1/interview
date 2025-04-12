"use client";

import Image from "next/image";
import { useState } from "react";
import Countries from "@/components/Countries";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
<div className="relative overflow-hidden min-h-screen bg-white">
{/* Left Globe */}
      <Image
        src="/globeImage.png"
        alt="Globe Left"
        width={360}
        height={427}
        className="absolute top-47 right-40 translate-x-1/2 -translate-y-1/2 z-0"
        />

      {/* Left Globe */}
      <Image
        src="/globeImage.png"
        alt="Left Globe"
        width={360}
        height={360}
        className="absolute top-47 left-40 -translate-x-1/2 -translate-y-1/2 z-0"
        />

      {/* Foreground Content */}
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <Countries search={search} />
    </div>
  );
}
