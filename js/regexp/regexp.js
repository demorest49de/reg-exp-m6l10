export const regexpHandler = () => {
    const str = `javascript html css
    ecmascript typescript 4.6 406 4-6 4\\6
    Регулярные выражения #methed script
    #git выполни мёрж java
    `;

    const test = 'gray grow grey';

    const reg1 = /\S+script/g;
    const reg2 = /java\S+/g;

     const match1 = str.match(reg1);
    console.log(' : ',match1);
     const match2 = str.match(reg2);
    console.log(' : ',match2);

    console.log(' : ', reg1.test(str));
    console.log(' : ', reg2.test(str));
    console.log(' : ', /фыва/.test(str));
};
