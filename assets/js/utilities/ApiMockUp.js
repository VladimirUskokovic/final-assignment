export default class ApiMockUp {
  constructor () {
    // this.oldLargeCategoryList = [
    //     "Brand-name računari",
    //     "All-In-One računari",
    //     "Serveri",
    //     "NAS uređaji",
    //     "Komponente",
    //     "Monitori",
    //     "HDMI kablovi",
    //     "VGA kablovi",
    //     "DisplayPort kablovi",
    //     "Software",
    //     "Igre za PC",
    //     "Tastature",
    //     "Miševi",
    //     "Podloge Za Miševe",
    //     "Zvučnici za računar",
    //     "Slušalice",
    //     "Smeštanje podataka",
    //     "Grafičke table",
    //     "Web kamere",
    //     "Mikrofoni",
    //     "Ostali adapteri i kablovi",
    //     "Štampači",
    //     "Oprema za 3D štampače",
    //     "Skeneri",
    //     "Mrežna oprema",
    //     "Mrežni kablovi",
    //     "Optički kablovi",
    //     "Potrošni materijal",
    //     "Elektro zaštita",
    //     "Konzole za igranje",
    //     "Dodatna oprema za konzole",
    //     "Igre",
    //     "Akcione Figure",
    //     "Gaming računari",
    //     "Gaming monitori",
    //     "Gaming tastature i kompleti",
    //     "Gaming miševi",
    //     "Podloge za miševe",
    //     "Gaming slušalice",
    //     "Komponente",
    //     "Oprema za igranje",
    //     "Laptop računari",
    //     "Dodatna oprema",
    //     "Televizori",
    //     "Posebne karakteristike",
    //     "Dodatna oprema za TV",
    //     "Kablovi i adapteri",
    //     "Ostali adapteri i kablovi",
    //     "Baterije i punjači",
    //     "AV oprema",
    //     "Gramofonske ploče",
    //     "Slušalice",
    //     "Diktafoni",
    //     "Radio stanice",
    //     "Projektori",
    //     "Dodatna oprema za projektore",
    //     "Zvučnici",
    //     "Auto tehnika",
    //     "Mobilni telefoni",
    //     "Proizvođači",
    //     "Dodatna oprema za telefone",
    //     "Samsung oprema",
    //     "iPhone oprema",
    //     "Huawei oprema",
    //     "Power Bank eksterne baterije",
    //     "SmartWatch",
    //     "Memorijske kartice",
    //     "Telefoni",
    //     "Slušalice za mobilne telefone",
    //     "Slušalice za sportiste i aktivne ljude",
    //     "Slušalice otporne na manje količine vode i znoja",
    //     "Bluetooth zvučnici",
    //     "Frižideri",
    //     "Zamrzivači",
    //     "Veš mašine",
    //     "Mašine za pranje sudova",
    //     "Humidori",
    //     "Šporeti, ploče i rerne",
    //     "Aspiratori",
    //     "Mikrotalasne rerne",
    //     "Drobilice",
    //     "Profesionalna ugostiteljska oprema",
    //     "Ugradna tehnika",
    //     "Oprema za belu tehniku",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Klima uređaji i oprema",
    //     "Ventilatori",
    //     "Bojleri",
    //     "Grejna tela",
    //     "Mali kuhinjski aparati",
    //     "Kućni aparati",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Produžni kablovi",
    //     "Pet Friendly usisivači",
    //     "Pet Friendly oprema za usisivače",
    //     "Pet Friendly mali kućni aparati",
    //     "Pet Friendly kućna hemija",
    //     "Nega tela, lepota i zdravlje",
    //     "Rasveta",
    //     "Fiksni telefoni",
    //     "Baterije i punjači",
    //     "Produžni kablovi",
    //     "Pametna kuća",
    //     "Dekoracija",
    //     "Bazeni i oprema",
    //     "Video nadzor",
    //     "Posuđe i pribor za jelo",
    //     "Kuhinja i kupatilo",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Oprema za čišćenje i održavanje domaćinstva",
    //     "Digitalni fotoaparati",
    //     "Digitalni kamkorderi",
    //     "Torbe i rančevi za fotoaparate i kamere",
    //     "Dodatna oprema za fotoaparate i kamere",
    //     "Digitalni Foto Ramovi",
    //     "Akcione kamere",
    //     "Dodatna oprema za akcione kamere",
    //     "Memorijske kartice",
    //     "Hoverboard i oprema",
    //     "Trotineti i oprema",
    //     "Električni bicikli, skuteri i oprema",
    //     "Oprema za sport i rekreaciju",
    //     "SmartWatch",
    //     "Dronovi",
    //     "Dodatna oprema za dronove",
    //     "Akcione kamere",
    //     "Oprema za akcione kamere",
    //     "Memorijske kartice za akcione kamere",
    //     "Optika",
    //     "Spineri",
    //     "GPS navigacije",
    //     "Auto oprema za putovanje",
    //     "Koferi, torbe i rančevi",
    //     "Aksesoari",
    //     "Džepni noževi",
    //     "Fitnes oprema",
    //     "Slušalice za sportiste i aktivne ljude",
    //     "Slušalice otporne na manje količine vode i znoja",
    //     "Gitare i oprema",
    //     "Ozvučenje",
    //     "Bubnjevi i udaraljke",
    //     "Klavijature i klaviri",
    //     "Klasični instrumenti",
    //     "Mikrofoni/Slušalice/DJ",
    //     "Prateća oprema",
    //     "Kancelarijski nameštaj",
    //     "Kancelarijske mašine",
    //     "Kase, detektori i brojači za novac",
    //     "Kancelarijski pribor",
    //     "Table i dodaci",
    //     "Pisaći pribor",
    //     "Papiri",
    //     "Kalkulatori",
    //     "Arhiviranje dokumenata",
    //     "Arhiv torbe",
    //     "Sefovi i sigurnosni proizvodi",
    //     "Igračke za veštine i učenje",
    //     "Društvene igre i puzle",
    //     "Setovi za igru",
    //     "Figure i setovi",
    //     "Kocke",
    //     "Lutke i oprema",
    //     "Igračke za bebe",
    //     "Makete i igračke na daljinsko upravljanje",
    //     "Sport i igre na otvorenom",
    //     "Ostale igračke",
    //     "Školske torbe i rančevi",
    //     "Školske pernice",
    //     "Sveske",
    //     "Pribor za pisanje",
    //     "Likovni pribor",
    //     "Pribor za tehničko i geometriju",
    //     "Brusilice",
    //     "Setovi i ručni alat",
    //     "Bušilice, odvrtači i hameri",
    //     "Testere i sekači",
    //     "Glodalice, rende i heftalice",
    //     "Kompresori",
    //     "Radni stolovi",
    //     "Radna oprema",
    //     "Merni alati",
    //     "Fenovi i pištolji za lepljenje",
    //     "Aparati za zavarivanje",
    //     "Kosilice i kultivatori",
    //     "Trimeri i seckalice",
    //     "Testere i duvači lišća",
    //     "Hidrofori, hidropaci i pumpe za vodu",
    //     "Perači pod pritiskom i pribor",
    //     "Alati i oprema za voćarstvo i povrtarstvo",
    //     "Laptop računari",
    //     "Torbe za laptop",
    //     "Rančevi za laptop",
    //     "Futrole za laptop",
    //     "Dodatna oprema za laptop",
    //     "Software",
    //     "Tablet računari",
    //     "Futrole za tablet",
    //     "Dodatna oprema za tablet",
    //     "Gigatron računari",
    //     "Brand-name računari",
    //     "All-In-One računari",
    //     "Serveri",
    //     "NAS uređaji",
    //     "Komponente",
    //     "Monitori",
    //     "HDMI kablovi",
    //     "VGA kablovi",
    //     "DisplayPort kablovi",
    //     "Software",
    //     "Igre za PC",
    //     "Tastature",
    //     "Miševi",
    //     "Podloge Za Miševe",
    //     "Zvučnici za računar",
    //     "Slušalice",
    //     "Smeštanje podataka",
    //     "Grafičke table",
    //     "Web kamere",
    //     "Mikrofoni",
    //     "Ostali adapteri i kablovi",
    //     "Štampači",
    //     "Oprema za 3D štampače",
    //     "Skeneri",
    //     "Mrežna oprema",
    //     "Mrežni kablovi",
    //     "Optički kablovi",
    //     "Potrošni materijal",
    //     "Elektro zaštita",
    //     "Konzole za igranje",
    //     "Dodatna oprema za konzole",
    //     "Igre",
    //     "Akcione Figure",
    //     "Gaming računari",
    //     "Gaming monitori",
    //     "Gaming tastature i kompleti",
    //     "Gaming miševi",
    //     "Podloge za miševe",
    //     "Gaming slušalice",
    //     "Komponente",
    //     "Oprema za igranje",
    //     "Laptop računari",
    //     "Dodatna oprema",
    //     "Televizori",
    //     "Posebne karakteristike",
    //     "Dodatna oprema za TV",
    //     "Kablovi i adapteri",
    //     "Ostali adapteri i kablovi",
    //     "Baterije i punjači",
    //     "AV oprema",
    //     "Gramofonske ploče",
    //     "Slušalice",
    //     "Diktafoni",
    //     "Radio stanice",
    //     "Projektori",
    //     "Dodatna oprema za projektore",
    //     "Zvučnici",
    //     "Auto tehnika",
    //     "Mobilni telefoni",
    //     "Proizvođači",
    //     "Dodatna oprema za telefone",
    //     "Samsung oprema",
    //     "iPhone oprema",
    //     "Huawei oprema",
    //     "Power Bank eksterne baterije",
    //     "SmartWatch",
    //     "Memorijske kartice",
    //     "Telefoni",
    //     "Slušalice za mobilne telefone",
    //     "Slušalice za sportiste i aktivne ljude",
    //     "Slušalice otporne na manje količine vode i znoja",
    //     "Bluetooth zvučnici",
    //     "Frižideri",
    //     "Zamrzivači",
    //     "Veš mašine",
    //     "Mašine za pranje sudova",
    //     "Humidori",
    //     "Šporeti, ploče i rerne",
    //     "Aspiratori",
    //     "Mikrotalasne rerne",
    //     "Drobilice",
    //     "Profesionalna ugostiteljska oprema",
    //     "Ugradna tehnika",
    //     "Oprema za belu tehniku",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Klima uređaji i oprema",
    //     "Ventilatori",
    //     "Bojleri",
    //     "Grejna tela",
    //     "Mali kuhinjski aparati",
    //     "Kućni aparati",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Produžni kablovi",
    //     "Pet Friendly usisivači",
    //     "Pet Friendly oprema za usisivače",
    //     "Pet Friendly mali kućni aparati",
    //     "Pet Friendly kućna hemija",
    //     "Nega tela, lepota i zdravlje",
    //     "Rasveta",
    //     "Fiksni telefoni",
    //     "Baterije i punjači",
    //     "Produžni kablovi",
    //     "Pametna kuća",
    //     "Dekoracija",
    //     "Bazeni i oprema",
    //     "Video nadzor",
    //     "Posuđe i pribor za jelo",
    //     "Kuhinja i kupatilo",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Oprema za čišćenje i održavanje domaćinstva",
    //     "Digitalni fotoaparati",
    //     "Digitalni kamkorderi",
    //     "Torbe i rančevi za fotoaparate i kamere",
    //     "Dodatna oprema za fotoaparate i kamere",
    //     "Digitalni Foto Ramovi",
    //     "Akcione kamere",
    //     "Dodatna oprema za akcione kamere",
    //     "Memorijske kartice",
    //     "Hoverboard i oprema",
    //     "Trotineti i oprema",
    //     "Električni bicikli, skuteri i oprema",
    //     "Oprema za sport i rekreaciju",
    //     "SmartWatch",
    //     "Dronovi",
    //     "Dodatna oprema za dronove",
    //     "Akcione kamere",
    //     "Oprema za akcione kamere",
    //     "Memorijske kartice za akcione kamere",
    //     "Optika",
    //     "Spineri",
    //     "GPS navigacije",
    //     "Auto oprema za putovanje",
    //     "Koferi, torbe i rančevi",
    //     "Aksesoari",
    //     "Džepni noževi",
    //     "Fitnes oprema",
    //     "Slušalice za sportiste i aktivne ljude",
    //     "Slušalice otporne na manje količine vode i znoja",
    //     "Gitare i oprema",
    //     "Ozvučenje",
    //     "Bubnjevi i udaraljke",
    //     "Klavijature i klaviri",
    //     "Klasični instrumenti",
    //     "Mikrofoni/Slušalice/DJ",
    //     "Prateća oprema",
    //     "Kancelarijski nameštaj",
    //     "Kancelarijske mašine",
    //     "Kase, detektori i brojači za novac",
    //     "Kancelarijski pribor",
    //     "Table i dodaci",
    //     "Pisaći pribor",
    //     "Papiri",
    //     "Kalkulatori",
    //     "Arhiviranje dokumenata",
    //     "Arhiv torbe",
    //     "Sefovi i sigurnosni proizvodi",
    //     "Igračke za veštine i učenje",
    //     "Društvene igre i puzle",
    //     "Setovi za igru",
    //     "Figure i setovi",
    //     "Kocke",
    //     "Lutke i oprema",
    //     "Igračke za bebe",
    //     "Makete i igračke na daljinsko upravljanje",
    //     "Sport i igre na otvorenom",
    //     "Ostale igračke",
    //     "Školske torbe i rančevi",
    //     "Školske pernice",
    //     "Sveske",
    //     "Pribor za pisanje",
    //     "Likovni pribor",
    //     "Pribor za tehničko i geometriju",
    //     "Brusilice",
    //     "Setovi i ručni alat",
    //     "Bušilice, odvrtači i hameri",
    //     "Testere i sekači",
    //     "Glodalice, rende i heftalice",
    //     "Kompresori",
    //     "Radni stolovi",
    //     "Radna oprema",
    //     "Merni alati",
    //     "Fenovi i pištolji za lepljenje",
    //     "Aparati za zavarivanje",
    //     "Kosilice i kultivatori",
    //     "Trimeri i seckalice",
    //     "Testere i duvači lišća",
    //     "Hidrofori, hidropaci i pumpe za vodu",
    //     "Perači pod pritiskom i pribor",
    //     "Alati i oprema za voćarstvo i povrtarstvo",
    //     "Laptop računari",
    //     "Torbe za laptop",
    //     "Rančevi za laptop",
    //     "Futrole za laptop",
    //     "Dodatna oprema za laptop",
    //     "Software",
    //     "Tablet računari",
    //     "Futrole za tablet",
    //     "Dodatna oprema za tablet",
    //     "Gigatron računari",
    //     "Brand-name računari",
    //     "All-In-One računari",
    //     "Serveri",
    //     "NAS uređaji",
    //     "Komponente",
    //     "Monitori",
    //     "HDMI kablovi",
    //     "VGA kablovi",
    //     "DisplayPort kablovi",
    //     "Software",
    //     "Igre za PC",
    //     "Tastature",
    //     "Miševi",
    //     "Podloge Za Miševe",
    //     "Zvučnici za računar",
    //     "Slušalice",
    //     "Smeštanje podataka",
    //     "Grafičke table",
    //     "Web kamere",
    //     "Mikrofoni",
    //     "Ostali adapteri i kablovi",
    //     "Štampači",
    //     "Oprema za 3D štampače",
    //     "Skeneri",
    //     "Mrežna oprema",
    //     "Mrežni kablovi",
    //     "Optički kablovi",
    //     "Potrošni materijal",
    //     "Elektro zaštita",
    //     "Konzole za igranje",
    //     "Dodatna oprema za konzole",
    //     "Igre",
    //     "Akcione Figure",
    //     "Gaming računari",
    //     "Gaming monitori",
    //     "Gaming tastature i kompleti",
    //     "Gaming miševi",
    //     "Podloge za miševe",
    //     "Gaming slušalice",
    //     "Komponente",
    //     "Oprema za igranje",
    //     "Laptop računari",
    //     "Dodatna oprema",
    //     "Televizori",
    //     "Posebne karakteristike",
    //     "Dodatna oprema za TV",
    //     "Kablovi i adapteri",
    //     "Ostali adapteri i kablovi",
    //     "Baterije i punjači",
    //     "AV oprema",
    //     "Gramofonske ploče",
    //     "Slušalice",
    //     "Diktafoni",
    //     "Radio stanice",
    //     "Projektori",
    //     "Dodatna oprema za projektore",
    //     "Zvučnici",
    //     "Auto tehnika",
    //     "Mobilni telefoni",
    //     "Proizvođači",
    //     "Dodatna oprema za telefone",
    //     "Samsung oprema",
    //     "iPhone oprema",
    //     "Huawei oprema",
    //     "Power Bank eksterne baterije",
    //     "SmartWatch",
    //     "Memorijske kartice",
    //     "Telefoni",
    //     "Slušalice za mobilne telefone",
    //     "Slušalice za sportiste i aktivne ljude",
    //     "Slušalice otporne na manje količine vode i znoja",
    //     "Bluetooth zvučnici",
    //     "Frižideri",
    //     "Zamrzivači",
    //     "Veš mašine",
    //     "Mašine za pranje sudova",
    //     "Humidori",
    //     "Šporeti, ploče i rerne",
    //     "Aspiratori",
    //     "Mikrotalasne rerne",
    //     "Drobilice",
    //     "Profesionalna ugostiteljska oprema",
    //     "Ugradna tehnika",
    //     "Oprema za belu tehniku",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Klima uređaji i oprema",
    //     "Ventilatori",
    //     "Bojleri",
    //     "Grejna tela",
    //     "Mali kuhinjski aparati",
    //     "Kućni aparati",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Produžni kablovi",
    //     "Pet Friendly usisivači",
    //     "Pet Friendly oprema za usisivače",
    //     "Pet Friendly mali kućni aparati",
    //     "Pet Friendly kućna hemija",
    //     "Nega tela, lepota i zdravlje",
    //     "Rasveta",
    //     "Fiksni telefoni",
    //     "Baterije i punjači",
    //     "Produžni kablovi",
    //     "Pametna kuća",
    //     "Dekoracija",
    //     "Bazeni i oprema",
    //     "Video nadzor",
    //     "Posuđe i pribor za jelo",
    //     "Kuhinja i kupatilo",
    //     "Sredstva za čišćenje i zaštitu tehnike",
    //     "Oprema za čišćenje i održavanje domaćinstva",
    //     "Digitalni fotoaparati",
    //     "Digitalni kamkorderi",
    //     "Torbe i rančevi za fotoaparate i kamere",
    //     "Dodatna oprema za fotoaparate i kamere",
    //     "Digitalni Foto Ramovi",
    //     "Akcione kamere",
    //     "Dodatna oprema za akcione kamere",
    //     "Memorijske kartice",
    //     "Hoverboard i oprema",
    //     "Trotineti i oprema",
    //     "Električni bicikli, skuteri i oprema",
    //     "Oprema za sport i rekreaciju",
    //     "SmartWatch",
    //     "Dronovi",
    //     "Dodatna oprema za dronove",
    //     "Akcione kamere",
    //     "Oprema za akcione kamere",
    //     "Memorijske kartice za akcione kamere",
    //     "Optika",
    //     "Spineri",
    //     "GPS navigacije",
    //     "Auto oprema za putovanje",
    //     "Koferi, torbe i rančevi",
    //     "Aksesoari",
    //     "Džepni noževi",
    //     "Fitnes oprema",
    //     "Slušalice za sportiste i aktivne ljude",
    //     "Slušalice otporne na manje količine vode i znoja",
    //     "Gitare i oprema",
    //     "Ozvučenje",
    //     "Bubnjevi i udaraljke",
    //     "Klavijature i klaviri",
    //     "Klasični instrumenti",
    //     "Mikrofoni/Slušalice/DJ",
    //     "Prateća oprema",
    //     "Kancelarijski nameštaj",
    //     "Kancelarijske mašine",
    //     "Kase, detektori i brojači za novac",
    //     "Kancelarijski pribor",
    //     "Table i dodaci",
    //     "Pisaći pribor",
    //     "Papiri",
    //     "Kalkulatori",
    //     "Arhiviranje dokumenata",
    //     "Arhiv torbe",
    //     "Sefovi i sigurnosni proizvodi",
    //     "Igračke za veštine i učenje",
    //     "Društvene igre i puzle",
    //     "Setovi za igru",
    //     "Figure i setovi",
    //     "Kocke",
    //     "Lutke i oprema",
    //     "Igračke za bebe",
    //     "Makete i igračke na daljinsko upravljanje",
    //     "Sport i igre na otvorenom",
    //     "Ostale igračke",
    //     "Školske torbe i rančevi",
    //     "Školske pernice",
    //     "Sveske",
    //     "Pribor za pisanje",
    //     "Likovni pribor",
    //     "Pribor za tehničko i geometriju",
    //     "Brusilice",
    //     "Setovi i ručni alat",
    //     "Bušilice, odvrtači i hameri",
    //     "Testere i sekači",
    //     "Glodalice, rende i heftalice",
    //     "Kompresori",
    //     "Radni stolovi",
    //     "Radna oprema",
    //     "Merni alati",
    //     "Fenovi i pištolji za lepljenje",
    //     "Aparati za zavarivanje",
    //     "Kosilice i kultivatori",
    //     "Trimeri i seckalice",
    //     "Testere i duvači lišća",
    //     "Hidrofori, hidropaci i pumpe za vodu",
    //     "Perači pod pritiskom i pribor",
    //     "Alati i oprema za voćarstvo i povrtarstvo"]
    this.stores = [
      "Gigatron",
      "ComTrade",
      "WinWin"
    ];
    this.brands = ["LENOVO", "ASUS", "HUAWEI", "MAC", "SAMSUNG"];
    this.products = [
      "HP 15-db0027nm - 6AW12EA  AMD® Raven Ridge Ryzen 5 2500U do 3.6GHz, 15.6\", 128GB SSD, 4GB",
      "DELL Inspiron 15 3573 - NOT13330  Intel® Pentium® Silver N5000 do 2.7GHz, 15.6\", 1TB HDD, 4GB",
      "LENOVO IdeaPad S145-15IWL - 81MV0023YA  Intel® Pentium® Gold 5405U 2.3GHz, 15.6\", 256GB SSD, 4GB",
      "HP 15-db1043nm - 6VN41EA  AMD® Picasso Ryzen 3 3200U do 3.5GHz, 15.6\", 256GB SSD, 4GB",
      "Laptop ACER Aspire 3 A315-32-P8F8 - NX.GVWEX.065  Intel® Pentium® Silver N5000 do 2.7GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop HP - 15-db1049nm - 6WS55EA  AMD® Picasso Ryzen 3 3200U do 3.5GHz, 15.6\", 256GB SSD, 4GB",
      "Laptop LENOVO IdeaPad 330-15IKBR (Crni) - 81DE00K3YA  Intel® Core™ i5 8250U do 3.4GHz, 15.6\", 256GB SSD, 8GB",
      "Laptop LENOVO IdeaPad 330-15IGM (Braon) - 81D10078YA  Intel® Pentium® Silver N5000 do 2.7GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop LENOVO IdeaPad S145-15IWL (Siva) - 81MV00G2YA  Intel® Celeron® 4205U 1.8GHz, 15.6\", 256GB SSD, 4GB",
      "Laptop LENOVO IdeaPad S145-15IWL (Crni) - 81MV0042YA  Intel® Celeron® 4205U 1.8GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop LENOVO IdeaPad 330-15IGM (Crni) - 81D1006XYA  Intel® Celeron® N4000 do 2.6GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop HP 15-ra038nm - 3QT59EA  Intel® Celeron® N3060 do 2.48GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop ACER Aspire 3 A315-33-16PW - NX.GY3EX.069  Intel® Atom® x5-E8000 do 1.04GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop HP - 14-ck0007nm - 6VR72EA  Intel® Celeron® N4000 do 2.6GHz, 14\", 128GB SSD, 4GB",
      "Laptop LENOVO IdeaPad S145-15IWL - 81MV00GJYA  Intel® Celeron® 4205U 1.8GHz, 15.6\", 256GB SSD, 4GB",
      "Laptop ACER Aspire 3 A315-33-C13X - NX.GY3EX.016  Intel® Celeron® N3060 do 2.48GHz, 15.6\", 500GB HDD, 4GB",
      "Laptop ACER Aspire 3 A315-32-C232 - NX.GVWEX.053  Intel® Celeron® N4000 do 2.6GHz, 15.6\", 128GB SSD, 4GB",
      "Laptop DELL Inspiron 15 3582 - NOT13602  Intel® Celeron® N4000 do 2.6GHz, 15.6\", 500GB HDD, 4GB",
      "GRUNDIG televizor 32VLE4820 (Crni)  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T2/C/S2",
      "TOSHIBA SMART 32W3864DG  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T2/C/S2",
      "SHARP LC-32HI3012E  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T/T2/C/S/S2",
      "TOSHIBA SMART 32W3863DG  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T2/C/S2",
      "Televizor SAMSUNG SMART UE65NU7092UXXH  LED, 65\" (165.1 cm), 4K Ultra HD, DVB-T/T2/C/S/S2",
      "Televizor LG SMART 43UK6200PLA  LED, 43\" (109.2 cm), 4K Ultra HD, DVB-T2/C/S2",
      "Televizor TOSHIBA SMART 32L3863DG  LED, 32\" (81.2 cm), 1080p Full HD, DVB-T2/C/S2",
      "Televizor SONY SMART KD-55AF9  OLED, 55\" (139.7 cm), 4K Ultra HD, DVB-T/T2/C/S/S2",
      "Televizor SONY SMART KD-65XG9505  LED, 65\" (165.1 cm), 4K Ultra HD, 2x DVB-T/T2/C/S/S2",
      "Televizor SONY televizor XG85 serija KD-85XG8596 (Crni) - KD85XG8596BAEP  LCD, 85\" (215.9 cm), 4K Ultra HD, DVB-T/T2/C/S/S2 + POKLON Sony HTXF9000",
      "Televizor SAMSUNG televizor RU7400 (Srebrni) - UE43RU7452UXXH  LED, 43\" (109.2 cm), 4K Ultra HD, DVB-T2/C/S2",
      "Televizor SHARP LC-24DHF4012E sa DVD plejerom  LED, 24\" (60.9 cm), 720p HD Ready, DVB-T/T2/C/S/S2",
      "Televizor PANASONIC SMART TX-65FZ800E  OLED, 65\" (165.1 cm), 4K Ultra HD, DVB-T/T2/C/S2",
      "Televizor PANASONIC SMART TX-49FX780E  LED, 49\" (124.4 cm), 4K Ultra HD, DVB-T/T2/C/S2",
      "Televizor PANASONIC SMART TX-32FS400E  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T/C/T2",
      "Televizor PANASONIC SMART TX-58GX700E  LED, 58 (147.3 cm), 4K Ultra HD, DVB-T/T2/C/S2",
      "Televizor PANASONIC SMART TX-65GX820E  LED, 65\" (165.1 cm), 4K Ultra HD, DVB-T/T2/C/S2",
      "Televizor VIVAX TV-32LE93T2  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T/C/T2",
      "Televizor TESLA SMART TV-49S903SUS  LED, 49\" (124.4 cm), 4K Ultra HD, DVB-T/T2/S2/Cl+ + POKLON FITBIT Fitnes Alta HR",
      "Televizor TESLA SMART TV-43S903SUS  LED, 43\" (109.2 cm), 4K Ultra HD, DVB-T/T2/S2/Cl+ + POKLON FITBIT Fitnes Alta HR",
      "Televizor LG televizor 55UM7100PLB SMART (Crni)  LED, 55\" (139.7 cm), 4K Ultra HD, DVB-T2/C/S2",
      "Televizor LG televizor OLED55C9PLA SMART (Crni)  OLED, 55\" (139.7 cm), 4K Ultra HD, DVB-T2/C/S2 + POKLON LG Soundbar SL5Y",
      "Televizor HISENSE televizor H32B5600 (Crni)  LED, 32\" (81.2 cm), 720p HD Ready, DVB-T/T2/C/S/S2"
    ];
    this.productsIds = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ];
    this.offers = ["Lenovo 324",
      "HP 845",
      "Acer435",
      "Dell 193",
      "GRUNDIG 820",
      "SHARP 284",
      "Tesla 630",
      "LG 039",
      "HISENSE 928",
      "VIVAX 173",
      "Sony346",
      "PANASONIC 365"];
    this.categoriesList = [
      "Laptop računari",
      "Torbe za laptop",
      "Rančevi za laptop",
      "Futrole za laptop",
      "Dodatna oprema za laptop",
      "Software",
      "Tablet računari",
      "Futrole za tablet",
      "Dodatna oprema za tablet",
      "Gigatron računari"
    ];
    this.categoryIds = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ];
    this.images = [
      "https://gigatron.rs/img/products/item/image5bb20e215e9a1.png",
      "https://gigatron.rs/img/products/item/image5c10ed6b8b092.png",
      "https://gigatron.rs/img/products/item/image5be06624da677.png",
      "https://gigatron.rs/img/products/item/image5b991d6c6810f.png",
      "https://gigatron.rs/img/products/item/image5c8674df32981.png",
      "https://gigatron.rs/img/products/item/image5cdbee1803d44.png",
      "https://gigatron.rs/img/products/item/image5ce7f218e6d5f.png",
      "https://gigatron.rs/img/products/item/image5aa78d547af31.png",
      "https://gigatron.rs/img/products/item/image5b6176f98d634.png",
      "https://gigatron.rs/img/products/item/image5b616fffdb812.png",
      "https://gigatron.rs/img/products/item/image5c54370de8efe.png",
      "https://gigatron.rs/img/products/item/image5cac8f202baef.png",
      "https://gigatron.rs/img/products/item/image5cac9f1950ea1.png",
      "https://gigatron.rs/img/products/item/image5cd026e72baab.png",
      "https://gigatron.rs/img/products/item/image5cd54752cb17c.png",
      "https://gigatron.rs/img/products/item/image5cd540ab7a1aa.png",
      "https://gigatron.rs/img/products/item/image5d020b57bd5df.png",
      "https://gigatron.rs/img/products/item/image5d3061cec7e80.png",
      "https://gigatron.rs/img/products/item/image5d358a1a3ab28.png"
    ];
    this.fillRandomData.bind(this);
    this.fillRandomData();
  }

  static getRandomBetween(min, max) {
    return Math.floor(Math.floor(Math.random() * (max - 1)) + min + Math.random());
  }

  // Returns random price between 8 and 600
  static getRandomPrice() {
    return ApiMockUp.twoDecRound(ApiMockUp.getRandomBetween(8, 600));
  }

  // Increases price between 0.01 and 10
  static getNextPrice(price) {
    return ApiMockUp.twoDecRound(price + ApiMockUp.getRandomBetween(0.01, 10));
  }

  // Returns true or false randomly but true is more likely
  static getRandomStock() {
    return Math.random() > 0.3;
  }

  // Helpers
  static getRandomMaxNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static twoDecRound(value) {
    return Math.round(value * 100) / 100;
  }

  static getRandomUpc() {
    return ApiMockUp.getRandomNumericString(12);
  }

  static getRandomUrl(title) {
    const num = ApiMockUp.getRandomNumericString(10);
    return `https://gigatron.rs/${title}`;
  }

  static getRandomNumericString(length) {
    let numeric = "";

    for (let i = 0; i < length; i++) {
      numeric += ApiMockUp.getRandomMaxNumber(9);
    }
    return numeric;
  }

  fillRandomData() {
    const products =  [];
    let productId = 0;
    let categories =  [];
    let categoryId = 0;
    let brands =  [];
    let brandId = 0;
    let offers = [];
    let offerId = 0;
    for (const productTitle of this.products) {
      productId++;
      let product = {
        productId: productId,
        categoryId: this.categoryIds[ApiMockUp.getRandomBetween(0, 9)],
        title: productTitle,
        category: this.categoriesList[ApiMockUp.getRandomBetween(0, 9)],
        price: ApiMockUp.getRandomPrice(),
        upc: ApiMockUp.getRandomNumericString(12),
        store: this.stores[ApiMockUp.getRandomBetween(0, 2)],
        url: ApiMockUp.getRandomUrl(productTitle),
        image: this.images[ApiMockUp.getRandomBetween(0, 22)]
      };

      products.push(product);
    }

    for (const categoryName of this.categoriesList) {
      categoryId++;
      let category = {
        categoryId: categoryId,
        categoryTitle: categoryName
      };

      categories.push(category);
    }
    for (const brandName of this.brands) {
      brandId++;
      let brand = {
        brandId: brandId,
        brandName: brandName
      };

      brands.push(brand);
    }
    for (const offerName of this.offers) {
      offerId++;
      let offer = {
        offerId: offerId,
        productId: this.productsIds[ApiMockUp.getRandomBetween(0, 9)],
        offerName: offerName,
        price: ApiMockUp.getRandomPrice(),
        store: this.stores[ApiMockUp.getRandomBetween(0, 2)],
        image: this.images[ApiMockUp.getRandomBetween(0, 22)]
      };

      offers.push(offer);
    }
    this.categoriesList = categories;
    this.products = products;
    this.brands = brands;
    this.offers = offers;
  }
}
