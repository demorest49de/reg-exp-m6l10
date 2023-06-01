export const regexpHandler = () => {
    const strTest = `javascript html css
    ecmascript typescript 4.6 406 4-6 4\\6
    Регулярные выражения #methed script
    #git выполни мёрж java
    `;

    console.log('Задание 1.1: ');
    const files = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
    const str = files.join(' ');
    console.log(' str: ', str);

    const regExp = /(\S+.jsx|\S+.js|\S+.ts)/g;

    const match = str.match(regExp);
    console.log(' : ', match);

    const replace = str.replace(regExp, '*');
    // console.log(' : ', replace);

    console.log('\nЗадание 1.2: ');
    const emails = ['info1@methed.ru', 'info1@methed.ruuuuuuuuuu', '@meth.ru', 'my-m-a-i--l@yaandex.ru', 'tom_yam@ya.ru',
        'zero@mai1.xyz', '_@meth.ru', 'info2@meth.ru', 'a1@met.ru', 'info3@me.ru', 'info4@methed.r2u',
        'info5@methed.uvxyz', 'demorest49de@gmail.com'];
    // console.log(' : ', emails);


    const str2 = ' ' + emails.join(', ');
    console.log(' : ', str2);
    const regExp2 =
        /\s(?:[\w]+)@(?:[a-z]{5,})\.(?:[a-z]{0,5})(?!\w)/g;

    const match2 = str2.match(regExp2);
    console.log(' : ', match2);

    const replace2 = str2.replace(regExp2, '*');
    // console.log(' : ', replace2);

    console.log('\nЗадание 1.3: ');
    const str3 = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.\n';
    // console.log(' : ', emails);

    console.log(' : ', str3);
    const regExp3 =
        /(праздничный|по мнению моей мамы|например: личи, рамбутан, тамаринд)/g;

    const match3 = str3.match(regExp3);
    console.log(' : ', match3);

    const replace3 = str3.replace(regExp3, '*');
    // console.log(' : ', replace3);

    console.log('\nЗадание 1.4: ');
    const str4 = 'Переходите по ссылке ниже что купить эти замечательные товары http://site.ru, https://site.com\n';

    console.log(' : ', str4);
    const replaceWithLink = (str) => {
        return str.replace(/https?:\/\/(\w+\.(?:[a-z]{0,5}))(?!\w)/g, (...str) => {
                console.log(' : ',str);
                const [http, site] = str;
            return `<a href="${http}">${site}</a>`;
        });

    };
    console.log(replaceWithLink(str4));
};

















