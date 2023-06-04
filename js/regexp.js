const task1 = () => {
    const files = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
    const regExp = /(\S+.jsx|\S+.js|\S+.ts)/g;
    const str = files.join(' ');

    const match = str.match(regExp);
    const replace = str.replace(regExp, '*');

    console.log('Задание 1.1:');
    console.log(str);
    console.log(match);
    console.log(replace);
};

const task2 = () => {
    const emails = ['info1@methed.ru', 'info1@methed.ruuuuuuuuuu', '@meth.ru', 'my-m-a-i--l@yaandex.ru', 'tom_yam@ya.ru',
        'zero@mai1.xyz', '_@meth.ru', 'info2@meth.ru', 'a1@met.ru', 'info3@me.ru', 'info4@methed.r2u',
        'info5@methed.uvxyz', 'demorest49de@gmail.com'];
    const str = ' ' + emails.join(', ');
    const regExp =
        /\s(?:[\w]+)@(?:[a-z]{5,})\.(?:[a-z]{0,5})(?!\w)/g;

    const match = str.match(regExp);
    const replace = str.replace(regExp, '*');

    console.log('\nЗадание 1.2:');
    console.log(str);
    console.log(match);
    console.log(replace);
};

const task3 = () => {
    const str = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.\n';
    const regExp =
        /(праздничный|по мнению моей мамы|например: личи, рамбутан, тамаринд)/g;

    const match = str.match(regExp);
    const replace = str.replace(regExp, '*');

    console.log('\nЗадание 1.3:');
    console.log(str);
    console.log(match);
    console.log(replace);
};

const task4 = () => {
    const str = 'Переходите по ссылке ниже что купить эти замечательные товары http://site.ru, https://site.com\n';

    const replaceWithLink = (text) => {
        return text.replace(/https?:\/\/(\w+\.(?:[a-z]{0,5}))(?!\w)/g, (...str) => {
            console.log(' : ', str);
            const [http, site] = str;
            return `<a href="${http}">${site}</a>`;
        });
    };

    console.log('\nЗадание 1.4:');
    console.log(str);
    console.log(replaceWithLink(str));
};

task1();
task2();
task3();
task4();