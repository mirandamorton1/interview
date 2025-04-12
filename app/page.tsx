"use client";

import { useState } from "react";
import Countries from "@/components/Countries";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <SearchBar search={search} setSearch={setSearch} />
        <Countries />
      </div>
    </>
  );
}
