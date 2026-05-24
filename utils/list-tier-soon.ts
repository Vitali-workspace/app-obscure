
import {
    animalistic,
    balsamsOil,
    berries,
    drinks,
    flowers,
    fruits,
    gourmand,
    green,
    mushrooms,
    natural,
    nuts,
    objects,
    rare,
    resins,
    spices,
    synthetics,
    vegetables,
    woods,
} from "./nots";
  
import type { PerfumesTierType } from "./constants";


const xBottle = "../public/bottles";


const grigiaBottle = "../public/bottles/brands/maqueda/grigia.webp";
const macchiaBottle = "../public/bottles/brands/maqueda/macchia.jpg";
const salomeBottle = "../public/bottles";
const cherryColaBottle = "../public/bottles";




const NotIMG = "../public/bottles/not-bottle.webp";



const imgVibe = "../public/vibe/test-room.jpg";



const perfumesTierSoon: PerfumesTierType = [
    {
      titlePage: "Скоро появятся",
      descriptionPage: "Приедут в этом месяце",
      listPerfumes: [

        {
          brand: "Adi Ale Van",
          perfumeName: "Urma Vie - Extrait de Ceaslov",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 1,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Виски", src: drinks.bourbonWhiskey },
              { name: "Солёные ноты", src: natural.salt },
            ],
            middle: [
              { name: "Ладан", src: resins.incense },
              { name: "Амбра", src: animalistic.amber },
              { name: "Смолы", src: resins.resin },
              { name: "Ветивер", src: green.vetiver },
            ],
            base: [
              { name: "Ладан", src: resins.incense },
              { name: "Дубовый мох", src: green.moss },
              { name: "Пачули", src: green.patchouli },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Adi Ale Van",
          perfumeName: "Journey of Life - Extrait of Dreams",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 1,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Виноград", src: berries.grape },
              { name: "Мускатный шалфей", src: green.clarySage },
            ],
            middle: [
              { name: "Киприол", src: balsamsOil.cypriolOil },
              { name: "Слива", src: fruits.plum },
            ],
            base: [
              { name: "Какао", src: gourmand.cocoa },
              { name: "Абсолют ветивера", src: balsamsOil.absolutePlants },
              { name: "Кастореум", src: animalistic.castoreum },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
        
        {
            brand: "Papillon Artisan Perfumes",
            perfumeName: "Salome",
            promoText: "xxxxx",
            imagePerfume: NotIMG,
            price01ml: 0,
            price05ml: 0,
            price1ml: 0,
            price2ml: 0,
            price5ml: 50,
            price10ml: 100,
            priceFull: 190,
            visibility: "visible",
            volumeMl: 10,
            notes: {
              top: [{ name: "Жасмин", src: flowers.jasmine }],
              middle: [
                { name: "Турецкая роза", src: flowers.turkishRose },
                { name: "Цветок гвоздики", src: flowers.carnation },
              ],
              base: [
                { name: "Хирацеум", src: animalistic.hyraceum },
                { name: "Мускус", src: animalistic.musk },
              ],
            },
            textStory: {
              brandHistory: [
                { text: "Первый абзац" },
                { text: "Второй абзац" },
                { text: "Третий абзац" },
              ],
              perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
              review: [{ text: "Первый абзац" }],
            },
            vibe: [
              { name: "Мрачное здание", src: "" },
              { name: "Влажный", src: "" },
              { name: "Тёмный", src: "" },
            ],
          },
    
          {
            brand: "Maqueda",
            perfumeName: "Grigia",
            promoText: "Страшное путешествие амбры",
            imagePerfume: grigiaBottle,
            price01ml: 0,
            price05ml: 0,
            price1ml: 0,
            price2ml: 0,
            price5ml: 50,
            price10ml: 100,
            priceFull: 190,
            visibility: "visible",
            volumeMl: 10,
            notes: {
              top: [{ name: "Какао", src: gourmand.cocoa }],
              middle: [
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Соль", src: natural.salt },
                { name: "Можжевельник", src: green.juniper },
              ],
              base: [
                { name: "Животные ноты", src: animalistic.animalNotes },
                { name: "Серая амбра", src: animalistic.ambergris },
              ],
            },
            textStory: {
              brandHistory: [
                { text: "Первый абзац" },
                { text: "Второй абзац" },
                { text: "Третий абзац" },
              ],
              perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
              review: [{ text: "Первый абзац" }],
            },
            vibe: [
              { name: "Мрачное здание", src: "" },
              { name: "Влажный", src: "" },
              { name: "Тёмный", src: "" },
            ],
          },
    
          {
            brand: "Maqueda",
            perfumeName: "Macchia",
            promoText: "Полёт пчелы",
            imagePerfume: macchiaBottle,
            price01ml: 0,
            price05ml: 0,
            price1ml: 0,
            price2ml: 0,
            price5ml: 50,
            price10ml: 100,
            priceFull: 190,
            visibility: "visible",
            volumeMl: 10,
            notes: {
              top: [
                { name: "Розмарин", src: spices.rosemary },
                { name: "Тимьян", src: spices.thyme },
                { name: "Фенхель", src: vegetables.fennel },
              ],
              middle: [
                { name: "Манго", src: fruits.mango },
                { name: "Папайя", src: fruits.papaya },
                { name: "Бессмертник", src: green.immortelle },
              ],
              base: [
                { name: "Дубовый мох", src: green.moss },
                { name: "Мускус", src: animalistic.musk },
                { name: "Животные ноты", src: animalistic.animalNotes },
                { name: "Тинктура козьей шерсти", src: animalistic.fur },
              ],
            },
            textStory: {
              brandHistory: [
                { text: "Первый абзац" },
                { text: "Второй абзац" },
                { text: "Третий абзац" },
              ],
              perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
              review: [{ text: "Первый абзац" }],
            },
            vibe: [
              { name: "Мрачное здание", src: "" },
              { name: "Влажный", src: "" },
              { name: "Тёмный", src: "" },
            ],
          },
        
        
    


        {
          brand: "Toskovat",
          perfumeName: "Born Screaming",
          promoText: "Дымный",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Вишня", src: berries.cherry },
              { name: "Ежевика", src: berries.blackberry },
              { name: "Физалис", src: berries.physalis },
              { name: "Энергетик", src: drinks.energyDrink },
              { name: "Футляр для DVD", src: rare.dvdCase },
              { name: "Лопнувший шарик", src: rare.poppedBalloon },
              { name: "Латекс", src: objects.latex },
              { name: "Игрушки для взрослых", src: rare.adultToys },
            ],
            middle: [
              { name: "Дым", src: natural.smoke },
              { name: "Танцевальный клуб", src: rare.danceClub },
              { name: "Дурман", src: flowers.datura },            
              { name: "Роза", src: flowers.rose },
              { name: "Борония", src: flowers.boronia },
              { name: "Резеда", src: green.myrtle },
              { name: "Слюна", src: animalistic.saliva },
              { name: "Гелиотропин", src: synthetics.diviniris },
            ],
            base: [
              { name: "Мирра", src: resins.myrrh },
              { name: "Стиракс", src: resins.styrax },
              { name: "Фрезия", src: flowers.freesia },
              { name: "Древесина кабрувы", src: woods.palisander },
              { name: "Пачули", src: green.patchouli },
              { name: "Кастореум", src: animalistic.castoreum },
              { name: "Амбретта", src: animalistic.ambrette },
              { name: "Жемчужное ожерелье", src: rare.pearlNecklace },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: imgVibe },
            { name: "Влажный", src: imgVibe },
            { name: "Тёмный", src: imgVibe },
          ],
        },
  
        {
          brand: "Toskovat",
          perfumeName: "Anarchist A_",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Кредитные карты", src: rare.creditCards },
              { name: "Снег", src: natural.snow },
              { name: "Виски", src: drinks.bourbonWhiskey },
            ],
            middle: [
              { name: "Грязные доллары", src: objects.money },
              { name: "Чернила", src: objects.ink },
              { name: "Воск свечи", src: objects.candle },
            ],
            base: [
              { name: "Зелёная сакральная смола", src: resins.greenResin },
              { name: "Святая вода", src: rare.holyWater },
              { name: "Старая исповедальня", src: rare.confessional },
              { name: "Одежда священника", src: rare.priestClothes },
              { name: "Полиэтиленовый пакет", src: rare.plasticBag },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
  
        {
          brand: "Toskovat",
          perfumeName: "Annacamento",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Апельсин", src: fruits.orange },
              { name: "Красный апельсин", src: fruits.bloodOrange },
              { name: "Опунция", src: green.pricklyPear },
              { name: "Вербена", src: green.verbena },
            ],
            middle: [
              { name: "Сыр рикотта", src: gourmand.mascarponeCheese },
              { name: "Ром", src: drinks.rum },
              { name: "Франжипани", src: flowers.frangipani },
              { name: "Дрок", src: flowers.genista },
              { name: "Блины", src: gourmand.pancake },
              { name: "Изюм", src: berries.raisin },
              { name: "Пыль дриад", src: natural.dust },
            ],
            base: [
              { name: "Кедр", src: woods.cedarWood },
              { name: "Дуб", src: woods.oak },
              { name: "Тополиные почки", src: woods.poplarBuds },
              { name: "Морской фенхель", src: vegetables.fennel },
              { name: "Ладанник", src: flowers.cistus },
              { name: "Мастика", src: woods.masticTree },
              { name: "Кипарис", src: woods.cypress },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
  
  
        {
          brand: "Toskovat",
          perfumeName: "Forlorn Embers & Black Reigns",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Сморс", src: gourmand.smores },
              { name: "Мацис", src: spices.mace },
              { name: "Грецкий орех", src: nuts.walnut },
              { name: "Бурбон", src: drinks.bourbonWhiskey },
              { name: "Засахаренные каштаны", src: gourmand.marronGlace },
              { name: "Трубочный табак", src: green.tobacco },
            ],
            middle: [
              { name: "Рожковое дерево", src: woods.carob },
              { name: "Трюфель", src: mushrooms.truffle },
              { name: "Сосновые шишки", src: woods.pineCones },
              { name: "Сухофрукты", src: fruits.driedFruits },
              { name: "Сушенные колокольчики", src: flowers.driedBellflowers },
              { name: "Пепел сожжённого письма", src: natural.ash },
            ],
            base: [
              { name: "Сикомор", src: woods.palisander },
              { name: "Махагони", src: woods.mahogany },
              { name: "Свеча бушмена", src: green.bushmanCandle },
              { name: "Дуб", src: woods.oak },
              { name: "Эвкрифия", src: flowers.eucryphia },
              { name: "Оксид кальция", src: rare.calciumOxide },
              { name: "Кость", src: rare.bone },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Toskovat",
          perfumeName: "Ichigo Ichie",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Помело", src: fruits.pomelo },
              { name: "Гибискус", src: flowers.hibiscus },
              { name: "Азиатская груша", src: fruits.nashiPear },
              { name: "Японский абрикос", src: fruits.apricot },
              { name: "Сакура", src: woods.sakura },
              { name: "Крем-сода", src: drinks.creamSoda },
            ],
            middle: [
              { name: "Гортензия", src: flowers.hydrangea },
              { name: "Бругмансия", src: flowers.brugmansia },
              { name: "Тигровая лилия", src: flowers.lily },
              { name: "Ирисовый корень", src: flowers.orrisRoot },
              { name: "Кувшинка", src: flowers.waterLily },
              { name: "Чёрный чай", src: drinks.blackTea },
              { name: "Пар", src: natural.steam },
              { name: "Пудра осирои", src: rare.facePowder },
            ],
            base: [
              { name: "Хиноки", src: woods.hinokiWood },
              { name: "Секвойя", src: woods.palisander },
              { name: "Дицентра", src: flowers.dicentra },
              { name: "Чай ройбуш", src: drinks.differentTea },
              { name: "Мускус", src: animalistic.musk },
              { name: "Амбра", src: animalistic.amber },
              { name: "Ладан", src: resins.incense },
              { name: "Шёлк", src: objects.silk },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Toskovat",
          perfumeName: "Silent At The Theme Park",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Лимонный тарт", src: gourmand.cake },
              { name: "Флердоранж", src: flowers.frangipani },
              { name: "Цветок липы", src: flowers.lindenFlower },
              { name: "Сирень", src: flowers.lilac },
            ],
            middle: [
              { name: "Ландыш", src: flowers.lilyValley },
              { name: "Какао", src: gourmand.cocoa },
              { name: "Иланг-иланг", src: flowers.ylangYlang },
              { name: "Чистое белье", src: objects.freshLinen },
              { name: "Свитер матери", src: objects.motherSweater },
            ],
            base: [
              { name: "Олибанум", src: resins.olibanum },
              { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
              { name: "Лабданум", src: resins.labdanum },
              { name: "Пачули", src: green.patchouli },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Дубовый мох", src: green.moss },
              { name: "Ваниль", src: spices.vanilla },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Toskovat",
          perfumeName: "Things We Never Shared",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Ликёр Адвокат", src: drinks.advocaat },
              { name: "Глинтвейн", src: drinks.mulledWine },
              { name: "Нарцисс", src: flowers.narcissus },
              { name: "Гиацинт", src: flowers.hyacinth },
            ],
            middle: [
              { name: "Шоколадный торт", src: gourmand.sacherTorte },
              { name: "Макарон с черной смородиной", src: gourmand.macarons },
              { name: "Сливовое варенье", src: gourmand.jam },
              { name: "Медовый круассан", src: gourmand.croissant },
              { name: "Панеттоне с миндалем и засахаренными апельсинами", src: gourmand.panettone },
            ],
            base: [
              { name: "Трубочный табак", src: green.tobacco },
              { name: "Мирра", src: resins.myrrh },
              { name: "Сандал", src: woods.sandalwood },
              { name: "Нард", src: green.nard },
              { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
              { name: "Эбен", src: woods.ebonyTree },
              { name: "Пар горячего какао", src: natural.steam },
              { name: "Молочные ириски", src: gourmand.toffee },
              { name: "Крем для рук", src: objects.suntanLotion },
              { name: "Подснежники", src: flowers.snowdrops },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Toskovat",
          perfumeName: "Amaretto In The Melting Room",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Апельсиновая цедра", src: fruits.orangeZest },
              { name: "Персиковая косточка", src: fruits.peachPit },
              { name: "Литургический хлеб", src: gourmand.bread },
            ],
            middle: [
              { name: "Амаретто", src: drinks.amaretto },
              { name: "Пена из сахарного сиропа", src: drinks.syrupFoam },
              { name: "Лабданум", src: resins.labdanum },
              { name: "Свечной воск", src: objects.candle },
            ],
            base: [
              { name: "Ванильная пудра", src: gourmand.ediblePowder },
              { name: "Страстоцвет", src: flowers.passionFlower },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Абсолют табака", src: balsamsOil.absolutePlants },
              { name: "Соты", src: animalistic.beeswax },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },

        {
          brand: "Toskovat",
          perfumeName: "Pornstar (Noyau Doux)",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 19.9,
          price1ml: 39.9,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Лёд", src: natural.ice },
              { name: "Пальчиковый лайм", src: fruits.fingerLime },
              { name: "Жевательная резинка", src: gourmand.bubbleGum },
              { name: "Питахайя", src: fruits.pitahaya },
            ],
            middle: [
              { name: "Мартини «Порнозвезда»", src: drinks.martiniPornstar },
              { name: "Цветок «Клешня омара»", src: flowers.clawFlower },
              { name: "Амариллис «Голая леди»", src: flowers.amaryllis },
              { name: "Венерина мухоловка", src: flowers.venusFlytrap },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Безе", src: gourmand.meringues },
              { name: "Лотос", src: flowers.lotus },
              { name: "Хурма", src: fruits.persimmon },
              { name: "Лосьон для тела", src: objects.suntanLotion },
              { name: "Воск поэзии и песни сирен", src: rare.poetry },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
  
        {
          brand: "Laboratorio Olfattivo",
          perfumeName: "Underground Vibes",
          promoText: "Запах рейвов",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 9.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Можжевеловые ягоды", src: green.juniper },
              { name: "Эссенция конопли", src: green.cannabis },
              { name: "Виски", src: drinks.bourbonWhiskey },
            ],
            middle: [
              { name: "Циприол", src: balsamsOil.cypriolOil },
              { name: "Аккорд цемента", src: natural.concrete },
              { name: "Аккорд бензина", src: objects.gasoline },
              { name: "Абсолют бессмертника", src: balsamsOil.absolutePlants },
            ],
            base: [
              { name: "Масло ириса", src: balsamsOil.flowerOil },
              { name: "Эссенция вьетнамского уда", src: balsamsOil.absoluteLabdanum },
              { name: "Масло новокаледонского сандала", src: balsamsOil.woodOil },
              { name: "Масло индонезийских пачули", src: balsamsOil.greenOil },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Lorenzo Pazzaglia",
          perfumeName: "Gasoleather",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 14.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Бергамот", src: fruits.bergamot },
              { name: "Дым", src: natural.smoke },
              { name: "Металлические ноты", src: natural.metallicNotes },
              { name: "Аккорд бензина", src: objects.gasoline },
              { name: "Элеми", src: resins.elemi },
              { name: "Бензоин", src: resins.benzoin },
              { name: "Ноты пластика", src: objects.plastic },
              { name: "Малина", src: berries.raspberry },
            ],
            middle: [
              { name: "Мускатный шалфей", src: green.clarySage },
              { name: "Нарцисс", src: flowers.narcissus },
              { name: "Циприол", src: balsamsOil.cypriolOil },
              { name: "Иланг-иланг", src: flowers.ylangYlang },
              { name: "Франжипани", src: spices.fenugreek },
              { name: "Тосканская кожа", src: animalistic.leather },
              { name: "Индийский кашемир", src: objects.motherSweater },
              { name: "Дубовый мох", src: green.moss },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Кожаный аккорд", src: animalistic.leather },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Уд", src: woods.agarwoodOud },
              { name: "Пачули", src: green.patchouli },
              { name: "Амбра", src: animalistic.amber },
              { name: "Мускус", src: animalistic.musk },
              { name: "Сосновая смола", src: balsamsOil.absolutePlants },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Lorenzo Pazzaglia",
          perfumeName: "Dark Florum",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 14.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Розмарин", src: spices.rosemary },
              { name: "Розовый перец", src: spices.pinkPepper },
              { name: "Масло петигрейн", src: balsamsOil.absolutePlants },
              { name: "Элеми", src: resins.elemi },
              { name: "Лимон", src: fruits.lemon },
              { name: "Горький апельсин", src: fruits.orange },
              { name: "Шафран", src: spices.saffron },
              { name: "Корица", src: spices.cinnamon },
              { name: "Гвоздика", src: spices.cloves },
            ],
            middle: [
              { name: "Дистиллированный ром", src: drinks.rum },
              { name: "Финики", src: fruits.dates },
              { name: "Экзотические фрукты", src: fruits.tropicalFruits },
              { name: "Нероли", src: flowers.neroli },
              { name: "Робиния", src: flowers.robinia },
              { name: "Жасмин", src: flowers.jasmine },
              { name: "Пачули", src: green.patchouli },
              { name: "Ирис", src: flowers.iris },
              { name: "Корень ириса", src: flowers.orrisRoot },
              { name: "Иланг-иланг", src: flowers.ylangYlang },
            ],
            base: [
              { name: "Сандал", src: woods.sandalwood },
              { name: "Ветивер", src: green.vetiver },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Пачули", src: green.patchouli },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Амбра", src: animalistic.amber },
              { name: "Мускус", src: animalistic.musk },
              { name: "Тростниковый сахар", src: gourmand.palmSugar },
              { name: "Бензоин", src: resins.benzoin },
              { name: "Палисандр", src: woods.palisander },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Lorenzo Pazzaglia",
          perfumeName: "Bloody Smoke",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 14.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Элеми", src: resins.elemi },
              { name: "Минеральные ноты", src: natural.mineralNotes },
              { name: "Ландыш", src: flowers.lilyValley },
              { name: "Жасмин", src: flowers.jasmine },
            ],
            middle: [
              { name: "Ладан", src: resins.incense },
              { name: "Олибанум", src: resins.olibanum },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Металлические ноты", src: natural.metallicNotes },
            ],
            base: [
              { name: "Мускус", src: animalistic.musk },
              { name: "Сандал", src: woods.sandalwood },
              { name: "Серая амбра", src: animalistic.ambergris },
              { name: "Ваниль", src: spices.vanilla },
              { name: "Мирра", src: resins.myrrh },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Lorenzo Pazzaglia",
          perfumeName: "Ficus In Fabula",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 14.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Инжир", src: fruits.fig },
              { name: "Листья инжира", src: green.figLeaf },
              { name: "Икра", src: gourmand.blackCaviar },
              { name: "Давана", src: green.davana },
              { name: "Водка", src: drinks.vodka },
            ],
            middle: [
              { name: "Лист инжира", src: green.figLeaf },
              { name: "Морские ноты", src: natural.marineNotes },
              { name: "Озон", src: natural.ozone },
              { name: "Сушеные фрукты", src: fruits.driedFruits },
              { name: "Гибискус", src: flowers.hibiscus },
            ],
            base: [
              { name: "Кедр", src: woods.cedarWood },
              { name: "Специи", src: spices.spicyNotes },
              { name: "Ваниль", src: spices.vanilla },
              { name: "Стручок ванили", src: spices.vanillaPod },
              { name: "Древесина инжира", src: woods.figWood },
              { name: "Амброксан", src: synthetics.ambroxan },
              { name: "Фундук", src: nuts.hazelnut },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Electimuss",
          perfumeName: "Black Caviar",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 14.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Икра", src: gourmand.blackCaviar },
              { name: "Уд", src: woods.agarwoodOud },
              { name: "Кедр", src: woods.cedarWood },
            ],
            middle: [
              { name: "Лаванда", src: flowers.lavender },
              { name: "Шалфей", src: green.clarySage },
              { name: "Розмарин", src: spices.rosemary },
            ],
            base: [
              { name: "Ветивер", src: green.vetiver },
              { name: "Пачули", src: green.patchouli },
              { name: "Дубовый мох", src: green.moss },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },

        {
          brand: "Zoologist",
          perfumeName: "Portuguese Man O'War",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Имбирь", src: spices.ginger },
              { name: "Шафран", src: spices.saffron },
              { name: "Бессмертник", src: green.immortelle },
            ],
            middle: [
              { name: "Карибский порох", src: objects.gunpowder },
              { name: "Жасмин самбак", src: flowers.jasmine },
              { name: "Герань", src: flowers.geranium },
            ],
            base: [
              { name: "Абсолют морских водорослей", src: balsamsOil.absolutePlants },
              { name: "Сандал", src: woods.sandalwood },
              { name: "Бобы тонка", src: spices.tonkaBean },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        {
          brand: "Zoologist",
          perfumeName: "Olm",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Аккорд водной пещеры", src: natural.waterCave },
              { name: "Известняки", src: natural.limestones },
              { name: "Йод", src: natural.iodine },
            ],
            middle: [
              { name: "Водоросли", src: green.laminaria },
              { name: "Мягкий янтарь", src: "" },
              { name: "Сандал", src: woods.sandalwood },
            ],
            base: [
              { name: "Жирные мускусы", src: animalistic.musk },
              { name: "Кашмеран", src: synthetics.cashmeran },
              { name: "Iso E Super", src: synthetics.isoSuper },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  


        {
          brand: "Pictura Fragrans",
          perfumeName: "Aquelarre",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 5.9,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Роза отто", src: flowers.rose },
              { name: "Кожа", src: animalistic.leather },
              { name: "Хинданол", src: synthetics.hindinol },
              { name: "Цветок апельсина", src: flowers.orangeBlossom },
              { name: "Мускатный шалфей", src: green.clarySage },
              { name: "Бергамот", src: fruits.bergamot },
              { name: "Дым", src: natural.smoke },
            ],
            middle: [
              { name: "Сливки", src: gourmand.cream },
              { name: "Коньяк", src: drinks.rum },
              { name: "Шафран", src: spices.saffron },
              { name: "Виски", src: drinks.bourbonWhiskey },
              { name: "Эфирное масло ракушек", src: balsamsOil.choyaNakh },
              { name: "Табак", src: green.tobacco },
              { name: "Камбоджийский уд", src: woods.agarwoodOud },
            ],
            base: [
              { name: "Амберин", src: synthetics.ambreine },
              { name: "Ладанник", src: flowers.cistus },
              { name: "Абсолют сандала", src: balsamsOil.absolutePlants },
              { name: "Животные ноты", src: animalistic.animalNotes },
              { name: "Орканокс", src: synthetics.orcanox },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
  
        
        {
          brand: "Pictura Fragrans",
          perfumeName: "Qetora Zohar",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 5.9,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Инжирное дерево", src: woods.figWood },
              { name: "Сычуаньский перец", src: spices.sichuanPepper },
              { name: "Финики", src: fruits.dates },
              { name: "Юдзу", src: fruits.yuzu },
              { name: "Кардамон", src: spices.cardamom },
              { name: "Элеми", src: resins.elemi },
              { name: "Мацис", src: spices.mace },
            ],
            middle: [
              { name: "Дикий ассаамский уд", src: woods.agarwoodOud },
              { name: "Инжир", src: fruits.fig },
              { name: "Мирра", src: resins.myrrh },
              { name: "Гиацинт", src: flowers.hyacinth },
              { name: "Ладан", src: resins.incense },
              { name: "Сухофрукты", src: fruits.driedFruits },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Кориандр", src: spices.coriander },
              { name: "Опопонакс", src: resins.opoponax },
              { name: "Тост", src: gourmand.toast },
            ],
            base: [
              { name: "Ладан", src: resins.incense },
              { name: "Рожковое дерево", src: woods.carob },
              { name: "Сандал из Майсура", src: woods.sandalwood },
              { name: "Серая амбра", src: animalistic.ambergris },
              { name: "Амбретта", src: animalistic.ambrette },
              { name: "Мускус", src: animalistic.musk },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },
        

        {
          brand: "Pictura Fragrans",
          perfumeName: "Le Reveil",
          promoText: "Земляничный йогурт",
          imagePerfume: "",
          price01ml: 5.9,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Лесная земляника", src: berries.wildStrawberry },
              { name: "Белый шоколад", src: gourmand.whiteChocolate },
              { name: "Лаванда", src: flowers.lavender },
              { name: "Ром", src: drinks.rum },
              { name: "Стебли зелени", src: green.stemsGreenery },
            ],
            middle: [
              { name: "Козья шерсть", src: animalistic.goatHair },
              { name: "Трюфель", src: mushrooms.truffle },
              { name: "Этилмальтол", src: synthetics.ethylMaltol },
              { name: "Животные ноты", src: animalistic.animalNotes },
              { name: "Гелиотроп", src: flowers.heliotrope },
              { name: "Гвоздика", src: spices.cloves },
            ],
            base: [
              { name: "Белый уд", src: woods.agarwoodOud },
              { name: "Митти аттар", src: synthetics.mittiAttar },
              { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
              { name: "Ванильная икра", src: spices.vanillaCaviar },
              { name: "Тоналид", src: synthetics.tonalide },
              { name: "Козье молоко", src: drinks.goatMilk },
            ],
          },
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: "" },
            { name: "Влажный", src: "" },
            { name: "Тёмный", src: "" },
          ],
        },

        {
          brand: "Voyager",
          perfumeName: "Golden Hour",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 1,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Дуриан", src: fruits.durian },
              { name: "Лист пандана", src: "" },
              { name: "Жёлтые бобы мунг", src: "" },
            ],
            middle: [
              { name: "Спелое манго", src: fruits.mango },
              { name: "Жасмин", src: flowers.jasmine },
              { name: "Липкий рис", src: gourmand.rice },
            ],
            base: [
              { name: "Кокосовое молоко", src: drinks.coconutMilk },
              { name: "Сахар", src: gourmand.sugar },
              { name: "Сандал", src: woods.sandalwood },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Первый абзац" }],
            perfumeHistory: [{ text: "Первый абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Voyager",
          perfumeName: "Star Trails",
          promoText: "xxxxx",
          imagePerfume: NotIMG,
          price01ml: 1,
          price05ml: 0,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Кока-Кола", src: drinks.cocaCola },
              { name: "Лайм", src: fruits.lime },
            ],
            middle: [
              { name: "Анис", src: spices.anise },
              { name: "Корица", src: spices.cinnamon },
              { name: "Герань", src: flowers.geranium },
            ],
            base: [
              { name: "Амбра", src: animalistic.amber },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Фиалка", src: flowers.violet },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Первый абзац" }],
            perfumeHistory: [{ text: "Первый абзац" }],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },
  
  
  

  
        
  
        
      ],
    },
];


export { perfumesTierSoon };









