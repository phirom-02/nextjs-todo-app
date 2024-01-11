"use client";

import React from "react";
import ReduxProvider from "./ReduxProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <main className="flex-1 flex flex-col relative overflow-y-hidden">
        {children}
      </main>
    </ReduxProvider>
  );
}
