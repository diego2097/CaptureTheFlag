/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.CaptureTheFlag.Controllers;

import edu.eci.arsw.CaptureTheFlag.model.Jugador;
import edu.eci.arsw.CaptureTheFlag.model.cuentaUsuario.Cuenta;
import edu.eci.arsw.CaptureTheFlag.persistence.CorreoNotFound;
import edu.eci.arsw.CaptureTheFlag.persistence.PlayerNotFoundException;
import edu.eci.arsw.CaptureTheFlag.persistence.Repositorios.RepositorioUsuario;
import edu.eci.arsw.CaptureTheFlag.services.CaptureTheFlagServices;
import java.util.ArrayList;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author USUARIO
 */
@RestController
public class CaptureFlagApiController {

    @Autowired
    CaptureTheFlagServices services;

    @Autowired
    RepositorioUsuario repositorioUsuario;

    @RequestMapping(method = GET, value = "/{sala}/jugadores/")
    public ResponseEntity<?> getJugadores() {
        try {
            //obtener datos que se enviaran a traves del API
            ArrayList<Jugador> players = (ArrayList<Jugador>) services.getJugadores();
            return new ResponseEntity<>(players, HttpStatus.ACCEPTED);

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return new ResponseEntity<>("400 bad request", HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(method = GET, value = "/{sala}/jugadores/{jugador}")
    public ResponseEntity<?> getJugadores(@PathVariable(name = "jugador") String nombre) {
        try {
            //obtener datos que se enviaran a traves del API
            Jugador player = services.getJugador(nombre);
            return new ResponseEntity<>(player, HttpStatus.ACCEPTED);

        } catch (PlayerNotFoundException ex) {
            return new ResponseEntity<>("400 bad request", HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(method = GET, value = "/cuentas/{nick}")
    public ResponseEntity<?> getUsuarios(@PathVariable(name = "nick") String nick) {
        try {
            //obtener datos que se enviaran a traves del API
            Iterable<Cuenta> iterator = repositorioUsuario.findAll();
            Iterator<Cuenta> it = iterator.iterator();
            while (it.hasNext()) {
                Cuenta cuenta = it.next();
                if (cuenta.getNick().equals(nick)) {
                    return new ResponseEntity<>(cuenta, HttpStatus.ACCEPTED);
                }
            }
            

        } catch (Exception ex) {
            return new ResponseEntity<>("400 bad request", HttpStatus.NOT_FOUND);
        }
        return null;
    }

    @RequestMapping(path = "/cuentas", method = POST)
    public ResponseEntity<?> addUsuario(@RequestBody Cuenta cuenta) {
        try {
            repositorioUsuario.save(cuenta);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>("ERROR 403", HttpStatus.FORBIDDEN);
        }
    }
}
