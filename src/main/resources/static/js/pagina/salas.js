var salasModule = (function() {
  class Cuenta {
    constructor(id, correo, contrasena, nick) {
      this.correo = correo;
      this.contrasena = contrasena;
      this.nick = nick;
      this.id = id;
    }
  }

  var _nick;
  var stompClient = null;
  var _nameSala;
  var _subscribe;
  var _participantes;
  var _salas;

  var _createSala = function(cuent) {
    console.log("_createSala");
    console.log("cuenta " + cuent + " asdsda " + cuent[0]);
    var cuenta = new Cuenta(
      cuent.id,
      cuent.correo,
      cuent.contrasena,
      cuent.nick
    );
    console.log(cuenta);
    stompClient.send(
      "/app/createsala." + _nameSala,
      {},
      JSON.stringify(cuenta)
    );
  };
  var tablaSalas = function() {
    console.log(tablaSalas);
    $("#tabla-salas").empty();
    _salas.map(function(sala) {
      $("#tabla-salas").append(
        "<tr>" + "<td>" + sala.nombre + "</td>" + "</tr>"
      );
    });
  };

  var tablaParticipantes = function() {
    console.log("tablaParticipantes");
    $("#tabla-participantes").empty();
    _participantes.map(function(participante) {
      $("#tabla-participantes").append(
        "<tr>" + "<td>" + participante.nombre + "</td>" + "</tr>"
      );
    });
  };
  var connectAndSubscribe = function() {
    console.info("Connecting to WS...");
    var socket = new SockJS("/stompendpoint");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
      console.log("Connected: " + frame);
      if (_subscribe == "/topic/joinsala.") {
        stompClient.subscribe(_subscribe + _nameSala, function(eventbody) {
          var theObject = JSON.parse(eventbody.body);
          _participantes = theObject;
        });
      } else {
        stompClient.subscribe(_subscribe, function(eventbody) {
          var theObject = JSON.parse(eventbody.body);
          console.log(theObject);
        });
      }
    });
  };

  return {
    init: function(sub) {
      salasModule.disconnect();
      if (sub == 1) {
        _subscribe = "/topic/showsala";
        connectAndSubscribe();
        console.log("send");
        //salasModule.showSalas();
      } else {
        _subscribe = "/topic/joinsala.";
        connectAndSubscribe();
      }
    },
    showSalas: function() {
      stompClient.send("/app/showsala", {}, " ");
    },
    joinSala: function() {
      console.log("joinSalas");
      tablaParticipantes();
    },
    createSalas: function(nSala) {
      console.log("createSalas");
      _nameSala = nSala;
      _nick = verificationModule.readCookie("nickname");
      console.log(_nick);
      console.log(_createSala);
      apiClient.checkPassword(_nick, _createSala);
    },
    disconnect: function() {
      if (stompClient !== null) {
        stompClient.disconnect();
      }
      console.log("Disconnected");
    }
  };
})();
