package com.youssef.ligues.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.youssef.ligues.entities.Ligue;
import com.youssef.ligues.repos.LigueRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class LigueRESTController {

    @Autowired
    LigueRepository ligueRepo;

    @GetMapping("/all")
    public List<Ligue> getAllLigues() {
        return ligueRepo.findAll();
    }

    @GetMapping("/getbyid/{id}")
    public Ligue getLigueById(@PathVariable("id") Long id) {
        return ligueRepo.findById(id).orElse(null);
    }

    @PostMapping("/addligue")
    public Ligue createLigue(@RequestBody Ligue ligue) {
        return ligueRepo.save(ligue);
    }

    @PutMapping("/updateligue")
    public Ligue updateLigue(@RequestBody Ligue ligue) {
        return ligueRepo.save(ligue);
    }

    @DeleteMapping("/delligue/{id}")
    public void deleteLigue(@PathVariable("id") Long id) {
        ligueRepo.deleteById(id);
    }

    @GetMapping("/liguespays/{idPays}")
    public List<Ligue> getLiguesByPays(@PathVariable("idPays") Long idPays) {
        return ligueRepo.findByPaysIdPays(idPays);
    }

    @GetMapping("/liguesByName/{nom}")
    public List<Ligue> getLiguesByName(@PathVariable("nom") String nom) {
        return ligueRepo.findByNomLigueContainsIgnoreCase(nom);
    }
}
