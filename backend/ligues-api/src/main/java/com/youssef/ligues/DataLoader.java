package com.youssef.ligues;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.youssef.ligues.entities.Ligue;
import com.youssef.ligues.entities.Pays;
import com.youssef.ligues.repos.LigueRepository;
import com.youssef.ligues.repos.PaysRepository;

// Remplit la base avec le TOP 5 des ligues au premier démarrage (si la table ligue est vide)
@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    PaysRepository paysRepo;
    @Autowired
    LigueRepository ligueRepo;

    // retourne le pays s'il existe déjà, sinon le crée
    private Pays pays(String nom) {
        return paysRepo.findAll().stream()
                .filter(p -> nom.equals(p.getNomPays()))
                .findFirst()
                .orElseGet(() -> paysRepo.save(new Pays(null, nom)));
    }

    @Override
    public void run(String... args) {
        if (ligueRepo.count() > 0)
            return;

        ligueRepo.save(new Ligue(null, "Premier League", 20, LocalDate.of(1992, 2, 20), pays("Angleterre")));
        ligueRepo.save(new Ligue(null, "La Liga", 20, LocalDate.of(1929, 2, 10), pays("Espagne")));
        ligueRepo.save(new Ligue(null, "Serie A", 20, LocalDate.of(1898, 9, 11), pays("Italie")));
        ligueRepo.save(new Ligue(null, "Bundesliga", 18, LocalDate.of(1963, 8, 24), pays("Allemagne")));
        ligueRepo.save(new Ligue(null, "Ligue 1", 18, LocalDate.of(1932, 4, 11), pays("France")));
    }
}
