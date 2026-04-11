import { signOut } from "@/lib/better-auth/actions";
import { formatExpiresAt, highResAvatarUrl } from "@/utils";
import Image from "next/image";
import { Button } from "../ui";

export function SessionInfoPanel({
  session,
  user,
}: {
  session: { token?: string | null; expiresAt?: Date | string | null };
  user: {
    name?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
  };
}) {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <aside
      aria-label="Current session"
      className="flex w-[400px] flex-col border border-border rounded-[20px] p-10"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight">Session</h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </div>
      <dl className="flex flex-col gap-4 text-base">
        <div>
          <dt className="text-muted-foreground mb-1">Expires</dt>
          <dd>
            {session.expiresAt != null
              ? formatExpiresAt(session.expiresAt)
              : "—"}
          </dd>
        </div>
      </dl>

      <dl className="flex flex-col gap-4 text-base mt-6">
        <div>
          <dt className="text-muted-foreground mb-1">Name</dt>
          <dd>{user.name ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground mb-1">Email</dt>
          <dd className="break-all">{user.email ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground mb-1">Email verified</dt>
          <dd>{user.emailVerified === true ? "Yes" : "No"}</dd>
        </div>
        <div>
          <dd>
            {user.image ? (
              <Image
                src={highResAvatarUrl(user.image)}
                alt={user.name ? `${user.name} profile photo` : "Profile photo"}
                width={128}
                height={128}
                quality={100}
                sizes="128px"
                className="h-[128px] w-[128px] rounded-full object-cover"
              />
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>
    </aside>
  );
}
