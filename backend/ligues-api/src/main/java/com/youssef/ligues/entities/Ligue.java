package com.youssef.ligues.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Ligue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLigue;

    private String nomLigue;

    private Integer nbEquipes;

    private LocalDate dateCreation;

    // plusieurs ligues -> un seul pays
    @ManyToOne
    private Pays pays;
}
