export interface Universite {
 
    idUniversite: any; // Changez ceci pour correspondre à la clé dans votre API
    nomUniversite: string | null; // Ajoutez | null si vous attendez potentiellement null
    adresse: string;
    foyer: any; // Remplacez 'any' par le type approprié si nécessaire
  
  
}