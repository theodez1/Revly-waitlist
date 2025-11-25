"use client";

import { useMemo, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-0">
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <Logo />
        <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E3A8A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E3A8A]" />
          </span>
          <p className="uppercase text-sm font-medium">
            BIENTOT DISPONIBLE !
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 max-w-4xl px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center leading-tight text-foreground drop-shadow-md [text-shadow:0_2px_18px_rgba(30,58,138,0.15)]">
          {isSuccess
            ? "Vous êtes sur la liste d'attente"
            : "Enregistrez et partagez vos plus belles sorties"}
        </h2>
        <div className="h-[3px] w-40 rounded-full bg-gradient-to-r from-transparent via-[#1E3A8A]/40 to-transparent" />
        <p className="text-base text-muted-foreground text-center max-w-md mt-2">
          {isSuccess
            ? "Inscription confirmée. Nous vous préviendrons au lancement."
            : "Pensé pour les passionnés de la route. Suivi GPS précis, stats avancées et découverte de spots et routes d'exception à partager avec vos véhicules."}
        </p>
      </div>
      <div id="email-form" className="flex flex-col items-center justify-center gap-2 w-full max-w-md px-4 md:px-0">
        <Form onSuccessChange={setIsSuccess} />
      </div>
      <div className="flex items-center justify-center gap-2 px-4 md:px-0">
        <People count={waitlistPeople} />
      </div>
      <Countdown period={new Date("2025-12-31")} />
    </div>
  );
}
