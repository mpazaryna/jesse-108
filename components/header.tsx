export function Header() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">108 Sun Salutations</h1>
      <h2 className="text-2xl mb-8">for Jesse</h2>
      <div className="flex justify-center gap-4">
        <a
          href="https://kathleen.union.site/events/kathleen-roskos-jesse108-muscular-dystrophy-fundraiser"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Sign Up Link
        </a>
        <a
          href="/jesse108-promo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Download Flyer
        </a>
        <a
          href="https://mda.donordrive.com/index.cfm?fuseaction=donordrive.personalCampaign&participantID=76958"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Donate Now
        </a>
      </div>
    </div>
  )
} 