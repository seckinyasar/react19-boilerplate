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

const signOut = async () => {
  await authClient.signOut();
};

export { signInWithGoogle, signOut };
