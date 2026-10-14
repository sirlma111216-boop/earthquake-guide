import { COURSE, OFFICIAL_LINKS } from '../data/course.js'

export default function Footer() {
  return (
    <footer className="foot">
      <section>
        <h2 className="foot-title">자료 출처</h2>
        <ul>
          <li>지진 자료: U.S. Geological Survey(USGS) Earthquake Hazards Program, GeoJSON Summary Feed</li>
          <li>
            판 경계 자료: USGS Tectonic Plate Boundaries (map_plateboundaries, Plates 레이어). 서비스가 인용한 원자료:
            Bird, P. (2003). An updated digital model of plate boundaries. <i>Geochemistry, Geophysics, Geosystems</i>, 4(3).{' '}
            <a href="https://doi.org/10.1029/2001GC000252" target="_blank" rel="noopener noreferrer" className="ext break">
              DOI: 10.1029/2001GC000252
            </a>
          </li>
          <li>
            보조 자료(선택): fraxen/tectonicplates — PB2002 경계 GeoJSON, ODC-By 라이선스. USGS 응답과 속성 구조가 다릅니다.
          </li>
          <li>
            배경 지도: © OpenStreetMap contributors ·{' '}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="ext">저작권</a> ·{' '}
            <a href="https://operations.osmfoundation.org/policies/tiles/" target="_blank" rel="noopener noreferrer" className="ext">타일 이용 정책</a>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="foot-title">공식 문서</h2>
        <ul className="link-list">
          {OFFICIAL_LINKS.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noopener noreferrer" className="ext break">{l.label}</a>
            </li>
          ))}
        </ul>
      </section>
      <p className="checked-on">
        공식 자료 확인 기준: {COURSE.docsCheckedOn}. 이후 각 서비스의 메뉴 이름·위치와 무료 이용 조건이 달라질 수 있습니다.
        화면이 안내와 다르면 메뉴의 <strong>목적</strong>을 기준으로 찾고, 위 공식 문서를 확인하세요.
      </p>
      <p className="muted small">
        이 페이지는 ‘{COURSE.guideName}’ 안내 페이지입니다. 교사가 만드는 앱 ‘{COURSE.appName}’과는 별개입니다.
      </p>
    </footer>
  )
}
