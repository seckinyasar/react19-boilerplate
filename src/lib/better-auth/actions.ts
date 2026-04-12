import { authClient } from "@/lib/better-auth/auth-client";

const signInWithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/forms",
    errorCallbackURL: "/forms",
    newUserCallbackURL: "/forms",
    disableRedirect: false,
  });
};

const signInWithGithub = async () => {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/forms",
    errorCallbackURL: "/forms",
    newUserCallbackURL: "/forms",
    disableRedirect: false,
  });
};

const signInWithDiscord = async () => {
  await authClient.signIn.social({
    provider: "discord",
    callbackURL: "/forms",
    errorCallbackURL: "/forms",
    newUserCallbackURL: "/forms",
    disableRedirect: false,
  });
};

const signOut = async () => {
  await authClient.signOut();
};

export { signInWithDiscord, signInWithGithub, signInWithGoogle, signOut };
