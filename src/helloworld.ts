import {format} from './sqlFormatter.js';
const sql=`
CREATE TABLE ODS.O_DSR_AUTO_1H4UOD12K(
    FID VARCHAR2(72)
    ,FD_C5AMNYY5RVS VARCHAR2(200)
    ,FD_GZDNZUE49V4 DATE
    ,FD_QDWCXT0UDXC NUMBER(16,4)
    ,FCREATEID NUMBER(20,0)
    ,FCREATETIME TIMESTAMP
    ,FMODIFIERID NUMBER(20,0)
    ,FMODIFYTIME TIMESTAMP
    ,SYSTEM_EN_TAG VARCHAR2(100)
    ,SYSTEM_CN_TAG VARCHAR2(200)
    ,SOR_TAB_NAME VARCHAR2(200)
    ,ETL_DATE TIMESTAMP
    ,DATA_DATE VARCHAR2(10)
)
TABLESPACE "ODS_D_TBS"
;
`

console.log(format(sql, {  language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    expressionWidth: 50,
    identifierCase: 'lower',
    linesBetweenQueries: 2, }));
