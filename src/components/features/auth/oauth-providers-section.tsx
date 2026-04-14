import Discord from "@/components/icons/discord";
import Github from "@/components/icons/github";
import Google from "@/components/icons/google";
import type { MyIconProps } from "@/components/icons/icon-interface";
import { Button } from "@/components/ui";
import {
  signInWithDiscord,
  signInWithGithub,
  signInWithGoogle,
} from "@/lib/better-auth/actions";
import type { ComponentType } from "react";

type OAuthProvider = {
  id: string;
  label: string;
  Icon: ComponentType<MyIconProps>;
  buttonClassName: string;
};

const OAUTH_PROVIDERS: OAuthProvider[] = [
  {
    id: "google",
    label: "Continue with Google",
    Icon: Google,
    buttonClassName: "flex flex-1 bg-[#ededed]",
  },
  {
    id: "github",
    label: "Continue with GitHub",
    Icon: Github,
    buttonClassName: "flex flex-1 bg-[#ededed]",
  },
  {
    id: "discord",
    label: "Continue with Discord",
    Icon: Discord,
    buttonClassName: "flex flex-1 bg-[#5764f2]",
  },
];

export function OAuthProvidersSection() {
  const handleSignInWithProvider = async (providerId: string) => {
    switch (providerId) {
      case "google":
        await signInWithGoogle();
        break;
      case "github":
        await signInWithGithub();
        break;
      case "discord":
        await signInWithDiscord();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-8">
      <div
        className="flex w-full items-center justify-center"
        role="presentation"
      >
        <span className="w-full h-px bg-border" />
        <span className="text-muted-foreground text-base px-3 shrink-0">
          OR
        </span>
        <span className="w-full h-px bg-border" />
      </div>
      <div className="flex w-full items-center justify-center gap-2.5">
        {OAUTH_PROVIDERS.map(({ id, label, Icon, buttonClassName }) => (
          <Button
            key={id}
            type="button"
            variant="onlyIcon"
            size="icon"
            className={buttonClassName}
            aria-label={label}
            onClick={() => handleSignInWithProvider(id)}
          >
            <Icon className="shrink-0 size-6" aria-hidden />
          </Button>
        ))}
      </div>
    </div>
  );
}
