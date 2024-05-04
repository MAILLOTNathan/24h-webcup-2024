import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Créer une instance de GLTFLoader
const loader = new GLTFLoader();

// Fonction pour charger un modèle 3D et retourner la promesse avec la mesh
export default async function loadModel(modelName: string, scene : THREE.Scene): Promise<THREE.Mesh> {
    return await new Promise((resolve, reject) => {
        loader.load(
            modelName,
            (gltf) => {
                // Parcourez tous les enfants de la scène pour trouver la première mesh
				scene.add(gltf.scene);
                resolve(gltf.scene);

                // Si aucune mesh n'est trouvée, rejeter la promesse
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% chargé');
            },
            (error) => {
                console.error('Une erreur s\'est produite lors du chargement du modèle', error);
                reject(error);
            }
        );
    });
}
