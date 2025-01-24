import {format} from './sqlFormatter.js';
const sql=`
select col1, col2 from table1;
select col1, col2 from table1
where col1 = 'value1' and col2 = 'value2';
;
`

console.log(format(sql, {  language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    expressionWidth: 50,
    identifierCase: 'lower',
    linesBetweenQueries: 2, }));
