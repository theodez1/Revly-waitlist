import { LandingPage } from "./page.client";

// Version simplifiée sans dépendances externes
export default async function Home() {
  // Nombre de personnes inscrites par défaut (vous pourrez le récupérer depuis Notion plus tard)
  const waitlistPeople = 0;

  return <LandingPage waitlistPeople={waitlistPeople} />;
}
