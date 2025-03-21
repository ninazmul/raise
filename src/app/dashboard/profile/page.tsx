import { lusitana } from "@/ui/fonts";
import UpdateProfileForm from "@/ui/profile-settings/update-profile-form";
import UpdatePasswordForm from "@/ui/profile-settings/update-password-form";
import UpdateEmailForm from "@/ui/profile-settings/update-email-form";

export default function Profile() {
  return (
    <main className="space-y-8 bg-gray-50 text-gray-800 p-6 md:p-12">
      <header className="flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Profile Settings</h1>
      </header>

      <section className="flex flex-wrap gap-6">
        <UpdateProfileForm />
        <UpdatePasswordForm />
        <UpdateEmailForm />
      </section>
    </main>
  );
}
