# Graphe valise


::ppw-mermaid
---
def: |
    flowchart TD
      valide_mission_EU --> CDC
      valide_mission_EU --> valide_mission_EE1
      valide_mission_EU --> valide_mission_EE2

      valide_mission_EE1 --> dossier_ent_EE1[dossier entreprise Alcove]
      valide_mission_EE2 --> dossier_ent_EE2

      dossier_ent_EE1 --> passeport
      dossier_ent_EE1 --> attest_urssaf
      dossier_ent_EE1 --> kbis1[[extrait k-bis]]
      dossier_ent_EE1 --> toto
      dossier_ent_EE1 --> atetst_assu
      dossier_ent_EE1 --> modeop

      dossier_ent_EE2 --> passeport_EE2
      dossier_ent_EE2 --> attest_urssaf_EE2
      dossier_ent_EE2 --> kbis2[[extrait k-bis]]
      dossier_ent_EE2 --> atetst_assu_EE2
      dossier_ent_EE2 --> modeop_EE2
---
::

# Graphe carnets
::ppw-mermaid
---
def: |
    flowchart TD
    entreprise_Alcove_EE --> carnet_Paul
    entreprise_Alcove_EE --> carnet_Alain
    carnet_Paul --> attestation_soudeur
    carnet_Paul --> attestation_SCN2
    carnet_Paul --> attestation_cariste
    carnet_Paul --> attestation_nacelle
    attestation_soudeur --> Aftral
    attestation_SCN2 --> Trihom
    attestation_cariste --> Aftral
    attestation_nacelle --> Aftral
    carnet_Alain --> attestation_électrique
    carnet_Alain --> attestation_SCN2
    carnet_Alain --> attestation_cariste
    carnet_Alain --> attestation_nacelle
    attestation_électrique --> Trihom
---
:: 

-------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    entreprise_Vinci_EE --> carnet_Gérard
    entreprise_Vinci_EE --> carnet_Nadège
    carnet_Gérard --> attestation_électrique    
    carnet_Gérard --> attestation_soudeur
    carnet_Gérard --> attestation_SCN2
    attestation_soudeur --> Aftral
    attestation_SCN2 --> Trihom
    attestation_cariste --> Aftral
    carnet_Nadège --> attestation_SCN2
    carnet_Nadège --> attestation_cariste
    attestation_électrique --> Trihom
---
:: 

--------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    entreprise_EdDup --> carnet_Edouard
    carnet_Edouard --> attestation_électrique    
    carnet_Edouard --> attestation_soudeur
    carnet_Edouard --> attestation_SCN2
    attestation_soudeur --> Aftral
    attestation_SCN2 --> Trihom
    attestation_électrique --> Trihom
---
::

--------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    entreprise_Daney --> carnet_Sophie
    carnet_Sophie --> attestation_électrique    
    carnet_Sophie --> attestation_soudeur
    carnet_Sophie --> attestation_SCN2
    carnet_Sophie --> attestation_cariste
    carnet_Sophie --> attestation_fimo        
    attestation_soudeur --> Aftral
    attestation_SCN2 --> Trihom
    attestation_électrique --> Trihom
    attestation_cariste --> Aftral
    attestation_fimo --> Aftral
---
::

--------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    entreprise_Buripanera --> carnet_Adrien
    entreprise_Buripanera --> carnet_Nadège   
    carnet_Adrien --> attestation_soudeur
    carnet_Adrien --> attestation_cariste 
    carnet_Adrien --> attestation_SCN2          
    attestation_soudeur --> Aftral
    attestation_SCN2 --> Trihom
    attestation_électrique --> Trihom
    attestation_cariste --> Aftral
    attestation_nacelle --> Aftral
    carnet_Nadège --> attestation_SCN2
    carnet_Nadège --> attestation_nacelle      
    carnet_Nadège --> attestation_électrique


---
::

---------------------------------------------------

#
::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Paul --> carnet_Paul  
    passeport_Paul --> fiche_de_poste
    passeport_Paul --> certificat_aptitude

---
::























