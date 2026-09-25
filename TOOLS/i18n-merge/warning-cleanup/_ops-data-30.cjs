// shard 30: ko mojibake repair (research-drop-stitch / rf-welding / research-sup-thickness) + rf-welding ISO 6185 token restoration (EN + 20 locales) + " min" chart-label fix
module.exports = [
  {
    f: 'src/data/pages/ko/research-drop-stitch.yaml',
    find: 'content_html: "<h2>탄더론스티치럼?</h2>\\n<p>더론스티치(“더론스티치 직믳”라고 “더론스티치 코어”라고도 하면서) 다른 사용법입니다. 수천 개의 과열평하과 냹리연시터 실이 직믳 슄의 상단과 하단 When the shell is inflated, 이 실들은 내부 인장 부재로 작용하여 — 상단과 하단 팬넘이 둥피 형태로 부투어 오라가는 것을 방지하고 팬넘을 폄평하고 단달하게 유지시킴니다.</p>\\n<p>그 과만이 되었다 15 – 20 PSI 의 내부 압력을 겨할 수 있는 경량 탁대용 구조가 — 하들슈드 보드와 비프되는 강성을 가진다고 하지만 보관 바 운보를 위해 완전히 공기 매약 수 있습니다.</p>\\n\\n<h2>작동 원리: 물리학</h2>\\n<p>일\\bc18적인 인플레인스붜(예: 피웠 또는 에어 마트리스)에서는 내부 공기압이 모든 방향으로 동일하게 박어내니다. 내부 구소가 없으면 구조는 원광형나 구형이 됩니다. 더론스티치는 인장 보강을 도입하여 이를 해과합니다:</p>\\n<ul>\\n  <li>수천 개의 실이 상단과 하단 직믳 레미어를 연과합니다</li>\\n  <li>팬장하면 공기압이 상단과 하단을 박어내려고 합니다</li>\\n  <li>실은 이 분리에 절하여 하중을 실 중을 픸 매핑 력으로 전달합니다</li>\\n  <li>그 과만이 고절에 절하는 폄평하고 단달한 팬넘이 됩니다</li>\\n</ul>\\n\\n<h2>제작 과정</h2>\\n<ol>\\n  <li><strong>직주:</strong> 냹리연시터 실이 두 개의 별대 기반 직믳 레미어(일\\bc18적으로 1,100 DTEX 또는 1,680 DTEX PVC 콘특 냹리연시터)로 동시에 직주됩니다. 실은 90&deg; 각도로 레미어 사이에 루프 직주됩니다.</li>\\n  <li><strong>콘특:</strong> 직주된 기반 직믳에 나이프 콘특 또는 캘릸덴 콘특 과정을 사용하여 PVC(든리게 TPU)를 콘특합니다. 이를 통해 실을 밁정하고 기미 막을 형성합니다.</li>\\n  <li><strong>레미어 번드:</strong> 더론스티치 코어를 열 라미너이틱 또는 접해제를 사용하여 외부 라미너이틱 레미어(일\\bc18적으로 0.9mm 또는 1.2mm PVC)에 번드합니다.</li>\\n  <li><strong>용접:</strong> 레미어 버드를 열픽 용접, RF 용접 또는 고주파 용접으로 가장자를 따라 용접하여 보드의 측반을 만든니다.</li>\\n  <li><strong>버블 설치:</strong> 보스턴 버블 또는 핬키-로버츠 버블을 설치하면서, 과팬장 방지를 위한 압력 조절 장치가 일\\bc18적으로 포함됩니다.</li>\\n</ol>\\n\\n<h2>학심 품질 지표</h2>\\n<table class=\\"w-full text-sm border-collapse\\">\\n  <thead>\\n    <tr class=\\"bg-gray-100\\">\\n      <th class=\\"p-3 text-left font-semibold text-gray-900 border\\">파라미터</th>\\n      <th class=\\"p-3 text-left font-semibold text-gray-900 border\\">Entry Level</th>\\n      <th class=\\"p-3 text-left font-semibold text-gray-900 border\\">프리미엀</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr><td class=\\"p-3 border\\">실 밸도</td><td class=\\"p-3 border\\">1 thread / sq in</td><td class=\\"p-3 border\\">2 threads / sq in</td></tr>\\n    <tr><td class=\\"p-3 border\\">기반 직믳</td><td class=\\"p-3 border\\">1,100 DTEX</td><td class=\\"p-3 border\\">1,680 DTEX</td></tr>\\n    <tr><td class=\\"p-3 border\\">최대 압력</td><td class=\\"p-3 border\\">12 – 15 PSI</td><td class=\\"p-3 border\\">18 – 22 PSI</td></tr>\\n    <tr><td class=\\"p-3 border\\">PVC 둘금</td><td class=\\"p-3 border\\">0.6 – 0.9 mm</td><td class=\\"p-3 border\\">1.0 – 1.2 mm</td></tr>\\n    <tr><td class=\\"p-3 border\\">레미어 구조</td><td class=\\"p-3 border\\">접잠 &amp; 번드</td><td class=\\"p-3 border\\">용접 &amp; 필원 번드</td></tr>\\n  </tbody>\\n</table>\\n\\n<h2>응용 분야</h2>\\n<ul>\\n  <li><strong>SUP 보드:</strong> 4\\" – 6\\" 둘금, 15 – 20 PSI, 1 – 2실/sq in</li>\\n  <li><strong>카안:</strong> 더론스티치 바닥 + 인플레인스붜 측면 체버, 10 – 15 PSI 바닥</li>\\n  <li><strong>RIB 바닥:</strong> Drop-stitch 바닥s for lightweight, packable RIB tenders, 12 – 18 PSI</li>\\n  <li><strong>보트 펜더:</strong> 저압 더론스티치 평면 형태의 펜더를 위한</li>\\n</ul>\\n\\n<h2>더론스티치 vs. 에어돁(유리쇼프 또는 우드 코어)</h2>\\n<p>하들슈드 보드는 EPS 폸 코어에 유리쇼프 또는 우드 스특거 보강이 적용된 실용 코어를 사용합니다. 더 간락하고, 더 단달하면, 더 반응이 빠리고 — 공기를 매약 수 없습니다. 더론스티치는 부분 강성을 탁대성과 교환합니다. 대부분의 레저 사용자에게 modern 더론스티치 SUP는 20 PSI에서 entry-level 하들 보드와 강성 차이를 구별하기 어렵습니다.</p>\\n\\n<h2>afarer의 더론스티치 활용</h2>\\n<p>afarer는 전체 SUP 라인어에서 1,680 DTEX 더론스티치 코어를 사용하면서, 제미카인다만 2개의 실과 1.2mm PVC 외부 라미너이틱을 적용합니다. 보드는 20 PSI로 등구가 매겨지, 출하 전 정구 압력의 1.5빘에서 24시간 압력 윤지 시험을 겨친니다. 레미어 버드는 삼중 레미어 필원으로 열픽 용접되면, 압력 조절 버블은 모든 모델에 기본으로 장악됩니다.</p>\\n"',
    rep: 'content_html: "<h2>드롭스티치란 무엇입니까?</h2>\\n<p>드롭스티치(“드롭스티치 패브릭” 또는 “드롭스티치 코어”라고도 함)는 수천 개의 개별 폴리에스터 실이 원단 셸의 상판과 하판을 연결하는 구조 방식입니다. 셸이 팽창하면 이 실들이 내부 인장 부재로 작용하여 — 상판과 하판 패널이 둥근 형태로 바깥쪽으로 불룩해지는 것을 방지하고, 패널이 평평하고 단단하게 유지되도록 합니다.</p>\\n<p>그 결과 15 – 20 PSI의 내부 압력을 견딜 수 있는 경량 휴대용 구조가 완성됩니다 — 하드쉘 보드에 필적하는 강성을 지니면서도 보관 및 운송 시에는 완전히 공기를 빼서 부피를 줄일 수 있습니다.</p>\\n\\n<h2>작동 원리: 물리학</h2>\\n<p>일반적인 인플레이터블 구조(풍선이나 에어 매트리스 등)에서는 내부 공기압이 모든 방향으로 균등하게 작용합니다. 내부 구속이 없으면 구조는 원통형 또는 구형이 됩니다. 드롭스티치는 인장 보강을 도입하여 이 문제를 해결합니다:</p>\\n<ul>\\n  <li>수천 개의 실이 상판과 하판 원단 레이어를 연결합니다</li>\\n  <li>팽창하면 공기압이 상판과 하판을 밀어내려고 합니다</li>\\n  <li>실은 이러한 분리에 저항하여 하중을 실 축 방향의 인장력으로 전달합니다</li>\\n  <li>그 결과 구부러짐에 저항하는 평평하고 단단한 패널이 완성됩니다</li>\\n</ul>\\n\\n<h2>제작 과정</h2>\\n<ol>\\n  <li><strong>직조:</strong> 폴리에스터 실이 두 개의 별도 기저 직물 레이어(일반적으로 1,100 DTEX 또는 1,680 DTEX PVC 코팅 폴리에스터)에 동시에 직조됩니다. 실은 레이어 사이에 90&deg; 각도로 루프 직조됩니다.</li>\\n  <li><strong>코팅:</strong> 직조된 기저 직물에 나이프 코팅 또는 캘린더 코팅 공정으로 PVC(또는 드물게 TPU)를 코팅합니다. 이를 통해 실을 밀봉하고 기밀 막을 형성합니다.</li>\\n  <li><strong>레이어 접합:</strong> 드롭스티치 코어를 열 라미네이션 또는 접착제를 사용해 외부 라미네이트 레이어(일반적으로 0.9mm 또는 1.2mm PVC)에 접합합니다.</li>\\n  <li><strong>용접:</strong> 레일 밴드를 열풍 용접, RF 용접 또는 고주파 용접으로 가장자리를 따라 용접하여 보드의 측벽을 만듭니다.</li>\\n  <li><strong>밸브 설치:</strong> 보스턴 밸브 또는 할키-로버츠 밸브를 설치하며, 과팽창 방지를 위한 압력 조절 장치가 일반적으로 포함됩니다.</li>\\n</ol>\\n\\n<h2>핵심 품질 지표</h2>\\n<table class=\\"w-full text-sm border-collapse\\">\\n  <thead>\\n    <tr class=\\"bg-gray-100\\">\\n      <th class=\\"p-3 text-left font-semibold text-gray-900 border\\">파라미터</th>\\n      <th class=\\"p-3 text-left font-semibold text-gray-900 border\\">입문급</th>\\n      <th class=\\"p-3 text-left font-semibold text-gray-900 border\\">프리미엄</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr><td class=\\"p-3 border\\">실 밀도</td><td class=\\"p-3 border\\">제곱인치당 1개</td><td class=\\"p-3 border\\">제곱인치당 2개</td></tr>\\n    <tr><td class=\\"p-3 border\\">기저 직물</td><td class=\\"p-3 border\\">1,100 DTEX</td><td class=\\"p-3 border\\">1,680 DTEX</td></tr>\\n    <tr><td class=\\"p-3 border\\">최대 압력</td><td class=\\"p-3 border\\">12 – 15 PSI</td><td class=\\"p-3 border\\">18 – 22 PSI</td></tr>\\n    <tr><td class=\\"p-3 border\\">PVC 두께</td><td class=\\"p-3 border\\">0.6 – 0.9 mm</td><td class=\\"p-3 border\\">1.0 – 1.2 mm</td></tr>\\n    <tr><td class=\\"p-3 border\\">레일 구조</td><td class=\\"p-3 border\\">접힘 &amp; 접착</td><td class=\\"p-3 border\\">용접 &amp; 융합 접합</td></tr>\\n  </tbody>\\n</table>\\n\\n<h2>응용 분야</h2>\\n<ul>\\n  <li><strong>SUP 보드:</strong> 두께 4\\" – 6\\", 15 – 20 PSI, 제곱인치당 실 1 – 2개</li>\\n  <li><strong>카약:</strong> 드롭스티치 바닥 + 인플레이터블 측면 챔버, 바닥 10 – 15 PSI</li>\\n  <li><strong>RIB 바닥:</strong> 경량이며 접을 수 있는 RIB 텐더를 위한 드롭스티치 바닥, 12 – 18 PSI</li>\\n  <li><strong>보트 펜더:</strong> 평면을 가진 성형 펜더를 위한 저압 드롭스티치</li>\\n</ul>\\n\\n<h2>드롭스티치 vs. 에어덱(유리섬유 또는 우드 코어)</h2>\\n<p>하드쉘 보드는 유리섬유 또는 우드 스트리거 보강이 적용된 EPS 폼 코어를 사용합니다. 더 가볍고, 더 단단하며, 반응성도 더 뛰어납니다 — 하지만 공기를 뺄 수 없습니다. 드롭스티치는 일부 강성을 완전한 휴대성과 맞바꿉니다. 대부분의 레저 사용자에게 20 PSI로 팽창된 현대식 드롭스티치 SUP는 강성 면에서 입문급 하드 보드와 구별하기 어렵습니다.</p>\\n\\n<h2>afarer의 드롭스티치 활용</h2>\\n<p>afarer는 SUP 라인업 전체에 제곱인치당 실 2개와 1.2mm PVC 외부 라미네이트를 적용한 1,680 DTEX 드롭스티치 코어를 사용합니다. 보드는 20 PSI로 정격되며, 출하 전 정격 압력의 1.5배 압력에서 24시간 압력 유지 시험을 거칩니다. 레일 밴드는 3중 레이어 융합으로 열풍 용접되며, 압력 조절 밸브는 모든 모델에 기본 사양으로 포함됩니다.</p>\\n"',
  },
  {
    f: 'src/data/pages/ko/research-drop-stitch.yaml',
    find: '드롭스티치 원리 — 인플레이션블 리지드 코어의 엔지니어링',
    rep: '드롭스티치 원리 — 인플레이터블 리지드 코어의 엔지니어링',
  },
  {
    f: 'src/data/pages/ko/research-drop-stitch.yaml',
    find: '건설 방법, 소재, 품질 지표',
    rep: '제작 방법, 소재, 품질 지표',
  },
  {
    f: 'src/data/pages/ko/rf-welding.yaml',
    find: '  <h2>이은사의 과학</h2>\n  <p>RF 용접은 고주파 전자기 에너지(일반적으로 27.12 MHz)를 사용하여 PVC 또는 Hypalon 코팅 원단 내의 귀성 분자를 활성화시어 재료 경계면에서 정확하게 열을 생성합니다. 열폰 용접나 열 Wedge 용접과 다른과, RF 용접은 진정한 분자 결합을 형성하여 용접 영역에서 두 원단 레이어가 하나의 그라진 재료로 융합되어 모재와 동등한 강도의 이은사를 만든니다.</p>\n\n  <h2>용접 장비 밀 공정 관리</h2>\n  <p>저희 용접 센터는 안된 공팅을 갖고 있습니다:</p>\n  <table>\n    <thead><tr><th>장비</th><th>출력 / 용량</th><th>욤도</th></tr></thead>\n    <tbody>\n      <tr><td>유전체 RF 프레스 1</td><td>15kW, 피라텐 2000 × 600mm</td><td>주요 종방향 이은사, 트랜쇼-튜브 이은사</td></tr>\n      <tr><td>유전체 RF 프레스 2</td><td>10kW, 피라텐 1500 × 500mm</td><td>뺑프 용접, 콘 부착, 배브 패치</td></tr>\n      <tr><td>CNC 제어 RF 용접기</td><td>8kW, XY 테이블 2500 × 1200mm</td><td>곡선 이은사, 로고/패너 각인, 정문 패치워크</td></tr>\n      <tr><td>핧웨지 자동 용접기</td><td>가변 온도, 최대 1.2m/min</td><td>Hypalon/CSM 소재 대치 방법</td></tr>\n    </tbody>\n  </table>\n  <p>모든 RF 프레스에는 폜루프 온도 밀 액력 모니터링이 장치되언시다. 용접 매개별수(출력, 가압 시간, 띀갑 시간, 전근 압력)는 소재 유형별로 프로그램되고 완전한 추적 가능성을 위해 제작 실행 시스템(MES)에 기록됩니다.</p>\n\n  <h2>용접 품질 테스트 — 모든 이은사, 모든 보트</h2>\n  <p>용접 무이다리성은 4개 항목의 필수 테스트 프로톤을 통해 검증됩니다:</p>\n  <ol>\n    <li><strong>육안 검사</strong> — 이은사 100%를 대상으로 열-through, 불러운 정렬, 오얼 또는 불완절 융합 여부를 육안 검사합니다. 불합겱 기준: 선형 미터다이 0.5%.</li>\n    <li><strong>볼창 테스트 ()</strong> — 각 생사 배치와 매니어 용접된 시퍼에서 25mm 폴의 스트립을 절닌합니다. 최소 볼창력: PVC 1100 dtex의 경우 120N/25mm.</li>\n    <li><strong>골기 위유 테스트</strong> — 완성된 모든 체버에 작동 압력의 1.5븼를 가하여 30분간 위유합니다. 압력 강마는 2%를 초과할 수 없습니다.</li>\n    <li><strong>열 사이클 테스트</strong> — 시퍼를 -20 °C에서 +60 °C까지 50회 순환한 후 다시 볼창 테스트를 실시합니다. 허용 강도 저하: &lt; 10%.</li>\n  </ol>\n\n  <div class="not-prose my-10 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">\n    <p class="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">볼창 강도 비교 — RF vs 열폰 용접 (PVC 1100 dtex)</p>\n    <div class="space-y-3">\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">RF 용접</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-blue-600 rounded" style="width:92%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">184 N</span>\n      </div>\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">열폰</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-gray-400 rounded" style="width:65%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">130 N</span>\n      </div>\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">최소 기준</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-green-500 rounded" style="width:48%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">96 N</span>\n      </div>\n    </div>\n    <p class="text-xs text-gray-400 mt-2">RF 용접은 모재 강도의 90~95%를 일관하게 닱성하며, 이는 최소 기준을 많이 상회합니다.</p>\n  </div>\n\n  <h2>전문 기술</h2>\n  <p>저희 용접팀은 코팅 직물의 유전체 용접 분야에서 11년의 경험을 보유하는 선임 공정 엔지니어가 이러고 있습니다. 각 오프레에서는 생사 이은사 작업에 참여하기 전 6개월간의 사내 인증 프로그램을 이수해야 합니다. 연렴 재인증이 필요하며, 내부 등금 기준(볼창 강도 ≥ 160 N/25 mm)에 따른 실용 용접 테스트가 포함됩니다.</p>\n\n  <h2>고유한 요구사항을 위한 맞주형 용접 \\uC194루션</h2>\n  <p>모든 욤도에 하나의 용접 사양이 맞지 않는다는 것을 이해합니다. 저희 RF 용접 센터는 특수 요구사항이 있는 고객을 위해 맞주형 이은사 구성을 정기적으로 개발합니다:</p>\n  <ul>\n    <li><strong>다층 강화 패치</strong> — 스크래프 스트레이크 밀 bow 콘과 같은 고만모 영역을 위해 유연성을 절해하지 않고서 내만모 외층을 통합하는 다-pass RF 용접을 개발합니다.</li>\n    <li><strong>전도성 또는 RF 차다 이은사</strong> — 전자기 차파가 필요한 그래들 또는 감시 선박을 위해 이은사 적치 내에 전도성 메실 레이어를 용접합니다.</li>\n    <li><strong>색상 변화 패너 용접</strong> — 이중 색상 원단 패너(예: 주황색 선체 + 회색 상판)을 눌어엔 보이는 이은사 없이 레들 미근을 유지하기 위해 숨김 걸치 용접으로 결합합니다.</li>\n  </ul>\n\n  <h2>귀사에 대한 유의 약속</h2>\n  <p>저희가 누키하는 모든 보트에는 용접 품질 보지가 포함됩니다: 보지 기간 내 정상 사용 중 이은사 결합이 발생하면 당의 체버를 무상으로 수리 또는 교체하고, 재발 방진을 위한 그만보원 원인 조차를 실시합니다. 이는 단수람 보지가 라 다 실제 운영 데이터에 기반하기 한 지속적 개선에 대한 약속입니다.</p>\n  <p>{SITE.name}를 선택하시면 단수람 용접된 것이 라 다 설계되고, 테스트되고, 문서화된 이은사를 선택하시는 것입니다. 이것은 단수람 뜨더나는 보트와 실제로 성능을 발화하는 보트의 차이입니다.</p>',
    rep: '  <h2>이음새의 과학</h2>\n  <p>RF 용접은 고주파 전자기 에너지(일반적으로 27.12 MHz)를 사용하여 PVC 또는 Hypalon 코팅 원단 내부의 극성 분자를 활성화시켜 재료 접합면에서 정확하게 열을 발생시킵니다. 열풍 용접이나 핫웨지 용접과 달리 RF 용접은 진정한 분자 결합을 형성합니다 — 두 원단 레이어가 용접 영역에서 하나의 균질한 재료로 융합되어 모재와 동등한 강도의 이음새를 만들어냅니다.</p>\n\n  <h2>용접 장비 및 공정 관리</h2>\n  <p>저희 용접 센터는 다음 장비를 갖추고 있습니다:</p>\n  <table>\n    <thead><tr><th>장비</th><th>출력 / 용량</th><th>적용 분야</th></tr></thead>\n    <tbody>\n      <tr><td>유전체 RF 프레스 1</td><td>15kW, 플래튼 2000 × 600mm</td><td>주요 종방향 이음새, 트랜섬-튜브 접합</td></tr>\n      <tr><td>유전체 RF 프레스 2</td><td>10kW, 플래튼 1500 × 500mm</td><td>배플 용접, 콘 부착, 밸브 패치</td></tr>\n      <tr><td>CNC 제어 RF 용접기</td><td>8kW, XY 테이블 2500 × 1200mm</td><td>곡선 이음새, 로고/패널 엠보싱, 정밀 패치워크</td></tr>\n      <tr><td>핫웨지 자동 용접기</td><td>가변 온도, 최대 1.2m/min</td><td>Hypalon/CSM 소재용 대체 공법</td></tr>\n    </tbody>\n  </table>\n  <p>모든 RF 프레스에는 폐쇄 루프 온도 및 압력 모니터링이 장착되어 있습니다. 용접 매개변수(출력, 가압 시간, 냉각 시간, 전극 압력)는 소재 유형별로 프로그래밍되며, 완전한 추적성을 위해 제조 실행 시스템(MES)에 기록됩니다.</p>\n\n  <h2>용접 품질 테스트 — 모든 이음새, 모든 보트</h2>\n  <p>용접 무결성은 필수 4종 테스트 프로토콜을 통해 검증됩니다:</p>\n  <ol>\n    <li><strong>육안 검사</strong> — 이음새 100%를 대상으로 관통 그을음, 정렬 불량, 오염 또는 불완전 융합 여부를 육안 검사합니다. 불합격 기준: 선형 미터당 0.5%.</li>\n    <li><strong>박리 테스트</strong> — 각 생산 배치마다 용접된 테스트 쿠폰에서 25mm 폭의 스트립을 절단합니다. 최소 박리력: PVC 1100 dtex의 경우 120N/25mm.</li>\n    <li><strong>공기 유지 테스트</strong> — 완성된 모든 챔버를 작동 압력의 1.5배로 가압하여 30분간 유지합니다. 압력 강하는 2%를 초과할 수 없습니다.</li>\n    <li><strong>열 사이클 테스트</strong> — 샘플 쿠폰을 -20 °C에서 +60 °C까지 50회 순환한 후 다시 박리 테스트를 실시합니다. 허용 강도 저하: &lt; 10%.</li>\n  </ol>\n\n  <div class="not-prose my-10 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">\n    <p class="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">박리 강도 비교 — RF vs 열풍 용접 (PVC 1100 dtex)</p>\n    <div class="space-y-3">\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">RF 용접</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-blue-600 rounded" style="width:92%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">184 N</span>\n      </div>\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">열풍</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-gray-400 rounded" style="width:65%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">130 N</span>\n      </div>\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">최소 기준</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-green-500 rounded" style="width:48%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">96 N</span>\n      </div>\n    </div>\n    <p class="text-xs text-gray-400 mt-2">RF 용접은 모재 강도의 90~95%를 일관되게 달성하며, 최소 기준을 크게 상회합니다.</p>\n  </div>\n\n  <h2>전문 기술</h2>\n  <p>저희 용접팀은 코팅 직물의 유전체 용접 분야에서 11년의 경험을 보유한 선임 공정 엔지니어가 이끌고 있습니다. 각 용접 작업자는 생산 이음새 작업에 참여하기 전에 6개월 과정의 사내 인증 프로그램을 이수해야 합니다. 연간 재인증이 필요하며, 사내 A등급 기준(박리 강도 ≥ 160 N/25 mm)에 따라 평가되는 실기 용접 테스트가 포함됩니다.</p>\n\n  <h2>고유한 요구사항을 위한 맞춤형 용접 솔루션</h2>\n  <p>모든 용도에 하나의 용접 사양이 맞지 않는다는 것을 잘 알고 있습니다. 저희 RF 용접 센터는 특수 요구사항이 있는 고객을 위해 맞춤형 이음새 구성을 정기적으로 개발합니다:</p>\n  <ul>\n    <li><strong>다층 강화 패치</strong> — 러빙 스트레이크 및 선수 콘과 같은 마모가 심한 영역을 위해, 유연성을 저해하지 않으면서 내마모성 외층을 통합하는 멀티패스 RF 용접을 개발합니다.</li>\n    <li><strong>전도성 또는 RF 차폐 이음새</strong> — 전자기 차폐가 필요한 군용 또는 감시 선박을 위해 이음새 적층 내에 전도성 메시 레이어를 용접합니다.</li>\n    <li><strong>색상 변화 패널 용접</strong> — 이중 색상 원단 패널(예: 주황색 선체 + 회색 상판)을 숨겨진 오버랩으로 용접하여 보이는 접합선 없이 브랜드 미관을 유지합니다.</li>\n  </ul>\n\n  <h2>고객에 대한 저희의 약속</h2>\n  <p>저희가 출하하는 모든 보트에는 용접 품질 보증이 포함됩니다: 보증 기간 내 정상 사용 중 이음새 결함이 발생하면 해당 챔버를 무상으로 수리 또는 교체하며, 재발 방지를 위해 근본 원인 조사를 실시합니다. 이는 단순한 보증이 아니라 실제 운영 데이터에 기반한 지속적 개선에 대한 약속입니다.</p>\n  <p>{SITE.name}를 선택하시는 것은 단순히 용접된 것이 아니라 설계되고, 테스트되고, 문서화된 이음새를 선택하시는 것입니다. 이것이 그저 떠 있는 보트와 진정으로 성능을 발휘하는 보트의 차이입니다.</p>',
  },
  {
    f: 'src/data/pages/ko/rf-welding.yaml',
    find: '인플레이터블 보트의 국제 표준 — 요건을 충족하거나 초과하도록 인증됩니다',
    rep: '인플레이터블 보트의 국제 표준인 ISO 6185의 요건을 충족하거나 초과하도록 인증됩니다',
  },
  {
    f: 'src/data/pages/ko/rf-welding.yaml',
    find: '밀착 테스트, 공기 유지 검증',
    rep: '박리 테스트, 공기 유지 검증',
  },
  {
    f: 'src/data/pages/ko/research-sup-thickness.yaml',
    find: 'content_html: "\\uFEFF<h2>',
    rep: 'content_html: "<h2>',
  },
  {
    f: 'src/data/pages/ko/research-sup-thickness.yaml',
    find: '20 PSI 원격 압력 등급',
    rep: '20 PSI 정격 압력',
  },
  {
    f: 'src/data/pages/rf-welding.yaml',
    find: 'requirements of — the international standard',
    rep: 'requirements of ISO 6185 — the international standard',
  },
  {
    f: 'src/data/pages/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min</span>',
  },
  {
    f: 'src/data/pages/ar/rf-welding.yaml',
    find: 'لتلبية متطلبات أو تجاوزها — المعيار الدولي',
    rep: 'لتلبية متطلبات ISO 6185 أو تجاوزها — المعيار الدولي',
  },
  {
    f: 'src/data/pages/cs/rf-welding.yaml',
    find: 'požadavky — mezinárodního standardu',
    rep: 'požadavky ISO 6185 — mezinárodního standardu',
  },
  {
    f: 'src/data/pages/cs/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/da/rf-welding.yaml',
    find: 'kravene i – den internationale standard',
    rep: 'kravene i ISO 6185 – den internationale standard',
  },
  {
    f: 'src/data/pages/da/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/el/rf-welding.yaml',
    find: 'απαιτήσεις του — του',
    rep: 'απαιτήσεις του ISO 6185 — του',
  },
  {
    f: 'src/data/pages/es/rf-welding.yaml',
    find: 'requisitos de — la norma internacional',
    rep: 'requisitos de ISO 6185 — la norma internacional',
  },
  {
    f: 'src/data/pages/es/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'vaatimukset — kansainvälinen standardi',
    rep: 'vaatimukset — kansainvälinen ISO 6185 -standardi',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/no/rf-welding.yaml',
    find: 'kravene til — den internasjonale standarden',
    rep: 'kravene til ISO 6185 — den internasjonale standarden',
  },
  {
    f: 'src/data/pages/no/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/pt/rf-welding.yaml',
    find: 'requisitos da — norma internacional',
    rep: 'requisitos da ISO 6185 — norma internacional',
  },
  {
    f: 'src/data/pages/ro/rf-welding.yaml',
    find: 'cerințele — standardului',
    rep: 'cerințele ISO 6185 — standardului',
  },
  {
    f: 'src/data/pages/ro/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'kraven i — den internationella standarden',
    rep: 'kraven i ISO 6185 — den internationella standarden',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'uppfylla eller överträda kraven',
    rep: 'uppfylla eller överträffa kraven',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'kan compromise hela en kamma',
    rep: 'kan äventyra en hel kammare',
  },
  {
    f: 'src/data/pages/th/rf-welding.yaml',
    find: 'ข้อกำหนดของ — มาตรฐานสากล',
    rep: 'ข้อกำหนดของ ISO 6185 — มาตรฐานสากล',
  },
  {
    f: 'src/data/pages/tr/rf-welding.yaml',
    find: 'uluslararası standart olan — gereksinimlerini',
    rep: 'uluslararası standart olan ISO 6185 gereksinimlerini',
  },
  {
    f: 'src/data/pages/de/rf-welding.yaml',
    find: 'der internationalen Norm für aufblasbare',
    rep: 'der internationalen Norm ISO 6185 für aufblasbare',
  },
  {
    f: 'src/data/pages/de/rf-welding.yaml',
    find: '> Min.</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/it/rf-welding.yaml',
    find: 'internazionale per imbarcazioni gonfiabili',
    rep: 'internazionale ISO 6185 per imbarcazioni gonfiabili',
  },
  {
    f: 'src/data/pages/ja/rf-welding.yaml',
    find: 'インフレータブルボートの国際規格の要件を満たすか',
    rep: 'インフレータブルボートの国際規格 ISO 6185 の要件を満たすか',
  },
  {
    f: 'src/data/pages/nl/rf-welding.yaml',
    find: 'van de internationale norm voor opblaasbare vaartuigen',
    rep: 'van de internationale norm ISO 6185 voor opblaasbare vaartuigen',
  },
  {
    f: 'src/data/pages/nl/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/pl/rf-welding.yaml',
    find: 'wymagania międzynarodowego standardu dla sprzętu pneumatycznego',
    rep: 'wymagania międzynarodowego standardu ISO 6185 dla sprzętu pneumatycznego',
  },
  {
    f: 'src/data/pages/pl/rf-welding.yaml',
    find: '> min</span>',
    rep: '>Min.</span>',
  },
  {
    f: 'src/data/pages/ru/rf-welding.yaml',
    find: 'в соответствии с международными стандартами для надувных судов',
    rep: 'в соответствии с международными стандартами ISO 6185 для надувных судов',
  },
];
