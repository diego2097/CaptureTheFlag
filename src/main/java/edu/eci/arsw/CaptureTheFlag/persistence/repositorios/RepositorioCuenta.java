package edu.eci.arsw.CaptureTheFlag.persistence.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.eci.arsw.CaptureTheFlag.model.Cuenta;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface RepositorioCuenta extends CrudRepository<Cuenta, Long> {

   @Query("SELECT c FROM Cuenta c    WHERE c.nick = :nick")
    Cuenta findUser(@Param("nick") String nick);

}
