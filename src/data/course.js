// 연수 전체 정보, 용어, 완성 앱 기능, 자료의 한계.

export const COURSE = {
  guideName: '지진 지도 만들기 연수',
  title: '지구는 지금 어디서 흔들릴까?',
  subtitle: '공개 데이터로 만드는 지진·판 경계 탐구 지도',
  appName: '지구는 지금 어디서 흔들릴까?',
  audience: '중학교 과학교사 대상',
  noGenApi: '생성형 API 연결 없이 진행',
  result: '결과물: 내가 배포한 지진·판 경계 탐구 지도',
  route: ['Google AI Studio', 'GitHub', 'Netlify'],
  coreMessage: 'AI는 앱을 만드는 일을 돕습니다. 완성된 앱은 공개 데이터를 읽어 지도에 표시합니다.',
  docsCheckedOn: '2026년 10월 14일',
  dataCheckedOn: '2026년 10월 15일',
}

// {{키}} 또는 {{표시|키}} 로 본문에서 처음 등장할 때 설명이 붙는다.
export const GLOSSARY = {
  API: '다른 서비스의 데이터를 정해진 방식으로 받아오는 통로.',
  GeoJSON: '위치와 관련 정보를 함께 담는 지도 데이터 형식.',
  'GitHub 저장소': '앱의 원본 파일과 변경 기록을 보관하는 공간.',
  커밋: '변경 내용을 하나의 기록으로 저장하는 일.',
  배포: '다른 사람이 주소로 접속할 수 있게 앱을 올리는 일.',
  빌드: '원본 코드를 웹브라우저가 사용할 파일로 준비하는 일.',
  Leaflet: '웹페이지에 지도를 넣고 다루는 도구.',
  레이어: '지도 위에 따로 켜고 끌 수 있는 정보 묶음.',
  캐시: '이미 받은 데이터를 잠시 보관해 다시 사용하는 것.',
}

export const APP_FEATURES = [
  '세계지도를 이동하고 확대·축소한다.',
  '최근 24시간·7일·30일의 지진 데이터를 선택한다.',
  '지진 규모가 클수록 큰 원으로 표시한다.',
  '지진의 깊이를 원의 색으로 구분한다.',
  '최소 규모와 깊이 조건으로 지진을 거른다.',
  '원을 선택하면 위치 설명·규모·깊이·발생 시각을 확인한다.',
  '판 경계 {{레이어}}를 켜고 끈다.',
  '수렴·발산·보존·기타 경계를 구분한다.',
  '조건에 맞는 지진 목록과 요약 수치를 본다.',
  '수업용 탐구 질문을 펼쳐 본다.',
  '자료 출처와 마지막 갱신 정보를 확인한다.',
  '배포 주소를 다른 사람과 공유한다.',
]

export const SCIENCE_LIMITS = [
  '원의 크기는 규모를 **비교하기 위한 시각화**이며 실제 피해 반경이 아닙니다.',
  '**규모와 진도는 다릅니다.** 규모는 지진 자체의 크기, 진도는 장소마다 달라지는 흔들림의 정도입니다.',
  '깊이 색은 **위험 등급이 아닙니다.** 진원의 깊이 구간을 구분할 뿐입니다.',
  '지진은 판 경계 부근에 많이 나타나지만, **모든 지진이 경계 위에서만 발생하는 것은 아닙니다.**',
  '최근 며칠의 데이터만으로 **지진 위험이나 미래 발생을 예측할 수 없습니다.**',
  '지도에 보이는 것은 **USGS에 수록된 지진 자료**입니다. 전 세계의 모든 작은 지진이 빠짐없이 들어 있는 자료가 아닙니다.',
  '판 경계는 **참고 모델**입니다. 실시간으로 관측되는 이동선이나 모든 단층의 정밀한 위치가 아닙니다.',
  '지도에 그린 판 경계 선과 실제 지질 현상 사이에는 **공간적 폭과 모델의 한계**가 있습니다.',
]

export const COURSE_RULES = [
  'Google AI Studio는 **코드를 만드는 도구**로만 사용합니다.',
  '완성한 지도 앱은 **생성형 AI를 호출하지 않습니다.** Gemini {{API}} 키를 발급받는 단계는 없습니다.',
  'USGS 공개 지진 데이터와 판 경계 데이터를 사용합니다.',
  '지도는 {{Leaflet}}과 OpenStreetMap으로 그립니다.',
  '사용자 로그인, 데이터베이스, 결제, 실시간 공동 편집 기능은 만들지 않습니다.',
  '학생 개인정보를 수집하지 않습니다.',
  '터미널(명령어 창)을 쓰지 않아도 끝까지 진행할 수 있습니다.',
  'Netlify 무료 플랜과 기본 제공 주소(netlify.app)를 사용합니다. 무료 서비스에도 이용 조건과 사용량 제한이 있으며, 무제한 무료나 영구 제공이 보장되지 않습니다.',
  '예상하지 못한 **결제·유료 업그레이드 화면**이 나오면 진행을 멈추고 강사에게 확인합니다.',
]

export const PREP_ITEMS = [
  '인터넷에 연결된 노트북',
  '최신 웹브라우저 (Chrome, Edge, Safari 등)',
  '사용 가능한 Google 계정',
  'GitHub 계정',
  'Netlify 계정',
]

export const OPERATION_RULES = [
  '프롬프트는 **한 번에 하나씩** 입력합니다.',
  'AI의 생성이 끝나기 전에 다음 프롬프트를 이어서 입력하지 않습니다.',
  '기능을 추가하면 **반드시 미리보기에서 직접 눌러 확인**합니다.',
  '원하는 결과가 아니면 **해당 기능만** 고쳐 달라고 요청합니다.',
  '지진 건수는 조회 시점마다 달라집니다. 옆 사람과 숫자가 달라도 정상입니다.',
  '단계마다 이미 되던 기능이 그대로 되는지 **회귀 점검**을 합니다.',
]

export const OFFICIAL_LINKS = [
  { label: 'Google AI Studio Build 모드 안내', url: 'https://ai.google.dev/gemini-api/docs/aistudio-build-mode' },
  { label: 'GitHub — 저장소에 파일 추가하기', url: 'https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository' },
  { label: 'Netlify — 저장소에서 배포하기', url: 'https://docs.netlify.com/start/quickstarts/deploy-from-repository/' },
  { label: 'Netlify — 빌드 설정', url: 'https://docs.netlify.com/build/configure-builds/overview/' },
  { label: 'USGS GeoJSON Summary Feed 문서', url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php' },
  { label: 'USGS 판 경계 서비스 (Plates 레이어 1)', url: 'https://earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries/MapServer/1' },
  { label: 'USGS — 규모, 에너지, 진도', url: 'https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity' },
  { label: 'USGS — 지진 깊이 결정', url: 'https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake' },
  { label: 'OpenStreetMap 저작권', url: 'https://www.openstreetmap.org/copyright' },
  { label: 'OSM 타일 이용 정책', url: 'https://operations.osmfoundation.org/policies/tiles/' },
]
