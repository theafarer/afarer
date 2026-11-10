import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Europos lauko prekybos mažmenininkas',
    product: 'Privačiojo prekės ženklo SUP linija',
    industry: 'Mažmeninė prekyba',
    challenge:
      'Europos lauko prekybos mažmenininkui reikėjo privačiojo prekės ženklo SUP linijos su unikalia denio grafika, ekologišku PVC ir prekybai paruošta pakuote — visa tai pristatyta per 60 dienų.',
    solution:
      'Sukūrėme tinkintus skaitmeninio spaudinio failus, parinkome REACH atitinkantį PVC ir sutrumpinome ėminių gamybą nuo 3 raundų iki 1, dizaino komandai dirbant vietoje mūsų Cingdao gamykloje.',
    result:
      '55 dienos nuo pasirašyto PO iki FOB. 2,400 vienetų 4 SKU. Pakartotinis užsakymas pateiktas iki atvykstant pirmajam konteineriui.',
    outcomeMetrics: [
      {
        label: 'Užsakymo įvykdymo terminas',
        value: '55 dienos',
      },
      {
        label: 'Vienetai',
        value: '2,400',
      },
      {
        label: 'SKU',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'JAV vandens sporto startuolis',
    product: 'Tinkinta SUP linija',
    industry: 'Startuolis / Mažmeninė prekyba',
    challenge:
      'JAV vandens sporto startuoliui reikėjo didelio našumo drop-stitch SUP lentos su tinkintu denio dizainu, bendro prekės ženklo pakuote ir BSCI sertifikatu pardavimui mažmeninės prekybos tinkluose.',
    solution:
      'Pritaikėme esamą SUP formą su pakeistu rokerio profiliu, sukūrėme bendro prekės ženklo pakuotės dizainą ir pateikėme visą BSCI audito dokumentaciją.',
    result:
      'Produktas sėkmingai pradėtas pardavinėti 3 dideliuose JAV lauko prekybos tinkluose. Daugiau nei 5,000 vienetų pirmaisiais metais su 98 % realizavimo rodikliu.',
    outcomeMetrics: [
      {
        label: 'Mažmeninės prekybos tinklai',
        value: '3',
      },
      {
        label: 'Vienetai pirmaisiais metais',
        value: '5,000+',
      },
      {
        label: 'Realizavimo rodiklis',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australijos platintojas',
    product: 'CE sertifikuota SUP gama',
    industry: 'Jūrinė / Mažmeninė prekyba',
    challenge:
      'Australijos platintojui reikėjo CE sertifikuotos SUP gamos su tinkintomis denio spalvomis, atnaujinta PVC parinktimi ir atitikties Australijos standartui AS 1799.',
    solution:
      'Pagaminome priešgamybinius ėminius su 4 spalvų variantais, parinkome karinio lygio PVC ir suderinome nepriklausomą AS 1799 atitikties testavimą.',
    result:
      '3 modelių SUP gama pristatyta į AU/NZ rinką. Vėliau sudaryta mažmeninės prekybos tinklo sutartis 12 parduotuvių.',
    outcomeMetrics: [
      {
        label: 'Paleisti modeliai',
        value: '3',
      },
      {
        label: 'Mažmeninės prekybos parduotuvės',
        value: '12',
      },
      {
        label: 'Atitiktis',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibų prabangių kurortų grupė',
    product: 'Kurorto flotilė — SUP lentos',
    industry: 'Svečių aptarnavimas / Turizmas',
    challenge:
      '5 kurortų grupei reikėjo suvienyto nuomojamos vandens sporto įrangos flotilės — SUP lentų — su vienodu prekės ženklu, UV atspariomis medžiagomis atogrąžų saulei ir 5 metų keitimo planu.',
    solution:
      'Sukūrėme tinkintą 3 modelių SUP flotilės paketą su UV stabilizuotu PVC, kurortų prekės ženklo denio grafika ir etapinio pristatymo grafiku. Suteikėme personalo mokymus ir atskirą atsarginių dalių rinkinį kiekvienam kurortui.',
    result:
      '180 vienetų pristatyta 5 kurortams. Pakartotinis užsakymas 2 naujiems objektams. 40 % mažesnė vieneto kaina lyginant su ankstesniais tiekėjais.',
    outcomeMetrics: [
      {
        label: 'Pristatyti vienetai',
        value: '180',
      },
      {
        label: 'Kurortai',
        value: '5',
      },
      {
        label: 'Sąnaudų sumažėjimas',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Metinės lentų keitimo išlaidos',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Flotilės prastova (dienos per metus)',
        before: '45',
        after: '8',
      },
      {
        label: 'Svečių pasitenkinimo įvertinimas',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Pietryčių Azijos jūrų agentūra',
    product: 'Patrulių ir gelbėjimo SUP flotilė',
    industry: 'Vyriausybinė / Jūrų saugumas',
    challenge:
      'Vyriausybinei jūrų agentūrai reikėjo 20 patrulių ir gelbėjimo SUP lentų su gerai matomais deniais, integruotais ryšio laikikliais ir CE sertifikuota konstrukcija.',
    solution:
      'Pagaminome 20 SUP lentų su karinio lygio PVC konstrukcija, itin patvariais D žiedais ir iš anksto sumontuotais navigacinių šviesų rinkiniais. Gamyklos inspektavimo komanda stebėjo jūros bandymus. Pateiktas visų atitikties dokumentų rinkinys.',
    result:
      'Sutartis įvykdyta per 4 mėnesius. Flotilė dislokuota pasienio patruliavimui, paieškos ir gelbėjimo darbams bei katastrofų atsakui 3 regioninėse bazėse.',
    outcomeMetrics: [
      {
        label: 'Patrulių SUP lentos',
        value: '20',
      },
      {
        label: 'Pristatymo laikas',
        value: '4 mėnesiai',
      },
      {
        label: 'Bazės',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Europos DTC vandens sporto prekės ženklas',
    product: 'Prekės ženklo SUP ir aksesuarų linija',
    industry: 'Elektroninė prekyba / Mažmeninė prekyba',
    challenge:
      'Greitai augančiam DTC vandens sporto prekės ženklui reikėjo pilno SUP paketo (lenta, siurblys, irklas, saugos virvutė, krepys) su prabangia pakuote, pritaikyta e. prekybos užsakymų įvykdymui — tiesiogiai vartotojui per DHL/FedEx be pažeidimų.',
    solution:
      'Sukūrėme bendro prekės ženklo produktų liniją su tinkintu EPS branduolio formavimu, nuosava drop-stitch technologija didesniam slėgiui ir prekybai paruoštomis dvigubų sienų gofruoto kartono dėžėmis su vidiniais paminkštimais. Integravome QR kodo pagrįstą autentiškumo patikrinimo ir garantijos registracijos sistemą.',
    result:
      '3 modelių SUP linija paleista per 75 dienas. Daugiau nei 15,000 vienetų per pirmuosius 12 mėnesių. 4,8★ vidutinis įvertinimas pagal 2,000+ atsiliepimų. 0,3 % transportavimo pažeidimų rodiklis.',
    outcomeMetrics: [
      {
        label: 'Modeliai',
        value: '3',
      },
      {
        label: 'Vienetai',
        value: '15,000+',
      },
      {
        label: 'Vidutinis įvertinimas',
        value: '4.8★',
      },
      {
        label: 'Pažeidimų rodiklis',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Viduržemio jūros pakrantės kurortų tinklas',
    product: 'Kurorto flotilė — SUP lentos ir aksesuarai',
    industry: 'Svečių aptarnavimas / Turizmas',
    challenge:
      '3 objektų Viduržemio jūros kurortų tinklui reikėjo paleisti vieningą vandens veiklų programą pakrantės viešbučiuose — 120 SUP lentų su tinkintu prekės ženklu, daugiakalbėmis saugos kortelėmis ir priežiūros rotacijos sistema.',
    solution:
      'Sukūrėme kurortams pritaikytą flotilės paketą su jūrinio lygio UV atspariu PVC, viešbučių prekės ženklo denio grafika 3 spalvų schemomis ir spalvomis pažymėta priežiūros žymėjimo sistema. Įtraukti personalo mokymai ir ketvirtiniai atsarginių dalių papildymai.',
    result:
      'Flotilė dislokuota 3 kurortuose. Vandens veiklų pajamos pirmąjį sezoną išaugo 210 %. Svečių pasitenkinimo patogumais įvertinimai pakilo nuo 4,1 iki 4,7/5.',
    outcomeMetrics: [
      {
        label: 'Pristatytos SUP lentos',
        value: '120',
      },
      {
        label: 'Kurortai',
        value: '3',
      },
      {
        label: 'Pajamų augimas',
        value: '210%',
      },
      {
        label: 'Svečių įvertinimas',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Vandens veiklų metinės pajamos',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Įrangos keitimo rodiklis',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Svečių pasitenkinimas (patogumai)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Australijos irklavimo klubų asociacija',
    product: 'Klubo flotilė — SUP lentos ir saugos įranga',
    industry: 'Poilsis / Švietimas',
    challenge:
      '15 klubų asociacijai reikėjo suvienodinti įrangą narių klubuose su patvariomis, pradedantiesiems tinkamomis SUP lentomis, CE sertifikuotomis gelbėjimo liemenėmis ir centralizuotu pirkimo modeliu klubų sąnaudoms sumažinti.',
    solution:
      'Suvienodinome 3 lygių klubo flotilę (pradedantysis, vidutinis, instruktorius). Sukūrėme klubų spalvų denio grafiką su klubų logotipais. Įgyvendinome centralizuotą sandėliavimą su ketvirtiniu skirstymu klubams.',
    result:
      '350 vienetų 15 klubų. 28 % sąnaudų sumažėjimas dėl sujungtų pirkimų. 92 % narių pasitenkinimas įrangos kokybe.',
    outcomeMetrics: [
      {
        label: 'Aprūpinti klubai',
        value: '15',
      },
      {
        label: 'Pristatyti vienetai',
        value: '350',
      },
      {
        label: 'Sąnaudų sumažėjimas',
        value: '28%',
      },
      {
        label: 'Narių pasitenkinimas',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Europos ežero kurortų ir nuomos operatorius',
    product: 'Nuomos flotilė — SUP lentos, gelbėjimo liemenės, aksesuarai',
    industry: 'Nuoma / Turizmas',
    challenge:
      'Ežero kurorto operatoriui su 6 nuomos stotimis reikėjo itin patvarios nuomos SUP flotilės su greito džiovinimo sistemomis, pažeidimams atsparia konstrukcija ir nuspėjamu kelerių metų keitimo grafiku.',
    solution:
      'Pateikėme komercinio lygio nuomos SUP lentas su sustiprintomis bortų juostomis, greitai džiūstančiais EVA deniais ir UV stabilizuotu PVC. Sukūrėme spalvomis pažymėtą dėvėjimosi stebėjimo sistemą su metinėmis būklės ataskaitomis.',
    result:
      '200 SUP lentų dislokuota 6 stotyse. Metinės priežiūros išlaidos sumažėjo 55 %. Įrangos eksploatavimo laikas pailgėjo nuo 2 iki 4 metų.',
    outcomeMetrics: [
      {
        label: 'Nuomos stotys',
        value: '6',
      },
      {
        label: 'Dislokuotos SUP lentos',
        value: '200',
      },
      {
        label: 'Priežiūros išlaidos',
        value: '-55%',
      },
      {
        label: 'Eksploatavimo laikas',
        value: '4 metai',
      },
    ],
    beforeAfter: [
      {
        label: 'Vidutinis lentų eksploatavimo laikas',
        before: '2 metai',
        after: '4 metai',
      },
      {
        label: 'Metinė priežiūra vienai lentai',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Nuomos pajamos vienai lentai per sezoną',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanados lauko prekybos tinklas',
    product: 'Privačiojo prekės ženklo SUP ir aksesuarų linija',
    industry: 'Mažmeninė prekyba',
    challenge:
      '25 parduotuvių Kanados lauko prekybos tinklui reikėjo išskirtinės privačiojo prekės ženklo SUP gamos su prancūzų ir anglų kalbų pakuote, šalto klimato medžiagų specifikacijomis ir atitikties Kanados laivybos taisyklėms.',
    solution:
      'Sukūrėme 4 SUP modelius su šalčiui lankstaus PVC junginiu, patvirtintu iki -15°C. Pagaminome dviejų kalbų mažmeninės prekybos pakuotę su Kanados reguliavimo žymėjimais. Pateikėme eksponavimo stovus ir personalo mokymo medžiagas.',
    result:
      'Išskirtinė linija paleista 25 parduotuvėse. 3,800 vienetų parduota pirmąjį sezoną. Mažmenininkas atnaujino 3 metų sutartį su padidintu SKU skaičiumi.',
    outcomeMetrics: [
      {
        label: 'Parduotuvės',
        value: '25',
      },
      {
        label: 'Vienetai pirmąjį sezoną',
        value: '3,800',
      },
      {
        label: 'Sutartis',
        value: '3 metų atnaujinimas',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Vidurinių Rytų vandens sporto platintojas',
    product: 'Visa produktų linija — SUP lentos ir aksesuarai',
    industry: 'Platinimas / Jūrinė',
    challenge:
      'GCC platintojas pageidavo išskirtinių teisių atstovauti visą afarer produktų liniją 6 Persijos įlankos šalyse, su tinkinta arabų kalbos pakuote, karščiui atspariomis medžiagų specifikacijomis ir šariatui atitinkančiomis garantijos sąlygomis.',
    solution:
      'Sudarėme išskirtinį platinimo susitarimą. Sukūrėme arabų kalbos pakuotę ir rinkodaros medžiagas. Patvirtinome medžiagų specifikacijas esant 50°C aplinkos temperatūrai. Prisitaikėme garantijos sąlygas regiono reikalavimams.',
    result:
      '12 konteinerių užsakymų per pirmuosius 18 mėnesių. Sukurtas 15 prekybos atstovų ir subplatintojų tinklas. Rinkos dalis vertinama 18 % GCC pripučiamų SUP segmente.',
    outcomeMetrics: [
      {
        label: 'Konteineriai',
        value: '12',
      },
      {
        label: 'Atstovų tinklas',
        value: '15',
      },
      {
        label: 'Rinkos dalis',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japonijos gyvenimo būdo prekės ženklas',
    product: 'Bendro prekės ženklo SUP linija',
    industry: 'OEM / Prekės ženklas',
    challenge:
      'Prabangus Japonijos gyvenimo būdo prekės ženklas siekė įeiti į vandens sporto rinką su bendro prekės ženklo SUP linija, akcentuojančia minimalistinį dizainą, ekologiškas medžiagas ir tikslų gaminimą, tinkantį reikliems Japonijos vartotojams.',
    solution:
      'Sukūrėme tinkintas formas su lengvesniu bortų profiliu. Parinkome FSC sertifikuotus bambuko denio intarpus ir perdirbto PVC variantus. Sukūrėme prabangų išpakavimo potyrį su japonų kalbos QR kodais pažymėtomis priežiūros instrukcijomis.',
    result:
      '3 modelių bendro prekės ženklo linija pristatyta Tokijo jūrų parodoje. 2,800 vienetų iš anksto parduota iki viešo paleidimo. Paminėta 5 Japonijos gyvenimo būdo leidiniuose.',
    outcomeMetrics: [
      {
        label: 'Modeliai',
        value: '3',
      },
      {
        label: 'Iš anksto parduoti vienetai',
        value: '2,800',
      },
      {
        label: 'Paminėjimai žiniasklaidoje',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'JAV vandens sporto įrangos prekės ženklas',
    product: 'Tinkinta forma — turistinė SUP lenta',
    industry: 'OEM / Gamyba',
    challenge:
      'JAV prekės ženklui reikėjo visiškai naujos SUP formos su 14 pėdų turistiniu kontūru, integruotais žuvų ieškiklio laikiklių kanalais, sustiprinta stovėjimo platforma ir 400 svarų keliamąja galia — sukurta žvejybos SUP rinkai.',
    solution:
      'Sukonstravome naują 14 pėdų drop-stitch formą su padidintu drop-stitch branduolio tankiu, įmontuotais aksesuarų bėgių intarpais ir karinio lygio PVC apatiniu sluoksniu atsparumui dilimui. Pagaminome 3 prototipų iteracijas iki galutinio įrangos paruošimo.',
    result:
      'Nauja forma paruošta per 14 savaičių. 3,500 vienetų pagaminta pirmoje gamybos serijoje. Produktas pripažintas „Geriausia žvejybos SUP 2025“ (Outdoor Gear Lab).',
    outcomeMetrics: [
      {
        label: 'Formos paruošimo laikas',
        value: '14 savaičių',
      },
      {
        label: 'Pirma serija',
        value: '3,500 vienetų',
      },
      {
        label: 'Apdovanojimas',
        value: 'Geriausia žvejybos SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Pasaulinė technologijų korporacija',
    product: 'Įmonės sveikatingumo programa — SUP flotilė',
    industry: 'Korporatyvinė / Sveikatingumas',
    challenge:
      'Fortune 500 technologijų bendrovė norėjo paleisti vandens sveikatingumo programą darbuotojams 4 pasaulio miesteliuose prie ežerų — reikėjo 60 SUP lentų su įmonės prekės ženklu, sandėliavimo sprendimų ir instruktorių mokymų.',
    solution:
      'Pateikėme stabilių universalių SUP lentų flotilę su įmonės logotipo denio grafika. Sukūrėme orui atsparius sandėliavimo stovus vietoje. Sertifikuoti 12 vidinių instruktorių per afarer mokymų programą.',
    result:
      'Programa paleista 4 miesteliuose. Daugiau nei 2,400 darbuotojų dalyvavimų pirmaisiais metais. 94 % darbuotojų pasitenkinimo įvertinimas. Paminėta įmonės tvarumo ataskaitoje.',
    outcomeMetrics: [
      {
        label: 'Miesteliai',
        value: '4',
      },
      {
        label: 'Dalyviai',
        value: '2,400+',
      },
      {
        label: 'Pasitenkinimas',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Jungtinės Karalystės universiteto sporto sąjunga',
    product: 'Studentų klubo flotilė — SUP lentos ir sauga',
    industry: 'Švietimas',
    challenge:
      'Jungtinės Karalystės universitetui su aktyvia vandens sporto klubo veikla reikėjo pakeisti senstančią flotilę moderniomis pripučiamomis SUP lentomis, kurias būtų galima laikyti ribotoje miestelio erdvėje, galėtų naudoti įvairaus lygio studentai ir kurios atitiktų BUCS varžybų standartus.',
    solution:
      'Pateikėme 25 universalias SUP lentas su kompaktiškais laikymo krepšiais, 10 turistinių SUP lentų varžybinėms treniruotėms ir visą saugos įrangos paketą. Suteikėme klubo vadovų mokymus ir priežiūros dirbtuves.',
    result:
      'Flotilė pristatyta pirmakursių mugėje. Klubo narių skaičius išaugo 140 %. Universitetas surengė pirmąsias tarpuniversitetines SUP varžybas per 5 metus.',
    outcomeMetrics: [
      {
        label: 'Pateiktos SUP lentos',
        value: '35',
      },
      {
        label: 'Narių augimas',
        value: '140%',
      },
      {
        label: 'Organizuotos varžybos',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karibų kruizinių linijų operatorius',
    product: 'Veiklų laive flotilė — SUP lentos',
    industry: 'Svečių aptarnavimas / Kruizai',
    challenge:
      'Didelė kruizinių linijų bendrovė norėjo siūlyti SUP kaip kranto išvykų veiklą 7 laivams, sustojantiems privačių salų uostuose. Reikėjo kompaktiško laikymo laive, greitų pripūtimo ir išleidimo ciklų bei vienodo prekės ženklo visoje flotilėje.',
    solution:
      'Sukūrėme kruizams pritaikytą SUP paketą su greito pripūtimo vožtuvų sistemomis, kompaktišku laikymu kuprinėse ir laivo prekės ženklo denio grafika. Suteikėme specialių kranto komandų mokymus ir atsarginių dalių spintas 3 salų uostuose.',
    result:
      'Programa paleista 7 laivuose. Daugiau nei 15,000 svečių dalyvavimų pirmąjį sezoną. 4,6★ vidutinis išvykų įvertinimas. Antraisiais metais išplėsta 3 papildomais laivais.',
    outcomeMetrics: [
      {
        label: 'Laivai',
        value: '7',
      },
      {
        label: 'Svečių dalyvavimai',
        value: '15,000+',
      },
      {
        label: 'Įvertinimas',
        value: '4.6★',
      },
      {
        label: 'Išplėtimas antraisiais metais',
        value: '+3 laivai',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridos žvejybos čarterių bendrovė',
    product: 'Tinkinta žvejybos SUP flotilė',
    industry: 'Žvejyba / Čarteris',
    challenge:
      'Floridos žvejybos čarterių operatorius norėjo pridėti SUP žvejybos turus prie savo paslaugų — reikėjo stabilių platformų su integruotais šaldymo dėžių laikikliais, meškerių laikiklių bėgiais ir suderinamumu su žuvų ieškiklio davikliais.',
    solution:
      'Pritaikėme esamą stabilią SUP platformą su 4 įmontuotais meškerių laikikliais, nuimama šaldymo dėžės laikiklių sistema ir vandeniui atspariu daviklio montavimo lizdu. Pateikėme flotilės kainodarą ir sezoninio keitimo programą.',
    result:
      'SUP žvejybos turai paleisti kaip naujos pajamos. 45 % esamų čarterių klientų užsisakė SUP turus. Flotilė išplėsta nuo 8 iki 20 lentų per 2 sezonus.',
    outcomeMetrics: [
      {
        label: 'Pradinė flotilė',
        value: '8',
      },
      {
        label: 'Flotilė antraisiais metais',
        value: '20',
      },
      {
        label: 'Kryžminis pardavimas čarteriams',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'JAV ežero pakrantės gyvenamoji bendruomenė',
    product: 'Bendruomenės patogumas — SUP flotilė',
    industry: 'Nekilnojamasis turtas / Bendruomenė',
    challenge:
      'Prabangi ežero pakrantės gyvenamoji bendruomenė norėjo suteikti SUP lentas kaip gyventojų patogumą — reikėjo mažai priežiūros reikalaujančios flotilės, saugaus laikymo pakrantėje ir savitarnos išdavimo sistemos 200+ namų ūkiams.',
    solution:
      'Pateikėme 15 komercinio lygio SUP lentų su orui atsparia laikymo spintų sistema. Sukūrėme QR kodo pagrįstą savitarnos išdavimą su skaitmeninių atsakomybės atsisakymo integracija. Suteikėme sezoninės priežiūros paslaugą.',
    result:
      '85 % namų ūkių naudojosi SUP patogumu pirmąjį sezoną. Nekilnojamojo turto vertė pakrantės sklypuose išaugo 7 %. Bendruomenė laimėjo „Geriausio gyvenimo prie ežero“ apdovanojimą.',
    outcomeMetrics: [
      {
        label: 'SUP lentos',
        value: '15',
      },
      {
        label: 'Namų ūkių naudojimas',
        value: '85%',
      },
      {
        label: 'Poveikis turto vertei',
        value: '+7%',
      },
      {
        label: 'Apdovanojimas',
        value: 'Geriausias gyvenimas prie ežero',
      },
    ],
  },
};
