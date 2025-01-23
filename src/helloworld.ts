import {format,formatDialect,expandPhrases} from 'sql-formatter';
console.log(format('select * from db1.abc;SELECT sysdate-1 as col1,case when col3=\'1\' then col21 else col22 end as col2 FROM tbl', {  language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    linesBetweenQueries: 2, }));

const number = '\\p{Decimal_Number}';
const letter = '\\p{Alphabetic}\\p{Mark}_';
const pattern = `[${letter}${number}]*`;
console.log(pattern);