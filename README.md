# Revly — Landing d'attente

![Revly](/src/app/opengraph-image.png)

Revly est une application pensée pour les passionnés de la route : enregistrez vos sorties, analysez vos stats et partagez des spots et itinéraires d'exception.
Cette landing est construite avec Next.js 15 et Tailwind CSS.

## Fonctionnalités

- **Next.js 15**: Built with the latest features of the leading React framework for performance and developer experience.
- **Tailwind CSS & React**: Modern, responsive UI built with utility-first CSS and React components.
- **TypeScript**: Type safety for a more robust codebase.
- **Mode sombre forcé**: Design moderne avec effet de lueur bleue
- **Animations subtiles**: Animations au scroll sur les cards
- **Formulaire d'inscription**: Collecte d'emails pour la liste d'attente
- **One-Click Vercel Deploy**: Get your waitlist live in minutes.

## Développement en local

Pour lancer le projet sur votre machine locale :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/theodez1/Revly-waitlist.git
    cd Revly-waitlist
    ```

2.  **Installer les dépendances :**
    Ce projet utilise `pnpm` comme gestionnaire de paquets.
    ```bash
    pnpm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    pnpm dev
    ```
    Votre application sera accessible sur `http://localhost:3000`.

4.  **Build de production :**
    ```bash
    pnpm build
    pnpm start
    ```

## Déploiement sur Vercel

Le déploiement est automatique dès que vous poussez sur GitHub :

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js et configurera le build
3. Votre site sera déployé en quelques minutes

## Structure du projet

```
├── src/
│   ├── app/              # Pages et layouts Next.js 15 (App Router)
│   │   ├── api/          # API routes (mail, notion)
│   │   ├── layout.tsx    # Layout racine avec métadonnées
│   │   └── page.tsx      # Page d'accueil
│   ├── components/       # Composants React
│   │   ├── form.tsx      # Formulaire d'inscription
│   │   ├── hero.tsx      # Section hero
│   │   ├── value-props.tsx # Présentation des fonctionnalités
│   │   ├── faq.tsx       # Section FAQ
│   │   └── final-cta.tsx # Appel à l'action final
│   └── lib/              # Utilitaires
├── public/               # Assets statiques (favicon, images)
└── tailwind.config.ts    # Configuration Tailwind
```

## Intégrations futures (optionnel)

Vous pouvez facilement ajouter :
- **Notion** : Pour stocker les inscriptions
- **Resend** : Pour envoyer des emails de confirmation
- **Upstash Redis** : Pour le rate limiting

## Licence

Ce projet est open-source sous licence MIT. Libre à vous de l'utiliser, le modifier et le distribuer.

## Support

Une suggestion ou un bug ? Ouvrez une issue sur GitHub. Les contributions sont bienvenues !
