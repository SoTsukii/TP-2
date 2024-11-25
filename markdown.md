Solal Ribezzo

### 1. Requête GET sur les comments
#### Objectif
Cette requête récupère tous les commentaires disponibles dans l'API.

#### Explication
- `fetch()` est utilisé pour effectuer une requête GET sur l'URL spécifiée.
- `response.json()` : la réponse est ensuite convertie au format JSON.
- `console.log()` affiche le résultat dans la console.
- `catch()` permet de gérer les erreurs s'il y en a.

### 2. Requête POST sur les todos
#### Objectif
Cette requête envoie des données à l'API pour créer une nouvelle tâche (todo).

#### Explication
- `fetch()` est utilisé avec la méthode `POST` pour envoyer des données à l'API.
- Les en-têtes spécifient que le contenu est au format `x-www-form-urlencoded`.
- `body: new URLSearchParams()` convertit les données du corps de la requête en paramètres d'URL encodés.
- Le `response.json()` transforme la réponse en JSON pour affichage.

### 3. Requête PATCH sur les posts
#### Objectif
Cette requête modifie le titre et le contenu d'un post existant.

#### Explication
- `method: 'PATCH'` indique que l'on modifie partiellement une ressource existante.
- `body: JSON.stringify()` transforme les données envoyées en JSON.
- La réponse est ensuite analysée avec `response.json()`.

### 4. Requête GET sur les commentaires d'un post spécifique
#### Objectif
Cette requête récupère les commentaires associés à un post ayant un identifiant spécifique.

#### Explication
- L'URL inclut l'ID du post (dans ce cas, le post avec l'ID 1).
- La requête renvoie tous les commentaires associés à ce post.

### 5. Requête GET sur les photos de l'album 2
#### Objectif
Cette requête récupère toutes les photos associées à un album spécifique.

#### Explication
- L'URL fait référence à l'album 2, et la requête récupère toutes les photos liées à cet album.

---

