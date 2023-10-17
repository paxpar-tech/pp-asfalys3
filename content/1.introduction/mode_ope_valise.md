# Mode Opératoire Valise

![Schema](/mode_op_valise.png)

Pour un projet comprenant 4 entreprises,
la valise va contenir au final plusieurs dizaines de documents.
Ces documents doivent être rédigés et signés par différentes parties.
Nous allons décrire le fonctionnement de la plateforme
selon les points de vue des différents acteurs.

Voici les personnes concernées:
* chef de projet 👨
* responsable entreprise 1 🤵
* responsable entreprise 2 👩
* responsable entreprise 3 🧔
* responsable entreprise 4 👷
* reponsable maintenance entreprise 4 🤠
* client final 🥸

## Actions Chef de projet

Voici les étapes pour le chef de projet:

* 👨 se connecte à la plateforme avec son adresse de courriel
* il amorce la création d'un nouveau document de type valise AMOA
* la plateforme lui demande de déposer les documents nécessaires : valise 1, 2 et 3
* il dispose des documents valises pour les entreprises 1, 2 et 3, mais pas pour l'entreprise 4
  
  il dépose les PDF valise des entreprises 1, 2 et 3
* il dépose le PDF du cahier des charges
* il ne dispose pas du PDF valise pour l'entreprise 4

  il va faire une demande de document
* il clique sur le bouton "demande de documents" :
  
  il choisit le type de document à demander : valise
  
  il indique l'addresse de courriel du responsable de l'entreprise 4
  
  il valide la demande
* la plateforme envoie la demande au responsable de l'entreprise 4
* ...
* il reçoit une notification lui indiquant que le document PDF valise de l'entreprise 4 a été signé
* il constate que les documents demandés sont bien présents dans la valise en cours de rédaction
* il effectue une vérification de la valise et constate que tout est OK
* il finalise et signe
* le document PDF signé est téléchargé
* il reçoit par courriel une copie originale du document signé 
* fin des actions



## Actions Resp. entreprise 4

* 👷 reçoit un courriel de la plateforme `asfalys.document.legal` lui demandant de rédiger un document valise
* il clique sur le lien présent dans le courriel
* il arrive sur la plateforme `asfalys.document.legal`
* il est automatiquement authentifié (via le courriel)
* le formulaire de saisir s'affiche
* 📄 il dépose les documents nécessaires:
  * 📄 Attestation URSSAF
  * 📄 Attestation assurance
  * 📄 Kbis 
  * 📄 passeport de chaque intervenant
* il ne dispose pas du PDF mode opératoire

  il va faire une demande de document au responsable maintenance
* il clique sur le bouton "demande de documents" :
  
  il choisit le type de document à demander : mode opératoire
  
  il indique l'addresse de courriel du responsable maintenance
  
  il valide la demande
* la plateforme envoie la demande au reponsable maintenance

* il attend la réponse du reponsable maintenance
* ...

* il reçoit une notification lui indiquant que le document mode opératoire a été signé
* 📄 l'ensemble des documents déposés constitue le dossier d'entreprise de l'entreprise 4
  
  un documnet valise est automatiquement créé avec ce dossier d'entreprise unique (sans sous-traitant)
* il finalise et signe
* le document signé est automatiquement envoyé au chef de projet
* le document PDF signé est téléchargé
* il reçoit par courriel une copie originale du document signé 
* fin des actions


## Actions Resp. maintenance entreprise 4

* 🤠 reçoit un courriel de la plateforme `🌐asfalys.document.legal` lui demandant de rédiger un document mode oprératoire
* il clique sur le lien présent dans le courriel
* il arrive sur la plateforme `🌐asfalys.document.legal`
* il est automatiquement authentifié (via le courriel)
* le formulaire de saisir s'affiche
* il dépose les documents nécessaires:

  ➡ doc 1
  
  ➡ doc 2
  
  ➡ doc 3 : passeport intervenant ...
* il finalise et signe
* le document signé est automatiquement envoyé au chef de projet
* le document PDF signé est téléchargé
* il reçoit par courriel une copie originale du document signé 

* fin des actions


## Actions client final

* 🥸 reçoit un courriel avec un document valise unique
* il peut consulter le PDF qui contient 85 documents PDF joints et plus de 150 signatures électroniques
* la vérification manuelle est fastidieuse
* il peut déposer ce PDF sur la plateforme `🌐asfalys.document.legal` qui va effectuer instantanement toutes les vérifications necessaires
* il obtient en quelques secondes le détail des contrôles effectués:
  * cohérence des dates avec la mission
  * cohérence des habilitations avec les attentes du cahier des charges

