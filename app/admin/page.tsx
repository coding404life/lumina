import { redirect } from "next/navigation";

const AdminHomePage = () => {
  redirect("/admin/books/new");
};

export default AdminHomePage;
