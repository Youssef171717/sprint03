package com.youssef.ligues.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.youssef.ligues.entities.Ligue;

// exported = false : les ligues sont exposées par LigueRESTController (/api/...)
@RepositoryRestResource(exported = false)
public interface LigueRepository extends JpaRepository<Ligue, Long> {

    List<Ligue> findByPaysIdPays(Long idPays);

    List<Ligue> findByNomLigueContainsIgnoreCase(String nom);
}
