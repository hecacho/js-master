const recommendMusicsArr = [
  {
    title: "踊り子",
    artist: "Vaundy",
  },
  {
    title: "ブレーメン",
    artist: "ヨルシカ",
  },
  {
    title: "Escape",
    artist: "ヨルシカ",
  },
  {
    title: "RAIN",
    artist: "SEKAI NO OWARI",
  },
  {
    title: "Joker (Feat. JAMIE)",
    artist: "BIG Naughty (서동현)",
  },
  {
    title: "나의 X에게",
    artist: "경서",
  },
  {
    title: "퇴사 (Art. 이민석) (Prod. GC)",
    artist: "Anonymous Artists",
  },
  {
    title: "헤픈 우연",
    artist: "헤이즈 (Heize)",
  },
  {
    title: "사랑은 (Feat. 원슈타인)",
    artist: "마미손",
  },
  {
    title: "우리집을 못 찾겠군요 (Feat. 볼빨간사춘기)",
    artist: "매드 클라운(Mad Clown)",
  },
];

const musicRecommendTitle = document.querySelector("#music_recommend__title");
const musicRecommendArtist = document.querySelector("#music_recommend__artist");

const randomNum = Math.floor(Math.random() * recommendMusicsArr.length);
musicRecommendTitle.innerText = recommendMusicsArr[randomNum].title;
musicRecommendArtist.innerText = recommendMusicsArr[randomNum].artist;
