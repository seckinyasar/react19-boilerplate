'use client'
import { AuthEmailForm } from '@/components/features/auth/auth-email-form'
import { SessionInfoPanel } from '@/components/features/auth/session-info-panel'
import { sendMagicLink } from '@/lib/better-auth/actions'
import { authClient } from '@/lib/better-auth/auth-client'
import type { AuthEmailFormValues } from '@/lib/zodSchemas/formSchemas'
import { toast } from 'sonner'

function submitEmail({ email }: AuthEmailFormValues) {
  sendMagicLink({ email })
  toast('Magic link sent to your email', { description: email })
}

export default function Page() {
  const { data } = authClient.useSession()

  const showSessionPanel = Boolean(data?.user && data?.session)

  return (
    <main aria-label="Sign in or sign up" className="flex w-full min-h-screen justify-center text-foreground">
      <section
        aria-label="Email authentication form"
        className="mt-40 flex h-fit w-[1200px] items-stretch justify-center gap-10"
      >
        <div className="w-[400px] p-10">
          <AuthEmailForm title="Sign in / Sign up" emailInputId="email" onSubmitEmail={submitEmail} />
        </div>

        {showSessionPanel && data?.session && data.user ? (
          <SessionInfoPanel session={data.session} user={data.user} />
        ) : null}
      </section>
    </main>
  )
}
