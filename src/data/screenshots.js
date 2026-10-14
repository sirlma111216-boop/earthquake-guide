// 1단계 AI Studio 화면 캡처와 번호별 설명.
// vite.config.js의 assetsInlineLimit로 이미지를 페이지 안에 넣어 HTML 파일 하나로도 열리게 한다.
// x, y는 이미지 안 번호 표시 위치(%)이다.
import startImg from '../assets/aistudio-start.png'
import projectImg from '../assets/aistudio-project.png'

export const SCREENSHOT_NOTE = 'Google AI Studio 실제 화면 캡처 (2026년 10월) — 메뉴 이름과 위치는 바뀔 수 있음'

export const AISTUDIO_SHOTS = [
  {
    src: startImg,
    width: 912,
    height: 613,
    title: '화면 ① 시작 화면 — 새 앱을 만드는 곳 (1단계에서 한 번만 사용)',
    alt: 'Google AI Studio 시작 화면. 가운데에 “Build your ideas with Gemini” 제목과 “Describe an app and let Gemini do the rest”라고 적힌 큰 입력창이 있고, 입력창 아래에 Default mode, 마이크, I’m feeling lucky 버튼, 그 아래에 바로가기 버튼들이 있다.',
    marks: [
      { n: 1, x: 3.5, y: 63, text: '**새 앱 입력창** (“Describe an app and let Gemini do the rest”) — **실습 프롬프트 01**을 여기에 붙여 넣고 요청을 보냅니다.' },
      { n: 2, x: 53, y: 75, text: '**Default mode** — 바꾸지 않고 그대로 둡니다.' },
      { n: 3, x: 75.5, y: 75, text: '**I’m feeling lucky** — 누르지 않습니다. 우리 프롬프트와 상관없는 앱이 만들어질 수 있습니다.' },
      { n: 4, x: 3.5, y: 91, text: '**아래 바로가기 버튼**(Bioscience, Android, Google Drive, Google Sheets 등) — 이 연수에서는 쓰지 않습니다.' },
    ],
    note: '맨 위의 “Introducing …” 같은 소식 문구는 시기에 따라 바뀌므로 신경 쓰지 않아도 됩니다.',
  },
  {
    src: projectImg,
    width: 1915,
    height: 886,
    title: '화면 ② 프로젝트 화면 — 앱이 만들어지고, 이후 모든 수정을 요청하는 곳',
    alt: 'Google AI Studio 프로젝트 화면. 왼쪽에는 보낸 프롬프트가 담긴 Gemini 대화창, “Running for 1s”와 “Crafting” 표시, 맨 아래 “Make changes, add new features, ask for anything” 입력창이 있다. 오른쪽에는 Preview, 코드, 폴더 버튼과 “Generating app – Enjoy these tips while you wait” 안내 카드가 있다. 위쪽에는 Back to start, Untitled, Remix, Share, Publish 버튼이 있다.',
    marks: [
      { n: 1, x: 1.6, y: 4.4, text: '**Back to start** — 처음 화면으로 돌아갑니다. 수정할 때는 누르지 않습니다. 시작 화면 입력창에 넣으면 **새 앱**이 만들어집니다.' },
      { n: 2, x: 1.6, y: 17, text: '**Gemini 대화창** — 내가 보낸 프롬프트와 AI의 답변이 쌓입니다.' },
      { n: 3, x: 13.5, y: 81.5, text: '**“Running for …” / “Crafting”** — 아직 만드는 중이라는 표시입니다. 끝날 때까지 기다리고, 그동안 다음 프롬프트를 넣지 않습니다.' },
      { n: 4, x: 1.6, y: 96, text: '**왼쪽 아래 입력창** (“Make changes, add new features, ask for anything”) — **2단계부터 모든 프롬프트와 복구 프롬프트를 넣는 ‘같은 프로젝트의 대화 입력창’**입니다.' },
      { n: 5, x: 42.5, y: 11.4, text: '**Preview와 옆 아이콘 버튼들** — Preview에서 만든 앱을 확인합니다. 옆의 아이콘은 코드와 파일을 보는 버튼입니다.' },
      { n: 6, x: 54, y: 26, text: '**“Generating app – Enjoy these tips while you wait”** — 만드는 동안 나오는 안내 카드입니다. “Add database and auth” 같은 팁은 따르지 않습니다. 이 앱에는 로그인·데이터베이스가 없습니다.' },
      { n: 7, x: 84.5, y: 4.4, text: '**Share / Publish** — 이 연수에서는 Publish로 배포하지 않습니다. 8~9단계의 GitHub → Netlify 경로를 씁니다.' },
    ],
    note: '가운데 위 “Untitled”는 프로젝트 이름입니다. 생성이 끝나면 오른쪽에 지도 미리보기가 나타납니다.',
  },
]

// ───────── 8단계: AI Studio에서 GitHub로 저장하기 ─────────
import gh1 from '../assets/github-1.png'
import gh2 from '../assets/github-2.png'
import gh3 from '../assets/github-3.png'
import gh4 from '../assets/github-4.png'
import gh5 from '../assets/github-5.png'
import gh6 from '../assets/github-6.png'
import gh7 from '../assets/github-7.png'
import gh8 from '../assets/github-8.png'

export const GITHUB_SHOTS = [
  {
    src: gh1, width: 361, height: 123,
    title: '1) 오른쪽 위 Share, Publish, 톱니 중 아무거나 누르기',
    alt: 'AI Studio 오른쪽 위의 Remix, Share, Publish, 벌레 모양, 톱니 모양 버튼',
    marks: [
      { n: 1, x: 35.5, y: 20, text: '**Share**' },
      { n: 2, x: 55, y: 20, text: '**Publish**' },
      { n: 3, x: 89, y: 22, text: '**톱니(설정)**' },
    ],
    note: '셋 중 아무거나 누르면 여러 탭이 있는 패널이 열립니다. 여기서는 배포(Publish)를 하려는 것이 아니라 GitHub 탭으로 가려고 여는 것입니다.',
  },
  {
    src: gh2, width: 562, height: 690,
    title: '2) 위쪽 GitHub 탭 고르기 → “GitHub에 로그인하여 계속하기” 누르기',
    alt: 'Chat, Share, Publish, Versions, GitHub 탭이 있는 패널. GitHub sync 화면 가운데에 GitHub 로고와 “GitHub에 로그인하여 계속하기” 버튼이 있다.',
    marks: [
      { n: 1, x: 60, y: 2.8, text: '위쪽 탭 줄에서 **GitHub**를 고릅니다. 탭이 안 보이면 오른쪽 `>` 화살표로 넘겨 찾습니다.' },
      { n: 2, x: 29, y: 92, text: '**GitHub에 로그인하여 계속하기**를 누릅니다. GitHub 로그인 창이 나오면 본인이 직접 로그인합니다.' },
    ],
  },
  {
    src: gh3, width: 715, height: 700,
    title: '3) All repositories 고르고 Install & Authorize 누르기',
    alt: 'GitHub의 “Install & Authorize Google AI Studio” 화면. All repositories와 Only select repositories 선택지, 권한 목록, Install & Authorize 버튼이 있다.',
    marks: [
      { n: 1, x: 16.5, y: 48.4, text: '**All repositories**를 고릅니다.' },
      { n: 2, x: 19.5, y: 88, text: '**Install & Authorize**를 누릅니다.' },
    ],
    note: 'Google AI Studio가 내 GitHub 계정에 저장소를 만들고 코드를 올릴 수 있게 허락하는 화면입니다. 화면 위에 내 GitHub 계정 이름이 맞는지 확인하세요.',
  },
  {
    src: gh4, width: 385, height: 361,
    title: '4) 이메일로 본인 확인하기',
    alt: 'GitHub의 “Confirm access” 화면. 로그인한 계정 이름과 “Verify via email” 버튼이 있다.',
    marks: [
      { n: 1, x: 19, y: 64.5, text: '**Verify via email**을 누르고, GitHub 계정 이메일로 온 인증코드를 입력합니다.' },
    ],
    note: '인증코드는 본인이 직접 입력합니다. 강사나 옆 사람에게 알려 주지 않습니다. 메일이 안 오면 스팸함을 확인합니다.',
  },
  {
    src: gh5, width: 541, height: 726,
    title: '5) GitHub와 연결됨 → Create new repository 누르기',
    alt: '“Sync to GitHub” 화면. 새 GitHub 저장소가 만들어지고 AI Studio와 GitHub의 변경이 서로 동기화된다는 설명과 “Create new repository” 버튼이 있다.',
    marks: [
      { n: 1, x: 23, y: 85, text: '**Create new repository**를 누릅니다. 이 프로젝트를 담을 새 저장소를 만듭니다.' },
    ],
    note: '설명처럼 앞으로 AI Studio의 변경 내용이 이 저장소와 동기화됩니다.',
  },
  {
    src: gh6, width: 538, height: 367,
    title: '6) 저장소 이름, 설명, 공개 범위 정하기',
    alt: 'GitHub sync의 새 저장소 입력 화면. New repository name에 earthquake, New repository description에 “지진과 판의 경계를 보여주는 앱”이 입력되어 있고, Visibility에서 Private이 선택되어 있다.',
    marks: [
      { n: 1, x: 30.5, y: 17.5, text: '**New repository name** — 저장소 이름. 이 안내에서는 `earthquake-map`으로 씁니다. (화면 예시에는 earthquake로 입력되어 있습니다.)' },
      { n: 2, x: 41, y: 40.3, text: '**New repository description** — 앱을 한 줄로 설명합니다. 예: 지진과 판의 경계를 보여주는 앱' },
      { n: 3, x: 16, y: 59.7, text: '**Visibility** — **Private**은 나만 코드를 볼 수 있고, **Public**은 누구나 코드를 볼 수 있습니다. 어느 쪽이든 개인 정보나 비밀 값은 넣지 않습니다.' },
    ],
    note: '공개 범위는 코드에 대한 것입니다. 9단계에서 Netlify로 배포한 지도 주소는 공개 범위와 상관없이 다른 사람이 열 수 있습니다.',
  },
  {
    src: gh7, width: 537, height: 939,
    title: '7) 바뀐 내용을 커밋하고 GitHub로 푸시하기',
    alt: 'GitHub sync 화면. 저장소 이름과 main 브랜치, “Changes in Google AI Studio are ready to be pushed” 상태, Commit message, 13 changed files 항목, 맨 아래 “Push changes to GitHub” 버튼이 있다.',
    terms: [
      ['Git(깃)', '파일이 바뀐 기록을 차례로 남기고 관리하는 도구입니다. GitHub는 이 기록을 인터넷에 보관해 주는 서비스입니다.'],
      ['커밋(Commit)', '바뀐 내용을 설명과 함께 하나의 기록으로 묶어 저장하는 일입니다. “지도 화면 만들기”처럼 이름표를 붙인 저장 지점이라고 생각하면 됩니다.'],
      ['푸시(Push)', 'AI Studio에서 만든 커밋을 GitHub 저장소로 올려 보내는 일입니다. 푸시해야 GitHub에도 바뀐 내용이 나타납니다.'],
    ],
    marks: [
      { n: 1, x: 53, y: 14.9, text: '**Repository** — 연결된 저장소(내 계정/저장소 이름)와 브랜치(main)입니다.' },
      { n: 2, x: 89.5, y: 24, text: '**Sync status** — “Changes in Google AI Studio are ready to be pushed”는 AI Studio에서 바뀐 내용이 아직 GitHub에 올라가지 않았다는 뜻입니다.' },
      { n: 3, x: 26, y: 31.1, text: '**Commit message** — 이번 기록에 붙일 설명입니다. 눌러서 내용을 확인하거나 고칠 수 있습니다.' },
      { n: 4, x: 30, y: 35.9, text: '**changed files** — 이번에 올라갈 바뀐 파일 수입니다. 숫자는 사람마다 다릅니다.' },
      { n: 5, x: 30, y: 96.2, text: '**Push changes to GitHub** — 눌러서 바뀐 내용을 GitHub로 올립니다.' },
    ],
  },
  {
    src: gh8, width: 535, height: 268,
    title: '8) GitHub 푸시 완료',
    alt: 'GitHub sync 화면. Sync status에 초록색으로 “GitHub & Google AI Studio are currently in sync”라고 표시되어 있다.',
    marks: [
      { n: 1, x: 89.5, y: 84, text: '“**GitHub & Google AI Studio are currently in sync**”가 보이면 GitHub에 저장이 끝난 것입니다.' },
    ],
    note: '저장소 이름 오른쪽의 화살표(↗) 버튼으로 GitHub 저장소를 열어 볼 수 있습니다. 그 옆의 연결 끊기 모양 아이콘은 누르지 않습니다. 앞으로 앱을 고칠 때마다 이 GitHub 탭에서 Push changes to GitHub를 다시 누릅니다.',
  },
]

// ───────── 9단계: Netlify로 배포하기 ─────────
import nl1 from '../assets/netlify-1.png'
import nl2 from '../assets/netlify-2.png'
import nl3 from '../assets/netlify-3.png'
import nl4 from '../assets/netlify-4.png'
import nl5 from '../assets/netlify-5.png'
import nl6 from '../assets/netlify-6.png'
import nl7 from '../assets/netlify-7.png'
import nl8 from '../assets/netlify-8.png'
import nl9 from '../assets/netlify-9.png'

export const NETLIFY_SHOTS = [
  {
    src: nl1, width: 1405, height: 772,
    title: '1) Projects 화면에서 Add new project 누르기',
    alt: 'Netlify Projects 화면. 검색창과 필터, 오른쪽 위 청록색 Add new project 버튼, 아래에 기존 프로젝트 목록이 있다.',
    marks: [
      { n: 1, x: 85.8, y: 11.4, text: '**Add new project** — 새 프로젝트(사이트)를 추가하는 버튼입니다.' },
    ],
    note: '처음 가입했다면 아래 프로젝트 목록이 비어 있습니다. 화면 예시의 목록은 다른 사이트들이므로 신경 쓰지 않습니다.',
  },
  {
    src: nl2, width: 1087, height: 657,
    title: '2) Import a Git repository에서 GitHub 고르기',
    alt: '“Let’s create your new project” 화면. 위에 AI agent 입력창, 가운데 Import a Git repository의 GitHub·GitLab·Cursor Origin·Bitbucket·Azure DevOps 버튼, 아래에 Upload your project files 영역이 있다.',
    marks: [
      { n: 1, x: 2.8, y: 66.7, text: '**GitHub** — “Import a Git repository”에서 GitHub를 누릅니다. 8단계에서 만든 저장소를 가져옵니다.' },
      { n: 2, x: 42, y: 15.7, text: '**Start building with an AI agent** — 쓰지 않습니다. 앱은 이미 AI Studio에서 만들었습니다.' },
      { n: 3, x: 25, y: 78.4, text: '**Upload your project files** — 쓰지 않습니다. 원본 코드를 올리기만 하면 Vite 앱이 빌드되지 않습니다.' },
    ],
  },
  {
    src: nl3, width: 1207, height: 865,
    title: '3) GitHub 창에서 Authorize 누르기',
    alt: 'GitHub의 “Netlify by Netlify wants access to your GitHub account” 권한 확인 창. 허용 내용 목록과 초록색 Authorize 버튼, Cancel 버튼이 있다.',
    marks: [
      { n: 1, x: 31.9, y: 38.8, text: '괄호 안의 GitHub 계정 이름이 **내 계정**인지 확인합니다.' },
      { n: 2, x: 30.8, y: 77.2, text: '**Authorize** — Netlify가 내 GitHub 계정을 확인하도록 허락합니다.' },
    ],
    note: '새 창으로 열립니다. 창이 안 보이면 작업 표시줄에서 찾거나 팝업 차단을 해제합니다.',
  },
  {
    src: nl4, width: 1296, height: 912,
    title: '4) Install Netlify — All repositories 고르고 Install 누르기',
    alt: 'GitHub의 “Install Netlify” 화면. All repositories와 Only select repositories 선택지, 권한 목록, 초록색 Install 버튼이 있다.',
    marks: [
      { n: 1, x: 32.4, y: 45.2, text: '**All repositories** — 그대로 둡니다. (Only select repositories를 골라 earthquake 저장소만 허용해도 됩니다.)' },
      { n: 2, x: 33.2, y: 90.4, text: '**Install** — Netlify가 저장소의 코드를 읽어 배포할 수 있게 설치합니다.' },
    ],
  },
  {
    src: nl5, width: 1153, height: 753,
    title: '5) 저장소 목록에서 earthquake 고르기',
    alt: 'Netlify의 저장소 선택 목록. reaction, g305, seoulhigh, sciedu, gem2026, earthquake(Private) 저장소가 있고 아래에 Prev, Page 2, Next 버튼과 “Configure the Netlify app on GitHub” 링크가 있다.',
    marks: [
      { n: 1, x: 20, y: 69.3, text: '**earthquake** — 8단계에서 만든 내 저장소를 누릅니다. (이 안내대로 했다면 이름은 earthquake-map입니다.) Private 저장소도 목록에 나옵니다.' },
      { n: 2, x: 38.2, y: 81.3, text: '**Prev / Next** — 저장소가 많으면 여러 쪽으로 나뉩니다. 안 보이면 다른 쪽을 넘겨 봅니다.' },
      { n: 3, x: 44, y: 92.9, text: '**Configure the Netlify app on GitHub** — 그래도 저장소가 안 보이면 눌러서 Netlify에 그 저장소 접근을 허용합니다.' },
    ],
  },
  {
    src: nl6, width: 1446, height: 607,
    title: '6) 배포 설정 확인 — 프로젝트 이름 정하기',
    alt: '“Let’s deploy your project with…” 화면. Review configuration for earthquake 설명, Team 선택, 비어 있는 Project name 입력란, 오른쪽에 저장소·브랜치·빌드 명령·배포 폴더 요약 카드가 있다.',
    marks: [
      { n: 1, x: 7.5, y: 56.8, text: '**Team** — 내 팀 이름이 자동으로 들어갑니다. 그대로 둡니다.' },
      { n: 2, x: 12, y: 75.5, text: '**Project name** — 공개 주소가 됩니다. 예: `my-quake-map-2026` → my-quake-map-2026.netlify.app. 영어 소문자·숫자·하이픈(-)만 쓰고 학생 이름 등 개인 정보는 넣지 않습니다. 비워 두면 임의 이름(예: peaceful-biscochitos-808003)이 붙습니다.' },
      { n: 3, x: 79.3, y: 27.7, text: '**요약 카드** — 저장소(earthquake), 배포 브랜치(main), Build command(npm run build), Published to(dist)가 맞는지 확인합니다.' },
    ],
    note: '이름이 이미 쓰이고 있으면 다른 이름을 입력하라는 안내가 나옵니다. 그럴 때는 뒤에 숫자를 붙입니다.',
  },
  {
    src: nl7, width: 483, height: 741,
    title: '7) Build settings 확인',
    alt: 'Netlify Build settings 입력란. Branch to deploy는 main, Base directory는 비어 있고, Build command는 npm run build, Publish directory는 dist, Functions directory는 비어 있다.',
    marks: [
      { n: 1, x: 40, y: 19.7, text: '**Branch to deploy** — `main`' },
      { n: 2, x: 33, y: 33.3, text: '**Base directory** — 비워 둡니다. (package.json이 저장소 최상위에 있을 때)' },
      { n: 3, x: 35, y: 53.2, text: '**Build command** — `npm run build`' },
      { n: 4, x: 37.5, y: 70.3, text: '**Publish directory** — `dist`' },
      { n: 5, x: 39.5, y: 87.4, text: '**Functions directory** — 비워 둡니다. 이 앱은 서버 기능을 쓰지 않습니다.' },
    ],
    note: '저장소의 netlify.toml 덕분에 값이 자동으로 채워져 있을 수 있습니다. 다르면 위 값으로 고칩니다.',
  },
  {
    src: nl8, width: 636, height: 246,
    title: '8) 환경변수는 건너뛰고 Deploy 누르기',
    alt: 'Environment variables 영역의 Add environment variables 버튼과, 그 아래 청록색 Deploy earthquake 버튼.',
    marks: [
      { n: 1, x: 3.5, y: 45, text: '**Add environment variables** — 누르지 않습니다. 이 앱에는 비밀 키나 API 키가 없습니다.' },
      { n: 2, x: 3.5, y: 79.7, text: '**Deploy (저장소 이름)** — 눌러서 배포를 시작합니다.' },
    ],
    note: '빌드에는 보통 1~2분 걸립니다. 기다리는 동안 다른 버튼을 누르지 않습니다.',
  },
  {
    src: nl9, width: 919, height: 763,
    title: '9) 배포 완료 — 공개 주소 확인하기',
    alt: '배포가 끝난 Netlify 프로젝트 화면. 프로젝트 이름 peaceful-biscochitos-808003과 Public 표시, 초록색 peaceful-biscochitos-808003.netlify.app 주소, Deploys from GitHub, Project configuration과 Share 버튼, Work with an AI agent 입력창, Activity에 Production: Deployed from the Netlify app — Published 기록이 있다.',
    marks: [
      { n: 1, x: 63.8, y: 8.6, text: '**…netlify.app 주소** — 이것이 **공개 사이트 주소**입니다. 눌러서 지도 앱이 열리는지 확인하고, 아래 “내 배포 주소” 칸에 기록합니다.' },
      { n: 2, x: 64.2, y: 4.3, text: '**Public** — 로그인하지 않은 사람도 볼 수 있는 상태라는 뜻입니다.' },
      { n: 3, x: 84.3, y: 83.4, text: '**Activity — Published** — 배포 성공 표시입니다. Failed가 보이면 기록을 눌러 빌드 로그를 확인합니다.' },
      { n: 4, x: 32, y: 35.6, text: '**Work with an AI agent** — 쓰지 않습니다. 앱 수정은 AI Studio에서 하고 GitHub에 저장하면 Netlify가 자동으로 다시 배포합니다.' },
    ],
    note: '지금 보고 있는 app.netlify.com 화면은 나만 보는 관리 화면입니다. 다른 사람에게는 ①의 …netlify.app 주소를 공유합니다.',
  },
]
