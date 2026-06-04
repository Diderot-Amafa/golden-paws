# Déploiement sur GitHub Pages

## Étape 1 — Installer Git
Télécharger et installer : https://git-scm.com/download/win

## Étape 2 — Créer un dépôt GitHub
1. Aller sur https://github.com/new
2. Nom du dépôt : `golden-paws`
3. Visibilité : **Public** (requis pour GitHub Pages gratuit)
4. Ne pas initialiser avec README
5. Cliquer "Create repository"

## Étape 3 — Pousser le site (commandes PowerShell)
```powershell
cd C:\Users\lion\golden-paws
git init
git add .
git commit -m "feat: site Golden Paws"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/golden-paws.git
git push -u origin main
```

## Étape 4 — Activer GitHub Pages
1. Dans le dépôt GitHub → Settings → Pages
2. Source : **Deploy from a branch**
3. Branch : `main` / `/ (root)`
4. Cliquer Save
5. Votre site sera en ligne sur : `https://VOTRE-USERNAME.github.io/golden-paws`

## Personnalisation importante
Dans `js/main.js` ligne 4 — remplacer le numéro WhatsApp :
```js
const WA_NUMBER = '33600000000'; // ← Votre vrai numéro (format: code pays + numéro sans +)
```
Exemple pour +33 6 12 34 56 78 → `'33612345678'`
