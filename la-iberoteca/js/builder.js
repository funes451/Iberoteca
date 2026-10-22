(function () {
  "use strict";

  var CONFIG = {
    phone: "+34931010471",
    whatsapp: ""
  };

  var ORDER = ["bunbottom", "patty", "patty2", "cheese", "bacon", "egg", "onion", "tomato", "lettuce", "sauce", "buntop"];

  var STEP = {
    bunbottom: 30,
    patty: 26,
    patty2: 26,
    cheese: 14,
    bacon: 14,
    egg: 18,
    onion: 12,
    tomato: 14,
    lettuce: 20,
    sauce: 8,
    buntop: 0
  };

  var LOCKED = { bunbottom: true, patty: true, buntop: true };

  var CONTROL_LAYER = {
    doble: "patty2",
    cheddar: "cheese",
    bacon: "bacon",
    huevo: "egg",
    cebolla: "onion",
    tomate: "tomato",
    lechuga: "lettuce",
    salsa: "sauce"
  };

  var CONTROL_LABEL = {
    doble: "b.doble",
    cheddar: "b.cheddar",
    bacon: "b.bacon",
    huevo: "b.huevo",
    cebolla: "b.cebolla",
    tomate: "b.tomate",
    lechuga: "b.lechuga",
    salsa: "b.salsa"
  };

  var DEFAULT_ON = ["cheddar", "bacon"];

  function qs(sel, scope) {
    return (scope || document).querySelector(sel);
  }

  function qsa(sel, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(sel));
  }

  function tr(key) {
    if (window.I18N && typeof window.I18N.translate === "function") {
      return window.I18N.translate(window.I18N.current(), key);
    }
    return key;
  }

  function buildReserveHref(message) {
    if (CONFIG.whatsapp) {
      return "https://wa.me/" + CONFIG.whatsapp.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent(message);
    }
    return "tel:" + CONFIG.phone;
  }

  function Builder(root) {
    this.root = root;
    this.layers = {};
    this.active = {};
    this.controls = qsa("[data-ing]", root);
    this.tierName = qs("[data-tier-name]", root);
    this.recipe = qs("[data-recipe]", root);
    this.count = qs("[data-count]", root);
    this.cta = qs("[data-reserve]", root);
    this.reset = qs("[data-reset]", root);
    this.init();
  }

  Builder.prototype.init = function () {
    var self = this;
    ORDER.forEach(function (key) {
      self.layers[key] = qs('[data-layer="' + key + '"]', self.root);
      self.active[key] = !!LOCKED[key];
    });
    DEFAULT_ON.forEach(function (ctrl) {
      self.active[CONTROL_LAYER[ctrl]] = true;
    });
    this.controls.forEach(function (btn) {
      var ctrl = btn.getAttribute("data-ing");
      var on = self.active[CONTROL_LAYER[ctrl]];
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.addEventListener("click", function () {
        self.toggle(ctrl, btn);
      });
    });
    if (this.reset) {
      this.reset.addEventListener("click", function () {
        self.resetAll();
      });
    }
    window.addEventListener("languagechange", function () {
      self.renderSummary();
    });
    this.render();
  };

  Builder.prototype.toggle = function (ctrl, btn) {
    var layerKey = CONTROL_LAYER[ctrl];
    var next = !this.active[layerKey];
    this.active[layerKey] = next;
    btn.setAttribute("aria-pressed", next ? "true" : "false");
    this.render();
  };

  Builder.prototype.resetAll = function () {
    var self = this;
    ORDER.forEach(function (key) {
      self.active[key] = !!LOCKED[key];
    });
    DEFAULT_ON.forEach(function (ctrl) {
      self.active[CONTROL_LAYER[ctrl]] = true;
    });
    this.controls.forEach(function (btn) {
      var on = self.active[CONTROL_LAYER[btn.getAttribute("data-ing")]];
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    this.render();
  };

  Builder.prototype.render = function () {
    var offset = 0;
    var self = this;
    ORDER.forEach(function (key) {
      var el = self.layers[key];
      if (!el) {
        return;
      }
      var on = self.active[key];
      if (on) {
        el.classList.remove("is-off");
        el.style.setProperty("--y", "-" + offset + "px");
        offset += STEP[key];
      } else {
        el.classList.add("is-off");
      }
    });
    this.renderSummary();
  };

  Builder.prototype.chosenControls = function () {
    var self = this;
    return Object.keys(CONTROL_LAYER).filter(function (ctrl) {
      return self.active[CONTROL_LAYER[ctrl]];
    });
  };

  Builder.prototype.renderSummary = function () {
    var chosen = this.chosenControls();
    var parts = [tr("b.pan"), tr("b.carne")];
    chosen.forEach(function (ctrl) {
      if (ctrl !== "doble") {
        parts.push(tr(CONTROL_LABEL[ctrl]));
      }
    });
    if (this.active.patty2) {
      parts.splice(2, 0, tr("b.doble"));
    }
    var total = chosen.length;
    var tierKey = total <= 1 ? "builder.tier1" : (total <= 3 ? "builder.tier2" : "builder.tier3");
    if (this.tierName) {
      this.tierName.textContent = tr(tierKey);
    }
    if (this.recipe) {
      this.recipe.textContent = parts.join(" · ");
    }
    if (this.count) {
      this.count.textContent = (total + 2) + " " + tr("builder.count");
    }
    if (this.cta) {
      var msg = tr("builder.msg") + ": " + parts.join(", ");
      this.cta.setAttribute("href", buildReserveHref(msg));
    }
  };

  function boot() {
    var root = qs("[data-builder]");
    if (root) {
      new Builder(root);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
