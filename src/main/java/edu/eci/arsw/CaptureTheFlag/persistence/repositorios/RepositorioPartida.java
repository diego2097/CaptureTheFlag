package edu.eci.arsw.CaptureTheFlag.persistence.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.eci.arsw.CaptureTheFlag.model.Partida;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface RepositorioPartida extends CrudRepository<Partida, Integer> {

 /*  @Query("SELECT c FROM Cuenta c    WHERE c.nick = :nick")
    Cuenta findUser(@Param("nick") String correo);*/

}
