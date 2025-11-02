export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 pb-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Revly — Tous droits réservés
      </p>
    </footer>
  );
}
