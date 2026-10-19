import type { ReactNode } from "react";

// Admin authentication and role guard are added in Phase 3, before admin pages.
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <section data-area="admin">{children}</section>;
}
