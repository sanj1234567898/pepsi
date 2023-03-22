import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={"main"}>
      <section>{children}</section>
    </main>
  );
}
