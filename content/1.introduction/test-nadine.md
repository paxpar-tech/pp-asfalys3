# Graphe Nadine


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
    carnet_Paul --> attestation_électrique
    carnet_Paul --> attestation_SCN2
    carnet_Paul --> attestation_cariste
    carnet_Paul --> attestation_nacelle
    attestation_électrique --> trihom
    attestation_SCN2 --> trihom
---
::    