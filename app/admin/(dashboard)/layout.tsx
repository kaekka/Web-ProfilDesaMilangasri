import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-surface-container-lowest">
      <AdminSidebar />
      <main className="flex-1 lg:ml-0 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  );
}
