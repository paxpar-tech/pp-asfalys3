# Exemple5soc

Dans ce document:
* 5 sociétés sous-traitants
* 8 intervenants
* plus de 80 documents joints
* plus de 150 signatures

cf pp-ref-common/custom/secure/mes_valise_secure/valise_mission_eu/


:ppw-pdfview{url="/data/pdf/val_mis_eu.pdf"}

::ppw-mermaid
---
def: |
    flowchart TD
      valise_mission_EU --> CDC
      valise_mission_EU --> valise_mission_Alcove_EE 
      valise_mission_EU --> valise_mission_Vinci_EE
      valise_mission_Alcove_EE --> dossier_ent_Alcove_EE
      valise_mission_Alcove_EE --> valise_mission_EdDup

      dossier_ent_Alcove_EE--> passeport_Paul
      dossier_ent_Alcove_EE--> passeport_Alain
      dossier_ent_Alcove_EE--> attest_urssaf_Alcove
      dossier_ent_Alcove_EE--> Kbis_Alcove
      dossier_ent_Alcove_EE--> attest_assur_Alcove
      dossier_ent_Alcove_EE--> mode_op_Alcove                  

      passeport_Paul --> carnet_Paul
      passeport_Paul --> fiche_poste_Paul      
      passeport_Paul --> cert_aptitude_Paul
      passeport_Alain --> carnet_Alain
      passeport_Alain --> fiche_poste_Alain
      passeport_Alain --> cert_aptitude_Alain

      carnet_Paul --> attestation_soudeur
      carnet_Paul --> attestation_SCN2
      carnet_Paul --> attestation_cariste
      carnet_Paul --> attestation_nacelle
      carnet_Alain --> attestation_électrique
      carnet_Alain --> attestation_SCN2
      carnet_Alain --> attestation_cariste
      carnet_Alain --> attestation_nacelle

      valise_mission_EdDup --> dossier_entr_EdDup
      dossier_entr_EdDup --> passeport_Edouard  
      dossier_entr_EdDup --> attestation_urssaf_EdDup
      dossier_entr_EdDup --> Kbis_EdDup
      dossier_entr_EdDup --> attestation_assurance_EdDup
      dossier_entr_EdDup --> mode_opératoire_EdDup

      passeport_Edouard --> carnet_Edouard  
      passeport_Edouard --> fiche_de_poste_Edouard
      passeport_Edouard --> certificat_aptitude_Edouard 

      carnet_Edouard --> attestation_électrique    
      carnet_Edouard --> attestation_soudeur
      carnet_Edouard --> attestation_SCN2

      valise_mission_Vinci_EE --> dossier_ent_Vinci_EE
      valise_mission_Vinci_EE --> valise_mission_Daney
      dossier_ent_Vinci_EE --> passeport_Gérard  
      dossier_ent_Vinci_EE --> passeport_Nadège
      dossier_ent_Vinci_EE --> attestation_urssaf_Vinci
      dossier_ent_Vinci_EE --> Kbis_Vinci
      dossier_ent_Vinci_EE --> attestation_assurance_Vinci
      dossier_ent_Vinci_EE --> mode_opératoire_Vinci

      valise_mission_Daney --> dossier_ent_Daney
      valise_mission_Daney --> valise_mission_Buripanera 

      dossier_ent_Daney --> passeport_Sophie  
      dossier_ent_Daney --> attestation_urssaf_Daney
      dossier_ent_Daney --> Kbis_Daney
      dossier_ent_Daney --> attestation_assurance_Daney
      dossier_ent_Daney --> mode_opératoire_Daney

      passeport_Sophie --> carnet_Sophie  
      passeport_Sophie --> fiche_de_poste_Sophie
      passeport_Sophie --> certificat_aptitude_Sophie

      carnet_Sophie --> attestation_électrique    
      carnet_Sophie --> attestation_soudeur
      carnet_Sophie --> attestation_SCN2
      carnet_Sophie --> attestation_cariste
      carnet_Sophie --> attestation_fimo           

      valise_mission_Buripanera --> dossier_ent_Buripanera
      dossier_ent_Buripanera --> passeport_Adrien  
      dossier_ent_Buripanera --> passeport_Peggy
      dossier_ent_Buripanera --> attestation_urssaf_Buripanera
      dossier_ent_Buripanera --> Kbis_Buripanera
      dossier_ent_Buripanera --> attestation_assurance_Buripanera
      dossier_ent_Buripanera --> mode_opératoire_Buripanera

      passeport_Adrien --> carnet_Adrien  
      passeport_Adrien --> fiche_de_poste_Adrien
      passeport_Adrien --> certificat_aptitude_Adrien
      passeport_Peggy --> carnet_Peggy  
      passeport_Peggy --> fiche_de_poste_Peggy
      passeport_Peggy --> certificat_aptitude_Peggy

      carnet_Adrien --> attestation_soudeur
      carnet_Adrien --> attestation_cariste 
      carnet_Adrien --> attestation_SCN2
      carnet_Peggy --> attestation_SCN2
      carnet_Peggy --> attestation_nacelle      
      carnet_Peggy --> attestation_électrique                                                  
---
::



```yaml
$schema: https://schema.paxpar.tech/mes_valise_secure/cdc/1
chantier_numero: 1058421421422
date: 2022-06-15
nom_charge_affaire: Julie DULEN
periode_debut: 2022-09-14
periode_fin: 2022-12-31
postes:
- habilitations:
  - SCN2
  - R489 (cariste)
  titre: conducteur cariste
- habilitations:
  - SCN2
  - R489 (cariste)
  titre: conducteur cariste
- habilitations:
  - SCN2
  - R486 (nacelle)
  titre: conducteur nacelle
- habilitations:
  - SCN2
  - R486 (nacelle)
  titre: conducteur nacelle
- habilitations:
  - SCN2
  - ELECTRIQUE
  titre: "\xE9lectricien"
- habilitations:
  - SCN2
  - ELECTRIQUE
  titre: "\xE9lectricien"
- habilitations:
  - RS682 (soudeur)
  - SCN2
  titre: soudeur
- habilitations:
  - RS682 (soudeur)
  - SCN2
  titre: soudeur
site: Lot 3 Nogent
```


```yaml
$schema: https://schema.paxpar.tech/mes_valise_secure/habilitation/1
date: 2022-02-05
habilitation:
  date_delivrance: 2022-02-05
  intitule: AUTRES FORMATIONS
  lieu: Laval
  nom: Edouard
  resultat: Favorable
  type: RS682 (soudeur)
  validite_annee: 3
organisme_nom: AFTRAL
```

![ecran1.png](/valise_eu/ecran1.png)

![ecran2.png](/valise_eu/ecran2.png)

![ecran3.png](/valise_eu/ecran3.png)
