import {format} from './sqlFormatter.js';
const sql=`
CREATE TABLE target_table AS
SELECT nvl(t1.col1,'default') as col1,
case when t1.col3='1' then t1.col21 else t2.col22 end as col2
FROM source_table t1
left join source_table2 t2 on t1.col1=t2.col1
where t1.data_date='2025-01-23'
group by nvl(t1.col1,'default'),case when t1.col3='1' then t1.col21 else t2.col22 end
order by 1,2;
`

console.log(format(sql, {  language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    expressionWidth: 50,
    identifierCase: 'lower',
    linesBetweenQueries: 2, }));
