import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: '호주 패들 클럽 협회',
    product: '클럽용 플릿 — SUP + 안전 장비',
    industry: '레크리에이션 / 교육',
    challenge:
      '15개 클럽 협회가 내구성 높고 초보자에게 적합한 SUP 보드, CE 인증 구명조끼, 클럽별 비용을 줄이는 통합 조달 모델로 회원 클럽 장비를 표준화할 필요가 있었습니다.',
    solution:
      '초급·중급·강사용 3단계 클럽 함대를 표준화했습니다. 클럽 로고가 들어간 클럽 컬러 데크 그래픽을 디자인하고, 분기별 클럽 단위 배송을 동반한 중앙 창고 관리를 도입했습니다.',
    result: '15개 클럽에 350대. 통합 구매를 통한 비용 28% 절감. 장비 품질에 대한 회원 만족도 92%.',
    outcomeMetrics: [
      {
        label: '장비 지원 클럽',
        value: '15',
      },
      {
        label: '납품 대수',
        value: '350',
      },
      {
        label: '비용 절감',
        value: '28%',
      },
      {
        label: '회원 만족도',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: '호주 디스트리뷰터',
    product: 'CE 인증 SUP 라인업',
    industry: '마린 / 소매',
    challenge:
      '호주 디스트리뷰터가 커스텀 데크 컬러, 업그레이드 PVC 옵션, 호주 표준 AS 1799 규격 준수를 갖춘 CE 인증 SUP 라인업을 요구했습니다.',
    solution:
      '4가지 색상의 양산 전 샘플을 제작하고, 군용급 PVC를 조달했으며, 제3자 AS 1799 적합성 시험을 주관했습니다.',
    result: '3개 모델 SUP 라인을 호주·뉴질랜드 시장에 출시. 이후 12개 매장의 리테일 체인 계약 체결.',
    outcomeMetrics: [
      {
        label: '출시 모델',
        value: '3',
      },
      {
        label: '리테일 매장',
        value: '12',
      },
      {
        label: '인증',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: '캐나다 아웃도어 리테일 체인',
    product: '자체 브랜드 SUP + 액세서리 라인',
    industry: '소매',
    challenge:
      '25개 매장의 캐나다 아웃도어 리테일러가 불어·영어 이중 언어 패키지, 한겨울 소재 사양, 캐나다 선박 규정 준수를 갖춘 독점 자체 브랜드 SUP 라인업을 필요로 했습니다.',
    solution:
      '-15°C 등급의 콜드플렉스 PVC 컴파운드로 4개 SUP 모델을 개발했습니다. 캐나다 법규 표기가 있는 이중 언어 소매 패키지를 제작하고, 진열 스탠드와 직원 교육 자료를 제공했습니다.',
    result: '25개 매장에서 독점 라인 출시. 첫 시즌 3,800대 판매. 리테일러는 SKU 확대와 함께 3년 계약을 갱신.',
    outcomeMetrics: [
      {
        label: '매장 수',
        value: '25',
      },
      {
        label: '첫 시즌 판매 대수',
        value: '3,800',
      },
      {
        label: '계약',
        value: '3년 갱신',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: '카리브해 프리미엄 리조트 그룹',
    product: '리조트용 플릿 — SUP',
    industry: '호스피탈리티 / 관광',
    challenge:
      '5개 리조트 그룹이 일관된 브랜딩, 열대의 강한 햇빛에 견디는 UV 내구 소재, 5년 교체 계획을 갖춘 렌털용 SUP 보드 플릿을 필요로 했습니다.',
    solution:
      'UV 안정화 PVC, 리조트 브랜드 데크 그래픽, 단계적 납품 일정을 갖춘 맞춤 3모델 SUP 함대 패키지를 설계했습니다. 리조트별 직원 교육과 전용 예비 부품 키트를 제공했습니다.',
    result: '5개 리조트에 180대 납품. 신규 2개 시설 반복 발주. 기존 공급업체 대비 보드당 비용 40% 절감.',
    outcomeMetrics: [
      {
        label: '납품 대수',
        value: '180',
      },
      {
        label: '리조트 수',
        value: '5',
      },
      {
        label: '비용 절감',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: '연간 보드 교체 비용',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: '함대 가동 중지(일/년)',
        before: '45',
        after: '8',
      },
      {
        label: '고객 만족도',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: '글로벌 테크놀로지 기업',
    product: '기업 웰니스 — SUP 플릿',
    industry: '기업 / 웰니스',
    challenge:
      'Fortune 500 테크 기업이 호숫가에 위치한 글로벌 4개 캠퍼스에서 직원용 워터 웰니스 프로그램을 위해 기업 브랜딩과 보관 솔루션을 갖춘 SUP 60척을 필요로 했습니다.',
    solution:
      '기업 로고 데크 그래픽을 적용한 안정적인 올라운드 SUP 함대를 공급했습니다. 내후성 야외 보관 랙을 디자인하고, afarer 교육 프로그램으로 사내 강사 12명을 인증했습니다.',
    result:
      '4개 캠퍼스에서 프로그램 시작. 첫 해 직원 참여 2,400회 이상. 직원 만족도 94%. 기업 지속가능성 보고서에 소개.',
    outcomeMetrics: [
      {
        label: '캠퍼스',
        value: '4',
      },
      {
        label: '참여자',
        value: '2,400+',
      },
      {
        label: '만족도',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: '카리브해 크루즈 라인',
    product: '선상 액티비티 플릿 — SUP',
    industry: '호스피탈리티 / 크루즈',
    challenge:
      '대형 크루즈 라인이 프라이빗 아일랜드 항차를 운항하는 7척에서 SUP 쇼어 엑스커전을 제공하기 위해 선상 컴팩트 보관, 신속한 공기 주입·배출, 플릿 전체 브랜드 일관성이 필요했습니다.',
    solution:
      '급속 송배기 밸브 시스템, 컴팩트 백팩 보관, 선박 브랜드 데크 그래픽을 갖춘 크루즈 전용 SUP 패키지를 개발했습니다. 전담 육상팀 교육과 3개 섬 항구의 교체 부품 로커를 제공했습니다.',
    result:
      '7척 크루즈선에서 프로그램 시작. 첫 시즌 고객 참여 15,000회 이상. 익스커션 평균 평점 4.6★. 2년차 3척 추가로 확대.',
    outcomeMetrics: [
      {
        label: '크루즈선',
        value: '7',
      },
      {
        label: '고객 참여',
        value: '15,000+',
      },
      {
        label: '평점',
        value: '4.6★',
      },
      {
        label: '2년차 확대',
        value: '+3척',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: '유럽 DTC 워터스포츠 브랜드',
    product: '브랜드 SUP + 액세서리 라인',
    industry: '이커머스 / 소매',
    challenge:
      '빠르게 성장하는 DTC 워터스포츠 브랜드가 DHL/FedEx 직배송 시 파손되지 않는 이커머스용 프리미엄 패키지의 SUP 풀세트(보드·펌프·패들·리시·백)를 필요로 했습니다.',
    solution:
      '맞춤 EPS 코어 성형과 더 높은 압력을 위한 자체 드롭스티치 기술을 적용한 공동 브랜드 제품 라인을 개발하고, 인서트 완충재가 있는 매장용 이중벽 골판지 상자를 채택했습니다. QR 코드 기반 정품 인증 및 보증 등록을 통합했습니다.',
    result:
      '3개 모델 SUP 라인을 75일 만에 출시. 첫 12개월간 15,000대 이상. 2,000건 이상 리뷰에서 평균 평점 4.8★. 운송 중 파손률 0.3%.',
    outcomeMetrics: [
      {
        label: '모델',
        value: '3',
      },
      {
        label: '대수',
        value: '15,000+',
      },
      {
        label: '평균 평점',
        value: '4.8★',
      },
      {
        label: '파손률',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: '유럽 호숫가 리조트·렌털 운영사',
    product: '렌털 플릿 — SUP·구명조끼·액세서리',
    industry: '렌탈 / 관광',
    challenge:
      '6개 렌털 지점을 둔 호숫가 리조트 운영사가 빠른 건조 시스템, 손상 방지 구조, 예측 가능한 다년간 교체 일정을 갖춘 고내구성 렌털 SUP 플릿을 필요로 했습니다.',
    solution:
      '보강 레일 밴드, 속건 EVA 데크, UV 안정화 PVC를 갖춘 상업용 렌탈 SUP를 공급했습니다. 색상 구분 마모 추적 시스템과 연간 상태 보고서를 개발했습니다.',
    result: '6개 거점에 200척 배치. 연간 유지보수 비용 55% 절감. 장비 수명을 2년에서 4년으로 연장.',
    outcomeMetrics: [
      {
        label: '렌탈 거점',
        value: '6',
      },
      {
        label: '배치 SUP',
        value: '200',
      },
      {
        label: '유지보수 비용',
        value: '-55%',
      },
      {
        label: '수명',
        value: '4년',
      },
    ],
    beforeAfter: [
      {
        label: '평균 보드 수명',
        before: '2년',
        after: '4년',
      },
      {
        label: '보드당 연간 유지보수 비용',
        before: '$85',
        after: '$38',
      },
      {
        label: '보드당 시즌 렌탈 매출',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: '플로리다 낚시 차터 회사',
    product: '커스텀 피싱 SUP 플릿',
    industry: '낚시 / 차터',
    challenge:
      '플로리다 낚시 차터 운영사가 SUP 낚시 투어를 추가하기 위해 쿨러 마운트, 로드 홀더 레일, 어군탐지기 트랜스듀서 호환을 갖춘 안정적인 플랫폼을 필요로 했습니다.',
    solution:
      '안정적인 기존 SUP 플랫폼에 로드 홀더 4개, 탈착식 쿨러 마운트 시스템, 방수 트랜듀서 스커퍼 마운트를 맞춤 적용했습니다. 함대 가격과 계절 교체 프로그램을 제공했습니다.',
    result:
      'SUP 낚시 투어를 새 수익원으로 출시. 기존 차터 고객의 45%가 SUP 투어 예약. 함대를 2시즌 만에 8척에서 20척으로 확대.',
    outcomeMetrics: [
      {
        label: '초기 함대',
        value: '8',
      },
      {
        label: '2년차 함대',
        value: '20',
      },
      {
        label: '차터 교차판매',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: '국제 인도주의 기구',
    product: '구조·구호 인플레이터블 보트',
    industry: 'NGO / 인도적 지원',
    challenge:
      '국제 인도주의 기구가 동남아시아 홍수 구조 작업용으로 헬리콥터 운반이 가능한 경량성, 잔해에 강한 내구성, 전문 도구 없는 현장 수리가 가능한 튼튼한 인플레이터블 보트 50척을 필요로 했습니다.',
    solution:
      '셀프 베일링 바닥, 다중 챔버 이중화, 그랩라인 둘레를 갖춘 보강형 인플래터블 보트 50척을 제작했습니다. 그림 설명서가 있는 현장 수리 키트를 공급하고 현지 기술자 20명을 교육했습니다.',
    result: '홍수 취약 지역 3곳에 보트 50척 배치. 첫 6개월간 12건의 주요 구조 작업에 투입. 장비 고장 0건 보고.',
    outcomeMetrics: [
      {
        label: '배치 보트',
        value: '50',
      },
      {
        label: '구조 작업',
        value: '12',
      },
      {
        label: '고장률',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: '일본 라이프스타일 브랜드',
    product: '공동 브랜드 SUP 라인',
    industry: 'OEM / 브랜드',
    challenge:
      '프리미엄 일본 라이프스타일 브랜드가 미니멀 디자인, 친환경 소재, 깐깐한 일본 소비자에 어울리는 정밀 제조를 강조한 공동 브랜드 SUP 라인으로 워터스포츠 시장 진출을 추구했습니다.',
    solution:
      '더 슬림한 레일 프로파일의 맞춤 금형을 제작했습니다. FSC 인증 대나무 데크 인레이와 재활용 PVC 옵션을 조달하고, 일본어 QR 코드 케어 가이드가 있는 프리미엄 언박싱 경험을 개발했습니다.',
    result:
      '3개 모델 공동 브랜드 라인을 도쿄 마린쇼에서 출시. 일반 공개 전 2,800대 선판매. 일본 라이프스타일 매체 5곳에 소개.',
    outcomeMetrics: [
      {
        label: '모델',
        value: '3',
      },
      {
        label: '선판매 대수',
        value: '2,800',
      },
      {
        label: '미디어 소개',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: '미국 호숫가 주거 커뮤니티',
    product: '커뮤니티 편의 시설 — SUP 플릿',
    industry: '부동산 / 커뮤니티',
    challenge:
      '고급 호숫가 주거 커뮤니티가 입주민 편의 시설로 SUP 보드를 제공하기 위해 저유지보수 플릿, 호숫가 안전 보관소, 200세대 이상 셀프 대여 시스템을 필요로 했습니다.',
    solution:
      '내후성 보관 로커 시스템이 있는 상업용 SUP 15척을 공급했습니다. 디지털 면책 동의 연동 QR 코드 셀프 체크아웃을 디자인하고 계절 정비 서비스를 제공했습니다.',
    result:
      '첫 시즌에 85% 가구가 SUP 어메니티 이용. 호수 전망 구역 자산 가치 7% 상승. 커뮤니티가 “Best Lakeside Living” 상 수상.',
    outcomeMetrics: [
      {
        label: 'SUP',
        value: '15',
      },
      {
        label: '가구 이용률',
        value: '85%',
      },
      {
        label: '자산 가치 영향',
        value: '+7%',
      },
      {
        label: '수상',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: '지중해 비치 리조트 체인',
    product: '리조트용 플릿 — SUP + 액세서리',
    industry: '호스피탈리티 / 관광',
    challenge:
      '3개 지중해 리조트 체인이 해변 호텔 전체에 통일된 워터 액티비티 프로그램을 구축하기 위해 커스텀 브랜딩과 다국어 안전 카드를 갖춘 SUP 120척을 필요로 했습니다.',
    solution:
      '선박용 내자외선 PVC, 호텔 브랜드 데크 그래픽 3색 배색, 색상 구분 정비 태그 시스템을 갖춘 리조트 전용 함대 패키지를 설계했습니다. 직원 교육과 분기별 예비 부품 보충이 포함되었습니다.',
    result: '3개 리조트에 함대 배치. 첫 시즌 수상 활동 매출 210% 증가. 어메니티 고객 만족도가 4.1에서 4.7/5로 상승.',
    outcomeMetrics: [
      {
        label: '납품 SUP',
        value: '120',
      },
      {
        label: '리조트 수',
        value: '3',
      },
      {
        label: '매출 증가',
        value: '210%',
      },
      {
        label: '고객 평점',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: '수상 활동 매출(연간)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: '장비 교체율',
        before: '35%',
        after: '8%',
      },
      {
        label: '고객 만족도(어메니티)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: '중동 워터스포츠 디스트리뷰터',
    product: '전체 제품 라인 — SUP·보트·액세서리',
    industry: '유통 / 마린',
    challenge:
      'GCC 기반 디스트리뷰터가 걸프 6개국에서 Afarer 전체 제품 라인의 독점 판매권과 아랍어 패키지, 내열 소재 사양, 샤리아 준수 보증 조건을 원했습니다.',
    solution:
      '독점 유통 계약을 체결했습니다. 아랍어 패키지와 마케팅 자료를 개발하고, 50°C 주변 온도에서 소재 사양을 검증했으며, 지역 규정에 맞게 보증 조건을 조정했습니다.',
    result: '첫 18개월간 12컨테이너 발주. 15개 딜러 및 하위 유통망 구축. GCC 인플래터블 SUP 세그먼트 추정 점유율 18%.',
    outcomeMetrics: [
      {
        label: '컨테이너',
        value: '12',
      },
      {
        label: '딜러망',
        value: '15',
      },
      {
        label: '시장 점유율',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: '유럽 아웃도어 리테일러',
    product: '자체 브랜드 SUP 라인',
    industry: '소매',
    challenge:
      '유럽 아웃도어 리테일러는 고유한 데크 그래픽, 친환경 PVC, 매장 판매 대응 패키지를 갖춘 자체 브랜드 SUP 라인을 60일 이내 납품 조건으로 필요로 했습니다.',
    solution:
      '맞춤 디지털 인쇄 파일을 개발하고 REACH 규격 PVC를 조달했으며, 디자인 팀을 칭다오 공장에 상주시켜 샘플링을 3회에서 1회로 단축했습니다.',
    result: '서명된 PO부터 FOB까지 55일. 4개 SKU에 걸쳐 2,400대. 첫 컨테이너 도착 전에 반복 발주.',
    outcomeMetrics: [
      {
        label: '리드 타임',
        value: '55일',
      },
      {
        label: '출하 대수',
        value: '2,400',
      },
      {
        label: 'SKU 수',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: '동남아시아 해양 기관',
    product: '순찰·구조 SUP 플릿',
    industry: '정부 / 해양 안보',
    challenge:
      '정부 해양 기관이 난연성 Hypalon 원단, 통신 장비 마운트, SOLAS 제III장 구조정 기준 준수를 갖춘 순찰·구조용 SUP 20척을 필요로 했습니다.',
    solution:
      'CSM Hypalon 튜브, 고강도 D링, 사전 장착 항해등 패키지를 갖춘 20척의 SUP를 제작했습니다. 공장 검사팀이 해상 시운전에 입회했고 SOLAS 서류 패키지 전체를 제공했습니다.',
    result: '계약을 4개월 만에 납품. 함대는 3개 지역 기지에서 국경 순찰, 수색 구조, 재난 대응에 배치.',
    outcomeMetrics: [
      {
        label: '순찰 SUP',
        value: '20',
      },
      {
        label: '납품',
        value: '4개월',
      },
      {
        label: '기지 수',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: '미국 워터스포츠 스타트업',
    product: '커스텀 SUP 라인',
    industry: '스타트업 / 소매',
    challenge:
      '미국 워터스포츠 스타트업이 커스텀 데크 디자인, 공동 브랜드 패키지, 리테일 입점용 BSCI 인증을 갖춘 고성능 Drop-Stitch SUP를 필요로 했습니다.',
    solution:
      '기존 SUP 금형을 수정된 로커 프로파일로 적용하고, 공동 브랜드 패키지 아트워크를 개발하며, BSCI 심사 서류 전체를 제공했습니다.',
    result: '미국 주요 아웃도어 체인 3곳에 입점 성공. 첫 해 5,000대 이상 판매, 판매율 98%.',
    outcomeMetrics: [
      {
        label: '리테일 체인',
        value: '3',
      },
      {
        label: '첫 해 판매 대수',
        value: '5,000+',
      },
      {
        label: '판매율',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: '영국 대학 스포츠 연합',
    product: '학생 클럽 플릿 — SUP + 안전 장비',
    industry: '교육',
    challenge:
      '활발한 워터스포츠 클럽을 보유한 영국 대학이 한정된 캠퍼스 공간 보관, 모든 실력의 학생 사용, BUCS 대회 기준 준수가 가능한 최신 인플레이터블 SUP로 노후 플릿을 교체할 필요가 있었습니다.',
    solution:
      '컴팩트 보관 백팩이 있는 올라운드 SUP 25척, 경기 훈련용 투어링 SUP 10척, 안전 장비 패키지 전체를 공급했습니다. 동아리 임원 교육과 정비 워크숍을 진행했습니다.',
    result: '신입생 환영회에서 함대 공개. 동아리 회원 140% 증가. 대학이 5년 만에 처음으로 대학 간 SUP 대회를 개최.',
    outcomeMetrics: [
      {
        label: '공급 SUP',
        value: '35',
      },
      {
        label: '회원 증가율',
        value: '140%',
      },
      {
        label: '대회 개최',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: '미국 워터스포츠 장비 브랜드',
    product: '커스텀 금형 — 투어링 SUP',
    industry: 'OEM / 제조',
    challenge:
      '미국 브랜드가 14피트 투어링 형상, 어군탐지기 장착 홈, 보강 스탠딩 플랫폼, 400 lbs 하중을 갖춘 완전히 새로운 SUP 금형을 필요로 했습니다.',
    solution:
      '보강 드롭스티치 코어 밀도, 매립형 액세서리 레일 인서트, 내마모성 군용급 PVC 바닥층을 갖춘 신형 14피트 드롭스티치 금형을 설계했습니다. 금형 확정 전 3회의 시제품 제작을 거쳤습니다.',
    result:
      '신형 금형을 14주 만에 제작. 첫 생산 런에서 3,500대 생산. 제품이 Outdoor Gear Lab에서 “Best Fishing SUP 2025”로 선정.',
    outcomeMetrics: [
      {
        label: '금형 제작 기간',
        value: '14주',
      },
      {
        label: '첫 생산',
        value: '3,500대',
      },
      {
        label: '수상',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
