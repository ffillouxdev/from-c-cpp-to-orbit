#include <math.h>
#include <stdio.h>
#define G 6.67430e-11        // Constante gravitationnelle en m^3 kg^-1 s^-2
#define EARTH_MASS 5.972e24  // Masse de la Terre en kg
#define EARTH_RADIUS 6.371e6 // Rayon de la Terre en metre
#define STEPS 10000          // nombre de simulation d'orbite
#define SAT_MASS 1000.0      // masse du satellite
#define DT 1.0               // Pas de temps en secondes

enum {
    true = 1, 
    false = 0,
};

/**
 * Projet c-to-orbit
 */
int main()
{
    double pos_x, pos_y;
    double vel_x, vel_y;
    double acc_x, acc_y;
    double time, r, force;

    // 300km au dessus de la Terre
    pos_x = EARTH_RADIUS + 300000.0; 
    pos_y = 0.0;

    // la velocité et en m/s
    vel_x = 0.0;
    vel_y = 7500.0; 

    FILE *file = fopen("orbit.csv", "w");
    if (!file){
        printf("Erreur lors de l'ouverture du fichier.\n");
        return 1;
    }
    fprintf(file, "time,pos_x,pos_y,vel_x,vel_y\n");

    time = 0.0;
    for (int i = 0; i < STEPS ; i++){
        
        // Calcul de la distance au centre de la Terre
        r = sqrt(pos_x*pos_x + pos_y*pos_y);

        // Calcul de la force gravitationnelle (valeur absolue)
        force = G * EARTH_MASS * SAT_MASS / (r*r);

        // Calcul de l'accélération vectorielle (direction vers le centre de la Terre)
        acc_x = -force * pos_x / (r * SAT_MASS);
        acc_y = -force * pos_y / (r * SAT_MASS);

        // MAJ de la vitesse
        vel_x += acc_x * DT;
        vel_y += acc_y * DT;

        // MAJ de la position
        pos_x += vel_x * DT;
        pos_y += vel_y * DT;

        fprintf(file, "%f,%f,%f,%f,%f\n", time, pos_x, pos_y, vel_x, vel_y);
        time += DT;
    }
    fclose(file);
    printf("Simulation terminée, données enregistrées dans orbit.csv\n");

    return 0;
}