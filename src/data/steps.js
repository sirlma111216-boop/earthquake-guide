// 0~10단계 안내 콘텐츠.
// blocks 순서대로 화면에 그려진다.
//   actions / try : 번호가 붙는 따라 하기 목록
//   prompt        : PROMPTS의 id로 프롬프트를 붙인다
//   info          : 설명 (paragraphs, list, table)
//   collapse      : 필요할 때만 펼치는 보조 안내
//   diagram       : 화면 구조 예시 도식
// 본문 표기: **굵게**, `코드`, [글자](주소), {{용어}}

const SAME_PROJECT = '**같은 AI Studio 프로젝트의 대화 입력창**에 붙여 넣습니다. 새 앱을 만들지 않습니다.'

const AI_STUDIO = { label: 'Google AI Studio', url: 'https://aistudio.google.com/' }
const GITHUB = { label: 'GitHub', url: 'https://github.com/' }
const NETLIFY = { label: 'Netlify', url: 'https://app.netlify.com/' }

const FEED = {
  day: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
  week: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
  month: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson',
}
const PLATE_QUERY =
  'https://earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries/MapServer/1/query?where=1%3D1&outFields=NAME%2CLABEL&outSR=4326&f=geojson'

export const STEPS = [
  // ───────────────────────── 0 ─────────────────────────
  {
    id: 'step-0',
    num: 0,
    title: '준비와 완성 목표 이해하기',
    outcome: '세 서비스(AI Studio·GitHub·Netlify)에 접근할 수 있고, 오늘 만들 지도 앱의 모습을 압니다.',
    workplace: '이 연수 안내 페이지와 각 서비스의 로그인 화면',
    links: [AI_STUDIO, GITHUB, NETLIFY],
    blocks: [
      {
        type: 'info',
        tone: 'core',
        paragraphs: [
          '오늘의 흐름: Google AI Studio에서 자연어로 앱을 만들고 → 그 코드를 {{GitHub 저장소}}에 보관하고 → Netlify가 코드를 {{빌드}}해서 {{배포}}합니다.',
        ],
      },
      { type: 'diagram', kind: 'flow' },
      {
        type: 'actions',
        items: [
          '이 안내 페이지를 브라우저의 한 탭에 열어 둡니다. (주소를 즐겨찾기에 추가해 두면 다시 찾기 쉽습니다.)',
          '별도 탭에서 [Google AI Studio](https://aistudio.google.com/)를 엽니다.',
          '사용할 Google 계정으로 AI Studio 화면이 열리는지 확인합니다.',
          '별도 탭에서 [GitHub](https://github.com/)에 로그인합니다.',
          '별도 탭에서 [Netlify](https://app.netlify.com/)에 로그인합니다.',
          '학교 계정에 서비스 제한이 있으면, 기관의 사용 정책과 강사 안내에 따라 오늘 쓸 계정을 정합니다.',
          '아래 “오늘 완성할 지도 앱의 기능” 12가지를 읽습니다.',
          '“지진을 먼저 보고, 판 경계는 나중에 켜기”라는 탐구 순서를 확인합니다.',
        ],
      },
      {
        type: 'info',
        title: '오늘 완성할 지도 앱의 기능',
        lead: '교사가 만드는 앱의 이름은 **‘지구는 지금 어디서 흔들릴까?’**입니다. (지금 보고 있는 이 페이지는 ‘지진 지도 만들기 연수’ 안내 페이지입니다.)',
        listFrom: 'APP_FEATURES',
        ordered: true,
      },
      {
        type: 'info',
        title: '탐구 순서: 지진을 먼저, 판 경계는 나중에',
        paragraphs: [
          '판 경계를 처음부터 켜 두면 학생들은 선을 “정답”으로 보고 지진을 끼워 맞추기 쉽습니다.',
          '먼저 지진 분포만 보고 띠 모양을 찾아 경계를 **예상**한 뒤, 판 경계를 켜서 **비교**합니다.',
        ],
      },
      {
        type: 'info',
        title: '지도를 읽을 때 꼭 지킬 설명',
        tone: 'warn',
        listFrom: 'SCIENCE_LIMITS',
        after: [
          '참고: [USGS — 규모, 에너지, 진도](https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity) · [USGS — 지진 깊이 결정](https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake)',
        ],
      },
      { type: 'info', title: '이 연수의 약속', listFrom: 'COURSE_RULES' },
      { type: 'info', title: '준비물', listFrom: 'PREP_ITEMS' },
      { type: 'info', title: '진행 원칙', listFrom: 'OPERATION_RULES' },
    ],
    success: [
      'AI Studio, GitHub, Netlify가 각각 별도 탭에 로그인된 상태로 열려 있습니다.',
      '이 안내 페이지를 다시 찾을 수 있습니다 (탭 또는 즐겨찾기).',
    ],
    checklist: [
      '세 서비스에 모두 접근할 수 있다.',
      '이 안내 페이지를 다시 찾을 수 있다.',
      '오늘 만들 앱이 생성형 AI를 호출하지 않는다는 것을 이해했다.',
    ],
    trouble: [
      {
        symptom: 'AI Studio를 열면 “사용할 수 없음” 또는 접근 제한 안내가 나옵니다.',
        check: ['지금 로그인한 계정이 학교(기관) 계정인지 개인 계정인지 화면 오른쪽 위 프로필에서 확인합니다.', '학교 계정이라면 관리자가 서비스를 막아 두었을 수 있습니다.'],
        fix: ['강사에게 알리고, 기관 정책과 강사 안내에 맞는 계정으로 진행합니다.', '기관 정책을 우회하려고 임의로 다른 계정을 만들지 않습니다.'],
      },
      {
        symptom: 'GitHub 또는 Netlify에 로그인할 때 인증코드(이메일·문자·앱)를 요구합니다.',
        check: ['계정에 등록된 이메일·휴대전화로 코드가 왔는지 확인합니다.'],
        fix: ['코드는 본인이 직접 입력합니다. 비밀번호나 인증코드는 강사나 옆 사람에게 알려 주지 않습니다.', '코드를 받을 수 없으면 강사에게 알리고 다음 단계는 화면을 함께 보며 진행합니다.'],
      },
      {
        symptom: '결제 정보 입력이나 유료 플랜 업그레이드 화면이 나옵니다.',
        check: ['오늘 과정에는 결제가 필요한 단계가 없습니다.'],
        fix: ['아무것도 입력하지 말고 진행을 멈춘 뒤 강사에게 화면을 보여 주세요.'],
      },
    ],
  },

  // ───────────────────────── 1 ─────────────────────────
  {
    id: 'step-1',
    num: 1,
    title: 'AI Studio에서 지도 화면 만들기',
    outcome: '이동·확대·축소가 되는 세계지도와 앱 제목이 AI Studio 미리보기에 보입니다.',
    workplace: 'Google AI Studio의 Build(앱 만들기) 화면',
    links: [AI_STUDIO, { label: 'AI Studio Build 모드 공식 안내', url: 'https://ai.google.dev/gemini-api/docs/aistudio-build-mode' }],
    blocks: [
      {
        type: 'actions',
        items: [
          '[https://aistudio.google.com/](https://aistudio.google.com/)에 접속합니다.',
          '대화만 하는 화면(Chat)과 앱을 만드는 화면(Build)을 구분합니다. 메뉴 이름은 바뀔 수 있으니 “앱을 만든다(Build, Apps 등)”는 뜻의 메뉴를 찾습니다.',
          'Build 화면에서 새 앱을 만들기 위한 입력창을 엽니다.',
          '아래 ‘실습 프롬프트 01’의 **전체 복사** 버튼을 누릅니다.',
          '새 앱 입력창을 클릭하고 붙여 넣습니다 (Ctrl+V, Mac은 ⌘+V).',
          '생성(실행) 버튼을 눌러 요청을 보냅니다.',
          '생성이 끝날 때까지 기다립니다. 생성 중에는 다른 프롬프트를 입력하지 않습니다.',
        ],
      },
      { type: 'prompt', id: 'p01' },
      { type: 'diagram', kind: 'aistudio' },
      {
        type: 'info',
        tone: 'note',
        paragraphs: [
          '**중요:** 지금 만든 것이 오늘의 앱 하나입니다. 2단계부터는 새 앱을 만들지 않고, **같은 AI Studio 프로젝트의 대화 입력창**에 이어서 요청합니다.',
        ],
      },
      {
        type: 'try',
        items: [
          '미리보기에서 앱 제목 ‘지구는 지금 어디서 흔들릴까?’와 세계지도를 확인합니다.',
          '지도를 마우스(또는 손가락)로 끌어 이동해 봅니다.',
          '확대(+)·축소(−) 버튼을 눌러 봅니다.',
          '지도 오른쪽 아래 등에서 “© OpenStreetMap contributors” 출처 표시를 찾습니다.',
        ],
      },
    ],
    success: [
      '세계지도가 보이고 이동·확대·축소가 됩니다.',
      '지도 아래에 “아직 지진 데이터를 연결하지 않았습니다…” 문구가 보입니다.',
      '아직 지진 원이 없어도 정상입니다.',
    ],
    checklist: [
      '미리보기에 앱 제목과 세계지도가 보인다.',
      '지도 이동과 확대·축소가 된다.',
      'OpenStreetMap 출처 표시가 가려지지 않고 보인다.',
      '가짜 지진 마커나 작동하지 않는 필터가 없다.',
    ],
    trouble: [
      {
        symptom: '지도 자리가 비어 있거나 높이가 0처럼 납작합니다.',
        check: ['지도 영역에 높이(예: 500px 또는 화면 높이 비율)가 지정되어 있는지', 'Leaflet CSS(leaflet.css)를 불러오는지'],
        fix: ['아래 복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r01',
      },
      {
        symptom: '“Map container is already initialized” 같은 지도 초기화 오류가 보입니다.',
        check: ['지도가 화면에 두 번 만들어지거나, 화면이 사라질 때 지도를 정리(remove)하지 않는지'],
        fix: ['복구 프롬프트로 중복 생성과 해제를 점검하게 합니다.'],
        recovery: 'r01',
      },
      {
        symptom: '지도의 틀과 확대 버튼은 있는데 배경 지도 그림만 회색입니다.',
        check: ['타일 주소가 https://tile.openstreetmap.org/{z}/{x}/{y}.png 인지', '학교 네트워크가 외부 지도 타일 요청을 막지 않는지 (다른 지도 사이트가 열리는지 확인)'],
        fix: ['주소가 다르면 복구 프롬프트를 사용합니다.', '네트워크 문제로 보이면 강사에게 알립니다.'],
        recovery: 'r01',
      },
      {
        symptom: '지도를 가장 멀리 축소한 상태에서 마우스 휠을 아래로 내리면 지도가 옆으로 움직입니다.',
        check: ['더 이상 축소되지 않는 상태(가장 원경)에서만 생기는지', '휠을 돌린 마우스 위치 쪽으로 지도가 밀리는지'],
        fix: ['아래 복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.', '고친 뒤 가장 원경에서 휠을 여러 번 내려 지도가 가만히 있는지, 확대는 그대로 되는지 확인합니다.'],
        recovery: 'r01c',
      },
      {
        symptom: 'AI가 Gemini SDK, API 키 입력란, 서버 파일 등 필요 없는 코드를 넣었습니다.',
        check: ['코드 목록에 genai, gemini, server, .env 등의 이름이 보이는지', '화면에 API 키를 입력하라는 칸이 있는지'],
        fix: ['API 키를 발급하거나 입력하지 않습니다.', '아래 정리 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r01b',
      },
    ],
  },

  // ───────────────────────── 2 ─────────────────────────
  {
    id: 'step-2',
    num: 2,
    title: '실제 지진 데이터 연결하기',
    outcome: '지도에 USGS의 실제 지진 위치가 원으로 표시되고, 원을 누르면 정보가 나옵니다.',
    workplace: 'API 주소를 여는 새 브라우저 탭 → 같은 AI Studio 프로젝트',
    links: [{ label: 'USGS 최근 7일 GeoJSON', url: FEED.week }, { label: 'USGS GeoJSON 공식 문서', url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php' }],
    blocks: [
      {
        type: 'actions',
        items: [
          `최근 7일 {{GeoJSON}} 주소를 새 탭에서 엽니다: [${FEED.week}](${FEED.week})`,
          '글자로 된 JSON이 표시되거나, 파일로 내려받아질 수 있다는 것을 확인합니다. 둘 다 정상입니다.',
          '아래 표에서 features, mag, place, coordinates의 의미를 읽습니다.',
          '이 주소는 사람이 읽는 홈페이지가 아니라 **프로그램이 읽는 자료**라는 점을 이해합니다.',
          '같은 AI Studio 프로젝트 탭으로 돌아갑니다.',
          '아래 ‘실습 프롬프트 02’를 복사해 대화 입력창에 붙여 넣고 실행합니다.',
        ],
      },
      {
        type: 'info',
        title: 'USGS 지진 GeoJSON의 주요 항목',
        table: {
          head: ['항목', '뜻'],
          rows: [
            ['`features`', '지진 등의 사건 목록'],
            ['`feature.id`', '사건 식별자'],
            ['`properties.mag`', '규모'],
            ['`properties.magType`', '규모 종류 (여러 종류가 섞여 있으므로 모두 “리히터 규모”라고 부르지 않습니다)'],
            ['`properties.place`', '위치 설명'],
            ['`properties.time`', '발생 시각 (1970년 1월 1일부터 센 밀리초)'],
            ['`properties.url`', 'USGS 상세 페이지 주소'],
            ['`properties.type`', '사건 종류 (earthquake만 사용)'],
            ['`geometry.coordinates`', '[경도, 위도, 깊이(km)] — 순서에 주의'],
            ['`metadata.generated`', 'USGS가 이 자료를 만든 시각'],
          ],
        },
        after: [
          '**좌표 순서 주의:** GeoJSON은 [경도, 위도], Leaflet에서 직접 원을 만들 때는 [위도, 경도]입니다. 프롬프트에 이 내용이 들어 있습니다.',
          '**두 가지 시각:** “데이터 생성 시각”(USGS가 만든 시각)과 “앱에서 마지막으로 받은 시각”은 다릅니다.',
        ],
      },
      { type: 'prompt', id: 'p02', where: SAME_PROJECT },
      {
        type: 'try',
        items: [
          '미리보기에서 데이터 로딩이 끝나기를 기다립니다.',
          '지도에 나타난 원 하나를 누릅니다.',
          '팝업의 위치 설명·규모·깊이·발생 시각(한국시간 KST)을 읽습니다.',
          'USGS 상세 링크가 있으면 열어서 팝업 내용과 비교합니다.',
          '‘데이터 새로고침’ 버튼을 한 번 눌러 봅니다.',
        ],
      },
    ],
    success: [
      '실제 자료의 원을 누르면 정보가 나옵니다.',
      '화면 위에 “USGS 최근 7일 · 규모 2.5 이상 자료”가 보입니다.',
      '지진 건수는 조회 시점마다 달라집니다. 특정 숫자가 정답이 아닙니다.',
    ],
    checklist: [
      '원 팝업에 발생 시각이 “한국시간 KST”로 표시된다.',
      '데이터 생성 시각과 앱에서 받은 시각이 따로 보인다.',
      '회귀 점검: 지도 이동·확대·축소와 출처 표시가 그대로 된다.',
    ],
    trouble: [
      {
        symptom: '원이 하나도 보이지 않고 “불러오는 중”에서 멈춥니다.',
        check: ['API 주소를 새 탭에서 열었을 때 자료가 보이는지', '앱 화면에 오류 문구가 표시되는지'],
        fix: ['새 탭에서도 안 열리면 학교 네트워크 문제일 수 있으니 강사에게 알립니다.', '새 탭에서는 열리는데 앱만 안 되면 복구 프롬프트를 사용합니다.'],
        recovery: 'r02',
      },
      {
        symptom: '원이 남극 근처나 엉뚱한 바다에 몰려 있습니다.',
        check: ['좌표 순서가 뒤바뀌었는지 ([경도, 위도]와 [위도, 경도])'],
        fix: ['복구 프롬프트로 좌표 순서를 점검하게 합니다.'],
        recovery: 'r02',
      },
      {
        symptom: '규모나 깊이가 “0”으로 표시되는 원이 많습니다.',
        check: ['원래 값이 null(정보 없음)인데 0으로 바뀐 것은 아닌지'],
        fix: ['복구 프롬프트로 null 처리를 점검하게 합니다.'],
        recovery: 'r02',
      },
    ],
  },

  // ───────────────────────── 3 ─────────────────────────
  {
    id: 'step-3',
    num: 3,
    title: '규모와 깊이를 눈에 보이게 만들기',
    outcome: '원의 크기로 규모를, 원의 색으로 깊이를 비교할 수 있습니다.',
    workplace: '같은 AI Studio 프로젝트의 대화 입력창과 미리보기',
    links: [AI_STUDIO],
    blocks: [
      {
        type: 'actions',
        items: [
          '미리보기에서 현재 원들이 모두 같은 크기·같은 색인지 확인합니다.',
          '아래 ‘실습 프롬프트 03’을 복사해 같은 프로젝트의 대화 입력창에 붙여 넣고 실행합니다.',
        ],
      },
      { type: 'prompt', id: 'p03', where: SAME_PROJECT },
      {
        type: 'info',
        title: '깊이 색 구간 (위험 등급이 아닙니다)',
        table: {
          head: ['깊이', '원 색'],
          rows: [
            ['70km 미만', '주황색'],
            ['70km 이상 300km 미만', '파란색'],
            ['300km 이상', '보라색'],
            ['깊이 정보 없음', '회색'],
          ],
        },
        after: ['원의 반지름 식은 비교를 쉽게 하려는 시각 장치일 뿐, 에너지 비율이나 피해 반경이 아닙니다.'],
      },
      {
        type: 'try',
        items: [
          '큰 원 하나와 작은 원 하나를 각각 누릅니다.',
          '팝업의 규모와 원 크기를 비교합니다.',
          '서로 다른 색의 원을 누릅니다.',
          '팝업의 깊이와 범례를 비교합니다.',
          '앱에 추가된 규모와 진도의 차이 설명을 읽습니다.',
        ],
      },
      {
        type: 'questions',
        title: '확인 질문',
        items: [
          { q: '깊이가 깊은 지진은 반드시 규모도 큰가?', a: '아닙니다. 원의 크기(규모)와 색(깊이)은 서로 다른 변수입니다. 깊은 지진 중에도 작은 원이 있고, 얕은 지진 중에도 큰 원이 있습니다.' },
          { q: '원의 크기와 색은 각각 무엇을 나타내는가?', a: '크기는 규모, 색은 진원의 깊이 구간입니다. 두 시각 요소가 서로 다른 정보를 나타낸다는 점을 강조합니다.' },
        ],
      },
    ],
    success: [
      '규모가 큰 원일수록 크게 그려집니다.',
      '깊이 구간에 따라 주황·파랑·보라·회색이 나뉘고, 범례 두 개(크기·색)가 따로 보입니다.',
    ],
    checklist: [
      '규모 크기 범례와 깊이 색 범례가 따로 있다.',
      '범례에 “피해 반경이 아님” 설명이 있다.',
      '규모와 진도의 차이 설명이 보인다.',
      '회귀 점검: 원 팝업과 데이터 새로고침이 그대로 된다.',
    ],
    trouble: [
      {
        symptom: '모든 원이 여전히 같은 크기입니다.',
        check: ['원을 L.circleMarker로 그리는지 (L.circle은 미터 단위라 세계지도에서 크기 비교가 어렵습니다)', 'mag 값이 숫자로 읽히는지'],
        fix: ['복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r03',
      },
      {
        symptom: '대부분의 원이 회색(깊이 정보 없음)으로 나옵니다.',
        check: ['깊이를 geometry.coordinates의 **세 번째 값**에서 읽는지'],
        fix: ['복구 프롬프트로 깊이 계산 위치를 점검하게 합니다.'],
        recovery: 'r03',
      },
    ],
  },

  // ───────────────────────── 4 ─────────────────────────
  {
    id: 'step-4',
    num: 4,
    title: '기간·규모·깊이 필터 만들기',
    outcome: '기간을 바꿔 자료를 다시 받고, 규모·깊이 조건으로 지진을 골라 볼 수 있습니다.',
    workplace: '같은 AI Studio 프로젝트의 대화 입력창과 미리보기',
    links: [AI_STUDIO],
    blocks: [
      {
        type: 'actions',
        items: ['아래 ‘실습 프롬프트 04’를 복사해 같은 프로젝트의 대화 입력창에 붙여 넣고 실행합니다.'],
      },
      { type: 'prompt', id: 'p04', where: SAME_PROJECT },
      {
        type: 'info',
        title: '왜 기간만 다시 불러올까?',
        paragraphs: [
          '기간마다 USGS가 제공하는 자료 주소가 다릅니다. 그래서 기간을 바꿀 때만 새 자료를 받습니다.',
          '최소 규모와 깊이는 이미 받은 자료 안에서 고르면 되므로 다시 요청하지 않습니다. 한 번 받은 기간 자료는 {{캐시}}해 두었다가 “데이터 새로고침”을 누를 때 새로 받습니다.',
        ],
      },
      {
        type: 'try',
        items: [
          '기간을 “최근 24시간”으로 바꿉니다.',
          '기간을 “최근 7일”, 이어서 “최근 30일”로 바꿔 봅니다.',
          '최소 규모를 4.5로 높입니다.',
          '원의 수와 크기 분포가 어떻게 변하는지 관찰합니다.',
          '깊이 필터에서 “300km 이상”(깊은 지진)만 선택합니다.',
          '“조건 초기화” 버튼을 누릅니다.',
        ],
      },
    ],
    success: [
      '최소 규모를 높이면 조건에 맞는 지진 수가 늘어나지 않습니다.',
      '화면에 표시된 지진 수와 지도에 그려진 원의 수가 같은 조건에서 나온 것입니다.',
      '0건이어도 앱이 멈추지 않고 안내 문구가 나옵니다.',
    ],
    checklist: [
      '기간 세 가지가 모두 불러와진다.',
      '조건 초기화를 누르면 최근 7일·최소 규모 2.5·깊이 전체로 돌아간다.',
      '필터를 바꿔도 보던 지도 위치가 갑자기 처음으로 돌아가지 않는다.',
      '회귀 점검: 규모·깊이 범례와 원 팝업이 그대로 된다.',
    ],
    trouble: [
      {
        symptom: '기간을 빠르게 바꿨더니 선택한 기간과 다른 자료가 보입니다.',
        check: ['화면에 표시된 기간 이름과 원의 개수 변화가 맞는지', '늦게 도착한 이전 응답이 덮어쓴 것은 아닌지'],
        fix: ['복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r04',
      },
      {
        symptom: '인터넷이 끊겼는데 “0건”이라고만 나옵니다.',
        check: ['API 실패와 결과 0건이 구분되어 표시되는지'],
        fix: ['복구 프롬프트로 실패 표시를 구분하게 합니다.'],
        recovery: 'r04',
      },
      {
        symptom: '슬라이더를 움직일 때마다 화면이 깜빡이며 다시 불러옵니다.',
        check: ['규모·깊이를 바꿀 때마다 API를 다시 부르는지'],
        fix: ['복구 프롬프트로 “이미 받은 데이터에서 필터링”하도록 고칩니다.'],
        recovery: 'r04',
      },
    ],
  },

  // ───────────────────────── 5 ─────────────────────────
  {
    id: 'step-5',
    num: 5,
    title: '판 경계를 겹쳐 보기',
    outcome: '지진 분포만 보고 예상한 경계와 USGS 판 경계 모델을 비교할 수 있습니다.',
    workplace: '같은 AI Studio 프로젝트의 미리보기 → 대화 입력창 → 미리보기',
    links: [{ label: 'USGS 판 경계 서비스', url: 'https://earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries/MapServer/1' }],
    blocks: [
      {
        type: 'info',
        tone: 'core',
        paragraphs: ['**이 단계의 목적:** 지진 분포와 판 경계의 관계를 관찰합니다. 판 경계를 켜기 전에 먼저 예상합니다.'],
      },
      {
        type: 'actions',
        items: [
          '미리보기에서 기간을 “최근 30일”로 바꾸고 지진 분포를 봅니다. (판 경계는 아직 없습니다.)',
          '지진이 띠 모양으로 모이는 곳을 찾아봅니다.',
          '판 경계가 있을 것 같은 위치를 손가락이나 메모로 예상해 둡니다.',
          '아래 ‘실습 프롬프트 05’를 복사해 같은 프로젝트의 대화 입력창에 붙여 넣고 실행합니다.',
        ],
      },
      {
        type: 'info',
        title: '판 경계 요청 주소 읽기',
        paragraphs: [`요청 주소: [${PLATE_QUERY}](${PLATE_QUERY})`],
        table: {
          head: ['주소의 부분', '뜻'],
          rows: [
            ['`where=1%3D1`', '전체 항목을 조회하는 조건 (1=1은 항상 참)'],
            ['`outFields=NAME%2CLABEL`', '명칭(NAME)과 경계 종류(LABEL)를 요청'],
            ['`outSR=4326`', '위도·경도 좌표계로 요청'],
            ['`f=geojson`', '지도에서 쓸 GeoJSON 형식으로 요청'],
          ],
        },
        after: [
          '이 서비스는 한 번에 돌려주는 건수에 제한이 있습니다. 결과가 잘리면 앱이 **코드 안에서** 나누어 더 받아 오도록 프롬프트에 적어 두었습니다. 주소를 손으로 고칠 필요는 없습니다.',
          '기본 과정은 USGS Plates **레이어 1**만 사용합니다. 미세판(Microplates, 레이어 0)은 심화 선택 사항입니다.',
        ],
      },
      {
        type: 'info',
        title: '경계 종류 번역',
        table: {
          head: ['원본 LABEL', '앱 표시', '선 모양'],
          rows: [
            ['Convergent Boundary', '수렴 경계', '짙은 붉은 실선'],
            ['Divergent Boundary', '발산 경계', '짙은 청록색 긴 점선'],
            ['Transform Boundary', '보존 경계', '짙은 회색 짧은 점선'],
            ['Other · 빈 값 · 알 수 없는 값', '기타·미분류 경계', '옅은 회색 점선'],
          ],
        },
      },
      { type: 'prompt', id: 'p05', where: SAME_PROJECT },
      {
        type: 'try',
        items: [
          '‘판 경계 표시’를 켭니다.',
          '앞에서 예상한 위치와 실제로 표시된 경계를 비교합니다.',
          '경계선 하나를 눌러 종류를 확인합니다.',
          '경계 종류 선택에서 수렴 경계만 표시해 봅니다.',
          '깊이 필터를 바꿔 가며 수렴 경계 주변 분포를 비교합니다.',
          '판 경계를 다시 끄고, 지진만 보았을 때와 비교합니다.',
        ],
      },
      {
        type: 'collapse',
        title: '보조 자료(fraxen/tectonicplates)를 쓰게 되는 경우',
        blocks: [
          {
            type: 'info',
            paragraphs: [
              'USGS 서비스에 접근할 수 없을 때 강사 안내에 따라 [fraxen/tectonicplates](https://github.com/fraxen/tectonicplates)의 공개 파일 [PB2002_boundaries.json](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)을 쓸 수 있습니다.',
              '이 파일은 USGS 응답과 속성 구조가 다릅니다. 경계 종류 값이 비어 있는 선을 위치만 보고 수렴·발산·보존으로 **추측해 채우지 않습니다.**',
              '보조 자료를 쓰면 확인 가능한 경계 위치만 **단색**으로 표시하고, 자료 출처와 ODC-By 라이선스를 표시합니다.',
              '두 자료가 자동으로 같은 종류의 정보를 준다고 설명하지 않습니다.',
            ],
          },
        ],
      },
    ],
    success: [
      '경계를 켜고 꺼도 지진 원과 필터가 그대로 유지됩니다.',
      '경계를 켜면 새로운 선이 보이고, 선을 눌러 종류를 확인할 수 있습니다.',
      '보존 경계(짧은 점선)도 눈에 보이는 두께로 표시됩니다.',
      '지진 원의 색 범례와 판 경계의 선 범례가 따로 있습니다.',
    ],
    checklist: [
      '판 경계를 켜기 전에 경계 위치를 예상해 보았다.',
      '자료 출처에 USGS Tectonic Plate Boundaries와 Peter Bird(2003)가 보인다.',
      '“판 경계는 참고 모델입니다…” 안내가 보인다.',
      '회귀 점검: 기간·규모·깊이 필터와 원 팝업이 그대로 된다.',
    ],
    trouble: [
      {
        symptom: '판 경계를 켜도 선이 하나도 보이지 않습니다.',
        check: ['판 경계 로딩·오류 표시가 따로 나오는지', 'HTTP 성공이어도 응답 본문에 error 객체가 들어 있는지', '선의 두께·불투명도가 0에 가깝지 않은지'],
        fix: ['아래 복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r05',
      },
      {
        symptom: '경계선이 일부 바다·대륙에서만 보이고 군데군데 빠져 있습니다.',
        check: ['응답의 건수 제한(exceededTransferLimit) 때문에 결과가 잘렸는지'],
        fix: ['아래 복구 프롬프트로 나누어 받기를 구현하게 합니다.'],
        recovery: 'r05b',
      },
      {
        symptom: '태평양 한가운데를 가로지르는 긴 직선이 생겼습니다.',
        check: ['날짜변경선(경도 180°) 부근에서 선이 잘못 이어진 것인지'],
        fix: ['복구 프롬프트로 날짜변경선 처리를 점검하게 합니다.'],
        recovery: 'r05b',
      },
      {
        symptom: '판 경계를 켠 뒤로 지진 원이 잘 눌리지 않습니다.',
        check: ['경계선이 지진 원보다 위에 그려지는지 (레이어 순서)'],
        fix: ['복구 프롬프트로 레이어 순서를 점검하게 합니다.'],
        recovery: 'r05',
      },
    ],
  },

  // ───────────────────────── 6 ─────────────────────────
  {
    id: 'step-6',
    num: 6,
    title: '지진 목록과 요약 정보 만들기',
    outcome: '조건에 맞는 지진을 목록과 요약 수치로 보고, 목록에서 고른 지진을 지도에서 찾을 수 있습니다.',
    workplace: '같은 AI Studio 프로젝트의 대화 입력창과 미리보기',
    links: [AI_STUDIO],
    blocks: [
      {
        type: 'actions',
        items: ['아래 ‘실습 프롬프트 06’을 복사해 같은 프로젝트의 대화 입력창에 붙여 넣고 실행합니다.'],
      },
      { type: 'prompt', id: 'p06', where: SAME_PROJECT },
      {
        type: 'try',
        items: [
          '지진 목록에서 한 항목을 선택합니다.',
          '해당 지진으로 지도가 이동하고 팝업이 열리는지 확인합니다.',
          '목록을 최신순으로, 이어서 규모 큰 순으로 정렬합니다.',
          '최소 규모와 깊이 필터를 바꿉니다.',
          '목록·요약 수치·지도가 함께 바뀌는지 확인합니다.',
        ],
      },
    ],
    success: [
      '목록에서 고른 항목과 지도에서 열린 팝업이 같은 지진을 가리킵니다.',
      '모든 요약 값이 현재 선택한 조건을 기준으로 계산됩니다.',
      '“전체 ○건 중 ○건 표시”처럼 목록이 일부만 보이고 있다는 것을 알 수 있습니다.',
    ],
    checklist: [
      '0건일 때 최대 규모가 0이 아니라 “해당 없음”으로 나온다.',
      '판 경계를 켜고 꺼도 목록 개수가 바뀌지 않는다.',
      '회귀 점검: 필터·판 경계·원 팝업이 그대로 된다.',
    ],
    trouble: [
      {
        symptom: '목록의 개수와 요약 카드의 지진 수가 다릅니다.',
        check: ['목록의 “더 보기”가 요약 수치까지 잘라 낸 것은 아닌지', '목록·지도·요약이 같은 필터 결과를 쓰는지'],
        fix: ['아래 복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r06',
      },
      {
        symptom: '목록을 눌러도 지도가 움직이지 않거나 다른 지진의 팝업이 열립니다.',
        check: ['목록 항목과 지도 원이 같은 feature.id로 연결되는지'],
        fix: ['복구 프롬프트로 연결 방식을 점검하게 합니다.'],
        recovery: 'r06',
      },
    ],
  },

  // ───────────────────────── 7 ─────────────────────────
  {
    id: 'step-7',
    num: 7,
    title: '수업용 탐구 질문 넣기',
    outcome: '앱 안에 학생용 탐구 질문 다섯 개와 펼쳐 보는 교사용 해설이 들어갑니다.',
    workplace: '같은 AI Studio 프로젝트의 대화 입력창과 미리보기',
    links: [AI_STUDIO],
    blocks: [
      {
        type: 'info',
        tone: 'note',
        paragraphs: ['이 단계에서도 AI API는 연결하지 않습니다. 미리 작성한 질문과 교사용 해설을 앱에 **고정 내용**으로 넣습니다.'],
      },
      {
        type: 'actions',
        items: ['아래 ‘실습 프롬프트 07’을 복사해 같은 프로젝트의 대화 입력창에 붙여 넣고 실행합니다.'],
      },
      { type: 'prompt', id: 'p07', where: SAME_PROJECT },
      {
        type: 'try',
        items: [
          '‘수업에서 탐구하기’ 패널에서 활동 1을 열고, 제시된 조건(최근 30일·최소 규모 2.5·깊이 전체)을 직접 맞춥니다.',
          '판 경계를 끈 상태로 지진 분포를 관찰합니다.',
          '판 경계를 켜고 예상과 비교합니다.',
          '학생용 질문과 교사용 해설(펼치기 버튼 뒤)이 구분되어 있는지 확인합니다.',
        ],
      },
    ],
    success: [
      '활동 1~5가 관찰 → 예상 → 비교 → 설명 순서로 읽힙니다.',
      '교사용 해설은 펼치기 버튼을 눌러야 보입니다.',
      '실제로 동작하지 않는 “조건 적용” 같은 버튼이 없습니다.',
    ],
    checklist: [
      '활동 다섯 개가 모두 들어 있다.',
      '앱이 생성형 AI를 호출하지 않는다.',
      '회귀 점검: 지도·필터·판 경계·목록이 그대로 된다.',
    ],
    trouble: [
      {
        symptom: '활동 중 일부가 빠지거나, AI가 질문을 새로 지어냈습니다.',
        check: ['프롬프트 07의 활동 1~5가 모두 그대로 들어갔는지'],
        fix: ['아래 복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣습니다.'],
        recovery: 'r07',
      },
      {
        symptom: '“AI에게 물어보기” 같은 생성형 AI 기능이나 API 키 입력란이 생겼습니다.',
        check: ['이 앱은 생성형 AI를 호출하지 않습니다.'],
        fix: ['API 키를 입력하지 말고 아래 정리 프롬프트를 사용합니다.'],
        recovery: 'r01b',
      },
    ],
  },

  // ───────────────────────── 8 ─────────────────────────
  {
    id: 'step-8',
    num: 8,
    title: '배포 준비와 GitHub 저장',
    outcome: 'GitHub의 earthquake-map 저장소에 앱 파일과 최근 변경 기록이 있습니다.',
    workplace: '같은 AI Studio 프로젝트 → GitHub',
    links: [AI_STUDIO, GITHUB, { label: 'AI Studio Build 모드 공식 안내', url: 'https://ai.google.dev/gemini-api/docs/aistudio-build-mode' }],
    blocks: [
      {
        type: 'actions',
        title: '먼저: 배포 구조 점검',
        items: [
          '아래 ‘실습 프롬프트 08’을 복사해 같은 프로젝트의 대화 입력창에 붙여 넣고 실행합니다.',
          'AI의 답변에서 빌드 확인 결과(확인함 / 확인하지 못함)를 읽습니다.',
          '미리보기에서 지도·필터·판 경계·목록·탐구 활동이 그대로 되는지 확인합니다.',
        ],
      },
      { type: 'prompt', id: 'p08', where: SAME_PROJECT },
      {
        type: 'info',
        title: 'GitHub 계정이 없다면: 먼저 가입하기',
        lead: '이미 GitHub 계정이 있고 로그인되어 있다면 이 부분은 건너뜁니다.',
        ordered: true,
        list: [
          '새 탭에서 [GitHub 사이트(https://github.com/)](https://github.com/)를 엽니다.',
          '오른쪽 위의 **Sign up**(가입) 버튼을 누릅니다.',
          '이메일은 **가급적 Gmail 주소**를 입력합니다. AI Studio에서 쓰는 Google 계정과 같은 주소면 인증 메일을 찾기 쉽고 계정 관리도 편합니다.',
          '비밀번호와 사용자 이름(Username)을 정합니다. 사용자 이름은 저장소 주소(github.com/사용자이름)에 그대로 공개되므로 학생 이름이나 개인 정보를 넣지 않습니다.',
          '사람인지 확인하는 퍼즐이 나오면 본인이 직접 풉니다.',
          'Gmail로 온 GitHub 인증코드를 가입 화면에 입력합니다. 메일이 안 보이면 스팸함과 프로모션 탭을 확인합니다.',
          '가입이 끝나면 GitHub에 로그인된 상태로 이 탭을 열어 둡니다.',
        ],
        after: [
          '비밀번호와 인증코드는 본인이 직접 입력하고 다른 사람에게 알려 주지 않습니다. 학교 계정으로 가입이 막히면 강사에게 알립니다.',
          '유료 플랜(Pro 등) 안내가 나오면 무료(Free)를 고르거나 건너뜁니다. 결제 정보는 입력하지 않습니다.',
        ],
      },
      {
        type: 'actions',
        title: '다음: GitHub에 저장하기 (아래 화면 1~8을 보며 진행)',
        items: [
          'AI Studio 오른쪽 위의 Share, Publish, 톱니 중 아무거나 눌러 패널을 엽니다. (화면 1)',
          '패널 위쪽 탭에서 **GitHub**를 고릅니다. 화면이 안내와 다르면 [공식 문서](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)를 확인합니다. (화면 2)',
          '**GitHub에 로그인하여 계속하기**를 누르고, GitHub 로그인 창이 열리면 본인이 직접 로그인합니다. (화면 2)',
          '**All repositories**를 고르고 **Install & Authorize**를 누른 뒤, 이메일로 온 인증코드를 직접 입력합니다. (화면 3~4)',
          '**Create new repository**를 누르고 저장소 이름을 `earthquake-map`으로 입력합니다. (화면 5~6)',
          '설명을 한 줄 쓰고 공개(Public)·비공개(Private) 중 고릅니다. 공개하면 **코드**가 누구에게나 보입니다. 개인 정보나 비밀 값은 넣지 않습니다. (화면 6)',
          '**Push changes to GitHub**를 누르고, “currently in sync”가 보일 때까지 기다립니다. (화면 7~8)',
          'GitHub에서 `earthquake-map` 저장소를 엽니다.',
          '저장소 최상위에 `package.json`, `index.html`, 소스 폴더(`src` 등)가 있는지 확인합니다.',
          '최근 {{커밋}}(변경 기록)이 방금 시각으로 생겼는지 확인합니다.',
        ],
      },
      { type: 'diagram', kind: 'github' },
      { type: 'diagram', kind: 'repo' },
      {
        type: 'collapse',
        title: 'AI Studio에 GitHub 메뉴가 보이지 않을 때 (ZIP 업로드 경로)',
        blocks: [
          {
            type: 'info',
            ordered: true,
            list: [
              '먼저 [AI Studio 공식 문서](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)에서 현재 지원 경로를 확인합니다.',
              'AI Studio에서 ZIP 내려받기가 가능하면 내려받아 컴퓨터에서 압축을 풉니다.',
              'GitHub에서 새 저장소(`earthquake-map`)를 만듭니다.',
              '저장소 화면의 **Add file → Upload files** 기능을 엽니다. (파일과 폴더를 저장소에 올리는 메뉴입니다.)',
              '압축을 푼 폴더 **안의 파일과 폴더들**을 끌어다 놓습니다. ZIP 파일 하나만 올리는 것으로 대신하지 않습니다.',
              '올린 뒤 저장소 최상위에서 `package.json`이 바로 보이는지 확인합니다.',
              '**Commit changes** 버튼으로 기록합니다.',
            ],
            after: [
              '파일이 한 단계 더 깊은 폴더(예: `earthquake-map/my-app/package.json`)에 들어가면 9단계에서 Netlify의 기준 폴더(Base directory) 설정이 달라집니다.',
              '브라우저 업로드 제한(파일 수·크기)에 걸리면 강사의 개별 지원을 받습니다. 오늘 과정에서는 터미널(CLI)을 쓰지 않습니다.',
              '공식 참고: [GitHub — 저장소에 파일 추가하기](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)',
            ],
          },
        ],
      },
    ],
    success: [
      'GitHub의 earthquake-map 저장소 최상위에 package.json, index.html, 소스 파일이 보입니다.',
      '저장소에 방금 만든 커밋이 있습니다.',
      'node_modules, dist 폴더, .env 파일은 저장소에 없습니다.',
    ],
    checklist: [
      'GitHub 저장소에서 실제 프로젝트 파일을 확인했다.',
      'GitHub 저장소에서 최근 변경 기록(커밋)을 확인했다.',
      '저장소에 비밀 값이나 개인 정보가 없다.',
    ],
    trouble: [
      {
        symptom: 'GitHub 연결 창에서 접근 권한을 묻는 화면이 나옵니다.',
        check: ['요청하는 앱 이름이 Google AI Studio(또는 Google)인지', '전체 저장소 접근 대신 선택한 저장소만 허용할 수 있는지'],
        fix: ['내용을 읽고 본인이 직접 허용합니다. 판단이 어려우면 강사에게 화면을 보여 줍니다.'],
      },
      {
        symptom: '저장소에 파일이 하나도 없거나 ZIP 파일 하나만 있습니다.',
        check: ['저장(동기화)이 끝났는지', 'ZIP 경로라면 압축을 풀고 안의 파일을 올렸는지'],
        fix: ['ZIP 파일을 지우고, 압축을 푼 폴더 안의 파일·폴더를 다시 올린 뒤 Commit changes를 누릅니다.'],
      },
      {
        symptom: 'package.json이 없거나 build 스크립트가 없다고 의심됩니다.',
        check: ['package.json을 열어 "build": "vite build" 줄이 있는지'],
        fix: ['아래 복구 프롬프트를 같은 AI Studio 프로젝트 대화 입력창에 붙여 넣고, 다시 저장(동기화)합니다.'],
        recovery: 'r08',
      },
    ],
  },

  // ───────────────────────── 9 ─────────────────────────
  {
    id: 'step-9',
    num: 9,
    title: 'Netlify로 배포하기',
    outcome: 'netlify.app으로 끝나는 내 공개 주소에서 지진 지도가 열립니다.',
    workplace: 'Netlify',
    links: [NETLIFY, { label: 'Netlify 저장소 배포 안내', url: 'https://docs.netlify.com/start/quickstarts/deploy-from-repository/' }, { label: 'Netlify 빌드 설정 안내', url: 'https://docs.netlify.com/build/configure-builds/overview/' }],
    blocks: [
      {
        type: 'info',
        tone: 'note',
        paragraphs: ['Netlify의 메뉴 이름과 위치는 바뀔 수 있습니다. 아래에는 **메뉴의 목적**을 함께 적었습니다. 이름이 조금 달라도 같은 목적의 메뉴를 고르세요.'],
      },
      {
        type: 'info',
        title: 'Netlify 계정이 없다면: 먼저 가입하기',
        lead: '이미 Netlify 계정이 있고 로그인되어 있다면 이 부분은 건너뜁니다.',
        ordered: true,
        list: [
          '새 탭에서 [Netlify 가입 페이지(https://app.netlify.com/signup)](https://app.netlify.com/signup)를 엽니다.',
          '가입 방법은 **가급적 Gmail**로 합니다. Google 계정으로 가입하는 버튼이 있으면 그것을 누르고, 없으면 이메일 가입을 골라 Gmail 주소를 입력합니다.',
          'Google 로그인 창이 열리면 AI Studio에서 쓰는 Google 계정을 본인이 직접 선택합니다.',
          '이메일로 가입했다면 Gmail로 온 Netlify 확인 메일을 열어 인증합니다. 메일이 안 보이면 스팸함과 프로모션 탭을 확인합니다.',
          '가입 후 사용 목적이나 팀 이름을 묻는 화면이 나오면 알맞게 고르거나 입력하고 넘어갑니다.',
          '가입이 끝나면 Netlify에 로그인된 상태로 이 탭을 열어 둡니다.',
        ],
        after: [
          '요금제를 고르는 화면이 나오면 무료(Free)를 고릅니다. 결제 정보는 입력하지 않으며, 결제를 요구하면 진행을 멈추고 강사에게 알립니다.',
          '비밀번호와 인증코드는 본인이 직접 입력하고 다른 사람에게 알려 주지 않습니다.',
        ],
      },
      {
        type: 'actions',
        items: [
          '[Netlify](https://app.netlify.com/)에 로그인하고 Projects 화면에서 **Add new project**를 누릅니다. (화면 1)',
          '“Import a Git repository”에서 **GitHub**를 누릅니다. AI agent 입력창과 파일 업로드는 쓰지 않습니다. (화면 2)',
          'GitHub 창이 열리면 내 계정인지 확인하고 **Authorize**를 누릅니다. (화면 3)',
          '“Install Netlify” 화면에서 **All repositories**를 그대로 두고 **Install**을 누릅니다. (화면 4)',
          '저장소 목록에서 8단계에서 만든 저장소(`earthquake-map`)를 누릅니다. 안 보이면 다음 쪽을 넘겨 봅니다. (화면 5)',
          '**Project name**에 공개 주소로 쓸 이름을 영어로 입력합니다. 비워 두면 임의 이름이 붙습니다. (화면 6)',
          '오른쪽 요약 카드와 Build settings에서 브랜치 `main`, Build command `npm run build`, Publish directory `dist`를 확인합니다. (화면 6~7)',
          'Base directory와 Functions directory는 비워 두고, 아래 설정 표와 다시 비교합니다. (화면 7)',
          '환경변수(Add environment variables)는 건너뛰고 **Deploy (저장소 이름)** 버튼을 누릅니다. (화면 8)',
          '빌드가 끝날 때까지 1~2분 기다립니다. 진행 중에는 다른 버튼을 누르지 않습니다.',
          'Activity에 **Published**(성공)가 보이는지, **Failed**(실패)가 보이는지 확인합니다. (화면 9)',
          '성공하면 초록색 **…netlify.app** 공개 사이트 주소를 누릅니다. (화면 9)',
          'Netlify 관리 화면 주소(app.netlify.com/…)와 공개 사이트 주소(…netlify.app)를 구분합니다.',
          '시크릿(비공개) 창에서 공개 주소를 열어 로그인 없이도 접속되는지 확인합니다.',
          '접근 제한(비밀번호 보호 등) 화면이 나오면 프로젝트의 공개 범위 설정을 확인합니다.',
          '공개 주소에서 지도, 지진 데이터, 필터, 판 경계, 목록을 하나씩 눌러 봅니다.',
          '휴대전화에서도 공개 주소를 열어 봅니다.',
          '아래 ‘내 배포 주소’ 칸에 공개 주소를 기록합니다.',
        ],
      },
      { type: 'diagram', kind: 'netlifyShots' },
      {
        type: 'info',
        title: '빌드 설정 표',
        table: {
          head: ['설정', '입력할 값', '설명'],
          rows: [
            ['기준 폴더 (Base directory)', '비워 두거나 기본값', 'package.json이 저장소 최상위에 있을 때. 한 단계 아래 폴더에 있으면 그 폴더 이름.'],
            ['Build command', '`npm run build`', '원본 코드를 브라우저용 파일로 만드는 명령'],
            ['Publish directory', '`dist`', '빌드 결과가 담기는 폴더'],
            ['Environment variables', '추가할 값 없음', '이 앱은 비밀 키를 쓰지 않습니다'],
          ],
        },
        after: [
          '저장소에 netlify.toml이 있으면 이 값이 자동으로 채워져 있을 수 있습니다.',
          '유료 도메인은 구매하지 않습니다. 기본 제공 netlify.app 주소로 완료합니다.',
          '원본 ZIP 파일을 Netlify에 올리기만 하면 Vite 앱이 자동으로 배포되는 것은 아닙니다. 오늘은 GitHub 저장소를 연결해 Netlify가 빌드하게 합니다.',
        ],
      },
      { type: 'deployUrl' },
      {
        type: 'info',
        tone: 'note',
        paragraphs: ['코드를 고친 뒤에는 반드시 **GitHub 저장 → Netlify 재배포 완료 → 공개 주소에서 확인**까지 해야 바뀐 내용이 공개 사이트에 나타납니다.'],
      },
    ],
    success: [
      '시크릿 창과 휴대전화에서 공개 주소가 열립니다.',
      '공개 주소에서 실제 지진 원, 필터, 판 경계, 목록이 작동합니다.',
    ],
    checklist: [
      'Netlify 배포 상태가 성공으로 표시되었다.',
      '로그인하지 않은 창에서도 공개 주소가 열린다.',
      '공개 주소에서 지진 데이터와 판 경계가 보인다.',
    ],
    trouble: [
      {
        symptom: '빌드 로그에 “package.json을 찾을 수 없음(Could not find package.json 등)”이 나옵니다.',
        check: ['GitHub 저장소 최상위에 package.json이 있는지, 한 단계 아래 폴더에 있는지'],
        fix: ['한 단계 아래 폴더에 있다면 Netlify의 기준 폴더(Base directory)에 그 폴더 이름을 넣고 다시 배포합니다.'],
      },
      {
        symptom: '“build 스크립트가 없음(Missing script: build)”이 나옵니다.',
        check: ['package.json의 scripts에 build가 있는지'],
        fix: ['AI Studio에서 실습 프롬프트 08 또는 아래 복구 프롬프트를 다시 실행하고, GitHub에 저장한 뒤 재배포합니다.'],
        recovery: 'r08',
      },
      {
        symptom: '빌드가 실패(Failed)했습니다.',
        check: ['빌드 로그에서 **처음으로 나오는** error 줄 (마지막 줄이 아니라 첫 오류가 원인인 경우가 많습니다)'],
        fix: ['아래 “오류 해결 요청 양식”을 복사해 빈칸을 채우고, AI Studio의 같은 프로젝트 대화 입력창에 붙여 넣습니다.', '고친 뒤 GitHub에 저장하고 Netlify에서 새 배포가 성공하는지 확인합니다.'],
        template: true,
      },
      {
        symptom: '공개 주소를 열면 페이지가 하얗게만 보입니다.',
        check: ['브라우저 개발자 도구(F12)의 Console에 빨간 오류가 있는지', '파일 경로(자산 경로)를 찾지 못한다는 오류인지'],
        fix: ['오류 문장을 “오류 해결 요청 양식”의 “화면에 보이는 오류” 칸에 붙여 AI Studio에 요청합니다.'],
        template: true,
      },
      {
        symptom: '사이트는 열리지만 지진 데이터를 불러오지 못합니다.',
        check: ['앱의 오류 문구', '같은 와이파이에서 USGS 주소가 새 탭으로 열리는지'],
        fix: ['USGS 주소도 안 열리면 네트워크 문제이므로 강사에게 알립니다.', '주소는 열리는데 앱만 실패하면 2단계 복구 프롬프트를 사용한 뒤 GitHub 저장·재배포합니다.'],
        recovery: 'r02',
      },
      {
        symptom: '지도 부분만 회색입니다.',
        check: ['Leaflet CSS, 지도 높이, 지도 타일 요청'],
        fix: ['1단계 복구 프롬프트를 사용한 뒤 GitHub 저장·재배포합니다.'],
        recovery: 'r01',
      },
      {
        symptom: '내 컴퓨터에서는 열리는데 다른 사람은 못 엽니다(관리자에게만 열림).',
        check: ['공유한 주소가 app.netlify.com(관리 화면)이 아니라 …netlify.app(공개 사이트)인지', '프로젝트에 비밀번호 보호 등 접근 제한이 켜져 있는지'],
        fix: ['공개 사이트 주소를 다시 복사해 공유합니다.', '접근 제한 설정이 유료 기능 안내와 함께 나오면 진행을 멈추고 강사에게 확인합니다.'],
      },
    ],
  },

  // ───────────────────────── 10 ─────────────────────────
  {
    id: 'step-10',
    num: 10,
    title: '내 수업에 맞게 수정하고 다시 배포하기',
    outcome: '원본 코드를 고치면 같은 공개 주소의 사이트도 바뀐다는 것을 직접 확인합니다.',
    workplace: '같은 AI Studio 프로젝트 → GitHub → Netlify → 공개 주소',
    links: [AI_STUDIO, GITHUB, NETLIFY],
    blocks: [
      {
        type: 'actions',
        items: [
          'AI Studio의 **같은 프로젝트**로 돌아갑니다.',
          '아래 ‘실습 프롬프트 09’를 복사해 대화 입력창에 붙여 넣고 실행합니다.',
          '미리보기에서 제목 아래 문구와 첫 안내 문장이 바뀌었는지 확인합니다.',
          '8단계에서 쓴 방법으로 GitHub에 변경 내용을 저장합니다. (AI Studio의 GitHub 탭 → Push changes to GitHub)',
          'GitHub 저장소에서 최근 커밋이 새로 생겼는지 확인합니다.',
          'Netlify에서 새 배포가 시작되었는지 확인합니다.',
          '배포가 끝나면 같은 공개 주소를 다시 엽니다. (바로 안 바뀌면 새로고침합니다.)',
          '수정한 문구가 반영되었는지 확인합니다.',
          '지진 지도와 판 경계 기능이 그대로 작동하는지 확인합니다.',
        ],
      },
      { type: 'prompt', id: 'p09', where: SAME_PROJECT },
      {
        type: 'info',
        title: '저장 경로를 섞지 마세요',
        list: [
          '8단계에서 **AI Studio의 GitHub 동기화**를 썼다면, 이번에도 같은 동기화 기능으로 저장합니다.',
          '8단계에서 **ZIP 업로드(수동 경로)**를 썼다면, 바뀐 원본 파일을 다시 내려받아 GitHub에 올리고 Commit changes를 눌러야 합니다.',
          'Netlify 자동 배포는 연결된 저장소·브랜치에 변경이 반영되어야 시작됩니다. GitHub에 새 커밋이 없으면 Netlify도 새로 배포하지 않습니다.',
        ],
      },
    ],
    success: [
      '같은 공개 주소에서 ‘우리 반 지구 탐구실’ 문구가 보입니다.',
      '기존 기능이 모두 그대로 작동합니다.',
    ],
    checklist: [
      '공개 주소가 열린다.',
      '실제 지진 데이터가 보인다.',
      '규모와 깊이 범례가 있다.',
      '기간·규모·깊이 필터가 작동한다.',
      '원을 누르면 지진 정보를 볼 수 있다.',
      '판 경계를 켜고 끌 수 있다.',
      '경계 종류를 구분할 수 있다.',
      '목록에서 지진을 선택할 수 있다.',
      '자료 출처와 시간 기준이 보인다.',
      '휴대전화에서도 사용할 수 있다.',
      '수정한 내용이 재배포되었다.',
      '이 지도를 지진 예측 도구로 설명하지 않는다.',
    ],
    trouble: [
      {
        symptom: 'GitHub에는 새 커밋이 있는데 공개 사이트가 바뀌지 않습니다.',
        check: ['Netlify의 배포 목록에 새 배포가 있는지, 상태가 성공인지', '브라우저가 예전 화면을 보여 주는 것은 아닌지'],
        fix: ['새 배포가 실패했다면 9단계의 “오류 해결 요청 양식”을 사용합니다.', '성공했다면 공개 주소에서 새로고침(Ctrl+Shift+R, Mac은 ⌘+Shift+R)합니다.'],
      },
      {
        symptom: 'Netlify에 새 배포가 시작되지 않습니다.',
        check: ['GitHub 저장소에 방금 바꾼 내용의 커밋이 있는지', 'Netlify가 연결한 브랜치와 커밋이 올라간 브랜치가 같은지'],
        fix: ['커밋이 없다면 AI Studio에서 다시 저장(동기화)하거나, 수동 경로라면 바뀐 파일을 다시 올립니다.'],
      },
      {
        symptom: '문구는 바뀌었는데 다른 기능이 사라졌습니다.',
        check: ['미리보기에서 지도·필터·판 경계·목록·탐구 활동을 하나씩 눌러 봅니다.'],
        fix: ['아래 복구 프롬프트를 같은 프로젝트 대화 입력창에 붙여 넣고, 다시 저장·재배포합니다.'],
        recovery: 'r10',
      },
    ],
  },
]

export function stepIndexById(id) {
  return STEPS.findIndex((s) => s.id === id)
}
