import { Injectable } from "@nestjs/common";

@Injectable()
export class ClusteringService{
    constructor(){}

    groupe(){
        // Importer la bibliothèque
        const kmeans = require('node-kmeans');

        // Données d'exemple
        const data = [
        { 'company': 'Microsoft', 'size': 91259, 'revenue': 60420 },
        { 'company': 'IBM', 'size': 400000, 'revenue': 98787 },
        { 'company': 'Skype', 'size': 700, 'revenue': 716 },
        { 'company': 'SAP', 'size': 48000, 'revenue': 11567 },
        { 'company': 'Yahoo!', 'size': 14000, 'revenue': 6426 },
        { 'company': 'eBay', 'size': 15000, 'revenue': 8700 }
        ];

        // Créer un tableau 2D (vecteurs) pour décrire les données
        let vectors = new Array();
        for (let i = 0; i < data.length; i++) {
            vectors[i] = [data[i]['size'], data[i]['revenue']];
        }

        // Effectuer le clustering K-Means
        kmeans.clusterize(vectors, { k: 4 }, (err, res) => {
        if (err) console.error(err);
        else console.log('%o', res);
        });
    }
}