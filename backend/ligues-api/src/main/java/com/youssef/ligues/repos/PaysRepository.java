package com.youssef.ligues.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.youssef.ligues.entities.Pays;

// Spring Data REST génère automatiquement le CRUD sur /pays
@RepositoryRestResource(path = "pays", collectionResourceRel = "pays")
public interface PaysRepository extends JpaRepository<Pays, Long> {
}
