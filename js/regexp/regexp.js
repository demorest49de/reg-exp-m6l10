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
    const emails = ['info1@methed.ru', 'info1@methed.ruuuuuuuuuu', '@meth.ru', 'my-mail@yaandex.ru', 'tom_yam@ya.ru',
        'zero@mai1.xyz','_@meth.ru', 'info2@meth.ru', 'a1@met.ru', 'info3@me.ru', 'info4@methed.r2u',
        'info5@methed.uvxyz', 'demorest49de@gmail.com'];
    console.log(' : ', emails);
    const str2 = emails.join(' ');
    const regExp2 = /(?:[\w]{5,})@([a-z]{3,})\.([a-z]{2,5}(?!\w+\s))/g;

    const match2 = str2.match(regExp2);
    console.log(' : ', match2);

    const replace2 = str2.replace(regExp2, '*');
    console.log(' : ', replace2);


};
