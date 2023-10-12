# Graphe valise essai 1


::ppw-mermaid
---
def: |
    flowchart TD
      valise_mission_EU --> CDC
      valise_mission_EU --> valise_mission_Alcove_EE 
      valise_mission_EU --> valise_mission_Vinci_EE


      valise_mission_Alcove_EE --> dossier_ent_Alcove_EE
      valise_mission_Alcove_EE --> valise_mission_EdDup           
      valise_mission_EdDup --> dossier_entr_EdDup

      dossier_ent_Alcove_EE --> passeport
      dossier_ent_Alcove_EE --> attest_urssaf
      dossier_ent_Alcove_EE --> kbis1[[extrait k-bis]]
      dossier_ent_Alcove_EE --> atetst_assu
      dossier_ent_Alcove_EE --> modeop


      dossier_ent_EdDup --> passeport
      dossier_ent_EdDup --> attest_urssaf
      dossier_ent_EdDup --> kbis1[[extrait k-bis]]
      dossier_ent_EdDup --> atetst_assu
      dossier_ent_EdDup --> modeop    
    
    
    
      valise_mission_Vinci_EE --> dossier_ent_Vinci_EE 



      dossier_ent_Vinci_EE --> passeport
      dossier_ent_Vinci_EE --> attest_urssaf
      dossier_ent_Vinci_EE --> kbis2[[extrait k-bis]]
      dossier_ent_Vinci_EE --> atetst_assu
      dossier_ent_Vinci_EE --> modeop
---
::

---------------------------------------------------------------------

# Graphe Valise 2

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


---
::


-----------------------------------------------------------

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
    entreprise_Buripanera --> carnet_Peggy   
    carnet_Adrien --> attestation_soudeur
    carnet_Adrien --> attestation_cariste 
    carnet_Adrien --> attestation_SCN2          
    attestation_soudeur --> Aftral
    attestation_SCN2 --> Trihom
    attestation_électrique --> Trihom
    attestation_cariste --> Aftral
    attestation_nacelle --> Aftral
    carnet_Peggy --> attestation_SCN2
    carnet_Peggy --> attestation_nacelle      
    carnet_Peggy --> attestation_électrique


---
::

---------------------------------------------------

# Graphe passeports

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Paul --> carnet_Paul  
    passeport_Paul --> fiche_de_poste_Paul
    passeport_Paul --> certificat_aptitude_Paul

---
::

----------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Alain --> carnet_Alain  
    passeport_Alain --> fiche_de_poste_Alain
    passeport_Alain --> certificat_aptitude_Alain

---
::

----------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Edouard --> carnet_Edouard  
    passeport_Edouard --> fiche_de_poste_Edouard
    passeport_Edouard --> certificat_aptitude_Edouard

---
::

-----------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Gérard --> carnet_Gérard  
    passeport_Gérard --> fiche_de_poste_Gérard
    passeport_Gérard --> certificat_aptitude_Gérard

---
::

-----------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Nadège --> carnet_Nadège  
    passeport_Nadège --> fiche_de_poste_Nadège
    passeport_Nadège --> certificat_aptitude_Nadège

---
::

--------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Adrien --> carnet_Adrien  
    passeport_Adrien --> fiche_de_poste_Adrien
    passeport_Adrien --> certificat_aptitude_Adrien

---
::

---------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Peggy --> carnet_Peggy  
    passeport_Peggy --> fiche_de_poste_Peggy
    passeport_Peggy --> certificat_aptitude_Peggy

---
::

----------------------------------------------------

# Dossier Entreprise Alcove EE

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_entreprise_Alcove --> passeport_Paul  
    dossier_entreprise_Alcove --> passeport_Alain
    dossier_entreprise_Alcove --> attestation_urssaf_Alcove
    dossier_entreprise_Alcove --> Kbis_Alcove
    dossier_entreprise_Alcove --> attestation_assurance_Alcove
    dossier_entreprise_Alcove --> mode_opératoire_Alcove   

---
::

------------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_entreprise_Vinci --> passeport_Gérard  
    dossier_entreprise_Vinci --> passeport_Nadège
    dossier_entreprise_Vinci --> attestation_urssaf_Vinci
    dossier_entreprise_Vinci --> Kbis_Vinci
    dossier_entreprise_Vinci --> attestation_assurance_Vinci
    dossier_entreprise_Vinci --> mode_opératoire_Vinci   

---
::

-----------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_entreprise_EdDup --> passeport_Edouard  
    dossier_entreprise_EdDup --> attestation_urssaf_EdDup
    dossier_entreprise_EdDup --> Kbis_EdDup
    dossier_entreprise_EdDup --> attestation_assurance_EdDup
    dossier_entreprise_EdDup --> mode_opératoire_EdDup

---
::

-------------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_entreprise_Daney --> passeport_Sophie  
    dossier_entreprise_Daney --> attestation_urssaf_Daney
    dossier_entreprise_Daney --> Kbis_Daney
    dossier_entreprise_Daney --> attestation_assurance_Daney
    dossier_entreprise_Daney --> mode_opératoire_Daney

---
::

------------------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_entreprise_Buripanera --> passeport_Adrien  
    dossier_entreprise_Buripanera --> passeport_Peggy
    dossier_entreprise_Buripanera --> attestation_urssaf_Buripanera
    dossier_entreprise_Buripanera --> Kbis_Buripanera
    dossier_entreprise_Buripanera --> attestation_assurance_Buripanera
    dossier_entreprise_Buripanera --> mode_opératoire_Buripanera   

---
::

------------------------------------------------------------

# Valises mission

::ppw-mermaid
---
def: |
    flowchart TD
    valise_mission_Alcove --> dossier_entreprise_Alcove  
    valise_mission_Alcove --> valise_mission_EdDup
    valise_mission_EdDup --> dossier_entreprise_EdDup     

---
::

------------------------------------------------------------

::ppw-mermaid
---
def: |
    flowchart TD
    valise_mission_Vinci --> dossier_entreprise_Vinci  
    valise_mission_Vinci --> valise_mission_Daney
    valise_mission_Daney --> dossier_entreprise_Daney
    valise_mission_Daney --> valise_mission_Buripanera 
    valise_mission_Buripanera --> dossier_entreprise_Buripanera            
  

---
::























