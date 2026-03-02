import { redirect } from "next/navigation";

const AdminHomePage = () => {
  redirect("/admin/users");
};

export default AdminHomePage;
