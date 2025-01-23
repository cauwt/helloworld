import { format } from 'sql-formatter';
console.log(format('SELECT sysdate-1 as col1,case when col3=\'1\' then col21 else col22 end as col2 FROM tbl', {  language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    linesBetweenQueries: 2, }));