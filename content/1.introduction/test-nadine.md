# Valise UE
## Valise UE

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


## Carnet

### Paul et Alain



::ppw-mermaid
---
def: |
    flowchart TD
    c_paul[["📑 Carnet de Paul"]]

    ent_Alcove_EE --> c_paul
    ent_Alcove_EE --> c_alain

    %% Paul
    c_paul --> soud[attestation soudeur]
    c_paul --> scn[attestation SCN2]
    c_paul --> car[attestation cariste]
    c_paul --> nac[attestation nacelle]
    soud --> af[Aftral]
    scn --> t[Trihom]
    car --> af1[Aftral]
    nac --> a2[Aftral]

    c_alain[["📑 Carnet de Alain"]]
    %% Alain
    c_alain --> elec[attestation_électrique]
    c_alain --> scn1[attestation SCN2]
    c_alain --> car1[attestation cariste]
    c_alain --> nac1[attestation nacelle]
    elec --> t1[Trihom]
    scn1 --> t2[Trihom]
    car1 --> af2[Aftral]
    nac1 --> af3[Aftral]    
---
::

### Gérard et Nadège

::ppw-mermaid
---
def: |
    flowchart TD
    c_gerard[["📑 Carnet de Gérard
    gerard@vinci.fr"]]

    ent_Vinci_EE --> c_gerard
    ent_Vinci_EE --> carnet_Nadège
    
    %% Gérard
    c_gerard --> attestation_électrique    
    c_gerard --> attestation_soudeur
    c_gerard --> scn1[attestation SCN2]
    attestation_soudeur --> af2[Aftral]
    scn1 --> t1[Trihom]
    attestation_électrique --> t2[Trihom]

    click c_gerard "https://asfalys.document.legal/paxpar#animation" _blank
    style c_gerard fill:#f9f,stroke:#080,stroke-width:4px
    
    %% Nadège
    carnet_Nadège --> scn2[attestation SCN2]
    carnet_Nadège --> attestation_cariste
    attestation_cariste --> af1[Aftral]
    scn2 --> t3[Trihom]

---
:: 

### Edouard


::ppw-mermaid
---
def: |
    flowchart TD
    c_edouard[["📑 Carnet de Edouard"]]

    ent_EdDup --> c_edouard
    c_edouard --> elec[attestation électrique]    
    c_edouard --> soud[attestation_soudeur]
    c_edouard --> scn[attestation SCN2]
    soud --> af[Aftral]
    scn --> t[Trihom]
    elec --> t1[Trihom]
---
::

### Sophie


::ppw-mermaid
---
def: |
    flowchart TD
    c_sophie[["📑 Carnet de Sophie"]]    
    ent_Daney --> c_sophie
    c_sophie --> elec[attestation électrique]    
    c_sophie --> soud[attestation soudeur]
    c_sophie --> scn[attestation SCN2]
    c_sophie --> car[attestation cariste]
    c_sophie --> fim[attestation fimo]        
    soud--> af[Aftral]
    scn --> t[Trihom]
    elec --> t1[Trihom]
    car --> af1[Aftral]
    fim --> af2[Aftral]
---
::

### Adrien et Peggy


::ppw-mermaid
---
def: |
    flowchart TD
    c_adrien[["📑 Carnet de Adrien"]]     
    ent_Buripanera --> c_adrien
    ent_Buripanera --> c_peggy

    %% Adrien   
    c_adrien --> soud[attestation soudeur]
    c_adrien --> car[attestation cariste] 
    c_adrien --> scn[attestation SCN2]          
    soud --> af[Aftral]
    scn --> t[Trihom]
    elec --> t1[Trihom]
    car --> af1[Aftral]
    nac --> af2[Aftral]


    %% Peggy
    c_peggy[["📑 Carnet de Peggy"]]     
    c_peggy --> scn1[attestation SCN2]
    c_peggy --> nac[attestation nacelle]      
    c_peggy --> elec[attestation électrique]
    scn1 --> t2[Trihom]    


---
::

## Passeport

### Paul

::ppw-mermaid
---
def: |
    flowchart TD
    p_paul[["📑 Passeport de Paul"]]      
    p_paul --> carnet_Paul  
    p_paul --> fiche_de_poste_Paul
    p_paul --> certificat_aptitude_Paul

---
::

### Alain

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Alain --> carnet_Alain  
    passeport_Alain --> fiche_de_poste_Alain
    passeport_Alain --> certificat_aptitude_Alain

---
::

### Edouard

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Edouard --> carnet_Edouard  
    passeport_Edouard --> fiche_de_poste_Edouard
    passeport_Edouard --> certificat_aptitude_Edouard

---
::

### Gérard

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Gérard --> carnet_Gérard  
    passeport_Gérard --> fiche_de_poste_Gérard
    passeport_Gérard --> certificat_aptitude_Gérard

---
::

### Nadège

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Nadège --> carnet_Nadège  
    passeport_Nadège --> fiche_de_poste_Nadège
    passeport_Nadège --> certificat_aptitude_Nadège

---
::

### Adrien

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Adrien --> carnet_Adrien  
    passeport_Adrien --> fiche_de_poste_Adrien
    passeport_Adrien --> certificat_aptitude_Adrien

---
::

### Peggy

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Peggy --> carnet_Peggy  
    passeport_Peggy --> fiche_de_poste_Peggy
    passeport_Peggy --> certificat_aptitude_Peggy

---
::

### Sophie

::ppw-mermaid
---
def: |
    flowchart TD
    passeport_Sophie --> carnet_Sophie  
    passeport_Sophie --> fiche_de_poste_Sophie
    passeport_Sophie --> certificat_aptitude_Sophie

---
::

## Dossier Entreprise 

### Alcove EE

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_ent_Alcove --> passeport_Paul  
    dossier_ent_Alcove --> passeport_Alain
    dossier_ent_Alcove --> attestation_urssaf_Alcove
    dossier_ent_Alcove --> Kbis_Alcove
    dossier_ent_Alcove --> attestation_assurance_Alcove
    dossier_ent_Alcove --> mode_opératoire_Alcove   

---
::

### Vinci

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_ent_Vinci --> passeport_Gérard  
    dossier_ent_Vinci --> passeport_Nadège
    dossier_ent_Vinci --> attestation_urssaf_Vinci
    dossier_ent_Vinci --> Kbis_Vinci
    dossier_ent_Vinci --> attestation_assurance_Vinci
    dossier_ent_Vinci --> mode_opératoire_Vinci   

---
::

### EdDup

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_ent_EdDup --> passeport_Edouard  
    dossier_ent_EdDup --> attestation_urssaf_EdDup
    dossier_ent_EdDup --> Kbis_EdDup
    dossier_ent_EdDup --> attestation_assurance_EdDup
    dossier_ent_EdDup --> mode_opératoire_EdDup

---
::

### Daney

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_ent_Daney --> passeport_Sophie  
    dossier_ent_Daney --> attestation_urssaf_Daney
    dossier_ent_Daney --> Kbis_Daney
    dossier_ent_Daney --> attestation_assurance_Daney
    dossier_ent_Daney --> mode_opératoire_Daney

---
::

### Buripanera

::ppw-mermaid
---
def: |
    flowchart TD
    dossier_ent_Buripanera --> passeport_Adrien  
    dossier_ent_Buripanera --> passeport_Peggy
    dossier_ent_Buripanera --> attestation_urssaf_Buripanera
    dossier_ent_Buripanera --> Kbis_Buripanera
    dossier_ent_Buripanera --> attestation_assurance_Buripanera
    dossier_ent_Buripanera --> mode_opératoire_Buripanera   

---
::

## Valise mission

### Alcove EE 

::ppw-mermaid
---
def: |
    flowchart TD
    valise_mission_Alcove --> dossier_ent_Alcove  
    valise_mission_Alcove --> valise_mission_EdDup
    valise_mission_EdDup --> dossier_ent_EdDup     

---
::

### Vinci EE

::ppw-mermaid
---
def: |
    flowchart TD
    valise_mission_Vinci --> dossier_ent_Vinci  
    valise_mission_Vinci --> valise_mission_Daney
    valise_mission_Daney --> dossier_ent_Daney
    valise_mission_Daney --> valise_mission_Buripanera 
    valise_mission_Buripanera --> dossier_ent_Buripanera            
  

---
::























