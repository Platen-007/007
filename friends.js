var b = "https://haylamday.com";
window.detectLog = null;
const c = {
  BETAisSkinCustom(b) {
    var c = /[a-zA-Z]/;
    return typeof b === "string" && c.test(b);
  },
  testSkinCustom: function (b) {
    if (c.BETAisSkinCustom(b)) {
      return 34 || 33;
    } else {
      return b;
    }
  },
  testSkinMod: function (b) {
    return b >= 399 && b < 999;
  },
  testWear: function (b) {
    return b >= 399 && b < 999;
  },
  isNumberValid: function (b) {
    return b !== "" && b !== null && b !== undefined && !isNaN(b);
  },
  validInput: function (b) {
    if (!c.testSkinMod(b) && !c.BETAisSkinCustom(b)) {
      return b;
    }
    try {
      let b = $("#inputReplaceSkin").val();
      return encodeURI(c.isNumberValid(b) ? b : 35);
    } catch (b) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var d = localStorage.getItem("inputReplaceSkin");
var e = null;
var f = false;
var g = {};
window.keyMove = 81;
var h = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var i = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: h.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let b = JSON.parse(saveGameLocal);
  for (let c in b) {
    i[c] = b[c];
  }
}
i.loading = true;
const j = function () {
  let b = false;
  i.mobile = false;
  var c = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4))) {
    i.mobile = true;
    b = true;
  }
  return b;
};
const k = function () {
  let b = false;
  var c = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4))) {
    b = true;
  }
  return b;
};
const l = function (b) {
  let c;
  try {
    console.log(b);
    i.gamePad ||= h.joystick;
    if (k() && (b || i.gamePad.checked)) {
      c = nipplejs.create(i.gamePad);
      c.on("move", function (b, c) {
        h.eventoPrincipal.sk = c.angle.radian <= Math.PI ? c.angle.radian * -1 : Math.PI - (c.angle.radian - Math.PI);
        console.log(c);
      });
    }
    return c;
  } catch (b) {
    console.log(b);
  }
};
let m = {
  clientesVencidos: [],
  clientesActivos: []
};
let n = {
  Api_listServer: []
};
async function o() {
  await fetch("https://platen-007.github.io/007/api/revision1.php").then(b => b.json()).then(b => {
    if (b.success) {
      let c = b.Users;
      m.clientesActivos = c.filter(b => {
        return b.cliente_ID;
      });
    } else {
      m = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function p() {
  await fetch("https://platen-007.github.io/007/api/revision2.php").then(b => b.json()).then(b => {
    if (b.success) {
      let c = b.servers;
      n.Api_listServer = c.filter(b => {
        return b.serverUrl;
      });
    } else {
      n = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
o();
p();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var q = $("#idReplaceSkin");
const r = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
r.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
r.clock.width = 100;
r.clock.height = 100;
r.clock.x = -50;
r.clock.y = -50;
r.value_server = new PIXI.Text("WFC", r.fontStyle.name);
r.value_server.x = 25;
r.value_server.y = -18;
r.label_hs = new PIXI.Text("HS", r.fontStyle.amarillo);
r.value1_hs = new PIXI.Text("0", r.fontStyle.amarillo);
r.label_kill = new PIXI.Text("KL", r.fontStyle.morado);
r.value1_kill = new PIXI.Text("0", r.fontStyle.morado);
if (i.ModeStremersaveheadshot) {
  r.value2_hs = new PIXI.Text("", r.fontStyle.amarillo1);
  r.value2_kill = new PIXI.Text("", r.fontStyle.morado1);
} else {
  r.value2_hs = new PIXI.Text("", r.fontStyle.amarillo1);
  r.value2_kill = new PIXI.Text("", r.fontStyle.morado1);
}
;
r.label_hs.x = 65;
r.label_hs.y = 100;
r.label_kill.x = 15;
r.label_kill.y = 100;
r.value1_hs.x = 65;
r.value1_hs.y = 116;
r.value1_kill.x = 15;
r.value1_kill.y = 116;
r.value2_hs.x = 65;
r.value2_hs.y = 133;
r.value2_kill.x = 15;
r.value2_kill.y = 133;
r.containerCountInfo = new PIXI.Container();
r.containerCountInfo.x = -45;
r.containerCountInfo.y = -52;
r.containerCountInfo.addChild(r.value_server);
r.containerCountInfo.addChild(r.label_hs);
r.containerCountInfo.addChild(r.value1_hs);
r.containerCountInfo.addChild(r.value2_hs);
r.containerCountInfo.addChild(r.label_kill);
r.containerCountInfo.addChild(r.value1_kill);
r.containerCountInfo.addChild(r.value2_kill);
r.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
r.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
r.onclickServer = PIXI.Texture.fromImage(i.flag);
r.containerImgS = new PIXI.Sprite(r.imgServerbase);
r.containerImgS.anchor.set(0.5);
r.containerImgS.x = 0;
r.containerImgS.y = -10;
r.containerImgS.width = 25;
r.containerImgS.height = 20;
r.borderImg = new PIXI.Sprite(r.borderurl);
r.borderImg.anchor.set(0.5);
r.borderImg.x = -2;
r.borderImg.y = 78;
r.borderImg.width = 110;
r.borderImg.height = 60;
r.setServer = function (b) {
  r.value_server.text = b || "WFC";
};
r.setCountGame = function (b, c, d, e) {
  r.value1_hs.text = c;
  r.value1_kill.text = b;
  ;
  if (i.ModeStremersaveheadshot) {
    r.value2_hs.text = e;
    r.value2_kill.text = d;
  } else {}
  ;
};
"use strict";
var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (b) {
  return typeof b;
} : function (b) {
  if (b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof b;
  }
};
var t;
(function () {
  try {
    console.log(function (b, c) {
      for (var d = 0; d < c.length; d += 2) {
        b = b.replaceAll(c[d], c[d + 1]);
      }
      return b;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (b) {}
})();
window.addEventListener("load", function () {
  function d() {
    (function (b, c, d) {
      function e(b, c) {
        return (b === undefined ? "undefined" : s(b)) === c;
      }
      function f() {
        if (typeof c.createElement != "function") {
          return c.createElement(arguments[0]);
        } else if (m) {
          return c.createElementNS.call(c, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return c.createElement.apply(c, arguments);
        }
      }
      var g = [];
      var h = [];
      var i = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (b, c) {
          var d = this;
          setTimeout(function () {
            c(d[b]);
          }, 0);
        },
        addTest: function (b, c, d) {
          h.push({
            name: b,
            fn: c,
            options: d
          });
        },
        addAsyncTest: function (b) {
          h.push({
            name: null,
            fn: b
          });
        }
      };
      function j() {}
      j.prototype = i;
      j = new j();
      var k = false;
      try {
        k = "WebSocket" in b && b.WebSocket.CLOSING === 2;
      } catch (b) {}
      j.addTest("websockets", k);
      var l = c.documentElement;
      var m = l.nodeName.toLowerCase() === "svg";
      j.addTest("canvas", function () {
        var b = f("canvas");
        return !!b.getContext && !!b.getContext("2d");
      });
      j.addTest("canvastext", function () {
        return j.canvas !== false && typeof f("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var b;
        var c;
        var d;
        var f;
        var i;
        var k;
        var l;
        for (var m in h) {
          if (h.hasOwnProperty(m)) {
            b = [];
            c = h[m];
            if (c.name && (b.push(c.name.toLowerCase()), c.options && c.options.aliases && c.options.aliases.length)) {
              for (d = 0; d < c.options.aliases.length; d++) {
                b.push(c.options.aliases[d].toLowerCase());
              }
            }
            f = e(c.fn, "function") ? c.fn() : c.fn;
            i = 0;
            for (; i < b.length; i++) {
              k = b[i];
              l = k.split(".");
              if (l.length === 1) {
                j[l[0]] = f;
              } else {
                if (!!j[l[0]] && !(j[l[0]] instanceof Boolean)) {
                  j[l[0]] = new Boolean(j[l[0]]);
                }
                j[l[0]][l[1]] = f;
              }
              g.push((f ? "" : "no-") + l.join("-"));
            }
          }
        }
      })();
      (function (b) {
        var c = l.className;
        var d = j._config.classPrefix || "";
        if (m) {
          c = c.baseVal;
        }
        if (j._config.enableJSClass) {
          var e = new RegExp("(^|\\s)" + d + "no-js(\\s|$)");
          c = c.replace(e, "$1" + d + "js$2");
        }
        if (j._config.enableClasses) {
          c += " " + d + b.join(" " + d);
          if (m) {
            l.className.baseVal = c;
          } else {
            l.className = c;
          }
        }
      })(g);
      delete i.addTest;
      delete i.addAsyncTest;
      for (var n = 0; n < j._q.length; n++) {
        j._q[n]();
      }
      b.Modernizr = j;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function o(b, c, d) {
    const e = [38, 38, 38, 120, 38, 25, 38];
    const f = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let h = e[c] - parseInt((d == 0.99 ? 1 : d) * e[c] / 1);
    const i = new PIXI.TextStyle({
      align: "center",
      fill: f[c],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let j = "pwr_clock" + c;
    if (!g[j] && e[c] === h) {
      g[j] = new PIXI.Text(h, i);
      g[j].y = 61;
      b.Tf[c].addChild(g[j]);
    }
    if (g[j]) {
      g[j].x = h >= 100 ? 11 : h >= 10 ? 18 : 26;
      g[j].text = h;
      if (h === 0) {
        delete g[j];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!d()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function d() {
      return window.anApp = Z;
    }
    function p(b) {
      const c = b + "=";
      const d = document.cookie.split(";");
      for (let e = 0; e < d.length; e++) {
        let b = d[e];
        while (b.charAt(0) === " ") {
          b = b.substring(1);
        }
        if (b.indexOf(c) === 0) {
          return b.substring(c.length, b.length);
        }
      }
      return "";
    }
    function s(b, c, d) {
      var e = new Date();
      e.setTime(e.getTime() + d * 86400000);
      var f = "expires=" + e.toUTCString();
      document.cookie = b + "=" + c + "; " + f + "; path=/";
    }
    function u(b) {
      return window.I18N_MESSAGES[b];
    }
    function v(b) {
      if (b[W]) {
        return b[W];
      } else if (b.en) {
        return b.en;
      } else {
        return b.x;
      }
    }
    function x(b) {
      var c = (Math.floor(b) % 60).toString();
      var d = (Math.floor(b / 60) % 60).toString();
      var e = (Math.floor(b / 3600) % 24).toString();
      var f = Math.floor(b / 86400).toString();
      var g = u("util.time.days");
      var h = u("util.time.hours");
      var i = u("util.time.min");
      var j = u("util.time.sec");
      if (f > 0) {
        return f + " " + g + " " + e + " " + h + " " + d + " " + i + " " + c + " " + j;
      } else if (e > 0) {
        return e + " " + h + " " + d + " " + i + " " + c + " " + j;
      } else if (d > 0) {
        return d + " " + i + " " + c + " " + j;
      } else {
        return c + " " + j;
      }
    }
    function y(b) {
      if (b.includes("href")) {
        return b.replaceAll("href", "target=\"_black\" href");
      } else {
        return b;
      }
    }
    function z(b, c, d) {
      var e = document.createElement("script");
      var f = true;
      if (c) {
        e.id = c;
      }
      e.async = "async";
      e.type = "text/javascript";
      e.src = b;
      if (d) {
        e.onload = e.onreadystatechange = function () {
          f = false;
          try {
            d();
          } catch (b) {
            console.log(b);
          }
          e.onload = e.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
    }
    function A(b, c) {
      var d = c;
      d.prototype = Object.create(b.prototype);
      d.prototype.constructor = d;
      d.parent = b;
      return d;
    }
    function B(b) {
      b %= aa;
      if (b < 0) {
        return b + aa;
      } else {
        return b;
      }
    }
    function C(b, c, d) {
      return D(d, b, c);
    }
    function D(b, c, d) {
      if (b > d) {
        return d;
      } else if (b < c) {
        return c;
      } else if (Number.isFinite(b)) {
        return b;
      } else {
        return (c + d) * 0.5;
      }
    }
    function E(b, c, d, e) {
      if (c > b) {
        return Math.min(c, b + d * e);
      } else {
        return Math.max(c, b - d * e);
      }
    }
    function F(b, c, d, e, f) {
      return c + (b - c) * Math.pow(1 - e, d / f);
    }
    function G(b, c, d) {
      return b * (1 - d) + c * d;
    }
    function H(b, c, d, e) {
      var f = d;
      var g = c;
      var h = c + e;
      if (b == null) {
        throw new TypeError("this is null or not defined");
      }
      var i = b.length >>> 0;
      var j = f >> 0;
      var k = j < 0 ? Math.max(i + j, 0) : Math.min(j, i);
      var l = g >> 0;
      var m = l < 0 ? Math.max(i + l, 0) : Math.min(l, i);
      var n = h === undefined ? i : h >> 0;
      var o = n < 0 ? Math.max(i + n, 0) : Math.min(n, i);
      var p = Math.min(o - m, i - k);
      var q = 1;
      for (m < k && k < m + p && (q = -1, m += p - 1, k += p - 1); p > 0;) {
        if (m in b) {
          b[k] = b[m];
        } else {
          delete b[k];
        }
        m += q;
        k += q;
        p--;
      }
      return b;
    }
    function I(b) {
      return b.getContext("2d");
    }
    function J(b) {
      if (b.parent != null) {
        b.parent.removeChild(b);
      }
    }
    function K(b) {
      return b[parseInt(Math.random() * b.length)];
    }
    function L() {
      return Math.random().toString(36).substring(2, 15);
    }
    function M(b, c, d) {
      var e = (1 - Math.abs(d * 2 - 1)) * c;
      var f = e * (1 - Math.abs(b / 60 % 2 - 1));
      var g = d - e / 2;
      if (b >= 0 && b < 60) {
        return [g + e, g + f, g + 0];
      } else if (b >= 60 && b < 120) {
        return [g + f, g + e, g + 0];
      } else if (b >= 120 && b < 180) {
        return [g + 0, g + e, g + f];
      } else if (b >= 180 && b < 240) {
        return [g + 0, g + f, g + e];
      } else if (b >= 240 && b < 300) {
        return [g + f, g + 0, g + e];
      } else {
        return [g + e, g + 0, g + f];
      }
    }
    function N() {
      function b() {
        let b = i.adblock ? 1 : 5;
        $("#adbl-1").text(u("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(u("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(u("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(u("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(u("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + f).fadeIn(500);
        var c = b;
        for (var d = 0; d < b; d++) {
          setTimeout(function () {
            c--;
            $("#adbl-4").text(u("index.game.antiadblocker.msg4").replace("{0}", c));
            if (c === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (b) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (d + 1) * 1000);
        }
      }
      var c = false;
      function d() {}
      var e = {};
      var f = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + f).fadeOut(500);
        d(false);
      });
      e.a = function (b) {
        d = b;
        if (!c) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (b) {
                  console.log("aipC");
                  d(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + f).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (b) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            c = true;
          } catch (b) {}
        }
      };
      e.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (b) {}
          b();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (b) {}
          b();
        }
      };
      return e;
    }
    function O(b, c) {
      var d = $("#" + b);
      var e = c;
      var f = {};
      var g = false;
      f.a = function () {
        if (!g) {
          d.empty();
          d.append("<div id='" + e + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (b) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(e);
            });
            g = true;
          } catch (b) {}
        }
      };
      f.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (b) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(e);
          });
        } catch (b) {}
      };
      return f;
    }
    function P() {
      function b(b) {
        var c = b + Math.floor(Math.random() * 65535) * 37;
        s(ha.d, c, 30);
      }
      function d() {
        return parseInt(p(ha.d)) % 37;
      }
      return function () {
        var e = d();
        console.log("init1 pSC: " + e);
        if (e < 0 || e >= _a.e) {
          e = Math.max(0, _a.e - 2);
          console.log("init2 pSC: " + e);
        }
        var f = {};
        Z = f;
        f.f = _a;
        f.g = false;
        f.i = Date.now();
        f.j = 0;
        f.k = 0;
        f.l = null;
        f.m = X;
        f.n = W;
        f.o = null;
        f.p = null;
        f.q = null;
        f.r = null;
        f.s = null;
        f.t = null;
        f.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (b) {
              if (b.coords !== undefined) {
                var c = b.coords;
                if (c.latitude !== undefined && c.longitude !== undefined) {
                  f.l = b;
                }
              }
            }, function (b) {});
          }
        } catch (b) {}
        f.v = function () {
          f.p = new ca();
          f.q = new va();
          f.r = new ea();
          f.s = new wa();
          f.t = new sa();
          f.u = new ya();
          f.o = new Q();
          f.o.z = new oa(f.o);
          f.a();
        };
        f.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (b) {}
          f.o.A = function () {
            f.o.B();
          };
          f.o.C = function () {
            var b = f.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", b);
            } catch (b) {}
            f.r.G(ea.AudioState.H);
            f.s.I(f.s.H.J());
          };
          f.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (b) {}
            if ($("body").height() >= 430) {
              f.f.K.c();
            }
            f.p.L();
            (function () {
              var b = Math.floor(f.o.N.M);
              var c = f.o.O;
              if (f.u.P()) {
                f.u.Q(function () {
                  f.R(b, c);
                });
              } else {
                f.R(b, c);
              }
            })();
          };
          f.o.S = function (b) {
            b(f.s.H.T(), f.s.H.U());
          };
          f.u.V(function () {
            if (f.p.W) {
              f.r.G(ea.AudioState.F);
              f.s.I(f.s.F);
            }
            if (f.u.P()) {
              try {
                var b = f.u.X();
                ga("set", "userId", b);
              } catch (b) {}
            }
            if (f.Y() && f.u.P() && !f.u.Z()) {
              f.$(false, false);
              f.s.aa._(new Za());
            } else {
              f.ba(true);
            }
          });
          f.p.ca(function () {
            f.r.G(ea.AudioState.F);
            f.s.I(f.s.F);
          });
          f.q.a(function () {
            f.o.a();
            f.r.a();
            f.s.a();
            f.t.a();
            f.p.a();
            f.u.a();
            if (f.Y() && !f.Z()) {
              f.s.aa._(new Za());
            } else {
              f.ba(true);
            }
          });
        };
        f.da = function (b) {
          if (f.u.P()) {
            var c = f.u.ea();
            $.get(U + "/pub/wuid/" + c + "/consent/change?value=" + encodeURI(b), function (b) {});
          }
        };
        f.fa = function (b) {
          var d = f.u.ea();
          var e = f.s.F.D();
          var g = f.s.F.ga();
          var h = f.t.ha(ta.ia);
          var i = f.t.ha(ta.ja);
          var j = f.t.ha(ta.ka);
          var k = f.t.ha(ta.la);
          var l = f.t.ha(ta.ma);
          var m = 0;
          if (f.l != null) {
            var n = f.l.coords.latitude;
            var o = f.l.coords.longitude;
            m = Math.max(0, Math.min(32767, (n + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (o + 180) / 360 * 65536)) << 16;
          }
          c.testSkinCustom(h);
          let p = "x" + (h > 9999 ? "0000" : h.toString().padStart(4, 0)) + (l > 999 ? "000" : l.toString().padStart(3, 0)) + (i > 999 ? "000" : i.toString().padStart(3, 0)) + (j > 999 ? "000" : j.toString().padStart(3, 0));
          g = (g.length >= 32 ? g.substr(0, 16) : g.substr(0, 16).padEnd(16, "_")) + p;
          g = g.trim();
          console.log(g);
          var q = U + "/pub/wuid/" + d + "/start?gameMode=" + encodeURI(e) + "&gh=" + m + "&nickname=" + encodeURI(g) + "&skinId=" + c.validInput(h) + "&eyesId=" + encodeURI(i) + "&mouthId=" + encodeURI(j) + "&glassesId=" + encodeURI(k) + "&hatId=" + encodeURI(l);
          console.log("urlRequest: " + q);
          $.get(q, function (c) {
            var d = c.server_url;
            b(d);
          });
        };
        f.na = function () {
          e++;
          console.log("start pSC: " + e);
          if (!f.f.oa && e >= f.f.e) {
            f.s.I(f.s.pa);
            f.r.G(ea.AudioState.qa);
            f.f.ra.b();
          } else {
            b(e);
            f.sa();
          }
        };
        f.sa = function (b) {
          if (f.o.ta()) {
            f.s.I(f.s.ua);
            f.r.G(ea.AudioState.ua);
            var c = f.s.F.D();
            s(ha.va, c, 30);
            console.log("save gm: " + c);
            var d = f.s.xa.wa();
            s(ha.ya, d, 30);
            console.log("save sPN: " + d);
            if (f.u.P()) {
              f.fa(function (b) {
                f.o.za(window.server_url || b, f.u.ea());
              });
            } else {
              var e = f.s.F.ga();
              s(ha.Aa, e, 30);
              var g = f.t.ha(ta.ia);
              s(ha.Ba, g, 30);
              f.fa(function (b) {
                f.o.Ca(b, e, g);
              });
            }
          }
        };
        f.R = function (b, c) {
          var d = f.s.F.ga();
          f.s.H.Da(b, c, d);
          f.r.G(ea.AudioState.Ea);
          f.s.I(f.s.H.Fa());
        };
        f.Ga = function () {
          if (!f.Ha()) {
            return f.t.Ia();
          }
          var b = parseInt(p(ha.Ba));
          if (b != null && f.t.Ja(b, ta.ia)) {
            return b;
          } else {
            return f.t.Ia();
          }
        };
        f.Ka = function (b) {
          s(ha.La, !!b, 1800);
        };
        f.Ha = function () {
          return p(ha.La) === "true";
        };
        f.ba = function (c) {
          if (c != f.g) {
            f.g = c;
            var d = d || {};
            d.consented = c;
            d.gdprConsent = c;
            f.f.Ma.a();
            f.f.K.a();
            f.f.ra.a(function (c) {
              if (c) {
                b(e = 0);
              }
              f.sa();
            });
          }
        };
        f.$ = function (b, c) {
          s(ha.Na, b ? "true" : "false");
          if (c) {
            f.da(b);
          }
          f.ba(b);
        };
        f.Z = function () {
          switch (p(ha.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        f.Y = function () {
          try {
            return !!window.isIPInEEA || f.l != null && !!ia.Oa(f.l.coords.latitude, f.l.coords.longitude);
          } catch (b) {
            return true;
          }
        };
        f.Pa = function () {
          f.j = Date.now();
          f.k = f.j - f.i;
          f.o.Qa(f.j, f.k);
          f.s.Qa(f.j, f.k);
          f.i = f.j;
        };
        f.Ra = function () {
          f.s.Ra();
        };
        return f;
      }();
    }
    function Q() {
      var b = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new ma(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      b.fb.ub = 500;
      b.N = new Ba(b.fb);
      b.a = function () {
        b.N.vb(d().s.H.wb);
        setInterval(function () {
          b.S(function (c, d) {
            b.xb(c, d);
          });
        }, 10);
      };
      b.yb = function (c, d, e, f) {
        b.lb = c;
        b.mb = d;
        b.nb = e;
        b.ob = f;
        b.zb();
      };
      b.Ab = function (c) {
        b.kb = c;
        b.zb();
      };
      b.zb = function () {
        b.pb = b.lb - b.kb;
        b.qb = b.mb + b.kb;
        b.rb = b.nb - b.kb;
        b.sb = b.ob + b.kb;
      };
      b.Qa = function (c, d) {
        b.$a += d;
        b.Za -= b.Ya * 0.2 * d;
        b.z.Bb();
        if (b.db != null && (b.cb === 2 || b.cb === 3)) {
          b.Cb(c, d);
          b.jb = 4 + b.ib * b.N.Db;
        }
        var e = 1000 / Math.max(1, d);
        var f = 0;
        var g = 0;
        for (; g < b.Xa.length - 1; g++) {
          f = f + b.Xa[g];
          b.Xa[g] = b.Xa[g + 1];
        }
        b.Xa[b.Xa.length - 1] = e;
        b.Wa = (f + e) / b.Xa.length;
      };
      b.Eb = function (c, d) {
        return c > b.pb && c < b.qb && d > b.rb && d < b.sb;
      };
      b.Cb = function (c, d) {
        var e = b.$a + b.Za;
        var f = (e - b._a) / (b.ab - b._a);
        b.N.Fb(c, d);
        b.N.Gb(c, d, f, b.Eb);
        var g = 0;
        var h;
        for (h in b.hb) {
          var i = b.hb[h];
          i.Fb(c, d);
          i.Gb(c, d, f, b.Eb);
          if (i.Hb && i.Db > g) {
            g = i.Db;
          }
          if (!i.Ib && (i.Jb < 0.005 || !i.Hb)) {
            i.Kb();
            delete b.hb[i.Mb.Lb];
          }
        }
        b.Ab(g * 3);
        var j;
        for (j in b.gb) {
          var k = b.gb[j];
          k.Fb(c, d);
          k.Gb(c, d, b.Eb);
          if (k.Nb && (k.Jb < 0.005 || !b.Eb(k.Ob, k.Pb))) {
            k.Kb();
            delete b.gb[k.Mb.Lb];
          }
        }
      };
      b.Qb = function (c, e) {
        if (b.cb === 1) {
          b.cb = 2;
          b.C();
        }
        var f = d().j;
        b.bb = c;
        if (c === 0) {
          b._a = f - 95;
          b.ab = f;
          b.$a = b._a;
          b.Za = 0;
        } else {
          b._a = b.ab;
          b.ab = b.ab + e;
        }
        var g = b.$a + b.Za;
        b.Ya = (g - b._a) / (b.ab - b._a);
      };
      b.Rb = function () {
        if (b.cb === 1 || b.cb === 2) {
          b.cb = 3;
          var c = b.db;
          setTimeout(function () {
            if (b.cb === 3) {
              b.cb = 0;
            }
            if (c != null && c === b.db) {
              b.db.close();
              b.db = null;
            }
          }, 5000);
          b.B();
        }
      };
      b.ta = function () {
        return b.cb !== 2 && (b.cb = 1, b.z.Sb(), b.gb = {}, b.hb = {}, b.N.Tb(), b.db != null && (b.db.close(), b.db = null), true);
      };
      b.Ub = function () {
        b.db = null;
        b.z.Sb();
        if (b.cb !== 3) {
          b.A();
        }
        b.cb = 0;
      };
      b.za = function (c, d) {
        b.Vb(c, function () {
          var c = Math.min(2048, d.length);
          var e = new ArrayBuffer(6 + c * 2);
          var f = new DataView(e);
          var g = 0;
          f.setInt8(g, 129);
          g = g + 1;
          f.setInt16(g, 2800);
          g = g + 2;
          f.setInt8(g, 1);
          g = g + 1;
          f.setInt16(g, c);
          g = g + 2;
          var h = 0;
          for (; h < c; h++) {
            f.setInt16(g, d.charCodeAt(h));
            g = g + 2;
          }
          b.Wb(e);
        });
      };
      b.Ca = function (c, d, e) {
        b.Vb(c, function () {
          var c = Math.min(32, d.length);
          var f = new ArrayBuffer(7 + c * 2);
          var g = new DataView(f);
          var h = 0;
          g.setInt8(h, 129);
          h = h + 1;
          g.setInt16(h, 2800);
          h = h + 2;
          g.setInt8(h, 0);
          h = h + 1;
          g.setInt16(h, e);
          h = h + 2;
          g.setInt8(h, c);
          h++;
          var i = 0;
          for (; i < c; i++) {
            g.setInt16(h, d.charCodeAt(i));
            h = h + 2;
          }
          b.Wb(f);
        });
      };
      b.Wb = function (c) {
        try {
          if (b.db != null && b.db.readyState === WebSocket.OPEN) {
            b.db.send(c);
          }
        } catch (c) {
          console.log("Socket send error: " + c);
          b.Ub();
        }
      };
      b.xb = function (c, d) {
        var e = d ? 128 : 0;
        var f = B(c) / aa * 128 & 127;
        var g = (e | f) & 255;
        if (b.eb !== g) {
          var h = new ArrayBuffer(1);
          new DataView(h).setInt8(0, g);
          b.Wb(h);
          b.eb = g;
        }
      };
      b.Vb = function (d, e) {
        let g = l(!i.mobile);
        var h = b.db = new WebSocket(d);
        h.binaryType = "arraybuffer";
        window.onOpen = h.onopen = function () {
          jb("open");
          if (b.db === h) {
            console.log("Socket opened");
            e();
          }
          f = true;
        };
        window.onclose = h.onclose = function () {
          jb("closed");
          c.aload = false;
          if (b.db === h) {
            console.log("Socket closed");
            b.Ub();
          }
          f = false;
          if (g) {
            g.destroy();
          }
        };
        h.onerror = function (c) {
          if (b.db === h) {
            console.log("Socket error");
            b.Ub();
          }
          f = false;
          if (g) {
            g.destroy();
          }
        };
        h.onmessage = function (c) {
          if (b.db === h) {
            b.z.Xb(c.data);
          }
        };
      };
      return b;
    }
    var R = "/images/linelogo-xmas2022.png";
    var S = "/images/guest-avatar-xmas2022.png";
    var T = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var U = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=");
    var V = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
    var W = window.I18N_LANG;
    W ||= "en";
    var X = undefined;
    switch (W) {
      case "uk":
        X = "uk_UA";
        break;
      case "de":
        X = "de_DE";
        break;
      case "fr":
        X = "fr_FR";
        break;
      case "ru":
        X = "ru_RU";
        break;
      case "es":
        X = "es_ES";
        break;
      default:
        X = "en_US";
    }
    moment.locale(X);
    var Y = false;
    var Z = undefined;
    var _ = function () {
      var b = {
        Yb: eval(atob("UElYSQ=="))
      };
      var c = b.Yb[atob("QkxFTkRfTU9ERVM=")];
      var d = b.Yb[atob("V1JBUF9NT0RFUw==")];
      return {
        Zb: b.Yb[atob("Q29udGFpbmVy")],
        $b: b.Yb[atob("QmFzZVRleHR1cmU=")],
        _b: b.Yb[atob("VGV4dHVyZQ==")],
        ac: b.Yb[atob("UmVuZGVyZXI=")],
        bc: b.Yb[atob("R3JhcGhpY3M=")],
        cc: b.Yb[atob("U2hhZGVy")],
        dc: b.Yb[atob("UmVjdGFuZ2xl")],
        ec: b.Yb[atob("U3ByaXRl")],
        fc: b.Yb[atob("VGV4dA==")],
        gc: b.Yb[atob("R2VvbWV0cnk=")],
        hc: b.Yb[atob("TWVzaA==")],
        ic: {
          jc: c[atob("QURE")]
        },
        kc: {
          lc: d[atob("UkVQRUFU")]
        }
      };
    }();
    var aa = Math.PI * 2;
    (function () {
      var b = "Z2V0";
      var c = "=";
      var d = b + "SW50";
      var e = b + "RmxvYXQ";
      var f = [atob(d + "OA=="), atob(d + "MTY" + c), atob(d + "MzI" + c), atob(e + "zMg=="), atob(e + "2NA==")];
      DataView.prototype.mc = function (b) {
        return this[f[0]](b);
      };
      DataView.prototype.nc = function (b) {
        return this[f[1]](b);
      };
      DataView.prototype.oc = function (b) {
        return this[f[2]](b);
      };
      DataView.prototype.pc = function (b) {
        return this[f[3]](b);
      };
      DataView.prototype.qc = function (b) {
        return this[f[4]](b);
      };
    })();
    var ba = function () {
      function b(b) {
        this.rc = b;
        this.sc = false;
        this.tc = 1;
      }
      b.VELOCITY_TYPE = 0;
      b.FLEXIBLE_TYPE = 1;
      b.MAGNETIC_TYPE = 2;
      b.ZOOM_TYPE = 6;
      b.X2_TYPE = 3;
      b.X5_TYPE = 4;
      b.X10_TYPE = 5;
      return b;
    }();
    var ca = function () {
      function c() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = da.yc();
      }
      function d(b, c) {
        for (var d in b) {
          if (b.hasOwnProperty(d)) {
            c(d, b[d]);
          }
        }
      }
      c.prototype.a = function () {
        this.L();
      };
      c.prototype.W = function () {
        return this.wc != null;
      };
      c.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      c.prototype.Ac = function () {
        return this.wc;
      };
      c.prototype.L = function () {
        var b = this;
        $.get(V + "/dynamic/assets/revision.json", function (c) {
          if (c > b.zc()) {
            b.Bc();
          }
        });
      };
      c.prototype.Bc = function () {
        var b = this;
        $.get(V + "/dynamic/assets/registry.json", function (c) {
          if (c.revision > b.zc()) {
            b.Cc(c);
          }
        });
      };
      c.prototype.ca = function (b) {
        this.uc.push(b);
      };
      c.prototype.Dc = function () {
        return this.xc;
      };
      c.prototype.Ec = function () {
        for (var b = 0; b < this.uc.length; b++) {
          this.uc[b]();
        }
      };
      c.prototype.Fc = function (b, c) {
        if (b.revision > this.zc()) {
          var e = c;
          d(this.vc, function (b, c) {
            var d = e[b];
            if (d == null || c.Gc !== d.Gc) {
              print("disposing prev texture: " + b + " at " + c.Gc);
              c.Hc.destroy();
            }
          });
          this.vc = e;
          this.wc = b;
          this.xc = da.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      c.prototype.Cc = function (c) {
        var d = {};
        (function (b, c) {
          for (var d in b) {
            if (b.hasOwnProperty(d)) {
              c(d, b[d]);
            }
          }
        })(c.textureDict, function (c, e) {
          var f = b + e.relativePath;
          if (!e.custom) {
            f = V + e.relativePath;
          }
          try {
            d[c] = new ka(f, _.$b.from(e.file || f));
          } catch (b) {
            console.log(f);
          }
        });
        this.Fc(c, d);
      };
      return c;
    }();
    var da = function () {
      function b() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function c(b, c) {
        for (var d in b) {
          if (b.hasOwnProperty(d)) {
            c(d, b[d]);
          }
        }
      }
      b.yc = function () {
        var b = new da();
        b.Jc = {};
        b.Kc = {
          Zc: null,
          $c: null
        };
        b.Lc = {};
        b.Mc = {
          Zc: null
        };
        b.Nc = {};
        b.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        b.Pc = {};
        b.Qc = {
          ad: {},
          bd: b.Oc,
          cd: b.Kc
        };
        b.Rc = {};
        b.Sc = {
          Zc: []
        };
        b.Tc = {};
        b.Uc = {
          Zc: []
        };
        b.Vc = {};
        b.Wc = {
          Zc: []
        };
        b.Xc = {};
        b.Yc = {
          Zc: []
        };
        return b;
      };
      b.Ic = function (b, d) {
        var e = new da();
        var f = {};
        c(b.colorDict, function (b, c) {
          f[b] = c;
        });
        var g = {};
        c(b.regionDict, function (b, c) {
          g[b] = new ua(d[c.texture].Hc, c.x, c.y, c.w, c.h, c.px, c.py, c.pw, c.ph);
        });
        e.Nc = {};
        for (var h = 0; h < b.skinArrayDict.length; h++) {
          var i = b.skinArrayDict[h];
          e.Nc[i.id] = new da.WormSkinData("#" + f[i.prime], i.base.map(function (b) {
            return g[b];
          }), i.glow.map(function (b) {
            return g[b];
          }));
        }
        var j = b.skinUnknown;
        e.Oc = new da.WormSkinData("#" + f[j.prime], j.base.map(function (b) {
          return g[b];
        }), j.glow.map(function (b) {
          return g[b];
        }));
        e.Rc = {};
        c(b.eyesDict, function (b, c) {
          b = parseInt(b);
          e.Rc[b] = new da.WearSkinData(c.base.map(function (b) {
            return g[b.region];
          }));
        });
        e.Sc = new da.WearSkinData(b.eyesUnknown.base.map(function (b) {
          return g[b.region];
        }));
        e.Tc = {};
        c(b.mouthDict, function (b, c) {
          b = parseInt(b);
          e.Tc[b] = new da.WearSkinData(c.base.map(function (b) {
            return g[b.region];
          }));
        });
        e.Uc = new da.WearSkinData(b.mouthUnknown.base.map(function (b) {
          return g[b.region];
        }));
        e.Vc = {};
        c(b.glassesDict, function (b, c) {
          b = parseInt(b);
          e.Vc[b] = new da.WearSkinData(c.base.map(function (b) {
            return g[b.region];
          }));
        });
        e.Wc = new da.WearSkinData(b.glassesUnknown.base.map(function (b) {
          return g[b.region];
        }));
        e.Xc = {};
        c(b.hatDict, function (b, c) {
          b = parseInt(b);
          e.Xc[b] = new da.WearSkinData(c.base.map(function (b) {
            return g[b.region];
          }));
        });
        e.Yc = new da.WearSkinData(b.hatUnknown.base.map(function (b) {
          return g[b.region];
        }));
        e.Jc = {};
        c(b.portionDict, function (b, c) {
          b = parseInt(b);
          e.Jc[b] = new da.PortionSkinData(g[c.base], g[c.glow]);
        });
        var k = b.portionUnknown;
        e.Kc = new da.PortionSkinData(g[k.base], g[k.glow]);
        e.Lc = {};
        c(b.abilityDict, function (b, c) {
          b = parseInt(b);
          e.Lc[b] = new da.AbilitySkinData(g[c.base]);
        });
        var l = b.abilityUnknown;
        e.Mc = new da.AbilitySkinData(g[l.base]);
        e.Pc = {};
        c(b.teamDict, function (b, c) {
          b = parseInt(b);
          e.Pc[b] = new da.TeamSkinData(c.name, new da.WormSkinData("#" + f[c.skin.prime], [], c.skin.glow.map(function (b) {
            return g[b];
          })), new da.PortionSkinData([], g[c.portion.glow]));
        });
        e.Qc = new da.TeamSkinData({}, e.Oc, e.Kc);
        return e;
      };
      b.prototype.dd = function (b) {
        var c = this.Nc[b];
        return c || this.Oc;
      };
      b.prototype.ed = function (b) {
        var c = this.Pc[b];
        return c || this.Qc;
      };
      b.prototype.fd = function (b) {
        var c = this.Rc[b];
        return c || this.Sc;
      };
      b.prototype.gd = function (b) {
        var c = this.Tc[b];
        return c || this.Uc;
      };
      b.prototype.hd = function (b) {
        var c = this.Vc[b];
        return c || this.Wc;
      };
      b.prototype.jd = function (b) {
        var c = this.Xc[b];
        return c || this.Yc;
      };
      b.prototype.kd = function (b) {
        var c = this.Jc[b];
        return c || this.Kc;
      };
      b.prototype.ld = function (b) {
        var c = this.Lc[b];
        return c || this.Mc;
      };
      b.TeamSkinData = function () {
        function b(b, c, d) {
          this.ad = b;
          this.bd = c;
          this.cd = d;
        }
        return b;
      }();
      b.WormSkinData = function () {
        function b(b, c, d) {
          this._c = b;
          this.Zc = c;
          this.$c = d;
        }
        return b;
      }();
      b.WearSkinData = function () {
        function b(b) {
          this.Zc = b;
        }
        return b;
      }();
      b.PortionSkinData = function () {
        function b(b, c) {
          this.Zc = b;
          this.$c = c;
        }
        return b;
      }();
      b.AbilitySkinData = function () {
        function b(b) {
          this.Zc = b;
        }
        return b;
      }();
      return b;
    }();
    var ea = function () {
      function b() {
        this.md = ea.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      b.prototype.a = function () {};
      b.prototype.rd = function (b) {
        this.od = b;
      };
      b.prototype.G = function (b) {
        this.md = b;
        this.sd();
      };
      b.prototype.td = function (b) {
        this.nd = b;
        this.sd();
      };
      b.prototype.sd = function () {};
      b.prototype.ud = function (b, c) {
        if (!d().p.W) {
          return null;
        }
        var e = b[c];
        if (e == null || e.length == 0) {
          return null;
        } else {
          return e[Math.floor(Math.random() * e.length)].cloneNode();
        }
      };
      b.prototype.vd = function (b, c, d) {
        if (this.od && d > 0) {
          var e = this.ud(b, c);
          if (e != null) {
            e.volume = Math.min(1, d);
            e.play();
          }
        }
      };
      b.prototype.wd = function (b, c) {
        if (this.md.xd) {
          this.vd(app.q.yd, b, c);
        }
      };
      b.prototype.zd = function (b, c) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, b, c);
        }
      };
      b.prototype.Cd = function () {};
      b.prototype.Dd = function () {};
      b.prototype.Ed = function () {};
      b.prototype.Fd = function () {};
      b.prototype.Gd = function () {};
      b.prototype.Hd = function () {};
      b.prototype.Id = function (b, c, d) {};
      b.prototype.Jd = function (b) {};
      b.prototype.Kd = function (b) {};
      b.prototype.Ld = function (b) {};
      b.prototype.Md = function (b) {};
      b.prototype.Nd = function (b) {};
      b.prototype.Od = function (b) {};
      b.prototype.Pd = function (b) {};
      b.prototype.Qd = function (b) {};
      b.prototype.Rd = function (b) {};
      b.prototype.Sd = function (b) {};
      b.prototype.Td = function (b) {};
      b.prototype.Ud = function (b) {};
      b.prototype.Vd = function (b) {};
      b.prototype.Wd = function (b) {};
      b.prototype.Xd = function (b, c) {};
      b.prototype.Yd = function (b) {};
      b.prototype.Zd = function (b, c, d) {};
      (function () {
        function b(b) {
          this.$d = new c(b, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        b.prototype.be = function (b) {
          if (b) {
            this.b();
          } else {
            this.ce();
          }
        };
        b.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        b.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function b(b) {
          this.ge = b.map(function (b) {
            return new c(b, 0.4);
          });
          d(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function d(b, c, d) {
          for (var e = d - 1; e > c; e--) {
            var f = c + Math.floor(Math.random() * (e - c + 1));
            var g = b[e];
            b[e] = b[f];
            b[f] = g;
          }
        }
        b.prototype.be = function (b) {
          if (b) {
            this.b();
          } else {
            this.ce();
          }
        };
        b.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        b.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        b.prototype.ke = function (b) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(b, 100);
            var c = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var d = this;
            var e = setTimeout(function () {
              if (d.ae && e == d.ie) {
                d.he.fe(d.je, 100);
                d.he = d.le();
                d.he._d.currentTime = 0;
                d.ke(d.je);
              }
            }, c);
            this.ie = e;
          }
        };
        b.prototype.le = function () {
          var b = this.ge[0];
          var c = Math.max(1, this.ge.length / 2);
          d(this.ge, c, this.ge.length);
          this.ge.push(this.ge.shift());
          return b;
        };
      })();
      var c = function () {
        function b(b, c) {
          this._d = b;
          this.me = c;
          this.de = 0;
          b.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        b.prototype.ee = function (b, c) {
          console.log("fade IN " + this._d.src);
          this.pe(true, b, c);
        };
        b.prototype.fe = function (b, c) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, b, c);
        };
        b.prototype.pe = function (b, c, d) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var e = this;
          var f = 1 / (c / d);
          var g = setInterval(function () {
            if (e.oe && g != e.ne) {
              clearInterval(g);
              return;
            }
            if (b) {
              e.de = Math.min(1, e.de + f);
              e._d.volume = e.de * e.me;
              if (e.de >= 1) {
                e.oe = false;
                clearInterval(g);
              }
            } else {
              e.de = Math.max(0, e.de - f);
              e._d.volume = e.de * e.me;
              if (e.de <= 0) {
                e._d.pause();
                e.oe = false;
                clearInterval(g);
              }
            }
          }, d);
          this.oe = true;
          this.ne = g;
          this._d.play();
        };
        return b;
      }();
      b.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return b;
    }();
    var fa = function () {
      function b(b) {
        this.se = b;
        this.te = b.get()[0];
        this.ue = new _.ac({
          view: this.te,
          backgroundColor: c,
          antialias: true
        });
        this.ve = new _.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var c = 0;
      function e(b, c) {
        return b + Math.random(c - b);
      }
      function f(b) {
        if (b >= 0) {
          return Math.cos(b % aa);
        } else {
          return Math.cos(b % aa + aa);
        }
      }
      function g(b) {
        if (b >= 0) {
          return Math.sin(b % aa);
        } else {
          return Math.sin(b % aa + aa);
        }
      }
      var h = [{
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: e(0, aa),
        Ae: e(0, aa),
        Be: e(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      b.prototype.a = function () {
        var b = d();
        this.ue.backgroundColor = c;
        this.we = new Array(h.length);
        for (var e = 0; e < this.we.length; e++) {
          this.we[e] = new _.ec();
          this.we[e].texture = b.q.Fe;
          this.we[e].anchor.set(0.5);
          this.we[e].zIndex = 1;
          this.ve.addChild(this.we[e]);
        }
        this.xe = new Array(b.q.Ge.length);
        for (var f = 0; f < this.xe.length; f++) {
          this.xe[f] = new _.ec();
          this.xe[f].texture = b.q.Ge[f];
          this.xe[f].anchor.set(0.5);
          this.xe[f].zIndex = 2;
          this.ve.addChild(this.xe[f]);
        }
        this.ye = new Array(this.xe.length);
        for (var g = 0; g < this.ye.length; g++) {
          this.ye[g] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      b.sc = false;
      b.Le = function (c) {
        b.sc = c;
      };
      b.prototype.Ra = function () {
        var b = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var c = this.se.width();
        var d = this.se.height();
        this.ue.resize(c, d);
        this.ue.resolution = b;
        this.te.width = b * c;
        this.te.height = b * d;
        var e = Math.max(c, d) * 0.8;
        for (var f = 0; f < this.we.length; f++) {
          this.we[f].width = e;
          this.we[f].height = e;
        }
      };
      b.prototype.Pa = function (c, d) {
        if (b.sc) {
          var e = c / 1000;
          var i = d / 1000;
          var j = this.se.width();
          var k = this.se.height();
          for (var l = 0; l < this.we.length; l++) {
            var m = h[l % h.length];
            var n = this.we[l];
            var o = f(m.Ce * (e * 0.08) + m.Ae);
            var p = g(m.De * (e * 0.08));
            var q = 0.2 + f(m.Ae + m.Be * e) * 0.2;
            n.tint = m.Ee;
            n.alpha = q;
            n.position.set(j * (0.2 + (o + 1) * 0.5 * 0.6), k * (0.1 + (p + 1) * 0.5 * 0.8));
          }
          var r = Math.max(j, k) * 0.05;
          for (var s = 0; s < this.xe.length; s++) {
            var t = this.ye[s];
            var u = this.xe[s];
            var v = aa * s / this.xe.length + t.He;
            t.Ke += t.Ie * i;
            if (t.Ke > 1.3) {
              t.He = Math.random() * aa;
              t.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              t.Je = 0.15 + Math.random() * 0.7;
              t.Ke = -0.3;
            }
            var w = t.Je + Math.sin(Math.sin(v + e * 0.48) * 6) * 0.03;
            var x = t.Ke;
            var y = D(Math.sin(Math.PI * x), 0.1, 1);
            var z = (0.4 + (1 + Math.sin(v + e * 0.12)) * 0.5 * 1.2) * 0.5;
            var A = v + t.Ie * 2 * e;
            u.alpha = y;
            u.position.set(j * w, k * x);
            u.rotation = A;
            var B = u.texture.width / u.texture.height;
            u.width = z * r;
            u.height = z * r * B;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return b;
    }();
    var ha = function () {
      function b() {}
      b.Na = "consent_state_2";
      b.ya = "showPlayerNames";
      b.Me = "musicEnabled";
      b.Ne = "sfxEnabled";
      b.Oe = "account_type";
      b.va = "gameMode";
      b.Aa = "nickname";
      b.Ba = "skin";
      b.d = "prerollCount";
      b.La = "shared";
      return b;
    }();
    var ia = function () {
      function b(b, c, d) {
        var e = false;
        for (var f = d.length, g = 0, h = f - 1; g < f; h = g++) {
          if (d[g][1] > c != d[h][1] > c && b < (d[h][0] - d[g][0]) * (c - d[g][1]) / (d[h][1] - d[g][1]) + d[g][0]) {
            e = !e;
          }
        }
        return e;
      }
      var c = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (d, e) {
          return b(e, d, c);
        }
      };
    }();
    var ja = function () {
      function b(b) {
        var c = undefined;
        c = b > 0 ? "+" + Math.floor(b) : b < 0 ? "-" + Math.floor(b) : "0";
        var d = Math.min(1.5, 0.5 + b / 600);
        var f = undefined;
        if (b < 1) {
          f = "0xFFFFFF";
        } else if (b < 30) {
          var h = (b - 1) / 29;
          f = e((1 - h) * 1 + h * 0.96, (1 - h) * 1 + h * 0.82, (1 - h) * 1 + h * 0);
        } else if (b < 300) {
          var i = (b - 30) / 270;
          f = e((1 - i) * 0.96 + i * 0.93, (1 - i) * 0.82 + i * 0.34, (1 - i) * 0 + i * 0.25);
        } else if (b < 700) {
          var j = (b - 300) / 400;
          f = e((1 - j) * 0.93 + j * 0.98, (1 - j) * 0.34 + j * 0, (1 - j) * 0.25 + j * 0.98);
        } else {
          f = e(0.98, 0, 0.98);
        }
        var k = Math.random();
        var l = 1 + Math.random() * 0.5;
        return new g(c, f, true, 0.5, d, k, l);
      }
      function c(b, c) {
        var d = undefined;
        var f = undefined;
        if (c) {
          d = 1.3;
          f = e(0.93, 0.34, 0.25);
        } else {
          d = 1.1;
          f = e(0.96, 0.82, 0);
        }
        return new g(b, f, true, 0.5, d, 0.5, 0.7);
      }
      function e(b, c, d) {
        return ((b * 255 & 255) << 16) + ((c * 255 & 255) << 8) + (d * 255 & 255);
      }
      var f = A(_.Zb, function () {
        _.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      f.prototype.Re = function (c) {
        this.Qe += c;
        if (this.Qe >= 1) {
          var d = Math.floor(this.Qe);
          this.Qe -= d;
          var e = b(d);
          this.addChild(e);
          this.Pe.push(e);
        }
      };
      f.prototype.Se = function (b) {
        jb("count", b);
        if (b) {
          if (i.ModeStremerheadshot) {} else {
            var d = document.createElement("audio");
            d.src = "https://haylamday.com/video/headshot_sound_effect.mp3";
            d.play();
          }
          ;
          var e = c(u("index.game.floating.headshot"), true);
          this.addChild(e);
          this.Pe.push(e);
          if (e) {
            i.emoji_headshot = true;
            setTimeout(function () {
              i.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var e = c(u("index.game.floating.wellDone"), false);
          this.addChild(e);
          this.Pe.push(e);
          if (e) {
            i.emoji_kill = true;
            setTimeout(function () {
              i.emoji_kill = false;
            }, 3000);
          }
        }
      };
      f.prototype.Te = function (b, c) {
        var e = d().s.H.wb;
        var f = e.ue.width / e.ue.resolution;
        var g = e.ue.height / e.ue.resolution;
        var h = 0;
        while (h < this.Pe.length) {
          var i = this.Pe[h];
          i.Ue = i.Ue + c / 2000 * i.Ve;
          i.We = i.We + c / 2000 * i.Xe;
          i.alpha = Math.sin(Math.PI * i.We) * 0.5;
          i.scale.set(i.Ue);
          i.position.x = f * (0.25 + i.Ye * 0.5);
          i.position.y = i.Ze ? g * (1 - (1 + i.We) * 0.5) : g * (1 - (0 + i.We) * 0.5);
          if (i.We > 1) {
            J(i);
            this.Pe.splice(h, 1);
            h--;
          }
          h++;
        }
      };
      var g = function () {
        return A(_.fc, function (b, c, d, e, f, g, h) {
          _.fc.call(this, b, {
            fill: c,
            fontFamily: "vuonghiep",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = d;
          this.Ue = e;
          this.Ve = f;
          this.Ye = g;
          this.We = 0;
          this.Xe = h;
        });
      }();
      return f;
    }();
    var ka = function () {
      function b(b, c) {
        this.Gc = b;
        this.Hc = c;
      }
      return b;
    }();
    var la = {
      $e: 0,
      _e: 16
    };
    var ma = function () {
      function b() {
        this.af = la.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      b.TEAM_DEFAULT = 0;
      b.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return b;
    }();
    var na = function () {
      function b(b) {
        this.se = b;
        this.te = b.get()[0];
        this.ue = new _.ac({
          view: this.te,
          backgroundColor: c,
          antialias: true
        });
        this.ve = new _.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new za();
        this.mf = new _.bc();
        this.nf = new _.Zb();
        this.pf = new _.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _.Zb();
        this.rf = new _.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _.Zb();
        this.tf = new e();
        this.uf = new f();
        this.vf = new g();
        this.wf = new ja();
        this.xf = new _.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var c = 0;
      b.prototype.a = function () {
        this.ue.backgroundColor = c;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = d().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      b.prototype.Ra = function () {
        var b = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var c = this.se.width();
        var d = this.se.height();
        this.ue.resize(c, d);
        this.ue.resolution = b;
        this.te.width = b * c;
        this.te.height = b * d;
        this.jf = Math.min(Math.min(c, d), Math.max(c, d) * 0.625);
        this.xf.position.x = c / 2;
        this.xf.position.y = d / 2;
        this.xf.width = c;
        this.xf.height = d;
        this.vf.position.x = c - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(c, d), window.multiplier * Math.min(c, d));
        if (i.ModeStremer) {
          this.tf.position.x = 790;
          this.uf.position.x = 615;
          this.vf.position.x = c - 830;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = c - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 20;
        this.tf.addChild(r.clock);
        this.vf.addChild(r.value_server);
        this.vf.addChild(r.containerImgS);
        this.tf.addChild(r.borderImg);
        window.retundFlagError = () => {
          return r.containerImgS.texture = PIXI.Texture.fromImage(i.flag);
        };
        this.tf.addChild(r.containerCountInfo);
      };
      b.prototype.Te = function (b, c) {
        var e = d();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(b.af == la.$e ? e.q.Cf : e.q.Df);
        var f = this.mf;
        f.clear();
        f.lineStyle(0.8, 65535);
        f.drawCircle(0, 0, b.ub);
        f.endFill();
        this.vf.Ef = c;
        this.sf.visible = c;
      };
      b.prototype.Pa = function (b, c) {
        if (this.ue.width > 5) {
          var e = d();
          var f = e.o.N;
          var g = this.ue.width / this.ue.resolution;
          var h = this.ue.height / this.ue.resolution;
          this.if = E(this.if, e.o.jb, c, 0.002);
          var j = this.jf / this.if;
          var k = e.o.N.Ff[ba.ZOOM_TYPE];
          var l = k != null && k.sc;
          this.kf = C(0, 1, this.kf + c / 1000 * ((l ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + c * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(b / 1200 * 2 * Math.PI);
          var m = f.Gf();
          this.yf.x = F(this.yf.x, m.x, c, i.smoothCamera, 33.333);
          this.yf.y = F(this.yf.y, m.y, c, 0.5, 33.333);
          var n = g / j / 2;
          var o = h / j / 2;
          e.o.yb(this.yf.x - n * 1.3, this.yf.x + n * 1.3, this.yf.y - o * 1.3, this.yf.y + o * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, n * 2, o * 2);
          var p = e.o.fb.ub;
          this.ve.scale.x = j;
          this.ve.scale.y = j;
          this.ve.position.x = g / 2 - this.yf.x * j;
          this.ve.position.y = h / 2 - this.yf.y * j;
          var q = Math.hypot(m.x, m.y);
          if (q > p - 10) {
            this.hf = C(0, 1, 1 + (q - p) / 10);
            var r = Math.cos(this.ff * aa / 360) * (1 - this.hf) + this.hf * 1;
            var s = Math.sin(this.ff * aa / 360) * (1 - this.hf);
            var t = (Math.atan2(s, r) + aa) % aa * 360 / aa;
            var u = this.hf * (0.5 + this.gf * 0.5);
            var v = M(Math.floor(t), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(v[0], v[1], v[2], 0.1 + u * 0.2);
          } else {
            this.hf = 0;
            var w = M(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(w[0], w[1], w[2], 0.1);
          }
          var x = 0;
          for (; x < this.sf.children.length; x++) {
            var y = this.sf.children[x];
            y.position.x = g / 2 - (this.yf.x - y.If.x) * j;
            y.position.y = h / 2 - (this.yf.y - y.If.y) * j;
          }
          this.tf.Jf.position.x = m.x / p * this.tf.Kf;
          this.tf.Jf.position.y = m.y / p * this.tf.Kf;
          this.uf.Qa(b);
          this.wf.Te(b, c);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      b.prototype.Lf = function (b, c) {
        c.Of.Nf.Mf().zIndex = (b + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(c.Of.Pf.Mf());
        this.pf.addChild(c.Of.Nf.Mf());
      };
      b.prototype.Qf = function (b, c, e) {
        c.Rf.zIndex = d().o.fb.bf ? 0 : 10 + (b + 32768) / 65536 * 5000;
        this.qf.addChild(c.Rf);
        if (b != d().o.fb.bf) {
          this.sf.addChild(e);
        }
      };
      var e = function () {
        return A(_.Zb, function () {
          _.Zb.call(this);
          this.Kf = 40;
          this.Sf = new _.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _.bc();
          var b = new _.bc();
          b.beginFill("black", 0.4);
          b.drawCircle(0, 0, this.Kf);
          b.endFill();
          b.lineStyle(2, 16777215);
          b.drawCircle(0, 0, this.Kf);
          b.moveTo(0, -this.Kf);
          b.lineTo(0, +this.Kf);
          b.moveTo(-this.Kf, 0);
          b.lineTo(+this.Kf, 0);
          b.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(b);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var f = function () {
        var b = A(_.Zb, function () {
          _.Zb.call(this);
          this.Tf = {};
        });
        b.prototype.Qa = function (b) {
          var c = 0.5 + Math.cos(aa * (b / 1000 / 1.6)) * 0.5;
          var d;
          for (d in this.Tf) {
            var e = this.Tf[d];
            var f = e.Uf;
            e.alpha = 1 - f + f * c;
          }
        };
        b.prototype.Te = function (b) {
          var e;
          for (e in this.Tf) {
            if (b[e] == null || !b[e].sc) {
              J(this.Tf[e]);
              delete this.Tf[e];
            }
          }
          var f = 0;
          var g;
          for (g in b) {
            var h = b[g];
            if (h.sc) {
              var j = this.Tf[g];
              if (!j) {
                var k = d().p.Dc().ld(h.rc).Zc;
                j = new c();
                j.texture = k.Hc;
                j.width = 35;
                j.height = 35;
                this.Tf[g] = j;
                this.addChild(j);
              }
              o(this, g, h.tc);
              j.Uf = h.tc;
              if (i.ModeStremer) {
                j.position.x = f + 225;
              } else {
                j.position.x = f;
              }
              f = f + 40;
            }
          }
        };
        var c = function () {
          return A(_.ec, function () {
            _.ec.call(this);
            this.Uf = 0;
          });
        }();
        return b;
      }();
      var g = function () {
        var b = A(_.Zb, function () {
          _.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var b = 0;
          for (; b < 14; b++) {
            this.Xf();
          }
        });
        b.prototype.Te = function (b) {
          var c = d();
          var e = c.o.fb.af == la._e;
          var f = 0;
          var g = 0;
          if (g >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[g].Yf(5, "white");
          this.Pe[g].Zf("", u("index.game.leader.top10"), "(" + c.o.tb + " online)");
          this.Pe[g].position.y = f;
          f = f + this.Vf;
          g = g + 1;
          if (b.$f.length > 0) {
            f = f + this.Wf;
          }
          var h = 0;
          for (; h < b.$f.length; h++) {
            var i = b.$f[h];
            var j = c.p.Dc().ed(i._f);
            if (g >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[g].Yf(0.8, j.bd._c);
            this.Pe[g].Zf("" + (h + 1), v(j.ad), "" + Math.floor(i.M));
            this.Pe[g].position.y = f;
            f = f + this.Vf;
            g = g + 1;
          }
          if (b.ag.length > 0) {
            f = f + this.Wf;
          }
          var k = 0;
          for (; k < b.ag.length; k++) {
            var l = b.ag[k];
            var m = c.o.fb.bf == l.bg;
            var n = undefined;
            var o = undefined;
            if (m) {
              n = "yellow";
              o = c.o.N.Mb.ad;
            } else {
              var p = c.o.hb[l.bg];
              if (p != null) {
                n = e ? c.p.Dc().ed(p.Mb.cg).bd._c : c.p.Dc().dd(p.Mb.dg)._c;
                o = this.Ef ? p.Mb.ad : "---";
              } else {
                n = "gray";
                o = "?";
              }
            }
            if (m) {
              f = f + this.Wf;
            }
            if (g >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[g].Yf(m ? 1 : 0.8, n);
            var q = Math.floor(l.M);
            q.dotFormat();
            this.Pe[g].Zf("" + (k + 1), o, "" + q.dotFormat());
            this.Pe[g].position.y = f;
            f = f + this.Vf;
            g = g + 1;
            if (m) {
              f = f + this.Wf;
            }
          }
          if (c.o.O > b.ag.length) {
            f = f + this.Wf;
            if (g >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[g].Yf(2, "white");
            window.tuNewScore = Math.floor(c.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[g].Zf("" + c.o.O, c.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[g].position.y = f;
            f = f + this.Vf;
            g = g + 1;
            f = f + this.Wf;
          }
          while (this.Pe.length > g) {
            J(this.Pe.pop());
          }
        };
        b.prototype.Xf = function () {
          var b = new c();
          b.position.y = 0;
          if (this.Pe.length > 0) {
            b.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(b);
          this.addChild(b);
        };
        var c = function () {
          var b = A(_.Zb, function () {
            _.Zb.call(this);
            this.eg = new _.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new _.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new _.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          b.prototype.Zf = function (b, c, d) {
            this.eg.text = b;
            this.gg.text = d;
            var e = c;
            this.fg.text = e;
            while (this.fg.width > 120) {
              e = e.substring(0, e.length - 1);
              this.fg.text = e + "..";
            }
          };
          b.prototype.Yf = function (b, c) {
            this.eg.alpha = b;
            this.eg.style.fill = c;
            this.fg.alpha = b;
            this.fg.style.fill = c;
            this.gg.alpha = b;
            this.gg.style.fill = c;
          };
          return b;
        }();
        return b;
      }();
      return b;
    }();
    var oa = function () {
      function b(b) {
        this.o = b;
        this.hg = [];
        this.ig = 0;
      }
      b.prototype.Xb = function (b) {
        this.hg.push(new DataView(b));
      };
      b.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      b.prototype.Bb = function () {
        for (var b = 0; b < 10; b++) {
          if (this.hg.length === 0) {
            return;
          }
          var c = this.hg.shift();
          try {
            this.jg(c);
          } catch (b) {
            console.log("DataReader error: " + b);
            throw b;
          }
        }
      };
      b.prototype.jg = function (b) {
        switch (b.mc(0) & 255) {
          case 0:
            this.kg(b, 1);
            return;
          case 1:
            this.lg(b, 1);
            return;
          case 2:
            this.mg(b, 1);
            return;
          case 3:
            this.ng(b, 1);
            return;
          case 4:
            this.og(b, 1);
            return;
          case 5:
            this.pg(b, 1);
            return;
        }
      };
      b.prototype.kg = function (b, c) {
        console.log("sgp1");
        this.o.fb.af = b.mc(c);
        c = c + 1;
        var e = b.nc(c);
        c = c + 2;
        this.o.fb.bf = e;
        this.o.N.Mb.Lb = e;
        this.o.fb.ub = b.pc(c);
        c = c + 4;
        this.o.fb.cf = b.pc(c);
        c = c + 4;
        this.o.fb.df = b.pc(c);
        c = c + 4;
        d().s.H.wb.Te(this.o.fb, d().s.xa.wa());
        console.log("sgp2");
        return c;
      };
      b.prototype.lg = function (b, c) {
        var d = this.ig++;
        var e = b.nc(c);
        c += 2;
        var f = undefined;
        f = this.qg(b, c);
        c += this.rg(f);
        for (var g = 0; g < f; g++) {
          c = this.sg(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var h = 0; h < f; h++) {
          c = this.tg(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var i = 0; i < f; i++) {
          c = this.ug(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var j = 0; j < f; j++) {
          c = this.vg(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var k = 0; k < f; k++) {
          c = this.wg(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var l = 0; l < f; l++) {
          c = this.xg(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var m = 0; m < f; m++) {
          c = this.yg(b, c);
        }
        f = this.qg(b, c);
        c += this.rg(f);
        for (var n = 0; n < f; n++) {
          c = this.zg(b, c);
        }
        if (d > 0) {
          c = this.Ag(b, c);
        }
        this.o.Qb(d, e);
        return c;
      };
      b.prototype.vg = function (e, f) {
        var g = new Ba.Config();
        g.Lb = e.nc(f);
        f = f + 2;
        g.cg = this.o.fb.af == la._e ? e.mc(f++) : ma.TEAM_DEFAULT;
        g.dg = e.nc(f);
        let h = f;
        f = f + 2;
        g.Bg = e.nc(f);
        let j = f;
        f = f + 2;
        g.Cg = e.nc(f);
        let k = f;
        f = f + 2;
        g.Dg = e.nc(f);
        let l = f;
        f = f + 2;
        g.Eg = e.nc(f);
        let m = f;
        f = f + 2;
        var n = e.mc(f);
        f = f + 1;
        var o = "";
        var p = 0;
        for (; p < n; p++) {
          o = o + String.fromCharCode(e.nc(f));
          f = f + 2;
        }
        if (f > 210) {
          for (let c in this.o.hb) {
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[c].Mb.ad)) {
              console.log("nombre: " + this.o.hb[c].Mb.ad);
              var q = this.o.hb[c].Mb.ad.substr(-13);
              console.log("elimina spacios: " + q);
              b = q.substr(0, 4);
              console.log("primeros digitos: " + b);
              let d = q.substr(4, 3);
              console.log("segundos digitos: " + d);
              let e = q.substr(7, 3);
              console.log("tercer digitos: " + e);
              let f = q.substr(10, 3);
              console.log("mouthId_A: " + f);
              if (b !== "0000" && i.visibleSkin.indexOf(parseInt(b)) !== -1) {
                this.o.hb[c].Mb.dg = parseInt(b);
              }
              if (d !== "000") {
                this.o.hb[c].Mb.Eg = parseInt(d);
              }
              if (e !== "000") {
                this.o.hb[c].Mb.Bg = parseInt(e);
              }
              if (f !== "000") {
                this.o.hb[c].Mb.Cg = parseInt(f);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === g.Lb) {
          g.dg = i.PropertyManager.rh;
          g.Bg = i.PropertyManager.sh;
          g.Cg = i.PropertyManager.th;
          g.Dg = i.PropertyManager.uh;
          g.Eg = i.PropertyManager.vh;
          e.setInt16(h, g.dg);
          e.setInt16(j, g.Bg);
          e.setInt16(k, g.Cg);
          e.setInt16(l, g.Dg);
          e.setInt16(m, g.Eg);
          c.aload = true;
          c.aId = h;
        }
        g.ad = o;
        if (this.o.fb.bf === g.Lb) {
          this.o.N.Fg(g);
          g.Mb = g.Lb;
          g.bd = g.ad;
        } else {
          var r = this.o.hb[g.Lb];
          if (r != null) {
            r.Kb();
          }
          var s = new Ba(this.o.fb);
          s.vb(d().s.H.wb);
          this.o.hb[g.Lb] = s;
          s.Fg(g);
        }
        return f;
      };
      b.prototype.wg = function (b, c) {
        var e = b.nc(c);
        c += 2;
        var f = b.mc(c);
        c++;
        var g = !!(f & 1);
        var h = !!(f & 2);
        var i = 0;
        if (g) {
          i = b.nc(c);
          c += 2;
        }
        var j = this.Gg(e);
        if (j === undefined) {
          return c;
        }
        j.Ib = false;
        if (!j.Hb) {
          return c;
        }
        var k = this.Gg(e);
        if (g && k !== undefined && k.Hb) {
          if (i === this.o.fb.bf) {
            var l = this.o.N.Gf();
            var m = j.Hg(l.x, l.y);
            Math.max(0, 1 - m.distance / (this.o.jb * 0.5));
            if (m.distance < this.o.jb * 0.5) {
              d().s.H.wb.wf.Se(h);
            }
          } else if (e === this.o.fb.bf) ;else {
            var n = this.o.N.Gf();
            var o = j.Hg(n.x, n.y);
            Math.max(0, 1 - o.distance / (this.o.jb * 0.5));
          }
        } else if (e === this.o.fb.bf) ;else {
          var p = this.o.N.Gf();
          var q = j.Hg(p.x, p.y);
          Math.max(0, 1 - q.distance / (this.o.jb * 0.5));
        }
        return c;
      };
      b.prototype.zg = function (b, c) {
        var e = b.nc(c);
        c += 2;
        var f = e === this.o.fb.bf ? null : this.o.hb[e];
        var g = b.mc(c);
        c += 1;
        var h = !!(g & 1);
        if (!!(g & 2)) {
          var i = b.pc(c);
          c += 4;
          if (f) {
            f.Ig(i);
          }
        }
        var j = this.Jg(b.mc(c++), b.mc(c++), b.mc(c++));
        var k = this.Jg(b.mc(c++), b.mc(c++), b.mc(c++));
        if (f) {
          f.Kg(j, k, h);
          var l = this.o.N.Gf();
          var m = f.Gf();
          var n = Math.max(0, 1 - Math.hypot(l.x - m.x, l.y - m.y) / (this.o.jb * 0.5));
          d().r.Zd(n, e, h);
        }
        var o = this.qg(b, c);
        c += this.rg(o);
        if (f) {
          for (var p in f.Ff) {
            var q = f.Ff[p];
            if (q) {
              q.sc = false;
            }
          }
        }
        for (var r = 0; r < o; r++) {
          var s = b.mc(c);
          c++;
          var t = b.mc(c);
          c++;
          if (f) {
            var u = f.Ff[s];
            u ||= f.Ff[s] = new ba(s);
            u.sc = true;
            u.tc = Math.min(1, Math.max(0, t / 100));
          }
        }
        return c;
      };
      b.prototype.Ag = function (b, c) {
        var e = this.o.N;
        var f = b.mc(c);
        c += 1;
        var g = !!(f & 1);
        var h = !!(f & 2);
        var i = !!(f & 4);
        if (h) {
          var j = e.M;
          e.Ig(b.pc(c));
          c += 4;
          j = e.M - j;
          if (j > 0) {
            d().s.H.wb.wf.Re(j);
          }
        }
        if (i) {
          this.o.ib = b.pc(c);
          c += 4;
        }
        var k = this.Jg(b.mc(c++), b.mc(c++), b.mc(c++));
        var l = this.Jg(b.mc(c++), b.mc(c++), b.mc(c++));
        e.Kg(k, l, g);
        d().r.Zd(0.5, this.o.fb.bf, g);
        var m = this.qg(b, c);
        c += this.rg(m);
        for (var n in e.Ff) {
          var o = e.Ff[n];
          if (o) {
            o.sc = false;
          }
        }
        for (var p = 0; p < m; p++) {
          var q = b.mc(c);
          c++;
          var r = b.mc(c);
          c++;
          var s = e.Ff[q];
          if (!s) {
            s = new ba(q);
            e.Ff[q] = s;
          }
          s.sc = true;
          s.tc = Math.min(1, Math.max(0, r / 100));
        }
        d().s.H.wb.uf.Te(e.Ff);
      };
      b.prototype.xg = function (b, c) {
        var e = this;
        var f = b.nc(c);
        c += 2;
        var g = this.Gg(f);
        var h = b.pc(c);
        c += 4;
        var i = [];
        for (var j in g.Ff) {
          if (j == 0) {
            i.push("velocidad");
            $(".v0").fadeIn();
          } else if (j == 1) {
            i.push("movimiento");
            $(".v1").fadeIn();
          } else if (j == 2) {
            i.push("iman");
            $(".v2").fadeIn();
          } else if (j == 3) {
            i.push("comidax2");
            $(".v3").fadeIn();
          } else if (j == 4) {
            i.push("comidax5");
            $(".v4").fadeIn();
          } else if (j == 5) {
            i.push("comidax10");
            $(".v5").fadeIn();
          } else if (j == 6) {
            i.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = i;
        $(".Worm_cerca").text(" : " + g.Mb.ad);
        if (g.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var k = this.qg(b, c);
        c += this.rg(k);
        if (g) {
          g.Ig(h);
          g.Lg(function () {
            return e.Jg(b.mc(c++), b.mc(c++), b.mc(c++));
          }, k);
          g.Mg(true);
          var l = this.o.N.Gf();
          var m = g.Gf();
          var n = Math.max(0, 1 - Math.hypot(l.x - m.x, l.y - m.y) / (this.o.jb * 0.5));
          d().r.Xd(n, f);
        } else {
          c += k * 6;
        }
        return c;
      };
      b.prototype.yg = function (b, c) {
        var e = b.nc(c);
        c += 2;
        var f = this.o.hb[e];
        var g = [];
        if (f && f.Ib) {
          f.Mg(false);
        }
        d().r.Yd(e);
        return c;
      };
      b.prototype.sg = function (b, c) {
        var e = new qa.Config();
        e.Lb = b.oc(c);
        c += 4;
        e.cg = this.o.fb.af === la._e ? b.mc(c++) : ma.TEAM_DEFAULT;
        e.Ng = this.Jg(b.mc(c++), b.mc(c++), b.mc(c++));
        e.dg = b.mc(c++);
        var f = this.o.gb[e.Lb];
        if (f != null) {
          f.Kb();
        }
        var g = new qa(e, d().s.H.wb);
        g.Og(this.Pg(e.Lb), this.Qg(e.Lb), true);
        this.o.gb[e.Lb] = g;
        return c;
      };
      b.prototype.tg = function (b, c) {
        var d = b.oc(c);
        c += 4;
        var e = this.o.gb[d];
        if (e) {
          e.Rg = 0;
          e.Sg = e.Sg * 1.5;
          e.Nb = true;
        }
        return c;
      };
      b.prototype.ug = function (b, c) {
        var d = b.oc(c);
        c += 4;
        var e = b.nc(c);
        c += 2;
        var f = this.o.gb[d];
        if (f) {
          f.Rg = 0;
          f.Sg = f.Sg * 0.1;
          f.Nb = true;
          var g = this.Gg(e);
          if (g && g.Hb) {
            this.o.fb.bf;
            var h = g.Gf();
            f.Og(h.x, h.y, false);
          }
        }
        return c;
      };
      var e = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      b.prototype.mg = function (b) {
        var c = d().q.Ug.Tg;
        var f = c.getImageData(0, 0, 80, 80);
        var g = e[0];
        var h = 80 - g;
        var i = 0;
        for (var j = 0; j < 628; j++) {
          var k = b.mc(1 + j);
          for (var l = 0; l < 8; l++) {
            var m = (k >> l & 1) != 0;
            var n = (g + i * 80) * 4;
            if (m) {
              f.data[n] = 255;
              f.data[n + 1] = 255;
              f.data[n + 2] = 255;
              f.data[n + 3] = 255;
            } else {
              f.data[n + 3] = 0;
            }
            if (++g >= h && ++i < 80) {
              g = e[i];
              h = 80 - g;
            }
          }
        }
        c.putImageData(f, 0, 0);
        var o = d().s.H.wb.tf.Sf;
        o.texture = d().q.Ug.Hc;
        o.texture.update();
      };
      b.prototype.og = function (b, c) {
        var d = b.oc(c);
        c += 4;
        console.log("Wormy Error: " + d);
      };
      b.prototype.pg = function (b, c) {
        console.log("g.o");
        this.o.Rb();
      };
      b.prototype.ng = function (b, c) {
        this.o.tb = b.nc(c);
        c += 2;
        this.o.O = b.nc(c);
        c += 2;
        var e = new xa();
        e.ag = [];
        if (i.ModeStremerbatop) {
          for (var f = b.mc(c++), g = 7; g < f; g++) {
            var h = b.nc(c);
            c += 2;
            var j = b.pc(c);
            c += 4;
            e.ag.push(xa.Vg(h, j));
          }
        } else {
          for (var f = b.mc(c++), g = 0; g < f; g++) {
            var h = b.nc(c);
            c += 2;
            var j = b.pc(c);
            c += 4;
            e.ag.push(xa.Vg(h, j));
          }
        }
        e.$f = [];
        if (this.o.fb.af === la._e) {
          for (var k = b.mc(c++), l = 0; l < k; l++) {
            var m = b.mc(c);
            c += 1;
            var n = b.pc(c);
            c += 4;
            e.$f.push(xa.Wg(m, n));
          }
        }
        d().s.H.wb.vf.Te(e);
      };
      b.prototype.Gg = function (b) {
        if (b === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[b];
        }
      };
      b.prototype.Jg = function (b, c, d) {
        return (((d & 255 | c << 8 & 65280 | b << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      b.prototype.Pg = function (b) {
        return ((b & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      b.prototype.Qg = function (b) {
        return ((b >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      b.prototype.qg = function (b, c) {
        var d = b.mc(c);
        if ((d & 128) == 0) {
          return d;
        }
        var e = b.mc(c + 1);
        if ((e & 128) == 0) {
          return e | d << 7 & 16256;
        }
        var f = b.mc(c + 2);
        if ((f & 128) == 0) {
          return f | e << 7 & 16256 | d << 14 & 2080768;
        }
        var g = b.mc(c + 3);
        if ((g & 128) == 0) {
          return g | f << 7 & 16256 | e << 14 & 2080768 | d << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      b.prototype.rg = function (b) {
        if (b < 128) {
          return 1;
        } else if (b < 16384) {
          return 2;
        } else if (b < 2097152) {
          return 3;
        } else if (b < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return b;
    }();
    var pa = function () {
      function b(b) {
        this.Xg = b;
      }
      b.Yg = function () {
        return new pa(null);
      };
      b.Zg = function (b) {
        return new pa(b);
      };
      b.prototype.$g = function () {
        return this.Xg;
      };
      b.prototype._g = function () {
        return this.Xg != null;
      };
      b.prototype.ah = function (b) {
        if (this.Xg != null) {
          b(this.Xg);
        }
      };
      return b;
    }();
    var qa = function () {
      function b(b, c) {
        this.Mb = b;
        this.bh = b.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : b.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new ra();
        this.gh.hh(d().o.fb.af, this.Mb.cg === ma.TEAM_DEFAULT ? null : d().p.Dc().ed(this.Mb.cg), d().p.Dc().kd(this.Mb.dg));
        c.Lf(b.Lb, this.gh);
      }
      b.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      b.prototype.Og = function (b, c, d) {
        this.Ob = b;
        this.Pb = c;
        if (d) {
          this.ch = b;
          this.dh = c;
        }
      };
      b.prototype.Fb = function (b, c) {
        var d = Math.min(0.5, this.Sg * 1);
        var e = Math.min(2.5, this.Sg * 1.5);
        this.eh = E(this.eh, d, c, 0.0025);
        this.fh = E(this.fh, e, c, 0.0025);
        this.Jb = E(this.Jb, this.Rg, c, 0.0025);
      };
      b.prototype.Gb = function (b, c, d) {
        this.ch = E(this.ch, this.Ob, c, i.eat_animation);
        this.dh = E(this.dh, this.Pb, c, 0.0025);
        this.gh.Te(this, b, c, d);
      };
      b.Config = function () {
        function b() {
          this.Lb = 0;
          this.cg = ma.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return b;
      }();
      return b;
    }();
    var ra = function () {
      function b() {
        this.Of = new e(new Aa(), new Aa());
        this.Of.Pf.jh.blendMode = _.ic.jc;
        this.Of.Pf.jh.zIndex = d;
        this.Of.Nf.jh.zIndex = c;
      }
      var c = 500;
      var d = 100;
      b.prototype.hh = function (b, c, d) {
        var e = d.Zc;
        if (e != null) {
          this.Of.Nf.kh(e);
        }
        var f = b == la._e && c != null ? c.cd.$c : d.$c;
        if (f != null) {
          this.Of.Pf.kh(f);
        }
      };
      b.prototype.Te = function (b, c, d, e) {
        if (!e(b.ch, b.dh)) {
          this.Of.lh();
          return;
        }
        var f = b.fh * (1 + Math.cos(b.Ae + c / 200) * 0.3);
        if (b.bh) {
          this.Of.mh(b.ch, b.dh, i.PortionSize * b.eh, b.Jb * 1, i.PortionAura * f, i.PortionTransparent * b.Jb);
        } else {
          this.Of.mh(b.ch, b.dh, i.FoodSize * b.eh, b.Jb * 1, i.FoodShadow * f, i.FoodTransparent * b.Jb);
        }
      };
      var e = function () {
        function b(b, c) {
          this.Nf = b;
          this.Pf = c;
        }
        b.prototype.mh = function (b, c, d, e, f, g) {
          this.Nf.Mg(true);
          this.Nf.nh(b, c);
          this.Nf.oh(d);
          this.Nf.qh(e);
          this.Pf.Mg(true);
          this.Pf.nh(b, c);
          this.Pf.oh(f);
          this.Pf.qh(g);
        };
        b.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return b;
      }();
      return b;
    }();
    var sa = function () {
      function b() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function c(b, c) {
        if (!d().p.W()) {
          return null;
        }
        var f = d().p.Ac();
        if (c === ta.ia) {
          var g = e(f.skinArrayDict, b);
          if (g < 0) {
            return null;
          } else {
            return f.skinArrayDict[g];
          }
        }
        switch (c) {
          case ta.ja:
            return f.eyesDict[b];
          case ta.ka:
            return f.mouthDict[b];
          case ta.la:
            return f.glassesDict[b];
          case ta.ma:
            return f.hatDict[b];
        }
        return null;
      }
      function e(b, c) {
        for (var d = 0; d < b.length; d++) {
          if (b[d].id == c) {
            return d;
          }
        }
        return -1;
      }
      b.prototype.a = function () {};
      b.prototype.ha = function (b) {
        if (!i.loading) {
          i.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(i));
        }
        switch (b) {
          case ta.ia:
            return this.rh;
          case ta.ja:
            return this.sh;
          case ta.ka:
            return this.th;
          case ta.la:
            return this.uh;
          case ta.ma:
            return this.vh;
        }
        return 0;
      };
      b.prototype.xh = function (b) {
        this.wh.push(b);
        this.yh();
      };
      b.prototype.Ia = function () {
        if (!d().p.W()) {
          return K([32, 33, 34, 35]);
        }
        for (var b = d().p.Ac(), c = [], e = 0; e < b.skinArrayDict.length; e++) {
          var f = b.skinArrayDict[e];
          if (this.Ja(f.id, ta.ia)) {
            c.push(f);
          }
        }
        if (c.length === 0) {
          return 0;
        } else {
          return c[parseInt(c.length * Math.random())].id;
        }
      };
      b.prototype.zh = function () {
        if (d().p.W) {
          var b = d().p.Ac().skinArrayDict;
          var c = e(b, this.rh);
          if (c >= 0) {
            for (var f = c + 1; f < b.length; f++) {
              if (this.Ja(b[f].id, ta.ia)) {
                this.rh = b[f].id;
                this.yh();
                return;
              }
            }
            for (var g = 0; g < c; g++) {
              if (this.Ja(b[g].id, ta.ia)) {
                this.rh = b[g].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      b.prototype.Ah = function () {
        if (d().p.W) {
          var b = d().p.Ac().skinArrayDict;
          var c = e(b, this.rh);
          if (c >= 0) {
            for (var f = c - 1; f >= 0; f--) {
              if (this.Ja(b[f].id, ta.ia)) {
                this.rh = b[f].id;
                this.yh();
                return;
              }
            }
            for (var g = b.length - 1; g > c; g--) {
              if (this.Ja(b[g].id, ta.ia)) {
                this.rh = b[g].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      b.prototype.Bh = function (b, c) {
        if (!d().p.W() || this.Ja(b, c)) {
          switch (c) {
            case ta.ia:
              if (this.rh != b) {
                this.rh = b;
                this.yh();
              }
              return;
            case ta.ja:
              if (this.sh != b) {
                this.sh = b;
                this.yh();
              }
              return;
            case ta.ka:
              if (this.th != b) {
                this.th = b;
                this.yh();
              }
              return;
            case ta.la:
              if (this.uh != b) {
                this.uh = b;
                this.yh();
              }
              return;
            case ta.ma:
              if (this.vh != b) {
                this.vh = b;
                this.yh();
              }
              return;
          }
        }
      };
      b.prototype.Ja = function (b, e) {
        var f = c(b, e);
        return f != null && (d().u.P() ? f.price == 0 && !f.nonbuyable || d().u.Ch(b, e) : f.guest);
      };
      b.prototype.yh = function () {
        for (var b = 0; b < this.wh.length; b++) {
          this.wh[b]();
        }
      };
      return b;
    }();
    var ta = function () {
      function b() {}
      b.ia = "SKIN";
      b.ja = "EYES";
      b.ka = "MOUTH";
      b.la = "GLASSES";
      b.ma = "HAT";
      return b;
    }();
    var ua = function () {
      function b(b, c, d, e, f, g, h, i, j) {
        this.Hc = new _._b(b, new _.dc(c, d, e, f));
        this.Dh = c;
        this.Eh = d;
        this.Fh = e;
        this.Gh = f;
        this.Hh = g || (i || e) / 2;
        this.Ih = h || (j || f) / 2;
        this.Jh = i || e;
        this.Kh = j || f;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return b;
    }();
    var va = function () {
      function b() {
        this.fn_o = c;
        this.Fe = new _._b(_.$b.from("/images/bg-obstacle.png"));
        var b = _.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128)), new _._b(b, new _.dc(0, 0, 128, 128))];
        this.Cf = new _._b(c());
        this.Df = new _._b(function () {
          var b = _.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          b.wrapMode = _.kc.lc;
          return b;
        }());
        this.Af = new _._b(_.$b.from("/images/lens.png"));
        var d = _.$b.from("/images/wear-ability.png");
        var e = _.$b.from("https://i.imgur.com/EDt862t.png");
        var f = _.$b.from("https://i.imgur.com/U5sTlhC.png");
        var g = _.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new ua(g, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new ua(e, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new ua(f, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new ua(d, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new ua(d, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new ua(d, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var b = window.document.createElement("canvas");
          b.width = 80;
          b.height = 80;
          return {
            te: b,
            Tg: b.getContext("2d"),
            Hc: new _._b(_.$b.from(b))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function c(b) {
        var c = _.$b.from(b || "https://i.imgur.com/8ubx4RA.png");
        c.wrapMode = _.kc.lc;
        return c;
      }
      b.prototype.a = function (b) {
        function c() {
          if (--d == 0) {
            b();
          }
        }
        var d = 4;
        this.Bd = {};
        c();
        this.yd = {};
        c();
        this.Sh = [];
        c();
        this.Th = null;
        c();
      };
      return b;
    }();
    var wa = function () {
      function b() {
        this.H = new Ga();
        this.F = new Ia();
        this.Uh = new Ua();
        this.Vh = new Va();
        this.Wh = new Ma();
        this.Xh = new Na();
        this.Yh = new Pa();
        this.Zh = new Oa();
        this.xa = new Qa();
        this.$h = new Ra();
        this._h = new Sa();
        this.ai = new Ta();
        this.aa = new Ka();
        this.ua = new Ha();
        this.pa = new Ja();
        this.bi = [];
        this.ci = null;
      }
      function c(b, c) {
        if (c != 0) {
          var d = b[c];
          H(b, 0, 1, c);
          b[0] = d;
        }
      }
      function d(b, c) {
        if (c != b.length + 1) {
          var d = b[c];
          H(b, c + 1, c, b.length - c - 1);
          b[b.length - 1] = d;
        }
      }
      function e(b, c) {
        for (var d = 0; d < b.length; d++) {
          if (b[d] == c) {
            return d;
          }
        }
        return -1;
      }
      b.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var b = 0; b < this.bi.length; b++) {
          this.bi[b].a();
        }
        this.ci = new fa(Fa.di);
      };
      b.prototype.Qa = function (b, c) {
        for (var d = this.bi.length - 1; d >= 0; d--) {
          this.bi[d].Pa(b, c);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(b, c);
        }
      };
      b.prototype.Ra = function () {
        for (var b = this.bi.length - 1; b >= 0; b--) {
          this.bi[b].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      b.prototype.I = function (b) {
        var d = e(this.bi, b);
        if (d >= 0) {
          this.bi[0].ei();
          c(this.bi, d);
          this.fi();
        }
      };
      b.prototype.gi = function () {
        this.bi[0].ei();
        do {
          d(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      b.prototype.fi = function () {
        var b = this.bi[0];
        b.ii();
        b.ji();
        this.ki();
      };
      b.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      b.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return b;
    }();
    var xa = function () {
      function b() {
        this.ag = [];
        this.$f = [];
      }
      b.Vg = function (b, c) {
        return {
          bg: b,
          M: c
        };
      };
      b.Wg = function (b, c) {
        return {
          _f: b,
          M: c
        };
      };
      return b;
    }();
    var ya = function () {
      function b() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = c;
        this.si = {};
        this.ti = null;
      }
      var c = "guest";
      b.prototype.a = function () {
        this.vi();
      };
      b.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      b.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      b.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      b.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return S;
        }
      };
      b.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      b.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      b.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      b.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      b.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      b.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      b.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      b.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      b.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      b.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      b.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      b.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      b.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      b.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      b.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      b.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      b.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      b.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      b.prototype.V = function (b) {
        this.ni.push(b);
        b();
      };
      b.prototype.Pi = function (b) {
        this.oi.push(b);
        b();
      };
      b.prototype.Qi = function (b) {
        this.pi.push(b);
      };
      b.prototype.Ch = function (b, c) {
        var d = this.si.propertyList.concat(i.pL || []);
        if (!d) {
          return false;
        }
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          if (f.id == b && f.type === c) {
            return true;
          }
        }
        return false;
      };
      b.prototype.P = function () {
        return this.qi;
      };
      b.prototype.ea = function () {
        return this.ri;
      };
      b.prototype.Q = function (b) {
        var c = this;
        if (this.qi) {
          this.Ri(function (e) {
            if (e) {
              var f = c.zi();
              var g = c.Ai();
              c.si = e;
              eb(c.si);
              c.Si();
              var h = c.zi();
              var i = c.Ai();
              if (i > 1 && i != g) {
                d().s.aa.Ti(new Ya(i));
              }
              var j = h - f;
              if (j >= 20) {
                d().s.aa.Ti(new Xa(j));
              }
            }
            if (b) {
              b();
            }
          });
        }
      };
      b.prototype.Ri = function (b) {
        $.get(U + "/pub/wuid/" + this.ri + "/getUserData", function (c) {
          b(c.user_data);
        });
      };
      b.prototype.Ui = function (b, c, d) {
        var e = this;
        $.get(U + "/pub/wuid/" + this.ri + "/buyProperty?id=" + b + "&type=" + c, function (b) {
          if (b.code == 1200) {
            e.Q(d);
          } else {
            d();
          }
        }).fail(function () {
          d();
        });
      };
      b.prototype.Vi = function () {
        var b = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (c) {
          if (c.status === "connected") {
            if (c.authResponse && c.authResponse.accessToken) {
              b.Yi("facebook", "fb_" + c.authResponse.accessToken);
            } else {
              b.Xi();
            }
            return;
          }
          FB.login(function (c) {
            if (c.status === "connected" && c.authResponse && c.authResponse.accessToken) {
              b.Yi("facebook", "fb_" + c.authResponse.accessToken);
            } else {
              b.Xi();
            }
          });
        });
      };
      b.prototype.Zi = function () {
        var b = this;
        this.Wi();
        if (t === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        t.then(function () {
          console.log("gsi:then");
          if (t.isSignedIn.get()) {
            console.log("gsi:sil");
            var c = t.currentUser.get();
            b.Yi("google", "gg_" + c.getAuthResponse().id_token);
            return;
          }
          t.signIn().then(function (c) {
            if (c.error !== undefined) {
              console.log("gsi:e: " + c.error);
              b.Xi();
              return;
            } else if (c.isSignedIn()) {
              console.log("gsi:s");
              b.Yi("google", "gg_" + c.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              b.Xi();
              return;
            }
          });
        });
      };
      b.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var b = this.ri;
        var d = this.ti;
        this.qi = false;
        this.ri = c;
        this.si = {};
        this.ti = null;
        s(ha.Oe, "", 60);
        switch (d) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (b !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      b.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(U + "/pub/wuid/" + this.ri + "/deleteAccount", function (b) {
            if (b.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      b.prototype.vi = function () {
        console.log("rs");
        var b = p(ha.Oe);
        var c = this;
        if (b == "facebook") {
          console.log("rs:fb");
          (function b() {
            if (typeof FB != "undefined") {
              c.Vi();
            } else {
              setTimeout(b, 100);
            }
          })();
        } else if (b == "google") {
          console.log("rs:gg");
          (function b() {
            if (t !== undefined) {
              c.Zi();
            } else {
              setTimeout(b, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      b.prototype.aj = function () {
        var b = 0;
        for (; b < this.ni.length; b++) {
          this.ni[b]();
        }
        this.Si();
      };
      b.prototype.Si = function () {
        var b = 0;
        for (; b < this.oi.length; b++) {
          this.oi[b]();
        }
        var c = this.pi;
        this.pi = [];
        var d = 0;
        for (; d < c.length; d++) {
          c[d]();
        }
      };
      b.prototype.Yi = function (b, c) {
        var d = this;
        var e = 0;
        var f = localStorage.getItem("token__gg");
        if (f) {
          console.log("Using the stored token:", f);
          $.get(U + "/pub/wuid/" + f + "/login", function (b) {
            if (b && b.code === 1485 && b.error === "expired_token") {
              e++;
              console.log("auto login attempt:", e);
              $("#login-view").html("<h2>Auto Login Google Worm007: " + e + "</h2>");
              g();
            } else {
              h(b);
            }
          }).fail(function () {
            g();
          });
        } else {
          g();
        }
        function g() {
          console.log("Fetching a new token...");
          $.get(U + "/pub/wuid/" + c + "/login", function (b) {
            if (b && b.code === 1485 && b.error === "expired_token") {
              e++;
              console.log("auto login attempt:", e);
              $("#login-view").html("<h2>Auto Login Google Worm 007 : " + e + "</h2>");
              g();
            } else {
              h(b);
            }
          }).fail(function () {
            d.Xi();
          });
        }
        function h(e) {
          if (e && e.user_data) {
            eb(e.user_data);
            var f = this.ri;
            d.qi = true;
            d.ri = c;
            d.si = e.user_data;
            i.FB_UserID = e.user_data.userId;
            d.ti = b;
            s(ha.Oe, d.ti, 60);
            fb();
            for (var g = 0; g < m.clientesActivos.length; g++) {
              var h = m.clientesActivos[g].cliente_NOMBRE;
              var j = m.clientesActivos[g].cliente_ID;
              var k = m.clientesActivos[g].Client_VisibleSkin;
              var l = m.clientesActivos[g].Client_VisibleSkin1;
              var n = m.clientesActivos[g].Client_VisibleSkin2;
              var o = m.clientesActivos[g].Client_VisibleSkin3;
              var p = m.clientesActivos[g].Client_VisibleSkin4;
              var q = m.clientesActivos[g].Client_VisibleSkin5;
              var r = m.clientesActivos[g].Client_VisibleSkin6;
              var t = m.clientesActivos[g].Client_VisibleSkin7;
              var u = m.clientesActivos[g].Client_VisibleSkin8;
              var v = m.clientesActivos[g].Client_VisibleSkin9;
              var w = m.clientesActivos[g].Client_VisibleSkin10;
              var x = m.clientesActivos[g].Client_VisibleSkin11;
              var y = m.clientesActivos[g].Client_VisibleSkin12;
              var z = m.clientesActivos[g].Client_VisibleSkin13;
              var A = m.clientesActivos[g].Client_VisibleSkin14;
              var B = m.clientesActivos[g].Client_VisibleSkin15;
              var C = m.clientesActivos[g].Client_VisibleSkin16;
              var D = m.clientesActivos[g].Client_VisibleSkin17;
              var E = m.clientesActivos[g].Client_VisibleSkin18;
              var F = m.clientesActivos[g].Client_VisibleSkin19;
              var G = m.clientesActivos[g].Client_VisibleSkin20;
              var H = m.clientesActivos[g].Client_KeyAccecs;
              var I = m.clientesActivos[g].cliente_DateExpired;
              if (i.FB_UserID == 0) {} else if (i.FB_UserID == j) {
                $(".column-left").append("<div class='het-han'> Expiration date : " + I + "</div>");
                hb();
                gb();
              } else {}
            }
            i.loading = false;
            if (f !== c) {
              d.aj();
            } else {
              d.Si();
            }
            localStorage.setItem("token__gg", c);
          } else {
            d.Xi();
          }
        }
      };
      b.prototype.Xi = function () {
        this.Wi();
      };
      b.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      b.prototype._i = function () {
        console.log("lo:gg");
        t.signOut();
      };
      return b;
    }();
    var za = function () {
      function b() {
        this.cj = {};
        this.cj[g] = [1, 0.5, 0.25, 0.5];
        this.cj[h] = _._b.WHITE;
        this.cj[i] = [0, 0];
        this.cj[j] = [0, 0];
        var b = _.cc.from(m, n, this.cj);
        this.zf = new _.hc(l, b);
      }
      var c = "a1_" + L();
      var d = "a2_" + L();
      var e = atob("dHJhbnNsYXRpb25NYXRyaXg=");
      var f = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var g = "u3_" + L();
      var h = "u4_" + L();
      var i = "u5_" + L();
      var j = "u6_" + L();
      var k = "v1_" + L();
      var l = new _.gc().addAttribute(c, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(d, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var m = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + c + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + d + atob("O3VuaWZvcm0gbWF0MyA=") + e + atob("O3VuaWZvcm0gbWF0MyA=") + f + atob("O3ZhcnlpbmcgdmVjMiA=") + k + atob("O3ZvaWQgbWFpbigpew==") + k + atob("PQ==") + d + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + f + atob("Kg==") + e + atob("KnZlYzMo") + c + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var n = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + k + atob("O3VuaWZvcm0gdmVjNCA=") + g + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + h + atob("O3VuaWZvcm0gdmVjMiA=") + i + atob("O3VuaWZvcm0gdmVjMiA=") + j + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + k + atob("Kg==") + i + atob("Kw==") + j + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + g + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + h + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
      b.prototype.Hf = function (b, c, d, e) {
        var f = this.cj[g];
        f[0] = b;
        f[1] = c;
        f[2] = d;
        f[3] = e;
      };
      b.prototype.Bf = function (b) {
        this.cj[h] = b;
      };
      b.prototype.Te = function (b, c, d, e) {
        this.zf.position.x = b;
        this.zf.position.y = c;
        this.zf.scale.x = d;
        this.zf.scale.y = e;
        var f = this.cj[i];
        f[0] = d * 0.2520615384615385;
        f[1] = e * 0.4357063736263738;
        var g = this.cj[j];
        g[0] = b * 0.2520615384615385;
        g[1] = c * 0.4357063736263738;
      };
      return b;
    }();
    var Aa = function () {
      function b() {
        this.jh = new _.ec();
        this.dj = 0;
        this.ej = 0;
      }
      b.prototype.kh = function (b) {
        if (b && b.Hc) {
          this.jh.texture = b.Hc;
          this.jh.anchor.set(b.Lh, b.Mh);
          this.dj = b.Nh;
          this.ej = b.Oh;
        }
      };
      b.prototype.oh = function (b) {
        this.jh.width = b * this.dj;
        this.jh.height = b * this.ej;
      };
      b.prototype.fj = function (b) {
        this.jh.rotation = b;
      };
      b.prototype.nh = function (b, c) {
        this.jh.position.set(b, c);
      };
      b.prototype.Mg = function (b) {
        this.jh.visible = b;
      };
      b.prototype.gj = function () {
        return this.jh.visible;
      };
      b.prototype.qh = function (b) {
        this.jh.alpha = b;
      };
      b.prototype.Mf = function () {
        return this.jh;
      };
      b.prototype.ih = function () {
        J(this.jh);
      };
      return b;
    }();
    var Ba = function () {
      function b(b) {
        this.fb = b;
        this.Mb = new Ba.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(c * 2);
        this.mj = new Float32Array(c * 2);
        this.nj = new Float32Array(c * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var c = 200;
      b.prototype.Kb = function () {
        if (this.pj != null) {
          J(this.pj.Rf);
        }
        if (this.qj != null) {
          J(this.qj);
        }
      };
      b.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      b.prototype.Fg = function (b) {
        this.Mb = b;
        this.rj(this.Hb);
      };
      b.prototype.Mg = function (b) {
        var c = this.Hb;
        this.Hb = b;
        this.rj(c);
      };
      b.prototype.Ig = function (b) {
        this.M = b * 50;
        var d = b;
        if (b > this.fb.cf) {
          d = Math.atan((b - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var e = Math.sqrt(Math.pow(d * 5, 0.707106781186548) * 4 + 25);
        var f = Math.min(c, Math.max(3, (e - 5) * 5 + 1));
        var g = this.kj;
        this.Db = (5 + e * 0.9) * 0.025;
        this.kj = Math.floor(f);
        this.ij = f - this.kj;
        if (g > 0 && g < this.kj) {
          var h = this.lj[g * 2 - 2];
          var i = this.lj[g * 2 - 1];
          var j = this.mj[g * 2 - 2];
          var k = this.mj[g * 2 - 1];
          var l = this.nj[g * 2 - 2];
          var m = this.nj[g * 2 - 1];
          for (var n = g; n < this.kj; n++) {
            this.lj[n * 2] = h;
            this.lj[n * 2 + 1] = i;
            this.mj[n * 2] = j;
            this.mj[n * 2 + 1] = k;
            this.nj[n * 2] = l;
            this.nj[n * 2 + 1] = m;
          }
        }
      };
      b.prototype.Lg = function (b, c) {
        this.kj = c;
        for (var d = 0; d < this.kj; d++) {
          this.lj[d * 2] = this.mj[d * 2] = this.nj[d * 2] = b();
          this.lj[d * 2 + 1] = this.mj[d * 2 + 1] = this.nj[d * 2 + 1] = b();
        }
      };
      b.prototype.Kg = function (b, c, d) {
        this.hj = d;
        for (var e = 0; e < this.kj; e++) {
          this.lj[e * 2] = this.mj[e * 2];
          this.lj[e * 2 + 1] = this.mj[e * 2 + 1];
        }
        var f = b - this.mj[0];
        var g = c - this.mj[1];
        this.sj(f, g, this.kj, this.mj);
      };
      b.prototype.sj = function (b, c, d, e) {
        var f = Math.hypot(b, c);
        if (f > 0) {
          var g = e[0];
          var h = undefined;
          e[0] += b;
          var i = e[1];
          var j = undefined;
          e[1] += c;
          var k = this.Db / (this.Db + f);
          var l = 1 - k * 2;
          for (var m = 1, n = d - 1; m < n; m++) {
            h = e[m * 2];
            e[m * 2] = e[m * 2 - 2] * l + (h + g) * k;
            g = h;
            j = e[m * 2 + 1];
            e[m * 2 + 1] = e[m * 2 - 1] * l + (j + i) * k;
            i = j;
          }
          k = this.ij * this.Db / (this.ij * this.Db + f);
          l = 1 - k * 2;
          e[d * 2 - 2] = e[d * 2 - 4] * l + (e[d * 2 - 2] + g) * k;
          e[d * 2 - 1] = e[d * 2 - 3] * l + (e[d * 2 - 1] + i) * k;
        }
      };
      b.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      b.prototype.Hg = function (b, c) {
        var d = 1000000;
        var e = b;
        var f = c;
        for (var g = 0; g < this.kj; g++) {
          var h = this.nj[g * 2];
          var i = this.nj[g * 2 + 1];
          var j = Math.hypot(b - h, c - i);
          if (j < d) {
            d = j;
            e = h;
            f = i;
          }
        }
        return {
          x: e,
          y: f,
          distance: d
        };
      };
      b.prototype.vb = function (b) {
        this.oj = b;
      };
      b.prototype.Fb = function (b, c) {
        this.Jb = E(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(b / 400 * Math.PI) * 0.1 : 1 : 0, c, 1 / 800);
        this.jj = E(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, c, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      b.prototype.Gb = function (b, c, d, e) {
        if (this.Hb && this.Ib) {
          var f = Math.pow(0.11112, c / 95);
          for (var g = 0; g < this.kj; g++) {
            var h = G(this.lj[g * 2], this.mj[g * 2], d);
            var i = G(this.lj[g * 2 + 1], this.mj[g * 2 + 1], d);
            this.nj[g * 2] = G(h, this.nj[g * 2], f);
            this.nj[g * 2 + 1] = G(i, this.nj[g * 2 + 1], f);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, b, c, e);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      b.prototype.rj = function (b) {
        if (this.Hb) {
          if (!b) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            J(this.pj.Rf);
          }
          if (this.qj != null) {
            J(this.qj);
          }
        }
      };
      b.prototype.uj = function () {
        var b = d();
        if (this.pj == null) {
          this.pj = new Da();
        } else {
          J(this.pj.Rf);
        }
        this.pj.hh(b.o.fb.af, b.p.Dc().ed(this.Mb.cg), b.p.Dc().dd(this.Mb.dg), b.p.Dc().fd(this.Mb.Bg), b.p.Dc().gd(this.Mb.Cg), b.p.Dc().hd(this.Mb.Dg), b.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new Ca("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          J(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = b.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      b.Config = function () {
        function b() {
          this.Lb = 0;
          this.cg = ma.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return b;
      }();
      return b;
    }();
    var Ca = function () {
      return A(_.fc, function (b, c, d) {
        _.fc.call(this, b, c, d);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var Da = function () {
      function b() {
        this.Rf = new _.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new w();
        this.vj.zIndex = c * ((e + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(e);
        this.xj[0] = this.yj(0, new Aa(), new Aa());
        for (var b = 1; b < e; b++) {
          this.xj[b] = this.yj(b, new Aa(), new Aa());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var c = 0.001;
      var e = 797;
      var f = Math.PI * 0.1;
      var g = -0.06640625;
      var h = 0.84375;
      var j = 0.2578125;
      var k = -0.03515625;
      var l = -0.0625;
      var m = 0.5625;
      var n = g * 3 + h;
      var o = j - g * 3;
      var p = g + k;
      var q = 0.375;
      var r = 0.75;
      var s = l + l;
      var t = k * 3 + j;
      var u = h - k * 3;
      var v = k + g;
      b.prototype.yj = function (b, d, f) {
        var g = new x(d, f);
        d.jh.zIndex = c * ((e - b) * 2 + 1 + 3);
        f.jh.zIndex = c * ((e - b) * 2 - 2 + 3);
        return g;
      };
      b.prototype.hh = function (b, c, d, e, f, g, h) {
        var i = d.Zc;
        var j = b == la._e ? c.bd.$c : d.$c;
        if (i.length > 0 && j.length > 0) {
          for (var k = 0; k < this.xj.length; k++) {
            this.xj[k].Nf.kh(i[k % i.length]);
            this.xj[k].Pf.kh(j[k % j.length]);
          }
        }
        this.vj.hh(e, f, g, h);
      };
      var w = function () {
        var b = A(_.Zb, function () {
          _.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _.Zb();
          this.Hj = [];
          for (var b = 0; b < 4; b++) {
            var c = new Aa();
            c.kh(d().q.Ph);
            this.Gj.addChild(c.jh);
            this.Hj.push(c);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new Aa();
          this.Jj.kh(d().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new Aa();
          this.xEmojiType_headshot.kh(d().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new Aa();
          this.xEmojiType_kill.kh(d().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new Aa();
          this.guia_mobile.kh(d().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        b.prototype.hh = function (b, c, d, e) {
          this.Lj(0.002, this.Cj, b.Zc);
          this.Lj(0.003, this.Dj, c.Zc);
          this.Lj(0.004, this.Fj, e.Zc);
          this.Lj(0.005, this.Ej, d.Zc);
        };
        b.prototype.Lj = function (b, c, d) {
          while (d.length > c.length) {
            var e = new Aa();
            c.push(e);
            this.addChild(e.Mf());
          }
          while (d.length < c.length) {
            c.pop().ih();
          }
          var f = b;
          for (var g = 0; g < d.length; g++) {
            f += 0.0001;
            var h = c[g];
            h.kh(d[g]);
            h.jh.zIndex = f;
          }
        };
        b.prototype.mh = function (b, c, d, e) {
          this.visible = true;
          this.position.set(b, c);
          this.rotation = e;
          for (var f = 0; f < this.Cj.length; f++) {
            this.Cj[f].oh(d);
          }
          for (var g = 0; g < this.Dj.length; g++) {
            this.Dj[g].oh(d);
          }
          for (var h = 0; h < this.Ej.length; h++) {
            this.Ej[h].oh(d);
          }
          for (var i = 0; i < this.Fj.length; i++) {
            this.Fj[i].oh(d);
          }
        };
        b.prototype.lh = function () {
          this.visible = false;
        };
        b.prototype.Mj = function (b, c, d, e) {
          this.Gj.visible = true;
          var f = d / 1000;
          var g = 1 / this.Hj.length;
          for (var h = 0; h < this.Hj.length; h++) {
            var i = 1 - (f + g * h) % 1;
            this.Hj[h].jh.alpha = 1 - i;
            this.Hj[h].oh(c * (0.5 + i * 4.5));
          }
        };
        b.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        b.prototype.Nj = function (b, c, d, e) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = E(this.Jj.jh.alpha, b.hj ? 0.9 : 0.2, e, 0.0025);
          this.Jj.oh(c);
        };
        b.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        b.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        b.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        b.prototype.Rx = function (b, c, d, e) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(c);
        };
        b.prototype.Njh = function (b, c, d, e) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(c);
        };
        b.prototype.Njk = function (b, c, d, e) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(c);
        };
        return b;
      }();
      b.prototype.Oj = function (b) {
        return this.Aj + this.Bj * Math.sin(b * f - this.zj);
      };
      b.prototype.tj = function (b, c, d, e) {
        var f = b.Db * 2;
        var w = b.nj;
        var y = b.kj;
        var z = y * 4 - 3;
        var A = z;
        this.zj = c / 400 * Math.PI;
        this.Aj = f * 1.5;
        this.Bj = f * 0.15 * b.jj;
        var B = undefined;
        var C = undefined;
        var D = undefined;
        var E = undefined;
        var F = undefined;
        var G = undefined;
        var H = undefined;
        var I = undefined;
        C = w[0];
        G = w[1];
        if (e(C, G)) {
          D = w[2];
          H = w[3];
          E = w[4];
          I = w[5];
          var K = Math.atan2(I + G * 2 - H * 3, E + C * 2 - D * 3);
          this.vj.mh(C, G, f, K);
          this.xj[0].mh(C, G, f, this.Oj(0), K);
          this.xj[1].mh(n * C + o * D + p * E, n * G + o * H + p * I, f, this.Oj(1), x.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(q * C + r * D + s * E, q * G + r * H + s * I, f, this.Oj(2), x.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(t * C + u * D + v * E, t * G + u * H + v * I, f, this.Oj(3), x.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var L = 4;
        for (var M = 2, N = y * 2 - 4; M < N; M += 2) {
          C = w[M];
          G = w[M + 1];
          if (e(C, G)) {
            B = w[M - 2];
            F = w[M - 1];
            D = w[M + 2];
            H = w[M + 3];
            E = w[M + 4];
            I = w[M + 5];
            this.xj[L].mh(C, G, f, this.Oj(L), x.angleBetween(this.xj[L - 1], this.xj[L + 1]));
            L++;
            this.xj[L].mh(g * B + h * C + j * D + k * E, g * F + h * G + j * H + k * I, f, this.Oj(L), x.angleBetween(this.xj[L - 1], this.xj[L + 1]));
            L++;
            this.xj[L].mh(l * B + m * C + m * D + l * E, l * F + m * G + m * H + l * I, f, this.Oj(L), x.angleBetween(this.xj[L - 1], this.xj[L + 1]));
            L++;
            this.xj[L].mh(k * B + j * C + h * D + g * E, k * F + j * G + h * H + g * I, f, this.Oj(L), x.angleBetween(this.xj[L - 1], this.xj[L + 1]));
            L++;
          } else {
            this.xj[L].lh();
            L++;
            this.xj[L].lh();
            L++;
            this.xj[L].lh();
            L++;
            this.xj[L].lh();
            L++;
          }
        }
        C = w[y * 2 - 4];
        G = w[y * 2 - 3];
        if (e(C, G)) {
          B = w[y * 2 - 6];
          F = w[y * 2 - 5];
          D = w[y * 2 - 2];
          H = w[y * 2 - 1];
          this.xj[z - 5].mh(C, G, f, this.Oj(z - 5), x.angleBetween(this.xj[z - 6], this.xj[z - 4]));
          this.xj[z - 4].mh(v * B + u * C + t * D, v * F + u * G + t * H, f, this.Oj(z - 4), x.angleBetween(this.xj[z - 5], this.xj[z - 3]));
          this.xj[z - 3].mh(s * B + r * C + q * D, s * F + r * G + q * H, f, this.Oj(z - 3), x.angleBetween(this.xj[z - 4], this.xj[z - 2]));
          this.xj[z - 2].mh(p * B + o * C + n * D, p * F + o * G + n * H, f, this.Oj(z - 2), x.angleBetween(this.xj[z - 3], this.xj[z - 1]));
          this.xj[z - 1].mh(D, H, f, this.Oj(z - 1), x.angleBetween(this.xj[z - 2], this.xj[z - 1]));
        } else {
          this.xj[z - 5].lh();
          this.xj[z - 4].lh();
          this.xj[z - 3].lh();
          this.xj[z - 2].lh();
          this.xj[z - 1].lh();
        }
        if (this.wj == 0 && A > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && A == 0) {
          J(this.vj);
        }
        while (this.wj < A) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > A) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var O = b.Ff[ba.MAGNETIC_TYPE];
        if (this.xj[0].gj() && O != null && O.sc) {
          this.vj.Mj(b, f, c, d);
        } else {
          this.vj.Ij();
        }
        var P = b.Ff[ba.VELOCITY_TYPE];
        if (this.xj[0].gj() && P != null && P.sc) {
          this.vj.Nj(b, f, c, d);
        } else {
          this.vj.Kj();
        }
        ;
        if (i.ModeStremeremoj) {} else {
          if (i.emoji_headshot && b && b.Mb && b.Mb.Mb) {
            this.vj.Njh(b, f, c, d);
          } else {
            this.vj.xzs();
          }
          if (i.emoji_kill && b && b.Mb && b.Mb.Mb) {
            this.vj.Njk(b, f, c, d);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (i.mobile && i.arrow && b && b.Mb && b.Mb.Mb) {
          this.vj.Rx(b, f, c, d);
        }
      };
      var x = function () {
        function b(b, c) {
          this.Nf = b;
          this.Nf.Mg(false);
          this.Pf = c;
          this.Pf.Mg(false);
        }
        b.prototype.mh = function (b, c, d, e, f) {
          this.Nf.Mg(true);
          this.Nf.nh(b, c);
          this.Nf.oh(d);
          this.Nf.fj(f);
          this.Pf.Mg(true);
          this.Pf.nh(b, c);
          this.Pf.oh(e);
          this.Pf.fj(f);
        };
        b.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        b.prototype.gj = function () {
          return this.Nf.gj();
        };
        b.angleBetween = function (b, c) {
          return Math.atan2(b.Nf.jh.position.y - c.Nf.jh.position.y, b.Nf.jh.position.x - c.Nf.jh.position.x);
        };
        return b;
      }();
      return b;
    }();
    var Ea = function () {
      function b(b) {
        this.se = b;
        this.te = b.get()[0];
        this.ue = new _.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new Da();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var c = this;
        d().p.ca(function () {
          if (d().p.W()) {
            c.Fb();
          }
        });
      }
      b.prototype.Fb = function () {
        var b = d();
        this.Pj.hh(la.$e, null, b.p.Dc().dd(this.rh), b.p.Dc().fd(this.sh), b.p.Dc().gd(this.th), b.p.Dc().hd(this.uh), b.p.Dc().jd(this.vh));
      };
      b.prototype.Le = function (b) {
        this.sc = b;
      };
      b.prototype.ak = function (b, c, d) {
        this.rh = b;
        this.Sj = c;
        this.Xj = d;
        this.Fb();
      };
      b.prototype.bk = function (b, c, d) {
        this.sh = b;
        this.Tj = c;
        this.Yj = d;
        this.Fb();
      };
      b.prototype.ck = function (b, c, d) {
        this.th = b;
        this.Uj = c;
        this.Zj = d;
        this.Fb();
      };
      b.prototype.dk = function (b, c, d) {
        this.uh = b;
        this.Vj = c;
        this.$j = d;
        this.Fb();
      };
      b.prototype.ek = function (b, c, d) {
        this.vh = b;
        this.Wj = c;
        this._j = d;
        this.Fb();
      };
      b.prototype.Ra = function () {
        var b = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = b;
        this.te.width = b * this.Qj;
        this.te.height = b * this.Rj;
        this.Ng = this.Rj / 4;
        var c = C(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != c) {
          for (var d = c; d < this.Pj.xj.length; d++) {
            this.Pj.xj[d].lh();
          }
          while (this.Pj.wj < c) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > c) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      b.prototype.Pa = function () {
        if (this.sc) {
          if (d().p.W) {
            var b = Date.now();
            var c = b / 200;
            var e = Math.sin(c);
            var f = this.Ng;
            var g = this.Ng * 1.5;
            var h = this.Qj - (this.Qj - f * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var i = this.Rj * 0.5;
            var j = 0;
            var k = 0;
            for (var l = -1; l < this.Pj.wj; l++) {
              var m = l;
              var n = Math.cos(m * 1 / 12 * Math.PI - c) * (1 - Math.pow(16, m * -1 / 12));
              if (l >= 0) {
                var o = h + f * -0.5 * m;
                var p = i + f * 0.5 * n;
                var q = f * 2;
                var r = g * 2;
                var s = Math.atan2(k - n, m - j);
                if (l == 0) {
                  this.Pj.vj.mh(o, p, q, s);
                }
                this.Pj.xj[l].mh(o, p, q, r, s);
                var t = this.Sj ? this.Xj ? 0.4 + e * 0.2 : 0.9 + e * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[l].Nf.qh(t);
                this.Pj.xj[l].Pf.qh(t);
              }
              j = m;
              k = n;
            }
            for (var u = 0; u < this.Pj.vj.Cj.length; u++) {
              var v = this.Tj ? this.Yj ? 0.4 + e * 0.2 : 0.9 + e * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[u].qh(v);
            }
            for (var w = 0; w < this.Pj.vj.Dj.length; w++) {
              var x = this.Uj ? this.Zj ? 0.4 + e * 0.2 : 0.9 + e * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[w].qh(x);
            }
            for (var y = 0; y < this.Pj.vj.Ej.length; y++) {
              var z = this.Vj ? this.$j ? 0.4 + e * 0.2 : 0.9 + e * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[y].qh(z);
            }
            for (var A = 0; A < this.Pj.vj.Fj.length; A++) {
              var B = this.Wj ? this._j ? 0.4 + e * 0.2 : 0.9 + e * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[A].qh(B);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return b;
    }();
    var Fa = function () {
      function b(b) {
        this.rc = b;
      }
      b.fk = $("#game-view");
      b.gk = $("#results-view");
      b.hk = $("#main-menu-view");
      b.ik = $("#popup-view");
      b.jk = $("#toaster-view");
      b.kk = $("#loading-view");
      b.lk = $("#stretch-box");
      b.mk = $("#game-canvas");
      b.di = $("#background-canvas");
      b.nk = $("#social-buttons");
      b.ok = $("#markup-wrap");
      b.prototype.a = function () {};
      b.prototype.ii = function () {};
      b.prototype.ji = function () {};
      b.prototype.ei = function () {};
      b.prototype.Ra = function () {};
      b.prototype.Pa = function (b, c) {};
      return b;
    }();
    var Ga = function () {
      function b(b, c, d, e, f, g) {
        var h = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + b + "</span></div>";
        var i = $(h);
        i.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: c,
              name: d,
              caption: e,
              description: f,
              picture: g
            }, function () {});
          }
        });
        return i;
      }
      var c = $("#final-caption");
      var f = $("#final-continue");
      var g = $("#congrats-bg");
      var j = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var l = $("#final-share-fb");
      var m = $("#final-message");
      var n = $("#final-score");
      var o = $("#final-place");
      var p = $("#final-board");
      var q = A(Fa, function () {
        Fa.call(this, 0);
        var b = this;
        var g = d();
        var j = Fa.mk.get()[0];
        console.log("sSE=" + _a.qk);
        l.toggle(_a.qk);
        c.text(u("index.game.result.title"));
        f.text(u("index.game.result.continue"));
        f.click(function () {
          g.r.Cd();
          g.f.Ma.c();
          g.r.G(ea.AudioState.F);
          g.s.I(g.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (c) {
          if (c.keyCode == 32) {
            b.rk = true;
          }
          if (c.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (c.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (i.KeyCodeRespawn == c.keyCode) {
            b.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (c) {
          if (c.keyCode == 32) {
            b.rk = false;
          }
        });
        j.addEventListener("touchmove", function (c) {
          if (!k() || !i.gamePad.checked) {
            if (c = c || window.event) {
              c = c.touches[0];
              if (c.clientX !== undefined) {
                b.sk = Math.atan2(c.clientY - j.offsetHeight * 0.5, c.clientX - j.offsetWidth * 0.5);
              } else {
                b.sk = Math.atan2(c.pageY - j.offsetHeight * 0.5, c.pageX - j.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        j.addEventListener("touchstart", function (c) {
          if (c = c || window.event) {
            b.rk = c.touches.length >= 2;
          }
          c.preventDefault();
        }, true);
        j.addEventListener("touchend", function (c) {
          if (c = c || window.event) {
            b.rk = c.touches.length >= 2;
          }
        }, true);
        j.addEventListener("mousemove", function (c) {
          if (!e) {
            if (c = c || window.event && c.clientX !== undefined) {
              b.sk = Math.atan2(c.clientY - j.offsetHeight * 0.5, c.clientX - j.offsetWidth * 0.5);
            }
          }
        }, true);
        j.addEventListener("mousedown", function (c) {
          console.log(c);
          b.rk = true;
        }, true);
        j.addEventListener("mouseup", function (c) {
          console.log(c);
          b.rk = false;
        }, true);
        this.wb = new na(Fa.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        h.eventoPrincipal = b;
      });
      q.prototype.a = function () {};
      q.prototype.ii = function () {
        if (this.cb == 0) {
          Fa.fk.stop();
          Fa.fk.fadeIn(500);
          Fa.gk.stop();
          Fa.gk.fadeOut(1);
          Fa.hk.stop();
          Fa.hk.fadeOut(50);
          Fa.ik.stop();
          Fa.ik.fadeOut(50);
          Fa.jk.stop();
          Fa.jk.fadeOut(50);
          Fa.kk.stop();
          Fa.kk.fadeOut(50);
          Fa.lk.stop();
          Fa.lk.fadeOut(1);
          Fa.di.stop();
          Fa.di.fadeOut(50);
          fa.Le(false);
          Fa.nk.stop();
          Fa.nk.fadeOut(50);
          Fa.ok.stop();
          Fa.ok.fadeOut(50);
        } else {
          Fa.fk.stop();
          Fa.fk.fadeIn(500);
          Fa.gk.stop();
          Fa.gk.fadeIn(500);
          Fa.hk.stop();
          Fa.hk.fadeOut(50);
          Fa.ik.stop();
          Fa.ik.fadeOut(50);
          Fa.jk.stop();
          Fa.jk.fadeOut(50);
          Fa.kk.stop();
          Fa.kk.fadeOut(50);
          Fa.lk.stop();
          Fa.lk.fadeOut(1);
          Fa.di.stop();
          Fa.di.fadeOut(50);
          fa.Le(false);
          Fa.nk.stop();
          Fa.nk.fadeOut(50);
          Fa.ok.stop();
          Fa.ok.fadeOut(50);
        }
      };
      q.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      q.prototype.Fa = function () {
        console.log("re");
        g.hide();
        setTimeout(function () {
          console.log("fi_bg");
          g.fadeIn(500);
        }, 3000);
        j.hide();
        setTimeout(function () {
          console.log("fi_aw");
          j.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      q.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          d().r.Gd();
        }
      };
      q.prototype.Ra = function () {
        this.wb.Ra();
      };
      q.prototype.Pa = function (b, c) {
        this.wb.Pa(b, c);
      };
      q.prototype.Da = function (c, d, e) {
        var f = undefined;
        var g = undefined;
        var h = undefined;
        if (d >= 1 && d <= 10) {
          f = u("index.game.result.place.i" + d);
          g = u("index.game.result.placeInBoard");
          h = u("index.game.social.shareResult.messGood").replace("{0}", e).replace("{1}", c).replace("{2}", f);
        } else {
          f = "";
          g = u("index.game.result.tryHit");
          h = u("index.game.social.shareResult.messNorm").replace("{0}", e).replace("{1}", c);
        }
        m.html(u("index.game.result.your"));
        n.html(c);
        o.html(f);
        p.html(g);
        if (_a.qk) {
          var i = u("index.game.result.share");
          u("index.game.social.shareResult.caption");
          l.empty().append(b(i, "https://wormate.io", "wormate.io", h, h, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      q.prototype.T = function () {
        return this.sk;
      };
      q.prototype.U = function () {
        return this.rk;
      };
      return q;
    }();
    var Ha = function () {
      var b = $("#loading-worm-a");
      var c = $("#loading-worm-b");
      var d = $("#loading-worm-c");
      var e = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var f = A(Fa, function () {
        Fa.call(this, 0);
      });
      f.prototype.a = function () {};
      f.prototype.ii = function () {
        Fa.fk.stop();
        Fa.fk.fadeOut(50);
        Fa.gk.stop();
        Fa.gk.fadeOut(50);
        Fa.hk.stop();
        Fa.hk.fadeOut(50);
        Fa.ik.stop();
        Fa.ik.fadeOut(50);
        Fa.jk.stop();
        Fa.jk.fadeOut(50);
        Fa.kk.stop();
        Fa.kk.fadeIn(500);
        Fa.lk.stop();
        Fa.lk.fadeIn(1);
        Fa.di.stop();
        Fa.di.fadeIn(500);
        fa.Le(true);
        Fa.nk.stop();
        Fa.nk.fadeOut(50);
        Fa.ok.stop();
        Fa.ok.fadeOut(50);
      };
      f.prototype.ji = function () {
        this.tk();
      };
      f.prototype.tk = function () {
        b.css("background-position", "100% 200%");
        for (var f = 0; f < e.length; f++) {
          var g = Math.floor(Math.random() * e.length);
          var h = e[f];
          e[f] = e[g];
          e[g] = h;
        }
        b.css("background-position", e[0]);
        c.css("background-position", e[1]);
        d.css("background-position", e[2]);
      };
      return f;
    }();
    var Ia = function () {
      $("#mm-event-text");
      var b = $("#mm-skin-canv");
      var c = $("#mm-skin-prev");
      var e = $("#mm-skin-next");
      var f = $("#mm-skin-over");
      var g = $("#mm-skin-over-button-list");
      var h = $("#mm-params-nickname");
      var i = $("#mm-params-game-mode");
      var j = $("#mm-action-buttons");
      var k = $("#mm-action-play");
      var l = $("#mm-action-guest");
      var m = $("#mm-action-login");
      var n = $("#mm-player-info");
      var o = $("#mm-store");
      var q = $("#mm-leaders");
      var r = $("#mm-settings");
      var s = $("#mm-coins-box");
      var t = $("#mm-player-avatar");
      var v = $("#mm-player-username");
      var w = $("#mm-coins-val");
      var x = $("#mm-player-exp-bar");
      var y = $("#mm-player-exp-val");
      var z = $("#mm-player-level");
      var B = A(Fa, function () {
        Fa.call(this, 1);
        var f = d();
        this.uk = new Ea(b);
        i.click(function () {
          f.r.Cd();
        });
        b.click(function () {
          if (f.u.P()) {
            f.r.Cd();
            f.s.I(f.s.$h);
          }
        });
        c.click(function () {
          f.r.Cd();
          f.t.Ah();
        });
        e.click(function () {
          f.r.Cd();
          f.t.zh();
        });
        h.keypress(function (b) {
          if (b.keyCode == 13) {
            f.na();
          }
        });
        k.click(function () {
          f.r.Cd();
          f.na();
        });
        l.click(function () {
          f.r.Cd();
          f.na();
        });
        m.click(function () {
          f.r.Cd();
          f.s.I(f.s.Zh);
        });
        r.click(function () {
          f.r.Cd();
          f.s.I(f.s.xa);
        });
        n.click(function () {
          if (f.u.P()) {
            f.r.Cd();
            f.s.I(f.s.Yh);
          }
        });
        q.click(function () {
          if (f.u.P()) {
            f.r.Cd();
            f.s.I(f.s.Xh);
          }
        });
        o.click(function () {
          if (f.u.P()) {
            f.r.Cd();
            f.s.I(f.s._h);
          }
        });
        s.click(function () {
          if (f.u.P()) {
            f.r.Cd();
            f.s.I(f.s.Wh);
          }
        });
        this.vk();
        this.wk();
        var g = p(ha.va);
        if (g != "ARENA" && g != "TEAM2") {
          g = "ARENA";
        }
        i.val(g);
        console.log("Load GM: " + g);
      });
      B.prototype.a = function () {
        var b = d();
        var c = this;
        b.u.V(function () {
          b.s.F.xk();
        });
        b.u.Pi(function () {
          if (b.u.P()) {
            b.t.Bh(b.u.Di(), ta.ia);
            b.t.Bh(b.u.Ei(), ta.ja);
            b.t.Bh(b.u.Fi(), ta.ka);
            b.t.Bh(b.u.Gi(), ta.la);
            b.t.Bh(b.u.Hi(), ta.ma);
          } else {
            b.t.Bh(b.Ga(), ta.ia);
            b.t.Bh(0, ta.ja);
            b.t.Bh(0, ta.ka);
            b.t.Bh(0, ta.la);
            b.t.Bh(0, ta.ma);
          }
        });
        b.u.Pi(function () {
          k.toggle(b.u.P());
          m.toggle(!b.u.P());
          l.toggle(!b.u.P());
          q.toggle(b.u.P());
          o.toggle(b.u.P());
          s.toggle(b.u.P());
          if (b.u.P()) {
            f.hide();
            v.html(b.u.wi());
            t.attr("src", b.u.xi());
            w.html(b.u.zi());
            x.width(b.u.Bi() * 100 / b.u.Ci() + "%");
            y.html(b.u.Bi() + " / " + b.u.Ci());
            z.html(b.u.Ai());
            h.val(b.u.ga());
          } else {
            f.toggle(_a.qk && !b.Ha());
            v.html(v.data("guest"));
            t.attr("src", S);
            w.html("10");
            x.width("0");
            y.html("");
            z.html(1);
            h.val(p(ha.Aa));
          }
        });
        b.t.xh(function () {
          c.uk.ak(b.t.ha(ta.ia), false, false);
          c.uk.bk(b.t.ha(ta.ja), false, false);
          c.uk.ck(b.t.ha(ta.ka), false, false);
          c.uk.dk(b.t.ha(ta.la), false, false);
          c.uk.ek(b.t.ha(ta.ma), false, false);
        });
      };
      B.prototype.ii = function () {
        Fa.fk.stop();
        Fa.fk.fadeOut(50);
        Fa.gk.stop();
        Fa.gk.fadeOut(50);
        Fa.hk.stop();
        Fa.hk.fadeIn(500);
        Fa.ik.stop();
        Fa.ik.fadeOut(50);
        Fa.jk.stop();
        Fa.jk.fadeOut(50);
        Fa.kk.stop();
        Fa.kk.fadeOut(50);
        Fa.lk.stop();
        Fa.lk.fadeIn(1);
        Fa.di.stop();
        Fa.di.fadeIn(500);
        fa.Le(true);
        Fa.nk.stop();
        Fa.nk.fadeIn(500);
        Fa.ok.stop();
        Fa.ok.fadeIn(500);
      };
      B.prototype.ji = function () {
        d().r.Dd();
        this.uk.Le(true);
      };
      B.prototype.ei = function () {
        this.uk.Le(false);
      };
      B.prototype.Ra = function () {
        this.uk.Ra();
      };
      B.prototype.Pa = function (b, c) {
        this.uk.Pa();
      };
      B.prototype.ga = function () {
        return h.val();
      };
      B.prototype.D = function () {
        return i.val();
      };
      B.prototype.xk = function () {
        j.show();
      };
      B.prototype.vk = function () {
        var b = $("#mm-advice-cont").children();
        var c = 0;
        setInterval(function () {
          b.eq(c).fadeOut(500, function () {
            if (++c >= b.length) {
              c = 0;
            }
            b.eq(c).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      B.prototype.wk = function () {
        function b() {
          c.Ka(true);
          setTimeout(function () {
            f.hide();
          }, 3000);
        }
        var c = d();
        if (_a.qk && !c.Ha()) {
          f.show();
          var e = u("index.game.main.menu.unlockSkins.share");
          var h = encodeURIComponent(u("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var i = encodeURIComponent(u("index.game.main.menu.unlockSkins.comeAndPlay"));
          g.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + h + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + e + "</span></a>").click(b));
          g.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + i + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + e + "</span></a>").click(b));
        }
      };
      return B;
    }();
    var Ja = function () {
      var b = A(Fa, function () {
        Fa.call(this, 0);
      });
      b.prototype.a = function () {};
      b.prototype.ii = function () {
        Fa.fk.stop();
        Fa.fk.fadeOut(50);
        Fa.gk.stop();
        Fa.gk.fadeOut(50);
        Fa.hk.stop();
        Fa.hk.fadeOut(50);
        Fa.ik.stop();
        Fa.ik.fadeOut(50);
        Fa.jk.stop();
        Fa.jk.fadeOut(50);
        Fa.kk.stop();
        Fa.kk.fadeOut(50);
        Fa.lk.stop();
        Fa.lk.fadeOut(1);
        Fa.di.stop();
        Fa.di.fadeOut(50);
        fa.Le(false);
        Fa.nk.stop();
        Fa.nk.fadeOut(50);
        Fa.ok.stop();
        Fa.ok.fadeOut(50);
      };
      return b;
    }();
    var Ka = function () {
      var b = $("#toaster-stack");
      var c = A(Fa, function () {
        Fa.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      c.prototype.a = function () {};
      c.prototype.ii = function () {
        Fa.fk.stop();
        Fa.fk.fadeOut(50);
        Fa.gk.stop();
        Fa.gk.fadeOut(50);
        Fa.hk.stop();
        Fa.hk.fadeOut(50);
        Fa.ik.stop();
        Fa.ik.fadeOut(50);
        Fa.jk.stop();
        Fa.jk.fadeIn(500);
        Fa.kk.stop();
        Fa.kk.fadeOut(50);
        Fa.lk.stop();
        Fa.lk.fadeIn(1);
        Fa.di.stop();
        Fa.di.fadeIn(500);
        fa.Le(true);
        Fa.nk.stop();
        Fa.nk.fadeOut(50);
        Fa.ok.stop();
        Fa.ok.fadeIn(500);
      };
      c.prototype.ji = function () {
        this.Ak();
      };
      c.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      c.prototype._ = function (b) {
        this.yk.unshift(b);
        setTimeout(function () {
          d().s.ki();
        }, 0);
      };
      c.prototype.Ti = function (b) {
        this.yk.push(b);
        setTimeout(function () {
          d().s.ki();
        }, 0);
      };
      c.prototype.Ak = function () {
        var c = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            d().s.gi();
            return;
          }
          var e = this.yk.shift();
          this.zk = e;
          var f = e.Bk();
          f.hide();
          f.fadeIn(300);
          b.append(f);
          e.Ck = function () {
            f.fadeOut(300);
            setTimeout(function () {
              f.remove();
            }, 300);
            if (c.zk == e) {
              c.zk = null;
            }
            c.Ak();
          };
          e.ji();
        }
      };
      return c;
    }();
    var La = function () {
      var b = $("#popup-menu-label");
      var c = $("#popup-menu-coins-box");
      var e = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var b = d();
        b.r.Cd();
        b.s.gi();
      });
      c.click(function () {
        var b = d();
        if (b.u.P()) {
          b.r.Cd();
          b.s.I(b.s.Wh);
        }
      });
      var f = A(Fa, function (b, c) {
        Fa.call(this, 1);
        this.ad = b;
        this.Dk = c;
      });
      f.prototype.a = function () {
        f.parent.prototype.a.call(this);
        if (!f.Ek) {
          f.Ek = true;
          var b = d();
          b.u.Pi(function () {
            if (b.u.P()) {
              e.html(b.u.zi());
            } else {
              e.html("0");
            }
          });
        }
      };
      f.Fk = $("#coins-view");
      f.Gk = $("#leaders-view");
      f.Hk = $("#profile-view");
      f.Ik = $("#settings-view");
      f.Jk = $("#login-view");
      f.Kk = $("#skins-view");
      f.Lk = $("#store-view");
      f.Mk = $("#wear-view");
      f.Nk = $("#withdraw-consent-view");
      f.Ok = $("#delete-account-view");
      f.Pk = $("#please-wait-view");
      f.prototype.ii = function () {
        Fa.fk.stop();
        Fa.fk.fadeOut(200);
        Fa.gk.stop();
        Fa.gk.fadeOut(200);
        Fa.hk.stop();
        Fa.hk.fadeOut(200);
        Fa.ik.stop();
        Fa.ik.fadeIn(200);
        Fa.jk.stop();
        Fa.jk.fadeOut(200);
        Fa.kk.stop();
        Fa.kk.fadeOut(200);
        Fa.nk.stop();
        Fa.nk.fadeIn(200);
        Fa.ok.stop();
        Fa.ok.fadeIn(200);
        b.html(this.ad);
        c.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      f.prototype.Rk = function () {};
      f.prototype.Sk = function () {
        La.Pk.stop();
        La.Pk.fadeIn(300);
      };
      f.prototype.Qk = function () {
        La.Pk.stop();
        La.Pk.fadeOut(300);
      };
      return f;
    }();
    var Ma = function () {
      var b = $("#store-buy-coins_125000");
      var c = $("#store-buy-coins_50000");
      var e = $("#store-buy-coins_16000");
      var f = $("#store-buy-coins_7000");
      var g = $("#store-buy-coins_3250");
      var h = $("#store-buy-coins_1250");
      var i = A(La, function () {
        La.call(this, u("index.game.popup.menu.coins.tab"), false);
        var i = d();
        var j = this;
        b.click(function () {
          i.r.Cd();
          j.Tk("coins_125000");
        });
        c.click(function () {
          i.r.Cd();
          j.Tk("coins_50000");
        });
        e.click(function () {
          i.r.Cd();
          j.Tk("coins_16000");
        });
        f.click(function () {
          i.r.Cd();
          j.Tk("coins_7000");
        });
        g.click(function () {
          i.r.Cd();
          j.Tk("coins_3250");
        });
        h.click(function () {
          i.r.Cd();
          j.Tk("coins_1250");
        });
      });
      i.prototype.a = function () {
        i.parent.prototype.a.call(this);
      };
      i.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeIn(200);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      i.prototype.ji = function () {
        d().r.Dd();
      };
      i.prototype.Tk = function (b) {};
      return i;
    }();
    var Na = function () {
      var b = $("#highscore-table");
      var c = $("#leaders-button-level");
      var e = $("#leaders-button-highscore");
      var f = $("#leaders-button-kills");
      var g = A(La, function () {
        La.call(this, u("index.game.popup.menu.leaders.tab"), true);
        var b = d();
        var g = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: c,
            Yk: "byLevel"
          },
          Zk: {
            Xk: e,
            Yk: "byHighScore"
          },
          $k: {
            Xk: f,
            Yk: "byKillsAndHeadShots"
          }
        };
        c.click(function () {
          b.r.Cd();
          g._k(g.Vk.Wk);
        });
        e.click(function () {
          b.r.Cd();
          g._k(g.Vk.Zk);
        });
        f.click(function () {
          b.r.Cd();
          g._k(g.Vk.$k);
        });
      });
      g.prototype.a = function () {
        g.parent.prototype.a.call(this);
      };
      g.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeIn(200);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      g.prototype.ji = function () {
        d().r.Dd();
        var b = this;
        this.Sk();
        $.get(U + "/pub/leaders", function (c) {
          b.Uk = c;
          b._k(b.al ?? b.Vk.Wk);
          b.Qk();
        }).done(function () {
          b.Qk();
        });
      };
      g.prototype._k = function (c) {
        this.al = c;
        for (var d in this.Vk) {
          if (this.Vk.hasOwnProperty(d)) {
            var e = this.Vk[d];
            e.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var f = this.Uk[this.al.Yk], g = "", h = 0; h < f.length; h++) {
          var i = f[h];
          g += "<div class=\"table-row\"><span>" + (h + 1) + "</span><span><img src=\"" + i.avatarUrl + "\"/></span><span>" + i.username + "</span><span>" + i.level + "</span><span>" + i.highScore + "</span><span>" + i.headShots + " / " + i.kills + "</span></div>";
        }
        b.empty();
        b.append(g);
      };
      return g;
    }();
    var Oa = function () {
      var b = $("#popup-login-gg");
      var c = $("#popup-login-fb");
      var e = A(La, function () {
        La.call(this, u("index.game.popup.menu.login.tab"), false);
        var e = d();
        var f = this;
        b.click(function () {
          e.r.Cd();
          f.Sk();
          e.u.Qi(function () {
            f.Qk();
          });
          setTimeout(function () {
            f.Qk();
          }, 10000);
          e.u.Zi();
        });
        c.click(function () {
          e.r.Cd();
          f.Sk();
          e.u.Qi(function () {
            f.Qk();
          });
          setTimeout(function () {
            f.Qk();
          }, 10000);
          e.u.Vi();
        });
      });
      e.prototype.a = function () {
        e.parent.prototype.a.call(this);
      };
      e.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeIn(200);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      e.prototype.ji = function () {
        d().r.Dd();
      };
      return e;
    }();
    var Pa = function () {
      var b = $("#profile-avatar");
      var c = $("#profile-username");
      var e = $("#profile-experience-bar");
      var f = $("#profile-experience-val");
      var g = $("#profile-level");
      var h = $("#profile-stat-highScore");
      var i = $("#profile-stat-bestSurvivalTime");
      var j = $("#profile-stat-kills");
      var k = $("#profile-stat-headshots");
      var l = $("#profile-stat-gamesPlayed");
      var m = $("#profile-stat-totalTimeSpent");
      var n = $("#profile-stat-registrationDate");
      var o = A(La, function () {
        La.call(this, u("index.game.popup.menu.profile.tab"), true);
      });
      o.prototype.a = function () {
        o.parent.prototype.a.call(this);
      };
      o.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeIn(200);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      o.prototype.ji = function () {
        var o = d();
        o.r.Dd();
        var p = o.u.Oi();
        var q = moment([p.year, p.month - 1, p.day]).format("LL");
        c.html(o.u.wi());
        b.attr("src", o.u.xi());
        e.width(o.u.Bi() * 100 / o.u.Ci() + "%");
        f.html(o.u.Bi() + " / " + o.u.Ci());
        g.html(o.u.Ai());
        h.html(o.u.Ii());
        i.html(x(o.u.Ji()));
        j.html(o.u.Ki());
        k.html(o.u.Li());
        l.html(o.u.Mi());
        m.html(x(o.u.Ni()));
        n.html(q);
      };
      return o;
    }();
    var Qa = function () {
      var b = $("#settings-music-enabled-switch");
      var c = $("#settings-sfx-enabled-switch");
      var e = $("#settings-show-names-switch");
      var f = $("#popup-logout");
      var g = $("#popup-logout-container");
      var h = $("#popup-delete-account");
      var i = $("#popup-delete-account-container");
      var j = $("#popup-withdraw-consent");
      var k = A(La, function () {
        La.call(this, u("index.game.popup.menu.settings.tab"), false);
        var g = this;
        var i = d();
        b.click(function () {
          var c = !!b.prop("checked");
          s(ha.Me, c, 30);
          i.r.td(c);
          i.r.Cd();
        });
        c.click(function () {
          var b = !!c.prop("checked");
          s(ha.Ne, b, 30);
          i.r.rd(b);
          i.r.Cd();
        });
        e.click(function () {
          i.r.Cd();
        });
        f.click(function () {
          i.r.Cd();
          g.Sk();
          setTimeout(function () {
            g.Qk();
          }, 2000);
          i.u.Wi();
        });
        h.click(function () {
          if (i.u.P()) {
            i.r.Cd();
            i.s.I(i.s.Vh);
          } else {
            i.r.Hd();
          }
        });
        j.click(function () {
          if (i.Y()) {
            i.r.Cd();
            i.s.I(i.s.Uh);
          } else {
            i.r.Hd();
          }
        });
      });
      k.prototype.a = function () {
        k.parent.prototype.a.call(this);
        var f = d();
        var h = undefined;
        switch (p(ha.Me)) {
          case "false":
            h = false;
            break;
          default:
            h = true;
        }
        b.prop("checked", h);
        f.r.td(h);
        var j = undefined;
        switch (p(ha.Ne)) {
          case "false":
            j = false;
            break;
          default:
            j = true;
        }
        c.prop("checked", j);
        f.r.rd(j);
        var l = undefined;
        switch (p(ha.ya)) {
          case "false":
            l = false;
            break;
          default:
            l = true;
        }
        console.log("Load sPN: " + l);
        e.prop("checked", l);
        f.u.V(function () {
          g.toggle(f.u.P());
          i.toggle(f.u.P());
        });
      };
      k.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeIn(200);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      k.prototype.ji = function () {
        var b = d();
        b.r.Dd();
        if (b.Y()) {
          j.show();
        } else {
          j.hide();
        }
      };
      k.prototype.wa = function () {
        return e.prop("checked");
      };
      return k;
    }();
    var Ra = function () {
      var c = $("#store-view-canv");
      var e = $("#skin-description-text");
      var f = $("#skin-group-description-text");
      var g = $("#store-locked-bar");
      var h = $("#store-locked-bar-text");
      var i = $("#store-buy-button");
      var j = $("#store-item-price");
      var k = $("#store-groups");
      var l = $("#store-view-prev");
      var m = $("#store-view-next");
      var n = A(La, function () {
        La.call(this, u("index.game.popup.menu.skins.tab"), true);
        var b = this;
        var e = d();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new Ea(c);
        i.click(function () {
          e.r.Cd();
          b.fl();
        });
        l.click(function () {
          e.r.Cd();
          b.bl.gl();
        });
        m.click(function () {
          e.r.Cd();
          b.bl.hl();
        });
      });
      n.prototype.a = function () {
        n.parent.prototype.a.call(this);
        var b = this;
        var c = d();
        c.p.ca(function () {
          var d = c.p.Ac();
          if (d != null) {
            b.cl = [];
            for (var e = 0; e < d.skinGroupArrayDict.length; e++) {
              b.cl.push(new o(b, d.skinGroupArrayDict[e]));
            }
            b.dl = {};
            for (var f = 0; f < d.skinArrayDict.length; f++) {
              var g = d.skinArrayDict[f];
              b.dl[g.id] = g;
            }
          }
        });
        this.il(false);
        c.t.xh(function () {
          b.il(false);
        });
      };
      n.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeIn(200);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      n.prototype.ji = function () {
        d().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      n.prototype.ei = function () {
        this.el.Le(false);
      };
      n.prototype.Ra = function () {
        this.el.Ra();
      };
      n.prototype.Pa = function (b, c) {
        this.el.Pa();
      };
      n.prototype.jl = function () {
        var b = this;
        var c = this;
        var e = d();
        k.empty();
        for (var f = 0; f < this.cl.length; f++) {
          (function (d) {
            var f = b.cl[d];
            var g = document.createElement("li");
            k.append(g);
            var h = $(g);
            h.html(f.kl());
            h.click(function () {
              e.r.Cd();
              c.ll(f);
            });
            f.ml = h;
          })(f);
        }
        if (this.cl.length > 0) {
          var g = e.t.ha(ta.ia);
          for (var f = 0; f < this.cl.length; f++) {
            var h = this.cl[f];
            for (var i = h.nl.list, j = 0; j < i.length; j++) {
              if (i[j] == g) {
                h.ol = j;
                this.ll(h);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      n.prototype.ll = function (b) {
        if (this.bl != b) {
          var c = d();
          this.bl = b;
          k.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          f.html("");
          if (b.nl != null) {
            var e = c.p.Ac().textDict[b.nl.description];
            if (e != null) {
              f.html(y(v(e)));
            }
          }
          this.il(true);
        }
      };
      n.prototype.pl = function () {
        if (this.bl == null) {
          return pa.Yg();
        } else {
          return this.bl.ql();
        }
      };
      n.prototype.fl = function () {
        var b = this;
        this.pl().ah(function (c) {
          b.rl(c);
        });
      };
      n.prototype.rl = function (b) {
        var c = this;
        var e = d();
        var f = this.dl[b].price;
        if (e.u.zi() >= f) {
          this.Sk();
          var g = e.t.ha(ta.ia);
          var h = e.t.ha(ta.ja);
          var i = e.t.ha(ta.ka);
          var j = e.t.ha(ta.la);
          var k = e.t.ha(ta.ma);
          e.u.Ui(b, ta.ia, function () {
            e.t.Bh(g, ta.ia);
            e.t.Bh(h, ta.ja);
            e.t.Bh(i, ta.ka);
            e.t.Bh(j, ta.la);
            e.t.Bh(k, ta.ma);
            if (e.u.Ch(b, ta.ia)) {
              e.t.Bh(b, ta.ia);
            }
            c.Qk();
          });
        }
      };
      n.prototype.il = function (b) {
        var c = d();
        this.el.bk(c.t.ha(ta.ja), false, false);
        this.el.ck(c.t.ha(ta.ka), false, false);
        this.el.dk(c.t.ha(ta.la), false, false);
        this.el.ek(c.t.ha(ta.ma), false, false);
        var f = this.pl();
        if (f._g()) {
          var k = f.$g();
          var l = this.dl[k];
          var m = false;
          if (c.t.Ja(k, ta.ia)) {
            g.hide();
            i.hide();
          } else if (l == null || l.nonbuyable == 1) {
            m = true;
            g.show();
            i.hide();
            h.text(u("index.game.popup.menu.store.locked"));
            if (l != null && l.nonbuyable && l.nonbuyableCause != null) {
              var n = c.p.Ac().textDict[l.nonbuyableCause];
              if (n != null) {
                h.text(v(n));
              }
            }
          } else {
            g.hide();
            i.show();
            j.html(l.price);
          }
          e.html("");
          if (l != null && l.description != null) {
            var o = c.p.Ac().textDict[l.description];
            if (o != null) {
              e.html(y(v(o)));
            }
          }
          q.html(l.id);
          this.el.ak(k, true, m);
          if (b) {
            c.t.Bh(k, ta.ia);
          }
        }
      };
      var o = function () {
        function c(b, c) {
          this.sl = b;
          this.ol = 0;
          this.nl = c;
        }
        c.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        c.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        c.prototype.kl = function () {
          let c = v(this.nl.name);
          if (this.nl.img) {
            var d = "<img src=\"";
            d = d + b + "/images/paths/" + this.nl.img;
            c = d = d + "\" height=\"43\" width=\"220\" />";
          }
          return c;
        };
        c.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return pa.Yg();
          } else {
            return pa.Zg(this.nl.list[this.ol]);
          }
        };
        return c;
      }();
      return n;
    }();
    var Sa = function () {
      var b = $("#store-go-coins-button");
      var c = $("#store-go-skins-button");
      var e = $("#store-go-wear-button");
      var f = A(La, function () {
        La.call(this, u("index.game.popup.menu.store.tab"), true);
        var f = d();
        b.click(function () {
          f.r.Cd();
          f.s.I(f.s.Wh);
        });
        c.click(function () {
          f.r.Cd();
          f.s.I(f.s.$h);
        });
        e.click(function () {
          f.r.Cd();
          f.s.I(f.s.ai);
        });
      });
      f.prototype.a = function () {
        f.parent.prototype.a.call(this);
      };
      f.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeIn(200);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      f.prototype.ji = function () {
        d().r.Dd();
      };
      return f;
    }();
    var Ta = function () {
      var b = $("#wear-view-canv");
      var c = $("#wear-description-text");
      var e = $("#wear-locked-bar");
      var f = $("#wear-locked-bar-text");
      var g = $("#wear-buy-button");
      var h = $("#wear-item-price");
      var i = $("#wear-eyes-button");
      var j = $("#wear-mouths-button");
      var k = $("#wear-glasses-button");
      var l = $("#wear-hats-button");
      var m = $("#wear-tint-chooser");
      var n = $("#wear-view-prev");
      var o = $("#wear-view-next");
      var p = A(La, function () {
        var c = this;
        La.call(this, u("index.game.popup.menu.wear.tab"), true);
        var e = d();
        var f = this;
        this.tl = [];
        this.ja = new q(this, ta.ja, i);
        this.ka = new q(this, ta.ka, j);
        this.la = new q(this, ta.la, k);
        this.ma = new q(this, ta.ma, l);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new Ea(b);
        g.click(function () {
          e.r.Cd();
          f.Bl();
        });
        n.click(function () {
          e.r.Cd();
          f.ul.Cl();
        });
        o.click(function () {
          e.r.Cd();
          f.ul.Dl();
        });
        i.click(function () {
          e.r.Cd();
          f.El(c.ja);
        });
        j.click(function () {
          e.r.Cd();
          f.El(c.ka);
        });
        k.click(function () {
          e.r.Cd();
          f.El(c.la);
        });
        l.click(function () {
          e.r.Cd();
          f.El(c.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      p.prototype.a = function () {
        p.parent.prototype.a.call(this);
        var b = d();
        var c = this;
        b.p.ca(function () {
          var d = b.p.Ac();
          if (d != null) {
            c.vl = d.eyesDict;
            c.wl = d.mouthDict;
            c.xl = d.glassesDict;
            c.yl = d.hatDict;
            c.zl = d.colorDict;
            c.ja.Fl(d.eyesVariantArray);
            c.ja.Gl(c.vl);
            c.ka.Fl(d.mouthVariantArray);
            c.ka.Gl(c.wl);
            c.la.Fl(d.glassesVariantArray);
            c.la.Gl(c.xl);
            c.ma.Fl(d.hatVariantArray);
            c.ma.Gl(c.yl);
          }
        });
        this.il(false);
        b.t.xh(function () {
          c.il(false);
        });
      };
      p.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeIn(200);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      p.prototype.ji = function () {
        d().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      p.prototype.ei = function () {
        this.Al.Le(false);
      };
      p.prototype.Ra = function () {
        this.Al.Ra();
      };
      p.prototype.Pa = function (b, c) {
        this.Al.Pa();
      };
      p.prototype.El = function (b) {
        this.ul = b;
        for (var c = 0; c < this.tl.length; c++) {
          this.tl[c].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      p.prototype.Hl = function () {
        if (this.ul == null) {
          return pa.Yg();
        } else {
          return pa.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      p.prototype.Bl = function () {
        var b = this;
        this.Hl().ah(function (c) {
          b.Ui(c.Lb, c.rc);
        });
      };
      p.prototype.Ui = function (b, c) {
        var e = this;
        var f = d();
        var g = undefined;
        switch (c) {
          case ta.ja:
            g = this.vl[b].price;
            break;
          case ta.ka:
            g = this.wl[b].price;
            break;
          case ta.la:
            g = this.xl[b].price;
            break;
          case ta.ma:
            g = this.yl[b].price;
            break;
          default:
            return;
        }
        if (f.u.zi() >= g) {
          this.Sk();
          var h = f.t.ha(ta.ia);
          var i = f.t.ha(ta.ja);
          var j = f.t.ha(ta.ka);
          var k = f.t.ha(ta.la);
          var l = f.t.ha(ta.ma);
          f.u.Ui(b, c, function () {
            f.t.Bh(h, ta.ia);
            f.t.Bh(i, ta.ja);
            f.t.Bh(j, ta.ka);
            f.t.Bh(k, ta.la);
            f.t.Bh(l, ta.ma);
            if (f.u.Ch(b, c)) {
              f.t.Bh(b, c);
            }
            e.Qk();
          });
        }
      };
      p.prototype.Il = function (b, c) {
        switch (c) {
          case ta.ja:
            return this.vl[b];
          case ta.ka:
            return this.wl[b];
          case ta.la:
            return this.xl[b];
          case ta.ma:
            return this.yl[b];
        }
        return null;
      };
      p.prototype.il = function (b) {
        var i = d();
        this.Al.ak(i.t.ha(ta.ia), false, false);
        this.Al.bk(i.t.ha(ta.ja), false, false);
        this.Al.ck(i.t.ha(ta.ka), false, false);
        this.Al.dk(i.t.ha(ta.la), false, false);
        this.Al.ek(i.t.ha(ta.ma), false, false);
        var j = this.Hl();
        if (j._g()) {
          var k = j.$g();
          var l = this.Il(k.Lb, k.rc);
          var m = false;
          if (i.t.Ja(k.Lb, k.rc)) {
            e.hide();
            g.hide();
          } else if (l == null || l.nonbuyable == 1) {
            m = true;
            e.show();
            g.hide();
            f.text(u("index.game.popup.menu.store.locked"));
            if (l != null && l.nonbuyable && l.nonbuyableCause != null) {
              var n = i.p.Ac().textDict[l.nonbuyableCause];
              if (n != null) {
                f.text(v(n));
              }
            }
          } else {
            e.hide();
            g.show();
            h.html(l.price);
          }
          c.html("");
          if (l != null && l.description != null) {
            var o = i.p.Ac().textDict[l.description];
            if (o != null) {
              c.html(y(v(o)));
            }
          }
          switch (k.rc) {
            case ta.ja:
              this.Al.bk(k.Lb, true, m);
              break;
            case ta.ka:
              this.Al.ck(k.Lb, true, m);
              break;
            case ta.la:
              this.Al.dk(k.Lb, true, m);
              break;
            case ta.ma:
              this.Al.ek(k.Lb, true, m);
          }
          if (b) {
            i.t.Bh(k.Lb, k.rc);
          }
        }
      };
      var q = function () {
        function b(b, c, d) {
          this.sl = b;
          this.rc = c;
          this.Xk = d;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        b.prototype.Fl = function (b) {
          this.Kl = b;
        };
        b.prototype.Gl = function (b) {
          this.Jl = b;
        };
        b.prototype.ii = function () {
          var b = d();
          var c = b.t.ha(this.rc);
          for (var e = 0; e < this.Kl.length; e++) {
            for (var f = 0; f < this.Kl[e].length; f++) {
              if (this.Kl[e][f] == c) {
                this.Nl(e);
                this.Ol(f);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        b.prototype.Cl = function () {
          var b = this.Ll - 1;
          if (b < 0) {
            b = this.Kl.length - 1;
          }
          this.Nl(b);
          this.Ol(this.Ml % this.Kl[b].length);
        };
        b.prototype.Dl = function () {
          var b = this.Ll + 1;
          if (b >= this.Kl.length) {
            b = 0;
          }
          this.Nl(b);
          this.Ol(this.Ml % this.Kl[b].length);
        };
        b.prototype.Nl = function (b) {
          var c = this;
          if (b >= 0 && b < this.Kl.length) {
            this.Ll = b;
            m.empty();
            var e = this.Kl[this.Ll];
            if (e.length > 1) {
              for (var f = 0; f < e.length; f++) {
                (function (b) {
                  var f = e[b];
                  var g = c.Jl[f];
                  var h = "#" + c.sl.zl[g.prime];
                  var i = $("<div style=\"border-color:" + h + "\"></div>");
                  i.click(function () {
                    d().r.Cd();
                    c.Ol(b);
                  });
                  m.append(i);
                })(f);
              }
            }
          }
        };
        b.prototype.Ol = function (b) {
          if (b >= 0 && b < this.Kl[this.Ll].length) {
            this.Ml = b;
            m.children().css("background-color", "transparent");
            var c = m.children(":nth-child(" + (1 + b) + ")");
            c.css("background-color", c.css("border-color"));
            this.sl.il(true);
          }
        };
        b.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return b;
      }();
      return p;
    }();
    var Ua = function () {
      var b = $("#withdraw-consent-yes");
      var c = $("#withdraw-consent-no");
      var e = A(La, function () {
        La.call(this, u("index.game.popup.menu.consent.tab"), false);
        var e = d();
        b.click(function () {
          e.r.Cd();
          if (e.Y()) {
            e.s.I(e.s.F);
            e.$(false, true);
            e.s.aa._(new Za());
          } else {
            e.s.gi();
          }
        });
        c.click(function () {
          e.r.Cd();
          e.s.gi();
        });
      });
      e.prototype.a = function () {
        e.parent.prototype.a.call(this);
      };
      e.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeIn(200);
        La.Ok.stop();
        La.Ok.fadeOut(50);
      };
      e.prototype.ji = function () {
        d().r.Dd();
      };
      return e;
    }();
    var Va = function () {
      var b = $("#delete-account-timer");
      var c = $("#delete-account-yes");
      var e = $("#delete-account-no");
      var f = A(La, function () {
        La.call(this, u("index.game.popup.menu.delete.tab"), false);
        var b = d();
        c.click(function () {
          b.r.Cd();
          if (b.u.P()) {
            b.u.bj();
            b.u.Wi();
          } else {
            b.s.gi();
          }
        });
        e.click(function () {
          b.r.Cd();
          b.s.gi();
        });
        this.Pl = [];
      });
      f.prototype.a = function () {
        f.parent.prototype.a.call(this);
      };
      f.prototype.Rk = function () {
        La.Fk.stop();
        La.Fk.fadeOut(50);
        La.Gk.stop();
        La.Gk.fadeOut(50);
        La.Hk.stop();
        La.Hk.fadeOut(50);
        La.Jk.stop();
        La.Jk.fadeOut(50);
        La.Ik.stop();
        La.Ik.fadeOut(50);
        La.Kk.stop();
        La.Kk.fadeOut(50);
        La.Lk.stop();
        La.Lk.fadeOut(50);
        La.Mk.stop();
        La.Mk.fadeOut(50);
        La.Nk.stop();
        La.Nk.fadeOut(50);
        La.Ok.stop();
        La.Ok.fadeIn(200);
      };
      f.prototype.ji = function () {
        d().r.Hd();
        c.stop();
        c.hide();
        b.stop();
        b.show();
        b.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          b.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          b.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          b.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          b.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          b.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          b.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          b.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          b.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          b.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          b.hide();
          c.fadeIn(300);
        }, 10000);
      };
      f.prototype.Rl = function (b, c) {
        var d = setTimeout(b, c);
        this.Pl.push(d);
      };
      f.prototype.Ql = function () {
        for (var b = 0; b < this.Pl.length; b++) {
          clearTimeout(this.Pl[b]);
        }
        this.Pl = [];
      };
      return f;
    }();
    var Wa = function () {
      function b() {
        this.Ck = function () {};
      }
      b.prototype.Bk = function () {};
      b.prototype.ji = function () {};
      return b;
    }();
    var Xa = function () {
      var b = A(Wa, function (b) {
        Wa.call(this);
        var c = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + c + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + b + "</div>    <div class=\"toaster-coins-close\">" + u("index.game.toaster.continue") + "</div></div>");
        var e = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          d().r.Cd();
          e.Ck();
        });
      });
      b.prototype.Bk = function () {
        return this.Sl;
      };
      b.prototype.ji = function () {
        d().r.Fd();
      };
      return b;
    }();
    var Ya = function () {
      var b = A(Wa, function (b) {
        Wa.call(this);
        var c = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + c + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + b + "</div>    <div class=\"toaster-levelup-text\">" + u("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + u("index.game.toaster.continue") + "</div></div>");
        var e = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          d().r.Cd();
          e.Ck();
        });
      });
      b.prototype.Bk = function () {
        return this.Sl;
      };
      b.prototype.ji = function () {
        d().r.Ed();
      };
      return b;
    }();
    var Za = function () {
      var b = A(Wa, function () {
        Wa.call(this);
        var b = this;
        var c = d();
        var e = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + e + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + R + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + u("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + u("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + u("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          c.r.Cd();
          if (c.Y()) {
            c.$(true, true);
          }
          b.Ck();
        });
      });
      b.prototype.Bk = function () {
        return this.Sl;
      };
      b.prototype.ji = function () {
        var b = this;
        var c = d();
        if (c.Y() && !c.Z()) {
          c.r.Hd();
          setTimeout(function () {
            b.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            b.Ck();
          }, 0);
        }
      };
      return b;
    }();
    var $a = {};
    $a.main = {
      Ma: O("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
      K: O("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
      ra: N(),
      e: 4,
      oa: false,
      qk: true
    };
    $a.miniclip = {
      Ma: O("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
      K: O("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
      ra: N(),
      e: 4,
      oa: false,
      qk: false
    };
    var _a = $a[window.ENV];
    _a ||= $a.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (b) {
      b.preventDefault();
      b.stopPropagation();
      return false;
    });
    z("//connect.facebook.net/" + X + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: atob("ODYxOTI2ODUwNjE5MDUx"),
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    z("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        t = gapi.auth2.init({
          client_id: atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
        });
      });
    });
    Z = P();
    Z.v();
    if (j()) {
      z("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
        ab();
      });
    }
    ;
    let ab = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-in'>-</div><div id='zoom-out'>+</div></div>");
    };
    window.keyMove = 81;
    window.addEventListener("keydown", function (b) {
      console.log("event.keyCode " + b.keyCode);
      b = b.which || b.keyCode || 0;
      if (b !== 113 && window.keyMove !== b || !f || e) {
        clearInterval(e);
        e = null;
      } else {
        let c = h.eventoPrincipal.sk = 0;
        b = window.tuNewScore;
        e = setInterval(function () {
          let b = parseFloat(h.eventoPrincipal.sk);
          h.eventoPrincipal.sk = (b >= Math.PI ? -b : b) + (c === 0 ? 0 : Math.PI / 4);
          c++;
        }, 500 + (b >= 100000 ? 5 : b >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(i));
    }, false);
    let bb = [{
      nombre: "chuot 1",
      url: "https://i.imgur.com/SjFtyqp.png"
    }, {
      nombre: "chuot 2",
      url: "https://i.imgur.com/4QC2Exd.png"
    }, {
      nombre: "chuot 3",
      url: "https://i.imgur.com/PfdBkc2.png"
    }, {
      nombre: "chuot 4",
      url: "https://i.imgur.com/vD4zoMk.png"
    }, {
      nombre: "chuot 5",
      url: "https://i.imgur.com/n4N79UI.png"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let cb = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/qAO9LgC.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
    i.loading = true;
    var db = "";
    db += "</div>";
    db += "</div>";
    db += "</div>";
    db += "<div id=\"wormcerca\">";
    db += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    db += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    db += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    db += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    db += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    db += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    db += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    db += "</div>";
    db += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    db += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n         <div id=\"zoom-out\">-</div>\n         <div id=\"zoom-in\">+</div>\n         </div>\n        <div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span></div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(db);
    function eb(b) {
      if (i.PropertyManager) {
        b.skinId = i.PropertyManager.rh;
        b.eyesId = i.PropertyManager.sh;
        b.mouthId = i.PropertyManager.th;
        b.glassesId = i.PropertyManager.uh;
        b.hatId = i.PropertyManager.vh;
      }
    }
    function fb() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\">It will be fluent, my son.</a></div>");
      $("#mm-store").after("<div id=\"mm-store\" style=\"float: right;position: relative;background: #fff0;width:30px;\">\n            <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            \n        <button onclick=\"openPopup()\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 45px;\"></i></button>\n        <div id=\"popup\" class=\"popup\">\n        <div class=\"phdr1\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 25px;\"></i> Wormate Friends Settings</div>\n        <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n        \n                    <div id=\"kich-hoat\">\n                \n           ID : <input type=\"text\" value=\"" + i.FB_UserID + "\" class=\"you-id\" />\n                \n                <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('" + i.FB_UserID + "').then(()=> alert('You ID " + i.FB_UserID + " copiado! copied!'));\">COPY</button>\n                </div>   \n                \n               \n\n\n<table>\n    <tbody>\n        <tr>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Ability EatingSpeed :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-Abilityzoom-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Modo Streamer :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmode-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total Kill : </span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                    </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 3 Top Score :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodebatop-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodeemoj-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Sounds Headshot :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodeheadshot-switch\"></label>\n                    </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n                \n                \n                <table>\n    <tbody>\n        <tr>\n            <td>\n            <div class=\"spancursor\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:#ff8f00;font-size: 25px;\"></i> Select Cursor</div>\n                    <div class=\"cursor-container\"><div id=\"default-cursor-btn\"><img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\"></div></div>\n            </td>\n            <td>\n            <div class=\"spancursor\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:#ff8f00;font-size: 25px;\"></i> Select Background</div>\n                    <div class=\"background-container\"></div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n                \n                \n               \n                    \n                    \n                    \n                    \n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Keys <a href=\"/\">Q</a> : Automatically turns around in one place. (Quay Đầu Vòng Tròn 1 Chỗ)</div>\n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Keys <a href=\"/\">R </a> : Quick Revive (Hồi Sinh Nhanh)</div>\n                    \n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Note : This setting is only for activated members . Thank you !</div>\n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Lưu Ý : Phần cài đặt này chỉ dành cho thành viên đã kích hoạt . Xin cảm ơn !</div>\n                    <center><div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated (Kích Hoạt)</a></div></center>\n\n           \n        </div>");
      $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n                 <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n           \n                <div class=\"contain-border\" id=\"contain-border\">\n                <div class=\"label\" id=\"titleSetings\">Notification (Thông Báo)</div>\n                <div class=\"bao-list1\">\n                <div class=\"list1\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:48ff00;\"></i> Zoom activation fee is $1/month .</div>\n                \n                <input type=\"text\" value=\"" + i.FB_UserID + "\" style=\"width: 236px;height: 23px;border-radius: 4px;font-size: 15px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + i.FB_UserID + "').then(()=> alert('You ID " + i.FB_UserID + " copiado! copied!'));\">Copy</button>\n                <center><div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated (Kích Hoạt)</a></div></center>\n                \n             <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #0b2483; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>\n                   \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Hướng dẫn cài đặt trên IOS và iPad New 2024 : <a style=\"color: #0b2483; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>  \n                \n                \n              </div>   \n             </div>\n             </div>\n             ");
      var b = document.getElementById("settingBtn");
      var c = document.getElementById("settingContent");
      b.addEventListener("click", function () {
        if (c.style.display === "none") {
          c.style.display = "block";
        } else {
          c.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        i.PortionSize = $(this).val();
        localStorage.PotenciadorSize = i.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        i.PortionAura = $(this).val();
        localStorage.PotenciadorAura = i.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        i.smoothCamera = $(this).val();
        localStorage.smoothCamera = i.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        i.FoodSize = $(this).val();
        localStorage.ComidaSize = i.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        i.FoodShadow = $(this).val();
        localStorage.ComidaShadow = i.FoodShadow;
      });
      $("#mm-advice-cont").html("<input type=\"button\" style=\"float: left;height: 35.5px;color: #001fff;font-size:18px;border:solid 1px #2196f300;font-weight:600;background-image: linear-gradient(to bottom,#f50505a1,#f9f2f2);width: 49%;font-family: vuonghiep;\" class=\"fullscreen_button\" value=\"FULLSCREEN\"/><div class=\"nhac\"><a href=\"https://thanhtoan.vuonghiep.com\">Contact (Liên Hệ)</div>");
      $(".mm-merchant-cont").append;
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#mm-store").after("\n            <div id=\"mm-store\" style=\"float: right;position: relative;background-image: linear-gradient(#f1f71d, rgb(239 53 15));width:40px; margin-right: 25px; \" onclick=\"navigator.clipboard.writeText('" + i.FB_UserID + "').then(()=> alert('You ID " + i.FB_UserID + " copiado! copied!'));\"> Your Id</div>");
      $(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith("\n            \n            <div class=\"contain-border\" id=\"contain-border\">\n            \n                   <div style=\";padding: 0px;margin: 0;height:338px\" class=\"description-text\">\n                    <div id=\"title\">Wormate Friends Connect</div>\n                    <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a>\n                        <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag mx\"  value=\"https://i.imgur.com/YSLUmBO.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag ca\" value=\"https://i.imgur.com/c90q4Qs.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span>\n                        </a>\n                    </li>\n                    \n                    </ul>\n                    <div class=\"bao-list2\">\n                    <div class=\"gachngang\"></div>\n                    \n                    <div class=\"servers-container\">\n                    <div class=\"servers-peru\"></div>\n                    <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                    <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                    <div class=\"servers-canada\" style=\"display: none;\"></div>\n                    <div class=\"servers-germania\" style=\"display: none;\"></div>\n                    <div class=\"servers-francia\" style=\"display: none;\"></div>\n                    <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                    <div class=\"servers-japon\" style=\"display: none;\"></div>\n                    <div class=\"servers-australia\" style=\"display: none;\"></div>\n                    <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    \n                    \n                    </div></div>\n                    </div>\n                   \n                    \n                    ");
      $(".ui-tab").on("click", w);
      $(".flag").click(function () {
        let b = $(this).attr("value");
        i.flag = b;
        r.containerImgS.texture = r.onclickServer;
        retundFlagError();
        console.log(b);
      });
      for (a = 0; a < n.Api_listServer.length; a++) {
        var d = n.Api_listServer[a].serverUrl;
        var e = n.Api_listServer[a].name;
        var f = n.Api_listServer[a].region;
        let b = document.createElement("p");
        b.value = d;
        b.innerHTML = e;
        if (f == "peru") {
          $(".servers-peru").prepend(b);
        } else if (f == "mexico") {
          $(".servers-mexico").prepend(b);
        } else if (f == "eeuu") {
          $(".servers-eeuu").prepend(b);
        } else if (f == "canada") {
          $(".servers-canada").prepend(b);
        } else if (f == "germania") {
          $(".servers-germania").prepend(b);
        } else if (f == "francia") {
          $(".servers-francia").prepend(b);
        } else if (f == "singapur") {
          $(".servers-singapur").prepend(b);
        } else if (f == "japon") {
          $(".servers-japon").prepend(b);
        } else if (f == "australia") {
          $(".servers-australia").prepend(b);
        } else if (f == "granbretana") {
          $(".servers-granbretana").prepend(b);
        }
        $(b).attr("id", f);
        $(b).attr("class", "selectSala");
        $(b).attr("value", e);
        $(b).click(function () {
          r.setServer($(this).text());
          let b = $(this).val();
          r.containerImgS.texture = r.onclickServer;
          retundFlagError();
          window.server_url = b;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function gb() {
      $("#getskin").on("click", function () {
        for (var b = 0; b < m.clientesActivos.length; b++) {
          var c = m.clientesActivos[b].cliente_NOMBRE;
          var d = m.clientesActivos[b].cliente_ID;
          var e = m.clientesActivos[b].Client_VisibleSkin;
          var f = m.clientesActivos[b].Client_VisibleSkin1;
          var g = m.clientesActivos[b].Client_VisibleSkin2;
          var h = m.clientesActivos[b].Client_VisibleSkin3;
          var j = m.clientesActivos[b].Client_VisibleSkin4;
          var k = m.clientesActivos[b].Client_VisibleSkin5;
          var l = m.clientesActivos[b].Client_VisibleSkin6;
          var n = m.clientesActivos[b].Client_VisibleSkin7;
          var o = m.clientesActivos[b].Client_VisibleSkin8;
          var p = m.clientesActivos[b].Client_VisibleSkin9;
          var q = m.clientesActivos[b].Client_VisibleSkin10;
          var r = m.clientesActivos[b].Client_VisibleSkin11;
          var s = m.clientesActivos[b].Client_VisibleSkin12;
          var t = m.clientesActivos[b].Client_VisibleSkin13;
          var u = m.clientesActivos[b].Client_VisibleSkin14;
          var v = m.clientesActivos[b].Client_VisibleSkin15;
          var w = m.clientesActivos[b].Client_VisibleSkin16;
          var x = m.clientesActivos[b].Client_VisibleSkin17;
          var y = m.clientesActivos[b].Client_VisibleSkin18;
          var z = m.clientesActivos[b].Client_VisibleSkin19;
          var A = m.clientesActivos[b].Client_VisibleSkin20;
          var B = m.clientesActivos[b].Client_KeyAccecs;
          if (i.FB_UserID == 0) {} else if (i.FB_UserID == d) {
            if (B == "XTPRIVATESKIN") {
              for (let b = 0; b < i.idSkin.length; b++) {
                const c = i.idSkin[b];
                if (c.id == e || c.id == f || c.id == g || c.id == h || c.id == j || c.id == k || c.id == l || c.id == n || c.id == o || c.id == p || c.id == q || c.id == r || c.id == s || c.id == t || c.id == u || c.id == v || c.id == w || c.id == x || c.id == y || c.id == z || c.id == A) {
                  c.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function hb() {
      i.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n              \n              <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n              <div class=\"contain-border\" id=\"contain-border\">\n              <div class=\"label\" id=\"titleSetings\">Notification (Thông Báo)</div>\n                <div class=\"bao-list1\">\n                \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Update : 21/03/2024</div>\n                   \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>\n                   \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Hướng dẫn cài đặt trên IOS và iPad New 2024 : <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>\n                   </div>\n                   \n                   </div>\n                   ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
      function b() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        d();
      }
      function c() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          d();
        }
      }
      function d() {
        var b = Math.round(window.multiplier / 0.625 * 100);
        b = Math.min(100, b);
        var c = document.getElementById("zoom-percentage");
        c.textContent = b + "%";
      }
      document.getElementById("zoom-in").addEventListener("touchstart", b);
      document.getElementById("zoom-out").addEventListener("touchstart", c);
      window.onwheel = d => {
        d.preventDefault();
        if (d.deltaY < 0) {
          b();
        } else {
          c();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          i.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var b = localStorage.getItem("mySwitch");
        if (b === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          i.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          i.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          i.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var b = localStorage.getItem("ModeStremer");
        if (b === "true") {
          i.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          i.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          i.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var b = localStorage.getItem("ModeStremerbatop");
        if (b === "true") {
          i.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          i.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          i.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var b = localStorage.getItem("ModeStremeremoj");
        if (b === "true") {
          i.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          i.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          i.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var b = localStorage.getItem("ModeStremerheadshot");
        if (b === "true") {
          i.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          i.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          i.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var b = localStorage.getItem("ModeStremerheadshot");
        if (b === "true") {
          i.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          i.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          i.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var b = localStorage.getItem("ModeStremersaveheadshot");
        if (b === "true") {
          i.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          i.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          i.arrow = false;
        } else {
          console.log("I'm not checked");
          i.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        i.PortionSize = $(this).val();
        localStorage.PotenciadorSize = i.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        i.PortionAura = $(this).val();
        localStorage.PotenciadorAura = i.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        i.smoothCamera = $(this).val();
        localStorage.smoothCamera = i.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        i.FoodSize = $(this).val();
        localStorage.ComidaSize = i.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        i.FoodShadow = $(this).val();
        localStorage.ComidaShadow = i.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (b) {
        if (isValidHotkey(b)) {
          var c = $(this);
          var d = getPresedKey(b);
          var e = b.keyCode;
          c.val(d);
          c.blur();
          window.keyMove = e;
          window.localStorage.setItem(c.attr("id"), e);
        } else {
          b.preventDefault();
        }
      });
      for (a = 0; a < bb.length; a++) {
        var e = bb[a].url;
        var f = bb[a].nombre;
        let b = document.createElement("img");
        b.src = e;
        $(".cursor-container").prepend(b);
        $(b).attr("class", "cursor");
        $(b).click(function () {
          let b = $(this).attr("src");
          localStorage.cursorSeleccionado = b;
          $("#game-cont").css({
            cursor: "url(" + b + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + b + "), default"
          });
          $("body").css({
            cursor: "url(" + b + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < cb.length; a++) {
        var g = cb[a].url;
        var h = cb[a].nombre;
        let b = document.createElement("img");
        b.src = g;
        $(".background-container").prepend(b);
        $(b).attr("class", "background");
        $(b).attr("value", h);
        $(b).click(function () {
          let b = $(this).attr("src");
          let c = $(this).attr("value");
          backgroundIMG = b;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + c);
          Z.q.Cf = new _._b(Z.q.fn_o(b));
        });
      }
      $(".background-container").prepend("");
      Z.q.Cf = new _._b(Z.q.fn_o(localStorage.fondoSeleccionado));
    }
    function ib() {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + i.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + i.FB_UserID + "').then(()=> alert('You ID " + i.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function jb(b, c) {
      let d = function (b, c, d, e) {
        r.setCountGame(b, c, d, e);
      };
      if (b === "count") {
        i.kill = (i.kill || 0) + (c ? 0 : 1);
        i.headshot = (i.headshot || 0) + (c ? 1 : 0);
        i.totalKills = i.totalKills + (c ? 0 : 1);
        i.totalHeadshots = i.totalHeadshots + (c ? 1 : 0);
        d(i.kill, i.headshot, i.totalKills, i.totalHeadshots);
      }
      if (b === "open") {
        i.kill = 0;
        i.headshot = 0;
        $("#contadorKill_12").show();
        d(i.kill, i.headshot, i.totalKills, i.totalHeadshots);
      }
      if (b === "closed") {
        g = {};
      }
      if (b === "cerrar") {
        i.kill = 0;
        i.headshot = 0;
        i.totalKills = 0;
        i.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var b = ["fuck you", "địt", "cái lồn", "chó", "đéo", "lồn", "đéo", "địt", "vãi lồn", "cặc"];
      $("#mm-action-play").on("click", function () {
        var c = $("#mm-params-nickname").val();
        var d = b.some(function (b) {
          return c.toLowerCase().includes(b.toLowerCase());
        });
        if (d) {
          $("#mm-params-nickname").val("Văn Minh Lên Bạn");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("iframe").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var kb = function b() {
      requestAnimationFrame(b);
      d().Pa();
    };
    kb();
    function lb() {
      var b = mb.width();
      var c = mb.height();
      var e = nb.outerWidth();
      var f = nb.outerHeight();
      var g = ob.outerHeight();
      var h = pb.outerHeight();
      var i = Math.min(1, Math.min((c - h - g) / f, b / e));
      var j = "translate(-50%, -50%) scale(" + i + ")";
      nb.css({
        "-webkit-transform": j,
        "-moz-transform": j,
        "-ms-transform": j,
        "-o-transform": j,
        transform: j
      });
      d().Ra();
      window.scrollTo(0, 1);
    }
    var mb = $("body");
    var nb = $("#stretch-box");
    var ob = $("#markup-header");
    var pb = $("#markup-footer");
    lb();
    $(window).resize(lb);
  })();
  window.anApp.p.Bc = function () {
    var b = window.anApp.p;
    var c = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (d) {
      c = d;
      fetch("https://platen-007.github.io/007/api/skin_007.php").then(b => b.json()).then(c => {
        i.visibleSkin = c.visibleSkin;
        delete c.visibleSkin;
        for (let b in c) {
          if (b !== "propertyList") {
            if (Array.isArray(c[b])) {
              d[b] = d[b].concat(c[b]);
            } else {
              d[b] = {
                ...d[b],
                ...c[b]
              };
            }
          }
        }
        i.pL = c.propertyList;
        i.idSkin = c.skinArrayDict;
        b.Cc(d);
      }).catch(function (d) {
        console.error(d);
        b.Cc(c);
      });
    });
  };
  $("#background-canvas").replaceWith("\n\n<canvas id=\"background-canvas\"></canvas>\n\n");
  $(".mm-logo").replaceWith("\n    <div class=\"nhap-nhay\">Wormate.io</div>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("\n    \n   \n    \n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language ▴</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Українська</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">Français</a>\n<a hreflang=\"es\" href=\"/es/\">Español</a>\n</div></div>\n            <a class=\"link\" hreflang=\"en\" href=\"/\">Home</a>\n            <a class=\"link\" hreflang=\"en\" href=\"https://VuongHiep.Com\">Wormate Friends Connect © 2024</a>\n            \n            <a style=\"font-size: 17px;font-weight: 600;\">VuongHiep.Com</a>\n            \n            </footer>\n\n\n\n\n\n        ");
});
function u() {
  var b = document.getElementById("popup");
  var c = document.getElementById("overlay");
  b.style.display = "block";
  c.style.display = "block";
}
function v() {
  var b = document.getElementById("popup");
  var c = document.getElementById("overlay");
  b.style.display = "none";
  c.style.display = "none";
}
function w() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (b) {
  var c = "";
  if (b.keyCode == 9) {
    c += "TAB";
  } else if (b.keyCode == 13) {
    c += "ENTER";
  } else if (b.keyCode == 16) {
    c += "SHIFT";
  } else {
    c += String.fromCharCode(b.keyCode);
  }
  return c;
};
getStringKey = function (b) {
  var c = "";
  if (b == 9) {
    c += "TAB";
  } else if (b == 13) {
    c += "ENTER";
  } else if (b == 16) {
    c += "SHIFT";
  } else if (b == 32) {
    c += "SPACE";
  } else if (b == 27) {
    c += "ESC";
  } else {
    c += String.fromCharCode(b);
  }
  return c;
};
isValidHotkey = function (b) {
  if (b.keyCode >= 48 && b.keyCode <= 57 || b.keyCode >= 65 && b.keyCode <= 90 || b.keyCode == 9 || b.keyCode == 13 || b.keyCode == 16 || b.keyCode == 32 || b.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
console.log("Core 2022 THEO Update 2023");