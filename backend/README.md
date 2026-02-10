# 🧪 Backend Test – NestJS (Pharmacie)

## 🎯 Objectif

Créer une **API REST simple** permettant de gérer des **médicaments** pour une application de pharmacie.

Ce test vise à évaluer :
- la maîtrise de **NestJS**
- la structuration d’un **CRUD backend**
- la gestion des **règles métier**
- la **qualité et la lisibilité** du code

> ⚠️ Ce n’est pas un exercice d’optimisation.  
> Privilégiez un code **simple, clair et fonctionnel**.

---

## ⏱ Temps recommandé

⏳ **1 heure maximum**

---

## 🧱 Contexte métier

Un pharmacien doit pouvoir :
- consulter les médicaments
- ajouter un médicament
- modifier un médicament existant
- supprimer un médicament

---

## 🧬 Modèle de données

L’entité `Medicine` est fournie dans le projet.

```ts
@Entity()
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;
}
```
---

## ✅ Fonctionnalités OBLIGATOIRES

### 📌 Endpoints attendus
### 🔹 GET `/medicines`

- Retourne la liste des médicaments
- Code HTTP `200`
- Tableau vide si aucun médicament

---
### 🔹 POST `/medicines`

Crée un nouveau médicament.

#### Body attendu :
```json
{
"name": "Paracetamol",
"price": 1.5,
"stock": 100
}
```

#### Règles métier :

- `name` requis
- `price > 0`
- `stock >= 0`

#### Réponses :

- ✅ `201 Created`
- ❌ `400 Bad Request` si données invalides

---

### 🔹 PUT `/medicines/:id`

Met à jour un médicament existant.

#### Règles métier :

- l’`id` doit exister
- mêmes validations que pour la création

#### Réponses :

- ✅ `200 OK`
- ❌ `404 Not Found` si le médicament n’existe pas
- ❌ `400 Bad Request` si données invalides

---

### 🔹 DELETE `/medicines/:id`

Supprime un médicament.

#### Réponses :

✅ `204 No Content`
❌ `404 Not Found` si le médicament n’existe pas

---

## ✅ Contraintes techniques

- NestJS
- Validation avec class-validator
- Gestion correcte des erreurs HTTP
- Logique métier dans le service, pas dans le controller

---

## ⭐ Fonctionnalités OPTIONNELLES (bonus)
Ces points sont facultatifs, mais valorisés :

- Pagination et tri sur `GET /medicines`
- DTOs distincts (`CreateMedicineDto`, `UpdateMedicineDto`)
- Tests unitaires ou e2e simples
- Gestion d’erreurs centralisée

---

## ▶️ Lancer le projet
```
npm install
npm run start:dev
API disponible sur :
http://localhost:8080
```

---

## 🧪 Tester l’API
`curl http://localhost:8080/medicines`

---

## 🔄 Commits attendus

Merci de travailler avec plusieurs commits clairs, par exemple :

- `backend: setup medicines CRUD`
- `backend: add validation rules`
- `backend: handle not found errors`
- `backend: add optional features`

---

## ✅ Ce qui est évalué

- Fonctionnalité du CRUD
- Respect des règles métier
- Qualité du code
- Structure NestJS
- Clarté des commits

---

## 🏁 Livraison

- Repository GitHub forké
- Code fonctionnel

--- 
## 💡 N’essayez pas d’en faire trop.

Un CRUD propre et fonctionnel est préférable à une solution complexe mais incomplète.

Bonne chance 🚀