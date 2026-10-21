# Edet Profix Bygg

En flerspråkig webbplats för Edet Profix Bygg, byggd med React, TypeScript,
TanStack Start, Vite och Tailwind CSS. Webbplatsen innehåller en startsida,
projektgalleri och lokala översättningar på svenska, engelska, arabiska, danska
och serbokroatiska.

## Kom igång

Kräver Node.js 22.12 eller senare.

```sh
npm install
npm run dev
```

Öppna adressen som Vite skriver ut i terminalen. Normalt är det
`http://localhost:5173`.

## Kontrollera och bygg

```sh
npm run lint
npm run build
npm run preview
```

Produktionsbygget skapar en Cloudflare-kompatibel serverbuild med Nitro.

## Projektstruktur

- `src/routes/` innehåller startsidan och galleriet.
- `src/lib/site-translations.ts` innehåller webbplatsens översättningar.
- `public/images/` innehåller webbplatsens lokala bilder.
