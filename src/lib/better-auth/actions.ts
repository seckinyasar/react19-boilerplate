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

//? idk we can get error this way.
const sendMagicLink = async ({ email }: { email: string }) => {
  await authClient.signIn.magicLink({
    email: email,
    callbackURL: "/forms",
  });
};

const signOut = async () => {
  await authClient.signOut();
};

export {
  sendMagicLink,
  signInWithDiscord,
  signInWithGithub,
  signInWithGoogle,
  signOut,
};
