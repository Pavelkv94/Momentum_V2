const stations = {
  tokyo: [
    {
      title: "AFN Tokyo",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AFNP_TKO.mp3",
    },
    {
      title: "Nichijou Shuffle",
      url: "https://node-22.zeno.fm/rbr1kqmcwnhvv?zs=SaqHdTPWRd2r_Drg7OUZpg&rj-ttl=3&rj-tok=AAABgT2I29EAlfr6atKbU5Ff7Q",
    },
    {
      title: "BOX : Japan City Pop",
      url: "https://play.streamafrica.net/JapanCityPop",
    },
    {
      title: "Japan Hits - Asia DREAM Radio",
      url: "https://cast1.torontocast.com:2120/;",
    },
    {
      title: "ビームFM (Beam FM)",
      url: "https://ice1.streeemer.com:8020/radio.aac",
    },
    {
      title: "J-Pop Powerplay Kawaii",
      url: "https://kathy.torontocast.com:3060/;",
    },
    {
      title: "BOX : Anime Radio -アニメラジオ",
      url: "https://stream-160.zeno.fm/6rd41zgh2uhvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI2cmQ0MXpnaDJ1aHZ2IiwiaG9zdCI6InN0cmVhbS0xNjAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkItNzNuQktuUXBDMjRyYW5Gd1AxUGciLCJpYXQiOjE3Mjc1OTkyNTIsImV4cCI6MTcyNzU5OTMxMn0.bar5GZ3t5aMEPqsXs9MfpUVooXdEQ30hfkHOgihZ0To",
    },
    {
      title: "Hiroaki FM",
      url: "http://cassini.shoutca.st:8000/;",
    },
  ],
  paris: [
    {
      title: "Mouv' Classics",
      url: "https://icecast.radiofrance.fr/mouvclassics-midfi.mp3",
    },
    {
      title: "France Info",
      url: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    },
    {
      title: "France Bleu Paris",
      url: "https://icecast.radiofrance.fr/fb1071-lofi.mp3?ID=pd569ib97j",
    },
    {
      title: "Jazz Radio - Groov’up",
      url: "https://jazz-wr13.ice.infomaniak.ch/jazz-wr13-128.mp3",
    },
    {
      title: "FIP",
      url: "https://icecast.radiofrance.fr/fip-hifi.aac",
    },
  ],
  edinburgh: [
    {
      title: "Nation Radio Scotland",
      url: "http://edge-ads-05-gos2.sharp-stream.com/nationscotlandi.aac",
    },
    {
      title: "Heart Scotland West",
      url: "https://ice-sov.musicradio.com/HeartGlasgowMP3",
    },
    {
      title: "Capital Edinburgh",
      url: "https://media-ice.musicradio.com/CapitalEdinburgh",
    },
    {
      title: "Greatest Hits Non-Stop",
      url: "https://s8.myradiostream.com:58238/listen.mp3?nocache=1727598764",
    },
    {
      title: "Pure Radio Scotland",
      url: "https://listen-pureradio.sharp-stream.com/pure_radio.mp3?Device=LivePlayer&_=532281&awparams=companionAds%3Atrue&listenerid=8196d2c78a734f244852a3f8bbbecbcb",
    },
  ],
  london: [
    {
      title: "Heart FM London 106.2",
      url: "https://media-ssl.musicradio.com/HeartLondon",
    },
    {
      title: "Capital FM London",
      url: "https://media-ssl.musicradio.com/Capital",
    },
    {
      title: "Smooth Chill",
      url: "https://media-ssl.musicradio.com/SmoothChill",
    },
    {
      title: "BBC Radio 1",
      url: "https://media-ssl.musicradio.com/SmoothChill",
    },
  ],
  chicago: [
    {
      title: "WCRX Chicago's Underground Radio",
      url: "https://wcrx.streamguys1.com/live",
    },
    {
      title: "KIIS FM",
      url: "https://n1fb-e2.revma.ihrhls.com/zc849?rj-ttl=5&rj-tok=AAABkjpPB4wAJRqhN_juLlkkuw",
    },
    {
      title: "WBEZ Public Radio",
      url: "https://stream.wbez.org/wbez128.mp3",
    },
  ],
  losAngeles: [
    {
      title: "KIIS FM 102.7 ",
      url: "https://n1fb-e2.revma.ihrhls.com/zc185?rj-ttl=5&rj-tok=AAABkjqaNvgACzlxUsx4RYreUw",
    },
    {
      title: "KTWV The Wave",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CIWVFM.mp3",
    },
    {
      title: "KOST 103.5",
      url: "https://n3eb-e2.revma.ihrhls.com/zc193?rj-ttl=5&rj-tok=AAABkjqdRZQAMErs2jltsr_SjA",
    },
    {
      title: "La Mera Mera 980 AM",
      url: "https://16603.live.streamtheworld.com/KFWBAM_SC",
    },
    {
      title: "Proton Radio",
      url: "https://shoutcast.protonradio.com/stream",
    },
    {
      title: "KLAA Angels Radio AM 830",
      url: "https://klaa.streamguys1.com/live",
    },
  ],
  bali: [
    {
      title: "Radio Seribatu - Komodo",
      url: "https://komodo.out.airtime.pro:8000/komodo_a",
    },
    {
      title: "Phoenix Radio Bali",
      url: "https://live.phoenixradiobali.com:8250/phoenixradio",
    },
  ],
  sydney: [
    {
      title: "Blender Beats",
      url: "https://legacy.scahw.com.au/2blenderbeats_32",
    },
    {
      title: "2UE 954 & DAB +",
      url: "https://23203.live.streamtheworld.com/ACE_2UEAAC.aac?dist=cra_radioapp",
    },
    {
      title: "Nova 96.9",
      url: "https://21363.live.streamtheworld.com/NOVA_969_AAC48.aac?src=digitalradioplus-com-au",
    },
    {
      title: "ItaliaFM",
      url: "http://nebula.shoutca.st:9273/stream",
    },
  ],
  iceland: [
    {
      title: "K100.5 Kaninn",
      url: "https://ice-11.spilarinn.is/kaninnmobile",
    },
    {
      title: "Flashback 70s",
      url: "https://ice-11.spilarinn.is/70flashback",
    },
    {
      title: "Létt Bylgjan",
      url: "https://icecast.visir.is/orbLettBylgjan.aac",
    },
    {
      title: "X-id 97.7 FM",
      url: "https://icecast.visir.is/orbXid.aac",
    },
    {
      title: "Gull Bylgjan",
      url: "https://icecast.visir.is/orbGullBylgjan.aac",
    },
    {
      title: "KissFM 104.5",
      url: "https://ice-11.spilarinn.is/kissfm",
    },
  ],
  moskow: [
    {
      title: "Russkoe Radio",
      url: "https://rusradio.hostingradio.ru/rusradio96.aacp",
    },
    {
      title: "Radio Chanson",
      url: "https://chanson.hostingradio.ru:8041/chanson128.mp3",
    },
    {
      title: "Europa Plus",
      url: "https://ep256.hostingradio.ru:8052/europaplus256.mp3",
    },
    {
      title: "Humor FM",
      url: "https://ic4.101.ru:8000/stream/air/aac/64/102",
    },
    {
      title: "AvtoRadio",
      url: "https://ic7.101.ru:8000/v3_1",
    },
    {
      title: "DFM Club",
      url: "https://dfm-dfmclub.hostingradio.ru/dfmclub96.aacp",
    },
  ],
  rome: [
    {
      title: "Radio Kiss Kiss",
      url: "https://kisskiss.fluidstream.eu/KissKiss.aac",
    },
    {
      title: "RDS",
      url: "https://icstream.rds.radio/rds",
    },
    {
      title: "ITALIAN RADIO - Only (romantic)",
      url: "https://italianradio.streamingmedia.it/play",
    },
    {
      title: "Radio Dancefloor 90s",
      url: "https://audio.radiodancefloor.it/dancefloor.mp3",
    },
    {
      title: "Radio Mambo",
      url: "https://mambo.newradio.it/stream",
    },
    {
      title: "Radio Globo",
      url: "https://globo.newradio.it/globorm64",
    },
  ],
  madrid: [
    {
      title: "KISS FM España",
      url: "https://bbkissfm.kissfmradio.cires21.com/bbkissfm.mp3?wmsAuthSign=c2VydmVyX3RpbWU9MDkvMjkvMjAyNCAxMDowNToxOSBBTSZoYXNoX3ZhbHVlPXE3MjBUMTEvTUpjbzBSMDBHYjI4UWc9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0zNjExNzcwOTU=",
    },
    {
      title: "Los 40 Principales España",
      url: "https://28023.live.streamtheworld.com/LOS40AAC.aac",
    },
    {
      title: "Los 40 Urban",
      url: "https://23603.live.streamtheworld.com/LOS40_URBANAAC.aac",
    },
    {
      title: "CADENA 100",
      url: "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100.mp3",
    },
    {
      title: "Radio Marca Nacional",
      url: "https://24363.live.streamtheworld.com/RADIOMARCA_NACIONAL.mp3?dist=radioes",
    },
    {
      title: "Los 40 Classic",
      url: "https://27863.live.streamtheworld.com/LOS40_CLASSICAAC.aac",
    },
  ]
};

export const driveData = [
  {
    city: "Chicago",
    videoUrl: "_28yBWAYiYg",
    videoStart: 60,
    radio: stations.chicago,
  },
  {
    city: "Los Angeles",
    videoUrl: "Cw0d-nqSNE8",
    videoStart: 60,
    radio: stations.losAngeles,
  },
  {
    city: "London",
    videoUrl: "QI4_dGvZ5yE",
    videoStart: 60,
    radio: stations.london,
  },
  {
    city: "Bali",
    videoUrl: "1Me6yIhC7u0",
    videoStart: 60,
    radio: stations.bali,
  },
  {
    city: "Sydney",
    videoUrl: "bocWfPPkoyo",
    videoStart: 60,
    radio: stations.sydney,
  },
  {
    city: "Paris",
    videoUrl: "lN43inpI2lk",
    videoStart: 20,
    radio: stations.paris,
  },
  {
    city: "Tokyo",
    videoUrl: "01E_6NfmQ10",
    videoStart: 40,
    radio: stations.tokyo,
  },
  {
    city: "Iceland",
    videoUrl: "Ei34ZhiRcn0",
    videoStart: 10,
    radio: stations.iceland,
  },
  {
    city: "Moskow",
    videoUrl: "YORkrd05BtA",
    videoStart: 30,
    radio: stations.moskow,
  },
  {
    city: "Moskow - St.Pet. Road",
    videoUrl: "tbd93cJpJ6g",
    videoStart: 30,
    radio: stations.moskow,
  },
  {
    city: "Rome",
    videoUrl: "XmI335zvBF8",
    videoStart: 20,
    radio: stations.rome,
  },
  {
    city: "Madrid",
    videoUrl: "C911U_Fo-QU",
    videoStart: 30,
    radio: stations.madrid,
  },
];

//todo WALK
export const walkCityData = [
  {
    city: "London",
    videoUrl: "QAntbJz_JMo",
    videoStart: 200,
    radio: stations.london,
  },
  {
    city: "Edinburgh, Scotland",
    videoUrl: "saNYAoE8WsI",
    videoStart: 60,
    radio: stations.edinburgh,
  },
  {
    city: "Paris",
    videoUrl: "oz1Mgu8e1N4",
    videoStart: 160,
    radio: stations.paris,
  },
  {
    city: "Tokyo (night)",
    videoUrl: "0nTO4zSEpOs",
    videoStart: 20,
    radio: stations.tokyo,
  },
  {
    city: "Tokyo (day)",
    videoUrl: "Ze42hH2GzHc",
    videoStart: 70,
    radio: stations.tokyo,
  },
  {
    city: "Sydney",
    videoUrl: "dK3ih5op1F8",
    videoStart: 120,
    radio: stations.sydney,
  },
  {
    city: "Los Angeles",
    videoUrl: "RZ9ZeSu8HIE",
    videoStart: 120,
    radio: stations.losAngeles,
  },
  {
    city: "Iceland",
    videoUrl: "NSmWLrdpvr4",
    videoStart: 100,
    radio: stations.iceland,
  },
  {
    city: "Moskow",
    videoUrl: "b5O_4xfaig4",
    videoStart: 30,
    radio: stations.moskow,
  },
  {
    city: "Rome",
    videoUrl: "ot-HMv_PKs0",
    videoStart: 120,
    radio: stations.rome,
  },
  {
    city: "Madrid",
    videoUrl: "AsuDyA2GZFc",
    videoStart: 100,
    radio: stations.madrid,
  },
];

export const walkNatureData = [
  {
    city: "Forest (Rain)",
    videoUrl: "59fHDWDhzkY",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Forest 2 (Rain)",
    videoUrl: "1v8mDF57WYs",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Forest Autumn",
    videoUrl: "jdDsXdtcuLQ",
    videoStart: 20,
    radio: [],
  },
  {
    city: "Waterfall (Ambient)",
    videoUrl: "Iw50k9kjRc8",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Ocean Hawai",
    videoUrl: "AcztFcgfri8",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Snowfall KYOTO JAPAN",
    videoUrl: "lU6o1vHDZ9U",
    videoStart: 20,
    radio: [],
  },
  {
    city: "Forest 3",
    videoUrl: "hld4uaO1MDE",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Forest 2 (Rain)",
    videoUrl: "1v8mDF57WYs",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Forest 2 (Rain)",
    videoUrl: "1v8mDF57WYs",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Snowfall, Switzerland",
    videoUrl: "YpNvz0BIJ8I",
    videoStart: 60,
    radio: [],
  },
  {
    city: "Ocean Sunrise",
    videoUrl: "dkY8PTXniG4",
    videoStart: 20,
    radio: [],
  },
  {
    city: "Fog",
    videoUrl: "e3Bs7AbzOQw",
    videoStart: 20,
    radio: [],
  },
  {
    city: "Autumn England",
    videoUrl: "RwIXHBZaNw0",
    videoStart: 10,
    radio: [],
  },
  {
    city: "Morning Beach & Sakura Walk ",
    videoUrl: "oLo1wqDITjQ",
    videoStart: 10,
    radio: [],
  },
  
];
