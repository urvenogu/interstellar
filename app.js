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

const destinations = ["Saturn", "Neptuun", "Marss", "Uraan"];

const customPlanetStories = {
  Marss: {
    title: "Marss",
    paragraphs: [
      "Marsile jõudes avastad, et reisibrošüüri väljend „soojades toonides maastik” kirjeldas värve, mitte temperatuuri. Kõik on punane, tolmune ja väga fotogeeniline. Astud laevast välja, vaatad üle lõputu kivivälja ja ütled: „Siin oleks päris hea suvila koht.” Reisijuht palub sul enne kinnisvaraplaanide tegemist kiivri korralikult kinni panna.", // MARSS: esimene lõik.
      "Järgmised päevad mööduvad kraatrite vahel ringi sõites. Käid vaatamas nii suurt vulkaani, et selle tipp ei mahu fotole isegi siis, kui mitu sammu tagasi astud. Proovid kohalikku matkarada ja avastad, et väiksema raskusjõuga on hüppamine väga lõbus, aga õigesse kohta maandumine vajab harjutamist. Õhtuks on su saabastes punast tolmu, kuigi sa pole neid kordagi jalast võtnud.",
      "Enne tagasilendu tahad suveniiriks ühe väikese kivi kaasa võtta. Reisijuht vaatab su kohvrit ja küsib, miks see enam kinni ei lähe. Selgub, et sama mõte tuli sul juba hommikul. Seitseteist korda. Jätad kuusteist kivi Marsile ja lubad viimasele, et näitad talle Maal merd.",
      "Maale jõudes on sul kaasas sadu pilte, üks täiesti tavalise välimusega kivi ja uus austus õhu vastu, mida saab tasuta hingata. Lennujaamas küsitakse, kas sul on midagi deklareerida. Vastad: „Natuke tolmu.” Kohvrit avades selgub, et seda on umbes pool Marsi.", // MARSS: järgmine lõik. Vajadusel lisa ridu juurde.
    ],
    verdict:
      "Puhkus läks korda ja jõudsid tervelt koju. Nüüd tuleb ainult välja mõelda, kuidas punane tolm pesumasinast kätte saada.", // MARSS: lõpptulemus, näiteks reisi lõpetav lause.
  },
  Neptuun: {
    title: "Neptuun",
    paragraphs: [
      "Neptuunile lähenedes avastad, et reisibrošüüri väljend „värskendav meresinine puhkus” oli üsna loominguline. Meri puudub, ujuma ei saa ja väljas puhub tuul, mis viiks su rannarätiku tõenäoliselt teise päikesesüsteemi. Õnneks ootab sind pilvede kohal hõljuv hotell. Vastuvõtus küsitakse, kas soovid vaikset tuba. Ütled jah. Teenindaja ulatab sulle kõrvatropid.",
      "Esimesel õhtul lähed panoraamakna juurde päikeseloojangut vaatama. Ootad natuke. Siis veel natuke. Lõpuks küsid reisijuhilt, milline neist pisikestest täppidest üldse Päike on. Ta osutab ühele ja kinnitab, et romantiline õhkkond on hinnas, aga lugemiseks tasub lamp põlema panna.",
      "Järgmised päevad mööduvad tormivaatlustel. Hotelli ümber kihutavad pilved nii kiiresti, et sinu tehtud fotodel näevad need välja nagu sinised triibud. Ühe pildi peal on ka su enda peegeldus, sest unustasid välgu sisse. Suveniiripoest ostad postkaardi kirjaga „Neptuun — tule läbi, kui sinnakanti satud”. Kirjutad koju, et ilm on tuuline, aga hommikusöök väga korralik.",
      "Tagasilennu eel küsitakse sinult tagasisidet. Annad hotellile viis tärni, vaadetele viis ja rannale ühe. Teenindaja selgitab, et randa polnud paketis. Maale jõudes seisad lennujaama ees, tunned näol kerget tuuleiili ja hakkad naerma. Keegi küsib, kas reis läks hästi. Vastad: „Väga. Aga järgmine kord võiks Päike natuke lähemal olla.",
    ],
    verdict:
      "Puhkus läks korda ja jõudsid tervelt koju. Su kohver on alles, kõrvus enam ei vilista ning kodune radiaator pole kunagi nii meeldiv tundunud.",
  },
};

function createOutcome(destination, selected) {
  if (
    !destinations.includes(destination) ||
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
      image: "assets/Ahvideplaneet.webp",
      verdict:
        "Unusta planeet, kuhu minna tahtsid. Jääd igaveseks Ahvide planeedile orjaks — ja sulle ei anta isegi ühtki banaani.",
    };
  }
  if (destination === "Marss" && selected.includes("cocoa")) {
    return {
      title: "Marss — kuuma kakao seiklus",
      summary: [
        "Poolel teel Marsile otsustad, et nüüd on õige hetk kuuma kakao jaoks. Punane planeet paistab juba aknast ja juhtpaneelil vilguvad tuled, mille tähendust sa täpselt ei tea. Kõik tundub siiski kontrolli all olevat. Paned kakaotopsi paneeli servale, otse sildi „VEDELIKKE MITTE ASETADA” peale.",
        "Kui sirutad käe telefoni järele, et saabumisest pilti teha, läheb küünarnukk vastu topsi. Kakao voolab üle nuppude ja kaob väikese praksatuse saatel juhtpaneeli sisse. Ekraanile ilmub korraks kiri „Head reisi!”, siis kustuvad kõik tuled. Üks nupp jääb veel vilkuma, aga selgub, et see on kohvimasina oma.",
        "Vajutad nuppe. Koputad ekraanile. Proovid laeva välja ja uuesti sisse lülitada, kuid ei leia enam kumbagi võimalust. Samal ajal libiseb Marss aeglaselt aknast mööda. Lehvitad talle igaks juhuks, sest maandumist sellest enam ei tule.",
        "Raadiost kostab viimane ragin ja siis vaikus. Maa ei vasta. Mootorid ei käivitu. Laev hõljub universumi sügavuste poole ning ainus töökorras seade teatab rõõmsalt, et sinu järgmine kuum jook on valmis.",
      ].join("\n\n"),
      effects: [],
      verdict:
        "Marsi-puhkus jäi ära. Hõljud universumi sügavuste poole, kontakt Maaga puudub ja tagasiteed sa juhtida ei saa. Vähemalt on kakaod veel alles.",
    };
  }
  if (destination === "Neptuun" && selected.includes("food")) {
    return {
      title: "Neptuun",
      summary: [
        "Neptuuni hotelli jõudes avastad, et oled lõunasöögi maha maganud. Restoran avatakse alles õhtul, aga sul on õnneks konserv kaasas. Otsid selle kohvrist välja ja märkad, et tavapärase oasupi asemel oled kaasa pakkinud surströmmingu. Purgi peal on kala pilt, nii et otsustad anda kohalikule merevaatega puhkusele sobiva alguse.",
        "Purk on kahtlaselt ümmargune. Asetad selle öökapile ja lähed avajat otsima. Selja taga kostab metalliline naksatus. Siis teine. Jõuad veel mõelda, et toa kütet võiks natuke vähemaks keerata, kui konserv plahvatab.",
        "Esimesena saab löögi tapeet. Teisena sinu haistmismeel. Kolmandana hotelli ventilatsioon, mis asub enneolematu usinusega haisu kõikidesse tubadesse laiali kandma. Vastuvõtus süttib punane hoiatustuli, mida keegi pole varem näinud. Kasutusjuhendis seisab selle kohta ainult: „Loodame, et seda ei lähe vaja.”",
        "Külalised tormavad koridori ja leiavad, et seal on veel hullem. Meeskond üritab ventilatsiooni välja lülitada, kuid juhtimisruum asub köögi kõrval, kuhu hais jõudis esimesena. Keegi pakub, et võiks aknad avada. Kõik vaatavad korraks õue, kus möllab Neptuuni torm. Aknad jäävad kinni.",
        "Hotelli viimane automaatne teade tänab külalisi peatumise eest ja palub lahkudes minibaarist võetud joogid registreerida. Vastust ei tule. Sinu konservist alguse saanud hais osutub tapvaks ning peagi pole hotellis enam elus ühtegi külalist ega meeskonnaliiget.",
      ].join("\n\n"),
      effects: [],
      verdict:
        "Sina, kõik teised külalised ja kogu meeskond surete. Hotell jääb Neptuuni kohale tühjalt hõljuma. Sinu toa uksele ilmub broneerimissüsteemis märge: „Vajab tuulutamist.”",
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
  if (destination === "Saturn") {
    return {
      title: "Saturn",
      summary: [
        "Saturnile jõudes avastad, et reisibüroo lubadus „rõngad hinnas” polnudki lihtsalt reklaam. Need laiuvad su akna taga nagu hiiglaslikud helendavad rajad. Teed esimese puhkusefoto. Siis teise, sest esimesel oli su pöial ees.",
        "Järgmised päevad mööduvad Saturni ümber tiireldes. Vaatad rõngaid kord lähedalt, kord kaugelt, ja üritad aru saada, kuidas saab üks planeet nii uhke välja näha ilma selle nimel üldse pingutamata. Suveniiripoes ostad väikese rõngakujulise külmkapimagneti. Müüja kinnitab, et see on ainus asi, mis siit käsipagasisse mahub.",
        "Tagasilennul vaatad aknast, kuidas Saturn järjest väiksemaks jääb. Maale jõudes on su kohver alles, fotod õnnestusid ja keegi pole vahepeal su toataimi unustanud kasta.",
      ].join("\n\n"),
      effects: [],
      verdict: "Palju õnne! Puhkus läks korda, jõudsid ilusti ringreisilt koju.",
    };
  }
  if (destination === "Uraan") {
    const hasSolar = selected.includes("solar");
    return {
      title: "Uraan",
      summary: hasSolar
        ? "Jõuad Uraanile, sa avastad, et siin pole maapinda, kus kõndida, nii et sa lihtsalt hõljud seal keskel. Uraani keskel on suured surved, aga sa oled harjunud surve all olema, sest sa oled haiglas tööd teinud. Surve all aga ei pea vastu sinu päikesepatarei, mis plahvatab ja sa lendad Uraani orbiidile, kust sa välja enam ei saa, nii et sa lihtsalt tiirled Uraani ümber, kuni elupäevade lõpuni."
        : "Jõuad Uraanile, sa avastad, et siin pole maapinda, kus kõndida, nii et sa lihtsalt hõljud seal keskel. Uraani keskel on suured surved, aga sa oled harjunud surve all olema, sest sa oled haiglas tööd teinud. Ilm on tormiline, nii et sa otsustad roomata telki, seal sa saad kenasti hakkama ja ootad, kuni torm läbi saab ja sulle tullakse järele.",
      effects: [],
      verdict: hasSolar ? "Sa oled kinni." : "Sa pääsesid koju",
    };
  }
  const customStory = customPlanetStories[destination];
  const customParagraphs = customStory?.paragraphs.filter((text) => text.trim());
  if (customParagraphs?.length) {
    return {
      title: customStory.title,
      summary: customParagraphs.join("\n\n"),
      effects: [],
      verdict: customStory.verdict,
    };
  }
  throw new Error(`Planeedi ${destination} põhilugu on veel lisamata.`);
}

if (typeof module !== "undefined")
  module.exports = { createOutcome, equipment, destinations };

// Vastuseakna välimus lisatakse JavaScriptist: HTML-i ja CSS-i ei pea muutma.
function setupResultWindow() {
  const result = document.querySelector("#result");
  const title = document.querySelector("#result-title");
  if (!result || !title) return;
  if (!document.querySelector("#result-window-styles")) {
    const styles = document.createElement("style");
    styles.id = "result-window-styles";
    styles.textContent = `
/* Reisi vastuseaken — keskjoondatud, soe ja läbikumav. */
.result {
  width: calc(100% - 48px);
  max-width: 1120px;
  margin: 72px auto 100px;
  padding: clamp(32px, 4.5vw, 64px) clamp(22px, 4vw, 56px);
  border: 2px solid var(--orange);
  border-radius: 30px;
  background: linear-gradient(135deg, #ff7b002e, #b46a6a3b 55%, #ff7b0029);
  box-shadow: inset 0 0 80px #ff7b000a;
  text-align: center;
  color: #fff;
}
.result .result-icon {
  margin-bottom: 26px;
  font-size: clamp(62px, 7vw, 100px);
  line-height: 1.2;
  filter: drop-shadow(0 0 12px #ffb70044);
}
.result h2 {
  margin: 0 0 24px;
  color: #fff;
  font:
    800 clamp(24px, 3.2vw, 46px) / 1.25 "Lexend Exa",
    sans-serif;
  overflow-wrap: anywhere;
  text-wrap: balance;
}
.result .result-subtitle {
  margin: 0 0 44px;
  color: var(--mint);
  font:
    700 clamp(18px, 2vw, 25px) / 1.5 Jura,
    sans-serif;
  text-shadow: 0 0 10px #00ffb766;
}
.result #result-summary,
.result #result-verdict {
  max-width: 960px;
  margin-inline: auto;
  color: #fff;
  font:
    600 clamp(17px, 1.9vw, 26px) / 1.55 Jura,
    sans-serif;
  letter-spacing: 0.025em;
  overflow-wrap: break-word;
}
.result #result-summary {
  white-space: pre-line;
}
.result #result-verdict {
  margin-top: 32px;
}
.result .result-image {
  width: min(100%, 440px);
  margin: 0 auto 32px;
}
.result #restart {
  width: auto;
  max-width: 100%;
  min-height: 60px;
  margin-top: 44px;
  padding: 16px 32px;
  border: 0;
  border-radius: 18px;
  background: var(--orange);
  color: #090f24;
  font:
    800 clamp(16px, 1.7vw, 22px) / 1.4 "Lexend Exa",
    sans-serif;
  letter-spacing: 0.04em;
}
.result #restart:hover {
  background: #ff982f;
}
@media (max-width: 700px) {
  .result {
    width: 92%;
    margin: 40px auto 64px;
    border-radius: 24px;
  }
  .result .result-subtitle {
    margin-bottom: 28px;
  }
}
`;
    document.head.append(styles);
  }
  if (!document.querySelector("#result-icon")) {
    const icon = document.createElement("div");
    icon.id = "result-icon";
    icon.className = "result-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "🏆";
    result.insertBefore(icon, title);
  }
  if (!document.querySelector("#result-subtitle")) {
    const subtitle = document.createElement("p");
    subtitle.id = "result-subtitle";
    subtitle.className = "result-subtitle";
    title.after(subtitle);
  }
  const restart = document.querySelector("#restart");
  if (restart) restart.textContent = "Proovi uuesti";
}

// Ahvide planeet ilmub enne lugu eraldi tumedal ülekattel.
function showMonkeyIntro(outcome) {
  return new Promise((resolve) => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.documentElement.style.overflow;
    const dialog = document.createElement("dialog");
    dialog.className = "monkey-intro";
    dialog.setAttribute("aria-label", "Ahvide planeedi reisi tulemus");
    const close = document.createElement("button");
    close.className = "monkey-intro-close";
    close.type = "button";
    close.textContent = "×";
    close.setAttribute("aria-label", "Sulge Ahvide planeedi vaade");
    const content = document.createElement("div");
    content.className = "monkey-intro-content";
    const image = document.createElement("img");
    image.className = "monkey-intro-image";
    image.src = outcome.image;
    image.alt = "Ahvide planeet lillade rõngaste ja tulnukahvidega";
    const story = document.createElement("div");
    story.className = "monkey-intro-story";
    story.hidden = true;
    const title = document.createElement("h2");
    title.textContent = outcome.title;
    const paragraphs = document.createElement("div");
    outcome.summary.split("\n\n").forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      paragraphs.append(paragraph);
    });
    const verdict = document.createElement("p");
    verdict.className = "monkey-intro-verdict";
    verdict.textContent = "Reisi tulemus: " + outcome.verdict;
    story.append(title, paragraphs, verdict);
    content.append(image, story);
    dialog.append(close, content);
    if (!document.querySelector("#monkey-intro-styles")) {
      const styles = document.createElement("style");
      styles.id = "monkey-intro-styles";
      styles.textContent = `
        dialog.monkey-intro { position:fixed; inset:0; width:100%; max-width:none;
          height:100%; height:100dvh; max-height:none; margin:0; padding:24px;
          box-sizing:border-box; border:0; color:#fff; background:transparent;
          overflow-y:auto; overscroll-behavior:contain; }
        .monkey-intro::backdrop { background:rgba(0,0,0,.72); backdrop-filter:blur(2px); }
        .monkey-intro-content { min-height:calc(100% - 48px); display:flex;
          flex-direction:column; align-items:center; justify-content:center;
          max-width:900px; margin:auto; padding:32px 0; }
        .monkey-intro-image { display:block; width:min(82vw,650px); max-height:70svh;
          object-fit:contain; height:auto; flex-shrink:0; animation:monkey-drift 7s ease-in-out infinite;
          transition:width 800ms ease; filter:drop-shadow(0 0 28px #a600ff44); }
        .monkey-intro.has-story .monkey-intro-image { width:min(65vw,420px); }
        .monkey-intro-close { position:fixed; z-index:2; right:20px; top:16px;
          width:48px; height:48px; border:1px solid #ffffff66; border-radius:50%;
          color:#fff; background:#161020; font:32px/1 sans-serif; cursor:pointer; }
        .monkey-intro-close:focus-visible { outline:3px solid #00ffb7; outline-offset:4px; }
        .monkey-intro-story { background:rgba(0,0,0,.38); border-radius:24px; padding:clamp(22px,4vw,44px);
          margin-top:36px; width:100%; box-sizing:border-box; text-align:center;
          animation:monkey-story-in 900ms ease both; }
        .monkey-intro-story[hidden] { display:none; }
        .monkey-intro-story h2 { margin:0 0 28px; color:#00ffb7;
          font:700 clamp(25px,4vw,42px)/1.3 Jura,sans-serif; }
        .monkey-intro-story p { margin:0 0 24px;
          font:600 clamp(17px,2vw,23px)/1.65 Jura,sans-serif; }
        .monkey-intro-story .monkey-intro-verdict { margin-bottom:0; color:#ffb879; font-weight:700; }
        @keyframes monkey-drift { 0%,100% {transform:translateY(0) rotate(-2deg)}
          50% {transform:translateY(-14px) rotate(2deg)} }
        @keyframes monkey-story-in { from {opacity:0;transform:translateY(18px)}
          to {opacity:1;transform:translateY(0)} }
        @media(prefers-reduced-motion:reduce) {
          .monkey-intro-image,.monkey-intro-story { animation:none; transition:none; }
        }
      `;
      document.head.append(styles);
    }
    document.body.append(dialog);
    let timer;
    let revealStarted = false;
    let closed = false;
    function scheduleStory() {
      if (revealStarted || closed) return;
      revealStarted = true;
      timer = window.setTimeout(() => {
        story.hidden = false;
        dialog.classList.add("has-story");
      }, 1500);
    }
    image.addEventListener("load", scheduleStory, { once: true });
    image.addEventListener("error", scheduleStory, { once: true });
    dialog.addEventListener(
      "close",
      () => {
        closed = true;
        window.clearTimeout(timer);
        dialog.remove();
        document.documentElement.style.overflow = previousOverflow;
        if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
        resolve();
      },
      { once: true },
    );
    close.addEventListener("click", () => dialog.close());
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    close.focus({ preventScroll: true });
    if (image.complete) scheduleStory();
  });
}

if (typeof document !== "undefined") {
  setupResultWindow();
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
    label.innerHTML = `<input type="checkbox" name="equipment" value="${id}"><span class="check" aria-hidden="true"><img src="assets/checkmark.webp" alt=""></span><span class="emoji" aria-hidden="true">${emoji}</span><span class="item-text"><strong>${title}</strong><small>${description}</small></span>`;
    items.append(label);
  });
  const inputs = [...items.querySelectorAll("input")];
  const selectedItems = () =>
    inputs.filter((input) => input.checked).map((input) => input.value);
  
  const packingHint = document.querySelector("#selected-destination");
  let packingWarningTimeout;

  function showPackingWarning() {
    clearTimeout(packingWarningTimeout);
    packingHint.classList.remove("is-warning");
    void packingHint.offsetWidth;
    packingHint.classList.add("is-warning");

    packingWarningTimeout = setTimeout(() => {
      packingHint.classList.remove("is-warning");
    }, 900);
  }

  items.addEventListener("pointerdown", (event) => {
    if (!destination && event.target.closest(".item")) {
      showPackingWarning();
    }
  });
  
  function updatePacking() {
    clearTimeout(packingWarningTimeout);
    packingHint.classList.remove("is-warning");

    const count = selectedItems().length;
    document.querySelector("#count").textContent = `${count}/5`;
    inputs.forEach((input) => {
      input.disabled = !destination || (count >= 5 && !input.checked);
    });
    document
      .querySelectorAll(".slots i")
      .forEach((slot, index) => slot.classList.toggle("empty", index >= count));
    document.querySelector("#packing-status").textContent = !destination
      ? ""
      : count === 5
        ? "Seljakott on valmis! Vaata oma reisi tulemust."
        : `Vali veel ${5 - count} eset.`;
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
  let monkeyIntroOpen = false;
  resultButton.addEventListener("click", async () => {
    if (monkeyIntroOpen) return;

    if (!destination || selectedItems().length !== 5) {
      showPackingWarning();
      return;
    }
    const outcome = createOutcome(destination, selectedItems());
    const monkeyEnding = selectedItems().includes("bananas");
    const failed =
      monkeyEnding ||
      (destination === "Saturn" && selectedItems().includes("lighter")) ||
      (destination === "Marss" && selectedItems().includes("cocoa")) ||
      (destination === "Neptuun" && selectedItems().includes("food")) ||
      (destination === "Uraan" && selectedItems().includes("solar"));
    document.querySelector("#result-icon").textContent = monkeyEnding
      ? "🐒"
      : failed
        ? "💥"
        : "🏆";
    document.querySelector("#result-icon").hidden = monkeyEnding;
    document.querySelector("#restart").hidden = monkeyEnding;
    document.querySelector("#restart").textContent = failed
      ? "Proovi uuesti"
      : "Mine järgmisele reisile";
    document.querySelector("#result-title").textContent = monkeyEnding
      ? "„SATUD AHVIDE PLANEEDILE“"
      : failed
        ? "„SEIKLUS LÄKS VILTU“"
        : "„ELASID MUGAVALT“";
    document.querySelector("#result-subtitle").textContent = monkeyEnding
      ? "Banaaniradar leidis su üles. Reisiplaan muutus!"
      : failed
        ? `${outcome.title} — sellel reisil võttis seiklus ootamatu pöörde.`
        : "Täiuslik pakkimine. Võiks siia kolida!";
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
    if (monkeyEnding) {
      cancelScroll();
      monkeyIntroOpen = true;
      try {
        await showMonkeyIntro(outcome);
      } finally {
        monkeyIntroOpen = false;
      }
      return;
    }
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

// „Paki ümber” nupp tulemuse nupu kõrvale
const packingResultButton = document.querySelector("#show-result");
const packingItems = document.querySelector("#items");

if (
  packingResultButton &&
  packingItems &&
  !document.querySelector("#repack-button")
) {
  const buttons = document.createElement("div");

  Object.assign(buttons.style, {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "16px",
    marginTop: "24px",
    marginBottom: "80px",
  });

  packingResultButton.before(buttons);
  buttons.append(packingResultButton);
  packingResultButton.style.marginTop = "0";

  const repackButton = document.createElement("button");
  repackButton.id = "repack-button";
  repackButton.type = "button";
  repackButton.className = "action";
  repackButton.textContent = "Paki ümber ↻";

  Object.assign(repackButton.style, {
    background: "#00ffb7",
    borderColor: "#00ffb7",
    color: "#090f24",
    marginTop: "0",
  });

  repackButton.addEventListener("click", () => {
    packingItems.querySelectorAll("input[type='checkbox']").forEach(
      (input) => {
        input.checked = false;
      }
    );

    // Uuendab loendurit, esemete saadavust ja tulemuse nuppu.
    packingItems.dispatchEvent(
      new Event("change", { bubbles: true })
    );
  });

  buttons.append(repackButton);
}
