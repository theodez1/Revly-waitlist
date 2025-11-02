import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-10 px-4 md:px-0">
            <div className="flex flex-col items-center justify-center gap-2 max-w-md">
                <h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
                    FAQ
                </h2>
                <p className="sm:text-base text-sm text-muted-foreground text-center">
                    Pensé pour les passionnés de la route: tracking, stats et partage de spots.
                </p>
            </div>
            <div className="w-full max-w-lg">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-4"
                >
                    <AccordionItem value="q1">
                        <AccordionTrigger className="hover:no-underline">
                            Revly fonctionne-t-il sans connexion internet ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Oui. Le tracking s’exécute en local et continue en arrière-plan. Les cartes en ligne ne sont pas nécessaires pour enregistrer vos runs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                        <AccordionTrigger className="hover:no-underline">
                            La batterie souffre-t‑elle pendant un run ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Nous optimisons les fréquences GPS et la logique en arrière-plan. Prévoyez néanmoins que tout suivi GPS continu consomme davantage.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                        <AccordionTrigger className="hover:no-underline">
                            Mes données quittent-elles mon téléphone ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Non, par défaut les trajets et le profil sont stockés en local (AsyncStorage). Une synchronisation cloud pourra arriver plus tard.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q4">
                        <AccordionTrigger className="hover:no-underline">
                            Puis-je enregistrer différents véhicules ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Oui. Créez/enregistrez vos véhicules (nom, type, photo) et définissez un favori.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5">
                        <AccordionTrigger className="hover:no-underline">
                            Que mesurent les « virages » et la « fluidité » ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Les virages sont détectés via les changements d’orientation. La fluidité reflète la régularité de votre vitesse.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6">
                        <AccordionTrigger className="hover:no-underline">
                            Puis-je exporter mes runs ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            L’export GPX est prévu dans la roadmap.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q7">
                        <AccordionTrigger className="hover:no-underline">
                            Revly est-il compatible Android et iOS ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Oui, l’application est pensée pour iOS et Android.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q8">
                        <AccordionTrigger className="hover:no-underline">
                            Quel type de véhicule peut utiliser Revly ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Revly s'adapte à tous les types de véhicules : voiture, moto, scooter, 4x4 ou autre. Vous pouvez choisir le type de véhicule lors de l'enregistrement d'un trajet.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
