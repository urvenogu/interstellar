const equipment = [
  ["tent", "⛺", "Telk", "Katus pea kohal"],
  ["lighter", "🔥", "Tulemasin", "Väike leek, suur abi"],
  ["wifi", "📡", "Wi-Fi ruuter", "Kus internet on, seal kodu"],
  ["solar", "🔋", "Päikesepaneel", "Elekter igale poole"],
  ["compass", "🧭", "Kompass", "Kas põhjas on üldse põhi?"],
  ["bananas", "🍌", "Banaanid", "Kollane valuuta"],
  ["food", "🥫", "Konservid", "Säilib igavesti"],
  ["cocoa", "☕", "Kuum kakao", "Hing soojaks"],
  ["water", "💧", "Veefilter", "Joogivesi igast loigust"],
];

// Mänguline kosmoseseiklus: varustuse mõju sõltub sihtkohast.
const destinations = {
  Saturn: {
    scene: "Saabud Saturni rõngaste juurde hõljuvasse puhkelaagrisse.",
    essential: ["tent", "solar", "food"],
    effects: {
      tent: "Telk saab rõngastevahelises laagris sinu hubaseks pesaks.",
      lighter: "Tulemasin aitab laagriköögis einet soojendada.",
      wifi: "Ruuter ühendab laagri seadmed, kuid Maale internetti ei ulatu.",
      solar: "Päikesepaneel laeb aeglaselt laagri akusid.",
      compass: "Kompassi asemel tuleb rõngaste vahel usaldada laagri kaarti.",
      bananas: "Banaanidest saab sinu esimene kosmiline rannasnäkk.",
      food: "Konservid hoiavad kõhu täis ka pika rõngaretke ajal.",
      cocoa: "Kakao muudab vaate rõngastele eriti mõnusaks.",
      water: "Veefilter aitab laagri sulatatud jäävett puhastada.",
    },
  },
  Neptuun: {
    scene: "Sinu mänguline uurimisjaam hõljub Neptuuni jäiste tormide kohal.",
    essential: ["tent", "food", "cocoa"],
    effects: {
      tent: "Telk loob jaama sees sooja ja tuulevaikse puhkekoha.",
      lighter: "Tulemasinast on abi vaid jaama kaitstud köögis.",
      wifi: "Ruuter jagab jaama kohalikku võrku, mitte ühendust Maaga.",
      solar: "Kauge Päike annab paneelile vähe energiat: säästad akut.",
      compass: "Tormides aitab jaama navigatsioon rohkem kui kompass.",
      bananas: "Banaanid annavad kiire energia, enne kui need külmuvad.",
      food: "Konservidest jätkub jõudu tormide uurimiseks.",
      cocoa: "Kuum kakao on jäise uurimisretke parim soojendaja.",
      water: "Veefilter vajab jaama veepaaki; pilvedest joogivett ei saa.",
    },
  },
  Marss: {
    scene: "Maandud Marsi punaste luidete kõrval asuvasse mängulaagrisse.",
    essential: ["solar", "food", "water"],
    effects: {
      tent: "Telk kaitseb laagri sees varustust punase tolmu eest.",
      lighter: "Tulemasin töötab vaid laagri hapnikuga köögis.",
      wifi: "Ruuter loob laagri kohaliku võrgu, kuid interneti pead ise kaasa mõtlema.",
      solar: "Päikesepaneel annab päeval energiat, kui pühid sellelt tolmu.",
      compass: "Tavaline kompass ei asenda Marsil kaarti ja navigatsiooni.",
      bananas: "Banaanidest saab magus vahepala luidete vahel.",
      food: "Konservid annavad pika avastusretke jaoks kindla toiduvaru.",
      cocoa: "Kakao teeb jaheda Marsi õhtu hubaseks.",
      water: "Veefilter puhastab laagri sulatatud jäävett.",
    },
  },
  Uraan: {
    scene: "Sätid end sisse Uraani külma atmosfääri kohal hõljuvas mängujaamas.",
    essential: ["tent", "food", "cocoa"],
    effects: {
      tent: "Telk muudab jaama magamisnurga soojemaks.",
      lighter: "Tulemasin aitab ainult jaama kaitstud köögis.",
      wifi: "Ruuter ühendab jaama seadmed; Maa jääb võrgu levialast välja.",
      solar: "Päikesepaneel annab kaugel Päikesest napilt voolu.",
      compass:
        "Viltuse magnetvälja juures ei saa kompassile retke planeerimist usaldada.",
      bananas: "Banaanid rõõmustavad meeskonda ja annavad energiat.",
      food: "Konservid tagavad pika jaamapäeva söögipausid.",
      cocoa: "Kuum kakao aitab külma vaate juures tuju soojas hoida.",
      water: "Veefilter tuleb kasuks jaama veeringluses.",
    },
  },
};

function createOutcome(destination, selected) {
  const trip = destinations[destination];
  if (
    !trip ||
    selected.length !== 5 ||
    new Set(selected).size !== 5 ||
    selected.some((id) => !equipment.some((item) => item[0] === id))
  ) {
    throw new Error("Vali planeet ja täpselt viis erinevat eset.");
  }
  if (selected.includes("bananas")) {
    return {
      title: "Satud Ahvide planeedile",
      summary: [
        "Valisid kohvrisse banaanid. Reisiplaan nägi ette hoopis teist planeeti, aga tulnukahvidel on kosmose parim banaaniradar. Niipea kui su laev Maalt lahkub, hakkab nende juhtimiskeskuses vilkuma suur kollane tuli.",
        "Poolel teel piiravad ahvide laevad sind sisse. Nad kaaperdavad su kosmoselaeva ja viivad selle koos sinu ning kogu pagasiga Ahvide planeedile. Seal võtavad nad banaanid endale. Sulle ulatatakse tööpõll ja teatatakse, et oled nende uus ori.",
        "Alguses arvad, et tegu on eksitusega. Siis näed oma tööülesannete nimekirja: banaanide koorimine, banaanikoorte koristamine ja banaanide valvamine, et keegi teine neid ära ei sööks. Nimekirja lõpus seisab: „Töölepingu lõpp: mitte kunagi.”",
      ].join("\n\n"),
      effects: [],
      image: "assets/ahvideplaneet.png",
      verdict:
        "Unusta planeet, kuhu minna tahtsid. Jääd igaveseks Ahvide planeedile orjaks — ja sulle ei anta isegi ühtki banaani.",
    };
  }
  if (destination === "Saturn" && selected.includes("lighter")) {
    return {
      title: "Saturn",
      summary: [
        "Saturnile jõudes avastad väikese probleemi: seal on pime. Päike paistab kaugelt nagu keegi oleks taskulambi teise toa nurka unustanud. Sul on küll kaasas kõrgtehnoloogiline kosmosevarustus, aga selle kasutusjuhend jäi Maale. Õnneks leiad taskust välgumihkli.",
        "Enne leegi süütamist jõuad veel imetleda planeedi rõngaid ja mõelda, et sellest tuleks suurepärane puhkusefoto. Siis käib klõps.",
        "Järgneb välgatus, mille kõrval Päike näeb korraks välja nagu öölamp. Saturn koosneb peamiselt vesinikust ja heeliumist ning välgumihkli süütamisel on sinu loos väga lühike, aga väga põhjalik tagajärg. Rõngad, planeet, puhkusefoto ja sina kaote üheskoos vaateväljast.",
      ].join("\n\n"),
      effects: [],
      verdict: "Palju õnne! Päikesesüsteemis on nüüd üks planeet ja üks idioot vähem.",
    };
  }
  const missing = trip.essential.filter((id) => !selected.includes(id));
  const names = (ids) =>
    ids.map((id) => equipment.find((item) => item[0] === id)[2]).join(", ");
  return {
    title: `Sinu reis: ${destination}`,
    summary: trip.scene,
    effects: selected.map((id) => ({ name: names([id]), text: trip.effects[id] })),
    verdict:
      missing.length === 0
        ? "Hästi pakitud! Kõik selle seikluse põhiesemed on kaasas. Sinu laager on avastusretkeks valmis."
        : `Seiklus algab väikese väljakutsega! Selle sihtkoha jaoks jäid maha: ${names(missing)}. Laenad puuduva varustuse jaamast ning kohandad oma retkeplaane.`,
  };
}

if (typeof module !== "undefined")
  module.exports = { createOutcome, equipment, destinations };

if (typeof document !== "undefined") {
  let destination = null;
  const items = document.querySelector("#items");
  const result = document.querySelector("#result");
  const resultButton = document.querySelector("#show-result");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let cancelScroll = () => {};
  function moveTo(id, leisurely = false) {
    cancelScroll();
    const heading = document.querySelector(id);
    if (leisurely && !reducedMotion.matches) {
      const start = window.scrollY;
      const end = Math.max(
        0,
        Math.min(
          start + heading.getBoundingClientRect().top - 32,
          document.documentElement.scrollHeight - window.innerHeight,
        ),
      );
      let frame;
      let started;
      const stop = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("wheel", stop);
        window.removeEventListener("touchstart", stop);
        window.removeEventListener("keydown", stop);
      };
      cancelScroll = stop;
      window.addEventListener("wheel", stop, { passive: true });
      window.addEventListener("touchstart", stop, { passive: true });
      window.addEventListener("keydown", stop);
      function animate(time) {
        if (started === undefined) started = time + 350;
        const progress = Math.max(0, Math.min(1, (time - started) / 1800));
        const eased =
          progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
        window.scrollTo({ top: start + (end - start) * eased, behavior: "instant" });
        if (progress < 1) frame = requestAnimationFrame(animate);
        else {
          stop();
          heading.focus({ preventScroll: true });
        }
      }
      frame = requestAnimationFrame(animate);
      return;
    }
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({
      behavior: reducedMotion.matches ? "instant" : "smooth",
      block: "start",
    });
  }
  equipment.forEach(([id, emoji, title, description]) => {
    const label = document.createElement("label");
    label.className = "item";
    label.innerHTML = `<input type="checkbox" name="equipment" value="${id}"><span class="check" aria-hidden="true"><img src="assets/checkmark.png" alt=""></span><span class="emoji" aria-hidden="true">${emoji}</span><span class="item-text"><strong>${title}</strong><small>${description}</small></span>`;
    items.append(label);
  });
  const inputs = [...items.querySelectorAll("input")];
  const selectedItems = () =>
    inputs.filter((input) => input.checked).map((input) => input.value);
  function updatePacking() {
    const count = selectedItems().length;
    document.querySelector("#count").textContent = `${count}/5`;
    inputs.forEach((input) => {
      input.disabled = !destination || (count >= 5 && !input.checked);
    });
    document
      .querySelectorAll(".slots i")
      .forEach((slot, index) => slot.classList.toggle("empty", index >= count));
    document.querySelector("#packing-status").textContent = !destination
      ? "Vali kõigepealt planeet."
      : count === 5
        ? "Seljakott on valmis! Vaata oma reisi tulemust."
        : `Vali veel ${5 - count} eset.`;
    resultButton.disabled = !destination || count !== 5;
    result.hidden = true;
  }
  items.addEventListener("change", updatePacking);
  document.querySelectorAll(".planet").forEach((planet) => {
    // Igal planeedil on oma juhuslik amplituud, kestus ja algusfaas.
    planet.style.setProperty("--float-duration", `${7 + Math.random() * 5}s`);
    planet.style.setProperty("--float-delay", `${-Math.random() * 12}s`);
    planet.style.setProperty("--float-x", `${5 + Math.random() * 7}px`);
    planet.style.setProperty("--float-y", `${7 + Math.random() * 8}px`);
    planet.style.setProperty("--float-tilt", `${1 + Math.random() * 1.5}deg`);
    planet.addEventListener("keydown", (event) => {
      if (event.key === "Escape") planet.classList.add("info-dismissed");
    });
    planet.addEventListener("pointerleave", () =>
      planet.classList.remove("info-dismissed"),
    );
    planet.addEventListener("blur", () => planet.classList.remove("info-dismissed"));
  });
  document.querySelectorAll(".planet").forEach((button) =>
    button.addEventListener("click", () => {
      destination = button.getAttribute("aria-label");
      document.querySelector(".planets").classList.add("has-selection");
      document
        .querySelectorAll(".planet")
        .forEach((planet) =>
          planet.setAttribute("aria-pressed", String(planet === button)),
        );
      document.querySelector("#destination-status").textContent =
        `Valitud sihtkoht: ${destination}.`;
      document.querySelector("#selected-destination").textContent =
        `Sihtkoht: ${destination}. Vali reisile täpselt viis eset.`;
      updatePacking();
      moveTo("#packing-title", true);
    }),
  );
  resultButton.addEventListener("click", () => {
    if (resultButton.disabled) return;
    const outcome = createOutcome(destination, selectedItems());
    document.querySelector("#result-title").textContent = outcome.title;
    document.querySelector("#result-summary").textContent = outcome.summary;
    const verdict = document.querySelector("#result-verdict");
    verdict.replaceChildren();
    if (outcome.image) {
      const caption = document.createElement("strong");
      caption.textContent = "Reisi tulemus: ";
      verdict.append(caption);
    }
    verdict.append(outcome.verdict);
    const illustration = document.querySelector("#result-image");
    illustration.hidden = !outcome.image;
    if (outcome.image) illustration.src = outcome.image;
    else illustration.removeAttribute("src");
    document.querySelector("#result-effects-heading").hidden = !outcome.effects.length;
    const effects = document.querySelector("#result-effects");
    effects.hidden = !outcome.effects.length;
    effects.replaceChildren();
    outcome.effects.forEach((effect) => {
      const li = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = `${effect.name}: `;
      li.append(name, effect.text);
      effects.append(li);
    });
    result.hidden = false;
    moveTo("#result-title");
  });
  document.querySelector("#restart").addEventListener("click", () => {
    cancelScroll();
    destination = null;
    inputs.forEach((input) => {
      input.checked = false;
    });
    document.querySelector(".planets").classList.remove("has-selection");
    const planets = [...document.querySelectorAll(".planet")];
    planets.forEach((planet) => planet.setAttribute("aria-pressed", "false"));
    document.querySelector("#destination-status").textContent = "";
    document.querySelector("#selected-destination").textContent =
      "Alustuseks vali ülevalt planeet.";
    updatePacking();
    planets[0].focus({ preventScroll: true });
    document
      .querySelector(".destinations")
      .scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth" });
  });
  updatePacking();
}
