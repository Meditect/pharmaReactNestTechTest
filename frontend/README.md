# 💊 Frontend – Pharmacy Management App

## 🎯 Objectif

Cette application frontend React permet de gérer des **médicaments** via une API REST (NestJS).

Elle démontre :
- la maîtrise de **React (hooks)**
- la gestion des données avec **TanStack Query**
- une bonne structuration du code
- l’interaction avec une API backend

> 🎨 Le design n’est pas évalué.  
> ✅ La lisibilité, la simplicité et le fonctionnement sont prioritaires.

---

## ⏱ Temps recommandé

⏳ **1 heure maximum**

---

## 🧱 Stack technique

- **React 19**
- **Vite**
- **TypeScript**
- **@tanstack/react-query**
- Fetch API

---

## ⚙️ Prérequis

- Node.js ≥ 18
- Backend NestJS disponible sur `http://localhost:8080`

---

## 📂 Structure du projet

```
src/
├── api/              # Appels API
│   └── medicines.ts
├── components/       # Composants UI
│   └── MedicineForm.tsx
├── pages/            # Pages
│   └── MedicinesPage.tsx
├── types/            # Types TypeScript
│   └── medicine.ts
├── App.tsx
├── main.tsx
```
--- 

## ✅ Fonctionnalités
### ✔️ Liste des médicaments

- Appel `GET /medicines`
- Affichage du chargement
- Gestion d’erreur basique
- Affichage de la liste

---

### ✔️ Création d’un médicament

- Formulaire avec :
  - nom
  - prix (> 0)
  - stock (≥ 0)

- Validation minimale côté frontend
- Appel `POST /medicines`
- Rafraîchissement automatique de la liste

---

### ✔️ Modification d’un médicament

- Édition via formulaire (inline ou dédié)
- Appel `PUT /medicines/:id`
- Rafraîchissement de la liste après succès

---

### ✔️ Suppression d’un médicament

- Bouton de suppression
- Confirmation simple
- Appel `DELETE /medicines/:id`
- Mise à jour immédiate de la liste

--- 

## ▶️ Installation et lancement
```bash
npm install
npm run dev
```
Application accessible sur :
`http://localhost:5173`

---

## ⭐ Améliorations possibles (optionnelles)

- Mise à jour optimiste
- Pagination
- Recherche / filtre
- Gestion globale des erreurs
- Tests frontend
- Design system minimal

--- 

## ✅ Critères d’évaluation

- Fonctionnalités complètes (CRUD)
- Utilisation correcte des hooks
- Interaction API propre
- Code clair et maintenable
- Bonne séparation des responsabilités
