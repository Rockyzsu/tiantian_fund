/** * 测试数据 * @type {arry} */
/*2020-08-25 11:38:57*/
var ishb = false;
/*基金或股票信息*/
var fS_name = "中海可转债债券C";
var fS_code = "000004";
/*原费率*/
var fund_sourceRate = "0.00";
/*现费率*/
var fund_Rate = "0.00";
/*最小申购金额*/
var fund_minsg = "1000";
/*基金持仓股票代码*/
var stockCodes = ["6000301", "3000592", "6008371", "6016881"];
/*基金持仓债券代码*/
var zqCodes = "1130131,1130221,1270052,1130201,1130111";
/*基金持仓股票代码(新市场号)*/
var stockCodesNew = ["1.600030", "0.300059", "1.600837", "1.601688"];
/*基金持仓债券代码（新市场号）*/
var zqCodesNew = "1.113013,1.113022,0.127005,1.113020,1.113011";
/*收益率*/
/*近一年收益率*/
var syl_1n = "28.475";
/*近6月收益率*/
var syl_6y = "10.9557";
/*近三月收益率*/
var syl_3y = "28.1292";
/*近一月收益率*/
var syl_1y = "5.0773";
/*股票仓位测算图*/
    var Data_fundSharesPositions = [[1595779200000, 19.800], [1595865600000, 19.800], [1595952000000, 19.800], [1596038400000, 19.800], [1596124800000, 19.800], [1596384000000, 19.800], [1596470400000, 19.800], [1596556800000, 19.800], [1596643200000, 19.800], [1596729600000, 19.800], [1596988800000, 19.800], [1597075200000, 19.800], [1597161600000, 19.800], [1597248000000, 19.800], [1597334400000, 19.800], [1597593600000, 19.800], [1597680000000, 19.800], [1597766400000, 19.800], [1597852800000, 19.800], [1597939200000, 19.800], [1598198400000, 19.800]];
/*单位净值走势 equityReturn-净值回报 unitMoney-每份派送金*/
var Data_netWorthTrend = [{"x": 1363708800000, "y": 1.0, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1363881600000,
    "y": 1.0,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1364486400000, "y": 1.0, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1364918400000,
    "y": 0.998,
    "equityReturn": -0.2,
    "unitMoney": ""
}, {"x": 1365696000000, "y": 0.999, "equityReturn": 0.1002, "unitMoney": ""}, {
    "x": 1366300800000,
    "y": 1.002,
    "equityReturn": 0.3003,
    "unitMoney": ""
}, {"x": 1366905600000, "y": 0.994, "equityReturn": -0.7984, "unitMoney": ""}, {
    "x": 1367510400000,
    "y": 0.996,
    "equityReturn": 0.2012,
    "unitMoney": ""
}, {"x": 1368028800000, "y": 1.0, "equityReturn": 0.4016, "unitMoney": ""}, {
    "x": 1368115200000,
    "y": 1.001,
    "equityReturn": 0.1,
    "unitMoney": ""
}, {"x": 1368374400000, "y": 1.002, "equityReturn": 0.0999, "unitMoney": ""}, {
    "x": 1368460800000,
    "y": 0.998,
    "equityReturn": -0.3992,
    "unitMoney": ""
}, {"x": 1368547200000, "y": 1.0, "equityReturn": 0.2004, "unitMoney": ""}, {
    "x": 1368633600000,
    "y": 1.005,
    "equityReturn": 0.5,
    "unitMoney": ""
}, {"x": 1368720000000, "y": 1.013, "equityReturn": 0.796, "unitMoney": ""}, {
    "x": 1368979200000,
    "y": 1.018,
    "equityReturn": 0.4936,
    "unitMoney": ""
}, {"x": 1369065600000, "y": 1.015, "equityReturn": -0.2947, "unitMoney": ""}, {
    "x": 1369152000000,
    "y": 1.013,
    "equityReturn": -0.197,
    "unitMoney": ""
}, {"x": 1369238400000, "y": 1.011, "equityReturn": -0.1974, "unitMoney": ""}, {
    "x": 1369324800000,
    "y": 1.015,
    "equityReturn": 0.3956,
    "unitMoney": ""
}, {"x": 1369584000000, "y": 1.017, "equityReturn": 0.197, "unitMoney": ""}, {
    "x": 1369670400000,
    "y": 1.026,
    "equityReturn": 0.885,
    "unitMoney": ""
}, {"x": 1369756800000, "y": 1.024, "equityReturn": -0.1949, "unitMoney": ""}, {
    "x": 1369843200000,
    "y": 1.02,
    "equityReturn": -0.3906,
    "unitMoney": ""
}, {"x": 1369929600000, "y": 1.018, "equityReturn": -0.1961, "unitMoney": ""}, {
    "x": 1370188800000,
    "y": 1.018,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1370275200000, "y": 1.011, "equityReturn": -0.6876, "unitMoney": ""}, {
    "x": 1370361600000,
    "y": 1.011,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1370448000000, "y": 1.004, "equityReturn": -0.6924, "unitMoney": ""}, {
    "x": 1370534400000,
    "y": 1.0,
    "equityReturn": -0.3984,
    "unitMoney": ""
}, {"x": 1371052800000, "y": 0.986, "equityReturn": -1.4, "unitMoney": ""}, {
    "x": 1371139200000,
    "y": 0.987,
    "equityReturn": 0.1014,
    "unitMoney": ""
}, {"x": 1371398400000, "y": 0.988, "equityReturn": 0.1013, "unitMoney": ""}, {
    "x": 1371484800000,
    "y": 0.989,
    "equityReturn": 0.1012,
    "unitMoney": ""
}, {"x": 1371571200000, "y": 0.981, "equityReturn": -0.8089, "unitMoney": ""}, {
    "x": 1371657600000,
    "y": 0.956,
    "equityReturn": -2.5484,
    "unitMoney": ""
}, {"x": 1371744000000, "y": 0.958, "equityReturn": 0.2092, "unitMoney": ""}, {
    "x": 1372003200000,
    "y": 0.931,
    "equityReturn": -2.8184,
    "unitMoney": ""
}, {"x": 1372089600000, "y": 0.939, "equityReturn": 0.8593, "unitMoney": ""}, {
    "x": 1372176000000,
    "y": 0.945,
    "equityReturn": 0.639,
    "unitMoney": ""
}, {"x": 1372262400000, "y": 0.947, "equityReturn": 0.2116, "unitMoney": ""}, {
    "x": 1372348800000,
    "y": 0.954,
    "equityReturn": 0.7392,
    "unitMoney": ""
}, {"x": 1372521600000, "y": 0.954, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1372608000000,
    "y": 0.967,
    "equityReturn": 1.3627,
    "unitMoney": ""
}, {"x": 1372694400000, "y": 0.97, "equityReturn": 0.3102, "unitMoney": ""}, {
    "x": 1372780800000,
    "y": 0.966,
    "equityReturn": -0.4124,
    "unitMoney": ""
}, {"x": 1372867200000, "y": 0.969, "equityReturn": 0.3106, "unitMoney": ""}, {
    "x": 1372953600000,
    "y": 0.972,
    "equityReturn": 0.3096,
    "unitMoney": ""
}, {"x": 1373212800000, "y": 0.962, "equityReturn": -1.0288, "unitMoney": ""}, {
    "x": 1373299200000,
    "y": 0.964,
    "equityReturn": 0.2079,
    "unitMoney": ""
}, {"x": 1373385600000, "y": 0.969, "equityReturn": 0.5187, "unitMoney": ""}, {
    "x": 1373472000000,
    "y": 0.976,
    "equityReturn": 0.7224,
    "unitMoney": ""
}, {"x": 1373558400000, "y": 0.972, "equityReturn": -0.4098, "unitMoney": ""}, {
    "x": 1373817600000,
    "y": 0.975,
    "equityReturn": 0.3086,
    "unitMoney": ""
}, {"x": 1373904000000, "y": 0.974, "equityReturn": -0.1026, "unitMoney": ""}, {
    "x": 1373990400000,
    "y": 0.969,
    "equityReturn": -0.5133,
    "unitMoney": ""
}, {"x": 1374076800000, "y": 0.963, "equityReturn": -0.6192, "unitMoney": ""}, {
    "x": 1374163200000,
    "y": 0.96,
    "equityReturn": -0.3115,
    "unitMoney": ""
}, {"x": 1374422400000, "y": 0.96, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1374508800000,
    "y": 0.965,
    "equityReturn": 0.5208,
    "unitMoney": ""
}, {"x": 1374595200000, "y": 0.964, "equityReturn": -0.1036, "unitMoney": ""}, {
    "x": 1374681600000,
    "y": 0.962,
    "equityReturn": -0.2075,
    "unitMoney": ""
}, {"x": 1374768000000, "y": 0.963, "equityReturn": 0.104, "unitMoney": ""}, {
    "x": 1375027200000,
    "y": 0.959,
    "equityReturn": -0.4154,
    "unitMoney": ""
}, {"x": 1375113600000, "y": 0.96, "equityReturn": 0.1043, "unitMoney": ""}, {
    "x": 1375200000000,
    "y": 0.962,
    "equityReturn": 0.2083,
    "unitMoney": ""
}, {"x": 1375286400000, "y": 0.972, "equityReturn": 1.0395, "unitMoney": ""}, {
    "x": 1375372800000,
    "y": 0.974,
    "equityReturn": 0.2058,
    "unitMoney": ""
}, {"x": 1375632000000, "y": 0.977, "equityReturn": 0.308, "unitMoney": ""}, {
    "x": 1375718400000,
    "y": 0.979,
    "equityReturn": 0.2047,
    "unitMoney": ""
}, {"x": 1375804800000, "y": 0.978, "equityReturn": -0.1021, "unitMoney": ""}, {
    "x": 1375891200000,
    "y": 0.977,
    "equityReturn": -0.1022,
    "unitMoney": ""
}, {"x": 1375977600000, "y": 0.978, "equityReturn": 0.1024, "unitMoney": ""}, {
    "x": 1376236800000,
    "y": 0.983,
    "equityReturn": 0.5112,
    "unitMoney": ""
}, {"x": 1376323200000, "y": 0.984, "equityReturn": 0.1017, "unitMoney": ""}, {
    "x": 1376409600000,
    "y": 0.982,
    "equityReturn": -0.2033,
    "unitMoney": ""
}, {"x": 1376496000000, "y": 0.979, "equityReturn": -0.3055, "unitMoney": ""}, {
    "x": 1376582400000,
    "y": 0.976,
    "equityReturn": -0.3064,
    "unitMoney": ""
}, {"x": 1376841600000, "y": 0.979, "equityReturn": 0.3074, "unitMoney": ""}, {
    "x": 1376928000000,
    "y": 0.977,
    "equityReturn": -0.2043,
    "unitMoney": ""
}, {"x": 1377014400000, "y": 0.974, "equityReturn": -0.3071, "unitMoney": ""}, {
    "x": 1377100800000,
    "y": 0.973,
    "equityReturn": -0.1027,
    "unitMoney": ""
}, {"x": 1377187200000, "y": 0.971, "equityReturn": -0.2055, "unitMoney": ""}, {
    "x": 1377446400000,
    "y": 0.977,
    "equityReturn": 0.6179,
    "unitMoney": ""
}, {"x": 1377532800000, "y": 0.979, "equityReturn": 0.2047, "unitMoney": ""}, {
    "x": 1377619200000,
    "y": 0.979,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1377705600000, "y": 0.979, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1377792000000,
    "y": 0.981,
    "equityReturn": 0.2043,
    "unitMoney": ""
}, {"x": 1378051200000, "y": 0.979, "equityReturn": -0.2039, "unitMoney": ""}, {
    "x": 1378137600000,
    "y": 0.986,
    "equityReturn": 0.715,
    "unitMoney": ""
}, {"x": 1378224000000, "y": 0.987, "equityReturn": 0.1014, "unitMoney": ""}, {
    "x": 1378310400000,
    "y": 0.987,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1378396800000, "y": 0.988, "equityReturn": 0.1013, "unitMoney": ""}, {
    "x": 1378656000000,
    "y": 1.001,
    "equityReturn": 1.3158,
    "unitMoney": ""
}, {"x": 1378742400000, "y": 1.01, "equityReturn": 0.8991, "unitMoney": ""}, {
    "x": 1378828800000,
    "y": 1.011,
    "equityReturn": 0.099,
    "unitMoney": ""
}, {"x": 1378915200000, "y": 1.015, "equityReturn": 0.3956, "unitMoney": ""}, {
    "x": 1379001600000,
    "y": 1.006,
    "equityReturn": -0.8867,
    "unitMoney": ""
}, {"x": 1379260800000, "y": 1.002, "equityReturn": -0.3976, "unitMoney": ""}, {
    "x": 1379347200000,
    "y": 0.996,
    "equityReturn": -0.5988,
    "unitMoney": ""
}, {"x": 1379433600000, "y": 1.0, "equityReturn": 0.4016, "unitMoney": ""}, {
    "x": 1379865600000,
    "y": 1.002,
    "equityReturn": 0.2,
    "unitMoney": ""
}, {"x": 1379952000000, "y": 0.998, "equityReturn": -0.3992, "unitMoney": ""}, {
    "x": 1380038400000,
    "y": 0.996,
    "equityReturn": -0.2004,
    "unitMoney": ""
}, {"x": 1380124800000, "y": 0.985, "equityReturn": -1.1044, "unitMoney": ""}, {
    "x": 1380211200000,
    "y": 0.984,
    "equityReturn": -0.1015,
    "unitMoney": ""
}, {"x": 1380470400000, "y": 0.985, "equityReturn": 0.1016, "unitMoney": ""}, {
    "x": 1381161600000,
    "y": 0.995,
    "equityReturn": 1.0152,
    "unitMoney": ""
}, {"x": 1381248000000, "y": 1.001, "equityReturn": 0.603, "unitMoney": ""}, {
    "x": 1381334400000,
    "y": 0.994,
    "equityReturn": -0.6993,
    "unitMoney": ""
}, {"x": 1381420800000, "y": 1.0, "equityReturn": 0.6036, "unitMoney": ""}, {
    "x": 1381680000000,
    "y": 0.998,
    "equityReturn": -0.2,
    "unitMoney": ""
}, {"x": 1381766400000, "y": 0.995, "equityReturn": -0.3006, "unitMoney": ""}, {
    "x": 1381852800000,
    "y": 0.987,
    "equityReturn": -0.804,
    "unitMoney": ""
}, {"x": 1381939200000, "y": 0.984, "equityReturn": -0.304, "unitMoney": ""}, {
    "x": 1382025600000,
    "y": 0.985,
    "equityReturn": 0.1016,
    "unitMoney": ""
}, {"x": 1382284800000, "y": 0.993, "equityReturn": 0.8122, "unitMoney": ""}, {
    "x": 1382371200000,
    "y": 0.986,
    "equityReturn": -0.7049,
    "unitMoney": ""
}, {"x": 1382457600000, "y": 0.984, "equityReturn": -0.2028, "unitMoney": ""}, {
    "x": 1382544000000,
    "y": 0.976,
    "equityReturn": -0.813,
    "unitMoney": ""
}, {"x": 1382630400000, "y": 0.969, "equityReturn": -0.7172, "unitMoney": ""}, {
    "x": 1382889600000,
    "y": 0.964,
    "equityReturn": -0.516,
    "unitMoney": ""
}, {"x": 1382976000000, "y": 0.961, "equityReturn": -0.3112, "unitMoney": ""}, {
    "x": 1383062400000,
    "y": 0.974,
    "equityReturn": 1.3528,
    "unitMoney": ""
}, {"x": 1383148800000, "y": 0.971, "equityReturn": -0.308, "unitMoney": ""}, {
    "x": 1383235200000,
    "y": 0.976,
    "equityReturn": 0.5149,
    "unitMoney": ""
}, {"x": 1383494400000, "y": 0.974, "equityReturn": -0.2049, "unitMoney": ""}, {
    "x": 1383580800000,
    "y": 0.976,
    "equityReturn": 0.2053,
    "unitMoney": ""
}, {"x": 1383667200000, "y": 0.97, "equityReturn": -0.6148, "unitMoney": ""}, {
    "x": 1383753600000,
    "y": 0.966,
    "equityReturn": -0.4124,
    "unitMoney": ""
}, {"x": 1383840000000, "y": 0.955, "equityReturn": -1.1387, "unitMoney": ""}, {
    "x": 1384099200000,
    "y": 0.955,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1384185600000, "y": 0.961, "equityReturn": 0.6283, "unitMoney": ""}, {
    "x": 1384272000000,
    "y": 0.942,
    "equityReturn": -1.9771,
    "unitMoney": ""
}, {"x": 1384358400000, "y": 0.947, "equityReturn": 0.5308, "unitMoney": ""}, {
    "x": 1384444800000,
    "y": 0.947,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1384704000000, "y": 0.974, "equityReturn": 2.8511, "unitMoney": ""}, {
    "x": 1384790400000,
    "y": 0.972,
    "equityReturn": -0.2053,
    "unitMoney": ""
}, {"x": 1384876800000, "y": 0.975, "equityReturn": 0.3086, "unitMoney": ""}, {
    "x": 1384963200000,
    "y": 0.971,
    "equityReturn": -0.4103,
    "unitMoney": ""
}, {"x": 1385049600000, "y": 0.973, "equityReturn": 0.206, "unitMoney": ""}, {
    "x": 1385308800000,
    "y": 0.967,
    "equityReturn": -0.6166,
    "unitMoney": ""
}, {"x": 1385395200000, "y": 0.96, "equityReturn": -0.7239, "unitMoney": ""}, {
    "x": 1385481600000,
    "y": 0.964,
    "equityReturn": 0.4167,
    "unitMoney": ""
}, {"x": 1385568000000, "y": 0.972, "equityReturn": 0.8299, "unitMoney": ""}, {
    "x": 1385654400000,
    "y": 0.969,
    "equityReturn": -0.3086,
    "unitMoney": ""
}, {"x": 1385913600000, "y": 0.963, "equityReturn": -0.6192, "unitMoney": ""}, {
    "x": 1386000000000,
    "y": 0.974,
    "equityReturn": 1.1423,
    "unitMoney": ""
}, {"x": 1386086400000, "y": 0.986, "equityReturn": 1.232, "unitMoney": ""}, {
    "x": 1386172800000,
    "y": 0.983,
    "equityReturn": -0.3043,
    "unitMoney": ""
}, {"x": 1386259200000, "y": 0.977, "equityReturn": -0.6104, "unitMoney": ""}, {
    "x": 1386518400000,
    "y": 0.974,
    "equityReturn": -0.3071,
    "unitMoney": ""
}, {"x": 1386604800000, "y": 0.974, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1386691200000,
    "y": 0.96,
    "equityReturn": -1.4374,
    "unitMoney": ""
}, {"x": 1386777600000, "y": 0.96, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1386864000000,
    "y": 0.964,
    "equityReturn": 0.4167,
    "unitMoney": ""
}, {"x": 1387123200000, "y": 0.953, "equityReturn": -1.1411, "unitMoney": ""}, {
    "x": 1387209600000,
    "y": 0.949,
    "equityReturn": -0.4197,
    "unitMoney": ""
}, {"x": 1387296000000, "y": 0.942, "equityReturn": -0.7376, "unitMoney": ""}, {
    "x": 1387382400000,
    "y": 0.924,
    "equityReturn": -1.9108,
    "unitMoney": ""
}, {"x": 1387468800000, "y": 0.914, "equityReturn": -1.0823, "unitMoney": ""}, {
    "x": 1387728000000,
    "y": 0.914,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1387814400000, "y": 0.916, "equityReturn": 0.2188, "unitMoney": ""}, {
    "x": 1387900800000,
    "y": 0.928,
    "equityReturn": 1.31,
    "unitMoney": ""
}, {"x": 1387987200000, "y": 0.917, "equityReturn": -1.1853, "unitMoney": ""}, {
    "x": 1388073600000,
    "y": 0.924,
    "equityReturn": 0.7634,
    "unitMoney": ""
}, {"x": 1388332800000, "y": 0.92, "equityReturn": -0.4329, "unitMoney": ""}, {
    "x": 1388419200000,
    "y": 0.931,
    "equityReturn": 1.1957,
    "unitMoney": ""
}, {"x": 1388592000000, "y": 0.935, "equityReturn": 0.4296, "unitMoney": ""}, {
    "x": 1388678400000,
    "y": 0.928,
    "equityReturn": -0.7487,
    "unitMoney": ""
}, {"x": 1388937600000, "y": 0.908, "equityReturn": -2.1552, "unitMoney": ""}, {
    "x": 1389024000000,
    "y": 0.905,
    "equityReturn": -0.3304,
    "unitMoney": ""
}, {"x": 1389110400000, "y": 0.901, "equityReturn": -0.442, "unitMoney": ""}, {
    "x": 1389196800000,
    "y": 0.897,
    "equityReturn": -0.444,
    "unitMoney": ""
}, {"x": 1389283200000, "y": 0.884, "equityReturn": -1.4493, "unitMoney": ""}, {
    "x": 1389542400000,
    "y": 0.873,
    "equityReturn": -1.2443,
    "unitMoney": ""
}, {"x": 1389628800000, "y": 0.878, "equityReturn": 0.5727, "unitMoney": ""}, {
    "x": 1389715200000,
    "y": 0.874,
    "equityReturn": -0.4556,
    "unitMoney": ""
}, {"x": 1389801600000, "y": 0.88, "equityReturn": 0.6865, "unitMoney": ""}, {
    "x": 1389888000000,
    "y": 0.87,
    "equityReturn": -1.1364,
    "unitMoney": ""
}, {"x": 1390147200000, "y": 0.85, "equityReturn": -2.2989, "unitMoney": ""}, {
    "x": 1390233600000,
    "y": 0.86,
    "equityReturn": 1.1765,
    "unitMoney": ""
}, {"x": 1390320000000, "y": 0.893, "equityReturn": 3.8372, "unitMoney": ""}, {
    "x": 1390406400000,
    "y": 0.89,
    "equityReturn": -0.3359,
    "unitMoney": ""
}, {"x": 1390492800000, "y": 0.9, "equityReturn": 1.1236, "unitMoney": ""}, {
    "x": 1390752000000,
    "y": 0.891,
    "equityReturn": -1.0,
    "unitMoney": ""
}, {"x": 1390838400000, "y": 0.895, "equityReturn": 0.4489, "unitMoney": ""}, {
    "x": 1390924800000,
    "y": 0.908,
    "equityReturn": 1.4525,
    "unitMoney": ""
}, {"x": 1391011200000, "y": 0.904, "equityReturn": -0.4405, "unitMoney": ""}, {
    "x": 1391702400000,
    "y": 0.901,
    "equityReturn": -0.3319,
    "unitMoney": ""
}, {"x": 1391961600000, "y": 0.925, "equityReturn": 2.6637, "unitMoney": ""}, {
    "x": 1392048000000,
    "y": 0.928,
    "equityReturn": 0.3243,
    "unitMoney": ""
}, {"x": 1392134400000, "y": 0.929, "equityReturn": 0.1078, "unitMoney": ""}, {
    "x": 1392220800000,
    "y": 0.927,
    "equityReturn": -0.2153,
    "unitMoney": ""
}, {"x": 1392307200000, "y": 0.932, "equityReturn": 0.5394, "unitMoney": ""}, {
    "x": 1392566400000,
    "y": 0.938,
    "equityReturn": 0.6438,
    "unitMoney": ""
}, {"x": 1392652800000, "y": 0.927, "equityReturn": -1.1727, "unitMoney": ""}, {
    "x": 1392739200000,
    "y": 0.928,
    "equityReturn": 0.1079,
    "unitMoney": ""
}, {"x": 1392825600000, "y": 0.938, "equityReturn": 1.0776, "unitMoney": ""}, {
    "x": 1392912000000,
    "y": 0.938,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1393171200000, "y": 0.924, "equityReturn": -1.4925, "unitMoney": ""}, {
    "x": 1393257600000,
    "y": 0.913,
    "equityReturn": -1.1905,
    "unitMoney": ""
}, {"x": 1393344000000, "y": 0.913, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1393430400000,
    "y": 0.925,
    "equityReturn": 1.3143,
    "unitMoney": ""
}, {"x": 1393516800000, "y": 0.899, "equityReturn": -2.8108, "unitMoney": ""}, {
    "x": 1393776000000,
    "y": 0.904,
    "equityReturn": 0.5562,
    "unitMoney": ""
}, {"x": 1393862400000, "y": 0.905, "equityReturn": 0.1106, "unitMoney": ""}, {
    "x": 1393948800000,
    "y": 0.901,
    "equityReturn": -0.442,
    "unitMoney": ""
}, {"x": 1394035200000, "y": 0.903, "equityReturn": 0.222, "unitMoney": ""}, {
    "x": 1394121600000,
    "y": 0.908,
    "equityReturn": 0.5537,
    "unitMoney": ""
}, {"x": 1394380800000, "y": 0.9, "equityReturn": -0.8811, "unitMoney": ""}, {
    "x": 1394467200000,
    "y": 0.898,
    "equityReturn": -0.2222,
    "unitMoney": ""
}, {"x": 1394553600000, "y": 0.899, "equityReturn": 0.1114, "unitMoney": ""}, {
    "x": 1394640000000,
    "y": 0.904,
    "equityReturn": 0.5562,
    "unitMoney": ""
}, {"x": 1394726400000, "y": 0.902, "equityReturn": -0.2212, "unitMoney": ""}, {
    "x": 1394985600000,
    "y": 0.903,
    "equityReturn": 0.1109,
    "unitMoney": ""
}, {"x": 1395072000000, "y": 0.902, "equityReturn": -0.1107, "unitMoney": ""}, {
    "x": 1395158400000,
    "y": 0.896,
    "equityReturn": -0.6652,
    "unitMoney": ""
}, {"x": 1395244800000, "y": 0.895, "equityReturn": -0.1116, "unitMoney": ""}, {
    "x": 1395331200000,
    "y": 0.901,
    "equityReturn": 0.6704,
    "unitMoney": ""
}, {"x": 1395590400000, "y": 0.902, "equityReturn": 0.111, "unitMoney": ""}, {
    "x": 1395676800000,
    "y": 0.902,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1395763200000, "y": 0.901, "equityReturn": -0.1109, "unitMoney": ""}, {
    "x": 1395849600000,
    "y": 0.901,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1395936000000, "y": 0.9, "equityReturn": -0.111, "unitMoney": ""}, {
    "x": 1396195200000,
    "y": 0.899,
    "equityReturn": -0.1111,
    "unitMoney": ""
}, {"x": 1396281600000, "y": 0.901, "equityReturn": 0.2225, "unitMoney": ""}, {
    "x": 1396368000000,
    "y": 0.903,
    "equityReturn": 0.222,
    "unitMoney": ""
}, {"x": 1396454400000, "y": 0.901, "equityReturn": -0.2215, "unitMoney": ""}, {
    "x": 1396540800000,
    "y": 0.904,
    "equityReturn": 0.333,
    "unitMoney": ""
}, {"x": 1396886400000, "y": 0.913, "equityReturn": 0.9956, "unitMoney": ""}, {
    "x": 1396972800000,
    "y": 0.914,
    "equityReturn": 0.1095,
    "unitMoney": ""
}, {"x": 1397059200000, "y": 0.918, "equityReturn": 0.4376, "unitMoney": ""}, {
    "x": 1397145600000,
    "y": 0.918,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1397404800000, "y": 0.918, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1397491200000,
    "y": 0.914,
    "equityReturn": -0.4357,
    "unitMoney": ""
}, {"x": 1397577600000, "y": 0.912, "equityReturn": -0.2188, "unitMoney": ""}, {
    "x": 1397664000000,
    "y": 0.912,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1397750400000, "y": 0.912, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1398009600000,
    "y": 0.908,
    "equityReturn": -0.4386,
    "unitMoney": ""
}, {"x": 1398096000000, "y": 0.908, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1398182400000,
    "y": 0.907,
    "equityReturn": -0.1101,
    "unitMoney": ""
}, {"x": 1398268800000, "y": 0.906, "equityReturn": -0.1103, "unitMoney": ""}, {
    "x": 1398355200000,
    "y": 0.904,
    "equityReturn": -0.2208,
    "unitMoney": ""
}, {"x": 1398614400000, "y": 0.896, "equityReturn": -0.885, "unitMoney": ""}, {
    "x": 1398700800000,
    "y": 0.896,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1398787200000, "y": 0.9, "equityReturn": 0.4464, "unitMoney": ""}, {
    "x": 1399219200000,
    "y": 0.899,
    "equityReturn": -0.1111,
    "unitMoney": ""
}, {"x": 1399305600000, "y": 0.901, "equityReturn": 0.2225, "unitMoney": ""}, {
    "x": 1399392000000,
    "y": 0.899,
    "equityReturn": -0.222,
    "unitMoney": ""
}, {"x": 1399478400000, "y": 0.899, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1399564800000,
    "y": 0.899,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1399824000000, "y": 0.905, "equityReturn": 0.6674, "unitMoney": ""}, {
    "x": 1399910400000,
    "y": 0.904,
    "equityReturn": -0.1105,
    "unitMoney": ""
}, {"x": 1399996800000, "y": 0.901, "equityReturn": -0.3319, "unitMoney": ""}, {
    "x": 1400083200000,
    "y": 0.897,
    "equityReturn": -0.444,
    "unitMoney": ""
}, {"x": 1400169600000, "y": 0.896, "equityReturn": -0.1115, "unitMoney": ""}, {
    "x": 1400428800000,
    "y": 0.888,
    "equityReturn": -0.8929,
    "unitMoney": ""
}, {"x": 1400515200000, "y": 0.887, "equityReturn": -0.1126, "unitMoney": ""}, {
    "x": 1400601600000,
    "y": 0.892,
    "equityReturn": 0.5637,
    "unitMoney": ""
}, {"x": 1400688000000, "y": 0.894, "equityReturn": 0.2242, "unitMoney": ""}, {
    "x": 1400774400000,
    "y": 0.898,
    "equityReturn": 0.4474,
    "unitMoney": ""
}, {"x": 1401033600000, "y": 0.899, "equityReturn": 0.1114, "unitMoney": ""}, {
    "x": 1401120000000,
    "y": 0.9,
    "equityReturn": 0.1112,
    "unitMoney": ""
}, {"x": 1401206400000, "y": 0.904, "equityReturn": 0.4444, "unitMoney": ""}, {
    "x": 1401292800000,
    "y": 0.903,
    "equityReturn": -0.1106,
    "unitMoney": ""
}, {"x": 1401379200000, "y": 0.904, "equityReturn": 0.1107, "unitMoney": ""}, {
    "x": 1401724800000,
    "y": 0.906,
    "equityReturn": 0.2212,
    "unitMoney": ""
}, {"x": 1401811200000, "y": 0.903, "equityReturn": -0.3311, "unitMoney": ""}, {
    "x": 1401897600000,
    "y": 0.906,
    "equityReturn": 0.3322,
    "unitMoney": ""
}, {"x": 1401984000000, "y": 0.908, "equityReturn": 0.2208, "unitMoney": ""}, {
    "x": 1402243200000,
    "y": 0.91,
    "equityReturn": 0.2203,
    "unitMoney": ""
}, {"x": 1402329600000, "y": 0.916, "equityReturn": 0.6593, "unitMoney": ""}, {
    "x": 1402416000000,
    "y": 0.919,
    "equityReturn": 0.3275,
    "unitMoney": ""
}, {"x": 1402502400000, "y": 0.918, "equityReturn": -0.1088, "unitMoney": ""}, {
    "x": 1402588800000,
    "y": 0.929,
    "equityReturn": 1.1983,
    "unitMoney": ""
}, {"x": 1402848000000, "y": 0.935, "equityReturn": 0.6459, "unitMoney": ""}, {
    "x": 1402934400000,
    "y": 0.924,
    "equityReturn": -1.1765,
    "unitMoney": ""
}, {"x": 1403020800000, "y": 0.916, "equityReturn": -0.8658, "unitMoney": ""}, {
    "x": 1403107200000,
    "y": 0.912,
    "equityReturn": -0.4367,
    "unitMoney": ""
}, {"x": 1403193600000, "y": 0.918, "equityReturn": 0.6579, "unitMoney": ""}, {
    "x": 1403452800000,
    "y": 0.921,
    "equityReturn": 0.3268,
    "unitMoney": ""
}, {"x": 1403539200000, "y": 0.923, "equityReturn": 0.2172, "unitMoney": ""}, {
    "x": 1403625600000,
    "y": 0.923,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1403712000000, "y": 0.93, "equityReturn": 0.7584, "unitMoney": ""}, {
    "x": 1403798400000,
    "y": 0.931,
    "equityReturn": 0.1075,
    "unitMoney": ""
}, {"x": 1404057600000, "y": 0.934, "equityReturn": 0.3222, "unitMoney": ""}, {
    "x": 1404144000000,
    "y": 0.929,
    "equityReturn": -0.5353,
    "unitMoney": ""
}, {"x": 1404230400000, "y": 0.93, "equityReturn": 0.1076, "unitMoney": ""}, {
    "x": 1404316800000,
    "y": 0.938,
    "equityReturn": 0.8602,
    "unitMoney": ""
}, {"x": 1404403200000, "y": 0.935, "equityReturn": -0.3198, "unitMoney": ""}, {
    "x": 1404662400000,
    "y": 0.939,
    "equityReturn": 0.4278,
    "unitMoney": ""
}, {"x": 1404748800000, "y": 0.941, "equityReturn": 0.213, "unitMoney": ""}, {
    "x": 1404835200000,
    "y": 0.931,
    "equityReturn": -1.0627,
    "unitMoney": ""
}, {"x": 1404921600000, "y": 0.93, "equityReturn": -0.1074, "unitMoney": ""}, {
    "x": 1405008000000,
    "y": 0.935,
    "equityReturn": 0.5376,
    "unitMoney": ""
}, {"x": 1405267200000, "y": 0.942, "equityReturn": 0.7487, "unitMoney": ""}, {
    "x": 1405353600000,
    "y": 0.945,
    "equityReturn": 0.3185,
    "unitMoney": ""
}, {"x": 1405440000000, "y": 0.942, "equityReturn": -0.3175, "unitMoney": ""}, {
    "x": 1405526400000,
    "y": 0.937,
    "equityReturn": -0.5308,
    "unitMoney": ""
}, {"x": 1405612800000, "y": 0.941, "equityReturn": 0.4269, "unitMoney": ""}, {
    "x": 1405872000000,
    "y": 0.939,
    "equityReturn": -0.2125,
    "unitMoney": ""
}, {"x": 1405958400000, "y": 0.946, "equityReturn": 0.7455, "unitMoney": ""}, {
    "x": 1406044800000,
    "y": 0.949,
    "equityReturn": 0.3171,
    "unitMoney": ""
}, {"x": 1406131200000, "y": 0.955, "equityReturn": 0.6322, "unitMoney": ""}, {
    "x": 1406217600000,
    "y": 0.957,
    "equityReturn": 0.2094,
    "unitMoney": ""
}, {"x": 1406476800000, "y": 0.964, "equityReturn": 0.7315, "unitMoney": ""}, {
    "x": 1406563200000,
    "y": 0.969,
    "equityReturn": 0.5187,
    "unitMoney": ""
}, {"x": 1406649600000, "y": 0.965, "equityReturn": -0.4128, "unitMoney": ""}, {
    "x": 1406736000000,
    "y": 0.968,
    "equityReturn": 0.3109,
    "unitMoney": ""
}, {"x": 1406822400000, "y": 0.97, "equityReturn": 0.2066, "unitMoney": ""}, {
    "x": 1407081600000,
    "y": 0.974,
    "equityReturn": 0.4124,
    "unitMoney": ""
}, {"x": 1407168000000, "y": 0.973, "equityReturn": -0.1027, "unitMoney": ""}, {
    "x": 1407254400000,
    "y": 0.974,
    "equityReturn": 0.1028,
    "unitMoney": ""
}, {"x": 1407340800000, "y": 0.968, "equityReturn": -0.616, "unitMoney": ""}, {
    "x": 1407427200000,
    "y": 0.973,
    "equityReturn": 0.5165,
    "unitMoney": ""
}, {"x": 1407686400000, "y": 0.98, "equityReturn": 0.7194, "unitMoney": ""}, {
    "x": 1407772800000,
    "y": 0.982,
    "equityReturn": 0.2041,
    "unitMoney": ""
}, {"x": 1407859200000, "y": 0.983, "equityReturn": 0.1018, "unitMoney": ""}, {
    "x": 1407945600000,
    "y": 0.981,
    "equityReturn": -0.2035,
    "unitMoney": ""
}, {"x": 1408032000000, "y": 0.984, "equityReturn": 0.3058, "unitMoney": ""}, {
    "x": 1408291200000,
    "y": 0.99,
    "equityReturn": 0.6098,
    "unitMoney": ""
}, {"x": 1408377600000, "y": 0.993, "equityReturn": 0.303, "unitMoney": ""}, {
    "x": 1408464000000,
    "y": 0.994,
    "equityReturn": 0.1007,
    "unitMoney": ""
}, {"x": 1408550400000, "y": 0.99, "equityReturn": -0.4024, "unitMoney": ""}, {
    "x": 1408636800000,
    "y": 0.998,
    "equityReturn": 0.8081,
    "unitMoney": ""
}, {"x": 1408896000000, "y": 0.999, "equityReturn": 0.1002, "unitMoney": ""}, {
    "x": 1408982400000,
    "y": 0.99,
    "equityReturn": -0.9009,
    "unitMoney": ""
}, {"x": 1409068800000, "y": 0.993, "equityReturn": 0.303, "unitMoney": ""}, {
    "x": 1409155200000,
    "y": 0.989,
    "equityReturn": -0.4028,
    "unitMoney": ""
}, {"x": 1409241600000, "y": 0.995, "equityReturn": 0.6067, "unitMoney": ""}, {
    "x": 1409500800000,
    "y": 1.004,
    "equityReturn": 0.9045,
    "unitMoney": ""
}, {"x": 1409587200000, "y": 1.013, "equityReturn": 0.8964, "unitMoney": ""}, {
    "x": 1409673600000,
    "y": 1.02,
    "equityReturn": 0.691,
    "unitMoney": ""
}, {"x": 1409760000000, "y": 1.028, "equityReturn": 0.7843, "unitMoney": ""}, {
    "x": 1409846400000,
    "y": 1.032,
    "equityReturn": 0.3891,
    "unitMoney": ""
}, {"x": 1410192000000, "y": 1.033, "equityReturn": 0.0969, "unitMoney": ""}, {
    "x": 1410278400000,
    "y": 1.037,
    "equityReturn": 0.3872,
    "unitMoney": ""
}, {"x": 1410364800000, "y": 1.039, "equityReturn": 0.1929, "unitMoney": ""}, {
    "x": 1410451200000,
    "y": 1.05,
    "equityReturn": 1.0587,
    "unitMoney": ""
}, {"x": 1410710400000, "y": 1.05, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1410796800000,
    "y": 1.028,
    "equityReturn": -2.0952,
    "unitMoney": ""
}, {"x": 1410883200000, "y": 1.032, "equityReturn": 0.3891, "unitMoney": ""}, {
    "x": 1410969600000,
    "y": 1.039,
    "equityReturn": 0.6783,
    "unitMoney": ""
}, {"x": 1411056000000, "y": 1.047, "equityReturn": 0.77, "unitMoney": ""}, {
    "x": 1411315200000,
    "y": 1.043,
    "equityReturn": -0.382,
    "unitMoney": ""
}, {"x": 1411401600000, "y": 1.048, "equityReturn": 0.4794, "unitMoney": ""}, {
    "x": 1411488000000,
    "y": 1.063,
    "equityReturn": 1.4313,
    "unitMoney": ""
}, {"x": 1411574400000, "y": 1.063, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1411660800000,
    "y": 1.062,
    "equityReturn": -0.0941,
    "unitMoney": ""
}, {"x": 1411920000000, "y": 1.065, "equityReturn": 0.2825, "unitMoney": ""}, {
    "x": 1412006400000,
    "y": 1.073,
    "equityReturn": 0.7512,
    "unitMoney": ""
}, {"x": 1412697600000, "y": 1.071, "equityReturn": -0.1864, "unitMoney": ""}, {
    "x": 1412784000000,
    "y": 1.081,
    "equityReturn": 0.9337,
    "unitMoney": ""
}, {"x": 1412870400000, "y": 1.072, "equityReturn": -0.8326, "unitMoney": ""}, {
    "x": 1413129600000,
    "y": 1.066,
    "equityReturn": -0.5597,
    "unitMoney": ""
}, {"x": 1413216000000, "y": 1.059, "equityReturn": -0.6567, "unitMoney": ""}, {
    "x": 1413302400000,
    "y": 1.061,
    "equityReturn": 0.1889,
    "unitMoney": ""
}, {"x": 1413388800000, "y": 1.059, "equityReturn": -0.1885, "unitMoney": ""}, {
    "x": 1413475200000,
    "y": 1.051,
    "equityReturn": -0.7554,
    "unitMoney": ""
}, {"x": 1413734400000, "y": 1.059, "equityReturn": 0.7612, "unitMoney": ""}, {
    "x": 1413820800000,
    "y": 1.056,
    "equityReturn": -0.2833,
    "unitMoney": ""
}, {"x": 1413907200000, "y": 1.057, "equityReturn": 0.0947, "unitMoney": ""}, {
    "x": 1413993600000,
    "y": 1.045,
    "equityReturn": -1.1353,
    "unitMoney": ""
}, {"x": 1414080000000, "y": 1.044, "equityReturn": -0.0957, "unitMoney": ""}, {
    "x": 1414339200000,
    "y": 1.042,
    "equityReturn": -0.1916,
    "unitMoney": ""
}, {"x": 1414425600000, "y": 1.072, "equityReturn": 2.8791, "unitMoney": ""}, {
    "x": 1414512000000,
    "y": 1.09,
    "equityReturn": 1.6791,
    "unitMoney": ""
}, {"x": 1414598400000, "y": 1.105, "equityReturn": 1.3761, "unitMoney": ""}, {
    "x": 1414684800000,
    "y": 1.125,
    "equityReturn": 1.81,
    "unitMoney": ""
}, {"x": 1414944000000, "y": 1.125, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1415030400000,
    "y": 1.127,
    "equityReturn": 0.1778,
    "unitMoney": ""
}, {"x": 1415116800000, "y": 1.128, "equityReturn": 0.0887, "unitMoney": ""}, {
    "x": 1415203200000,
    "y": 1.138,
    "equityReturn": 0.8865,
    "unitMoney": ""
}, {"x": 1415289600000, "y": 1.142, "equityReturn": 0.3515, "unitMoney": ""}, {
    "x": 1415548800000,
    "y": 1.167,
    "equityReturn": 2.1891,
    "unitMoney": ""
}, {"x": 1415635200000, "y": 1.14, "equityReturn": -2.3136, "unitMoney": ""}, {
    "x": 1415721600000,
    "y": 1.161,
    "equityReturn": 1.8421,
    "unitMoney": ""
}, {"x": 1415808000000, "y": 1.152, "equityReturn": -0.7752, "unitMoney": ""}, {
    "x": 1415894400000,
    "y": 1.142,
    "equityReturn": -0.8681,
    "unitMoney": ""
}, {"x": 1416153600000, "y": 1.13, "equityReturn": -1.0508, "unitMoney": ""}, {
    "x": 1416240000000,
    "y": 1.111,
    "equityReturn": -1.6814,
    "unitMoney": ""
}, {"x": 1416326400000, "y": 1.114, "equityReturn": 0.27, "unitMoney": ""}, {
    "x": 1416412800000,
    "y": 1.128,
    "equityReturn": 1.2567,
    "unitMoney": ""
}, {"x": 1416499200000, "y": 1.151, "equityReturn": 2.039, "unitMoney": ""}, {
    "x": 1416758400000,
    "y": 1.185,
    "equityReturn": 2.954,
    "unitMoney": ""
}, {"x": 1416844800000, "y": 1.198, "equityReturn": 1.097, "unitMoney": ""}, {
    "x": 1416931200000,
    "y": 1.212,
    "equityReturn": 1.1686,
    "unitMoney": ""
}, {"x": 1417017600000, "y": 1.218, "equityReturn": 0.495, "unitMoney": ""}, {
    "x": 1417104000000,
    "y": 1.22,
    "equityReturn": 0.1642,
    "unitMoney": ""
}, {"x": 1417363200000, "y": 1.199, "equityReturn": -1.7213, "unitMoney": ""}, {
    "x": 1417449600000,
    "y": 1.225,
    "equityReturn": 2.1685,
    "unitMoney": ""
}, {"x": 1417536000000, "y": 1.237, "equityReturn": 0.9796, "unitMoney": ""}, {
    "x": 1417622400000,
    "y": 1.296,
    "equityReturn": 4.7696,
    "unitMoney": ""
}, {"x": 1417708800000, "y": 1.274, "equityReturn": -1.6975, "unitMoney": ""}, {
    "x": 1417968000000,
    "y": 1.338,
    "equityReturn": 5.0235,
    "unitMoney": ""
}, {"x": 1418054400000, "y": 1.235, "equityReturn": -7.6981, "unitMoney": ""}, {
    "x": 1418140800000,
    "y": 1.286,
    "equityReturn": 4.1296,
    "unitMoney": ""
}, {"x": 1418227200000, "y": 1.27, "equityReturn": -1.2442, "unitMoney": ""}, {
    "x": 1418313600000,
    "y": 1.279,
    "equityReturn": 0.7087,
    "unitMoney": ""
}, {"x": 1418572800000, "y": 1.289, "equityReturn": 0.7819, "unitMoney": ""}, {
    "x": 1418659200000,
    "y": 1.322,
    "equityReturn": 2.5601,
    "unitMoney": ""
}, {"x": 1418745600000, "y": 1.339, "equityReturn": 1.2859, "unitMoney": ""}, {
    "x": 1418832000000,
    "y": 1.365,
    "equityReturn": 1.9417,
    "unitMoney": ""
}, {"x": 1418918400000, "y": 1.401, "equityReturn": 2.6374, "unitMoney": ""}, {
    "x": 1419177600000,
    "y": 1.442,
    "equityReturn": 2.9265,
    "unitMoney": ""
}, {"x": 1419264000000, "y": 1.408, "equityReturn": -2.3578, "unitMoney": ""}, {
    "x": 1419350400000,
    "y": 1.389,
    "equityReturn": -1.3494,
    "unitMoney": ""
}, {"x": 1419436800000, "y": 1.399, "equityReturn": 0.7199, "unitMoney": ""}, {
    "x": 1419523200000,
    "y": 1.404,
    "equityReturn": 0.3574,
    "unitMoney": ""
}, {"x": 1419782400000, "y": 1.405, "equityReturn": 0.0712, "unitMoney": ""}, {
    "x": 1419868800000,
    "y": 1.195,
    "equityReturn": 0.0,
    "unitMoney": "分红：每份派现金0.21元"
}, {"x": 1419955200000, "y": 1.201, "equityReturn": 0.5021, "unitMoney": ""}, {
    "x": 1420387200000,
    "y": 1.226,
    "equityReturn": 2.0816,
    "unitMoney": ""
}, {"x": 1420473600000, "y": 1.222, "equityReturn": -0.3263, "unitMoney": ""}, {
    "x": 1420560000000,
    "y": 1.248,
    "equityReturn": 2.1277,
    "unitMoney": ""
}, {"x": 1420646400000, "y": 1.216, "equityReturn": -2.5641, "unitMoney": ""}, {
    "x": 1420732800000,
    "y": 1.21,
    "equityReturn": -0.4934,
    "unitMoney": ""
}, {"x": 1420992000000, "y": 1.175, "equityReturn": -2.8926, "unitMoney": ""}, {
    "x": 1421078400000,
    "y": 1.179,
    "equityReturn": 0.3404,
    "unitMoney": ""
}, {"x": 1421164800000, "y": 1.182, "equityReturn": 0.2545, "unitMoney": ""}, {
    "x": 1421251200000,
    "y": 1.206,
    "equityReturn": 2.0305,
    "unitMoney": ""
}, {"x": 1421337600000, "y": 1.218, "equityReturn": 0.995, "unitMoney": ""}, {
    "x": 1421596800000,
    "y": 1.141,
    "equityReturn": -6.3218,
    "unitMoney": ""
}, {"x": 1421683200000, "y": 1.154, "equityReturn": 1.1394, "unitMoney": ""}, {
    "x": 1421769600000,
    "y": 1.197,
    "equityReturn": 3.7262,
    "unitMoney": ""
}, {"x": 1421856000000, "y": 1.196, "equityReturn": -0.0835, "unitMoney": ""}, {
    "x": 1421942400000,
    "y": 1.203,
    "equityReturn": 0.5853,
    "unitMoney": ""
}, {"x": 1422201600000, "y": 1.193, "equityReturn": -0.8313, "unitMoney": ""}, {
    "x": 1422288000000,
    "y": 1.184,
    "equityReturn": -0.7544,
    "unitMoney": ""
}, {"x": 1422374400000, "y": 1.163, "equityReturn": -1.7736, "unitMoney": ""}, {
    "x": 1422460800000,
    "y": 1.153,
    "equityReturn": -0.8598,
    "unitMoney": ""
}, {"x": 1422547200000, "y": 1.137, "equityReturn": -1.3877, "unitMoney": ""}, {
    "x": 1422806400000,
    "y": 1.092,
    "equityReturn": -3.9578,
    "unitMoney": ""
}, {"x": 1422892800000, "y": 1.109, "equityReturn": 1.5568, "unitMoney": ""}, {
    "x": 1422979200000,
    "y": 1.104,
    "equityReturn": -0.4509,
    "unitMoney": ""
}, {"x": 1423065600000, "y": 1.093, "equityReturn": -0.9964, "unitMoney": ""}, {
    "x": 1423152000000,
    "y": 1.075,
    "equityReturn": -1.6468,
    "unitMoney": ""
}, {"x": 1423411200000, "y": 1.07, "equityReturn": -0.4651, "unitMoney": ""}, {
    "x": 1423497600000,
    "y": 1.084,
    "equityReturn": 1.3084,
    "unitMoney": ""
}, {"x": 1423584000000, "y": 1.088, "equityReturn": 0.369, "unitMoney": ""}, {
    "x": 1423670400000,
    "y": 1.099,
    "equityReturn": 1.011,
    "unitMoney": ""
}, {"x": 1423756800000, "y": 1.118, "equityReturn": 1.7288, "unitMoney": ""}, {
    "x": 1424016000000,
    "y": 1.131,
    "equityReturn": 1.1628,
    "unitMoney": ""
}, {"x": 1424102400000, "y": 1.144, "equityReturn": 1.1494, "unitMoney": ""}, {
    "x": 1424793600000,
    "y": 1.123,
    "equityReturn": -1.8357,
    "unitMoney": ""
}, {"x": 1424880000000, "y": 1.137, "equityReturn": 1.2467, "unitMoney": ""}, {
    "x": 1424966400000,
    "y": 1.132,
    "equityReturn": -0.4398,
    "unitMoney": ""
}, {"x": 1425225600000, "y": 1.145, "equityReturn": 1.1484, "unitMoney": ""}, {
    "x": 1425312000000,
    "y": 1.135,
    "equityReturn": -0.8734,
    "unitMoney": ""
}, {"x": 1425398400000, "y": 1.135, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1425484800000,
    "y": 1.123,
    "equityReturn": -1.0573,
    "unitMoney": ""
}, {"x": 1425571200000, "y": 1.118, "equityReturn": -0.4452, "unitMoney": ""}, {
    "x": 1425830400000,
    "y": 1.119,
    "equityReturn": 0.0894,
    "unitMoney": ""
}, {"x": 1425916800000, "y": 1.12, "equityReturn": 0.0894, "unitMoney": ""}, {
    "x": 1426003200000,
    "y": 1.124,
    "equityReturn": 0.3571,
    "unitMoney": ""
}, {"x": 1426089600000, "y": 1.136, "equityReturn": 1.0676, "unitMoney": ""}, {
    "x": 1426176000000,
    "y": 1.139,
    "equityReturn": 0.2641,
    "unitMoney": ""
}, {"x": 1426435200000, "y": 1.176, "equityReturn": 3.2485, "unitMoney": ""}, {
    "x": 1426521600000,
    "y": 1.199,
    "equityReturn": 1.9558,
    "unitMoney": ""
}, {"x": 1426608000000, "y": 1.203, "equityReturn": 0.3336, "unitMoney": ""}, {
    "x": 1426694400000,
    "y": 1.197,
    "equityReturn": -0.4988,
    "unitMoney": ""
}, {"x": 1426780800000, "y": 1.205, "equityReturn": 0.6683, "unitMoney": ""}, {
    "x": 1427040000000,
    "y": 1.218,
    "equityReturn": 1.0788,
    "unitMoney": ""
}, {"x": 1427126400000, "y": 1.201, "equityReturn": -1.3957, "unitMoney": ""}, {
    "x": 1427212800000,
    "y": 1.178,
    "equityReturn": -1.9151,
    "unitMoney": ""
}, {"x": 1427299200000, "y": 1.17, "equityReturn": -0.6791, "unitMoney": ""}, {
    "x": 1427385600000,
    "y": 1.175,
    "equityReturn": 0.4274,
    "unitMoney": ""
}, {"x": 1427644800000, "y": 1.195, "equityReturn": 1.7021, "unitMoney": ""}, {
    "x": 1427731200000,
    "y": 1.178,
    "equityReturn": -1.4226,
    "unitMoney": ""
}, {"x": 1427817600000, "y": 1.205, "equityReturn": 2.292, "unitMoney": ""}, {
    "x": 1427904000000,
    "y": 1.223,
    "equityReturn": 1.4938,
    "unitMoney": ""
}, {"x": 1427990400000, "y": 1.25, "equityReturn": 2.2077, "unitMoney": ""}, {
    "x": 1428336000000,
    "y": 1.271,
    "equityReturn": 1.68,
    "unitMoney": ""
}, {"x": 1428422400000, "y": 1.243, "equityReturn": -2.203, "unitMoney": ""}, {
    "x": 1428508800000,
    "y": 1.212,
    "equityReturn": -2.494,
    "unitMoney": ""
}, {"x": 1428595200000, "y": 1.241, "equityReturn": 2.3927, "unitMoney": ""}, {
    "x": 1428854400000,
    "y": 1.266,
    "equityReturn": 2.0145,
    "unitMoney": ""
}, {"x": 1428940800000, "y": 1.262, "equityReturn": -0.316, "unitMoney": ""}, {
    "x": 1429027200000,
    "y": 1.233,
    "equityReturn": -2.2979,
    "unitMoney": ""
}, {"x": 1429113600000, "y": 1.268, "equityReturn": 2.8386, "unitMoney": ""}, {
    "x": 1429200000000,
    "y": 1.309,
    "equityReturn": 3.2334,
    "unitMoney": ""
}, {"x": 1429459200000, "y": 1.27, "equityReturn": -2.9794, "unitMoney": ""}, {
    "x": 1429545600000,
    "y": 1.316,
    "equityReturn": 3.622,
    "unitMoney": ""
}, {"x": 1429632000000, "y": 1.425, "equityReturn": 8.2827, "unitMoney": ""}, {
    "x": 1429718400000,
    "y": 1.426,
    "equityReturn": 0.0702,
    "unitMoney": ""
}, {"x": 1429804800000, "y": 1.431, "equityReturn": 0.3506, "unitMoney": ""}, {
    "x": 1430064000000,
    "y": 1.449,
    "equityReturn": 1.2579,
    "unitMoney": ""
}, {"x": 1430150400000, "y": 1.405, "equityReturn": -3.0366, "unitMoney": ""}, {
    "x": 1430236800000,
    "y": 1.418,
    "equityReturn": 0.9253,
    "unitMoney": ""
}, {"x": 1430323200000, "y": 1.429, "equityReturn": 0.7757, "unitMoney": ""}, {
    "x": 1430668800000,
    "y": 1.442,
    "equityReturn": 0.9097,
    "unitMoney": ""
}, {"x": 1430755200000, "y": 1.382, "equityReturn": -4.1609, "unitMoney": ""}, {
    "x": 1430841600000,
    "y": 1.354,
    "equityReturn": -2.026,
    "unitMoney": ""
}, {"x": 1430928000000, "y": 1.33, "equityReturn": -1.7725, "unitMoney": ""}, {
    "x": 1431014400000,
    "y": 1.351,
    "equityReturn": 1.5789,
    "unitMoney": ""
}, {"x": 1431273600000, "y": 1.392, "equityReturn": 3.0348, "unitMoney": ""}, {
    "x": 1431360000000,
    "y": 1.419,
    "equityReturn": 1.9397,
    "unitMoney": ""
}, {"x": 1431446400000, "y": 1.403, "equityReturn": -1.1276, "unitMoney": ""}, {
    "x": 1431532800000,
    "y": 1.416,
    "equityReturn": 0.9266,
    "unitMoney": ""
}, {"x": 1431619200000, "y": 1.405, "equityReturn": -0.7768, "unitMoney": ""}, {
    "x": 1431878400000,
    "y": 1.406,
    "equityReturn": 0.0712,
    "unitMoney": ""
}, {"x": 1431964800000, "y": 1.429, "equityReturn": 1.6358, "unitMoney": ""}, {
    "x": 1432051200000,
    "y": 1.44,
    "equityReturn": 0.7698,
    "unitMoney": ""
}, {"x": 1432137600000, "y": 1.482, "equityReturn": 2.9167, "unitMoney": ""}, {
    "x": 1432224000000,
    "y": 1.499,
    "equityReturn": 1.1471,
    "unitMoney": ""
}, {"x": 1432483200000, "y": 1.57, "equityReturn": 4.7365, "unitMoney": ""}, {
    "x": 1432569600000,
    "y": 1.645,
    "equityReturn": 4.7771,
    "unitMoney": ""
}, {"x": 1432656000000, "y": 1.659, "equityReturn": 0.8511, "unitMoney": ""}, {
    "x": 1432742400000,
    "y": 1.548,
    "equityReturn": -6.6908,
    "unitMoney": ""
}, {"x": 1432828800000, "y": 1.571, "equityReturn": 1.4858, "unitMoney": ""}, {
    "x": 1433088000000,
    "y": 1.731,
    "equityReturn": 10.1846,
    "unitMoney": ""
}, {"x": 1433174400000, "y": 1.72, "equityReturn": -0.6355, "unitMoney": ""}, {
    "x": 1433260800000,
    "y": 1.684,
    "equityReturn": -2.093,
    "unitMoney": ""
}, {"x": 1433347200000, "y": 1.689, "equityReturn": 0.2969, "unitMoney": ""}, {
    "x": 1433433600000,
    "y": 1.721,
    "equityReturn": 1.8946,
    "unitMoney": ""
}, {"x": 1433692800000, "y": 1.69, "equityReturn": -1.8013, "unitMoney": ""}, {
    "x": 1433779200000,
    "y": 1.667,
    "equityReturn": -1.3609,
    "unitMoney": ""
}, {"x": 1433865600000, "y": 1.646, "equityReturn": -1.2597, "unitMoney": ""}, {
    "x": 1433952000000,
    "y": 1.642,
    "equityReturn": -0.243,
    "unitMoney": ""
}, {"x": 1434038400000, "y": 1.668, "equityReturn": 1.5834, "unitMoney": ""}, {
    "x": 1434297600000,
    "y": 1.67,
    "equityReturn": 0.1199,
    "unitMoney": ""
}, {"x": 1434384000000, "y": 1.583, "equityReturn": -5.2096, "unitMoney": ""}, {
    "x": 1434470400000,
    "y": 1.596,
    "equityReturn": 0.8212,
    "unitMoney": ""
}, {"x": 1434556800000, "y": 1.528, "equityReturn": -4.2607, "unitMoney": ""}, {
    "x": 1434643200000,
    "y": 1.433,
    "equityReturn": -6.2173,
    "unitMoney": ""
}, {"x": 1434988800000, "y": 1.419, "equityReturn": -0.977, "unitMoney": ""}, {
    "x": 1435075200000,
    "y": 1.467,
    "equityReturn": 3.3827,
    "unitMoney": ""
}, {"x": 1435161600000, "y": 1.383, "equityReturn": -5.726, "unitMoney": ""}, {
    "x": 1435248000000,
    "y": 1.205,
    "equityReturn": -12.8706,
    "unitMoney": ""
}, {"x": 1435507200000, "y": 1.122, "equityReturn": -6.888, "unitMoney": ""}, {
    "x": 1435593600000,
    "y": 1.213,
    "equityReturn": 8.1105,
    "unitMoney": ""
}, {"x": 1435680000000, "y": 1.121, "equityReturn": -7.5845, "unitMoney": ""}, {
    "x": 1435766400000,
    "y": 1.048,
    "equityReturn": -6.512,
    "unitMoney": ""
}, {"x": 1435852800000, "y": 1.07, "equityReturn": 2.0992, "unitMoney": ""}, {
    "x": 1436112000000,
    "y": 1.097,
    "equityReturn": 2.5234,
    "unitMoney": ""
}, {"x": 1436198400000, "y": 0.995, "equityReturn": -9.2981, "unitMoney": ""}, {
    "x": 1436284800000,
    "y": 0.922,
    "equityReturn": -7.3367,
    "unitMoney": ""
}, {"x": 1436371200000, "y": 0.977, "equityReturn": 5.9653, "unitMoney": ""}, {
    "x": 1436457600000,
    "y": 1.013,
    "equityReturn": 3.6847,
    "unitMoney": ""
}, {"x": 1436716800000, "y": 1.077, "equityReturn": 6.3179, "unitMoney": ""}, {
    "x": 1436803200000,
    "y": 1.07,
    "equityReturn": -0.65,
    "unitMoney": ""
}, {"x": 1436889600000, "y": 1.014, "equityReturn": -5.2336, "unitMoney": ""}, {
    "x": 1436976000000,
    "y": 1.02,
    "equityReturn": 0.5917,
    "unitMoney": ""
}, {"x": 1437062400000, "y": 1.068, "equityReturn": 4.7059, "unitMoney": ""}, {
    "x": 1437321600000,
    "y": 1.101,
    "equityReturn": 3.0899,
    "unitMoney": ""
}, {"x": 1437408000000, "y": 1.129, "equityReturn": 2.5431, "unitMoney": ""}, {
    "x": 1437494400000,
    "y": 1.138,
    "equityReturn": 0.7972,
    "unitMoney": ""
}, {"x": 1437580800000, "y": 1.175, "equityReturn": 3.2513, "unitMoney": ""}, {
    "x": 1437667200000,
    "y": 1.147,
    "equityReturn": -2.383,
    "unitMoney": ""
}, {"x": 1437926400000, "y": 1.072, "equityReturn": -6.5388, "unitMoney": ""}, {
    "x": 1438012800000,
    "y": 1.069,
    "equityReturn": -0.2799,
    "unitMoney": ""
}, {"x": 1438099200000, "y": 1.089, "equityReturn": 1.8709, "unitMoney": ""}, {
    "x": 1438185600000,
    "y": 1.062,
    "equityReturn": -2.4793,
    "unitMoney": ""
}, {"x": 1438272000000, "y": 1.048, "equityReturn": -1.3183, "unitMoney": ""}, {
    "x": 1438531200000,
    "y": 1.031,
    "equityReturn": -1.6221,
    "unitMoney": ""
}, {"x": 1438617600000, "y": 1.075, "equityReturn": 4.2677, "unitMoney": ""}, {
    "x": 1438704000000,
    "y": 1.066,
    "equityReturn": -0.8372,
    "unitMoney": ""
}, {"x": 1438790400000, "y": 1.064, "equityReturn": -0.1876, "unitMoney": ""}, {
    "x": 1438876800000,
    "y": 1.097,
    "equityReturn": 3.1015,
    "unitMoney": ""
}, {"x": 1439136000000, "y": 1.153, "equityReturn": 5.1048, "unitMoney": ""}, {
    "x": 1439222400000,
    "y": 1.122,
    "equityReturn": -2.6886,
    "unitMoney": ""
}, {"x": 1439308800000, "y": 1.102, "equityReturn": -1.7825, "unitMoney": ""}, {
    "x": 1439395200000,
    "y": 1.125,
    "equityReturn": 2.0871,
    "unitMoney": ""
}, {"x": 1439481600000, "y": 1.123, "equityReturn": -0.1778, "unitMoney": ""}, {
    "x": 1439740800000,
    "y": 1.118,
    "equityReturn": -0.4452,
    "unitMoney": ""
}, {"x": 1439827200000, "y": 1.042, "equityReturn": -6.7979, "unitMoney": ""}, {
    "x": 1439913600000,
    "y": 1.053,
    "equityReturn": 1.0557,
    "unitMoney": ""
}, {"x": 1440000000000, "y": 1.025, "equityReturn": -2.6591, "unitMoney": ""}, {
    "x": 1440086400000,
    "y": 0.998,
    "equityReturn": -2.6341,
    "unitMoney": ""
}, {"x": 1440345600000, "y": 0.926, "equityReturn": -7.2144, "unitMoney": ""}, {
    "x": 1440432000000,
    "y": 0.907,
    "equityReturn": -2.0518,
    "unitMoney": ""
}, {"x": 1440518400000, "y": 0.914, "equityReturn": 0.7718, "unitMoney": ""}, {
    "x": 1440604800000,
    "y": 0.943,
    "equityReturn": 3.1729,
    "unitMoney": ""
}, {"x": 1440691200000, "y": 0.971, "equityReturn": 2.9692, "unitMoney": ""}, {
    "x": 1440950400000,
    "y": 0.948,
    "equityReturn": -2.3687,
    "unitMoney": ""
}, {"x": 1441036800000, "y": 0.926, "equityReturn": -2.3207, "unitMoney": ""}, {
    "x": 1441123200000,
    "y": 0.917,
    "equityReturn": -0.9719,
    "unitMoney": ""
}, {"x": 1441555200000, "y": 0.925, "equityReturn": 0.8724, "unitMoney": ""}, {
    "x": 1441641600000,
    "y": 0.952,
    "equityReturn": 2.9189,
    "unitMoney": ""
}, {"x": 1441728000000, "y": 0.971, "equityReturn": 1.9958, "unitMoney": ""}, {
    "x": 1441814400000,
    "y": 0.951,
    "equityReturn": -2.0597,
    "unitMoney": ""
}, {"x": 1441900800000, "y": 0.961, "equityReturn": 1.0515, "unitMoney": ""}, {
    "x": 1442160000000,
    "y": 0.928,
    "equityReturn": -3.4339,
    "unitMoney": ""
}, {"x": 1442246400000, "y": 0.91, "equityReturn": -1.9397, "unitMoney": ""}, {
    "x": 1442332800000,
    "y": 0.94,
    "equityReturn": 3.2967,
    "unitMoney": ""
}, {"x": 1442419200000, "y": 0.931, "equityReturn": -0.9574, "unitMoney": ""}, {
    "x": 1442505600000,
    "y": 0.936,
    "equityReturn": 0.5371,
    "unitMoney": ""
}, {"x": 1442764800000, "y": 0.961, "equityReturn": 2.6709, "unitMoney": ""}, {
    "x": 1442851200000,
    "y": 0.965,
    "equityReturn": 0.4162,
    "unitMoney": ""
}, {"x": 1442937600000, "y": 0.953, "equityReturn": -1.2435, "unitMoney": ""}, {
    "x": 1443024000000,
    "y": 0.958,
    "equityReturn": 0.5247,
    "unitMoney": ""
}, {"x": 1443110400000, "y": 0.946, "equityReturn": -1.2526, "unitMoney": ""}, {
    "x": 1443369600000,
    "y": 0.95,
    "equityReturn": 0.4228,
    "unitMoney": ""
}, {"x": 1443456000000, "y": 0.945, "equityReturn": -0.5263, "unitMoney": ""}, {
    "x": 1443542400000,
    "y": 0.945,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1444233600000, "y": 0.958, "equityReturn": 1.3757, "unitMoney": ""}, {
    "x": 1444320000000,
    "y": 0.961,
    "equityReturn": 0.3132,
    "unitMoney": ""
}, {"x": 1444579200000, "y": 0.981, "equityReturn": 2.0812, "unitMoney": ""}, {
    "x": 1444665600000,
    "y": 0.991,
    "equityReturn": 1.0194,
    "unitMoney": ""
}, {"x": 1444752000000, "y": 0.984, "equityReturn": -0.7064, "unitMoney": ""}, {
    "x": 1444838400000,
    "y": 1.0,
    "equityReturn": 1.626,
    "unitMoney": ""
}, {"x": 1444924800000, "y": 1.02, "equityReturn": 2.0, "unitMoney": ""}, {
    "x": 1445184000000,
    "y": 1.013,
    "equityReturn": -0.6863,
    "unitMoney": ""
}, {"x": 1445270400000, "y": 1.023, "equityReturn": 0.9872, "unitMoney": ""}, {
    "x": 1445356800000,
    "y": 0.996,
    "equityReturn": -2.6393,
    "unitMoney": ""
}, {"x": 1445443200000, "y": 1.01, "equityReturn": 1.4056, "unitMoney": ""}, {
    "x": 1445529600000,
    "y": 1.021,
    "equityReturn": 1.0891,
    "unitMoney": ""
}, {"x": 1445788800000, "y": 1.042, "equityReturn": 2.0568, "unitMoney": ""}, {
    "x": 1445875200000,
    "y": 1.049,
    "equityReturn": 0.6718,
    "unitMoney": ""
}, {"x": 1445961600000, "y": 1.032, "equityReturn": -1.6206, "unitMoney": ""}, {
    "x": 1446048000000,
    "y": 1.036,
    "equityReturn": 0.3876,
    "unitMoney": ""
}, {"x": 1446134400000, "y": 1.046, "equityReturn": 0.9653, "unitMoney": ""}, {
    "x": 1446393600000,
    "y": 1.027,
    "equityReturn": -1.8164,
    "unitMoney": ""
}, {"x": 1446480000000, "y": 1.025, "equityReturn": -0.1947, "unitMoney": ""}, {
    "x": 1446566400000,
    "y": 1.056,
    "equityReturn": 3.0244,
    "unitMoney": ""
}, {"x": 1446652800000, "y": 1.057, "equityReturn": 0.0947, "unitMoney": ""}, {
    "x": 1446739200000,
    "y": 1.088,
    "equityReturn": 2.9328,
    "unitMoney": ""
}, {"x": 1446998400000, "y": 1.085, "equityReturn": -0.2757, "unitMoney": ""}, {
    "x": 1447084800000,
    "y": 1.101,
    "equityReturn": 1.4747,
    "unitMoney": ""
}, {"x": 1447171200000, "y": 1.107, "equityReturn": 0.545, "unitMoney": ""}, {
    "x": 1447257600000,
    "y": 1.108,
    "equityReturn": 0.0903,
    "unitMoney": ""
}, {"x": 1447344000000, "y": 1.087, "equityReturn": -1.8953, "unitMoney": ""}, {
    "x": 1447603200000,
    "y": 1.093,
    "equityReturn": 0.552,
    "unitMoney": ""
}, {"x": 1447689600000, "y": 1.081, "equityReturn": -1.0979, "unitMoney": ""}, {
    "x": 1447776000000,
    "y": 1.066,
    "equityReturn": -1.3876,
    "unitMoney": ""
}, {"x": 1447862400000, "y": 1.09, "equityReturn": 2.2514, "unitMoney": ""}, {
    "x": 1447948800000,
    "y": 1.091,
    "equityReturn": 0.0917,
    "unitMoney": ""
}, {"x": 1448208000000, "y": 1.084, "equityReturn": -0.6416, "unitMoney": ""}, {
    "x": 1448294400000,
    "y": 1.079,
    "equityReturn": -0.4613,
    "unitMoney": ""
}, {"x": 1448380800000, "y": 1.086, "equityReturn": 0.6487, "unitMoney": ""}, {
    "x": 1448467200000,
    "y": 1.087,
    "equityReturn": 0.0921,
    "unitMoney": ""
}, {"x": 1448553600000, "y": 1.062, "equityReturn": -2.2999, "unitMoney": ""}, {
    "x": 1448812800000,
    "y": 1.062,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1448899200000, "y": 1.06, "equityReturn": -0.1883, "unitMoney": ""}, {
    "x": 1448985600000,
    "y": 1.061,
    "equityReturn": 0.0943,
    "unitMoney": ""
}, {"x": 1449072000000, "y": 1.071, "equityReturn": 0.9425, "unitMoney": ""}, {
    "x": 1449158400000,
    "y": 1.066,
    "equityReturn": -0.4669,
    "unitMoney": ""
}, {"x": 1449417600000, "y": 1.107, "equityReturn": 3.8462, "unitMoney": ""}, {
    "x": 1449504000000,
    "y": 1.092,
    "equityReturn": -1.355,
    "unitMoney": ""
}, {"x": 1449590400000, "y": 1.078, "equityReturn": -1.2821, "unitMoney": ""}, {
    "x": 1449676800000,
    "y": 1.073,
    "equityReturn": -0.4638,
    "unitMoney": ""
}, {"x": 1449763200000, "y": 1.064, "equityReturn": -0.8388, "unitMoney": ""}, {
    "x": 1450022400000,
    "y": 1.072,
    "equityReturn": 0.7519,
    "unitMoney": ""
}, {"x": 1450108800000, "y": 1.074, "equityReturn": 0.1866, "unitMoney": ""}, {
    "x": 1450195200000,
    "y": 1.082,
    "equityReturn": 0.7449,
    "unitMoney": ""
}, {"x": 1450281600000, "y": 1.091, "equityReturn": 0.8318, "unitMoney": ""}, {
    "x": 1450368000000,
    "y": 1.083,
    "equityReturn": -0.7333,
    "unitMoney": ""
}, {"x": 1450627200000, "y": 1.086, "equityReturn": 0.277, "unitMoney": ""}, {
    "x": 1450713600000,
    "y": 1.089,
    "equityReturn": 0.2762,
    "unitMoney": ""
}, {"x": 1450800000000, "y": 1.085, "equityReturn": -0.3673, "unitMoney": ""}, {
    "x": 1450886400000,
    "y": 1.086,
    "equityReturn": 0.0922,
    "unitMoney": ""
}, {"x": 1450972800000, "y": 1.088, "equityReturn": 0.1842, "unitMoney": ""}, {
    "x": 1451232000000,
    "y": 1.073,
    "equityReturn": -1.3787,
    "unitMoney": ""
}, {"x": 1451318400000, "y": 1.072, "equityReturn": -0.0932, "unitMoney": ""}, {
    "x": 1451404800000,
    "y": 1.07,
    "equityReturn": -0.1866,
    "unitMoney": ""
}, {"x": 1451491200000, "y": 1.064, "equityReturn": -0.5607, "unitMoney": ""}, {
    "x": 1451836800000,
    "y": 1.026,
    "equityReturn": -3.5714,
    "unitMoney": ""
}, {"x": 1451923200000, "y": 1.009, "equityReturn": -1.6569, "unitMoney": ""}, {
    "x": 1452009600000,
    "y": 1.012,
    "equityReturn": 0.2973,
    "unitMoney": ""
}, {"x": 1452096000000, "y": 0.982, "equityReturn": -2.9644, "unitMoney": ""}, {
    "x": 1452182400000,
    "y": 0.98,
    "equityReturn": -0.2037,
    "unitMoney": ""
}, {"x": 1452441600000, "y": 0.957, "equityReturn": -2.3469, "unitMoney": ""}, {
    "x": 1452528000000,
    "y": 0.97,
    "equityReturn": 1.3584,
    "unitMoney": ""
}, {"x": 1452614400000, "y": 0.964, "equityReturn": -0.6186, "unitMoney": ""}, {
    "x": 1452700800000,
    "y": 0.984,
    "equityReturn": 2.0747,
    "unitMoney": ""
}, {"x": 1452787200000, "y": 0.972, "equityReturn": -1.2195, "unitMoney": ""}, {
    "x": 1453046400000,
    "y": 0.963,
    "equityReturn": -0.9259,
    "unitMoney": ""
}, {"x": 1453132800000, "y": 0.945, "equityReturn": -1.8692, "unitMoney": ""}, {
    "x": 1453219200000,
    "y": 0.917,
    "equityReturn": -2.963,
    "unitMoney": ""
}, {"x": 1453305600000, "y": 0.906, "equityReturn": -1.1996, "unitMoney": ""}, {
    "x": 1453392000000,
    "y": 0.912,
    "equityReturn": 0.6623,
    "unitMoney": ""
}, {"x": 1453651200000, "y": 0.925, "equityReturn": 1.4254, "unitMoney": ""}, {
    "x": 1453737600000,
    "y": 0.902,
    "equityReturn": -2.4865,
    "unitMoney": ""
}, {"x": 1453824000000, "y": 0.904, "equityReturn": 0.2217, "unitMoney": ""}, {
    "x": 1453910400000,
    "y": 0.9,
    "equityReturn": -0.4425,
    "unitMoney": ""
}, {"x": 1453996800000, "y": 0.913, "equityReturn": 1.4444, "unitMoney": ""}, {
    "x": 1454256000000,
    "y": 0.911,
    "equityReturn": -0.2191,
    "unitMoney": ""
}, {"x": 1454342400000, "y": 0.922, "equityReturn": 1.2075, "unitMoney": ""}, {
    "x": 1454428800000,
    "y": 0.925,
    "equityReturn": 0.3254,
    "unitMoney": ""
}, {"x": 1454515200000, "y": 0.935, "equityReturn": 1.0811, "unitMoney": ""}, {
    "x": 1454601600000,
    "y": 0.93,
    "equityReturn": -0.5348,
    "unitMoney": ""
}, {"x": 1455465600000, "y": 0.928, "equityReturn": -0.2151, "unitMoney": ""}, {
    "x": 1455552000000,
    "y": 0.947,
    "equityReturn": 2.0474,
    "unitMoney": ""
}, {"x": 1455638400000, "y": 0.954, "equityReturn": 0.7392, "unitMoney": ""}, {
    "x": 1455724800000,
    "y": 0.954,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1455811200000, "y": 0.953, "equityReturn": -0.1048, "unitMoney": ""}, {
    "x": 1456070400000,
    "y": 0.959,
    "equityReturn": 0.6296,
    "unitMoney": ""
}, {"x": 1456156800000, "y": 0.949, "equityReturn": -1.0428, "unitMoney": ""}, {
    "x": 1456243200000,
    "y": 0.942,
    "equityReturn": -0.7376,
    "unitMoney": ""
}, {"x": 1456329600000, "y": 0.919, "equityReturn": -2.4416, "unitMoney": ""}, {
    "x": 1456416000000,
    "y": 0.916,
    "equityReturn": -0.3264,
    "unitMoney": ""
}, {"x": 1456675200000, "y": 0.904, "equityReturn": -1.31, "unitMoney": ""}, {
    "x": 1456761600000,
    "y": 0.906,
    "equityReturn": 0.2212,
    "unitMoney": ""
}, {"x": 1456848000000, "y": 0.931, "equityReturn": 2.7594, "unitMoney": ""}, {
    "x": 1456934400000,
    "y": 0.926,
    "equityReturn": -0.5371,
    "unitMoney": ""
}, {"x": 1457020800000, "y": 0.914, "equityReturn": -1.2959, "unitMoney": ""}, {
    "x": 1457280000000,
    "y": 0.918,
    "equityReturn": 0.4376,
    "unitMoney": ""
}, {"x": 1457366400000, "y": 0.922, "equityReturn": 0.4357, "unitMoney": ""}, {
    "x": 1457452800000,
    "y": 0.918,
    "equityReturn": -0.4338,
    "unitMoney": ""
}, {"x": 1457539200000, "y": 0.91, "equityReturn": -0.8715, "unitMoney": ""}, {
    "x": 1457625600000,
    "y": 0.908,
    "equityReturn": -0.2198,
    "unitMoney": ""
}, {"x": 1457884800000, "y": 0.917, "equityReturn": 0.9912, "unitMoney": ""}, {
    "x": 1457971200000,
    "y": 0.916,
    "equityReturn": -0.1091,
    "unitMoney": ""
}, {"x": 1458057600000, "y": 0.914, "equityReturn": -0.2183, "unitMoney": ""}, {
    "x": 1458144000000,
    "y": 0.925,
    "equityReturn": 1.2035,
    "unitMoney": ""
}, {"x": 1458230400000, "y": 0.941, "equityReturn": 1.7297, "unitMoney": ""}, {
    "x": 1458489600000,
    "y": 0.949,
    "equityReturn": 0.8502,
    "unitMoney": ""
}, {"x": 1458576000000, "y": 0.949, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1458662400000,
    "y": 0.951,
    "equityReturn": 0.2107,
    "unitMoney": ""
}, {"x": 1458748800000, "y": 0.943, "equityReturn": -0.8412, "unitMoney": ""}, {
    "x": 1458835200000,
    "y": 0.944,
    "equityReturn": 0.106,
    "unitMoney": ""
}, {"x": 1459094400000, "y": 0.94, "equityReturn": -0.4237, "unitMoney": ""}, {
    "x": 1459180800000,
    "y": 0.932,
    "equityReturn": -0.8511,
    "unitMoney": ""
}, {"x": 1459267200000, "y": 0.939, "equityReturn": 0.7511, "unitMoney": ""}, {
    "x": 1459353600000,
    "y": 0.939,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1459440000000, "y": 0.936, "equityReturn": -0.3195, "unitMoney": ""}, {
    "x": 1459785600000,
    "y": 0.953,
    "equityReturn": 1.8162,
    "unitMoney": ""
}, {"x": 1459872000000, "y": 0.951, "equityReturn": -0.2099, "unitMoney": ""}, {
    "x": 1459958400000,
    "y": 0.941,
    "equityReturn": -1.0515,
    "unitMoney": ""
}, {"x": 1460044800000, "y": 0.935, "equityReturn": -0.6376, "unitMoney": ""}, {
    "x": 1460304000000,
    "y": 0.944,
    "equityReturn": 0.9626,
    "unitMoney": ""
}, {"x": 1460390400000, "y": 0.945, "equityReturn": 0.1059, "unitMoney": ""}, {
    "x": 1460476800000,
    "y": 0.952,
    "equityReturn": 0.7407,
    "unitMoney": ""
}, {"x": 1460563200000, "y": 0.955, "equityReturn": 0.3151, "unitMoney": ""}, {
    "x": 1460649600000,
    "y": 0.938,
    "equityReturn": -1.7801,
    "unitMoney": ""
}, {"x": 1460908800000, "y": 0.929, "equityReturn": -0.9595, "unitMoney": ""}, {
    "x": 1460995200000,
    "y": 0.935,
    "equityReturn": 0.6459,
    "unitMoney": ""
}, {"x": 1461081600000, "y": 0.915, "equityReturn": -2.139, "unitMoney": ""}, {
    "x": 1461168000000,
    "y": 0.906,
    "equityReturn": -0.9836,
    "unitMoney": ""
}, {"x": 1461254400000, "y": 0.907, "equityReturn": 0.1104, "unitMoney": ""}, {
    "x": 1461513600000,
    "y": 0.897,
    "equityReturn": -1.1025,
    "unitMoney": ""
}, {"x": 1461600000000, "y": 0.896, "equityReturn": -0.1115, "unitMoney": ""}, {
    "x": 1461686400000,
    "y": 0.895,
    "equityReturn": -0.1116,
    "unitMoney": ""
}, {"x": 1461772800000, "y": 0.889, "equityReturn": -0.6704, "unitMoney": ""}, {
    "x": 1461859200000,
    "y": 0.887,
    "equityReturn": -0.225,
    "unitMoney": ""
}, {"x": 1462204800000, "y": 0.898, "equityReturn": 1.2401, "unitMoney": ""}, {
    "x": 1462291200000,
    "y": 0.899,
    "equityReturn": 0.1114,
    "unitMoney": ""
}, {"x": 1462377600000, "y": 0.9, "equityReturn": 0.1112, "unitMoney": ""}, {
    "x": 1462464000000,
    "y": 0.891,
    "equityReturn": -1.0,
    "unitMoney": ""
}, {"x": 1462723200000, "y": 0.875, "equityReturn": -1.7957, "unitMoney": ""}, {
    "x": 1462809600000,
    "y": 0.878,
    "equityReturn": 0.3429,
    "unitMoney": ""
}, {"x": 1462896000000, "y": 0.866, "equityReturn": -1.3667, "unitMoney": ""}, {
    "x": 1462982400000,
    "y": 0.865,
    "equityReturn": -0.1155,
    "unitMoney": ""
}, {"x": 1463068800000, "y": 0.863, "equityReturn": -0.2312, "unitMoney": ""}, {
    "x": 1463328000000,
    "y": 0.869,
    "equityReturn": 0.6952,
    "unitMoney": ""
}, {"x": 1463414400000, "y": 0.867, "equityReturn": -0.2301, "unitMoney": ""}, {
    "x": 1463500800000,
    "y": 0.86,
    "equityReturn": -0.8074,
    "unitMoney": ""
}, {"x": 1463587200000, "y": 0.855, "equityReturn": -0.5814, "unitMoney": ""}, {
    "x": 1463673600000,
    "y": 0.855,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1463932800000, "y": 0.859, "equityReturn": 0.4678, "unitMoney": ""}, {
    "x": 1464019200000,
    "y": 0.862,
    "equityReturn": 0.3492,
    "unitMoney": ""
}, {"x": 1464105600000, "y": 0.859, "equityReturn": -0.348, "unitMoney": ""}, {
    "x": 1464192000000,
    "y": 0.86,
    "equityReturn": 0.1164,
    "unitMoney": ""
}, {"x": 1464278400000, "y": 0.86, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1464537600000,
    "y": 0.86,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1464624000000, "y": 0.871, "equityReturn": 1.2791, "unitMoney": ""}, {
    "x": 1464710400000,
    "y": 0.871,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1464796800000, "y": 0.87, "equityReturn": -0.1148, "unitMoney": ""}, {
    "x": 1464883200000,
    "y": 0.871,
    "equityReturn": 0.1149,
    "unitMoney": ""
}, {"x": 1465142400000, "y": 0.872, "equityReturn": 0.1148, "unitMoney": ""}, {
    "x": 1465228800000,
    "y": 0.861,
    "equityReturn": -1.2615,
    "unitMoney": ""
}, {"x": 1465315200000, "y": 0.86, "equityReturn": -0.1161, "unitMoney": ""}, {
    "x": 1465747200000,
    "y": 0.847,
    "equityReturn": -1.5116,
    "unitMoney": ""
}, {"x": 1465833600000, "y": 0.848, "equityReturn": 0.1181, "unitMoney": ""}, {
    "x": 1465920000000,
    "y": 0.854,
    "equityReturn": 0.7075,
    "unitMoney": ""
}, {"x": 1466006400000, "y": 0.854, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1466092800000,
    "y": 0.856,
    "equityReturn": 0.2342,
    "unitMoney": ""
}, {"x": 1466352000000, "y": 0.856, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1466438400000,
    "y": 0.855,
    "equityReturn": -0.1168,
    "unitMoney": ""
}, {"x": 1466524800000, "y": 0.858, "equityReturn": 0.3509, "unitMoney": ""}, {
    "x": 1466611200000,
    "y": 0.859,
    "equityReturn": 0.1166,
    "unitMoney": ""
}, {"x": 1466697600000, "y": 0.857, "equityReturn": -0.2328, "unitMoney": ""}, {
    "x": 1466956800000,
    "y": 0.862,
    "equityReturn": 0.5834,
    "unitMoney": ""
}, {"x": 1467043200000, "y": 0.863, "equityReturn": 0.116, "unitMoney": ""}, {
    "x": 1467129600000,
    "y": 0.863,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1467216000000, "y": 0.862, "equityReturn": -0.1159, "unitMoney": ""}, {
    "x": 1467302400000,
    "y": 0.861,
    "equityReturn": -0.116,
    "unitMoney": ""
}, {"x": 1467561600000, "y": 0.871, "equityReturn": 1.1614, "unitMoney": ""}, {
    "x": 1467648000000,
    "y": 0.878,
    "equityReturn": 0.8037,
    "unitMoney": ""
}, {"x": 1467734400000, "y": 0.881, "equityReturn": 0.3417, "unitMoney": ""}, {
    "x": 1467820800000,
    "y": 0.881,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1467907200000, "y": 0.875, "equityReturn": -0.681, "unitMoney": ""}, {
    "x": 1468166400000,
    "y": 0.87,
    "equityReturn": -0.5714,
    "unitMoney": ""
}, {"x": 1468252800000, "y": 0.873, "equityReturn": 0.3448, "unitMoney": ""}, {
    "x": 1468339200000,
    "y": 0.884,
    "equityReturn": 1.26,
    "unitMoney": ""
}, {"x": 1468425600000, "y": 0.885, "equityReturn": 0.1131, "unitMoney": ""}, {
    "x": 1468512000000,
    "y": 0.882,
    "equityReturn": -0.339,
    "unitMoney": ""
}, {"x": 1468771200000, "y": 0.879, "equityReturn": -0.3401, "unitMoney": ""}, {
    "x": 1468857600000,
    "y": 0.879,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1468944000000, "y": 0.877, "equityReturn": -0.2275, "unitMoney": ""}, {
    "x": 1469030400000,
    "y": 0.879,
    "equityReturn": 0.2281,
    "unitMoney": ""
}, {"x": 1469116800000, "y": 0.876, "equityReturn": -0.3413, "unitMoney": ""}, {
    "x": 1469376000000,
    "y": 0.872,
    "equityReturn": -0.4566,
    "unitMoney": ""
}, {"x": 1469462400000, "y": 0.875, "equityReturn": 0.344, "unitMoney": ""}, {
    "x": 1469548800000,
    "y": 0.862,
    "equityReturn": -1.4857,
    "unitMoney": ""
}, {"x": 1469635200000, "y": 0.857, "equityReturn": -0.58, "unitMoney": ""}, {
    "x": 1469721600000,
    "y": 0.848,
    "equityReturn": -1.0502,
    "unitMoney": ""
}, {"x": 1469980800000, "y": 0.844, "equityReturn": -0.4717, "unitMoney": ""}, {
    "x": 1470067200000,
    "y": 0.849,
    "equityReturn": 0.5924,
    "unitMoney": ""
}, {"x": 1470153600000, "y": 0.852, "equityReturn": 0.3534, "unitMoney": ""}, {
    "x": 1470240000000,
    "y": 0.856,
    "equityReturn": 0.4695,
    "unitMoney": ""
}, {"x": 1470326400000, "y": 0.856, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1470585600000,
    "y": 0.858,
    "equityReturn": 0.2336,
    "unitMoney": ""
}, {"x": 1470672000000, "y": 0.862, "equityReturn": 0.4662, "unitMoney": ""}, {
    "x": 1470758400000,
    "y": 0.861,
    "equityReturn": -0.116,
    "unitMoney": ""
}, {"x": 1470844800000, "y": 0.86, "equityReturn": -0.1161, "unitMoney": ""}, {
    "x": 1470931200000,
    "y": 0.865,
    "equityReturn": 0.5814,
    "unitMoney": ""
}, {"x": 1471190400000, "y": 0.887, "equityReturn": 2.5434, "unitMoney": ""}, {
    "x": 1471276800000,
    "y": 0.887,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1471363200000, "y": 0.884, "equityReturn": -0.3382, "unitMoney": ""}, {
    "x": 1471449600000,
    "y": 0.891,
    "equityReturn": 0.7919,
    "unitMoney": ""
}, {"x": 1471536000000, "y": 0.889, "equityReturn": -0.2245, "unitMoney": ""}, {
    "x": 1471795200000,
    "y": 0.885,
    "equityReturn": -0.4499,
    "unitMoney": ""
}, {"x": 1471881600000, "y": 0.881, "equityReturn": -0.452, "unitMoney": ""}, {
    "x": 1471968000000,
    "y": 0.879,
    "equityReturn": -0.227,
    "unitMoney": ""
}, {"x": 1472054400000, "y": 0.875, "equityReturn": -0.4551, "unitMoney": ""}, {
    "x": 1472140800000,
    "y": 0.874,
    "equityReturn": -0.1143,
    "unitMoney": ""
}, {"x": 1472400000000, "y": 0.872, "equityReturn": -0.2288, "unitMoney": ""}, {
    "x": 1472486400000,
    "y": 0.872,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1472572800000, "y": 0.873, "equityReturn": 0.1147, "unitMoney": ""}, {
    "x": 1472659200000,
    "y": 0.871,
    "equityReturn": -0.2291,
    "unitMoney": ""
}, {"x": 1472745600000, "y": 0.87, "equityReturn": -0.1148, "unitMoney": ""}, {
    "x": 1473004800000,
    "y": 0.871,
    "equityReturn": 0.1149,
    "unitMoney": ""
}, {"x": 1473091200000, "y": 0.876, "equityReturn": 0.5741, "unitMoney": ""}, {
    "x": 1473177600000,
    "y": 0.877,
    "equityReturn": 0.1142,
    "unitMoney": ""
}, {"x": 1473264000000, "y": 0.878, "equityReturn": 0.114, "unitMoney": ""}, {
    "x": 1473350400000,
    "y": 0.876,
    "equityReturn": -0.2278,
    "unitMoney": ""
}, {"x": 1473609600000, "y": 0.866, "equityReturn": -1.1416, "unitMoney": ""}, {
    "x": 1473696000000,
    "y": 0.866,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1473782400000, "y": 0.866, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1474214400000,
    "y": 0.866,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1474300800000, "y": 0.865, "equityReturn": -0.1155, "unitMoney": ""}, {
    "x": 1474387200000,
    "y": 0.866,
    "equityReturn": 0.1156,
    "unitMoney": ""
}, {"x": 1474473600000, "y": 0.868, "equityReturn": 0.2309, "unitMoney": ""}, {
    "x": 1474560000000,
    "y": 0.866,
    "equityReturn": -0.2304,
    "unitMoney": ""
}, {"x": 1474819200000, "y": 0.856, "equityReturn": -1.1547, "unitMoney": ""}, {
    "x": 1474905600000,
    "y": 0.858,
    "equityReturn": 0.2336,
    "unitMoney": ""
}, {"x": 1474992000000, "y": 0.858, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1475078400000,
    "y": 0.86,
    "equityReturn": 0.2331,
    "unitMoney": ""
}, {"x": 1475164800000, "y": 0.86, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1476028800000,
    "y": 0.863,
    "equityReturn": 0.3488,
    "unitMoney": ""
}, {"x": 1476115200000, "y": 0.865, "equityReturn": 0.2317, "unitMoney": ""}, {
    "x": 1476201600000,
    "y": 0.863,
    "equityReturn": -0.2312,
    "unitMoney": ""
}, {"x": 1476288000000, "y": 0.864, "equityReturn": 0.1159, "unitMoney": ""}, {
    "x": 1476374400000,
    "y": 0.863,
    "equityReturn": -0.1157,
    "unitMoney": ""
}, {"x": 1476633600000, "y": 0.863, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1476720000000,
    "y": 0.869,
    "equityReturn": 0.6952,
    "unitMoney": ""
}, {"x": 1476806400000, "y": 0.869, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1476892800000,
    "y": 0.87,
    "equityReturn": 0.1151,
    "unitMoney": ""
}, {"x": 1476979200000, "y": 0.872, "equityReturn": 0.2299, "unitMoney": ""}, {
    "x": 1477238400000,
    "y": 0.874,
    "equityReturn": 0.2294,
    "unitMoney": ""
}, {"x": 1477324800000, "y": 0.874, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1477411200000,
    "y": 0.872,
    "equityReturn": -0.2288,
    "unitMoney": ""
}, {"x": 1477497600000, "y": 0.866, "equityReturn": -0.6881, "unitMoney": ""}, {
    "x": 1477584000000,
    "y": 0.867,
    "equityReturn": 0.1155,
    "unitMoney": ""
}, {"x": 1477843200000, "y": 0.866, "equityReturn": -0.1153, "unitMoney": ""}, {
    "x": 1477929600000,
    "y": 0.868,
    "equityReturn": 0.2309,
    "unitMoney": ""
}, {"x": 1478016000000, "y": 0.865, "equityReturn": -0.3456, "unitMoney": ""}, {
    "x": 1478102400000,
    "y": 0.868,
    "equityReturn": 0.3468,
    "unitMoney": ""
}, {"x": 1478188800000, "y": 0.87, "equityReturn": 0.2304, "unitMoney": ""}, {
    "x": 1478448000000,
    "y": 0.871,
    "equityReturn": 0.1149,
    "unitMoney": ""
}, {"x": 1478534400000, "y": 0.871, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1478620800000,
    "y": 0.869,
    "equityReturn": -0.2296,
    "unitMoney": ""
}, {"x": 1478707200000, "y": 0.871, "equityReturn": 0.2301, "unitMoney": ""}, {
    "x": 1478793600000,
    "y": 0.873,
    "equityReturn": 0.2296,
    "unitMoney": ""
}, {"x": 1479052800000, "y": 0.875, "equityReturn": 0.2291, "unitMoney": ""}, {
    "x": 1479139200000,
    "y": 0.876,
    "equityReturn": 0.1143,
    "unitMoney": ""
}, {"x": 1479225600000, "y": 0.878, "equityReturn": 0.2283, "unitMoney": ""}, {
    "x": 1479312000000,
    "y": 0.877,
    "equityReturn": -0.1139,
    "unitMoney": ""
}, {"x": 1479398400000, "y": 0.876, "equityReturn": -0.114, "unitMoney": ""}, {
    "x": 1479657600000,
    "y": 0.877,
    "equityReturn": 0.1142,
    "unitMoney": ""
}, {"x": 1479744000000, "y": 0.881, "equityReturn": 0.4561, "unitMoney": ""}, {
    "x": 1479830400000,
    "y": 0.881,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1479916800000, "y": 0.88, "equityReturn": -0.1135, "unitMoney": ""}, {
    "x": 1480003200000,
    "y": 0.881,
    "equityReturn": 0.1136,
    "unitMoney": ""
}, {"x": 1480262400000, "y": 0.88, "equityReturn": -0.1135, "unitMoney": ""}, {
    "x": 1480348800000,
    "y": 0.875,
    "equityReturn": -0.5682,
    "unitMoney": ""
}, {"x": 1480435200000, "y": 0.871, "equityReturn": -0.4571, "unitMoney": ""}, {
    "x": 1480521600000,
    "y": 0.868,
    "equityReturn": -0.3444,
    "unitMoney": ""
}, {"x": 1480608000000, "y": 0.861, "equityReturn": -0.8065, "unitMoney": ""}, {
    "x": 1480867200000,
    "y": 0.849,
    "equityReturn": -1.3937,
    "unitMoney": ""
}, {"x": 1480953600000, "y": 0.846, "equityReturn": -0.3534, "unitMoney": ""}, {
    "x": 1481040000000,
    "y": 0.851,
    "equityReturn": 0.591,
    "unitMoney": ""
}, {"x": 1481126400000, "y": 0.852, "equityReturn": 0.1175, "unitMoney": ""}, {
    "x": 1481212800000,
    "y": 0.849,
    "equityReturn": -0.3521,
    "unitMoney": ""
}, {"x": 1481472000000, "y": 0.83, "equityReturn": -2.2379, "unitMoney": ""}, {
    "x": 1481558400000,
    "y": 0.825,
    "equityReturn": -0.6024,
    "unitMoney": ""
}, {"x": 1481644800000, "y": 0.822, "equityReturn": -0.3636, "unitMoney": ""}, {
    "x": 1481731200000,
    "y": 0.812,
    "equityReturn": -1.2165,
    "unitMoney": ""
}, {"x": 1481817600000, "y": 0.816, "equityReturn": 0.4926, "unitMoney": ""}, {
    "x": 1482076800000,
    "y": 0.81,
    "equityReturn": -0.7353,
    "unitMoney": ""
}, {"x": 1482163200000, "y": 0.804, "equityReturn": -0.7407, "unitMoney": ""}, {
    "x": 1482249600000,
    "y": 0.812,
    "equityReturn": 0.995,
    "unitMoney": ""
}, {"x": 1482336000000, "y": 0.814, "equityReturn": 0.2463, "unitMoney": ""}, {
    "x": 1482422400000,
    "y": 0.815,
    "equityReturn": 0.1229,
    "unitMoney": ""
}, {"x": 1482681600000, "y": 0.815, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1482768000000,
    "y": 0.817,
    "equityReturn": 0.2454,
    "unitMoney": ""
}, {"x": 1482854400000, "y": 0.814, "equityReturn": -0.3672, "unitMoney": ""}, {
    "x": 1482940800000,
    "y": 0.814,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1483027200000, "y": 0.815, "equityReturn": 0.1229, "unitMoney": ""}, {
    "x": 1483113600000,
    "y": 0.815,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1483372800000, "y": 0.816, "equityReturn": 0.1227, "unitMoney": ""}, {
    "x": 1483459200000,
    "y": 0.818,
    "equityReturn": 0.2451,
    "unitMoney": ""
}, {"x": 1483545600000, "y": 0.819, "equityReturn": 0.1222, "unitMoney": ""}, {
    "x": 1483632000000,
    "y": 0.817,
    "equityReturn": -0.2442,
    "unitMoney": ""
}, {"x": 1483891200000, "y": 0.818, "equityReturn": 0.1224, "unitMoney": ""}, {
    "x": 1483977600000,
    "y": 0.817,
    "equityReturn": -0.1222,
    "unitMoney": ""
}, {"x": 1484064000000, "y": 0.816, "equityReturn": -0.1224, "unitMoney": ""}, {
    "x": 1484150400000,
    "y": 0.815,
    "equityReturn": -0.1225,
    "unitMoney": ""
}, {"x": 1484236800000, "y": 0.813, "equityReturn": -0.2454, "unitMoney": ""}, {
    "x": 1484496000000,
    "y": 0.807,
    "equityReturn": -0.738,
    "unitMoney": ""
}, {"x": 1484582400000, "y": 0.807, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1484668800000,
    "y": 0.805,
    "equityReturn": -0.2478,
    "unitMoney": ""
}, {"x": 1484755200000, "y": 0.805, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1484841600000,
    "y": 0.807,
    "equityReturn": 0.2484,
    "unitMoney": ""
}, {"x": 1485100800000, "y": 0.807, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1485187200000,
    "y": 0.806,
    "equityReturn": -0.1239,
    "unitMoney": ""
}, {"x": 1485273600000, "y": 0.807, "equityReturn": 0.1241, "unitMoney": ""}, {
    "x": 1485360000000,
    "y": 0.808,
    "equityReturn": 0.1239,
    "unitMoney": ""
}, {"x": 1486051200000, "y": 0.805, "equityReturn": -0.3713, "unitMoney": ""}, {
    "x": 1486310400000,
    "y": 0.806,
    "equityReturn": 0.1242,
    "unitMoney": ""
}, {"x": 1486396800000, "y": 0.805, "equityReturn": -0.1241, "unitMoney": ""}, {
    "x": 1486483200000,
    "y": 0.805,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1486569600000, "y": 0.808, "equityReturn": 0.3727, "unitMoney": ""}, {
    "x": 1486656000000,
    "y": 0.809,
    "equityReturn": 0.1238,
    "unitMoney": ""
}, {"x": 1486915200000, "y": 0.811, "equityReturn": 0.2472, "unitMoney": ""}, {
    "x": 1487001600000,
    "y": 0.811,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1487088000000, "y": 0.809, "equityReturn": -0.2466, "unitMoney": ""}, {
    "x": 1487174400000,
    "y": 0.809,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1487260800000, "y": 0.807, "equityReturn": -0.2472, "unitMoney": ""}, {
    "x": 1487520000000,
    "y": 0.81,
    "equityReturn": 0.3717,
    "unitMoney": ""
}, {"x": 1487606400000, "y": 0.812, "equityReturn": 0.2469, "unitMoney": ""}, {
    "x": 1487692800000,
    "y": 0.812,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1487779200000, "y": 0.81, "equityReturn": -0.2463, "unitMoney": ""}, {
    "x": 1487865600000,
    "y": 0.81,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1488124800000, "y": 0.809, "equityReturn": -0.1235, "unitMoney": ""}, {
    "x": 1488211200000,
    "y": 0.81,
    "equityReturn": 0.1236,
    "unitMoney": ""
}, {"x": 1488297600000, "y": 0.809, "equityReturn": -0.1235, "unitMoney": ""}, {
    "x": 1488384000000,
    "y": 0.807,
    "equityReturn": -0.2472,
    "unitMoney": ""
}, {"x": 1488470400000, "y": 0.807, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1488729600000,
    "y": 0.808,
    "equityReturn": 0.1239,
    "unitMoney": ""
}, {"x": 1488816000000, "y": 0.811, "equityReturn": 0.3713, "unitMoney": ""}, {
    "x": 1488902400000,
    "y": 0.809,
    "equityReturn": -0.2466,
    "unitMoney": ""
}, {"x": 1488988800000, "y": 0.808, "equityReturn": -0.1236, "unitMoney": ""}, {
    "x": 1489075200000,
    "y": 0.807,
    "equityReturn": -0.1238,
    "unitMoney": ""
}, {"x": 1489334400000, "y": 0.809, "equityReturn": 0.2478, "unitMoney": ""}, {
    "x": 1489420800000,
    "y": 0.807,
    "equityReturn": -0.2472,
    "unitMoney": ""
}, {"x": 1489507200000, "y": 0.808, "equityReturn": 0.1239, "unitMoney": ""}, {
    "x": 1489593600000,
    "y": 0.808,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1489680000000, "y": 0.806, "equityReturn": -0.2475, "unitMoney": ""}, {
    "x": 1489939200000,
    "y": 0.805,
    "equityReturn": -0.1241,
    "unitMoney": ""
}, {"x": 1490025600000, "y": 0.805, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1490112000000,
    "y": 0.803,
    "equityReturn": -0.2484,
    "unitMoney": ""
}, {"x": 1490198400000, "y": 0.804, "equityReturn": 0.1245, "unitMoney": ""}, {
    "x": 1490284800000,
    "y": 0.805,
    "equityReturn": 0.1244,
    "unitMoney": ""
}, {"x": 1490544000000, "y": 0.804, "equityReturn": -0.1242, "unitMoney": ""}, {
    "x": 1490630400000,
    "y": 0.804,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1490716800000, "y": 0.804, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1490803200000,
    "y": 0.799,
    "equityReturn": -0.6219,
    "unitMoney": ""
}, {"x": 1490889600000, "y": 0.801, "equityReturn": 0.2503, "unitMoney": ""}, {
    "x": 1491321600000,
    "y": 0.803,
    "equityReturn": 0.2497,
    "unitMoney": ""
}, {"x": 1491408000000, "y": 0.804, "equityReturn": 0.1245, "unitMoney": ""}, {
    "x": 1491494400000,
    "y": 0.803,
    "equityReturn": -0.1244,
    "unitMoney": ""
}, {"x": 1491753600000, "y": 0.802, "equityReturn": -0.1245, "unitMoney": ""}, {
    "x": 1491840000000,
    "y": 0.806,
    "equityReturn": 0.4988,
    "unitMoney": ""
}, {"x": 1491926400000, "y": 0.81, "equityReturn": 0.4963, "unitMoney": ""}, {
    "x": 1492012800000,
    "y": 0.809,
    "equityReturn": -0.1235,
    "unitMoney": ""
}, {"x": 1492099200000, "y": 0.807, "equityReturn": -0.2472, "unitMoney": ""}, {
    "x": 1492358400000,
    "y": 0.803,
    "equityReturn": -0.4957,
    "unitMoney": ""
}, {"x": 1492444800000, "y": 0.803, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1492531200000,
    "y": 0.802,
    "equityReturn": -0.1245,
    "unitMoney": ""
}, {"x": 1492617600000, "y": 0.803, "equityReturn": 0.1247, "unitMoney": ""}, {
    "x": 1492704000000,
    "y": 0.803,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1492963200000, "y": 0.8, "equityReturn": -0.3736, "unitMoney": ""}, {
    "x": 1493049600000,
    "y": 0.801,
    "equityReturn": 0.125,
    "unitMoney": ""
}, {"x": 1493136000000, "y": 0.803, "equityReturn": 0.2497, "unitMoney": ""}, {
    "x": 1493222400000,
    "y": 0.803,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1493308800000, "y": 0.804, "equityReturn": 0.1245, "unitMoney": ""}, {
    "x": 1493654400000,
    "y": 0.804,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1493740800000, "y": 0.806, "equityReturn": 0.2488, "unitMoney": ""}, {
    "x": 1493827200000,
    "y": 0.805,
    "equityReturn": -0.1241,
    "unitMoney": ""
}, {"x": 1493913600000, "y": 0.805, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1494172800000,
    "y": 0.774,
    "equityReturn": -3.8509,
    "unitMoney": ""
}, {"x": 1494259200000, "y": 0.771, "equityReturn": -0.3876, "unitMoney": ""}, {
    "x": 1494345600000,
    "y": 0.768,
    "equityReturn": -0.3891,
    "unitMoney": ""
}, {"x": 1494432000000, "y": 0.766, "equityReturn": -0.2604, "unitMoney": ""}, {
    "x": 1494518400000,
    "y": 0.768,
    "equityReturn": 0.2611,
    "unitMoney": ""
}, {"x": 1494777600000, "y": 0.769, "equityReturn": 0.1302, "unitMoney": ""}, {
    "x": 1494864000000,
    "y": 0.771,
    "equityReturn": 0.2601,
    "unitMoney": ""
}, {"x": 1494950400000, "y": 0.772, "equityReturn": 0.1297, "unitMoney": ""}, {
    "x": 1495036800000,
    "y": 0.772,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1495123200000, "y": 0.771, "equityReturn": -0.1295, "unitMoney": ""}, {
    "x": 1495382400000,
    "y": 0.767,
    "equityReturn": -0.5188,
    "unitMoney": ""
}, {"x": 1495468800000, "y": 0.765, "equityReturn": -0.2608, "unitMoney": ""}, {
    "x": 1495555200000,
    "y": 0.767,
    "equityReturn": 0.2614,
    "unitMoney": ""
}, {"x": 1495641600000, "y": 0.767, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1495728000000,
    "y": 0.769,
    "equityReturn": 0.2608,
    "unitMoney": ""
}, {"x": 1496160000000, "y": 0.77, "equityReturn": 0.13, "unitMoney": ""}, {
    "x": 1496246400000,
    "y": 0.768,
    "equityReturn": -0.2597,
    "unitMoney": ""
}, {"x": 1496332800000, "y": 0.768, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1496592000000,
    "y": 0.769,
    "equityReturn": 0.1302,
    "unitMoney": ""
}, {"x": 1496678400000, "y": 0.77, "equityReturn": 0.13, "unitMoney": ""}, {
    "x": 1496764800000,
    "y": 0.774,
    "equityReturn": 0.5195,
    "unitMoney": ""
}, {"x": 1496851200000, "y": 0.775, "equityReturn": 0.1292, "unitMoney": ""}, {
    "x": 1496937600000,
    "y": 0.779,
    "equityReturn": 0.5161,
    "unitMoney": ""
}, {"x": 1497196800000, "y": 0.781, "equityReturn": 0.2567, "unitMoney": ""}, {
    "x": 1497283200000,
    "y": 0.783,
    "equityReturn": 0.2561,
    "unitMoney": ""
}, {"x": 1497369600000, "y": 0.782, "equityReturn": -0.1277, "unitMoney": ""}, {
    "x": 1497456000000,
    "y": 0.785,
    "equityReturn": 0.3836,
    "unitMoney": ""
}, {"x": 1497542400000, "y": 0.786, "equityReturn": 0.1274, "unitMoney": ""}, {
    "x": 1497801600000,
    "y": 0.793,
    "equityReturn": 0.8906,
    "unitMoney": ""
}, {"x": 1497888000000, "y": 0.799, "equityReturn": 0.7566, "unitMoney": ""}, {
    "x": 1497974400000,
    "y": 0.8,
    "equityReturn": 0.1252,
    "unitMoney": ""
}, {"x": 1498060800000, "y": 0.799, "equityReturn": -0.125, "unitMoney": ""}, {
    "x": 1498147200000,
    "y": 0.802,
    "equityReturn": 0.3755,
    "unitMoney": ""
}, {"x": 1498406400000, "y": 0.806, "equityReturn": 0.4988, "unitMoney": ""}, {
    "x": 1498492800000,
    "y": 0.806,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1498579200000, "y": 0.804, "equityReturn": -0.2481, "unitMoney": ""}, {
    "x": 1498665600000,
    "y": 0.798,
    "equityReturn": -0.7463,
    "unitMoney": ""
}, {"x": 1498752000000, "y": 0.796, "equityReturn": -0.2506, "unitMoney": ""}, {
    "x": 1499011200000,
    "y": 0.798,
    "equityReturn": 0.2513,
    "unitMoney": ""
}, {"x": 1499097600000, "y": 0.799, "equityReturn": 0.1253, "unitMoney": ""}, {
    "x": 1499184000000,
    "y": 0.805,
    "equityReturn": 0.7509,
    "unitMoney": ""
}, {"x": 1499270400000, "y": 0.807, "equityReturn": 0.2484, "unitMoney": ""}, {
    "x": 1499356800000,
    "y": 0.809,
    "equityReturn": 0.2478,
    "unitMoney": ""
}, {"x": 1499616000000, "y": 0.805, "equityReturn": -0.4944, "unitMoney": ""}, {
    "x": 1499702400000,
    "y": 0.806,
    "equityReturn": 0.1242,
    "unitMoney": ""
}, {"x": 1499788800000, "y": 0.803, "equityReturn": -0.3722, "unitMoney": ""}, {
    "x": 1499875200000,
    "y": 0.807,
    "equityReturn": 0.4981,
    "unitMoney": ""
}, {"x": 1499961600000, "y": 0.811, "equityReturn": 0.4957, "unitMoney": ""}, {
    "x": 1500220800000,
    "y": 0.806,
    "equityReturn": -0.6165,
    "unitMoney": ""
}, {"x": 1500307200000, "y": 0.806, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1500393600000,
    "y": 0.812,
    "equityReturn": 0.7444,
    "unitMoney": ""
}, {"x": 1500480000000, "y": 0.819, "equityReturn": 0.8621, "unitMoney": ""}, {
    "x": 1500566400000,
    "y": 0.827,
    "equityReturn": 0.9768,
    "unitMoney": ""
}, {"x": 1500825600000, "y": 0.829, "equityReturn": 0.2418, "unitMoney": ""}, {
    "x": 1500912000000,
    "y": 0.819,
    "equityReturn": -1.2063,
    "unitMoney": ""
}, {"x": 1500998400000, "y": 0.82, "equityReturn": 0.1221, "unitMoney": ""}, {
    "x": 1501084800000,
    "y": 0.821,
    "equityReturn": 0.122,
    "unitMoney": ""
}, {"x": 1501171200000, "y": 0.826, "equityReturn": 0.609, "unitMoney": ""}, {
    "x": 1501430400000,
    "y": 0.832,
    "equityReturn": 0.7264,
    "unitMoney": ""
}, {"x": 1501516800000, "y": 0.834, "equityReturn": 0.2404, "unitMoney": ""}, {
    "x": 1501603200000,
    "y": 0.836,
    "equityReturn": 0.2398,
    "unitMoney": ""
}, {"x": 1501689600000, "y": 0.831, "equityReturn": -0.5981, "unitMoney": ""}, {
    "x": 1501776000000,
    "y": 0.83,
    "equityReturn": -0.1203,
    "unitMoney": ""
}, {"x": 1502035200000, "y": 0.828, "equityReturn": -0.241, "unitMoney": ""}, {
    "x": 1502121600000,
    "y": 0.827,
    "equityReturn": -0.1208,
    "unitMoney": ""
}, {"x": 1502208000000, "y": 0.823, "equityReturn": -0.4837, "unitMoney": ""}, {
    "x": 1502294400000,
    "y": 0.818,
    "equityReturn": -0.6075,
    "unitMoney": ""
}, {"x": 1502380800000, "y": 0.81, "equityReturn": -0.978, "unitMoney": ""}, {
    "x": 1502640000000,
    "y": 0.818,
    "equityReturn": 0.9877,
    "unitMoney": ""
}, {"x": 1502726400000, "y": 0.817, "equityReturn": -0.1222, "unitMoney": ""}, {
    "x": 1502812800000,
    "y": 0.816,
    "equityReturn": -0.1224,
    "unitMoney": ""
}, {"x": 1502899200000, "y": 0.819, "equityReturn": 0.3676, "unitMoney": ""}, {
    "x": 1502985600000,
    "y": 0.82,
    "equityReturn": 0.1221,
    "unitMoney": ""
}, {"x": 1503244800000, "y": 0.823, "equityReturn": 0.3659, "unitMoney": ""}, {
    "x": 1503331200000,
    "y": 0.824,
    "equityReturn": 0.1215,
    "unitMoney": ""
}, {"x": 1503417600000, "y": 0.821, "equityReturn": -0.3641, "unitMoney": ""}, {
    "x": 1503504000000,
    "y": 0.818,
    "equityReturn": -0.3654,
    "unitMoney": ""
}, {"x": 1503590400000, "y": 0.821, "equityReturn": 0.3667, "unitMoney": ""}, {
    "x": 1503849600000,
    "y": 0.829,
    "equityReturn": 0.9744,
    "unitMoney": ""
}, {"x": 1503936000000, "y": 0.834, "equityReturn": 0.6031, "unitMoney": ""}, {
    "x": 1504022400000,
    "y": 0.832,
    "equityReturn": -0.2398,
    "unitMoney": ""
}, {"x": 1504108800000, "y": 0.835, "equityReturn": 0.3606, "unitMoney": ""}, {
    "x": 1504195200000,
    "y": 0.833,
    "equityReturn": -0.2395,
    "unitMoney": ""
}, {"x": 1504454400000, "y": 0.832, "equityReturn": -0.12, "unitMoney": ""}, {
    "x": 1504540800000,
    "y": 0.836,
    "equityReturn": 0.4808,
    "unitMoney": ""
}, {"x": 1504627200000, "y": 0.835, "equityReturn": -0.1196, "unitMoney": ""}, {
    "x": 1504713600000,
    "y": 0.835,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1504800000000, "y": 0.835, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1505059200000,
    "y": 0.835,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1505145600000, "y": 0.831, "equityReturn": -0.479, "unitMoney": ""}, {
    "x": 1505232000000,
    "y": 0.831,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1505318400000, "y": 0.826, "equityReturn": -0.6017, "unitMoney": ""}, {
    "x": 1505404800000,
    "y": 0.825,
    "equityReturn": -0.1211,
    "unitMoney": ""
}, {"x": 1505664000000, "y": 0.825, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1505750400000,
    "y": 0.824,
    "equityReturn": -0.1212,
    "unitMoney": ""
}, {"x": 1505836800000, "y": 0.824, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1505923200000,
    "y": 0.823,
    "equityReturn": -0.1214,
    "unitMoney": ""
}, {"x": 1506009600000, "y": 0.819, "equityReturn": -0.486, "unitMoney": ""}, {
    "x": 1506268800000,
    "y": 0.814,
    "equityReturn": -0.6105,
    "unitMoney": ""
}, {"x": 1506355200000, "y": 0.814, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1506441600000,
    "y": 0.816,
    "equityReturn": 0.2457,
    "unitMoney": ""
}, {"x": 1506528000000, "y": 0.815, "equityReturn": -0.1225, "unitMoney": ""}, {
    "x": 1506614400000,
    "y": 0.821,
    "equityReturn": 0.7362,
    "unitMoney": ""
}, {"x": 1507478400000, "y": 0.823, "equityReturn": 0.2436, "unitMoney": ""}, {
    "x": 1507564800000,
    "y": 0.823,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1507651200000, "y": 0.825, "equityReturn": 0.243, "unitMoney": ""}, {
    "x": 1507737600000,
    "y": 0.829,
    "equityReturn": 0.4848,
    "unitMoney": ""
}, {"x": 1507824000000, "y": 0.829, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1508083200000,
    "y": 0.833,
    "equityReturn": 0.4825,
    "unitMoney": ""
}, {"x": 1508169600000, "y": 0.834, "equityReturn": 0.12, "unitMoney": ""}, {
    "x": 1508256000000,
    "y": 0.83,
    "equityReturn": -0.4796,
    "unitMoney": ""
}, {"x": 1508342400000, "y": 0.826, "equityReturn": -0.4819, "unitMoney": ""}, {
    "x": 1508428800000,
    "y": 0.828,
    "equityReturn": 0.2421,
    "unitMoney": ""
}, {"x": 1508688000000, "y": 0.827, "equityReturn": -0.1208, "unitMoney": ""}, {
    "x": 1508774400000,
    "y": 0.827,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1508860800000, "y": 0.828, "equityReturn": 0.1209, "unitMoney": ""}, {
    "x": 1508947200000,
    "y": 0.828,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1509033600000, "y": 0.831, "equityReturn": 0.3623, "unitMoney": ""}, {
    "x": 1509292800000,
    "y": 0.821,
    "equityReturn": -1.2034,
    "unitMoney": ""
}, {"x": 1509379200000, "y": 0.822, "equityReturn": 0.1218, "unitMoney": ""}, {
    "x": 1509465600000,
    "y": 0.821,
    "equityReturn": -0.1217,
    "unitMoney": ""
}, {"x": 1509552000000, "y": 0.817, "equityReturn": -0.4872, "unitMoney": ""}, {
    "x": 1509638400000,
    "y": 0.813,
    "equityReturn": -0.4896,
    "unitMoney": ""
}, {"x": 1509897600000, "y": 0.813, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1509984000000,
    "y": 0.813,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1510070400000, "y": 0.815, "equityReturn": 0.246, "unitMoney": ""}, {
    "x": 1510156800000,
    "y": 0.816,
    "equityReturn": 0.1227,
    "unitMoney": ""
}, {"x": 1510243200000, "y": 0.819, "equityReturn": 0.3676, "unitMoney": ""}, {
    "x": 1510502400000,
    "y": 0.821,
    "equityReturn": 0.2442,
    "unitMoney": ""
}, {"x": 1510588800000, "y": 0.82, "equityReturn": -0.1218, "unitMoney": ""}, {
    "x": 1510675200000,
    "y": 0.808,
    "equityReturn": -1.4634,
    "unitMoney": ""
}, {"x": 1510761600000, "y": 0.807, "equityReturn": -0.1238, "unitMoney": ""}, {
    "x": 1510848000000,
    "y": 0.805,
    "equityReturn": -0.2478,
    "unitMoney": ""
}, {"x": 1511107200000, "y": 0.793, "equityReturn": -1.4907, "unitMoney": ""}, {
    "x": 1511193600000,
    "y": 0.792,
    "equityReturn": -0.1261,
    "unitMoney": ""
}, {"x": 1511280000000, "y": 0.791, "equityReturn": -0.1263, "unitMoney": ""}, {
    "x": 1511366400000,
    "y": 0.782,
    "equityReturn": -1.1378,
    "unitMoney": ""
}, {"x": 1511452800000, "y": 0.78, "equityReturn": -0.2558, "unitMoney": ""}, {
    "x": 1511712000000,
    "y": 0.775,
    "equityReturn": -0.641,
    "unitMoney": ""
}, {"x": 1511798400000, "y": 0.774, "equityReturn": -0.129, "unitMoney": ""}, {
    "x": 1511884800000,
    "y": 0.777,
    "equityReturn": 0.3876,
    "unitMoney": ""
}, {"x": 1511971200000, "y": 0.772, "equityReturn": -0.6435, "unitMoney": ""}, {
    "x": 1512057600000,
    "y": 0.771,
    "equityReturn": -0.1295,
    "unitMoney": ""
}, {"x": 1512316800000, "y": 0.767, "equityReturn": -0.5188, "unitMoney": ""}, {
    "x": 1512403200000,
    "y": 0.762,
    "equityReturn": -0.6519,
    "unitMoney": ""
}, {"x": 1512489600000, "y": 0.761, "equityReturn": -0.1312, "unitMoney": ""}, {
    "x": 1512576000000,
    "y": 0.764,
    "equityReturn": 0.3942,
    "unitMoney": ""
}, {"x": 1512662400000, "y": 0.77, "equityReturn": 0.7853, "unitMoney": ""}, {
    "x": 1512921600000,
    "y": 0.774,
    "equityReturn": 0.5195,
    "unitMoney": ""
}, {"x": 1513008000000, "y": 0.769, "equityReturn": -0.646, "unitMoney": ""}, {
    "x": 1513094400000,
    "y": 0.769,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1513180800000, "y": 0.768, "equityReturn": -0.13, "unitMoney": ""}, {
    "x": 1513267200000,
    "y": 0.767,
    "equityReturn": -0.1302,
    "unitMoney": ""
}, {"x": 1513526400000, "y": 0.767, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1513612800000,
    "y": 0.769,
    "equityReturn": 0.2608,
    "unitMoney": ""
}, {"x": 1513699200000, "y": 0.766, "equityReturn": -0.3901, "unitMoney": ""}, {
    "x": 1513785600000,
    "y": 0.77,
    "equityReturn": 0.5222,
    "unitMoney": ""
}, {"x": 1513872000000, "y": 0.772, "equityReturn": 0.2597, "unitMoney": ""}, {
    "x": 1514131200000,
    "y": 0.771,
    "equityReturn": -0.1295,
    "unitMoney": ""
}, {"x": 1514217600000, "y": 0.769, "equityReturn": -0.2594, "unitMoney": ""}, {
    "x": 1514304000000,
    "y": 0.764,
    "equityReturn": -0.6502,
    "unitMoney": ""
}, {"x": 1514390400000, "y": 0.765, "equityReturn": 0.1309, "unitMoney": ""}, {
    "x": 1514476800000,
    "y": 0.769,
    "equityReturn": 0.5229,
    "unitMoney": ""
}, {"x": 1514649600000, "y": 0.769, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1514822400000,
    "y": 0.776,
    "equityReturn": 0.9103,
    "unitMoney": ""
}, {"x": 1514908800000, "y": 0.784, "equityReturn": 1.0309, "unitMoney": ""}, {
    "x": 1514995200000,
    "y": 0.782,
    "equityReturn": -0.2551,
    "unitMoney": ""
}, {"x": 1515081600000, "y": 0.79, "equityReturn": 1.023, "unitMoney": ""}, {
    "x": 1515340800000,
    "y": 0.792,
    "equityReturn": 0.2532,
    "unitMoney": ""
}, {"x": 1515427200000, "y": 0.787, "equityReturn": -0.6313, "unitMoney": ""}, {
    "x": 1515513600000,
    "y": 0.784,
    "equityReturn": -0.3812,
    "unitMoney": ""
}, {"x": 1515600000000, "y": 0.782, "equityReturn": -0.2551, "unitMoney": ""}, {
    "x": 1515686400000,
    "y": 0.782,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1515945600000, "y": 0.778, "equityReturn": -0.5115, "unitMoney": ""}, {
    "x": 1516032000000,
    "y": 0.781,
    "equityReturn": 0.3856,
    "unitMoney": ""
}, {"x": 1516118400000, "y": 0.779, "equityReturn": -0.2561, "unitMoney": ""}, {
    "x": 1516204800000,
    "y": 0.782,
    "equityReturn": 0.3851,
    "unitMoney": ""
}, {"x": 1516291200000, "y": 0.787, "equityReturn": 0.6394, "unitMoney": ""}, {
    "x": 1516550400000,
    "y": 0.792,
    "equityReturn": 0.6353,
    "unitMoney": ""
}, {"x": 1516636800000, "y": 0.8, "equityReturn": 1.0101, "unitMoney": ""}, {
    "x": 1516723200000,
    "y": 0.804,
    "equityReturn": 0.5,
    "unitMoney": ""
}, {"x": 1516809600000, "y": 0.802, "equityReturn": -0.2488, "unitMoney": ""}, {
    "x": 1516896000000,
    "y": 0.803,
    "equityReturn": 0.1247,
    "unitMoney": ""
}, {"x": 1517155200000, "y": 0.786, "equityReturn": -2.1171, "unitMoney": ""}, {
    "x": 1517241600000,
    "y": 0.778,
    "equityReturn": -1.0178,
    "unitMoney": ""
}, {"x": 1517328000000, "y": 0.778, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1517414400000,
    "y": 0.768,
    "equityReturn": -1.2853,
    "unitMoney": ""
}, {"x": 1517500800000, "y": 0.775, "equityReturn": 0.9115, "unitMoney": ""}, {
    "x": 1517760000000,
    "y": 0.783,
    "equityReturn": 1.0323,
    "unitMoney": ""
}, {"x": 1517846400000, "y": 0.766, "equityReturn": -2.1711, "unitMoney": ""}, {
    "x": 1517932800000,
    "y": 0.755,
    "equityReturn": -1.436,
    "unitMoney": ""
}, {"x": 1518019200000, "y": 0.746, "equityReturn": -1.1921, "unitMoney": ""}, {
    "x": 1518105600000,
    "y": 0.721,
    "equityReturn": -3.3512,
    "unitMoney": ""
}, {"x": 1518364800000, "y": 0.733, "equityReturn": 1.6644, "unitMoney": ""}, {
    "x": 1518451200000,
    "y": 0.74,
    "equityReturn": 0.955,
    "unitMoney": ""
}, {"x": 1518537600000, "y": 0.745, "equityReturn": 0.6757, "unitMoney": ""}, {
    "x": 1519228800000,
    "y": 0.756,
    "equityReturn": 1.4765,
    "unitMoney": ""
}, {"x": 1519315200000, "y": 0.757, "equityReturn": 0.1323, "unitMoney": ""}, {
    "x": 1519574400000,
    "y": 0.763,
    "equityReturn": 0.7926,
    "unitMoney": ""
}, {"x": 1519660800000, "y": 0.754, "equityReturn": -1.1796, "unitMoney": ""}, {
    "x": 1519747200000,
    "y": 0.75,
    "equityReturn": -0.5305,
    "unitMoney": ""
}, {"x": 1519833600000, "y": 0.75, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1519920000000,
    "y": 0.742,
    "equityReturn": -1.0667,
    "unitMoney": ""
}, {"x": 1520179200000, "y": 0.741, "equityReturn": -0.1348, "unitMoney": ""}, {
    "x": 1520265600000,
    "y": 0.753,
    "equityReturn": 1.6194,
    "unitMoney": ""
}, {"x": 1520352000000, "y": 0.751, "equityReturn": -0.2656, "unitMoney": ""}, {
    "x": 1520438400000,
    "y": 0.753,
    "equityReturn": 0.2663,
    "unitMoney": ""
}, {"x": 1520524800000, "y": 0.756, "equityReturn": 0.3984, "unitMoney": ""}, {
    "x": 1520784000000,
    "y": 0.76,
    "equityReturn": 0.5291,
    "unitMoney": ""
}, {"x": 1520870400000, "y": 0.757, "equityReturn": -0.3947, "unitMoney": ""}, {
    "x": 1520956800000,
    "y": 0.751,
    "equityReturn": -0.7926,
    "unitMoney": ""
}, {"x": 1521043200000, "y": 0.751, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1521129600000,
    "y": 0.749,
    "equityReturn": -0.2663,
    "unitMoney": ""
}, {"x": 1521388800000, "y": 0.749, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1521475200000,
    "y": 0.75,
    "equityReturn": 0.1335,
    "unitMoney": ""
}, {"x": 1521561600000, "y": 0.746, "equityReturn": -0.5333, "unitMoney": ""}, {
    "x": 1521648000000,
    "y": 0.741,
    "equityReturn": -0.6702,
    "unitMoney": ""
}, {"x": 1521734400000, "y": 0.723, "equityReturn": -2.4291, "unitMoney": ""}, {
    "x": 1521993600000,
    "y": 0.726,
    "equityReturn": 0.4149,
    "unitMoney": ""
}, {"x": 1522080000000, "y": 0.73, "equityReturn": 0.551, "unitMoney": ""}, {
    "x": 1522166400000,
    "y": 0.723,
    "equityReturn": -0.9589,
    "unitMoney": ""
}, {"x": 1522252800000, "y": 0.725, "equityReturn": 0.2766, "unitMoney": ""}, {
    "x": 1522339200000,
    "y": 0.73,
    "equityReturn": 0.6897,
    "unitMoney": ""
}, {"x": 1522598400000, "y": 0.736, "equityReturn": 0.8219, "unitMoney": ""}, {
    "x": 1522684800000,
    "y": 0.732,
    "equityReturn": -0.5435,
    "unitMoney": ""
}, {"x": 1522771200000, "y": 0.729, "equityReturn": -0.4098, "unitMoney": ""}, {
    "x": 1523203200000,
    "y": 0.733,
    "equityReturn": 0.5487,
    "unitMoney": ""
}, {"x": 1523289600000, "y": 0.739, "equityReturn": 0.8186, "unitMoney": ""}, {
    "x": 1523376000000,
    "y": 0.744,
    "equityReturn": 0.6766,
    "unitMoney": ""
}, {"x": 1523462400000, "y": 0.738, "equityReturn": -0.8065, "unitMoney": ""}, {
    "x": 1523548800000,
    "y": 0.734,
    "equityReturn": -0.542,
    "unitMoney": ""
}, {"x": 1523808000000, "y": 0.731, "equityReturn": -0.4087, "unitMoney": ""}, {
    "x": 1523894400000,
    "y": 0.723,
    "equityReturn": -1.0944,
    "unitMoney": ""
}, {"x": 1523980800000, "y": 0.733, "equityReturn": 1.3831, "unitMoney": ""}, {
    "x": 1524067200000,
    "y": 0.732,
    "equityReturn": -0.1364,
    "unitMoney": ""
}, {"x": 1524153600000, "y": 0.722, "equityReturn": -1.3661, "unitMoney": ""}, {
    "x": 1524412800000,
    "y": 0.713,
    "equityReturn": -1.2465,
    "unitMoney": ""
}, {"x": 1524499200000, "y": 0.729, "equityReturn": 2.244, "unitMoney": ""}, {
    "x": 1524585600000,
    "y": 0.728,
    "equityReturn": -0.1372,
    "unitMoney": ""
}, {"x": 1524672000000, "y": 0.716, "equityReturn": -1.6484, "unitMoney": ""}, {
    "x": 1524758400000,
    "y": 0.718,
    "equityReturn": 0.2793,
    "unitMoney": ""
}, {"x": 1525190400000, "y": 0.714, "equityReturn": -0.5571, "unitMoney": ""}, {
    "x": 1525276800000,
    "y": 0.719,
    "equityReturn": 0.7003,
    "unitMoney": ""
}, {"x": 1525363200000, "y": 0.723, "equityReturn": 0.5563, "unitMoney": ""}, {
    "x": 1525622400000,
    "y": 0.735,
    "equityReturn": 1.6598,
    "unitMoney": ""
}, {"x": 1525708800000, "y": 0.743, "equityReturn": 1.0884, "unitMoney": ""}, {
    "x": 1525795200000,
    "y": 0.74,
    "equityReturn": -0.4038,
    "unitMoney": ""
}, {"x": 1525881600000, "y": 0.737, "equityReturn": -0.4054, "unitMoney": ""}, {
    "x": 1525968000000,
    "y": 0.732,
    "equityReturn": -0.6784,
    "unitMoney": ""
}, {"x": 1526227200000, "y": 0.725, "equityReturn": -0.9563, "unitMoney": ""}, {
    "x": 1526313600000,
    "y": 0.731,
    "equityReturn": 0.8276,
    "unitMoney": ""
}, {"x": 1526400000000, "y": 0.725, "equityReturn": -0.8208, "unitMoney": ""}, {
    "x": 1526486400000,
    "y": 0.72,
    "equityReturn": -0.6897,
    "unitMoney": ""
}, {"x": 1526572800000, "y": 0.725, "equityReturn": 0.6944, "unitMoney": ""}, {
    "x": 1526832000000,
    "y": 0.733,
    "equityReturn": 1.1034,
    "unitMoney": ""
}, {"x": 1526918400000, "y": 0.733, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1527004800000,
    "y": 0.726,
    "equityReturn": -0.955,
    "unitMoney": ""
}, {"x": 1527091200000, "y": 0.718, "equityReturn": -1.1019, "unitMoney": ""}, {
    "x": 1527177600000,
    "y": 0.71,
    "equityReturn": -1.1142,
    "unitMoney": ""
}, {"x": 1527436800000, "y": 0.708, "equityReturn": -0.2817, "unitMoney": ""}, {
    "x": 1527523200000,
    "y": 0.699,
    "equityReturn": -1.2712,
    "unitMoney": ""
}, {"x": 1527609600000, "y": 0.686, "equityReturn": -1.8598, "unitMoney": ""}, {
    "x": 1527696000000,
    "y": 0.69,
    "equityReturn": 0.5831,
    "unitMoney": ""
}, {"x": 1527782400000, "y": 0.682, "equityReturn": -1.1594, "unitMoney": ""}, {
    "x": 1528041600000,
    "y": 0.674,
    "equityReturn": -1.173,
    "unitMoney": ""
}, {"x": 1528128000000, "y": 0.685, "equityReturn": 1.632, "unitMoney": ""}, {
    "x": 1528214400000,
    "y": 0.684,
    "equityReturn": -0.146,
    "unitMoney": ""
}, {"x": 1528300800000, "y": 0.686, "equityReturn": 0.2924, "unitMoney": ""}, {
    "x": 1528387200000,
    "y": 0.679,
    "equityReturn": -1.0204,
    "unitMoney": ""
}, {"x": 1528646400000, "y": 0.672, "equityReturn": -1.0309, "unitMoney": ""}, {
    "x": 1528732800000,
    "y": 0.678,
    "equityReturn": 0.8929,
    "unitMoney": ""
}, {"x": 1528819200000, "y": 0.675, "equityReturn": -0.4425, "unitMoney": ""}, {
    "x": 1528905600000,
    "y": 0.674,
    "equityReturn": -0.1481,
    "unitMoney": ""
}, {"x": 1528992000000, "y": 0.671, "equityReturn": -0.4451, "unitMoney": ""}, {
    "x": 1529337600000,
    "y": 0.647,
    "equityReturn": -3.5768,
    "unitMoney": ""
}, {"x": 1529424000000, "y": 0.65, "equityReturn": 0.4637, "unitMoney": ""}, {
    "x": 1529510400000,
    "y": 0.646,
    "equityReturn": -0.6154,
    "unitMoney": ""
}, {"x": 1529596800000, "y": 0.655, "equityReturn": 1.3932, "unitMoney": ""}, {
    "x": 1529856000000,
    "y": 0.656,
    "equityReturn": 0.1527,
    "unitMoney": ""
}, {"x": 1529942400000, "y": 0.659, "equityReturn": 0.4573, "unitMoney": ""}, {
    "x": 1530028800000,
    "y": 0.654,
    "equityReturn": -0.7587,
    "unitMoney": ""
}, {"x": 1530115200000, "y": 0.653, "equityReturn": -0.1529, "unitMoney": ""}, {
    "x": 1530201600000,
    "y": 0.672,
    "equityReturn": 2.9096,
    "unitMoney": ""
}, {"x": 1530288000000, "y": 0.672, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1530460800000,
    "y": 0.661,
    "equityReturn": -1.6369,
    "unitMoney": ""
}, {"x": 1530547200000, "y": 0.667, "equityReturn": 0.9077, "unitMoney": ""}, {
    "x": 1530633600000,
    "y": 0.661,
    "equityReturn": -0.8996,
    "unitMoney": ""
}, {"x": 1530720000000, "y": 0.659, "equityReturn": -0.3026, "unitMoney": ""}, {
    "x": 1530806400000,
    "y": 0.659,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1531065600000, "y": 0.67, "equityReturn": 1.6692, "unitMoney": ""}, {
    "x": 1531152000000,
    "y": 0.67,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1531238400000, "y": 0.661, "equityReturn": -1.3433, "unitMoney": ""}, {
    "x": 1531324800000,
    "y": 0.674,
    "equityReturn": 1.9667,
    "unitMoney": ""
}, {"x": 1531411200000, "y": 0.679, "equityReturn": 0.7418, "unitMoney": ""}, {
    "x": 1531670400000,
    "y": 0.681,
    "equityReturn": 0.2946,
    "unitMoney": ""
}, {"x": 1531756800000, "y": 0.682, "equityReturn": 0.1468, "unitMoney": ""}, {
    "x": 1531843200000,
    "y": 0.681,
    "equityReturn": -0.1466,
    "unitMoney": ""
}, {"x": 1531929600000, "y": 0.68, "equityReturn": -0.1468, "unitMoney": ""}, {
    "x": 1532016000000,
    "y": 0.691,
    "equityReturn": 1.6176,
    "unitMoney": ""
}, {"x": 1532275200000, "y": 0.697, "equityReturn": 0.8683, "unitMoney": ""}, {
    "x": 1532361600000,
    "y": 0.698,
    "equityReturn": 0.1435,
    "unitMoney": ""
}, {"x": 1532448000000, "y": 0.697, "equityReturn": -0.1433, "unitMoney": ""}, {
    "x": 1532534400000,
    "y": 0.686,
    "equityReturn": -1.5782,
    "unitMoney": ""
}, {"x": 1532620800000, "y": 0.686, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1532880000000,
    "y": 0.682,
    "equityReturn": -0.5831,
    "unitMoney": ""
}, {"x": 1532966400000, "y": 0.686, "equityReturn": 0.5865, "unitMoney": ""}, {
    "x": 1533052800000,
    "y": 0.681,
    "equityReturn": -0.7289,
    "unitMoney": ""
}, {"x": 1533139200000, "y": 0.678, "equityReturn": -0.4405, "unitMoney": ""}, {
    "x": 1533225600000,
    "y": 0.671,
    "equityReturn": -1.0324,
    "unitMoney": ""
}, {"x": 1533484800000, "y": 0.669, "equityReturn": -0.2981, "unitMoney": ""}, {
    "x": 1533571200000,
    "y": 0.684,
    "equityReturn": 2.2422,
    "unitMoney": ""
}, {"x": 1533657600000, "y": 0.678, "equityReturn": -0.8772, "unitMoney": ""}, {
    "x": 1533744000000,
    "y": 0.689,
    "equityReturn": 1.6224,
    "unitMoney": ""
}, {"x": 1533830400000, "y": 0.691, "equityReturn": 0.2903, "unitMoney": ""}, {
    "x": 1534089600000,
    "y": 0.694,
    "equityReturn": 0.4342,
    "unitMoney": ""
}, {"x": 1534176000000, "y": 0.688, "equityReturn": -0.8646, "unitMoney": ""}, {
    "x": 1534262400000,
    "y": 0.678,
    "equityReturn": -1.4535,
    "unitMoney": ""
}, {"x": 1534348800000, "y": 0.677, "equityReturn": -0.1475, "unitMoney": ""}, {
    "x": 1534435200000,
    "y": 0.668,
    "equityReturn": -1.3294,
    "unitMoney": ""
}, {"x": 1534694400000, "y": 0.671, "equityReturn": 0.4491, "unitMoney": ""}, {
    "x": 1534780800000,
    "y": 0.676,
    "equityReturn": 0.7452,
    "unitMoney": ""
}, {"x": 1534867200000, "y": 0.674, "equityReturn": -0.2959, "unitMoney": ""}, {
    "x": 1534953600000,
    "y": 0.679,
    "equityReturn": 0.7418,
    "unitMoney": ""
}, {"x": 1535040000000, "y": 0.68, "equityReturn": 0.1473, "unitMoney": ""}, {
    "x": 1535299200000,
    "y": 0.688,
    "equityReturn": 1.1765,
    "unitMoney": ""
}, {"x": 1535385600000, "y": 0.69, "equityReturn": 0.2907, "unitMoney": ""}, {
    "x": 1535472000000,
    "y": 0.686,
    "equityReturn": -0.5797,
    "unitMoney": ""
}, {"x": 1535558400000, "y": 0.678, "equityReturn": -1.1662, "unitMoney": ""}, {
    "x": 1535644800000,
    "y": 0.678,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1535904000000, "y": 0.678, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1535990400000,
    "y": 0.683,
    "equityReturn": 0.7375,
    "unitMoney": ""
}, {"x": 1536076800000, "y": 0.679, "equityReturn": -0.5857, "unitMoney": ""}, {
    "x": 1536163200000,
    "y": 0.678,
    "equityReturn": -0.1473,
    "unitMoney": ""
}, {"x": 1536249600000, "y": 0.674, "equityReturn": -0.59, "unitMoney": ""}, {
    "x": 1536508800000,
    "y": 0.663,
    "equityReturn": -1.632,
    "unitMoney": ""
}, {"x": 1536595200000, "y": 0.661, "equityReturn": -0.3017, "unitMoney": ""}, {
    "x": 1536681600000,
    "y": 0.659,
    "equityReturn": -0.3026,
    "unitMoney": ""
}, {"x": 1536768000000, "y": 0.657, "equityReturn": -0.3035, "unitMoney": ""}, {
    "x": 1536854400000,
    "y": 0.649,
    "equityReturn": -1.2177,
    "unitMoney": ""
}, {"x": 1537113600000, "y": 0.646, "equityReturn": -0.4622, "unitMoney": ""}, {
    "x": 1537200000000,
    "y": 0.651,
    "equityReturn": 0.774,
    "unitMoney": ""
}, {"x": 1537286400000, "y": 0.657, "equityReturn": 0.9217, "unitMoney": ""}, {
    "x": 1537372800000,
    "y": 0.657,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1537459200000, "y": 0.659, "equityReturn": 0.3044, "unitMoney": ""}, {
    "x": 1537804800000,
    "y": 0.659,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1537891200000, "y": 0.664, "equityReturn": 0.7587, "unitMoney": ""}, {
    "x": 1537977600000,
    "y": 0.66,
    "equityReturn": -0.6024,
    "unitMoney": ""
}, {"x": 1538064000000, "y": 0.665, "equityReturn": 0.7576, "unitMoney": ""}, {
    "x": 1538928000000,
    "y": 0.654,
    "equityReturn": -1.6541,
    "unitMoney": ""
}, {"x": 1539014400000, "y": 0.646, "equityReturn": -1.2232, "unitMoney": ""}, {
    "x": 1539100800000,
    "y": 0.645,
    "equityReturn": -0.1548,
    "unitMoney": ""
}, {"x": 1539187200000, "y": 0.633, "equityReturn": -1.8605, "unitMoney": ""}, {
    "x": 1539273600000,
    "y": 0.637,
    "equityReturn": 0.6319,
    "unitMoney": ""
}, {"x": 1539532800000, "y": 0.635, "equityReturn": -0.314, "unitMoney": ""}, {
    "x": 1539619200000,
    "y": 0.628,
    "equityReturn": -1.1024,
    "unitMoney": ""
}, {"x": 1539705600000, "y": 0.631, "equityReturn": 0.4777, "unitMoney": ""}, {
    "x": 1539792000000,
    "y": 0.624,
    "equityReturn": -1.1094,
    "unitMoney": ""
}, {"x": 1539878400000, "y": 0.635, "equityReturn": 1.7628, "unitMoney": ""}, {
    "x": 1540137600000,
    "y": 0.646,
    "equityReturn": 1.7323,
    "unitMoney": ""
}, {"x": 1540224000000, "y": 0.641, "equityReturn": -0.774, "unitMoney": ""}, {
    "x": 1540310400000,
    "y": 0.639,
    "equityReturn": -0.312,
    "unitMoney": ""
}, {"x": 1540396800000, "y": 0.638, "equityReturn": -0.1565, "unitMoney": ""}, {
    "x": 1540483200000,
    "y": 0.637,
    "equityReturn": -0.1567,
    "unitMoney": ""
}, {"x": 1540742400000, "y": 0.632, "equityReturn": -0.7849, "unitMoney": ""}, {
    "x": 1540828800000,
    "y": 0.633,
    "equityReturn": 0.1582,
    "unitMoney": ""
}, {"x": 1540915200000, "y": 0.636, "equityReturn": 0.4739, "unitMoney": ""}, {
    "x": 1541001600000,
    "y": 0.641,
    "equityReturn": 0.7862,
    "unitMoney": ""
}, {"x": 1541088000000, "y": 0.652, "equityReturn": 1.7161, "unitMoney": ""}, {
    "x": 1541347200000,
    "y": 0.653,
    "equityReturn": 0.1534,
    "unitMoney": ""
}, {"x": 1541433600000, "y": 0.649, "equityReturn": -0.6126, "unitMoney": ""}, {
    "x": 1541520000000,
    "y": 0.648,
    "equityReturn": -0.1541,
    "unitMoney": ""
}, {"x": 1541606400000, "y": 0.646, "equityReturn": -0.3086, "unitMoney": ""}, {
    "x": 1541692800000,
    "y": 0.644,
    "equityReturn": -0.3096,
    "unitMoney": ""
}, {"x": 1541952000000, "y": 0.65, "equityReturn": 0.9317, "unitMoney": ""}, {
    "x": 1542038400000,
    "y": 0.652,
    "equityReturn": 0.3077,
    "unitMoney": ""
}, {"x": 1542124800000, "y": 0.652, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1542211200000,
    "y": 0.657,
    "equityReturn": 0.7669,
    "unitMoney": ""
}, {"x": 1542297600000, "y": 0.658, "equityReturn": 0.1522, "unitMoney": ""}, {
    "x": 1542556800000,
    "y": 0.658,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1542643200000, "y": 0.649, "equityReturn": -1.3678, "unitMoney": ""}, {
    "x": 1542729600000,
    "y": 0.648,
    "equityReturn": -0.1541,
    "unitMoney": ""
}, {"x": 1542816000000, "y": 0.647, "equityReturn": -0.1543, "unitMoney": ""}, {
    "x": 1542902400000,
    "y": 0.641,
    "equityReturn": -0.9274,
    "unitMoney": ""
}, {"x": 1543161600000, "y": 0.641, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1543248000000,
    "y": 0.642,
    "equityReturn": 0.156,
    "unitMoney": ""
}, {"x": 1543334400000, "y": 0.647, "equityReturn": 0.7788, "unitMoney": ""}, {
    "x": 1543420800000,
    "y": 0.643,
    "equityReturn": -0.6182,
    "unitMoney": ""
}, {"x": 1543507200000, "y": 0.644, "equityReturn": 0.1555, "unitMoney": ""}, {
    "x": 1543766400000,
    "y": 0.651,
    "equityReturn": 1.087,
    "unitMoney": ""
}, {"x": 1543852800000, "y": 0.651, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1543939200000,
    "y": 0.652,
    "equityReturn": 0.1536,
    "unitMoney": ""
}, {"x": 1544025600000, "y": 0.65, "equityReturn": -0.3067, "unitMoney": ""}, {
    "x": 1544112000000,
    "y": 0.651,
    "equityReturn": 0.1538,
    "unitMoney": ""
}, {"x": 1544371200000, "y": 0.649, "equityReturn": -0.3072, "unitMoney": ""}, {
    "x": 1544457600000,
    "y": 0.648,
    "equityReturn": -0.1541,
    "unitMoney": ""
}, {"x": 1544544000000, "y": 0.647, "equityReturn": -0.1543, "unitMoney": ""}, {
    "x": 1544630400000,
    "y": 0.652,
    "equityReturn": 0.7728,
    "unitMoney": ""
}, {"x": 1544716800000, "y": 0.648, "equityReturn": -0.6135, "unitMoney": ""}, {
    "x": 1544976000000,
    "y": 0.646,
    "equityReturn": -0.3086,
    "unitMoney": ""
}, {"x": 1545062400000, "y": 0.644, "equityReturn": -0.3096, "unitMoney": ""}, {
    "x": 1545148800000,
    "y": 0.64,
    "equityReturn": -0.6211,
    "unitMoney": ""
}, {"x": 1545235200000, "y": 0.637, "equityReturn": -0.4688, "unitMoney": ""}, {
    "x": 1545321600000,
    "y": 0.636,
    "equityReturn": -0.157,
    "unitMoney": ""
}, {"x": 1545580800000, "y": 0.639, "equityReturn": 0.4717, "unitMoney": ""}, {
    "x": 1545667200000,
    "y": 0.639,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1545753600000, "y": 0.638, "equityReturn": -0.1565, "unitMoney": ""}, {
    "x": 1545840000000,
    "y": 0.634,
    "equityReturn": -0.627,
    "unitMoney": ""
}, {"x": 1545926400000, "y": 0.633, "equityReturn": -0.1577, "unitMoney": ""}, {
    "x": 1546185600000,
    "y": 0.633,
    "equityReturn": 0,
    "unitMoney": ""
}, {"x": 1546358400000, "y": 0.631, "equityReturn": -0.316, "unitMoney": ""}, {
    "x": 1546444800000,
    "y": 0.632,
    "equityReturn": 0.1585,
    "unitMoney": ""
}, {"x": 1546531200000, "y": 0.639, "equityReturn": 1.1076, "unitMoney": ""}, {
    "x": 1546790400000,
    "y": 0.647,
    "equityReturn": 1.252,
    "unitMoney": ""
}, {"x": 1546876800000, "y": 0.647, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1546963200000,
    "y": 0.652,
    "equityReturn": 0.7728,
    "unitMoney": ""
}, {"x": 1547049600000, "y": 0.655, "equityReturn": 0.4601, "unitMoney": ""}, {
    "x": 1547136000000,
    "y": 0.657,
    "equityReturn": 0.3053,
    "unitMoney": ""
}, {"x": 1547395200000, "y": 0.653, "equityReturn": -0.6088, "unitMoney": ""}, {
    "x": 1547481600000,
    "y": 0.659,
    "equityReturn": 0.9188,
    "unitMoney": ""
}, {"x": 1547568000000, "y": 0.659, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1547654400000,
    "y": 0.657,
    "equityReturn": -0.3035,
    "unitMoney": ""
}, {"x": 1547740800000, "y": 0.661, "equityReturn": 0.6088, "unitMoney": ""}, {
    "x": 1548000000000,
    "y": 0.664,
    "equityReturn": 0.4539,
    "unitMoney": ""
}, {"x": 1548086400000, "y": 0.661, "equityReturn": -0.4518, "unitMoney": ""}, {
    "x": 1548172800000,
    "y": 0.662,
    "equityReturn": 0.1513,
    "unitMoney": ""
}, {"x": 1548259200000, "y": 0.668, "equityReturn": 0.9063, "unitMoney": ""}, {
    "x": 1548345600000,
    "y": 0.672,
    "equityReturn": 0.5988,
    "unitMoney": ""
}, {"x": 1548604800000, "y": 0.669, "equityReturn": -0.4464, "unitMoney": ""}, {
    "x": 1548691200000,
    "y": 0.668,
    "equityReturn": -0.1495,
    "unitMoney": ""
}, {"x": 1548777600000, "y": 0.668, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1548864000000,
    "y": 0.668,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1548950400000, "y": 0.676, "equityReturn": 1.1976, "unitMoney": ""}, {
    "x": 1549814400000,
    "y": 0.684,
    "equityReturn": 1.1834,
    "unitMoney": ""
}, {"x": 1549900800000, "y": 0.687, "equityReturn": 0.4386, "unitMoney": ""}, {
    "x": 1549987200000,
    "y": 0.695,
    "equityReturn": 1.1645,
    "unitMoney": ""
}, {"x": 1550073600000, "y": 0.697, "equityReturn": 0.2878, "unitMoney": ""}, {
    "x": 1550160000000,
    "y": 0.691,
    "equityReturn": -0.8608,
    "unitMoney": ""
}, {"x": 1550419200000, "y": 0.704, "equityReturn": 1.8813, "unitMoney": ""}, {
    "x": 1550505600000,
    "y": 0.7,
    "equityReturn": -0.5682,
    "unitMoney": ""
}, {"x": 1550592000000, "y": 0.7, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1550678400000,
    "y": 0.705,
    "equityReturn": 0.7143,
    "unitMoney": ""
}, {"x": 1550764800000, "y": 0.721, "equityReturn": 2.2695, "unitMoney": ""}, {
    "x": 1551024000000,
    "y": 0.742,
    "equityReturn": 2.9126,
    "unitMoney": ""
}, {"x": 1551110400000, "y": 0.739, "equityReturn": -0.4043, "unitMoney": ""}, {
    "x": 1551196800000,
    "y": 0.735,
    "equityReturn": -0.5413,
    "unitMoney": ""
}, {"x": 1551283200000, "y": 0.734, "equityReturn": -0.1361, "unitMoney": ""}, {
    "x": 1551369600000,
    "y": 0.737,
    "equityReturn": 0.4087,
    "unitMoney": ""
}, {"x": 1551628800000, "y": 0.745, "equityReturn": 1.0855, "unitMoney": ""}, {
    "x": 1551715200000,
    "y": 0.756,
    "equityReturn": 1.4765,
    "unitMoney": ""
}, {"x": 1551801600000, "y": 0.759, "equityReturn": 0.3968, "unitMoney": ""}, {
    "x": 1551888000000,
    "y": 0.756,
    "equityReturn": -0.3953,
    "unitMoney": ""
}, {"x": 1551974400000, "y": 0.75, "equityReturn": -0.7937, "unitMoney": ""}, {
    "x": 1552233600000,
    "y": 0.767,
    "equityReturn": 2.2667,
    "unitMoney": ""
}, {"x": 1552320000000, "y": 0.774, "equityReturn": 0.9126, "unitMoney": ""}, {
    "x": 1552406400000,
    "y": 0.76,
    "equityReturn": -1.8088,
    "unitMoney": ""
}, {"x": 1552492800000, "y": 0.752, "equityReturn": -1.0526, "unitMoney": ""}, {
    "x": 1552579200000,
    "y": 0.757,
    "equityReturn": 0.6649,
    "unitMoney": ""
}, {"x": 1552838400000, "y": 0.772, "equityReturn": 1.9815, "unitMoney": ""}, {
    "x": 1552924800000,
    "y": 0.776,
    "equityReturn": 0.5181,
    "unitMoney": ""
}, {"x": 1553011200000, "y": 0.773, "equityReturn": -0.3866, "unitMoney": ""}, {
    "x": 1553097600000,
    "y": 0.784,
    "equityReturn": 1.423,
    "unitMoney": ""
}, {"x": 1553184000000, "y": 0.784, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1553443200000,
    "y": 0.772,
    "equityReturn": -1.5306,
    "unitMoney": ""
}, {"x": 1553529600000, "y": 0.755, "equityReturn": -2.2021, "unitMoney": ""}, {
    "x": 1553616000000,
    "y": 0.754,
    "equityReturn": -0.1325,
    "unitMoney": ""
}, {"x": 1553702400000, "y": 0.751, "equityReturn": -0.3979, "unitMoney": ""}, {
    "x": 1553788800000,
    "y": 0.77,
    "equityReturn": 2.53,
    "unitMoney": ""
}, {"x": 1554048000000, "y": 0.789, "equityReturn": 2.4675, "unitMoney": ""}, {
    "x": 1554134400000,
    "y": 0.792,
    "equityReturn": 0.3802,
    "unitMoney": ""
}, {"x": 1554220800000, "y": 0.801, "equityReturn": 1.1364, "unitMoney": ""}, {
    "x": 1554307200000,
    "y": 0.807,
    "equityReturn": 0.7491,
    "unitMoney": ""
}, {"x": 1554652800000, "y": 0.801, "equityReturn": -0.7435, "unitMoney": ""}, {
    "x": 1554739200000,
    "y": 0.796,
    "equityReturn": -0.6242,
    "unitMoney": ""
}, {"x": 1554825600000, "y": 0.791, "equityReturn": -0.6281, "unitMoney": ""}, {
    "x": 1554912000000,
    "y": 0.779,
    "equityReturn": -1.5171,
    "unitMoney": ""
}, {"x": 1554998400000, "y": 0.776, "equityReturn": -0.3851, "unitMoney": ""}, {
    "x": 1555257600000,
    "y": 0.769,
    "equityReturn": -0.9021,
    "unitMoney": ""
}, {"x": 1555344000000, "y": 0.777, "equityReturn": 1.0403, "unitMoney": ""}, {
    "x": 1555430400000,
    "y": 0.779,
    "equityReturn": 0.2574,
    "unitMoney": ""
}, {"x": 1555516800000, "y": 0.776, "equityReturn": -0.3851, "unitMoney": ""}, {
    "x": 1555603200000,
    "y": 0.781,
    "equityReturn": 0.6443,
    "unitMoney": ""
}, {"x": 1555862400000, "y": 0.768, "equityReturn": -1.6645, "unitMoney": ""}, {
    "x": 1555948800000,
    "y": 0.756,
    "equityReturn": -1.5625,
    "unitMoney": ""
}, {"x": 1556035200000, "y": 0.759, "equityReturn": 0.3968, "unitMoney": ""}, {
    "x": 1556121600000,
    "y": 0.74,
    "equityReturn": -2.5033,
    "unitMoney": ""
}, {"x": 1556208000000, "y": 0.735, "equityReturn": -0.6757, "unitMoney": ""}, {
    "x": 1556467200000,
    "y": 0.727,
    "equityReturn": -1.0884,
    "unitMoney": ""
}, {"x": 1556553600000, "y": 0.734, "equityReturn": 0.9629, "unitMoney": ""}, {
    "x": 1557072000000,
    "y": 0.695,
    "equityReturn": -5.3134,
    "unitMoney": ""
}, {"x": 1557158400000, "y": 0.697, "equityReturn": 0.2878, "unitMoney": ""}, {
    "x": 1557244800000,
    "y": 0.698,
    "equityReturn": 0.1435,
    "unitMoney": ""
}, {"x": 1557331200000, "y": 0.7, "equityReturn": 0.2865, "unitMoney": ""}, {
    "x": 1557417600000,
    "y": 0.723,
    "equityReturn": 3.2857,
    "unitMoney": ""
}, {"x": 1557676800000, "y": 0.712, "equityReturn": -1.5214, "unitMoney": ""}, {
    "x": 1557763200000,
    "y": 0.71,
    "equityReturn": -0.2809,
    "unitMoney": ""
}, {"x": 1557849600000, "y": 0.721, "equityReturn": 1.5493, "unitMoney": ""}, {
    "x": 1557936000000,
    "y": 0.719,
    "equityReturn": -0.2774,
    "unitMoney": ""
}, {"x": 1558022400000, "y": 0.706, "equityReturn": -1.8081, "unitMoney": ""}, {
    "x": 1558281600000,
    "y": 0.702,
    "equityReturn": -0.5666,
    "unitMoney": ""
}, {"x": 1558368000000, "y": 0.708, "equityReturn": 0.8547, "unitMoney": ""}, {
    "x": 1558454400000,
    "y": 0.711,
    "equityReturn": 0.4237,
    "unitMoney": ""
}, {"x": 1558540800000, "y": 0.704, "equityReturn": -0.9845, "unitMoney": ""}, {
    "x": 1558627200000,
    "y": 0.701,
    "equityReturn": -0.4261,
    "unitMoney": ""
}, {"x": 1558886400000, "y": 0.707, "equityReturn": 0.8559, "unitMoney": ""}, {
    "x": 1558972800000,
    "y": 0.704,
    "equityReturn": -0.4243,
    "unitMoney": ""
}, {"x": 1559059200000, "y": 0.703, "equityReturn": -0.142, "unitMoney": ""}, {
    "x": 1559145600000,
    "y": 0.693,
    "equityReturn": -1.4225,
    "unitMoney": ""
}, {"x": 1559232000000, "y": 0.69, "equityReturn": -0.4329, "unitMoney": ""}, {
    "x": 1559491200000,
    "y": 0.675,
    "equityReturn": -2.1739,
    "unitMoney": ""
}, {"x": 1559577600000, "y": 0.668, "equityReturn": -1.037, "unitMoney": ""}, {
    "x": 1559664000000,
    "y": 0.667,
    "equityReturn": -0.1497,
    "unitMoney": ""
}, {"x": 1559750400000, "y": 0.66, "equityReturn": -1.0495, "unitMoney": ""}, {
    "x": 1560096000000,
    "y": 0.664,
    "equityReturn": 0.6061,
    "unitMoney": ""
}, {"x": 1560182400000, "y": 0.685, "equityReturn": 3.1627, "unitMoney": ""}, {
    "x": 1560268800000,
    "y": 0.679,
    "equityReturn": -0.8759,
    "unitMoney": ""
}, {"x": 1560355200000, "y": 0.68, "equityReturn": 0.1473, "unitMoney": ""}, {
    "x": 1560441600000,
    "y": 0.673,
    "equityReturn": -1.0294,
    "unitMoney": ""
}, {"x": 1560700800000, "y": 0.673, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1560787200000,
    "y": 0.673,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1560873600000, "y": 0.683, "equityReturn": 1.4859, "unitMoney": ""}, {
    "x": 1560960000000,
    "y": 0.704,
    "equityReturn": 3.0747,
    "unitMoney": ""
}, {"x": 1561046400000, "y": 0.717, "equityReturn": 1.8466, "unitMoney": ""}, {
    "x": 1561305600000,
    "y": 0.72,
    "equityReturn": 0.4184,
    "unitMoney": ""
}, {"x": 1561392000000, "y": 0.715, "equityReturn": -0.6944, "unitMoney": ""}, {
    "x": 1561478400000,
    "y": 0.716,
    "equityReturn": 0.1399,
    "unitMoney": ""
}, {"x": 1561564800000, "y": 0.714, "equityReturn": -0.2793, "unitMoney": ""}, {
    "x": 1561651200000,
    "y": 0.71,
    "equityReturn": -0.5602,
    "unitMoney": ""
}, {"x": 1561824000000, "y": 0.71, "equityReturn": 0, "unitMoney": ""}, {
    "x": 1561910400000,
    "y": 0.729,
    "equityReturn": 2.6761,
    "unitMoney": ""
}, {"x": 1561996800000, "y": 0.729, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1562083200000,
    "y": 0.717,
    "equityReturn": -1.6461,
    "unitMoney": ""
}, {"x": 1562169600000, "y": 0.715, "equityReturn": -0.2789, "unitMoney": ""}, {
    "x": 1562256000000,
    "y": 0.714,
    "equityReturn": -0.1399,
    "unitMoney": ""
}, {"x": 1562515200000, "y": 0.7, "equityReturn": -1.9608, "unitMoney": ""}, {
    "x": 1562601600000,
    "y": 0.701,
    "equityReturn": 0.1429,
    "unitMoney": ""
}, {"x": 1562688000000, "y": 0.7, "equityReturn": -0.1427, "unitMoney": ""}, {
    "x": 1562774400000,
    "y": 0.7,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1562860800000, "y": 0.702, "equityReturn": 0.2857, "unitMoney": ""}, {
    "x": 1563120000000,
    "y": 0.71,
    "equityReturn": 1.1396,
    "unitMoney": ""
}, {"x": 1563206400000, "y": 0.711, "equityReturn": 0.1408, "unitMoney": ""}, {
    "x": 1563292800000,
    "y": 0.716,
    "equityReturn": 0.7032,
    "unitMoney": ""
}, {"x": 1563379200000, "y": 0.709, "equityReturn": -0.9777, "unitMoney": ""}, {
    "x": 1563465600000,
    "y": 0.714,
    "equityReturn": 0.7052,
    "unitMoney": ""
}, {"x": 1563724800000, "y": 0.706, "equityReturn": -1.1204, "unitMoney": ""}, {
    "x": 1563811200000,
    "y": 0.709,
    "equityReturn": 0.4249,
    "unitMoney": ""
}, {"x": 1563897600000, "y": 0.714, "equityReturn": 0.7052, "unitMoney": ""}, {
    "x": 1563984000000,
    "y": 0.722,
    "equityReturn": 1.1204,
    "unitMoney": ""
}, {"x": 1564070400000, "y": 0.727, "equityReturn": 0.6925, "unitMoney": ""}, {
    "x": 1564329600000,
    "y": 0.725,
    "equityReturn": -0.2751,
    "unitMoney": ""
}, {"x": 1564416000000, "y": 0.73, "equityReturn": 0.6897, "unitMoney": ""}, {
    "x": 1564502400000,
    "y": 0.731,
    "equityReturn": 0.137,
    "unitMoney": ""
}, {"x": 1564588800000, "y": 0.729, "equityReturn": -0.2736, "unitMoney": ""}, {
    "x": 1564675200000,
    "y": 0.719,
    "equityReturn": -1.3717,
    "unitMoney": ""
}, {"x": 1564934400000, "y": 0.702, "equityReturn": -2.3644, "unitMoney": ""}, {
    "x": 1565020800000,
    "y": 0.698,
    "equityReturn": -0.5698,
    "unitMoney": ""
}, {"x": 1565107200000, "y": 0.698, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1565193600000,
    "y": 0.707,
    "equityReturn": 1.2894,
    "unitMoney": ""
}, {"x": 1565280000000, "y": 0.705, "equityReturn": -0.2829, "unitMoney": ""}, {
    "x": 1565539200000,
    "y": 0.716,
    "equityReturn": 1.5603,
    "unitMoney": ""
}, {"x": 1565625600000, "y": 0.714, "equityReturn": -0.2793, "unitMoney": ""}, {
    "x": 1565712000000,
    "y": 0.713,
    "equityReturn": -0.1401,
    "unitMoney": ""
}, {"x": 1565798400000, "y": 0.716, "equityReturn": 0.4208, "unitMoney": ""}, {
    "x": 1565884800000,
    "y": 0.721,
    "equityReturn": 0.6983,
    "unitMoney": ""
}, {"x": 1566144000000, "y": 0.752, "equityReturn": 4.2996, "unitMoney": ""}, {
    "x": 1566230400000,
    "y": 0.746,
    "equityReturn": -0.7979,
    "unitMoney": ""
}, {"x": 1566316800000, "y": 0.745, "equityReturn": -0.134, "unitMoney": ""}, {
    "x": 1566403200000,
    "y": 0.739,
    "equityReturn": -0.8054,
    "unitMoney": ""
}, {"x": 1566489600000, "y": 0.741, "equityReturn": 0.2706, "unitMoney": ""}, {
    "x": 1566748800000,
    "y": 0.732,
    "equityReturn": -1.2146,
    "unitMoney": ""
}, {"x": 1566835200000, "y": 0.743, "equityReturn": 1.5027, "unitMoney": ""}, {
    "x": 1566921600000,
    "y": 0.737,
    "equityReturn": -0.8075,
    "unitMoney": ""
}, {"x": 1567008000000, "y": 0.735, "equityReturn": -0.2714, "unitMoney": ""}, {
    "x": 1567094400000,
    "y": 0.732,
    "equityReturn": -0.4082,
    "unitMoney": ""
}, {"x": 1567353600000, "y": 0.743, "equityReturn": 1.5027, "unitMoney": ""}, {
    "x": 1567440000000,
    "y": 0.746,
    "equityReturn": 0.4038,
    "unitMoney": ""
}, {"x": 1567526400000, "y": 0.753, "equityReturn": 0.9383, "unitMoney": ""}, {
    "x": 1567612800000,
    "y": 0.773,
    "equityReturn": 2.656,
    "unitMoney": ""
}, {"x": 1567699200000, "y": 0.777, "equityReturn": 0.5175, "unitMoney": ""}, {
    "x": 1567958400000,
    "y": 0.788,
    "equityReturn": 1.4157,
    "unitMoney": ""
}, {"x": 1568044800000, "y": 0.783, "equityReturn": -0.6345, "unitMoney": ""}, {
    "x": 1568131200000,
    "y": 0.783,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1568217600000, "y": 0.787, "equityReturn": 0.5109, "unitMoney": ""}, {
    "x": 1568563200000,
    "y": 0.782,
    "equityReturn": -0.6353,
    "unitMoney": ""
}, {"x": 1568649600000, "y": 0.765, "equityReturn": -2.1739, "unitMoney": ""}, {
    "x": 1568736000000,
    "y": 0.764,
    "equityReturn": -0.1307,
    "unitMoney": ""
}, {"x": 1568822400000, "y": 0.769, "equityReturn": 0.6545, "unitMoney": ""}, {
    "x": 1568908800000,
    "y": 0.77,
    "equityReturn": 0.13,
    "unitMoney": ""
}, {"x": 1569168000000, "y": 0.763, "equityReturn": -0.9091, "unitMoney": ""}, {
    "x": 1569254400000,
    "y": 0.762,
    "equityReturn": -0.1311,
    "unitMoney": ""
}, {"x": 1569340800000, "y": 0.757, "equityReturn": -0.6562, "unitMoney": ""}, {
    "x": 1569427200000,
    "y": 0.754,
    "equityReturn": -0.3963,
    "unitMoney": ""
}, {"x": 1569513600000, "y": 0.757, "equityReturn": 0.3979, "unitMoney": ""}, {
    "x": 1569772800000,
    "y": 0.749,
    "equityReturn": -1.0568,
    "unitMoney": ""
}, {"x": 1570464000000, "y": 0.746, "equityReturn": -0.4005, "unitMoney": ""}, {
    "x": 1570550400000,
    "y": 0.75,
    "equityReturn": 0.5362,
    "unitMoney": ""
}, {"x": 1570636800000, "y": 0.756, "equityReturn": 0.8, "unitMoney": ""}, {
    "x": 1570723200000,
    "y": 0.771,
    "equityReturn": 1.9841,
    "unitMoney": ""
}, {"x": 1570982400000, "y": 0.775, "equityReturn": 0.5188, "unitMoney": ""}, {
    "x": 1571068800000,
    "y": 0.768,
    "equityReturn": -0.9032,
    "unitMoney": ""
}, {"x": 1571155200000, "y": 0.761, "equityReturn": -0.9115, "unitMoney": ""}, {
    "x": 1571241600000,
    "y": 0.76,
    "equityReturn": -0.1314,
    "unitMoney": ""
}, {"x": 1571328000000, "y": 0.753, "equityReturn": -0.9211, "unitMoney": ""}, {
    "x": 1571587200000,
    "y": 0.747,
    "equityReturn": -0.7968,
    "unitMoney": ""
}, {"x": 1571673600000, "y": 0.75, "equityReturn": 0.4016, "unitMoney": ""}, {
    "x": 1571760000000,
    "y": 0.746,
    "equityReturn": -0.5333,
    "unitMoney": ""
}, {"x": 1571846400000, "y": 0.748, "equityReturn": 0.2681, "unitMoney": ""}, {
    "x": 1571932800000,
    "y": 0.755,
    "equityReturn": 0.9358,
    "unitMoney": ""
}, {"x": 1572192000000, "y": 0.761, "equityReturn": 0.7947, "unitMoney": ""}, {
    "x": 1572278400000,
    "y": 0.757,
    "equityReturn": -0.5256,
    "unitMoney": ""
}, {"x": 1572364800000, "y": 0.748, "equityReturn": -1.1889, "unitMoney": ""}, {
    "x": 1572451200000,
    "y": 0.745,
    "equityReturn": -0.4011,
    "unitMoney": ""
}, {"x": 1572537600000, "y": 0.752, "equityReturn": 0.9396, "unitMoney": ""}, {
    "x": 1572796800000,
    "y": 0.753,
    "equityReturn": 0.133,
    "unitMoney": ""
}, {"x": 1572883200000, "y": 0.761, "equityReturn": 1.0624, "unitMoney": ""}, {
    "x": 1572969600000,
    "y": 0.756,
    "equityReturn": -0.657,
    "unitMoney": ""
}, {"x": 1573056000000, "y": 0.758, "equityReturn": 0.2646, "unitMoney": ""}, {
    "x": 1573142400000,
    "y": 0.756,
    "equityReturn": -0.2639,
    "unitMoney": ""
}, {"x": 1573401600000, "y": 0.747, "equityReturn": -1.1905, "unitMoney": ""}, {
    "x": 1573488000000,
    "y": 0.742,
    "equityReturn": -0.6693,
    "unitMoney": ""
}, {"x": 1573574400000, "y": 0.74, "equityReturn": -0.2695, "unitMoney": ""}, {
    "x": 1573660800000,
    "y": 0.745,
    "equityReturn": 0.6757,
    "unitMoney": ""
}, {"x": 1573747200000, "y": 0.739, "equityReturn": -0.8054, "unitMoney": ""}, {
    "x": 1574006400000,
    "y": 0.743,
    "equityReturn": 0.5413,
    "unitMoney": ""
}, {"x": 1574092800000, "y": 0.749, "equityReturn": 0.8075, "unitMoney": ""}, {
    "x": 1574179200000,
    "y": 0.742,
    "equityReturn": -0.9346,
    "unitMoney": ""
}, {"x": 1574265600000, "y": 0.74, "equityReturn": -0.2695, "unitMoney": ""}, {
    "x": 1574352000000,
    "y": 0.736,
    "equityReturn": -0.5405,
    "unitMoney": ""
}, {"x": 1574611200000, "y": 0.737, "equityReturn": 0.1359, "unitMoney": ""}, {
    "x": 1574697600000,
    "y": 0.737,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1574784000000, "y": 0.734, "equityReturn": -0.4071, "unitMoney": ""}, {
    "x": 1574870400000,
    "y": 0.734,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1574956800000, "y": 0.735, "equityReturn": 0.1362, "unitMoney": ""}, {
    "x": 1575216000000,
    "y": 0.734,
    "equityReturn": -0.1361,
    "unitMoney": ""
}, {"x": 1575302400000, "y": 0.739, "equityReturn": 0.6812, "unitMoney": ""}, {
    "x": 1575388800000,
    "y": 0.736,
    "equityReturn": -0.406,
    "unitMoney": ""
}, {"x": 1575475200000, "y": 0.745, "equityReturn": 1.2228, "unitMoney": ""}, {
    "x": 1575561600000,
    "y": 0.746,
    "equityReturn": 0.1342,
    "unitMoney": ""
}, {"x": 1575820800000, "y": 0.745, "equityReturn": -0.134, "unitMoney": ""}, {
    "x": 1575907200000,
    "y": 0.746,
    "equityReturn": 0.1342,
    "unitMoney": ""
}, {"x": 1575993600000, "y": 0.746, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1576080000000,
    "y": 0.745,
    "equityReturn": -0.134,
    "unitMoney": ""
}, {"x": 1576166400000, "y": 0.763, "equityReturn": 2.4161, "unitMoney": ""}, {
    "x": 1576425600000,
    "y": 0.776,
    "equityReturn": 1.7038,
    "unitMoney": ""
}, {"x": 1576512000000, "y": 0.794, "equityReturn": 2.3196, "unitMoney": ""}, {
    "x": 1576598400000,
    "y": 0.795,
    "equityReturn": 0.1259,
    "unitMoney": ""
}, {"x": 1576684800000, "y": 0.788, "equityReturn": -0.8805, "unitMoney": ""}, {
    "x": 1576771200000,
    "y": 0.787,
    "equityReturn": -0.1269,
    "unitMoney": ""
}, {"x": 1577030400000, "y": 0.781, "equityReturn": -0.7624, "unitMoney": ""}, {
    "x": 1577116800000,
    "y": 0.786,
    "equityReturn": 0.6402,
    "unitMoney": ""
}, {"x": 1577203200000, "y": 0.788, "equityReturn": 0.2545, "unitMoney": ""}, {
    "x": 1577289600000,
    "y": 0.799,
    "equityReturn": 1.3959,
    "unitMoney": ""
}, {"x": 1577376000000, "y": 0.793, "equityReturn": -0.7509, "unitMoney": ""}, {
    "x": 1577635200000,
    "y": 0.813,
    "equityReturn": 2.5221,
    "unitMoney": ""
}, {"x": 1577721600000, "y": 0.817, "equityReturn": 0.492, "unitMoney": ""}, {
    "x": 1577894400000,
    "y": 0.822,
    "equityReturn": 0.612,
    "unitMoney": ""
}, {"x": 1577980800000, "y": 0.82, "equityReturn": -0.2433, "unitMoney": ""}, {
    "x": 1578240000000,
    "y": 0.817,
    "equityReturn": -0.3659,
    "unitMoney": ""
}, {"x": 1578326400000, "y": 0.817, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1578412800000,
    "y": 0.808,
    "equityReturn": -1.1016,
    "unitMoney": ""
}, {"x": 1578499200000, "y": 0.818, "equityReturn": 1.2376, "unitMoney": ""}, {
    "x": 1578585600000,
    "y": 0.816,
    "equityReturn": -0.2445,
    "unitMoney": ""
}, {"x": 1578844800000, "y": 0.826, "equityReturn": 1.2255, "unitMoney": ""}, {
    "x": 1578931200000,
    "y": 0.823,
    "equityReturn": -0.3632,
    "unitMoney": ""
}, {"x": 1579017600000, "y": 0.82, "equityReturn": -0.3645, "unitMoney": ""}, {
    "x": 1579104000000,
    "y": 0.815,
    "equityReturn": -0.6098,
    "unitMoney": ""
}, {"x": 1579190400000, "y": 0.819, "equityReturn": 0.4908, "unitMoney": ""}, {
    "x": 1579449600000,
    "y": 0.833,
    "equityReturn": 1.7094,
    "unitMoney": ""
}, {"x": 1579536000000, "y": 0.824, "equityReturn": -1.0804, "unitMoney": ""}, {
    "x": 1579622400000,
    "y": 0.83,
    "equityReturn": 0.7282,
    "unitMoney": ""
}, {"x": 1579708800000, "y": 0.809, "equityReturn": -2.5301, "unitMoney": ""}, {
    "x": 1580659200000,
    "y": 0.741,
    "equityReturn": -8.4054,
    "unitMoney": ""
}, {"x": 1580745600000, "y": 0.761, "equityReturn": 2.6991, "unitMoney": ""}, {
    "x": 1580832000000,
    "y": 0.769,
    "equityReturn": 1.0512,
    "unitMoney": ""
}, {"x": 1580918400000, "y": 0.779, "equityReturn": 1.3004, "unitMoney": ""}, {
    "x": 1581004800000,
    "y": 0.785,
    "equityReturn": 0.7702,
    "unitMoney": ""
}, {"x": 1581264000000, "y": 0.79, "equityReturn": 0.6369, "unitMoney": ""}, {
    "x": 1581350400000,
    "y": 0.796,
    "equityReturn": 0.7595,
    "unitMoney": ""
}, {"x": 1581436800000, "y": 0.806, "equityReturn": 1.2563, "unitMoney": ""}, {
    "x": 1581523200000,
    "y": 0.798,
    "equityReturn": -0.9926,
    "unitMoney": ""
}, {"x": 1581609600000, "y": 0.802, "equityReturn": 0.5013, "unitMoney": ""}, {
    "x": 1581868800000,
    "y": 0.82,
    "equityReturn": 2.2444,
    "unitMoney": ""
}, {"x": 1581955200000, "y": 0.818, "equityReturn": -0.2439, "unitMoney": ""}, {
    "x": 1582041600000,
    "y": 0.819,
    "equityReturn": 0.1222,
    "unitMoney": ""
}, {"x": 1582128000000, "y": 0.844, "equityReturn": 3.0525, "unitMoney": ""}, {
    "x": 1582214400000,
    "y": 0.852,
    "equityReturn": 0.9479,
    "unitMoney": ""
}, {"x": 1582473600000, "y": 0.858, "equityReturn": 0.7042, "unitMoney": ""}, {
    "x": 1582560000000,
    "y": 0.86,
    "equityReturn": 0.2331,
    "unitMoney": ""
}, {"x": 1582646400000, "y": 0.857, "equityReturn": -0.3488, "unitMoney": ""}, {
    "x": 1582732800000,
    "y": 0.855,
    "equityReturn": -0.2334,
    "unitMoney": ""
}, {"x": 1582819200000, "y": 0.822, "equityReturn": -3.8596, "unitMoney": ""}, {
    "x": 1583078400000,
    "y": 0.835,
    "equityReturn": 1.5815,
    "unitMoney": ""
}, {"x": 1583164800000, "y": 0.838, "equityReturn": 0.3593, "unitMoney": ""}, {
    "x": 1583251200000,
    "y": 0.846,
    "equityReturn": 0.9547,
    "unitMoney": ""
}, {"x": 1583337600000, "y": 0.871, "equityReturn": 2.9551, "unitMoney": ""}, {
    "x": 1583424000000,
    "y": 0.859,
    "equityReturn": -1.3777,
    "unitMoney": ""
}, {"x": 1583683200000, "y": 0.831, "equityReturn": -3.2596, "unitMoney": ""}, {
    "x": 1583769600000,
    "y": 0.854,
    "equityReturn": 2.7677,
    "unitMoney": ""
}, {"x": 1583856000000, "y": 0.842, "equityReturn": -1.4052, "unitMoney": ""}, {
    "x": 1583942400000,
    "y": 0.834,
    "equityReturn": -0.95009999999999994,
    "unitMoney": ""
}, {"x": 1584028800000, "y": 0.826, "equityReturn": -0.9592, "unitMoney": ""}, {
    "x": 1584288000000,
    "y": 0.8,
    "equityReturn": -3.1477,
    "unitMoney": ""
}, {"x": 1584374400000, "y": 0.796, "equityReturn": -0.5, "unitMoney": ""}, {
    "x": 1584460800000,
    "y": 0.788,
    "equityReturn": -1.005,
    "unitMoney": ""
}, {"x": 1584547200000, "y": 0.783, "equityReturn": -0.6345, "unitMoney": ""}, {
    "x": 1584633600000,
    "y": 0.799,
    "equityReturn": 2.0434,
    "unitMoney": ""
}, {"x": 1584892800000, "y": 0.781, "equityReturn": -2.2528, "unitMoney": ""}, {
    "x": 1584979200000,
    "y": 0.786,
    "equityReturn": 0.6402,
    "unitMoney": ""
}, {"x": 1585065600000, "y": 0.801, "equityReturn": 1.9084, "unitMoney": ""}, {
    "x": 1585152000000,
    "y": 0.794,
    "equityReturn": -0.8739,
    "unitMoney": ""
}, {"x": 1585238400000, "y": 0.792, "equityReturn": -0.2519, "unitMoney": ""}, {
    "x": 1585497600000,
    "y": 0.784,
    "equityReturn": -1.0101,
    "unitMoney": ""
}, {"x": 1585584000000, "y": 0.779, "equityReturn": -0.6378, "unitMoney": ""}, {
    "x": 1585670400000,
    "y": 0.778,
    "equityReturn": -0.1284,
    "unitMoney": ""
}, {"x": 1585756800000, "y": 0.787, "equityReturn": 1.1568, "unitMoney": ""}, {
    "x": 1585843200000,
    "y": 0.783,
    "equityReturn": -0.5083,
    "unitMoney": ""
}, {"x": 1586188800000, "y": 0.795, "equityReturn": 1.5326, "unitMoney": ""}, {
    "x": 1586275200000,
    "y": 0.796,
    "equityReturn": 0.1258,
    "unitMoney": ""
}, {"x": 1586361600000, "y": 0.8, "equityReturn": 0.5025, "unitMoney": ""}, {
    "x": 1586448000000,
    "y": 0.791,
    "equityReturn": -1.125,
    "unitMoney": ""
}, {"x": 1586707200000, "y": 0.786, "equityReturn": -0.6321, "unitMoney": ""}, {
    "x": 1586793600000,
    "y": 0.79,
    "equityReturn": 0.5089,
    "unitMoney": ""
}, {"x": 1586880000000, "y": 0.785, "equityReturn": -0.6329, "unitMoney": ""}, {
    "x": 1586966400000,
    "y": 0.788,
    "equityReturn": 0.3822,
    "unitMoney": ""
}, {"x": 1587052800000, "y": 0.791, "equityReturn": 0.3807, "unitMoney": ""}, {
    "x": 1587312000000,
    "y": 0.791,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1587398400000, "y": 0.783, "equityReturn": -1.0114, "unitMoney": ""}, {
    "x": 1587484800000,
    "y": 0.783,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1587571200000, "y": 0.781, "equityReturn": -0.2554, "unitMoney": ""}, {
    "x": 1587657600000,
    "y": 0.775,
    "equityReturn": -0.7682,
    "unitMoney": ""
}, {"x": 1587916800000, "y": 0.777, "equityReturn": 0.2581, "unitMoney": ""}, {
    "x": 1588003200000,
    "y": 0.779,
    "equityReturn": 0.2574,
    "unitMoney": ""
}, {"x": 1588089600000, "y": 0.786, "equityReturn": 0.8986, "unitMoney": ""}, {
    "x": 1588176000000,
    "y": 0.797,
    "equityReturn": 1.3995,
    "unitMoney": ""
}, {"x": 1588694400000, "y": 0.797, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1588780800000,
    "y": 0.79,
    "equityReturn": -0.8783,
    "unitMoney": ""
}, {"x": 1588867200000, "y": 0.797, "equityReturn": 0.8861, "unitMoney": ""}, {
    "x": 1589126400000,
    "y": 0.792,
    "equityReturn": -0.6274,
    "unitMoney": ""
}, {"x": 1589212800000, "y": 0.789, "equityReturn": -0.3788, "unitMoney": ""}, {
    "x": 1589299200000,
    "y": 0.785,
    "equityReturn": -0.507,
    "unitMoney": ""
}, {"x": 1589385600000, "y": 0.778, "equityReturn": -0.8917, "unitMoney": ""}, {
    "x": 1589472000000,
    "y": 0.777,
    "equityReturn": -0.1285,
    "unitMoney": ""
}, {"x": 1589731200000, "y": 0.765, "equityReturn": -1.5444, "unitMoney": ""}, {
    "x": 1589817600000,
    "y": 0.762,
    "equityReturn": -0.3922,
    "unitMoney": ""
}, {"x": 1589904000000, "y": 0.749, "equityReturn": -1.706, "unitMoney": ""}, {
    "x": 1589990400000,
    "y": 0.748,
    "equityReturn": -0.1335,
    "unitMoney": ""
}, {"x": 1590076800000, "y": 0.743, "equityReturn": -0.6684, "unitMoney": ""}, {
    "x": 1590336000000,
    "y": 0.738,
    "equityReturn": -0.6729,
    "unitMoney": ""
}, {"x": 1590422400000, "y": 0.743, "equityReturn": 0.6775, "unitMoney": ""}, {
    "x": 1590508800000,
    "y": 0.74,
    "equityReturn": -0.4038,
    "unitMoney": ""
}, {"x": 1590595200000, "y": 0.746, "equityReturn": 0.8108, "unitMoney": ""}, {
    "x": 1590681600000,
    "y": 0.747,
    "equityReturn": 0.134,
    "unitMoney": ""
}, {"x": 1590940800000, "y": 0.767, "equityReturn": 2.6774, "unitMoney": ""}, {
    "x": 1591027200000,
    "y": 0.771,
    "equityReturn": 0.5215,
    "unitMoney": ""
}, {"x": 1591113600000, "y": 0.765, "equityReturn": -0.7782, "unitMoney": ""}, {
    "x": 1591200000000,
    "y": 0.762,
    "equityReturn": -0.3922,
    "unitMoney": ""
}, {"x": 1591286400000, "y": 0.764, "equityReturn": 0.2625, "unitMoney": ""}, {
    "x": 1591545600000,
    "y": 0.764,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1591632000000, "y": 0.769, "equityReturn": 0.6545, "unitMoney": ""}, {
    "x": 1591718400000,
    "y": 0.764,
    "equityReturn": -0.6502,
    "unitMoney": ""
}, {"x": 1591804800000, "y": 0.757, "equityReturn": -0.9162, "unitMoney": ""}, {
    "x": 1591891200000,
    "y": 0.758,
    "equityReturn": 0.1321,
    "unitMoney": ""
}, {"x": 1592150400000, "y": 0.76, "equityReturn": 0.2639, "unitMoney": ""}, {
    "x": 1592236800000,
    "y": 0.763,
    "equityReturn": 0.3947,
    "unitMoney": ""
}, {"x": 1592323200000, "y": 0.761, "equityReturn": -0.2621, "unitMoney": ""}, {
    "x": 1592409600000,
    "y": 0.765,
    "equityReturn": 0.5256,
    "unitMoney": ""
}, {"x": 1592496000000, "y": 0.779, "equityReturn": 1.8301, "unitMoney": ""}, {
    "x": 1592755200000,
    "y": 0.787,
    "equityReturn": 1.027,
    "unitMoney": ""
}, {"x": 1592841600000, "y": 0.787, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1592928000000,
    "y": 0.791,
    "equityReturn": 0.5083,
    "unitMoney": ""
}, {"x": 1593360000000, "y": 0.772, "equityReturn": -2.402, "unitMoney": ""}, {
    "x": 1593446400000,
    "y": 0.783,
    "equityReturn": 1.4249,
    "unitMoney": ""
}, {"x": 1593532800000, "y": 0.807, "equityReturn": 3.0651, "unitMoney": ""}, {
    "x": 1593619200000,
    "y": 0.862,
    "equityReturn": 6.8154,
    "unitMoney": ""
}, {"x": 1593705600000, "y": 0.9, "equityReturn": 4.4084, "unitMoney": ""}, {
    "x": 1593964800000,
    "y": 0.966,
    "equityReturn": 7.3333,
    "unitMoney": ""
}, {"x": 1594051200000, "y": 0.945, "equityReturn": -2.1739, "unitMoney": ""}, {
    "x": 1594137600000,
    "y": 0.982,
    "equityReturn": 3.9153,
    "unitMoney": ""
}, {"x": 1594224000000, "y": 0.992, "equityReturn": 1.0183, "unitMoney": ""}, {
    "x": 1594310400000,
    "y": 0.959,
    "equityReturn": -3.3266,
    "unitMoney": ""
}, {"x": 1594569600000, "y": 0.971, "equityReturn": 1.2513, "unitMoney": ""}, {
    "x": 1594656000000,
    "y": 0.97,
    "equityReturn": -0.103,
    "unitMoney": ""
}, {"x": 1594742400000, "y": 0.951, "equityReturn": -1.9588, "unitMoney": ""}, {
    "x": 1594828800000,
    "y": 0.906,
    "equityReturn": -4.7319,
    "unitMoney": ""
}, {"x": 1594915200000, "y": 0.897, "equityReturn": -0.9934, "unitMoney": ""}, {
    "x": 1595174400000,
    "y": 0.927,
    "equityReturn": 3.3445,
    "unitMoney": ""
}, {"x": 1595260800000, "y": 0.921, "equityReturn": -0.6472, "unitMoney": ""}, {
    "x": 1595347200000,
    "y": 0.938,
    "equityReturn": 1.8458,
    "unitMoney": ""
}, {"x": 1595433600000, "y": 0.94, "equityReturn": 0.2132, "unitMoney": ""}, {
    "x": 1595520000000,
    "y": 0.906,
    "equityReturn": -3.617,
    "unitMoney": ""
}, {"x": 1595779200000, "y": 0.896, "equityReturn": -1.1038, "unitMoney": ""}, {
    "x": 1595865600000,
    "y": 0.896,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1595952000000, "y": 0.927, "equityReturn": 3.4598, "unitMoney": ""}, {
    "x": 1596038400000,
    "y": 0.925,
    "equityReturn": -0.2157,
    "unitMoney": ""
}, {"x": 1596124800000, "y": 0.935, "equityReturn": 1.0811, "unitMoney": ""}, {
    "x": 1596384000000,
    "y": 0.942,
    "equityReturn": 0.7487,
    "unitMoney": ""
}, {"x": 1596470400000, "y": 0.942, "equityReturn": 0.0, "unitMoney": ""}, {
    "x": 1596556800000,
    "y": 0.942,
    "equityReturn": 0.0,
    "unitMoney": ""
}, {"x": 1596643200000, "y": 0.961, "equityReturn": 2.017, "unitMoney": ""}, {
    "x": 1596729600000,
    "y": 0.94,
    "equityReturn": -2.1852,
    "unitMoney": ""
}, {"x": 1596988800000, "y": 0.944, "equityReturn": 0.4255, "unitMoney": ""}, {
    "x": 1597075200000,
    "y": 0.932,
    "equityReturn": -1.2712,
    "unitMoney": ""
}, {"x": 1597161600000, "y": 0.925, "equityReturn": -0.7511, "unitMoney": ""}, {
    "x": 1597248000000,
    "y": 0.933,
    "equityReturn": 0.8649,
    "unitMoney": ""
}, {"x": 1597334400000, "y": 0.944, "equityReturn": 1.179, "unitMoney": ""}, {
    "x": 1597593600000,
    "y": 0.963,
    "equityReturn": 2.0127,
    "unitMoney": ""
}, {"x": 1597680000000, "y": 0.972, "equityReturn": 0.9346, "unitMoney": ""}, {
    "x": 1597766400000,
    "y": 0.963,
    "equityReturn": -0.9259,
    "unitMoney": ""
}, {"x": 1597852800000, "y": 0.948, "equityReturn": -1.5576, "unitMoney": ""}, {
    "x": 1597939200000,
    "y": 0.955,
    "equityReturn": 0.7384,
    "unitMoney": ""
}, {"x": 1598198400000, "y": 0.952, "equityReturn": -0.3141, "unitMoney": ""}];
/*累计净值走势*/
var Data_ACWorthTrend = [[1363708800000, 1.0], [1363881600000, 1.0], [1364486400000, 1.0], [1364918400000, 0.998], [1365696000000, 0.999], [1366300800000, 1.002], [1366905600000, 0.994], [1367510400000, 0.996], [1368028800000, 1.0], [1368115200000, 1.001], [1368374400000, 1.002], [1368460800000, 0.998], [1368547200000, 1.0], [1368633600000, 1.005], [1368720000000, 1.013], [1368979200000, 1.018], [1369065600000, 1.015], [1369152000000, 1.013], [1369238400000, 1.011], [1369324800000, 1.015], [1369584000000, 1.017], [1369670400000, 1.026], [1369756800000, 1.024], [1369843200000, 1.02], [1369929600000, 1.018], [1370188800000, 1.018], [1370275200000, 1.011], [1370361600000, 1.011], [1370448000000, 1.004], [1370534400000, 1.0], [1371052800000, 0.986], [1371139200000, 0.987], [1371398400000, 0.988], [1371484800000, 0.989], [1371571200000, 0.981], [1371657600000, 0.956], [1371744000000, 0.958], [1372003200000, 0.931], [1372089600000, 0.939], [1372176000000, 0.945], [1372262400000, 0.947], [1372348800000, 0.954], [1372521600000, 0.954], [1372608000000, 0.967], [1372694400000, 0.97], [1372780800000, 0.966], [1372867200000, 0.969], [1372953600000, 0.972], [1373212800000, 0.962], [1373299200000, 0.964], [1373385600000, 0.969], [1373472000000, 0.976], [1373558400000, 0.972], [1373817600000, 0.975], [1373904000000, 0.974], [1373990400000, 0.969], [1374076800000, 0.963], [1374163200000, 0.96], [1374422400000, 0.96], [1374508800000, 0.965], [1374595200000, 0.964], [1374681600000, 0.962], [1374768000000, 0.963], [1375027200000, 0.959], [1375113600000, 0.96], [1375200000000, 0.962], [1375286400000, 0.972], [1375372800000, 0.974], [1375632000000, 0.977], [1375718400000, 0.979], [1375804800000, 0.978], [1375891200000, 0.977], [1375977600000, 0.978], [1376236800000, 0.983], [1376323200000, 0.984], [1376409600000, 0.982], [1376496000000, 0.979], [1376582400000, 0.976], [1376841600000, 0.979], [1376928000000, 0.977], [1377014400000, 0.974], [1377100800000, 0.973], [1377187200000, 0.971], [1377446400000, 0.977], [1377532800000, 0.979], [1377619200000, 0.979], [1377705600000, 0.979], [1377792000000, 0.981], [1378051200000, 0.979], [1378137600000, 0.986], [1378224000000, 0.987], [1378310400000, 0.987], [1378396800000, 0.988], [1378656000000, 1.001], [1378742400000, 1.01], [1378828800000, 1.011], [1378915200000, 1.015], [1379001600000, 1.006], [1379260800000, 1.002], [1379347200000, 0.996], [1379433600000, 1.0], [1379865600000, 1.002], [1379952000000, 0.998], [1380038400000, 0.996], [1380124800000, 0.985], [1380211200000, 0.984], [1380470400000, 0.985], [1381161600000, 0.995], [1381248000000, 1.001], [1381334400000, 0.994], [1381420800000, 1.0], [1381680000000, 0.998], [1381766400000, 0.995], [1381852800000, 0.987], [1381939200000, 0.984], [1382025600000, 0.985], [1382284800000, 0.993], [1382371200000, 0.986], [1382457600000, 0.984], [1382544000000, 0.976], [1382630400000, 0.969], [1382889600000, 0.964], [1382976000000, 0.961], [1383062400000, 0.974], [1383148800000, 0.971], [1383235200000, 0.976], [1383494400000, 0.974], [1383580800000, 0.976], [1383667200000, 0.97], [1383753600000, 0.966], [1383840000000, 0.955], [1384099200000, 0.955], [1384185600000, 0.961], [1384272000000, 0.942], [1384358400000, 0.947], [1384444800000, 0.947], [1384704000000, 0.974], [1384790400000, 0.972], [1384876800000, 0.975], [1384963200000, 0.971], [1385049600000, 0.973], [1385308800000, 0.967], [1385395200000, 0.96], [1385481600000, 0.964], [1385568000000, 0.972], [1385654400000, 0.969], [1385913600000, 0.963], [1386000000000, 0.974], [1386086400000, 0.986], [1386172800000, 0.983], [1386259200000, 0.977], [1386518400000, 0.974], [1386604800000, 0.974], [1386691200000, 0.96], [1386777600000, 0.96], [1386864000000, 0.964], [1387123200000, 0.953], [1387209600000, 0.949], [1387296000000, 0.942], [1387382400000, 0.924], [1387468800000, 0.914], [1387728000000, 0.914], [1387814400000, 0.916], [1387900800000, 0.928], [1387987200000, 0.917], [1388073600000, 0.924], [1388332800000, 0.92], [1388419200000, 0.931], [1388592000000, 0.935], [1388678400000, 0.928], [1388937600000, 0.908], [1389024000000, 0.905], [1389110400000, 0.901], [1389196800000, 0.897], [1389283200000, 0.884], [1389542400000, 0.873], [1389628800000, 0.878], [1389715200000, 0.874], [1389801600000, 0.88], [1389888000000, 0.87], [1390147200000, 0.85], [1390233600000, 0.86], [1390320000000, 0.893], [1390406400000, 0.89], [1390492800000, 0.9], [1390752000000, 0.891], [1390838400000, 0.895], [1390924800000, 0.908], [1391011200000, 0.904], [1391702400000, 0.901], [1391961600000, 0.925], [1392048000000, 0.928], [1392134400000, 0.929], [1392220800000, 0.927], [1392307200000, 0.932], [1392566400000, 0.938], [1392652800000, 0.927], [1392739200000, 0.928], [1392825600000, 0.938], [1392912000000, 0.938], [1393171200000, 0.924], [1393257600000, 0.913], [1393344000000, 0.913], [1393430400000, 0.925], [1393516800000, 0.899], [1393776000000, 0.904], [1393862400000, 0.905], [1393948800000, 0.901], [1394035200000, 0.903], [1394121600000, 0.908], [1394380800000, 0.9], [1394467200000, 0.898], [1394553600000, 0.899], [1394640000000, 0.904], [1394726400000, 0.902], [1394985600000, 0.903], [1395072000000, 0.902], [1395158400000, 0.896], [1395244800000, 0.895], [1395331200000, 0.901], [1395590400000, 0.902], [1395676800000, 0.902], [1395763200000, 0.901], [1395849600000, 0.901], [1395936000000, 0.9], [1396195200000, 0.899], [1396281600000, 0.901], [1396368000000, 0.903], [1396454400000, 0.901], [1396540800000, 0.904], [1396886400000, 0.913], [1396972800000, 0.914], [1397059200000, 0.918], [1397145600000, 0.918], [1397404800000, 0.918], [1397491200000, 0.914], [1397577600000, 0.912], [1397664000000, 0.912], [1397750400000, 0.912], [1398009600000, 0.908], [1398096000000, 0.908], [1398182400000, 0.907], [1398268800000, 0.906], [1398355200000, 0.904], [1398614400000, 0.896], [1398700800000, 0.896], [1398787200000, 0.9], [1399219200000, 0.899], [1399305600000, 0.901], [1399392000000, 0.899], [1399478400000, 0.899], [1399564800000, 0.899], [1399824000000, 0.905], [1399910400000, 0.904], [1399996800000, 0.901], [1400083200000, 0.897], [1400169600000, 0.896], [1400428800000, 0.888], [1400515200000, 0.887], [1400601600000, 0.892], [1400688000000, 0.894], [1400774400000, 0.898], [1401033600000, 0.899], [1401120000000, 0.9], [1401206400000, 0.904], [1401292800000, 0.903], [1401379200000, 0.904], [1401724800000, 0.906], [1401811200000, 0.903], [1401897600000, 0.906], [1401984000000, 0.908], [1402243200000, 0.91], [1402329600000, 0.916], [1402416000000, 0.919], [1402502400000, 0.918], [1402588800000, 0.929], [1402848000000, 0.935], [1402934400000, 0.924], [1403020800000, 0.916], [1403107200000, 0.912], [1403193600000, 0.918], [1403452800000, 0.921], [1403539200000, 0.923], [1403625600000, 0.923], [1403712000000, 0.93], [1403798400000, 0.931], [1404057600000, 0.934], [1404144000000, 0.929], [1404230400000, 0.93], [1404316800000, 0.938], [1404403200000, 0.935], [1404662400000, 0.939], [1404748800000, 0.941], [1404835200000, 0.931], [1404921600000, 0.93], [1405008000000, 0.935], [1405267200000, 0.942], [1405353600000, 0.945], [1405440000000, 0.942], [1405526400000, 0.937], [1405612800000, 0.941], [1405872000000, 0.939], [1405958400000, 0.946], [1406044800000, 0.949], [1406131200000, 0.955], [1406217600000, 0.957], [1406476800000, 0.964], [1406563200000, 0.969], [1406649600000, 0.965], [1406736000000, 0.968], [1406822400000, 0.97], [1407081600000, 0.974], [1407168000000, 0.973], [1407254400000, 0.974], [1407340800000, 0.968], [1407427200000, 0.973], [1407686400000, 0.98], [1407772800000, 0.982], [1407859200000, 0.983], [1407945600000, 0.981], [1408032000000, 0.984], [1408291200000, 0.99], [1408377600000, 0.993], [1408464000000, 0.994], [1408550400000, 0.99], [1408636800000, 0.998], [1408896000000, 0.999], [1408982400000, 0.99], [1409068800000, 0.993], [1409155200000, 0.989], [1409241600000, 0.995], [1409500800000, 1.004], [1409587200000, 1.013], [1409673600000, 1.02], [1409760000000, 1.028], [1409846400000, 1.032], [1410192000000, 1.033], [1410278400000, 1.037], [1410364800000, 1.039], [1410451200000, 1.05], [1410710400000, 1.05], [1410796800000, 1.028], [1410883200000, 1.032], [1410969600000, 1.039], [1411056000000, 1.047], [1411315200000, 1.043], [1411401600000, 1.048], [1411488000000, 1.063], [1411574400000, 1.063], [1411660800000, 1.062], [1411920000000, 1.065], [1412006400000, 1.073], [1412697600000, 1.071], [1412784000000, 1.081], [1412870400000, 1.072], [1413129600000, 1.066], [1413216000000, 1.059], [1413302400000, 1.061], [1413388800000, 1.059], [1413475200000, 1.051], [1413734400000, 1.059], [1413820800000, 1.056], [1413907200000, 1.057], [1413993600000, 1.045], [1414080000000, 1.044], [1414339200000, 1.042], [1414425600000, 1.072], [1414512000000, 1.09], [1414598400000, 1.105], [1414684800000, 1.125], [1414944000000, 1.125], [1415030400000, 1.127], [1415116800000, 1.128], [1415203200000, 1.138], [1415289600000, 1.142], [1415548800000, 1.167], [1415635200000, 1.14], [1415721600000, 1.161], [1415808000000, 1.152], [1415894400000, 1.142], [1416153600000, 1.13], [1416240000000, 1.111], [1416326400000, 1.114], [1416412800000, 1.128], [1416499200000, 1.151], [1416758400000, 1.185], [1416844800000, 1.198], [1416931200000, 1.212], [1417017600000, 1.218], [1417104000000, 1.22], [1417363200000, 1.199], [1417449600000, 1.225], [1417536000000, 1.237], [1417622400000, 1.296], [1417708800000, 1.274], [1417968000000, 1.338], [1418054400000, 1.235], [1418140800000, 1.286], [1418227200000, 1.27], [1418313600000, 1.279], [1418572800000, 1.289], [1418659200000, 1.322], [1418745600000, 1.339], [1418832000000, 1.365], [1418918400000, 1.401], [1419177600000, 1.442], [1419264000000, 1.408], [1419350400000, 1.389], [1419436800000, 1.399], [1419523200000, 1.404], [1419782400000, 1.405], [1419868800000, 1.405], [1419955200000, 1.411], [1420387200000, 1.436], [1420473600000, 1.432], [1420560000000, 1.458], [1420646400000, 1.426], [1420732800000, 1.42], [1420992000000, 1.385], [1421078400000, 1.389], [1421164800000, 1.392], [1421251200000, 1.416], [1421337600000, 1.428], [1421596800000, 1.351], [1421683200000, 1.364], [1421769600000, 1.407], [1421856000000, 1.406], [1421942400000, 1.413], [1422201600000, 1.403], [1422288000000, 1.394], [1422374400000, 1.373], [1422460800000, 1.363], [1422547200000, 1.347], [1422806400000, 1.302], [1422892800000, 1.319], [1422979200000, 1.314], [1423065600000, 1.303], [1423152000000, 1.285], [1423411200000, 1.28], [1423497600000, 1.294], [1423584000000, 1.298], [1423670400000, 1.309], [1423756800000, 1.328], [1424016000000, 1.341], [1424102400000, 1.354], [1424793600000, 1.333], [1424880000000, 1.347], [1424966400000, 1.342], [1425225600000, 1.355], [1425312000000, 1.345], [1425398400000, 1.345], [1425484800000, 1.333], [1425571200000, 1.328], [1425830400000, 1.329], [1425916800000, 1.33], [1426003200000, 1.334], [1426089600000, 1.346], [1426176000000, 1.349], [1426435200000, 1.386], [1426521600000, 1.409], [1426608000000, 1.413], [1426694400000, 1.407], [1426780800000, 1.415], [1427040000000, 1.428], [1427126400000, 1.411], [1427212800000, 1.388], [1427299200000, 1.38], [1427385600000, 1.385], [1427644800000, 1.405], [1427731200000, 1.388], [1427817600000, 1.415], [1427904000000, 1.433], [1427990400000, 1.46], [1428336000000, 1.481], [1428422400000, 1.453], [1428508800000, 1.422], [1428595200000, 1.451], [1428854400000, 1.476], [1428940800000, 1.472], [1429027200000, 1.443], [1429113600000, 1.478], [1429200000000, 1.519], [1429459200000, 1.48], [1429545600000, 1.526], [1429632000000, 1.635], [1429718400000, 1.636], [1429804800000, 1.641], [1430064000000, 1.659], [1430150400000, 1.615], [1430236800000, 1.628], [1430323200000, 1.639], [1430668800000, 1.652], [1430755200000, 1.592], [1430841600000, 1.564], [1430928000000, 1.54], [1431014400000, 1.561], [1431273600000, 1.602], [1431360000000, 1.629], [1431446400000, 1.613], [1431532800000, 1.626], [1431619200000, 1.615], [1431878400000, 1.616], [1431964800000, 1.639], [1432051200000, 1.65], [1432137600000, 1.692], [1432224000000, 1.709], [1432483200000, 1.78], [1432569600000, 1.855], [1432656000000, 1.869], [1432742400000, 1.758], [1432828800000, 1.781], [1433088000000, 1.941], [1433174400000, 1.93], [1433260800000, 1.894], [1433347200000, 1.899], [1433433600000, 1.931], [1433692800000, 1.9], [1433779200000, 1.877], [1433865600000, 1.856], [1433952000000, 1.852], [1434038400000, 1.878], [1434297600000, 1.88], [1434384000000, 1.793], [1434470400000, 1.806], [1434556800000, 1.738], [1434643200000, 1.643], [1434988800000, 1.629], [1435075200000, 1.677], [1435161600000, 1.593], [1435248000000, 1.415], [1435507200000, 1.332], [1435593600000, 1.423], [1435680000000, 1.331], [1435766400000, 1.258], [1435852800000, 1.28], [1436112000000, 1.307], [1436198400000, 1.205], [1436284800000, 1.132], [1436371200000, 1.187], [1436457600000, 1.223], [1436716800000, 1.287], [1436803200000, 1.28], [1436889600000, 1.224], [1436976000000, 1.23], [1437062400000, 1.278], [1437321600000, 1.311], [1437408000000, 1.339], [1437494400000, 1.348], [1437580800000, 1.385], [1437667200000, 1.357], [1437926400000, 1.282], [1438012800000, 1.279], [1438099200000, 1.299], [1438185600000, 1.272], [1438272000000, 1.258], [1438531200000, 1.241], [1438617600000, 1.285], [1438704000000, 1.276], [1438790400000, 1.274], [1438876800000, 1.307], [1439136000000, 1.363], [1439222400000, 1.332], [1439308800000, 1.312], [1439395200000, 1.335], [1439481600000, 1.333], [1439740800000, 1.328], [1439827200000, 1.252], [1439913600000, 1.263], [1440000000000, 1.235], [1440086400000, 1.208], [1440345600000, 1.136], [1440432000000, 1.117], [1440518400000, 1.124], [1440604800000, 1.153], [1440691200000, 1.181], [1440950400000, 1.158], [1441036800000, 1.136], [1441123200000, 1.127], [1441555200000, 1.135], [1441641600000, 1.162], [1441728000000, 1.181], [1441814400000, 1.161], [1441900800000, 1.171], [1442160000000, 1.138], [1442246400000, 1.12], [1442332800000, 1.15], [1442419200000, 1.141], [1442505600000, 1.146], [1442764800000, 1.171], [1442851200000, 1.175], [1442937600000, 1.163], [1443024000000, 1.168], [1443110400000, 1.156], [1443369600000, 1.16], [1443456000000, 1.155], [1443542400000, 1.155], [1444233600000, 1.168], [1444320000000, 1.171], [1444579200000, 1.191], [1444665600000, 1.201], [1444752000000, 1.194], [1444838400000, 1.21], [1444924800000, 1.23], [1445184000000, 1.223], [1445270400000, 1.233], [1445356800000, 1.206], [1445443200000, 1.22], [1445529600000, 1.231], [1445788800000, 1.252], [1445875200000, 1.259], [1445961600000, 1.242], [1446048000000, 1.246], [1446134400000, 1.256], [1446393600000, 1.237], [1446480000000, 1.235], [1446566400000, 1.266], [1446652800000, 1.267], [1446739200000, 1.298], [1446998400000, 1.295], [1447084800000, 1.311], [1447171200000, 1.317], [1447257600000, 1.318], [1447344000000, 1.297], [1447603200000, 1.303], [1447689600000, 1.291], [1447776000000, 1.276], [1447862400000, 1.3], [1447948800000, 1.301], [1448208000000, 1.294], [1448294400000, 1.289], [1448380800000, 1.296], [1448467200000, 1.297], [1448553600000, 1.272], [1448812800000, 1.272], [1448899200000, 1.27], [1448985600000, 1.271], [1449072000000, 1.281], [1449158400000, 1.276], [1449417600000, 1.317], [1449504000000, 1.302], [1449590400000, 1.288], [1449676800000, 1.283], [1449763200000, 1.274], [1450022400000, 1.282], [1450108800000, 1.284], [1450195200000, 1.292], [1450281600000, 1.301], [1450368000000, 1.293], [1450627200000, 1.296], [1450713600000, 1.299], [1450800000000, 1.295], [1450886400000, 1.296], [1450972800000, 1.298], [1451232000000, 1.283], [1451318400000, 1.282], [1451404800000, 1.28], [1451491200000, 1.274], [1451836800000, 1.236], [1451923200000, 1.219], [1452009600000, 1.222], [1452096000000, 1.192], [1452182400000, 1.19], [1452441600000, 1.167], [1452528000000, 1.18], [1452614400000, 1.174], [1452700800000, 1.194], [1452787200000, 1.182], [1453046400000, 1.173], [1453132800000, 1.155], [1453219200000, 1.127], [1453305600000, 1.116], [1453392000000, 1.122], [1453651200000, 1.135], [1453737600000, 1.112], [1453824000000, 1.114], [1453910400000, 1.11], [1453996800000, 1.123], [1454256000000, 1.121], [1454342400000, 1.132], [1454428800000, 1.135], [1454515200000, 1.145], [1454601600000, 1.14], [1455465600000, 1.138], [1455552000000, 1.157], [1455638400000, 1.164], [1455724800000, 1.164], [1455811200000, 1.163], [1456070400000, 1.169], [1456156800000, 1.159], [1456243200000, 1.152], [1456329600000, 1.129], [1456416000000, 1.126], [1456675200000, 1.114], [1456761600000, 1.116], [1456848000000, 1.141], [1456934400000, 1.136], [1457020800000, 1.124], [1457280000000, 1.128], [1457366400000, 1.132], [1457452800000, 1.128], [1457539200000, 1.12], [1457625600000, 1.118], [1457884800000, 1.127], [1457971200000, 1.126], [1458057600000, 1.124], [1458144000000, 1.135], [1458230400000, 1.151], [1458489600000, 1.159], [1458576000000, 1.159], [1458662400000, 1.161], [1458748800000, 1.153], [1458835200000, 1.154], [1459094400000, 1.15], [1459180800000, 1.142], [1459267200000, 1.149], [1459353600000, 1.149], [1459440000000, 1.146], [1459785600000, 1.163], [1459872000000, 1.161], [1459958400000, 1.151], [1460044800000, 1.145], [1460304000000, 1.154], [1460390400000, 1.155], [1460476800000, 1.162], [1460563200000, 1.165], [1460649600000, 1.148], [1460908800000, 1.139], [1460995200000, 1.145], [1461081600000, 1.125], [1461168000000, 1.116], [1461254400000, 1.117], [1461513600000, 1.107], [1461600000000, 1.106], [1461686400000, 1.105], [1461772800000, 1.099], [1461859200000, 1.097], [1462204800000, 1.108], [1462291200000, 1.109], [1462377600000, 1.11], [1462464000000, 1.101], [1462723200000, 1.085], [1462809600000, 1.088], [1462896000000, 1.076], [1462982400000, 1.075], [1463068800000, 1.073], [1463328000000, 1.079], [1463414400000, 1.077], [1463500800000, 1.07], [1463587200000, 1.065], [1463673600000, 1.065], [1463932800000, 1.069], [1464019200000, 1.072], [1464105600000, 1.069], [1464192000000, 1.07], [1464278400000, 1.07], [1464537600000, 1.07], [1464624000000, 1.081], [1464710400000, 1.081], [1464796800000, 1.08], [1464883200000, 1.081], [1465142400000, 1.082], [1465228800000, 1.071], [1465315200000, 1.07], [1465747200000, 1.057], [1465833600000, 1.058], [1465920000000, 1.064], [1466006400000, 1.064], [1466092800000, 1.066], [1466352000000, 1.066], [1466438400000, 1.065], [1466524800000, 1.068], [1466611200000, 1.069], [1466697600000, 1.067], [1466956800000, 1.072], [1467043200000, 1.073], [1467129600000, 1.073], [1467216000000, 1.072], [1467302400000, 1.071], [1467561600000, 1.081], [1467648000000, 1.088], [1467734400000, 1.091], [1467820800000, 1.091], [1467907200000, 1.085], [1468166400000, 1.08], [1468252800000, 1.083], [1468339200000, 1.094], [1468425600000, 1.095], [1468512000000, 1.092], [1468771200000, 1.089], [1468857600000, 1.089], [1468944000000, 1.087], [1469030400000, 1.089], [1469116800000, 1.086], [1469376000000, 1.082], [1469462400000, 1.085], [1469548800000, 1.072], [1469635200000, 1.067], [1469721600000, 1.058], [1469980800000, 1.054], [1470067200000, 1.059], [1470153600000, 1.062], [1470240000000, 1.066], [1470326400000, 1.066], [1470585600000, 1.068], [1470672000000, 1.072], [1470758400000, 1.071], [1470844800000, 1.07], [1470931200000, 1.075], [1471190400000, 1.097], [1471276800000, 1.097], [1471363200000, 1.094], [1471449600000, 1.101], [1471536000000, 1.099], [1471795200000, 1.095], [1471881600000, 1.091], [1471968000000, 1.089], [1472054400000, 1.085], [1472140800000, 1.084], [1472400000000, 1.082], [1472486400000, 1.082], [1472572800000, 1.083], [1472659200000, 1.081], [1472745600000, 1.08], [1473004800000, 1.081], [1473091200000, 1.086], [1473177600000, 1.087], [1473264000000, 1.088], [1473350400000, 1.086], [1473609600000, 1.076], [1473696000000, 1.076], [1473782400000, 1.076], [1474214400000, 1.076], [1474300800000, 1.075], [1474387200000, 1.076], [1474473600000, 1.078], [1474560000000, 1.076], [1474819200000, 1.066], [1474905600000, 1.068], [1474992000000, 1.068], [1475078400000, 1.07], [1475164800000, 1.07], [1476028800000, 1.073], [1476115200000, 1.075], [1476201600000, 1.073], [1476288000000, 1.074], [1476374400000, 1.073], [1476633600000, 1.073], [1476720000000, 1.079], [1476806400000, 1.079], [1476892800000, 1.08], [1476979200000, 1.082], [1477238400000, 1.084], [1477324800000, 1.084], [1477411200000, 1.082], [1477497600000, 1.076], [1477584000000, 1.077], [1477843200000, 1.076], [1477929600000, 1.078], [1478016000000, 1.075], [1478102400000, 1.078], [1478188800000, 1.08], [1478448000000, 1.081], [1478534400000, 1.081], [1478620800000, 1.079], [1478707200000, 1.081], [1478793600000, 1.083], [1479052800000, 1.085], [1479139200000, 1.086], [1479225600000, 1.088], [1479312000000, 1.087], [1479398400000, 1.086], [1479657600000, 1.087], [1479744000000, 1.091], [1479830400000, 1.091], [1479916800000, 1.09], [1480003200000, 1.091], [1480262400000, 1.09], [1480348800000, 1.085], [1480435200000, 1.081], [1480521600000, 1.078], [1480608000000, 1.071], [1480867200000, 1.059], [1480953600000, 1.056], [1481040000000, 1.061], [1481126400000, 1.062], [1481212800000, 1.059], [1481472000000, 1.04], [1481558400000, 1.035], [1481644800000, 1.032], [1481731200000, 1.022], [1481817600000, 1.026], [1482076800000, 1.02], [1482163200000, 1.014], [1482249600000, 1.022], [1482336000000, 1.024], [1482422400000, 1.025], [1482681600000, 1.025], [1482768000000, 1.027], [1482854400000, 1.024], [1482940800000, 1.024], [1483027200000, 1.025], [1483113600000, 1.025], [1483372800000, 1.026], [1483459200000, 1.028], [1483545600000, 1.029], [1483632000000, 1.027], [1483891200000, 1.028], [1483977600000, 1.027], [1484064000000, 1.026], [1484150400000, 1.025], [1484236800000, 1.023], [1484496000000, 1.017], [1484582400000, 1.017], [1484668800000, 1.015], [1484755200000, 1.015], [1484841600000, 1.017], [1485100800000, 1.017], [1485187200000, 1.016], [1485273600000, 1.017], [1485360000000, 1.018], [1486051200000, 1.015], [1486310400000, 1.016], [1486396800000, 1.015], [1486483200000, 1.015], [1486569600000, 1.018], [1486656000000, 1.019], [1486915200000, 1.021], [1487001600000, 1.021], [1487088000000, 1.019], [1487174400000, 1.019], [1487260800000, 1.017], [1487520000000, 1.02], [1487606400000, 1.022], [1487692800000, 1.022], [1487779200000, 1.02], [1487865600000, 1.02], [1488124800000, 1.019], [1488211200000, 1.02], [1488297600000, 1.019], [1488384000000, 1.017], [1488470400000, 1.017], [1488729600000, 1.018], [1488816000000, 1.021], [1488902400000, 1.019], [1488988800000, 1.018], [1489075200000, 1.017], [1489334400000, 1.019], [1489420800000, 1.017], [1489507200000, 1.018], [1489593600000, 1.018], [1489680000000, 1.016], [1489939200000, 1.015], [1490025600000, 1.015], [1490112000000, 1.013], [1490198400000, 1.014], [1490284800000, 1.015], [1490544000000, 1.014], [1490630400000, 1.014], [1490716800000, 1.014], [1490803200000, 1.009], [1490889600000, 1.011], [1491321600000, 1.013], [1491408000000, 1.014], [1491494400000, 1.013], [1491753600000, 1.012], [1491840000000, 1.016], [1491926400000, 1.02], [1492012800000, 1.019], [1492099200000, 1.017], [1492358400000, 1.013], [1492444800000, 1.013], [1492531200000, 1.012], [1492617600000, 1.013], [1492704000000, 1.013], [1492963200000, 1.01], [1493049600000, 1.011], [1493136000000, 1.013], [1493222400000, 1.013], [1493308800000, 1.014], [1493654400000, 1.014], [1493740800000, 1.016], [1493827200000, 1.015], [1493913600000, 1.015], [1494172800000, 0.984], [1494259200000, 0.981], [1494345600000, 0.978], [1494432000000, 0.976], [1494518400000, 0.978], [1494777600000, 0.979], [1494864000000, 0.981], [1494950400000, 0.982], [1495036800000, 0.982], [1495123200000, 0.981], [1495382400000, 0.977], [1495468800000, 0.975], [1495555200000, 0.977], [1495641600000, 0.977], [1495728000000, 0.979], [1496160000000, 0.98], [1496246400000, 0.978], [1496332800000, 0.978], [1496592000000, 0.979], [1496678400000, 0.98], [1496764800000, 0.984], [1496851200000, 0.985], [1496937600000, 0.989], [1497196800000, 0.991], [1497283200000, 0.993], [1497369600000, 0.992], [1497456000000, 0.995], [1497542400000, 0.996], [1497801600000, 1.003], [1497888000000, 1.009], [1497974400000, 1.01], [1498060800000, 1.009], [1498147200000, 1.012], [1498406400000, 1.016], [1498492800000, 1.016], [1498579200000, 1.014], [1498665600000, 1.008], [1498752000000, 1.006], [1499011200000, 1.008], [1499097600000, 1.009], [1499184000000, 1.015], [1499270400000, 1.017], [1499356800000, 1.019], [1499616000000, 1.015], [1499702400000, 1.016], [1499788800000, 1.013], [1499875200000, 1.017], [1499961600000, 1.021], [1500220800000, 1.016], [1500307200000, 1.016], [1500393600000, 1.022], [1500480000000, 1.029], [1500566400000, 1.037], [1500825600000, 1.039], [1500912000000, 1.029], [1500998400000, 1.03], [1501084800000, 1.031], [1501171200000, 1.036], [1501430400000, 1.042], [1501516800000, 1.044], [1501603200000, 1.046], [1501689600000, 1.041], [1501776000000, 1.04], [1502035200000, 1.038], [1502121600000, 1.037], [1502208000000, 1.033], [1502294400000, 1.028], [1502380800000, 1.02], [1502640000000, 1.028], [1502726400000, 1.027], [1502812800000, 1.026], [1502899200000, 1.029], [1502985600000, 1.03], [1503244800000, 1.033], [1503331200000, 1.034], [1503417600000, 1.031], [1503504000000, 1.028], [1503590400000, 1.031], [1503849600000, 1.039], [1503936000000, 1.044], [1504022400000, 1.042], [1504108800000, 1.045], [1504195200000, 1.043], [1504454400000, 1.042], [1504540800000, 1.046], [1504627200000, 1.045], [1504713600000, 1.045], [1504800000000, 1.045], [1505059200000, 1.045], [1505145600000, 1.041], [1505232000000, 1.041], [1505318400000, 1.036], [1505404800000, 1.035], [1505664000000, 1.035], [1505750400000, 1.034], [1505836800000, 1.034], [1505923200000, 1.033], [1506009600000, 1.029], [1506268800000, 1.024], [1506355200000, 1.024], [1506441600000, 1.026], [1506528000000, 1.025], [1506614400000, 1.031], [1507478400000, 1.033], [1507564800000, 1.033], [1507651200000, 1.035], [1507737600000, 1.039], [1507824000000, 1.039], [1508083200000, 1.043], [1508169600000, 1.044], [1508256000000, 1.04], [1508342400000, 1.036], [1508428800000, 1.038], [1508688000000, 1.037], [1508774400000, 1.037], [1508860800000, 1.038], [1508947200000, 1.038], [1509033600000, 1.041], [1509292800000, 1.031], [1509379200000, 1.032], [1509465600000, 1.031], [1509552000000, 1.027], [1509638400000, 1.023], [1509897600000, 1.023], [1509984000000, 1.023], [1510070400000, 1.025], [1510156800000, 1.026], [1510243200000, 1.029], [1510502400000, 1.031], [1510588800000, 1.03], [1510675200000, 1.018], [1510761600000, 1.017], [1510848000000, 1.015], [1511107200000, 1.003], [1511193600000, 1.002], [1511280000000, 1.001], [1511366400000, 0.992], [1511452800000, 0.99], [1511712000000, 0.985], [1511798400000, 0.984], [1511884800000, 0.987], [1511971200000, 0.982], [1512057600000, 0.981], [1512316800000, 0.977], [1512403200000, 0.972], [1512489600000, 0.971], [1512576000000, 0.974], [1512662400000, 0.98], [1512921600000, 0.984], [1513008000000, 0.979], [1513094400000, 0.979], [1513180800000, 0.978], [1513267200000, 0.977], [1513526400000, 0.977], [1513612800000, 0.979], [1513699200000, 0.976], [1513785600000, 0.98], [1513872000000, 0.982], [1514131200000, 0.981], [1514217600000, 0.979], [1514304000000, 0.974], [1514390400000, 0.975], [1514476800000, 0.979], [1514649600000, 0.979], [1514822400000, 0.986], [1514908800000, 0.994], [1514995200000, 0.992], [1515081600000, 1.0], [1515340800000, 1.002], [1515427200000, 0.997], [1515513600000, 0.994], [1515600000000, 0.992], [1515686400000, 0.992], [1515945600000, 0.988], [1516032000000, 0.991], [1516118400000, 0.989], [1516204800000, 0.992], [1516291200000, 0.997], [1516550400000, 1.002], [1516636800000, 1.01], [1516723200000, 1.014], [1516809600000, 1.012], [1516896000000, 1.013], [1517155200000, 0.996], [1517241600000, 0.988], [1517328000000, 0.988], [1517414400000, 0.978], [1517500800000, 0.985], [1517760000000, 0.993], [1517846400000, 0.976], [1517932800000, 0.965], [1518019200000, 0.956], [1518105600000, 0.931], [1518364800000, 0.943], [1518451200000, 0.95], [1518537600000, 0.955], [1519228800000, 0.966], [1519315200000, 0.967], [1519574400000, 0.973], [1519660800000, 0.964], [1519747200000, 0.96], [1519833600000, 0.96], [1519920000000, 0.952], [1520179200000, 0.951], [1520265600000, 0.963], [1520352000000, 0.961], [1520438400000, 0.963], [1520524800000, 0.966], [1520784000000, 0.97], [1520870400000, 0.967], [1520956800000, 0.961], [1521043200000, 0.961], [1521129600000, 0.959], [1521388800000, 0.959], [1521475200000, 0.96], [1521561600000, 0.956], [1521648000000, 0.951], [1521734400000, 0.933], [1521993600000, 0.936], [1522080000000, 0.94], [1522166400000, 0.933], [1522252800000, 0.935], [1522339200000, 0.94], [1522598400000, 0.946], [1522684800000, 0.942], [1522771200000, 0.939], [1523203200000, 0.943], [1523289600000, 0.949], [1523376000000, 0.954], [1523462400000, 0.948], [1523548800000, 0.944], [1523808000000, 0.941], [1523894400000, 0.933], [1523980800000, 0.943], [1524067200000, 0.942], [1524153600000, 0.932], [1524412800000, 0.923], [1524499200000, 0.939], [1524585600000, 0.938], [1524672000000, 0.926], [1524758400000, 0.928], [1525190400000, 0.924], [1525276800000, 0.929], [1525363200000, 0.933], [1525622400000, 0.945], [1525708800000, 0.953], [1525795200000, 0.95], [1525881600000, 0.947], [1525968000000, 0.942], [1526227200000, 0.935], [1526313600000, 0.941], [1526400000000, 0.935], [1526486400000, 0.93], [1526572800000, 0.935], [1526832000000, 0.943], [1526918400000, 0.943], [1527004800000, 0.936], [1527091200000, 0.928], [1527177600000, 0.92], [1527436800000, 0.918], [1527523200000, 0.909], [1527609600000, 0.896], [1527696000000, 0.9], [1527782400000, 0.892], [1528041600000, 0.884], [1528128000000, 0.895], [1528214400000, 0.894], [1528300800000, 0.896], [1528387200000, 0.889], [1528646400000, 0.882], [1528732800000, 0.888], [1528819200000, 0.885], [1528905600000, 0.884], [1528992000000, 0.881], [1529337600000, 0.857], [1529424000000, 0.86], [1529510400000, 0.856], [1529596800000, 0.865], [1529856000000, 0.866], [1529942400000, 0.869], [1530028800000, 0.864], [1530115200000, 0.863], [1530201600000, 0.882], [1530288000000, 0.882], [1530460800000, 0.871], [1530547200000, 0.877], [1530633600000, 0.871], [1530720000000, 0.869], [1530806400000, 0.869], [1531065600000, 0.88], [1531152000000, 0.88], [1531238400000, 0.871], [1531324800000, 0.884], [1531411200000, 0.889], [1531670400000, 0.891], [1531756800000, 0.892], [1531843200000, 0.891], [1531929600000, 0.89], [1532016000000, 0.901], [1532275200000, 0.907], [1532361600000, 0.908], [1532448000000, 0.907], [1532534400000, 0.896], [1532620800000, 0.896], [1532880000000, 0.892], [1532966400000, 0.896], [1533052800000, 0.891], [1533139200000, 0.888], [1533225600000, 0.881], [1533484800000, 0.879], [1533571200000, 0.894], [1533657600000, 0.888], [1533744000000, 0.899], [1533830400000, 0.901], [1534089600000, 0.904], [1534176000000, 0.898], [1534262400000, 0.888], [1534348800000, 0.887], [1534435200000, 0.878], [1534694400000, 0.881], [1534780800000, 0.886], [1534867200000, 0.884], [1534953600000, 0.889], [1535040000000, 0.89], [1535299200000, 0.898], [1535385600000, 0.9], [1535472000000, 0.896], [1535558400000, 0.888], [1535644800000, 0.888], [1535904000000, 0.888], [1535990400000, 0.893], [1536076800000, 0.889], [1536163200000, 0.888], [1536249600000, 0.884], [1536508800000, 0.873], [1536595200000, 0.871], [1536681600000, 0.869], [1536768000000, 0.867], [1536854400000, 0.859], [1537113600000, 0.856], [1537200000000, 0.861], [1537286400000, 0.867], [1537372800000, 0.867], [1537459200000, 0.869], [1537804800000, 0.869], [1537891200000, 0.874], [1537977600000, 0.87], [1538064000000, 0.875], [1538928000000, 0.864], [1539014400000, 0.856], [1539100800000, 0.855], [1539187200000, 0.843], [1539273600000, 0.847], [1539532800000, 0.845], [1539619200000, 0.838], [1539705600000, 0.841], [1539792000000, 0.834], [1539878400000, 0.845], [1540137600000, 0.856], [1540224000000, 0.851], [1540310400000, 0.849], [1540396800000, 0.848], [1540483200000, 0.847], [1540742400000, 0.842], [1540828800000, 0.843], [1540915200000, 0.846], [1541001600000, 0.851], [1541088000000, 0.862], [1541347200000, 0.863], [1541433600000, 0.859], [1541520000000, 0.858], [1541606400000, 0.856], [1541692800000, 0.854], [1541952000000, 0.86], [1542038400000, 0.862], [1542124800000, 0.862], [1542211200000, 0.867], [1542297600000, 0.868], [1542556800000, 0.868], [1542643200000, 0.859], [1542729600000, 0.858], [1542816000000, 0.857], [1542902400000, 0.851], [1543161600000, 0.851], [1543248000000, 0.852], [1543334400000, 0.857], [1543420800000, 0.853], [1543507200000, 0.854], [1543766400000, 0.861], [1543852800000, 0.861], [1543939200000, 0.862], [1544025600000, 0.86], [1544112000000, 0.861], [1544371200000, 0.859], [1544457600000, 0.858], [1544544000000, 0.857], [1544630400000, 0.862], [1544716800000, 0.858], [1544976000000, 0.856], [1545062400000, 0.854], [1545148800000, 0.85], [1545235200000, 0.847], [1545321600000, 0.846], [1545580800000, 0.849], [1545667200000, 0.849], [1545753600000, 0.848], [1545840000000, 0.844], [1545926400000, 0.843], [1546185600000, 0.843], [1546358400000, 0.841], [1546444800000, 0.842], [1546531200000, 0.849], [1546790400000, 0.857], [1546876800000, 0.857], [1546963200000, 0.862], [1547049600000, 0.865], [1547136000000, 0.867], [1547395200000, 0.863], [1547481600000, 0.869], [1547568000000, 0.869], [1547654400000, 0.867], [1547740800000, 0.871], [1548000000000, 0.874], [1548086400000, 0.871], [1548172800000, 0.872], [1548259200000, 0.878], [1548345600000, 0.882], [1548604800000, 0.879], [1548691200000, 0.878], [1548777600000, 0.878], [1548864000000, 0.878], [1548950400000, 0.886], [1549814400000, 0.894], [1549900800000, 0.897], [1549987200000, 0.905], [1550073600000, 0.907], [1550160000000, 0.901], [1550419200000, 0.914], [1550505600000, 0.91], [1550592000000, 0.91], [1550678400000, 0.915], [1550764800000, 0.931], [1551024000000, 0.952], [1551110400000, 0.949], [1551196800000, 0.945], [1551283200000, 0.944], [1551369600000, 0.947], [1551628800000, 0.955], [1551715200000, 0.966], [1551801600000, 0.969], [1551888000000, 0.966], [1551974400000, 0.96], [1552233600000, 0.977], [1552320000000, 0.984], [1552406400000, 0.97], [1552492800000, 0.962], [1552579200000, 0.967], [1552838400000, 0.982], [1552924800000, 0.986], [1553011200000, 0.983], [1553097600000, 0.994], [1553184000000, 0.994], [1553443200000, 0.982], [1553529600000, 0.965], [1553616000000, 0.964], [1553702400000, 0.961], [1553788800000, 0.98], [1554048000000, 0.999], [1554134400000, 1.002], [1554220800000, 1.011], [1554307200000, 1.017], [1554652800000, 1.011], [1554739200000, 1.006], [1554825600000, 1.001], [1554912000000, 0.989], [1554998400000, 0.986], [1555257600000, 0.979], [1555344000000, 0.987], [1555430400000, 0.989], [1555516800000, 0.986], [1555603200000, 0.991], [1555862400000, 0.978], [1555948800000, 0.966], [1556035200000, 0.969], [1556121600000, 0.95], [1556208000000, 0.945], [1556467200000, 0.937], [1556553600000, 0.944], [1557072000000, 0.905], [1557158400000, 0.907], [1557244800000, 0.908], [1557331200000, 0.91], [1557417600000, 0.933], [1557676800000, 0.922], [1557763200000, 0.92], [1557849600000, 0.931], [1557936000000, 0.929], [1558022400000, 0.916], [1558281600000, 0.912], [1558368000000, 0.918], [1558454400000, 0.921], [1558540800000, 0.914], [1558627200000, 0.911], [1558886400000, 0.917], [1558972800000, 0.914], [1559059200000, 0.913], [1559145600000, 0.903], [1559232000000, 0.9], [1559491200000, 0.885], [1559577600000, 0.878], [1559664000000, 0.877], [1559750400000, 0.87], [1560096000000, 0.874], [1560182400000, 0.895], [1560268800000, 0.889], [1560355200000, 0.89], [1560441600000, 0.883], [1560700800000, 0.883], [1560787200000, 0.883], [1560873600000, 0.893], [1560960000000, 0.914], [1561046400000, 0.927], [1561305600000, 0.93], [1561392000000, 0.925], [1561478400000, 0.926], [1561564800000, 0.924], [1561651200000, 0.92], [1561824000000, 0.92], [1561910400000, 0.939], [1561996800000, 0.939], [1562083200000, 0.927], [1562169600000, 0.925], [1562256000000, 0.924], [1562515200000, 0.91], [1562601600000, 0.911], [1562688000000, 0.91], [1562774400000, 0.91], [1562860800000, 0.912], [1563120000000, 0.92], [1563206400000, 0.921], [1563292800000, 0.926], [1563379200000, 0.919], [1563465600000, 0.924], [1563724800000, 0.916], [1563811200000, 0.919], [1563897600000, 0.924], [1563984000000, 0.932], [1564070400000, 0.937], [1564329600000, 0.935], [1564416000000, 0.94], [1564502400000, 0.941], [1564588800000, 0.939], [1564675200000, 0.929], [1564934400000, 0.912], [1565020800000, 0.908], [1565107200000, 0.908], [1565193600000, 0.917], [1565280000000, 0.915], [1565539200000, 0.926], [1565625600000, 0.924], [1565712000000, 0.923], [1565798400000, 0.926], [1565884800000, 0.931], [1566144000000, 0.962], [1566230400000, 0.956], [1566316800000, 0.955], [1566403200000, 0.949], [1566489600000, 0.951], [1566748800000, 0.942], [1566835200000, 0.953], [1566921600000, 0.947], [1567008000000, 0.945], [1567094400000, 0.942], [1567353600000, 0.953], [1567440000000, 0.956], [1567526400000, 0.963], [1567612800000, 0.983], [1567699200000, 0.987], [1567958400000, 0.998], [1568044800000, 0.993], [1568131200000, 0.993], [1568217600000, 0.997], [1568563200000, 0.992], [1568649600000, 0.975], [1568736000000, 0.974], [1568822400000, 0.979], [1568908800000, 0.98], [1569168000000, 0.973], [1569254400000, 0.972], [1569340800000, 0.967], [1569427200000, 0.964], [1569513600000, 0.967], [1569772800000, 0.959], [1570464000000, 0.956], [1570550400000, 0.96], [1570636800000, 0.966], [1570723200000, 0.981], [1570982400000, 0.985], [1571068800000, 0.978], [1571155200000, 0.971], [1571241600000, 0.97], [1571328000000, 0.963], [1571587200000, 0.957], [1571673600000, 0.96], [1571760000000, 0.956], [1571846400000, 0.958], [1571932800000, 0.965], [1572192000000, 0.971], [1572278400000, 0.967], [1572364800000, 0.958], [1572451200000, 0.955], [1572537600000, 0.962], [1572796800000, 0.963], [1572883200000, 0.971], [1572969600000, 0.966], [1573056000000, 0.968], [1573142400000, 0.966], [1573401600000, 0.957], [1573488000000, 0.952], [1573574400000, 0.95], [1573660800000, 0.955], [1573747200000, 0.949], [1574006400000, 0.953], [1574092800000, 0.959], [1574179200000, 0.952], [1574265600000, 0.95], [1574352000000, 0.946], [1574611200000, 0.947], [1574697600000, 0.947], [1574784000000, 0.944], [1574870400000, 0.944], [1574956800000, 0.945], [1575216000000, 0.944], [1575302400000, 0.949], [1575388800000, 0.946], [1575475200000, 0.955], [1575561600000, 0.956], [1575820800000, 0.955], [1575907200000, 0.956], [1575993600000, 0.956], [1576080000000, 0.955], [1576166400000, 0.973], [1576425600000, 0.986], [1576512000000, 1.004], [1576598400000, 1.005], [1576684800000, 0.998], [1576771200000, 0.997], [1577030400000, 0.991], [1577116800000, 0.996], [1577203200000, 0.998], [1577289600000, 1.009], [1577376000000, 1.003], [1577635200000, 1.023], [1577721600000, 1.027], [1577894400000, 1.032], [1577980800000, 1.03], [1578240000000, 1.027], [1578326400000, 1.027], [1578412800000, 1.018], [1578499200000, 1.028], [1578585600000, 1.026], [1578844800000, 1.036], [1578931200000, 1.033], [1579017600000, 1.03], [1579104000000, 1.025], [1579190400000, 1.029], [1579449600000, 1.043], [1579536000000, 1.034], [1579622400000, 1.04], [1579708800000, 1.019], [1580659200000, 0.951], [1580745600000, 0.971], [1580832000000, 0.979], [1580918400000, 0.989], [1581004800000, 0.995], [1581264000000, 1.0], [1581350400000, 1.006], [1581436800000, 1.016], [1581523200000, 1.008], [1581609600000, 1.012], [1581868800000, 1.03], [1581955200000, 1.028], [1582041600000, 1.029], [1582128000000, 1.054], [1582214400000, 1.062], [1582473600000, 1.068], [1582560000000, 1.07], [1582646400000, 1.067], [1582732800000, 1.065], [1582819200000, 1.032], [1583078400000, 1.045], [1583164800000, 1.048], [1583251200000, 1.056], [1583337600000, 1.081], [1583424000000, 1.069], [1583683200000, 1.041], [1583769600000, 1.064], [1583856000000, 1.052], [1583942400000, 1.044], [1584028800000, 1.036], [1584288000000, 1.01], [1584374400000, 1.006], [1584460800000, 0.998], [1584547200000, 0.993], [1584633600000, 1.009], [1584892800000, 0.991], [1584979200000, 0.996], [1585065600000, 1.011], [1585152000000, 1.004], [1585238400000, 1.002], [1585497600000, 0.994], [1585584000000, 0.989], [1585670400000, 0.988], [1585756800000, 0.997], [1585843200000, 0.993], [1586188800000, 1.005], [1586275200000, 1.006], [1586361600000, 1.01], [1586448000000, 1.001], [1586707200000, 0.996], [1586793600000, 1.0], [1586880000000, 0.995], [1586966400000, 0.998], [1587052800000, 1.001], [1587312000000, 1.001], [1587398400000, 0.993], [1587484800000, 0.993], [1587571200000, 0.991], [1587657600000, 0.985], [1587916800000, 0.987], [1588003200000, 0.989], [1588089600000, 0.996], [1588176000000, 1.007], [1588694400000, 1.007], [1588780800000, 1.0], [1588867200000, 1.007], [1589126400000, 1.002], [1589212800000, 0.999], [1589299200000, 0.995], [1589385600000, 0.988], [1589472000000, 0.987], [1589731200000, 0.975], [1589817600000, 0.972], [1589904000000, 0.959], [1589990400000, 0.958], [1590076800000, 0.953], [1590336000000, 0.948], [1590422400000, 0.953], [1590508800000, 0.95], [1590595200000, 0.956], [1590681600000, 0.957], [1590940800000, 0.977], [1591027200000, 0.981], [1591113600000, 0.975], [1591200000000, 0.972], [1591286400000, 0.974], [1591545600000, 0.974], [1591632000000, 0.979], [1591718400000, 0.974], [1591804800000, 0.967], [1591891200000, 0.968], [1592150400000, 0.97], [1592236800000, 0.973], [1592323200000, 0.971], [1592409600000, 0.975], [1592496000000, 0.989], [1592755200000, 0.997], [1592841600000, 0.997], [1592928000000, 1.001], [1593360000000, 0.982], [1593446400000, 0.993], [1593532800000, 1.017], [1593619200000, 1.072], [1593705600000, 1.11], [1593964800000, 1.176], [1594051200000, 1.155], [1594137600000, 1.192], [1594224000000, 1.202], [1594310400000, 1.169], [1594569600000, 1.181], [1594656000000, 1.18], [1594742400000, 1.161], [1594828800000, 1.116], [1594915200000, 1.107], [1595174400000, 1.137], [1595260800000, 1.131], [1595347200000, 1.148], [1595433600000, 1.15], [1595520000000, 1.116], [1595779200000, 1.106], [1595865600000, 1.106], [1595952000000, 1.137], [1596038400000, 1.135], [1596124800000, 1.145], [1596384000000, 1.152], [1596470400000, 1.152], [1596556800000, 1.152], [1596643200000, 1.171], [1596729600000, 1.15], [1596988800000, 1.154], [1597075200000, 1.142], [1597161600000, 1.135], [1597248000000, 1.143], [1597334400000, 1.154], [1597593600000, 1.173], [1597680000000, 1.182], [1597766400000, 1.173], [1597852800000, 1.158], [1597939200000, 1.165], [1598198400000, 1.162]];
/*累计收益率走势*/
var Data_grandTotal = [{
    "name": "中海可转债债券C",
    "data": [[1582473600000, 0], [1582560000000, 0.23], [1582646400000, -0.12], [1582732800000, -0.35], [1582819200000, -4.20], [1583078400000, -2.68], [1583164800000, -2.33], [1583251200000, -1.40], [1583337600000, 1.52], [1583424000000, 0.12], [1583683200000, -3.15], [1583769600000, -0.47], [1583856000000, -1.86], [1583942400000, -2.80], [1584028800000, -3.73], [1584288000000, -6.76], [1584374400000, -7.23], [1584460800000, -8.16], [1584547200000, -8.74], [1584633600000, -6.88], [1584892800000, -8.97], [1584979200000, -8.39], [1585065600000, -6.64], [1585152000000, -7.46], [1585238400000, -7.69], [1585497600000, -8.62], [1585584000000, -9.21], [1585670400000, -9.32], [1585756800000, -8.28], [1585843200000, -8.74], [1586188800000, -7.34], [1586275200000, -7.23], [1586361600000, -6.76], [1586448000000, -7.81], [1586707200000, -8.39], [1586793600000, -7.93], [1586880000000, -8.51], [1586966400000, -8.16], [1587052800000, -7.81], [1587312000000, -7.81], [1587398400000, -8.74], [1587484800000, -8.74], [1587571200000, -8.97], [1587657600000, -9.67], [1587916800000, -9.44], [1588003200000, -9.21], [1588089600000, -8.39], [1588176000000, -7.11], [1588694400000, -7.11], [1588780800000, -7.93], [1588867200000, -7.11], [1589126400000, -7.69], [1589212800000, -8.04], [1589299200000, -8.51], [1589385600000, -9.32], [1589472000000, -9.44], [1589731200000, -10.84], [1589817600000, -11.19], [1589904000000, -12.70], [1589990400000, -12.82], [1590076800000, -13.40], [1590336000000, -13.99], [1590422400000, -13.40], [1590508800000, -13.75], [1590595200000, -13.05], [1590681600000, -12.94], [1590940800000, -10.61], [1591027200000, -10.14], [1591113600000, -10.84], [1591200000000, -11.19], [1591286400000, -10.96], [1591545600000, -10.96], [1591632000000, -10.37], [1591718400000, -10.96], [1591804800000, -11.77], [1591891200000, -11.65], [1592150400000, -11.42], [1592236800000, -11.07], [1592323200000, -11.31], [1592409600000, -10.84], [1592496000000, -9.21], [1592755200000, -8.28], [1592841600000, -8.28], [1592928000000, -7.81], [1593360000000, -10.02], [1593446400000, -8.74], [1593532800000, -5.94], [1593619200000, 0.47], [1593705600000, 4.90], [1593964800000, 12.59], [1594051200000, 10.14], [1594137600000, 14.45], [1594224000000, 15.62], [1594310400000, 11.77], [1594569600000, 13.17], [1594656000000, 13.05], [1594742400000, 10.84], [1594828800000, 5.59], [1594915200000, 4.55], [1595174400000, 8.04], [1595260800000, 7.34], [1595347200000, 9.32], [1595433600000, 9.56], [1595520000000, 5.59], [1595779200000, 4.43], [1595865600000, 4.43], [1595952000000, 8.04], [1596038400000, 7.81], [1596124800000, 8.97], [1596384000000, 9.79], [1596470400000, 9.79], [1596556800000, 9.79], [1596643200000, 12.00], [1596729600000, 9.56], [1596988800000, 10.02], [1597075200000, 8.62], [1597161600000, 7.81], [1597248000000, 8.74], [1597334400000, 10.02], [1597593600000, 12.24], [1597680000000, 13.29], [1597766400000, 12.24], [1597852800000, 10.49], [1597939200000, 11.31], [1598198400000, 10.96]]
}, {
    "name": "同类平均",
    "data": [[1582473600000, 0], [1582560000000, 0.02], [1582646400000, -0.16], [1582732800000, -0.12], [1582819200000, -0.37], [1583078400000, -0.19], [1583164800000, -0.12], [1583251200000, -0.07], [1583337600000, 0.09], [1583424000000, 0.10], [1583683200000, -0.03], [1583769600000, 0.05], [1583856000000, -0.03], [1583942400000, -0.18], [1584028800000, -0.31], [1584288000000, -0.62], [1584374400000, -0.70], [1584460800000, -0.75], [1584547200000, -0.76], [1584633600000, -0.55], [1584892800000, -0.74], [1584979200000, -0.57], [1585065600000, -0.34], [1585152000000, -0.33], [1585238400000, -0.34], [1585497600000, -0.41], [1585584000000, -0.36], [1585670400000, -0.29], [1585756800000, -0.18], [1585843200000, -0.22], [1586188800000, 0.31], [1586275200000, 0.46], [1586361600000, 0.52], [1586448000000, 0.39], [1586707200000, 0.29], [1586793600000, 0.42], [1586880000000, 0.44], [1586966400000, 0.55], [1587052800000, 0.60], [1587312000000, 0.66], [1587398400000, 0.65], [1587484800000, 0.76], [1587571200000, 0.82], [1587657600000, 0.78], [1587916800000, 0.80], [1588003200000, 0.83], [1588089600000, 0.86], [1588176000000, 0.96], [1588694400000, 0.99], [1588780800000, 0.85], [1588867200000, 0.86], [1589126400000, 0.71], [1589212800000, 0.67], [1589299200000, 0.67], [1589385600000, 0.57], [1589472000000, 0.61], [1589731200000, 0.50], [1589817600000, 0.50], [1589904000000, 0.38], [1589990400000, 0.32], [1590076800000, 0.28], [1590336000000, 0.17], [1590422400000, 0.16], [1590508800000, 0.04], [1590595200000, 0.04], [1590681600000, 0.14], [1590940800000, 0.31], [1591027200000, 0.10], [1591113600000, -0.09], [1591200000000, -0.20], [1591286400000, -0.34], [1591545600000, -0.34], [1591632000000, -0.27], [1591718400000, -0.26], [1591804800000, -0.25], [1591891200000, -0.17], [1592150400000, -0.15], [1592236800000, -0.11], [1592323200000, -0.16], [1592409600000, -0.11], [1592496000000, -0.06], [1592755200000, -0.15], [1592841600000, -0.22], [1592928000000, -0.12], [1593360000000, -0.12], [1593446400000, 0.03], [1593532800000, 0.15], [1593619200000, 0.36], [1593705600000, 0.49], [1593964800000, 0.77], [1594051200000, 0.72], [1594137600000, 0.80], [1594224000000, 0.82], [1594310400000, 0.65], [1594569600000, 0.81], [1594656000000, 0.70], [1594742400000, 0.59], [1594828800000, 0.20], [1594915200000, 0.28], [1595174400000, 0.58], [1595260800000, 0.75], [1595347200000, 0.89], [1595433600000, 0.91], [1595520000000, 0.62], [1595779200000, 0.63], [1595865600000, 0.70], [1595952000000, 0.88], [1596038400000, 0.87], [1596124800000, 0.94], [1596384000000, 1.16], [1596470400000, 1.15], [1596556800000, 1.26], [1596643200000, 1.25], [1596729600000, 1.16], [1596988800000, 1.20], [1597075200000, 1.07], [1597161600000, 0.95], [1597248000000, 0.99], [1597334400000, 1.11], [1597593600000, 1.32], [1597680000000, 1.39], [1597766400000, 1.26], [1597852800000, 1.10], [1597939200000, 1.15], [1598198400000, 1.20]]
}, {
    "name": "沪深300",
    "data": [[1582473600000, 0], [1582560000000, -0.22], [1582646400000, -1.45], [1582732800000, -1.16], [1582819200000, -4.66], [1583078400000, -1.53], [1583164800000, -1.00], [1583251200000, -0.43], [1583337600000, 1.79], [1583424000000, 0.14], [1583683200000, -3.28], [1583769600000, -1.21], [1583856000000, -2.53], [1583942400000, -4.40], [1584028800000, -5.75], [1584288000000, -9.80], [1584374400000, -10.24], [1584460800000, -12.02], [1584547200000, -13.16], [1584633600000, -11.60], [1584892800000, -14.58], [1584979200000, -12.29], [1585065600000, -9.93], [1585152000000, -10.52], [1585238400000, -10.23], [1585497600000, -11.10], [1585584000000, -10.81], [1585670400000, -11.08], [1585756800000, -9.64], [1585843200000, -10.15], [1586188800000, -8.10], [1586275200000, -8.53], [1586361600000, -8.23], [1586448000000, -8.80], [1586707200000, -9.18], [1586793600000, -7.43], [1586880000000, -8.12], [1586966400000, -8.00], [1587052800000, -7.10], [1587312000000, -6.76], [1587398400000, -7.86], [1587484800000, -7.10], [1587571200000, -7.33], [1587657600000, -8.13], [1587916800000, -7.50], [1588003200000, -6.86], [1588089600000, -6.43], [1588176000000, -5.33], [1588694400000, -4.76], [1588780800000, -5.03], [1588867200000, -4.09], [1589126400000, -4.18], [1589212800000, -4.18], [1589299200000, -3.98], [1589385600000, -5.02], [1589472000000, -5.32], [1589731200000, -5.08], [1589817600000, -4.27], [1589904000000, -4.78], [1589990400000, -5.30], [1590076800000, -7.47], [1590336000000, -7.34], [1590422400000, -6.29], [1590508800000, -6.95], [1590595200000, -6.68], [1590681600000, -6.43], [1590940800000, -3.91], [1591027200000, -3.61], [1591113600000, -3.61], [1591200000000, -3.65], [1591286400000, -3.18], [1591545600000, -2.68], [1591632000000, -2.08], [1591718400000, -2.25], [1591804800000, -3.31], [1591891200000, -3.14], [1592150400000, -4.30], [1592236800000, -2.86], [1592323200000, -2.79], [1592409600000, -2.14], [1592496000000, -0.83], [1592755200000, -0.75], [1592841600000, -0.27], [1592928000000, 0.15], [1593360000000, -0.56], [1593446400000, 0.75], [1593532800000, 2.78], [1593619200000, 4.91], [1593705600000, 6.94], [1593964800000, 13.00], [1594051200000, 13.68], [1594137600000, 15.51], [1594224000000, 17.13], [1594310400000, 15.01], [1594569600000, 17.42], [1594656000000, 16.30], [1594742400000, 14.80], [1594828800000, 9.28], [1594915200000, 9.97], [1595174400000, 13.25], [1595260800000, 13.51], [1595347200000, 14.07], [1595433600000, 14.02], [1595520000000, 9.02], [1595779200000, 9.57], [1595865600000, 10.54], [1595952000000, 13.22], [1596038400000, 12.66], [1596124800000, 13.60], [1596384000000, 15.45], [1596470400000, 15.56], [1596556800000, 15.59], [1596643200000, 15.24], [1596729600000, 13.92], [1596988800000, 14.33], [1597075200000, 13.28], [1597161600000, 12.46], [1597248000000, 12.17], [1597334400000, 13.84], [1597593600000, 16.51], [1597680000000, 16.45], [1597766400000, 14.71], [1597852800000, 13.22], [1597939200000, 14.18], [1598198400000, 15.07]]
}];
/*同类排名走势*/
var Data_rateInSimilarType = [{"x": 1371657600000, "y": 341, "sc": "365"}, {
    "x": 1371744000000,
    "y": 344,
    "sc": "371"
}, {"x": 1372003200000, "y": 345, "sc": "365"}, {"x": 1372089600000, "y": 338, "sc": "365"}, {
    "x": 1372176000000,
    "y": 346,
    "sc": "369"
}, {"x": 1372262400000, "y": 346, "sc": "369"}, {"x": 1372348800000, "y": 353, "sc": "375"}, {
    "x": 1372521600000,
    "y": 153,
    "sc": "161"
}, {"x": 1372608000000, "y": 349, "sc": "371"}, {"x": 1372694400000, "y": 351, "sc": "371"}, {
    "x": 1372780800000,
    "y": 351,
    "sc": "371"
}, {"x": 1372867200000, "y": 352, "sc": "371"}, {"x": 1372953600000, "y": 358, "sc": "377"}, {
    "x": 1373212800000,
    "y": 350,
    "sc": "371"
}, {"x": 1373299200000, "y": 349, "sc": "371"}, {"x": 1373385600000, "y": 346, "sc": "371"}, {
    "x": 1373472000000,
    "y": 341,
    "sc": "371"
}, {"x": 1373558400000, "y": 349, "sc": "377"}, {"x": 1373817600000, "y": 349, "sc": "371"}, {
    "x": 1373904000000,
    "y": 347,
    "sc": "371"
}, {"x": 1373990400000, "y": 353, "sc": "373"}, {"x": 1374076800000, "y": 357, "sc": "377"}, {
    "x": 1374163200000,
    "y": 358,
    "sc": "381"
}, {"x": 1374422400000, "y": 356, "sc": "377"}, {"x": 1374508800000, "y": 364, "sc": "380"}, {
    "x": 1374595200000,
    "y": 365,
    "sc": "386"
}, {"x": 1374681600000, "y": 370, "sc": "390"}, {"x": 1374768000000, "y": 365, "sc": "394"}, {
    "x": 1375027200000,
    "y": 365,
    "sc": "391"
}, {"x": 1375113600000, "y": 364, "sc": "391"}, {"x": 1375200000000, "y": 361, "sc": "390"}, {
    "x": 1375286400000,
    "y": 355,
    "sc": "390"
}, {"x": 1375372800000, "y": 357, "sc": "395"}, {"x": 1375632000000, "y": 345, "sc": "393"}, {
    "x": 1375718400000,
    "y": 342,
    "sc": "393"
}, {"x": 1375804800000, "y": 329, "sc": "393"}, {"x": 1375891200000, "y": 330, "sc": "395"}, {
    "x": 1375977600000,
    "y": 345,
    "sc": "400"
}, {"x": 1376236800000, "y": 333, "sc": "399"}, {"x": 1376323200000, "y": 324, "sc": "399"}, {
    "x": 1376409600000,
    "y": 301,
    "sc": "403"
}, {"x": 1376496000000, "y": 325, "sc": "403"}, {"x": 1376582400000, "y": 347, "sc": "407"}, {
    "x": 1376841600000,
    "y": 343,
    "sc": "403"
}, {"x": 1376928000000, "y": 355, "sc": "403"}, {"x": 1377014400000, "y": 354, "sc": "405"}, {
    "x": 1377100800000,
    "y": 355,
    "sc": "405"
}, {"x": 1377187200000, "y": 363, "sc": "409"}, {"x": 1377446400000, "y": 365, "sc": "407"}, {
    "x": 1377532800000,
    "y": 363,
    "sc": "408"
}, {"x": 1377619200000, "y": 373, "sc": "408"}, {"x": 1377705600000, "y": 364, "sc": "408"}, {
    "x": 1377792000000,
    "y": 349,
    "sc": "413"
}, {"x": 1378051200000, "y": 356, "sc": "409"}, {"x": 1378137600000, "y": 343, "sc": "409"}, {
    "x": 1378224000000,
    "y": 304,
    "sc": "413"
}, {"x": 1378310400000, "y": 303, "sc": "415"}, {"x": 1378396800000, "y": 238, "sc": "419"}, {
    "x": 1378656000000,
    "y": 70,
    "sc": "415"
}, {"x": 1378742400000, "y": 33, "sc": "415"}, {"x": 1378828800000, "y": 43, "sc": "415"}, {
    "x": 1378915200000,
    "y": 42,
    "sc": "415"
}, {"x": 1379001600000, "y": 35, "sc": "419"}, {"x": 1379260800000, "y": 33, "sc": "421"}, {
    "x": 1379347200000,
    "y": 52,
    "sc": "421"
}, {"x": 1379433600000, "y": 41, "sc": "425"}, {"x": 1379865600000, "y": 19, "sc": "421"}, {
    "x": 1379952000000,
    "y": 21,
    "sc": "421"
}, {"x": 1380038400000, "y": 23, "sc": "423"}, {"x": 1380124800000, "y": 22, "sc": "423"}, {
    "x": 1380211200000,
    "y": 20,
    "sc": "429"
}, {"x": 1380470400000, "y": 36, "sc": "428"}, {"x": 1381161600000, "y": 28, "sc": "425"}, {
    "x": 1381248000000,
    "y": 27,
    "sc": "425"
}, {"x": 1381334400000, "y": 32, "sc": "425"}, {"x": 1381420800000, "y": 27, "sc": "430"}, {
    "x": 1381680000000,
    "y": 36,
    "sc": "426"
}, {"x": 1381766400000, "y": 37, "sc": "426"}, {"x": 1381852800000, "y": 45, "sc": "426"}, {
    "x": 1381939200000,
    "y": 44,
    "sc": "428"
}, {"x": 1382025600000, "y": 43, "sc": "432"}, {"x": 1382284800000, "y": 44, "sc": "428"}, {
    "x": 1382371200000,
    "y": 48,
    "sc": "428"
}, {"x": 1382457600000, "y": 39, "sc": "430"}, {"x": 1382544000000, "y": 70, "sc": "430"}, {
    "x": 1382630400000,
    "y": 124,
    "sc": "436"
}, {"x": 1382889600000, "y": 203, "sc": "432"}, {"x": 1382976000000, "y": 202, "sc": "432"}, {
    "x": 1383062400000,
    "y": 61,
    "sc": "434"
}, {"x": 1383148800000, "y": 96, "sc": "434"}, {"x": 1383235200000, "y": 154, "sc": "438"}, {
    "x": 1383494400000,
    "y": 205,
    "sc": "434"
}, {"x": 1383580800000, "y": 217, "sc": "434"}, {"x": 1383667200000, "y": 302, "sc": "434"}, {
    "x": 1383753600000,
    "y": 332,
    "sc": "435"
}, {"x": 1383840000000, "y": 382, "sc": "439"}, {"x": 1384099200000, "y": 379, "sc": "435"}, {
    "x": 1384185600000,
    "y": 375,
    "sc": "435"
}, {"x": 1384272000000, "y": 411, "sc": "437"}, {"x": 1384358400000, "y": 405, "sc": "438"}, {
    "x": 1384444800000,
    "y": 415,
    "sc": "443"
}, {"x": 1384704000000, "y": 158, "sc": "439"}, {"x": 1384790400000, "y": 199, "sc": "439"}, {
    "x": 1384876800000,
    "y": 139,
    "sc": "440"
}, {"x": 1384963200000, "y": 145, "sc": "440"}, {"x": 1385049600000, "y": 114, "sc": "444"}, {
    "x": 1385308800000,
    "y": 147,
    "sc": "443"
}, {"x": 1385395200000, "y": 279, "sc": "445"}, {"x": 1385481600000, "y": 241, "sc": "445"}, {
    "x": 1385568000000,
    "y": 160,
    "sc": "445"
}, {"x": 1385654400000, "y": 208, "sc": "449"}, {"x": 1385913600000, "y": 270, "sc": "447"}, {
    "x": 1386000000000,
    "y": 197,
    "sc": "447"
}, {"x": 1386086400000, "y": 106, "sc": "447"}, {"x": 1386172800000, "y": 119, "sc": "447"}, {
    "x": 1386259200000,
    "y": 176,
    "sc": "451"
}, {"x": 1386518400000, "y": 345, "sc": "447"}, {"x": 1386604800000, "y": 386, "sc": "449"}, {
    "x": 1386691200000,
    "y": 407,
    "sc": "450"
}, {"x": 1386777600000, "y": 415, "sc": "452"}, {"x": 1386864000000, "y": 401, "sc": "458"}, {
    "x": 1387123200000,
    "y": 412,
    "sc": "454"
}, {"x": 1387209600000, "y": 412, "sc": "455"}, {"x": 1387296000000, "y": 426, "sc": "457"}, {
    "x": 1387382400000,
    "y": 437,
    "sc": "457"
}, {"x": 1387468800000, "y": 443, "sc": "461"}, {"x": 1387728000000, "y": 436, "sc": "457"}, {
    "x": 1387814400000,
    "y": 435,
    "sc": "457"
}, {"x": 1387900800000, "y": 430, "sc": "460"}, {"x": 1387987200000, "y": 433, "sc": "460"}, {
    "x": 1388073600000,
    "y": 425,
    "sc": "464"
}, {"x": 1388332800000, "y": 429, "sc": "460"}, {"x": 1388419200000, "y": 418, "sc": "464"}, {
    "x": 1388592000000,
    "y": 403,
    "sc": "460"
}, {"x": 1388678400000, "y": 418, "sc": "464"}, {"x": 1388937600000, "y": 435, "sc": "460"}, {
    "x": 1389024000000,
    "y": 437,
    "sc": "460"
}, {"x": 1389110400000, "y": 444, "sc": "460"}, {"x": 1389196800000, "y": 445, "sc": "460"}, {
    "x": 1389283200000,
    "y": 451,
    "sc": "464"
}, {"x": 1389542400000, "y": 448, "sc": "460"}, {"x": 1389628800000, "y": 447, "sc": "460"}, {
    "x": 1389715200000,
    "y": 447,
    "sc": "460"
}, {"x": 1389801600000, "y": 446, "sc": "460"}, {"x": 1389888000000, "y": 451, "sc": "464"}, {
    "x": 1390147200000,
    "y": 450,
    "sc": "460"
}, {"x": 1390233600000, "y": 448, "sc": "460"}, {"x": 1390320000000, "y": 440, "sc": "460"}, {
    "x": 1390406400000,
    "y": 443,
    "sc": "460"
}, {"x": 1390492800000, "y": 441, "sc": "465"}, {"x": 1390752000000, "y": 445, "sc": "462"}, {
    "x": 1390838400000,
    "y": 443,
    "sc": "462"
}, {"x": 1390924800000, "y": 427, "sc": "462"}, {"x": 1391011200000, "y": 445, "sc": "467"}, {
    "x": 1391702400000,
    "y": 454,
    "sc": "472"
}, {"x": 1391961600000, "y": 385, "sc": "466"}, {"x": 1392048000000, "y": 380, "sc": "466"}, {
    "x": 1392134400000,
    "y": 407,
    "sc": "468"
}, {"x": 1392220800000, "y": 326, "sc": "471"}, {"x": 1392307200000, "y": 374, "sc": "478"}, {
    "x": 1392566400000,
    "y": 343,
    "sc": "472"
}, {"x": 1392652800000, "y": 458, "sc": "472"}, {"x": 1392739200000, "y": 458, "sc": "474"}, {
    "x": 1392825600000,
    "y": 461,
    "sc": "474"
}, {"x": 1392912000000, "y": 461, "sc": "480"}, {"x": 1393171200000, "y": 459, "sc": "476"}, {
    "x": 1393257600000,
    "y": 468,
    "sc": "476"
}, {"x": 1393344000000, "y": 466, "sc": "476"}, {"x": 1393430400000, "y": 461, "sc": "476"}, {
    "x": 1393516800000,
    "y": 477,
    "sc": "483"
}, {"x": 1393776000000, "y": 472, "sc": "478"}, {"x": 1393862400000, "y": 474, "sc": "480"}, {
    "x": 1393948800000,
    "y": 473,
    "sc": "483"
}, {"x": 1394035200000, "y": 473, "sc": "483"}, {"x": 1394121600000, "y": 477, "sc": "489"}, {
    "x": 1394380800000,
    "y": 473,
    "sc": "485"
}, {"x": 1394467200000, "y": 476, "sc": "487"}, {"x": 1394553600000, "y": 473, "sc": "487"}, {
    "x": 1394640000000,
    "y": 475,
    "sc": "487"
}, {"x": 1394726400000, "y": 485, "sc": "495"}, {"x": 1394985600000, "y": 474, "sc": "487"}, {
    "x": 1395072000000,
    "y": 476,
    "sc": "489"
}, {"x": 1395158400000, "y": 478, "sc": "489"}, {"x": 1395244800000, "y": 474, "sc": "489"}, {
    "x": 1395331200000,
    "y": 483,
    "sc": "496"
}, {"x": 1395590400000, "y": 477, "sc": "489"}, {"x": 1395676800000, "y": 481, "sc": "490"}, {
    "x": 1395763200000,
    "y": 477,
    "sc": "490"
}, {"x": 1395849600000, "y": 481, "sc": "490"}, {"x": 1395936000000, "y": 486, "sc": "497"}, {
    "x": 1396195200000,
    "y": 486,
    "sc": "493"
}, {"x": 1396281600000, "y": 485, "sc": "492"}, {"x": 1396368000000, "y": 483, "sc": "492"}, {
    "x": 1396454400000,
    "y": 483,
    "sc": "492"
}, {"x": 1396540800000, "y": 490, "sc": "499"}, {"x": 1396886400000, "y": 380, "sc": "492"}, {
    "x": 1396972800000,
    "y": 297,
    "sc": "492"
}, {"x": 1397059200000, "y": 85, "sc": "492"}, {"x": 1397145600000, "y": 89, "sc": "499"}, {
    "x": 1397404800000,
    "y": 61,
    "sc": "494"
}, {"x": 1397491200000, "y": 52, "sc": "492"}, {"x": 1397577600000, "y": 121, "sc": "492"}, {
    "x": 1397664000000,
    "y": 60,
    "sc": "493"
}, {"x": 1397750400000, "y": 63, "sc": "499"}, {"x": 1398009600000, "y": 41, "sc": "493"}, {
    "x": 1398096000000,
    "y": 411,
    "sc": "495"
}, {"x": 1398182400000, "y": 377, "sc": "496"}, {"x": 1398268800000, "y": 460, "sc": "497"}, {
    "x": 1398355200000,
    "y": 466,
    "sc": "504"
}, {"x": 1398614400000, "y": 462, "sc": "505"}, {"x": 1398700800000, "y": 485, "sc": "505"}, {
    "x": 1398787200000,
    "y": 486,
    "sc": "512"
}, {"x": 1399219200000, "y": 485, "sc": "506"}, {"x": 1399305600000, "y": 485, "sc": "506"}, {
    "x": 1399392000000,
    "y": 473,
    "sc": "506"
}, {"x": 1399478400000, "y": 475, "sc": "506"}, {"x": 1399564800000, "y": 484, "sc": "512"}, {
    "x": 1399824000000,
    "y": 498,
    "sc": "506"
}, {"x": 1399910400000, "y": 498, "sc": "506"}, {"x": 1399996800000, "y": 498, "sc": "506"}, {
    "x": 1400083200000,
    "y": 495,
    "sc": "506"
}, {"x": 1400169600000, "y": 502, "sc": "512"}, {"x": 1400428800000, "y": 496, "sc": "506"}, {
    "x": 1400515200000,
    "y": 496,
    "sc": "506"
}, {"x": 1400601600000, "y": 502, "sc": "506"}, {"x": 1400688000000, "y": 500, "sc": "506"}, {
    "x": 1400774400000,
    "y": 506,
    "sc": "512"
}, {"x": 1401033600000, "y": 494, "sc": "507"}, {"x": 1401120000000, "y": 500, "sc": "507"}, {
    "x": 1401206400000,
    "y": 450,
    "sc": "507"
}, {"x": 1401292800000, "y": 457, "sc": "507"}, {"x": 1401379200000, "y": 461, "sc": "512"}, {
    "x": 1401724800000,
    "y": 470,
    "sc": "507"
}, {"x": 1401811200000, "y": 482, "sc": "507"}, {"x": 1401897600000, "y": 478, "sc": "507"}, {
    "x": 1401984000000,
    "y": 484,
    "sc": "512"
}, {"x": 1402243200000, "y": 484, "sc": "507"}, {"x": 1402329600000, "y": 450, "sc": "507"}, {
    "x": 1402416000000,
    "y": 402,
    "sc": "507"
}, {"x": 1402502400000, "y": 428, "sc": "507"}, {"x": 1402588800000, "y": 366, "sc": "515"}, {
    "x": 1402848000000,
    "y": 261,
    "sc": "507"
}, {"x": 1402934400000, "y": 400, "sc": "507"}, {"x": 1403020800000, "y": 448, "sc": "507"}, {
    "x": 1403107200000,
    "y": 437,
    "sc": "507"
}, {"x": 1403193600000, "y": 392, "sc": "516"}, {"x": 1403452800000, "y": 415, "sc": "508"}, {
    "x": 1403539200000,
    "y": 415,
    "sc": "508"
}, {"x": 1403625600000, "y": 413, "sc": "509"}, {"x": 1403712000000, "y": 329, "sc": "509"}, {
    "x": 1403798400000,
    "y": 329,
    "sc": "518"
}, {"x": 1404057600000, "y": 275, "sc": "519"}, {"x": 1404144000000, "y": 352, "sc": "510"}, {
    "x": 1404230400000,
    "y": 361,
    "sc": "512"
}, {"x": 1404316800000, "y": 239, "sc": "512"}, {"x": 1404403200000, "y": 299, "sc": "521"}, {
    "x": 1404662400000,
    "y": 245,
    "sc": "512"
}, {"x": 1404748800000, "y": 325, "sc": "512"}, {"x": 1404835200000, "y": 432, "sc": "512"}, {
    "x": 1404921600000,
    "y": 446,
    "sc": "512"
}, {"x": 1405008000000, "y": 428, "sc": "521"}, {"x": 1405267200000, "y": 345, "sc": "512"}, {
    "x": 1405353600000,
    "y": 244,
    "sc": "512"
}, {"x": 1405440000000, "y": 246, "sc": "512"}, {"x": 1405526400000, "y": 279, "sc": "514"}, {
    "x": 1405612800000,
    "y": 209,
    "sc": "523"
}, {"x": 1405872000000, "y": 177, "sc": "513"}, {"x": 1405958400000, "y": 98, "sc": "513"}, {
    "x": 1406044800000,
    "y": 67,
    "sc": "515"
}, {"x": 1406131200000, "y": 40, "sc": "515"}, {"x": 1406217600000, "y": 35, "sc": "527"}, {
    "x": 1406476800000,
    "y": 23,
    "sc": "517"
}, {"x": 1406563200000, "y": 20, "sc": "518"}, {"x": 1406649600000, "y": 23, "sc": "518"}, {
    "x": 1406736000000,
    "y": 27,
    "sc": "519"
}, {"x": 1406822400000, "y": 28, "sc": "527"}, {"x": 1407081600000, "y": 36, "sc": "519"}, {
    "x": 1407168000000,
    "y": 29,
    "sc": "519"
}, {"x": 1407254400000, "y": 24, "sc": "519"}, {"x": 1407340800000, "y": 23, "sc": "519"}, {
    "x": 1407427200000,
    "y": 20,
    "sc": "528"
}, {"x": 1407686400000, "y": 21, "sc": "520"}, {"x": 1407772800000, "y": 21, "sc": "520"}, {
    "x": 1407859200000,
    "y": 20,
    "sc": "520"
}, {"x": 1407945600000, "y": 14, "sc": "520"}, {"x": 1408032000000, "y": 14, "sc": "529"}, {
    "x": 1408291200000,
    "y": 13,
    "sc": "522"
}, {"x": 1408377600000, "y": 14, "sc": "522"}, {"x": 1408464000000, "y": 14, "sc": "522"}, {
    "x": 1408550400000,
    "y": 12,
    "sc": "522"
}, {"x": 1408636800000, "y": 10, "sc": "532"}, {"x": 1408896000000, "y": 9, "sc": "524"}, {
    "x": 1408982400000,
    "y": 11,
    "sc": "524"
}, {"x": 1409068800000, "y": 11, "sc": "524"}, {"x": 1409155200000, "y": 12, "sc": "524"}, {
    "x": 1409241600000,
    "y": 10,
    "sc": "532"
}, {"x": 1409500800000, "y": 12, "sc": "526"}, {"x": 1409587200000, "y": 11, "sc": "526"}, {
    "x": 1409673600000,
    "y": 15,
    "sc": "526"
}, {"x": 1409760000000, "y": 15, "sc": "526"}, {"x": 1409846400000, "y": 13, "sc": "534"}, {
    "x": 1410192000000,
    "y": 13,
    "sc": "529"
}, {"x": 1410278400000, "y": 13, "sc": "526"}, {"x": 1410364800000, "y": 11, "sc": "528"}, {
    "x": 1410451200000,
    "y": 11,
    "sc": "537"
}, {"x": 1410710400000, "y": 9, "sc": "529"}, {"x": 1410796800000, "y": 6, "sc": "530"}, {
    "x": 1410883200000,
    "y": 6,
    "sc": "530"
}, {"x": 1410969600000, "y": 6, "sc": "531"}, {"x": 1411056000000, "y": 7, "sc": "538"}, {
    "x": 1411315200000,
    "y": 4,
    "sc": "530"
}, {"x": 1411401600000, "y": 4, "sc": "530"}, {"x": 1411488000000, "y": 3, "sc": "531"}, {
    "x": 1411574400000,
    "y": 6,
    "sc": "531"
}, {"x": 1411660800000, "y": 5, "sc": "540"}, {"x": 1411920000000, "y": 8, "sc": "532"}, {
    "x": 1412006400000,
    "y": 8,
    "sc": "540"
}, {"x": 1412697600000, "y": 13, "sc": "532"}, {"x": 1412784000000, "y": 13, "sc": "532"}, {
    "x": 1412870400000,
    "y": 13,
    "sc": "540"
}, {"x": 1413129600000, "y": 14, "sc": "532"}, {"x": 1413216000000, "y": 15, "sc": "532"}, {
    "x": 1413302400000,
    "y": 16,
    "sc": "532"
}, {"x": 1413388800000, "y": 16, "sc": "532"}, {"x": 1413475200000, "y": 17, "sc": "540"}, {
    "x": 1413734400000,
    "y": 18,
    "sc": "532"
}, {"x": 1413820800000, "y": 19, "sc": "532"}, {"x": 1413907200000, "y": 19, "sc": "532"}, {
    "x": 1413993600000,
    "y": 29,
    "sc": "532"
}, {"x": 1414080000000, "y": 32, "sc": "542"}, {"x": 1414339200000, "y": 29, "sc": "536"}, {
    "x": 1414425600000,
    "y": 19,
    "sc": "536"
}, {"x": 1414512000000, "y": 20, "sc": "536"}, {"x": 1414598400000, "y": 18, "sc": "536"}, {
    "x": 1414684800000,
    "y": 18,
    "sc": "545"
}, {"x": 1414944000000, "y": 15, "sc": "537"}, {"x": 1415030400000, "y": 13, "sc": "538"}, {
    "x": 1415116800000,
    "y": 13,
    "sc": "538"
}, {"x": 1415203200000, "y": 9, "sc": "541"}, {"x": 1415289600000, "y": 19, "sc": "548"}, {
    "x": 1415548800000,
    "y": 22,
    "sc": "541"
}, {"x": 1415635200000, "y": 25, "sc": "541"}, {"x": 1415721600000, "y": 23, "sc": "543"}, {
    "x": 1415808000000,
    "y": 28,
    "sc": "543"
}, {"x": 1415894400000, "y": 29, "sc": "551"}, {"x": 1416153600000, "y": 25, "sc": "543"}, {
    "x": 1416240000000,
    "y": 18,
    "sc": "543"
}, {"x": 1416326400000, "y": 20, "sc": "544"}, {"x": 1416412800000, "y": 19, "sc": "544"}, {
    "x": 1416499200000,
    "y": 21,
    "sc": "551"
}, {"x": 1416758400000, "y": 21, "sc": "544"}, {"x": 1416844800000, "y": 22, "sc": "544"}, {
    "x": 1416931200000,
    "y": 24,
    "sc": "544"
}, {"x": 1417017600000, "y": 22, "sc": "546"}, {"x": 1417104000000, "y": 26, "sc": "553"}, {
    "x": 1417363200000,
    "y": 25,
    "sc": "548"
}, {"x": 1417449600000, "y": 29, "sc": "548"}, {"x": 1417536000000, "y": 25, "sc": "548"}, {
    "x": 1417622400000,
    "y": 24,
    "sc": "548"
}, {"x": 1417708800000, "y": 29, "sc": "557"}, {"x": 1417968000000, "y": 28, "sc": "548"}, {
    "x": 1418054400000,
    "y": 29,
    "sc": "548"
}, {"x": 1418140800000, "y": 28, "sc": "548"}, {"x": 1418227200000, "y": 22, "sc": "549"}, {
    "x": 1418313600000,
    "y": 22,
    "sc": "557"
}, {"x": 1418572800000, "y": 22, "sc": "549"}, {"x": 1418659200000, "y": 26, "sc": "549"}, {
    "x": 1418745600000,
    "y": 29,
    "sc": "549"
}, {"x": 1418832000000, "y": 28, "sc": "549"}, {"x": 1418918400000, "y": 26, "sc": "558"}, {
    "x": 1419177600000,
    "y": 28,
    "sc": "549"
}, {"x": 1419264000000, "y": 26, "sc": "549"}, {"x": 1419350400000, "y": 24, "sc": "551"}, {
    "x": 1419436800000,
    "y": 28,
    "sc": "551"
}, {"x": 1419523200000, "y": 34, "sc": "562"}, {"x": 1419782400000, "y": 35, "sc": "552"}, {
    "x": 1419868800000,
    "y": 35,
    "sc": "553"
}, {"x": 1419955200000, "y": 35, "sc": "563"}, {"x": 1420387200000, "y": 37, "sc": "552"}, {
    "x": 1420473600000,
    "y": 38,
    "sc": "552"
}, {"x": 1420560000000, "y": 39, "sc": "552"}, {"x": 1420646400000, "y": 39, "sc": "553"}, {
    "x": 1420732800000,
    "y": 42,
    "sc": "563"
}, {"x": 1420992000000, "y": 44, "sc": "553"}, {"x": 1421078400000, "y": 43, "sc": "553"}, {
    "x": 1421164800000,
    "y": 39,
    "sc": "552"
}, {"x": 1421251200000, "y": 41, "sc": "552"}, {"x": 1421337600000, "y": 41, "sc": "566"}, {
    "x": 1421596800000,
    "y": 42,
    "sc": "554"
}, {"x": 1421683200000, "y": 43, "sc": "553"}, {"x": 1421769600000, "y": 41, "sc": "552"}, {
    "x": 1421856000000,
    "y": 43,
    "sc": "552"
}, {"x": 1421942400000, "y": 39, "sc": "566"}, {"x": 1422201600000, "y": 37, "sc": "552"}, {
    "x": 1422288000000,
    "y": 37,
    "sc": "552"
}, {"x": 1422374400000, "y": 44, "sc": "554"}, {"x": 1422460800000, "y": 47, "sc": "554"}, {
    "x": 1422547200000,
    "y": 49,
    "sc": "569"
}, {"x": 1422806400000, "y": 69, "sc": "554"}, {"x": 1422892800000, "y": 66, "sc": "554"}, {
    "x": 1422979200000,
    "y": 67,
    "sc": "556"
}, {"x": 1423065600000, "y": 71, "sc": "556"}, {"x": 1423152000000, "y": 87, "sc": "571"}, {
    "x": 1423411200000,
    "y": 93,
    "sc": "556"
}, {"x": 1423497600000, "y": 100, "sc": "556"}, {"x": 1423584000000, "y": 79, "sc": "556"}, {
    "x": 1423670400000,
    "y": 85,
    "sc": "556"
}, {"x": 1423756800000, "y": 71, "sc": "574"}, {"x": 1424016000000, "y": 65, "sc": "560"}, {
    "x": 1424102400000,
    "y": 56,
    "sc": "575"
}, {"x": 1424793600000, "y": 91, "sc": "564"}, {"x": 1424880000000, "y": 92, "sc": "565"}, {
    "x": 1424966400000,
    "y": 102,
    "sc": "579"
}, {"x": 1425225600000, "y": 87, "sc": "567"}, {"x": 1425312000000, "y": 108, "sc": "567"}, {
    "x": 1425398400000,
    "y": 246,
    "sc": "567"
}, {"x": 1425484800000, "y": 218, "sc": "567"}, {"x": 1425571200000, "y": 239, "sc": "583"}, {
    "x": 1425830400000,
    "y": 184,
    "sc": "570"
}, {"x": 1425916800000, "y": 405, "sc": "567"}, {"x": 1426003200000, "y": 298, "sc": "569"}, {
    "x": 1426089600000,
    "y": 278,
    "sc": "569"
}, {"x": 1426176000000, "y": 273, "sc": "585"}, {"x": 1426435200000, "y": 284, "sc": "570"}, {
    "x": 1426521600000,
    "y": 243,
    "sc": "572"
}, {"x": 1426608000000, "y": 364, "sc": "573"}, {"x": 1426694400000, "y": 564, "sc": "573"}, {
    "x": 1426780800000,
    "y": 573,
    "sc": "594"
}, {"x": 1427040000000, "y": 518, "sc": "572"}, {"x": 1427126400000, "y": 510, "sc": "574"}, {
    "x": 1427212800000,
    "y": 570,
    "sc": "574"
}, {"x": 1427299200000, "y": 569, "sc": "574"}, {"x": 1427385600000, "y": 591, "sc": "596"}, {
    "x": 1427644800000,
    "y": 555,
    "sc": "574"
}, {"x": 1427731200000, "y": 564, "sc": "574"}, {"x": 1427817600000, "y": 530, "sc": "574"}, {
    "x": 1427904000000,
    "y": 389,
    "sc": "574"
}, {"x": 1427990400000, "y": 212, "sc": "596"}, {"x": 1428336000000, "y": 315, "sc": "574"}, {
    "x": 1428422400000,
    "y": 276,
    "sc": "574"
}, {"x": 1428508800000, "y": 498, "sc": "576"}, {"x": 1428595200000, "y": 237, "sc": "597"}, {
    "x": 1428854400000,
    "y": 60,
    "sc": "578"
}, {"x": 1428940800000, "y": 72, "sc": "579"}, {"x": 1429027200000, "y": 228, "sc": "579"}, {
    "x": 1429113600000,
    "y": 123,
    "sc": "577"
}, {"x": 1429200000000, "y": 43, "sc": "598"}, {"x": 1429459200000, "y": 24, "sc": "577"}, {
    "x": 1429545600000,
    "y": 24,
    "sc": "577"
}, {"x": 1429632000000, "y": 5, "sc": "577"}, {"x": 1429718400000, "y": 5, "sc": "577"}, {
    "x": 1429804800000,
    "y": 5,
    "sc": "601"
}, {"x": 1430064000000, "y": 4, "sc": "576"}, {"x": 1430150400000, "y": 4, "sc": "578"}, {
    "x": 1430236800000,
    "y": 4,
    "sc": "578"
}, {"x": 1430323200000, "y": 4, "sc": "604"}, {"x": 1430668800000, "y": 2, "sc": "579"}, {
    "x": 1430755200000,
    "y": 2,
    "sc": "579"
}, {"x": 1430841600000, "y": 2, "sc": "579"}, {"x": 1430928000000, "y": 2, "sc": "579"}, {
    "x": 1431014400000,
    "y": 2,
    "sc": "605"
}, {"x": 1431273600000, "y": 2, "sc": "582"}, {"x": 1431360000000, "y": 8, "sc": "582"}, {
    "x": 1431446400000,
    "y": 10,
    "sc": "582"
}, {"x": 1431532800000, "y": 10, "sc": "582"}, {"x": 1431619200000, "y": 8, "sc": "608"}, {
    "x": 1431878400000,
    "y": 10,
    "sc": "588"
}, {"x": 1431964800000, "y": 10, "sc": "587"}, {"x": 1432051200000, "y": 13, "sc": "587"}, {
    "x": 1432137600000,
    "y": 13,
    "sc": "587"
}, {"x": 1432224000000, "y": 13, "sc": "609"}, {"x": 1432483200000, "y": 13, "sc": "587"}, {
    "x": 1432569600000,
    "y": 14,
    "sc": "588"
}, {"x": 1432656000000, "y": 14, "sc": "588"}, {"x": 1432742400000, "y": 14, "sc": "588"}, {
    "x": 1432828800000,
    "y": 14,
    "sc": "609"
}, {"x": 1433088000000, "y": 14, "sc": "587"}, {"x": 1433174400000, "y": 14, "sc": "587"}, {
    "x": 1433260800000,
    "y": 14,
    "sc": "587"
}, {"x": 1433347200000, "y": 14, "sc": "587"}, {"x": 1433433600000, "y": 13, "sc": "610"}, {
    "x": 1433692800000,
    "y": 14,
    "sc": "588"
}, {"x": 1433779200000, "y": 14, "sc": "588"}, {"x": 1433865600000, "y": 13, "sc": "588"}, {
    "x": 1433952000000,
    "y": 13,
    "sc": "588"
}, {"x": 1434038400000, "y": 13, "sc": "610"}, {"x": 1434297600000, "y": 11, "sc": "591"}, {
    "x": 1434384000000,
    "y": 9,
    "sc": "592"
}, {"x": 1434470400000, "y": 7, "sc": "589"}, {"x": 1434556800000, "y": 11, "sc": "588"}, {
    "x": 1434643200000,
    "y": 16,
    "sc": "610"
}, {"x": 1434988800000, "y": 17, "sc": "588"}, {"x": 1435075200000, "y": 9, "sc": "588"}, {
    "x": 1435161600000,
    "y": 19,
    "sc": "588"
}, {"x": 1435248000000, "y": 328, "sc": "610"}, {"x": 1435507200000, "y": 565, "sc": "588"}, {
    "x": 1435593600000,
    "y": 378,
    "sc": "611"
}, {"x": 1435680000000, "y": 573, "sc": "589"}, {"x": 1435766400000, "y": 579, "sc": "589"}, {
    "x": 1435852800000,
    "y": 601,
    "sc": "611"
}, {"x": 1436112000000, "y": 577, "sc": "589"}, {"x": 1436198400000, "y": 579, "sc": "589"}, {
    "x": 1436284800000,
    "y": 576,
    "sc": "589"
}, {"x": 1436371200000, "y": 583, "sc": "590"}, {"x": 1436457600000, "y": 606, "sc": "612"}, {
    "x": 1436716800000,
    "y": 578,
    "sc": "590"
}, {"x": 1436803200000, "y": 577, "sc": "590"}, {"x": 1436889600000, "y": 577, "sc": "590"}, {
    "x": 1436976000000,
    "y": 579,
    "sc": "591"
}, {"x": 1437062400000, "y": 600, "sc": "612"}, {"x": 1437321600000, "y": 578, "sc": "591"}, {
    "x": 1437408000000,
    "y": 578,
    "sc": "591"
}, {"x": 1437494400000, "y": 579, "sc": "591"}, {"x": 1437580800000, "y": 582, "sc": "591"}, {
    "x": 1437667200000,
    "y": 603,
    "sc": "612"
}, {"x": 1437926400000, "y": 579, "sc": "591"}, {"x": 1438012800000, "y": 579, "sc": "591"}, {
    "x": 1438099200000,
    "y": 580,
    "sc": "592"
}, {"x": 1438185600000, "y": 580, "sc": "592"}, {"x": 1438272000000, "y": 600, "sc": "612"}, {
    "x": 1438531200000,
    "y": 579,
    "sc": "591"
}, {"x": 1438617600000, "y": 578, "sc": "591"}, {"x": 1438704000000, "y": 579, "sc": "591"}, {
    "x": 1438790400000,
    "y": 581,
    "sc": "592"
}, {"x": 1438876800000, "y": 600, "sc": "613"}, {"x": 1439136000000, "y": 583, "sc": "594"}, {
    "x": 1439222400000,
    "y": 581,
    "sc": "592"
}, {"x": 1439308800000, "y": 581, "sc": "592"}, {"x": 1439395200000, "y": 581, "sc": "592"}, {
    "x": 1439481600000,
    "y": 602,
    "sc": "615"
}, {"x": 1439740800000, "y": 582, "sc": "594"}, {"x": 1439827200000, "y": 584, "sc": "594"}, {
    "x": 1439913600000,
    "y": 582,
    "sc": "594"
}, {"x": 1440000000000, "y": 583, "sc": "594"}, {"x": 1440086400000, "y": 601, "sc": "615"}, {
    "x": 1440345600000,
    "y": 583,
    "sc": "596"
}, {"x": 1440432000000, "y": 581, "sc": "594"}, {"x": 1440518400000, "y": 581, "sc": "594"}, {
    "x": 1440604800000,
    "y": 581,
    "sc": "594"
}, {"x": 1440691200000, "y": 602, "sc": "615"}, {"x": 1440950400000, "y": 584, "sc": "597"}, {
    "x": 1441036800000,
    "y": 585,
    "sc": "595"
}, {"x": 1441123200000, "y": 603, "sc": "616"}, {"x": 1441555200000, "y": 587, "sc": "597"}, {
    "x": 1441641600000,
    "y": 584,
    "sc": "597"
}, {"x": 1441728000000, "y": 583, "sc": "598"}, {"x": 1441814400000, "y": 584, "sc": "596"}, {
    "x": 1441900800000,
    "y": 607,
    "sc": "617"
}, {"x": 1442160000000, "y": 588, "sc": "598"}, {"x": 1442246400000, "y": 586, "sc": "596"}, {
    "x": 1442332800000,
    "y": 586,
    "sc": "596"
}, {"x": 1442419200000, "y": 586, "sc": "596"}, {"x": 1442505600000, "y": 607, "sc": "617"}, {
    "x": 1442764800000,
    "y": 590,
    "sc": "600"
}, {"x": 1442851200000, "y": 588, "sc": "598"}, {"x": 1442937600000, "y": 589, "sc": "598"}, {
    "x": 1443024000000,
    "y": 590,
    "sc": "600"
}, {"x": 1443110400000, "y": 608, "sc": "618"}, {"x": 1443369600000, "y": 592, "sc": "602"}, {
    "x": 1443456000000,
    "y": 587,
    "sc": "600"
}, {"x": 1443542400000, "y": 606, "sc": "619"}, {"x": 1444233600000, "y": 118, "sc": "603"}, {
    "x": 1444320000000,
    "y": 571,
    "sc": "621"
}, {"x": 1444579200000, "y": 562, "sc": "602"}, {"x": 1444665600000, "y": 585, "sc": "600"}, {
    "x": 1444752000000,
    "y": 592,
    "sc": "603"
}, {"x": 1444838400000, "y": 564, "sc": "604"}, {"x": 1444924800000, "y": 553, "sc": "623"}, {
    "x": 1445184000000,
    "y": 585,
    "sc": "602"
}, {"x": 1445270400000, "y": 587, "sc": "600"}, {"x": 1445356800000, "y": 592, "sc": "600"}, {
    "x": 1445443200000,
    "y": 592,
    "sc": "600"
}, {"x": 1445529600000, "y": 617, "sc": "625"}, {"x": 1445788800000, "y": 592, "sc": "603"}, {
    "x": 1445875200000,
    "y": 583,
    "sc": "601"
}, {"x": 1445961600000, "y": 589, "sc": "601"}, {"x": 1446048000000, "y": 588, "sc": "601"}, {
    "x": 1446134400000,
    "y": 596,
    "sc": "624"
}, {"x": 1446393600000, "y": 584, "sc": "603"}, {"x": 1446480000000, "y": 572, "sc": "601"}, {
    "x": 1446566400000,
    "y": 585,
    "sc": "601"
}, {"x": 1446652800000, "y": 574, "sc": "601"}, {"x": 1446739200000, "y": 261, "sc": "624"}, {
    "x": 1446998400000,
    "y": 571,
    "sc": "603"
}, {"x": 1447084800000, "y": 582, "sc": "601"}, {"x": 1447171200000, "y": 564, "sc": "600"}, {
    "x": 1447257600000,
    "y": 503,
    "sc": "601"
}, {"x": 1447344000000, "y": 603, "sc": "624"}, {"x": 1447603200000, "y": 579, "sc": "602"}, {
    "x": 1447689600000,
    "y": 582,
    "sc": "600"
}, {"x": 1447776000000, "y": 116, "sc": "600"}, {"x": 1447862400000, "y": 42, "sc": "600"}, {
    "x": 1447948800000,
    "y": 24,
    "sc": "624"
}, {"x": 1448208000000, "y": 14, "sc": "602"}, {"x": 1448294400000, "y": 11, "sc": "600"}, {
    "x": 1448380800000,
    "y": 11,
    "sc": "600"
}, {"x": 1448467200000, "y": 11, "sc": "602"}, {"x": 1448553600000, "y": 12, "sc": "625"}, {
    "x": 1448812800000,
    "y": 13,
    "sc": "606"
}, {"x": 1448899200000, "y": 12, "sc": "603"}, {"x": 1448985600000, "y": 11, "sc": "603"}, {
    "x": 1449072000000,
    "y": 11,
    "sc": "603"
}, {"x": 1449158400000, "y": 10, "sc": "627"}, {"x": 1449417600000, "y": 6, "sc": "605"}, {
    "x": 1449504000000,
    "y": 9,
    "sc": "605"
}, {"x": 1449590400000, "y": 15, "sc": "605"}, {"x": 1449676800000, "y": 11, "sc": "604"}, {
    "x": 1449763200000,
    "y": 20,
    "sc": "628"
}, {"x": 1450022400000, "y": 10, "sc": "604"}, {"x": 1450108800000, "y": 10, "sc": "605"}, {
    "x": 1450195200000,
    "y": 10,
    "sc": "605"
}, {"x": 1450281600000, "y": 8, "sc": "603"}, {"x": 1450368000000, "y": 7, "sc": "626"}, {
    "x": 1450627200000,
    "y": 15,
    "sc": "607"
}, {"x": 1450713600000, "y": 17, "sc": "605"}, {"x": 1450800000000, "y": 10, "sc": "605"}, {
    "x": 1450886400000,
    "y": 13,
    "sc": "605"
}, {"x": 1450972800000, "y": 9, "sc": "630"}, {"x": 1451232000000, "y": 10, "sc": "607"}, {
    "x": 1451318400000,
    "y": 13,
    "sc": "606"
}, {"x": 1451404800000, "y": 14, "sc": "608"}, {"x": 1451491200000, "y": 16, "sc": "634"}, {
    "x": 1451836800000,
    "y": 17,
    "sc": "610"
}, {"x": 1451923200000, "y": 31, "sc": "608"}, {"x": 1452009600000, "y": 29, "sc": "608"}, {
    "x": 1452096000000,
    "y": 83,
    "sc": "608"
}, {"x": 1452182400000, "y": 276, "sc": "633"}, {"x": 1452441600000, "y": 561, "sc": "611"}, {
    "x": 1452528000000,
    "y": 562,
    "sc": "609"
}, {"x": 1452614400000, "y": 576, "sc": "609"}, {"x": 1452700800000, "y": 540, "sc": "610"}, {
    "x": 1452787200000,
    "y": 597,
    "sc": "633"
}, {"x": 1453046400000, "y": 594, "sc": "618"}, {"x": 1453132800000, "y": 583, "sc": "610"}, {
    "x": 1453219200000,
    "y": 586,
    "sc": "611"
}, {"x": 1453305600000, "y": 588, "sc": "612"}, {"x": 1453392000000, "y": 613, "sc": "637"}, {
    "x": 1453651200000,
    "y": 591,
    "sc": "615"
}, {"x": 1453737600000, "y": 592, "sc": "613"}, {"x": 1453824000000, "y": 593, "sc": "613"}, {
    "x": 1453910400000,
    "y": 592,
    "sc": "614"
}, {"x": 1453996800000, "y": 614, "sc": "638"}, {"x": 1454256000000, "y": 596, "sc": "617"}, {
    "x": 1454342400000,
    "y": 592,
    "sc": "616"
}, {"x": 1454428800000, "y": 592, "sc": "616"}, {"x": 1454515200000, "y": 596, "sc": "617"}, {
    "x": 1454601600000,
    "y": 619,
    "sc": "640"
}, {"x": 1455465600000, "y": 611, "sc": "622"}, {"x": 1455552000000, "y": 615, "sc": "625"}, {
    "x": 1455638400000,
    "y": 615,
    "sc": "625"
}, {"x": 1455724800000, "y": 615, "sc": "625"}, {"x": 1455811200000, "y": 643, "sc": "654"}, {
    "x": 1456070400000,
    "y": 621,
    "sc": "632"
}, {"x": 1456156800000, "y": 619, "sc": "630"}, {"x": 1456243200000, "y": 616, "sc": "630"}, {
    "x": 1456329600000,
    "y": 617,
    "sc": "630"
}, {"x": 1456416000000, "y": 642, "sc": "654"}, {"x": 1456675200000, "y": 620, "sc": "635"}, {
    "x": 1456761600000,
    "y": 619,
    "sc": "633"
}, {"x": 1456848000000, "y": 618, "sc": "637"}, {"x": 1456934400000, "y": 624, "sc": "639"}, {
    "x": 1457020800000,
    "y": 650,
    "sc": "663"
}, {"x": 1457280000000, "y": 629, "sc": "642"}, {"x": 1457366400000, "y": 632, "sc": "645"}, {
    "x": 1457452800000,
    "y": 632,
    "sc": "645"
}, {"x": 1457539200000, "y": 629, "sc": "642"}, {"x": 1457625600000, "y": 653, "sc": "666"}, {
    "x": 1457884800000,
    "y": 632,
    "sc": "646"
}, {"x": 1457971200000, "y": 630, "sc": "644"}, {"x": 1458057600000, "y": 630, "sc": "644"}, {
    "x": 1458144000000,
    "y": 632,
    "sc": "645"
}, {"x": 1458230400000, "y": 655, "sc": "670"}, {"x": 1458489600000, "y": 634, "sc": "650"}, {
    "x": 1458576000000,
    "y": 632,
    "sc": "648"
}, {"x": 1458662400000, "y": 633, "sc": "649"}, {"x": 1458748800000, "y": 633, "sc": "649"}, {
    "x": 1458835200000,
    "y": 658,
    "sc": "673"
}, {"x": 1459094400000, "y": 636, "sc": "652"}, {"x": 1459180800000, "y": 641, "sc": "655"}, {
    "x": 1459267200000,
    "y": 641,
    "sc": "655"
}, {"x": 1459353600000, "y": 641, "sc": "655"}, {"x": 1459440000000, "y": 664, "sc": "678"}, {
    "x": 1459785600000,
    "y": 638,
    "sc": "656"
}, {"x": 1459872000000, "y": 637, "sc": "654"}, {"x": 1459958400000, "y": 637, "sc": "655"}, {
    "x": 1460044800000,
    "y": 660,
    "sc": "679"
}, {"x": 1460304000000, "y": 626, "sc": "657"}, {"x": 1460390400000, "y": 629, "sc": "656"}, {
    "x": 1460476800000,
    "y": 621,
    "sc": "657"
}, {"x": 1460563200000, "y": 630, "sc": "657"}, {"x": 1460649600000, "y": 658, "sc": "682"}, {
    "x": 1460908800000,
    "y": 643,
    "sc": "664"
}, {"x": 1460995200000, "y": 624, "sc": "662"}, {"x": 1461081600000, "y": 539, "sc": "659"}, {
    "x": 1461168000000,
    "y": 448,
    "sc": "660"
}, {"x": 1461254400000, "y": 568, "sc": "685"}, {"x": 1461513600000, "y": 650, "sc": "663"}, {
    "x": 1461600000000,
    "y": 563,
    "sc": "663"
}, {"x": 1461686400000, "y": 626, "sc": "663"}, {"x": 1461772800000, "y": 639, "sc": "663"}, {
    "x": 1461859200000,
    "y": 678,
    "sc": "687"
}, {"x": 1462204800000, "y": 667, "sc": "674"}, {"x": 1462291200000, "y": 667, "sc": "674"}, {
    "x": 1462377600000,
    "y": 667,
    "sc": "674"
}, {"x": 1462464000000, "y": 689, "sc": "698"}, {"x": 1462723200000, "y": 668, "sc": "676"}, {
    "x": 1462809600000,
    "y": 667,
    "sc": "675"
}, {"x": 1462896000000, "y": 668, "sc": "675"}, {"x": 1462982400000, "y": 669, "sc": "675"}, {
    "x": 1463068800000,
    "y": 692,
    "sc": "698"
}, {"x": 1463328000000, "y": 672, "sc": "677"}, {"x": 1463414400000, "y": 669, "sc": "676"}, {
    "x": 1463500800000,
    "y": 669,
    "sc": "676"
}, {"x": 1463587200000, "y": 669, "sc": "676"}, {"x": 1463673600000, "y": 692, "sc": "699"}, {
    "x": 1463932800000,
    "y": 674,
    "sc": "681"
}, {"x": 1464019200000, "y": 672, "sc": "679"}, {"x": 1464105600000, "y": 672, "sc": "680"}, {
    "x": 1464192000000,
    "y": 675,
    "sc": "683"
}, {"x": 1464278400000, "y": 696, "sc": "705"}, {"x": 1464537600000, "y": 679, "sc": "686"}, {
    "x": 1464624000000,
    "y": 676,
    "sc": "683"
}, {"x": 1464710400000, "y": 672, "sc": "683"}, {"x": 1464796800000, "y": 676, "sc": "683"}, {
    "x": 1464883200000,
    "y": 698,
    "sc": "706"
}, {"x": 1465142400000, "y": 676, "sc": "685"}, {"x": 1465228800000, "y": 676, "sc": "683"}, {
    "x": 1465315200000,
    "y": 698,
    "sc": "706"
}, {"x": 1465747200000, "y": 681, "sc": "688"}, {"x": 1465833600000, "y": 679, "sc": "686"}, {
    "x": 1465920000000,
    "y": 682,
    "sc": "689"
}, {"x": 1466006400000, "y": 684, "sc": "691"}, {"x": 1466092800000, "y": 703, "sc": "711"}, {
    "x": 1466352000000,
    "y": 686,
    "sc": "694"
}, {"x": 1466438400000, "y": 685, "sc": "692"}, {"x": 1466524800000, "y": 689, "sc": "696"}, {
    "x": 1466611200000,
    "y": 691,
    "sc": "698"
}, {"x": 1466697600000, "y": 715, "sc": "723"}, {"x": 1466956800000, "y": 695, "sc": "702"}, {
    "x": 1467043200000,
    "y": 695,
    "sc": "700"
}, {"x": 1467129600000, "y": 698, "sc": "703"}, {"x": 1467216000000, "y": 723, "sc": "729"}, {
    "x": 1467302400000,
    "y": 724,
    "sc": "730"
}, {"x": 1467561600000, "y": 703, "sc": "708"}, {"x": 1467648000000, "y": 701, "sc": "706"}, {
    "x": 1467734400000,
    "y": 706,
    "sc": "711"
}, {"x": 1467820800000, "y": 707, "sc": "713"}, {"x": 1467907200000, "y": 730, "sc": "737"}, {
    "x": 1468166400000,
    "y": 709,
    "sc": "715"
}, {"x": 1468252800000, "y": 710, "sc": "715"}, {"x": 1468339200000, "y": 711, "sc": "717"}, {
    "x": 1468425600000,
    "y": 712,
    "sc": "717"
}, {"x": 1468512000000, "y": 737, "sc": "741"}, {"x": 1468771200000, "y": 717, "sc": "720"}, {
    "x": 1468857600000,
    "y": 715,
    "sc": "718"
}, {"x": 1468944000000, "y": 719, "sc": "722"}, {"x": 1469030400000, "y": 722, "sc": "725"}, {
    "x": 1469116800000,
    "y": 745,
    "sc": "749"
}, {"x": 1469376000000, "y": 726, "sc": "729"}, {"x": 1469462400000, "y": 724, "sc": "727"}, {
    "x": 1469548800000,
    "y": 724,
    "sc": "727"
}, {"x": 1469635200000, "y": 726, "sc": "729"}, {"x": 1469721600000, "y": 748, "sc": "752"}, {
    "x": 1469980800000,
    "y": 729,
    "sc": "732"
}, {"x": 1470067200000, "y": 727, "sc": "730"}, {"x": 1470153600000, "y": 726, "sc": "730"}, {
    "x": 1470240000000,
    "y": 725,
    "sc": "728"
}, {"x": 1470326400000, "y": 749, "sc": "754"}, {"x": 1470585600000, "y": 729, "sc": "732"}, {
    "x": 1470672000000,
    "y": 729,
    "sc": "732"
}, {"x": 1470758400000, "y": 729, "sc": "732"}, {"x": 1470844800000, "y": 732, "sc": "735"}, {
    "x": 1470931200000,
    "y": 751,
    "sc": "760"
}, {"x": 1471190400000, "y": 301, "sc": "740"}, {"x": 1471276800000, "y": 499, "sc": "739"}, {
    "x": 1471363200000,
    "y": 520,
    "sc": "741"
}, {"x": 1471449600000, "y": 163, "sc": "740"}, {"x": 1471536000000, "y": 123, "sc": "768"}, {
    "x": 1471795200000,
    "y": 162,
    "sc": "748"
}, {"x": 1471881600000, "y": 327, "sc": "746"}, {"x": 1471968000000, "y": 498, "sc": "746"}, {
    "x": 1472054400000,
    "y": 512,
    "sc": "750"
}, {"x": 1472140800000, "y": 597, "sc": "778"}, {"x": 1472400000000, "y": 630, "sc": "756"}, {
    "x": 1472486400000,
    "y": 611,
    "sc": "754"
}, {"x": 1472572800000, "y": 744, "sc": "755"}, {"x": 1472659200000, "y": 748, "sc": "755"}, {
    "x": 1472745600000,
    "y": 769,
    "sc": "779"
}, {"x": 1473004800000, "y": 748, "sc": "759"}, {"x": 1473091200000, "y": 736, "sc": "757"}, {
    "x": 1473177600000,
    "y": 484,
    "sc": "757"
}, {"x": 1473264000000, "y": 418, "sc": "762"}, {"x": 1473350400000, "y": 507, "sc": "785"}, {
    "x": 1473609600000,
    "y": 709,
    "sc": "761"
}, {"x": 1473696000000, "y": 361, "sc": "761"}, {"x": 1473782400000, "y": 392, "sc": "787"}, {
    "x": 1474214400000,
    "y": 632,
    "sc": "773"
}, {"x": 1474300800000, "y": 648, "sc": "772"}, {"x": 1474387200000, "y": 608, "sc": "772"}, {
    "x": 1474473600000,
    "y": 631,
    "sc": "772"
}, {"x": 1474560000000, "y": 725, "sc": "798"}, {"x": 1474819200000, "y": 764, "sc": "776"}, {
    "x": 1474905600000,
    "y": 761,
    "sc": "774"
}, {"x": 1474992000000, "y": 765, "sc": "778"}, {"x": 1475078400000, "y": 763, "sc": "779"}, {
    "x": 1475164800000,
    "y": 788,
    "sc": "805"
}, {"x": 1476028800000, "y": 779, "sc": "785"}, {"x": 1476115200000, "y": 770, "sc": "784"}, {
    "x": 1476201600000,
    "y": 778,
    "sc": "784"
}, {"x": 1476288000000, "y": 787, "sc": "787"}, {"x": 1476374400000, "y": 811, "sc": "811"}, {
    "x": 1476633600000,
    "y": 793,
    "sc": "793"
}, {"x": 1476720000000, "y": 792, "sc": "794"}, {"x": 1476806400000, "y": 799, "sc": "801"}, {
    "x": 1476892800000,
    "y": 797,
    "sc": "801"
}, {"x": 1476979200000, "y": 824, "sc": "828"}, {"x": 1477238400000, "y": 791, "sc": "804"}, {
    "x": 1477324800000,
    "y": 772,
    "sc": "802"
}, {"x": 1477411200000, "y": 779, "sc": "802"}, {"x": 1477497600000, "y": 759, "sc": "807"}, {
    "x": 1477584000000,
    "y": 485,
    "sc": "835"
}, {"x": 1477843200000, "y": 117, "sc": "811"}, {"x": 1477929600000, "y": 68, "sc": "809"}, {
    "x": 1478016000000,
    "y": 157,
    "sc": "809"
}, {"x": 1478102400000, "y": 152, "sc": "812"}, {"x": 1478188800000, "y": 199, "sc": "846"}, {
    "x": 1478448000000,
    "y": 163,
    "sc": "817"
}, {"x": 1478534400000, "y": 187, "sc": "817"}, {"x": 1478620800000, "y": 446, "sc": "819"}, {
    "x": 1478707200000,
    "y": 246,
    "sc": "819"
}, {"x": 1478793600000, "y": 179, "sc": "848"}, {"x": 1479052800000, "y": 219, "sc": "819"}, {
    "x": 1479139200000,
    "y": 815,
    "sc": "822"
}, {"x": 1479225600000, "y": 816, "sc": "824"}, {"x": 1479312000000, "y": 806, "sc": "826"}, {
    "x": 1479398400000,
    "y": 855,
    "sc": "856"
}, {"x": 1479657600000, "y": 823, "sc": "826"}, {"x": 1479744000000, "y": 789, "sc": "826"}, {
    "x": 1479830400000,
    "y": 657,
    "sc": "826"
}, {"x": 1479916800000, "y": 645, "sc": "833"}, {"x": 1480003200000, "y": 296, "sc": "867"}, {
    "x": 1480262400000,
    "y": 271,
    "sc": "839"
}, {"x": 1480348800000, "y": 390, "sc": "840"}, {"x": 1480435200000, "y": 658, "sc": "850"}, {
    "x": 1480521600000,
    "y": 616,
    "sc": "850"
}, {"x": 1480608000000, "y": 835, "sc": "886"}, {"x": 1480867200000, "y": 858, "sc": "858"}, {
    "x": 1480953600000,
    "y": 854,
    "sc": "856"
}, {"x": 1481040000000, "y": 859, "sc": "867"}, {"x": 1481126400000, "y": 853, "sc": "861"}, {
    "x": 1481212800000,
    "y": 894,
    "sc": "900"
}, {"x": 1481472000000, "y": 865, "sc": "872"}, {"x": 1481558400000, "y": 861, "sc": "871"}, {
    "x": 1481644800000,
    "y": 861,
    "sc": "871"
}, {"x": 1481731200000, "y": 859, "sc": "873"}, {"x": 1481817600000, "y": 887, "sc": "901"}, {
    "x": 1482076800000,
    "y": 867,
    "sc": "881"
}, {"x": 1482163200000, "y": 870, "sc": "884"}, {"x": 1482249600000, "y": 870, "sc": "884"}, {
    "x": 1482336000000,
    "y": 876,
    "sc": "888"
}, {"x": 1482422400000, "y": 899, "sc": "916"}, {"x": 1482681600000, "y": 874, "sc": "894"}, {
    "x": 1482768000000,
    "y": 875,
    "sc": "895"
}, {"x": 1482854400000, "y": 877, "sc": "895"}, {"x": 1482940800000, "y": 882, "sc": "899"}, {
    "x": 1483027200000,
    "y": 903,
    "sc": "921"
}, {"x": 1483372800000, "y": 882, "sc": "900"}, {"x": 1483459200000, "y": 882, "sc": "898"}, {
    "x": 1483545600000,
    "y": 881,
    "sc": "898"
}, {"x": 1483632000000, "y": 907, "sc": "924"}, {"x": 1483891200000, "y": 885, "sc": "900"}, {
    "x": 1483977600000,
    "y": 882,
    "sc": "898"
}, {"x": 1484064000000, "y": 882, "sc": "898"}, {"x": 1484150400000, "y": 881, "sc": "898"}, {
    "x": 1484236800000,
    "y": 909,
    "sc": "926"
}, {"x": 1484496000000, "y": 889, "sc": "902"}, {"x": 1484582400000, "y": 886, "sc": "902"}, {
    "x": 1484668800000,
    "y": 895,
    "sc": "906"
}, {"x": 1484755200000, "y": 894, "sc": "908"}, {"x": 1484841600000, "y": 924, "sc": "936"}, {
    "x": 1485100800000,
    "y": 906,
    "sc": "916"
}, {"x": 1485187200000, "y": 903, "sc": "913"}, {"x": 1485273600000, "y": 902, "sc": "913"}, {
    "x": 1485360000000,
    "y": 935,
    "sc": "944"
}, {"x": 1486051200000, "y": 954, "sc": "968"}, {"x": 1486310400000, "y": 936, "sc": "948"}, {
    "x": 1486396800000,
    "y": 940,
    "sc": "952"
}, {"x": 1486483200000, "y": 945, "sc": "956"}, {"x": 1486569600000, "y": 941, "sc": "956"}, {
    "x": 1486656000000,
    "y": 967,
    "sc": "982"
}, {"x": 1486915200000, "y": 956, "sc": "970"}, {"x": 1487001600000, "y": 955, "sc": "968"}, {
    "x": 1487088000000,
    "y": 961,
    "sc": "970"
}, {"x": 1487174400000, "y": 964, "sc": "972"}, {"x": 1487260800000, "y": 991, "sc": "1000"}, {
    "x": 1487520000000,
    "y": 980,
    "sc": "989"
}, {"x": 1487606400000, "y": 980, "sc": "987"}, {"x": 1487692800000, "y": 981, "sc": "988"}, {
    "x": 1487779200000,
    "y": 990,
    "sc": "997"
}, {"x": 1487865600000, "y": 1013, "sc": "1019"}, {"x": 1488124800000, "y": 997, "sc": "1004"}, {
    "x": 1488211200000,
    "y": 1011,
    "sc": "1018"
}, {"x": 1488297600000, "y": 1010, "sc": "1018"}, {"x": 1488384000000, "y": 1012, "sc": "1020"}, {
    "x": 1488470400000,
    "y": 1035,
    "sc": "1043"
}, {"x": 1488729600000, "y": 1015, "sc": "1030"}, {"x": 1488816000000, "y": 1030, "sc": "1042"}, {
    "x": 1488902400000,
    "y": 1032,
    "sc": "1044"
}, {"x": 1488988800000, "y": 1032, "sc": "1046"}, {"x": 1489075200000, "y": 1050, "sc": "1065"}, {
    "x": 1489334400000,
    "y": 1007,
    "sc": "1050"
}, {"x": 1489420800000, "y": 1017, "sc": "1049"}, {"x": 1489507200000, "y": 982, "sc": "1052"}, {
    "x": 1489593600000,
    "y": 1036,
    "sc": "1062"
}, {"x": 1489680000000, "y": 1062, "sc": "1084"}, {"x": 1489939200000, "y": 984, "sc": "1071"}, {
    "x": 1490025600000,
    "y": 1047,
    "sc": "1073"
}, {"x": 1490112000000, "y": 1056, "sc": "1083"}, {"x": 1490198400000, "y": 1057, "sc": "1082"}, {
    "x": 1490284800000,
    "y": 1081,
    "sc": "1102"
}, {"x": 1490544000000, "y": 1086, "sc": "1099"}, {"x": 1490630400000, "y": 1078, "sc": "1098"}, {
    "x": 1490716800000,
    "y": 1069,
    "sc": "1098"
}, {"x": 1490803200000, "y": 1079, "sc": "1098"}, {"x": 1490889600000, "y": 1094, "sc": "1117"}, {
    "x": 1491321600000,
    "y": 1086,
    "sc": "1107"
}, {"x": 1491408000000, "y": 1075, "sc": "1107"}, {"x": 1491494400000, "y": 1096, "sc": "1126"}, {
    "x": 1491753600000,
    "y": 1077,
    "sc": "1110"
}, {"x": 1491840000000, "y": 1060, "sc": "1111"}, {"x": 1491926400000, "y": 987, "sc": "1111"}, {
    "x": 1492012800000,
    "y": 965,
    "sc": "1120"
}, {"x": 1492099200000, "y": 1020, "sc": "1140"}, {"x": 1492358400000, "y": 942, "sc": "1122"}, {
    "x": 1492444800000,
    "y": 876,
    "sc": "1128"
}, {"x": 1492531200000, "y": 921, "sc": "1128"}, {"x": 1492617600000, "y": 932, "sc": "1135"}, {
    "x": 1492704000000,
    "y": 922,
    "sc": "1155"
}, {"x": 1492963200000, "y": 918, "sc": "1143"}, {"x": 1493049600000, "y": 930, "sc": "1142"}, {
    "x": 1493136000000,
    "y": 890,
    "sc": "1142"
}, {"x": 1493222400000, "y": 898, "sc": "1142"}, {"x": 1493308800000, "y": 875, "sc": "1162"}, {
    "x": 1493654400000,
    "y": 864,
    "sc": "1143"
}, {"x": 1493740800000, "y": 516, "sc": "1144"}, {"x": 1493827200000, "y": 562, "sc": "1146"}, {
    "x": 1493913600000,
    "y": 533,
    "sc": "1167"
}, {"x": 1494172800000, "y": 1120, "sc": "1145"}, {"x": 1494259200000, "y": 1126, "sc": "1144"}, {
    "x": 1494345600000,
    "y": 1130,
    "sc": "1147"
}, {"x": 1494432000000, "y": 1130, "sc": "1147"}, {"x": 1494518400000, "y": 1154, "sc": "1171"}, {
    "x": 1494777600000,
    "y": 1133,
    "sc": "1152"
}, {"x": 1494864000000, "y": 1142, "sc": "1157"}, {"x": 1494950400000, "y": 1145, "sc": "1162"}, {
    "x": 1495036800000,
    "y": 1144,
    "sc": "1162"
}, {"x": 1495123200000, "y": 1171, "sc": "1187"}, {"x": 1495382400000, "y": 1154, "sc": "1166"}, {
    "x": 1495468800000,
    "y": 1149,
    "sc": "1165"
}, {"x": 1495555200000, "y": 1136, "sc": "1164"}, {"x": 1495641600000, "y": 1147, "sc": "1164"}, {
    "x": 1495728000000,
    "y": 1170,
    "sc": "1189"
}, {"x": 1496160000000, "y": 1150, "sc": "1171"}, {"x": 1496246400000, "y": 1148, "sc": "1172"}, {
    "x": 1496332800000,
    "y": 1174,
    "sc": "1200"
}, {"x": 1496592000000, "y": 1157, "sc": "1186"}, {"x": 1496678400000, "y": 1161, "sc": "1185"}, {
    "x": 1496764800000,
    "y": 1169,
    "sc": "1189"
}, {"x": 1496851200000, "y": 1171, "sc": "1192"}, {"x": 1496937600000, "y": 1203, "sc": "1224"}, {
    "x": 1497196800000,
    "y": 1185,
    "sc": "1211"
}, {"x": 1497283200000, "y": 1186, "sc": "1211"}, {"x": 1497369600000, "y": 1183, "sc": "1211"}, {
    "x": 1497456000000,
    "y": 1184,
    "sc": "1213"
}, {"x": 1497542400000, "y": 1211, "sc": "1241"}, {"x": 1497801600000, "y": 1173, "sc": "1220"}, {
    "x": 1497888000000,
    "y": 1121,
    "sc": "1218"
}, {"x": 1497974400000, "y": 1116, "sc": "1220"}, {"x": 1498060800000, "y": 1089, "sc": "1219"}, {
    "x": 1498147200000,
    "y": 1088,
    "sc": "1248"
}, {"x": 1498406400000, "y": 989, "sc": "1228"}, {"x": 1498492800000, "y": 961, "sc": "1228"}, {
    "x": 1498579200000,
    "y": 1030,
    "sc": "1230"
}, {"x": 1498665600000, "y": 1155, "sc": "1231"}, {"x": 1498752000000, "y": 1184, "sc": "1261"}, {
    "x": 1499011200000,
    "y": 1144,
    "sc": "1236"
}, {"x": 1499097600000, "y": 1123, "sc": "1236"}, {"x": 1499184000000, "y": 1019, "sc": "1234"}, {
    "x": 1499270400000,
    "y": 985,
    "sc": "1234"
}, {"x": 1499356800000, "y": 692, "sc": "1261"}, {"x": 1499616000000, "y": 968, "sc": "1240"}, {
    "x": 1499702400000,
    "y": 1060,
    "sc": "1236"
}, {"x": 1499788800000, "y": 1171, "sc": "1237"}, {"x": 1499875200000, "y": 1115, "sc": "1239"}, {
    "x": 1499961600000,
    "y": 972,
    "sc": "1269"
}, {"x": 1500220800000, "y": 1054, "sc": "1250"}, {"x": 1500307200000, "y": 1044, "sc": "1248"}, {
    "x": 1500393600000,
    "y": 400,
    "sc": "1250"
}, {"x": 1500480000000, "y": 172, "sc": "1250"}, {"x": 1500566400000, "y": 97, "sc": "1272"}, {
    "x": 1500825600000,
    "y": 82,
    "sc": "1253"
}, {"x": 1500912000000, "y": 171, "sc": "1254"}, {"x": 1500998400000, "y": 181, "sc": "1254"}, {
    "x": 1501084800000,
    "y": 155,
    "sc": "1254"
}, {"x": 1501171200000, "y": 121, "sc": "1274"}, {"x": 1501430400000, "y": 80, "sc": "1251"}, {
    "x": 1501516800000,
    "y": 79,
    "sc": "1248"
}, {"x": 1501603200000, "y": 74, "sc": "1248"}, {"x": 1501689600000, "y": 108, "sc": "1250"}, {
    "x": 1501776000000,
    "y": 109,
    "sc": "1271"
}, {"x": 1502035200000, "y": 148, "sc": "1247"}, {"x": 1502121600000, "y": 52, "sc": "1246"}, {
    "x": 1502208000000,
    "y": 48,
    "sc": "1246"
}, {"x": 1502294400000, "y": 50, "sc": "1247"}, {"x": 1502380800000, "y": 53, "sc": "1269"}, {
    "x": 1502640000000,
    "y": 51,
    "sc": "1247"
}, {"x": 1502726400000, "y": 54, "sc": "1248"}, {"x": 1502812800000, "y": 55, "sc": "1249"}, {
    "x": 1502899200000,
    "y": 52,
    "sc": "1247"
}, {"x": 1502985600000, "y": 51, "sc": "1268"}, {"x": 1503244800000, "y": 46, "sc": "1250"}, {
    "x": 1503331200000,
    "y": 42,
    "sc": "1251"
}, {"x": 1503417600000, "y": 50, "sc": "1255"}, {"x": 1503504000000, "y": 55, "sc": "1257"}, {
    "x": 1503590400000,
    "y": 50,
    "sc": "1281"
}, {"x": 1503849600000, "y": 50, "sc": "1259"}, {"x": 1503936000000, "y": 47, "sc": "1257"}, {
    "x": 1504022400000,
    "y": 48,
    "sc": "1256"
}, {"x": 1504108800000, "y": 43, "sc": "1253"}, {"x": 1504195200000, "y": 47, "sc": "1280"}, {
    "x": 1504454400000,
    "y": 49,
    "sc": "1261"
}, {"x": 1504540800000, "y": 46, "sc": "1261"}, {"x": 1504627200000, "y": 42, "sc": "1264"}, {
    "x": 1504713600000,
    "y": 39,
    "sc": "1264"
}, {"x": 1504800000000, "y": 41, "sc": "1292"}, {"x": 1505059200000, "y": 41, "sc": "1269"}, {
    "x": 1505145600000,
    "y": 48,
    "sc": "1270"
}, {"x": 1505232000000, "y": 44, "sc": "1269"}, {"x": 1505318400000, "y": 46, "sc": "1272"}, {
    "x": 1505404800000,
    "y": 54,
    "sc": "1300"
}, {"x": 1505664000000, "y": 58, "sc": "1281"}, {"x": 1505750400000, "y": 67, "sc": "1283"}, {
    "x": 1505836800000,
    "y": 94,
    "sc": "1283"
}, {"x": 1505923200000, "y": 86, "sc": "1289"}, {"x": 1506009600000, "y": 115, "sc": "1312"}, {
    "x": 1506268800000,
    "y": 278,
    "sc": "1288"
}, {"x": 1506355200000, "y": 643, "sc": "1286"}, {"x": 1506441600000, "y": 277, "sc": "1287"}, {
    "x": 1506528000000,
    "y": 232,
    "sc": "1288"
}, {"x": 1506614400000, "y": 62, "sc": "1314"}, {"x": 1507478400000, "y": 141, "sc": "1290"}, {
    "x": 1507564800000,
    "y": 90,
    "sc": "1288"
}, {"x": 1507651200000, "y": 85, "sc": "1288"}, {"x": 1507737600000, "y": 62, "sc": "1291"}, {
    "x": 1507824000000,
    "y": 72,
    "sc": "1315"
}, {"x": 1508083200000, "y": 60, "sc": "1290"}, {"x": 1508169600000, "y": 52, "sc": "1290"}, {
    "x": 1508256000000,
    "y": 63,
    "sc": "1286"
}, {"x": 1508342400000, "y": 125, "sc": "1286"}, {"x": 1508428800000, "y": 218, "sc": "1310"}, {
    "x": 1508688000000,
    "y": 1106,
    "sc": "1290"
}, {"x": 1508774400000, "y": 1157, "sc": "1290"}, {"x": 1508860800000, "y": 259, "sc": "1293"}, {
    "x": 1508947200000,
    "y": 338,
    "sc": "1293"
}, {"x": 1509033600000, "y": 248, "sc": "1317"}, {"x": 1509292800000, "y": 1166, "sc": "1295"}, {
    "x": 1509379200000,
    "y": 1221,
    "sc": "1297"
}, {"x": 1509465600000, "y": 1249, "sc": "1296"}, {"x": 1509552000000, "y": 1258, "sc": "1296"}, {
    "x": 1509638400000,
    "y": 1284,
    "sc": "1322"
}, {"x": 1509897600000, "y": 1266, "sc": "1304"}, {"x": 1509984000000, "y": 1263, "sc": "1302"}, {
    "x": 1510070400000,
    "y": 1242,
    "sc": "1298"
}, {"x": 1510156800000, "y": 1213, "sc": "1311"}, {"x": 1510243200000, "y": 1046, "sc": "1336"}, {
    "x": 1510502400000,
    "y": 269,
    "sc": "1310"
}, {"x": 1510588800000, "y": 830, "sc": "1314"}, {"x": 1510675200000, "y": 1202, "sc": "1311"}, {
    "x": 1510761600000,
    "y": 1213,
    "sc": "1314"
}, {"x": 1510848000000, "y": 1282, "sc": "1340"}, {"x": 1511107200000, "y": 1297, "sc": "1314"}, {
    "x": 1511193600000,
    "y": 1298,
    "sc": "1314"
}, {"x": 1511280000000, "y": 1305, "sc": "1316"}, {"x": 1511366400000, "y": 1302, "sc": "1318"}, {
    "x": 1511452800000,
    "y": 1336,
    "sc": "1348"
}, {"x": 1511712000000, "y": 1306, "sc": "1319"}, {"x": 1511798400000, "y": 1307, "sc": "1321"}, {
    "x": 1511884800000,
    "y": 1304,
    "sc": "1320"
}, {"x": 1511971200000, "y": 1312, "sc": "1324"}, {"x": 1512057600000, "y": 1342, "sc": "1356"}, {
    "x": 1512316800000,
    "y": 1311,
    "sc": "1325"
}, {"x": 1512403200000, "y": 1315, "sc": "1326"}, {"x": 1512489600000, "y": 1312, "sc": "1325"}, {
    "x": 1512576000000,
    "y": 1311,
    "sc": "1325"
}, {"x": 1512662400000, "y": 1344, "sc": "1355"}, {"x": 1512921600000, "y": 1309, "sc": "1322"}, {
    "x": 1513008000000,
    "y": 1310,
    "sc": "1322"
}, {"x": 1513094400000, "y": 1314, "sc": "1322"}, {"x": 1513180800000, "y": 1310, "sc": "1322"}, {
    "x": 1513267200000,
    "y": 1343,
    "sc": "1355"
}, {"x": 1513526400000, "y": 1309, "sc": "1323"}, {"x": 1513612800000, "y": 1307, "sc": "1320"}, {
    "x": 1513699200000,
    "y": 1311,
    "sc": "1325"
}, {"x": 1513785600000, "y": 1312, "sc": "1325"}, {"x": 1513872000000, "y": 1340, "sc": "1355"}, {
    "x": 1514131200000,
    "y": 1309,
    "sc": "1324"
}, {"x": 1514217600000, "y": 1314, "sc": "1325"}, {"x": 1514304000000, "y": 1314, "sc": "1325"}, {
    "x": 1514390400000,
    "y": 1313,
    "sc": "1325"
}, {"x": 1514476800000, "y": 1338, "sc": "1350"}, {"x": 1514822400000, "y": 1310, "sc": "1322"}, {
    "x": 1514908800000,
    "y": 1307,
    "sc": "1322"
}, {"x": 1514995200000, "y": 1311, "sc": "1322"}, {"x": 1515081600000, "y": 1335, "sc": "1353"}, {
    "x": 1515340800000,
    "y": 1299,
    "sc": "1322"
}, {"x": 1515427200000, "y": 1309, "sc": "1320"}, {"x": 1515513600000, "y": 1310, "sc": "1320"}, {
    "x": 1515600000000,
    "y": 1309,
    "sc": "1320"
}, {"x": 1515686400000, "y": 1345, "sc": "1351"}, {"x": 1515945600000, "y": 1311, "sc": "1320"}, {
    "x": 1516032000000,
    "y": 1313,
    "sc": "1320"
}, {"x": 1516118400000, "y": 1313, "sc": "1320"}, {"x": 1516204800000, "y": 1313, "sc": "1320"}, {
    "x": 1516291200000,
    "y": 1340,
    "sc": "1348"
}, {"x": 1516550400000, "y": 1310, "sc": "1316"}, {"x": 1516636800000, "y": 1291, "sc": "1313"}, {
    "x": 1516723200000,
    "y": 1285,
    "sc": "1312"
}, {"x": 1516809600000, "y": 1293, "sc": "1310"}, {"x": 1516896000000, "y": 1320, "sc": "1340"}, {
    "x": 1517155200000,
    "y": 1304,
    "sc": "1309"
}, {"x": 1517241600000, "y": 1304, "sc": "1309"}, {"x": 1517328000000, "y": 1304, "sc": "1309"}, {
    "x": 1517414400000,
    "y": 1304,
    "sc": "1309"
}, {"x": 1517500800000, "y": 1337, "sc": "1340"}, {"x": 1517760000000, "y": 1306, "sc": "1311"}, {
    "x": 1517846400000,
    "y": 1308,
    "sc": "1311"
}, {"x": 1517932800000, "y": 1307, "sc": "1309"}, {"x": 1518019200000, "y": 1306, "sc": "1309"}, {
    "x": 1518105600000,
    "y": 1336,
    "sc": "1339"
}, {"x": 1518364800000, "y": 1307, "sc": "1309"}, {"x": 1518451200000, "y": 1307, "sc": "1311"}, {
    "x": 1518537600000,
    "y": 1337,
    "sc": "1342"
}, {"x": 1519228800000, "y": 1305, "sc": "1316"}, {"x": 1519315200000, "y": 1335, "sc": "1346"}, {
    "x": 1519574400000,
    "y": 1302,
    "sc": "1316"
}, {"x": 1519660800000, "y": 1306, "sc": "1316"}, {"x": 1519747200000, "y": 1307, "sc": "1317"}, {
    "x": 1519833600000,
    "y": 1306,
    "sc": "1316"
}, {"x": 1519920000000, "y": 1334, "sc": "1344"}, {"x": 1520179200000, "y": 1291, "sc": "1316"}, {
    "x": 1520265600000,
    "y": 1272,
    "sc": "1318"
}, {"x": 1520352000000, "y": 1292, "sc": "1319"}, {"x": 1520438400000, "y": 1292, "sc": "1318"}, {
    "x": 1520524800000,
    "y": 1320,
    "sc": "1348"
}, {"x": 1520784000000, "y": 1281, "sc": "1318"}, {"x": 1520870400000, "y": 1287, "sc": "1319"}, {
    "x": 1520956800000,
    "y": 1295,
    "sc": "1318"
}, {"x": 1521043200000, "y": 1292, "sc": "1316"}, {"x": 1521129600000, "y": 1323, "sc": "1346"}, {
    "x": 1521388800000,
    "y": 1292,
    "sc": "1314"
}, {"x": 1521475200000, "y": 1284, "sc": "1310"}, {"x": 1521561600000, "y": 1285, "sc": "1309"}, {
    "x": 1521648000000,
    "y": 1292,
    "sc": "1312"
}, {"x": 1521734400000, "y": 1325, "sc": "1339"}, {"x": 1521993600000, "y": 1295, "sc": "1312"}, {
    "x": 1522080000000,
    "y": 1291,
    "sc": "1313"
}, {"x": 1522166400000, "y": 1295, "sc": "1313"}, {"x": 1522252800000, "y": 1297, "sc": "1313"}, {
    "x": 1522339200000,
    "y": 1321,
    "sc": "1340"
}, {"x": 1522598400000, "y": 1290, "sc": "1311"}, {"x": 1522684800000, "y": 1296, "sc": "1311"}, {
    "x": 1522771200000,
    "y": 1326,
    "sc": "1340"
}, {"x": 1523203200000, "y": 1297, "sc": "1312"}, {"x": 1523289600000, "y": 1294, "sc": "1313"}, {
    "x": 1523376000000,
    "y": 1291,
    "sc": "1312"
}, {"x": 1523462400000, "y": 1291, "sc": "1312"}, {"x": 1523548800000, "y": 1321, "sc": "1340"}, {
    "x": 1523808000000,
    "y": 1290,
    "sc": "1309"
}, {"x": 1523894400000, "y": 1290, "sc": "1309"}, {"x": 1523980800000, "y": 1280, "sc": "1305"}, {
    "x": 1524067200000,
    "y": 1287,
    "sc": "1305"
}, {"x": 1524153600000, "y": 1320, "sc": "1335"}, {"x": 1524412800000, "y": 1292, "sc": "1304"}, {
    "x": 1524499200000,
    "y": 1293,
    "sc": "1308"
}, {"x": 1524585600000, "y": 1294, "sc": "1309"}, {"x": 1524672000000, "y": 1294, "sc": "1305"}, {
    "x": 1524758400000,
    "y": 1325,
    "sc": "1335"
}, {"x": 1525190400000, "y": 1291, "sc": "1307"}, {"x": 1525276800000, "y": 1288, "sc": "1305"}, {
    "x": 1525363200000,
    "y": 1312,
    "sc": "1335"
}, {"x": 1525622400000, "y": 1262, "sc": "1308"}, {"x": 1525708800000, "y": 1201, "sc": "1307"}, {
    "x": 1525795200000,
    "y": 199,
    "sc": "1307"
}, {"x": 1525881600000, "y": 309, "sc": "1307"}, {"x": 1525968000000, "y": 787, "sc": "1336"}, {
    "x": 1526227200000,
    "y": 1277,
    "sc": "1308"
}, {"x": 1526313600000, "y": 1267, "sc": "1307"}, {"x": 1526400000000, "y": 1271, "sc": "1306"}, {
    "x": 1526486400000,
    "y": 1276,
    "sc": "1304"
}, {"x": 1526572800000, "y": 1295, "sc": "1332"}, {"x": 1526832000000, "y": 1254, "sc": "1302"}, {
    "x": 1526918400000,
    "y": 1263,
    "sc": "1302"
}, {"x": 1527004800000, "y": 1270, "sc": "1302"}, {"x": 1527091200000, "y": 1278, "sc": "1302"}, {
    "x": 1527177600000,
    "y": 1314,
    "sc": "1332"
}, {"x": 1527436800000, "y": 1281, "sc": "1302"}, {"x": 1527523200000, "y": 1287, "sc": "1301"}, {
    "x": 1527609600000,
    "y": 1287,
    "sc": "1301"
}, {"x": 1527696000000, "y": 1287, "sc": "1301"}, {"x": 1527782400000, "y": 1317, "sc": "1329"}, {
    "x": 1528041600000,
    "y": 1288,
    "sc": "1296"
}, {"x": 1528128000000, "y": 1289, "sc": "1295"}, {"x": 1528214400000, "y": 1296, "sc": "1300"}, {
    "x": 1528300800000,
    "y": 1294,
    "sc": "1298"
}, {"x": 1528387200000, "y": 1323, "sc": "1328"}, {"x": 1528646400000, "y": 1292, "sc": "1296"}, {
    "x": 1528732800000,
    "y": 1292,
    "sc": "1296"
}, {"x": 1528819200000, "y": 1293, "sc": "1297"}, {"x": 1528905600000, "y": 1294, "sc": "1299"}, {
    "x": 1528992000000,
    "y": 1324,
    "sc": "1328"
}, {"x": 1529337600000, "y": 1298, "sc": "1302"}, {"x": 1529424000000, "y": 1298, "sc": "1302"}, {
    "x": 1529510400000,
    "y": 1297,
    "sc": "1302"
}, {"x": 1529596800000, "y": 1323, "sc": "1327"}, {"x": 1529856000000, "y": 1295, "sc": "1299"}, {
    "x": 1529942400000,
    "y": 1298,
    "sc": "1302"
}, {"x": 1530028800000, "y": 1297, "sc": "1301"}, {"x": 1530115200000, "y": 1292, "sc": "1297"}, {
    "x": 1530201600000,
    "y": 1316,
    "sc": "1324"
}, {"x": 1530460800000, "y": 1294, "sc": "1298"}, {"x": 1530547200000, "y": 1294, "sc": "1299"}, {
    "x": 1530633600000,
    "y": 1293,
    "sc": "1299"
}, {"x": 1530720000000, "y": 1293, "sc": "1299"}, {"x": 1530806400000, "y": 1322, "sc": "1326"}, {
    "x": 1531065600000,
    "y": 1293,
    "sc": "1297"
}, {"x": 1531152000000, "y": 1296, "sc": "1300"}, {"x": 1531238400000, "y": 1294, "sc": "1298"}, {
    "x": 1531324800000,
    "y": 1295,
    "sc": "1299"
}, {"x": 1531411200000, "y": 1324, "sc": "1328"}, {"x": 1531670400000, "y": 1294, "sc": "1298"}, {
    "x": 1531756800000,
    "y": 1290,
    "sc": "1298"
}, {"x": 1531843200000, "y": 1295, "sc": "1299"}, {"x": 1531929600000, "y": 1294, "sc": "1299"}, {
    "x": 1532016000000,
    "y": 1310,
    "sc": "1327"
}, {"x": 1532275200000, "y": 1260, "sc": "1301"}, {"x": 1532361600000, "y": 1290, "sc": "1299"}, {
    "x": 1532448000000,
    "y": 1288,
    "sc": "1298"
}, {"x": 1532534400000, "y": 1286, "sc": "1296"}, {"x": 1532620800000, "y": 1316, "sc": "1324"}, {
    "x": 1532880000000,
    "y": 1294,
    "sc": "1299"
}, {"x": 1532966400000, "y": 1288, "sc": "1299"}, {"x": 1533052800000, "y": 1290, "sc": "1299"}, {
    "x": 1533139200000,
    "y": 1281,
    "sc": "1299"
}, {"x": 1533225600000, "y": 1319, "sc": "1326"}, {"x": 1533484800000, "y": 1290, "sc": "1299"}, {
    "x": 1533571200000,
    "y": 1285,
    "sc": "1298"
}, {"x": 1533657600000, "y": 1286, "sc": "1297"}, {"x": 1533744000000, "y": 1284, "sc": "1296"}, {
    "x": 1533830400000,
    "y": 1302,
    "sc": "1320"
}, {"x": 1534089600000, "y": 1266, "sc": "1295"}, {"x": 1534176000000, "y": 1265, "sc": "1296"}, {
    "x": 1534262400000,
    "y": 1281,
    "sc": "1296"
}, {"x": 1534348800000, "y": 1277, "sc": "1296"}, {"x": 1534435200000, "y": 1308, "sc": "1325"}, {
    "x": 1534694400000,
    "y": 1283,
    "sc": "1300"
}, {"x": 1534780800000, "y": 1286, "sc": "1300"}, {"x": 1534867200000, "y": 1288, "sc": "1300"}, {
    "x": 1534953600000,
    "y": 1284,
    "sc": "1300"
}, {"x": 1535040000000, "y": 1304, "sc": "1325"}, {"x": 1535299200000, "y": 1250, "sc": "1300"}, {
    "x": 1535385600000,
    "y": 1234,
    "sc": "1300"
}, {"x": 1535472000000, "y": 1215, "sc": "1300"}, {"x": 1535558400000, "y": 1188, "sc": "1301"}, {
    "x": 1535644800000,
    "y": 1229,
    "sc": "1328"
}, {"x": 1535904000000, "y": 1103, "sc": "1304"}, {"x": 1535990400000, "y": 688, "sc": "1307"}, {
    "x": 1536076800000,
    "y": 1096,
    "sc": "1305"
}, {"x": 1536163200000, "y": 1090, "sc": "1309"}, {"x": 1536249600000, "y": 1202, "sc": "1335"}, {
    "x": 1536508800000,
    "y": 1212,
    "sc": "1311"
}, {"x": 1536595200000, "y": 1155, "sc": "1311"}, {"x": 1536681600000, "y": 1210, "sc": "1311"}, {
    "x": 1536768000000,
    "y": 1226,
    "sc": "1313"
}, {"x": 1536854400000, "y": 1295, "sc": "1342"}, {"x": 1537113600000, "y": 1276, "sc": "1320"}, {
    "x": 1537200000000,
    "y": 1260,
    "sc": "1320"
}, {"x": 1537286400000, "y": 597, "sc": "1317"}, {"x": 1537372800000, "y": 819, "sc": "1318"}, {
    "x": 1537459200000,
    "y": 320,
    "sc": "1343"
}, {"x": 1537804800000, "y": 1065, "sc": "1318"}, {"x": 1537891200000, "y": 1023, "sc": "1323"}, {
    "x": 1537977600000,
    "y": 988,
    "sc": "1323"
}, {"x": 1538064000000, "y": 481, "sc": "1348"}, {"x": 1538928000000, "y": 1227, "sc": "1326"}, {
    "x": 1539014400000,
    "y": 1300,
    "sc": "1324"
}, {"x": 1539100800000, "y": 1298, "sc": "1323"}, {"x": 1539187200000, "y": 1292, "sc": "1323"}, {
    "x": 1539273600000,
    "y": 1321,
    "sc": "1348"
}, {"x": 1539532800000, "y": 1302, "sc": "1323"}, {"x": 1539619200000, "y": 1308, "sc": "1323"}, {
    "x": 1539705600000,
    "y": 1305,
    "sc": "1319"
}, {"x": 1539792000000, "y": 1306, "sc": "1319"}, {"x": 1539878400000, "y": 1332, "sc": "1346"}, {
    "x": 1540137600000,
    "y": 1306,
    "sc": "1320"
}, {"x": 1540224000000, "y": 1306, "sc": "1320"}, {"x": 1540310400000, "y": 1307, "sc": "1320"}, {
    "x": 1540396800000,
    "y": 1311,
    "sc": "1324"
}, {"x": 1540483200000, "y": 1333, "sc": "1350"}, {"x": 1540742400000, "y": 1311, "sc": "1325"}, {
    "x": 1540828800000,
    "y": 1308,
    "sc": "1323"
}, {"x": 1540915200000, "y": 1306, "sc": "1321"}, {"x": 1541001600000, "y": 1302, "sc": "1321"}, {
    "x": 1541088000000,
    "y": 1329,
    "sc": "1355"
}, {"x": 1541347200000, "y": 1286, "sc": "1335"}, {"x": 1541433600000, "y": 1300, "sc": "1334"}, {
    "x": 1541520000000,
    "y": 1317,
    "sc": "1335"
}, {"x": 1541606400000, "y": 1317, "sc": "1336"}, {"x": 1541692800000, "y": 1343, "sc": "1360"}, {
    "x": 1541952000000,
    "y": 1324,
    "sc": "1342"
}, {"x": 1542038400000, "y": 1320, "sc": "1337"}, {"x": 1542124800000, "y": 1319, "sc": "1337"}, {
    "x": 1542211200000,
    "y": 1316,
    "sc": "1338"
}, {"x": 1542297600000, "y": 1346, "sc": "1366"}, {"x": 1542556800000, "y": 1308, "sc": "1348"}, {
    "x": 1542643200000,
    "y": 1326,
    "sc": "1348"
}, {"x": 1542729600000, "y": 1326, "sc": "1348"}, {"x": 1542816000000, "y": 1328, "sc": "1349"}, {
    "x": 1542902400000,
    "y": 1355,
    "sc": "1371"
}, {"x": 1543161600000, "y": 1339, "sc": "1356"}, {"x": 1543248000000, "y": 1342, "sc": "1352"}, {
    "x": 1543334400000,
    "y": 1343,
    "sc": "1355"
}, {"x": 1543420800000, "y": 1345, "sc": "1356"}, {"x": 1543507200000, "y": 1371, "sc": "1385"}, {
    "x": 1543766400000,
    "y": 1350,
    "sc": "1369"
}, {"x": 1543852800000, "y": 1349, "sc": "1365"}, {"x": 1543939200000, "y": 1347, "sc": "1364"}, {
    "x": 1544025600000,
    "y": 1354,
    "sc": "1373"
}, {"x": 1544112000000, "y": 1376, "sc": "1395"}, {"x": 1544371200000, "y": 1339, "sc": "1377"}, {
    "x": 1544457600000,
    "y": 1334,
    "sc": "1373"
}, {"x": 1544544000000, "y": 1335, "sc": "1371"}, {"x": 1544630400000, "y": 1296, "sc": "1375"}, {
    "x": 1544716800000,
    "y": 1275,
    "sc": "1403"
}, {"x": 1544976000000, "y": 1252, "sc": "1386"}, {"x": 1545062400000, "y": 1289, "sc": "1382"}, {
    "x": 1545148800000,
    "y": 1323,
    "sc": "1385"
}, {"x": 1545235200000, "y": 1336, "sc": "1385"}, {"x": 1545321600000, "y": 1351, "sc": "1408"}, {
    "x": 1545580800000,
    "y": 1319,
    "sc": "1386"
}, {"x": 1545667200000, "y": 1318, "sc": "1386"}, {"x": 1545753600000, "y": 1338, "sc": "1391"}, {
    "x": 1545840000000,
    "y": 1340,
    "sc": "1389"
}, {"x": 1545926400000, "y": 1380, "sc": "1413"}, {"x": 1546358400000, "y": 1353, "sc": "1392"}, {
    "x": 1546444800000,
    "y": 1351,
    "sc": "1390"
}, {"x": 1546531200000, "y": 1369, "sc": "1412"}, {"x": 1546790400000, "y": 1327, "sc": "1388"}, {
    "x": 1546876800000,
    "y": 1313,
    "sc": "1388"
}, {"x": 1546963200000, "y": 1143, "sc": "1388"}, {"x": 1547049600000, "y": 899, "sc": "1387"}, {
    "x": 1547136000000,
    "y": 83,
    "sc": "1409"
}, {"x": 1547395200000, "y": 354, "sc": "1396"}, {"x": 1547481600000, "y": 73, "sc": "1392"}, {
    "x": 1547568000000,
    "y": 24,
    "sc": "1392"
}, {"x": 1547654400000, "y": 60, "sc": "1393"}, {"x": 1547740800000, "y": 8, "sc": "1415"}, {
    "x": 1548000000000,
    "y": 29,
    "sc": "1394"
}, {"x": 1548086400000, "y": 425, "sc": "1394"}, {"x": 1548172800000, "y": 123, "sc": "1396"}, {
    "x": 1548259200000,
    "y": 24,
    "sc": "1396"
}, {"x": 1548345600000, "y": 12, "sc": "1421"}, {"x": 1548604800000, "y": 13, "sc": "1405"}, {
    "x": 1548691200000,
    "y": 10,
    "sc": "1405"
}, {"x": 1548777600000, "y": 10, "sc": "1405"}, {"x": 1548864000000, "y": 12, "sc": "1406"}, {
    "x": 1548950400000,
    "y": 14,
    "sc": "1429"
}, {"x": 1549814400000, "y": 10, "sc": "1428"}, {"x": 1549900800000, "y": 13, "sc": "1428"}, {
    "x": 1549987200000,
    "y": 9,
    "sc": "1430"
}, {"x": 1550073600000, "y": 9, "sc": "1435"}, {"x": 1550160000000, "y": 14, "sc": "1459"}, {
    "x": 1550419200000,
    "y": 14,
    "sc": "1437"
}, {"x": 1550505600000, "y": 15, "sc": "1437"}, {"x": 1550592000000, "y": 12, "sc": "1439"}, {
    "x": 1550678400000,
    "y": 11,
    "sc": "1442"
}, {"x": 1550764800000, "y": 11, "sc": "1473"}, {"x": 1551024000000, "y": 13, "sc": "1452"}, {
    "x": 1551110400000,
    "y": 13,
    "sc": "1451"
}, {"x": 1551196800000, "y": 13, "sc": "1455"}, {"x": 1551283200000, "y": 10, "sc": "1465"}, {
    "x": 1551369600000,
    "y": 10,
    "sc": "1490"
}, {"x": 1551628800000, "y": 11, "sc": "1468"}, {"x": 1551715200000, "y": 11, "sc": "1481"}, {
    "x": 1551801600000,
    "y": 15,
    "sc": "1481"
}, {"x": 1551888000000, "y": 17, "sc": "1492"}, {"x": 1551974400000, "y": 13, "sc": "1515"}, {
    "x": 1552233600000,
    "y": 10,
    "sc": "1496"
}, {"x": 1552320000000, "y": 7, "sc": "1502"}, {"x": 1552406400000, "y": 10, "sc": "1509"}, {
    "x": 1552492800000,
    "y": 9,
    "sc": "1510"
}, {"x": 1552579200000, "y": 9, "sc": "1531"}, {"x": 1552838400000, "y": 11, "sc": "1509"}, {
    "x": 1552924800000,
    "y": 11,
    "sc": "1519"
}, {"x": 1553011200000, "y": 13, "sc": "1519"}, {"x": 1553097600000, "y": 15, "sc": "1521"}, {
    "x": 1553184000000,
    "y": 13,
    "sc": "1542"
}, {"x": 1553443200000, "y": 14, "sc": "1535"}, {"x": 1553529600000, "y": 16, "sc": "1541"}, {
    "x": 1553616000000,
    "y": 15,
    "sc": "1544"
}, {"x": 1553702400000, "y": 15, "sc": "1546"}, {"x": 1553788800000, "y": 13, "sc": "1566"}, {
    "x": 1554048000000,
    "y": 14,
    "sc": "1545"
}, {"x": 1554134400000, "y": 17, "sc": "1545"}, {"x": 1554220800000, "y": 14, "sc": "1547"}, {
    "x": 1554307200000,
    "y": 14,
    "sc": "1569"
}, {"x": 1554652800000, "y": 16, "sc": "1550"}, {"x": 1554739200000, "y": 16, "sc": "1552"}, {
    "x": 1554825600000,
    "y": 19,
    "sc": "1554"
}, {"x": 1554912000000, "y": 17, "sc": "1554"}, {"x": 1554998400000, "y": 18, "sc": "1573"}, {
    "x": 1555257600000,
    "y": 27,
    "sc": "1558"
}, {"x": 1555344000000, "y": 23, "sc": "1558"}, {"x": 1555430400000, "y": 23, "sc": "1562"}, {
    "x": 1555516800000,
    "y": 25,
    "sc": "1570"
}, {"x": 1555603200000, "y": 21, "sc": "1586"}, {"x": 1555862400000, "y": 25, "sc": "1576"}, {
    "x": 1555948800000,
    "y": 29,
    "sc": "1578"
}, {"x": 1556035200000, "y": 29, "sc": "1585"}, {"x": 1556121600000, "y": 34, "sc": "1594"}, {
    "x": 1556208000000,
    "y": 33,
    "sc": "1608"
}, {"x": 1556467200000, "y": 35, "sc": "1600"}, {"x": 1556553600000, "y": 36, "sc": "1625"}, {
    "x": 1557072000000,
    "y": 157,
    "sc": "1609"
}, {"x": 1557158400000, "y": 156, "sc": "1611"}, {"x": 1557244800000, "y": 140, "sc": "1611"}, {
    "x": 1557331200000,
    "y": 116,
    "sc": "1611"
}, {"x": 1557417600000, "y": 47, "sc": "1625"}, {"x": 1557676800000, "y": 159, "sc": "1614"}, {
    "x": 1557763200000,
    "y": 197,
    "sc": "1617"
}, {"x": 1557849600000, "y": 90, "sc": "1617"}, {"x": 1557936000000, "y": 107, "sc": "1617"}, {
    "x": 1558022400000,
    "y": 196,
    "sc": "1629"
}, {"x": 1558281600000, "y": 1009, "sc": "1622"}, {"x": 1558368000000, "y": 802, "sc": "1623"}, {
    "x": 1558454400000,
    "y": 1546,
    "sc": "1626"
}, {"x": 1558540800000, "y": 1580, "sc": "1627"}, {"x": 1558627200000, "y": 1602, "sc": "1637"}, {
    "x": 1558886400000,
    "y": 1597,
    "sc": "1634"
}, {"x": 1558972800000, "y": 1604, "sc": "1634"}, {"x": 1559059200000, "y": 1609, "sc": "1634"}, {
    "x": 1559145600000,
    "y": 1621,
    "sc": "1635"
}, {"x": 1559232000000, "y": 1633, "sc": "1643"}, {"x": 1559491200000, "y": 1630, "sc": "1636"}, {
    "x": 1559577600000,
    "y": 1632,
    "sc": "1637"
}, {"x": 1559664000000, "y": 1636, "sc": "1639"}, {"x": 1559750400000, "y": 1649, "sc": "1651"}, {
    "x": 1560096000000,
    "y": 1647,
    "sc": "1649"
}, {"x": 1560182400000, "y": 1646, "sc": "1651"}, {"x": 1560268800000, "y": 1647, "sc": "1651"}, {
    "x": 1560355200000,
    "y": 1648,
    "sc": "1653"
}, {"x": 1560441600000, "y": 1667, "sc": "1670"}, {"x": 1560700800000, "y": 1662, "sc": "1667"}, {
    "x": 1560787200000,
    "y": 1665,
    "sc": "1668"
}, {"x": 1560873600000, "y": 1663, "sc": "1670"}, {"x": 1560960000000, "y": 1671, "sc": "1680"}, {
    "x": 1561046400000,
    "y": 1682,
    "sc": "1693"
}, {"x": 1561305600000, "y": 1671, "sc": "1684"}, {"x": 1561392000000, "y": 1671, "sc": "1686"}, {
    "x": 1561478400000,
    "y": 1668,
    "sc": "1688"
}, {"x": 1561564800000, "y": 1670, "sc": "1688"}, {"x": 1561651200000, "y": 1692, "sc": "1703"}, {
    "x": 1561910400000,
    "y": 1675,
    "sc": "1694"
}, {"x": 1561996800000, "y": 1677, "sc": "1694"}, {"x": 1562083200000, "y": 1696, "sc": "1701"}, {
    "x": 1562169600000,
    "y": 1697,
    "sc": "1700"
}, {"x": 1562256000000, "y": 1707, "sc": "1710"}, {"x": 1562515200000, "y": 1696, "sc": "1701"}, {
    "x": 1562601600000,
    "y": 1698,
    "sc": "1701"
}, {"x": 1562688000000, "y": 1698, "sc": "1702"}, {"x": 1562774400000, "y": 1702, "sc": "1706"}, {
    "x": 1562860800000,
    "y": 1709,
    "sc": "1713"
}, {"x": 1563120000000, "y": 1706, "sc": "1712"}, {"x": 1563206400000, "y": 1707, "sc": "1714"}, {
    "x": 1563292800000,
    "y": 1706,
    "sc": "1715"
}, {"x": 1563379200000, "y": 1709, "sc": "1716"}, {"x": 1563465600000, "y": 1719, "sc": "1727"}, {
    "x": 1563724800000,
    "y": 1715,
    "sc": "1722"
}, {"x": 1563811200000, "y": 1711, "sc": "1722"}, {"x": 1563897600000, "y": 1712, "sc": "1723"}, {
    "x": 1563984000000,
    "y": 1697,
    "sc": "1728"
}, {"x": 1564070400000, "y": 1695, "sc": "1739"}, {"x": 1564329600000, "y": 1687, "sc": "1734"}, {
    "x": 1564416000000,
    "y": 1689,
    "sc": "1738"
}, {"x": 1564502400000, "y": 1681, "sc": "1738"}, {"x": 1564588800000, "y": 1686, "sc": "1738"}, {
    "x": 1564675200000,
    "y": 1722,
    "sc": "1745"
}, {"x": 1564934400000, "y": 1729, "sc": "1736"}, {"x": 1565020800000, "y": 1642, "sc": "1738"}, {
    "x": 1565107200000,
    "y": 1669,
    "sc": "1738"
}, {"x": 1565193600000, "y": 1041, "sc": "1740"}, {"x": 1565280000000, "y": 1590, "sc": "1753"}, {
    "x": 1565539200000,
    "y": 1715,
    "sc": "1744"
}, {"x": 1565625600000, "y": 1659, "sc": "1745"}, {"x": 1565712000000, "y": 1650, "sc": "1747"}, {
    "x": 1565798400000,
    "y": 1704,
    "sc": "1750"
}, {"x": 1565884800000, "y": 1661, "sc": "1759"}, {"x": 1566144000000, "y": 16, "sc": "1751"}, {
    "x": 1566230400000,
    "y": 25,
    "sc": "1752"
}, {"x": 1566316800000, "y": 42, "sc": "1760"}, {"x": 1566403200000, "y": 85, "sc": "1760"}, {
    "x": 1566489600000,
    "y": 60,
    "sc": "1775"
}, {"x": 1566748800000, "y": 80, "sc": "1769"}, {"x": 1566835200000, "y": 69, "sc": "1773"}, {
    "x": 1566921600000,
    "y": 75,
    "sc": "1773"
}, {"x": 1567008000000, "y": 83, "sc": "1774"}, {"x": 1567094400000, "y": 53, "sc": "1788"}, {
    "x": 1567353600000,
    "y": 38,
    "sc": "1779"
}, {"x": 1567440000000, "y": 17, "sc": "1780"}, {"x": 1567526400000, "y": 11, "sc": "1783"}, {
    "x": 1567612800000,
    "y": 6,
    "sc": "1786"
}, {"x": 1567699200000, "y": 6, "sc": "1795"}, {"x": 1567958400000, "y": 6, "sc": "1786"}, {
    "x": 1568044800000,
    "y": 6,
    "sc": "1787"
}, {"x": 1568131200000, "y": 6, "sc": "1789"}, {"x": 1568217600000, "y": 5, "sc": "1803"}, {
    "x": 1568563200000,
    "y": 4,
    "sc": "1795"
}, {"x": 1568649600000, "y": 6, "sc": "1798"}, {"x": 1568736000000, "y": 6, "sc": "1797"}, {
    "x": 1568822400000,
    "y": 9,
    "sc": "1800"
}, {"x": 1568908800000, "y": 24, "sc": "1807"}, {"x": 1569168000000, "y": 46, "sc": "1799"}, {
    "x": 1569254400000,
    "y": 60,
    "sc": "1802"
}, {"x": 1569340800000, "y": 55, "sc": "1806"}, {"x": 1569427200000, "y": 50, "sc": "1809"}, {
    "x": 1569513600000,
    "y": 35,
    "sc": "1823"
}, {"x": 1569772800000, "y": 37, "sc": "1823"}, {"x": 1570464000000, "y": 19, "sc": "1819"}, {
    "x": 1570550400000,
    "y": 19,
    "sc": "1820"
}, {"x": 1570636800000, "y": 19, "sc": "1820"}, {"x": 1570723200000, "y": 10, "sc": "1835"}, {
    "x": 1570982400000,
    "y": 10,
    "sc": "1828"
}, {"x": 1571068800000, "y": 20, "sc": "1828"}, {"x": 1571155200000, "y": 32, "sc": "1828"}, {
    "x": 1571241600000,
    "y": 47,
    "sc": "1828"
}, {"x": 1571328000000, "y": 45, "sc": "1842"}, {"x": 1571587200000, "y": 60, "sc": "1836"}, {
    "x": 1571673600000,
    "y": 47,
    "sc": "1836"
}, {"x": 1571760000000, "y": 54, "sc": "1838"}, {"x": 1571846400000, "y": 54, "sc": "1843"}, {
    "x": 1571932800000,
    "y": 57,
    "sc": "1852"
}, {"x": 1572192000000, "y": 53, "sc": "1844"}, {"x": 1572278400000, "y": 51, "sc": "1844"}, {
    "x": 1572364800000,
    "y": 101,
    "sc": "1844"
}, {"x": 1572451200000, "y": 144, "sc": "1847"}, {"x": 1572537600000, "y": 80, "sc": "1856"}, {
    "x": 1572796800000,
    "y": 55,
    "sc": "1848"
}, {"x": 1572883200000, "y": 18, "sc": "1851"}, {"x": 1572969600000, "y": 21, "sc": "1851"}, {
    "x": 1573056000000,
    "y": 17,
    "sc": "1853"
}, {"x": 1573142400000, "y": 35, "sc": "1862"}, {"x": 1573401600000, "y": 45, "sc": "1858"}, {
    "x": 1573488000000,
    "y": 74,
    "sc": "1859"
}, {"x": 1573574400000, "y": 81, "sc": "1859"}, {"x": 1573660800000, "y": 58, "sc": "1869"}, {
    "x": 1573747200000,
    "y": 72,
    "sc": "1880"
}, {"x": 1574006400000, "y": 76, "sc": "1870"}, {"x": 1574092800000, "y": 1803, "sc": "1870"}, {
    "x": 1574179200000,
    "y": 1823,
    "sc": "1876"
}, {"x": 1574265600000, "y": 1828, "sc": "1878"}, {"x": 1574352000000, "y": 1827, "sc": "1888"}, {
    "x": 1574611200000,
    "y": 1817,
    "sc": "1882"
}, {"x": 1574697600000, "y": 828, "sc": "1885"}, {"x": 1574784000000, "y": 1851, "sc": "1885"}, {
    "x": 1574870400000,
    "y": 1807,
    "sc": "1892"
}, {"x": 1574956800000, "y": 1745, "sc": "1902"}, {"x": 1575216000000, "y": 1859, "sc": "1901"}, {
    "x": 1575302400000,
    "y": 1831,
    "sc": "1901"
}, {"x": 1575388800000, "y": 1880, "sc": "1908"}, {"x": 1575475200000, "y": 1889, "sc": "1909"}, {
    "x": 1575561600000,
    "y": 1913,
    "sc": "1927"
}, {"x": 1575820800000, "y": 1908, "sc": "1919"}, {"x": 1575907200000, "y": 1908, "sc": "1921"}, {
    "x": 1575993600000,
    "y": 1912,
    "sc": "1924"
}, {"x": 1576080000000, "y": 1914, "sc": "1924"}, {"x": 1576166400000, "y": 1912, "sc": "1934"}, {
    "x": 1576425600000,
    "y": 1882,
    "sc": "1926"
}, {"x": 1576512000000, "y": 90, "sc": "1938"}, {"x": 1576598400000, "y": 69, "sc": "1940"}, {
    "x": 1576684800000,
    "y": 154,
    "sc": "1941"
}, {"x": 1576771200000, "y": 151, "sc": "1953"}, {"x": 1577030400000, "y": 129, "sc": "1946"}, {
    "x": 1577116800000,
    "y": 106,
    "sc": "1946"
}, {"x": 1577203200000, "y": 86, "sc": "1947"}, {"x": 1577289600000, "y": 53, "sc": "1958"}, {
    "x": 1577376000000,
    "y": 87,
    "sc": "1970"
}, {"x": 1577635200000, "y": 22, "sc": "1958"}, {"x": 1577721600000, "y": 24, "sc": "1972"}, {
    "x": 1577894400000,
    "y": 29,
    "sc": "1958"
}, {"x": 1577980800000, "y": 35, "sc": "1968"}, {"x": 1578240000000, "y": 47, "sc": "1958"}, {
    "x": 1578326400000,
    "y": 55,
    "sc": "1958"
}, {"x": 1578412800000, "y": 58, "sc": "1958"}, {"x": 1578499200000, "y": 53, "sc": "1958"}, {
    "x": 1578585600000,
    "y": 60,
    "sc": "1968"
}, {"x": 1578844800000, "y": 80, "sc": "1958"}, {"x": 1578931200000, "y": 98, "sc": "1958"}, {
    "x": 1579017600000,
    "y": 78,
    "sc": "1958"
}, {"x": 1579104000000, "y": 72, "sc": "1959"}, {"x": 1579190400000, "y": 59, "sc": "1972"}, {
    "x": 1579449600000,
    "y": 35,
    "sc": "1962"
}, {"x": 1579536000000, "y": 34, "sc": "1965"}, {"x": 1579622400000, "y": 36, "sc": "1968"}, {
    "x": 1579708800000,
    "y": 46,
    "sc": "1981"
}, {"x": 1580659200000, "y": 1954, "sc": "1985"}, {"x": 1580745600000, "y": 1683, "sc": "1988"}, {
    "x": 1580832000000,
    "y": 1701,
    "sc": "1992"
}, {"x": 1580918400000, "y": 327, "sc": "1995"}, {"x": 1581004800000, "y": 257, "sc": "2008"}, {
    "x": 1581264000000,
    "y": 182,
    "sc": "2001"
}, {"x": 1581350400000, "y": 121, "sc": "2002"}, {"x": 1581436800000, "y": 98, "sc": "2004"}, {
    "x": 1581523200000,
    "y": 113,
    "sc": "2006"
}, {"x": 1581609600000, "y": 114, "sc": "2009"}, {"x": 1581868800000, "y": 70, "sc": "2007"}, {
    "x": 1581955200000,
    "y": 88,
    "sc": "2008"
}, {"x": 1582041600000, "y": 87, "sc": "2017"}, {"x": 1582128000000, "y": 44, "sc": "2024"}, {
    "x": 1582214400000,
    "y": 38,
    "sc": "2034"
}, {"x": 1582473600000, "y": 43, "sc": "2030"}, {"x": 1582560000000, "y": 46, "sc": "2030"}, {
    "x": 1582646400000,
    "y": 21,
    "sc": "2033"
}, {"x": 1582732800000, "y": 21, "sc": "2036"}, {"x": 1582819200000, "y": 43, "sc": "2047"}, {
    "x": 1583078400000,
    "y": 34,
    "sc": "2042"
}, {"x": 1583164800000, "y": 42, "sc": "2044"}, {"x": 1583251200000, "y": 27, "sc": "2050"}, {
    "x": 1583337600000,
    "y": 20,
    "sc": "2053"
}, {"x": 1583424000000, "y": 20, "sc": "2058"}, {"x": 1583683200000, "y": 34, "sc": "2053"}, {
    "x": 1583769600000,
    "y": 17,
    "sc": "2055"
}, {"x": 1583856000000, "y": 22, "sc": "2057"}, {"x": 1583942400000, "y": 20, "sc": "2059"}, {
    "x": 1584028800000,
    "y": 43,
    "sc": "2066"
}, {"x": 1584288000000, "y": 203, "sc": "2065"}, {"x": 1584374400000, "y": 1915, "sc": "2069"}, {
    "x": 1584460800000,
    "y": 2006,
    "sc": "2072"
}, {"x": 1584547200000, "y": 1987, "sc": "2077"}, {"x": 1584633600000, "y": 1373, "sc": "2084"}, {
    "x": 1584892800000,
    "y": 1918,
    "sc": "2080"
}, {"x": 1584979200000, "y": 1934, "sc": "2082"}, {"x": 1585065600000, "y": 1281, "sc": "2090"}, {
    "x": 1585152000000,
    "y": 2032,
    "sc": "2095"
}, {"x": 1585238400000, "y": 1991, "sc": "2105"}, {"x": 1585497600000, "y": 2093, "sc": "2104"}, {
    "x": 1585584000000,
    "y": 2096,
    "sc": "2104"
}, {"x": 1585670400000, "y": 2097, "sc": "2104"}, {"x": 1585756800000, "y": 2096, "sc": "2104"}, {
    "x": 1585843200000,
    "y": 2101,
    "sc": "2111"
}, {"x": 1586188800000, "y": 2078, "sc": "2106"}, {"x": 1586275200000, "y": 2064, "sc": "2109"}, {
    "x": 1586361600000,
    "y": 2076,
    "sc": "2108"
}, {"x": 1586448000000, "y": 2086, "sc": "2115"}, {"x": 1586707200000, "y": 2088, "sc": "2110"}, {
    "x": 1586793600000,
    "y": 2087,
    "sc": "2112"
}, {"x": 1586880000000, "y": 2094, "sc": "2112"}, {"x": 1586966400000, "y": 2094, "sc": "2114"}, {
    "x": 1587052800000,
    "y": 2106,
    "sc": "2122"
}, {"x": 1587312000000, "y": 2124, "sc": "2131"}, {"x": 1587398400000, "y": 2129, "sc": "2136"}, {
    "x": 1587484800000,
    "y": 2133,
    "sc": "2136"
}, {"x": 1587571200000, "y": 2125, "sc": "2138"}, {"x": 1587657600000, "y": 2136, "sc": "2144"}, {
    "x": 1587916800000,
    "y": 2124,
    "sc": "2138"
}, {"x": 1588003200000, "y": 2125, "sc": "2138"}, {"x": 1588089600000, "y": 2116, "sc": "2138"}, {
    "x": 1588176000000,
    "y": 2114,
    "sc": "2143"
}, {"x": 1588694400000, "y": 1011, "sc": "2140"}, {"x": 1588780800000, "y": 1937, "sc": "2142"}, {
    "x": 1588867200000,
    "y": 1491,
    "sc": "2146"
}, {"x": 1589126400000, "y": 2052, "sc": "2140"}, {"x": 1589212800000, "y": 2084, "sc": "2140"}, {
    "x": 1589299200000,
    "y": 2075,
    "sc": "2140"
}, {"x": 1589385600000, "y": 2085, "sc": "2140"}, {"x": 1589472000000, "y": 2092, "sc": "2145"}, {
    "x": 1589731200000,
    "y": 2109,
    "sc": "2142"
}, {"x": 1589817600000, "y": 2130, "sc": "2140"}, {"x": 1589904000000, "y": 2134, "sc": "2140"}, {
    "x": 1589990400000,
    "y": 2132,
    "sc": "2140"
}, {"x": 1590076800000, "y": 2137, "sc": "2145"}, {"x": 1590336000000, "y": 2135, "sc": "2144"}, {
    "x": 1590422400000,
    "y": 2142,
    "sc": "2148"
}, {"x": 1590508800000, "y": 2147, "sc": "2153"}, {"x": 1590595200000, "y": 2151, "sc": "2157"}, {
    "x": 1590681600000,
    "y": 2154,
    "sc": "2160"
}, {"x": 1590940800000, "y": 2146, "sc": "2157"}, {"x": 1591027200000, "y": 2151, "sc": "2160"}, {
    "x": 1591113600000,
    "y": 2156,
    "sc": "2162"
}, {"x": 1591200000000, "y": 2158, "sc": "2162"}, {"x": 1591286400000, "y": 2171, "sc": "2175"}, {
    "x": 1591545600000,
    "y": 2176,
    "sc": "2180"
}, {"x": 1591632000000, "y": 2175, "sc": "2180"}, {"x": 1591718400000, "y": 2179, "sc": "2181"}, {
    "x": 1591804800000,
    "y": 2179,
    "sc": "2181"
}, {"x": 1591891200000, "y": 2185, "sc": "2187"}, {"x": 1592150400000, "y": 2181, "sc": "2183"}, {
    "x": 1592236800000,
    "y": 2175,
    "sc": "2183"
}, {"x": 1592323200000, "y": 2171, "sc": "2179"}, {"x": 1592409600000, "y": 2178, "sc": "2191"}, {
    "x": 1592496000000,
    "y": 2030,
    "sc": "2195"
}, {"x": 1592755200000, "y": 2113, "sc": "2194"}, {"x": 1592841600000, "y": 480, "sc": "2196"}, {
    "x": 1592928000000,
    "y": 503,
    "sc": "2203"
}, {"x": 1593360000000, "y": 2180, "sc": "2208"}, {"x": 1593446400000, "y": 551, "sc": "2221"}, {
    "x": 1593532800000,
    "y": 150,
    "sc": "2213"
}, {"x": 1593619200000, "y": 13, "sc": "2211"}, {"x": 1593705600000, "y": 4, "sc": "2214"}, {
    "x": 1593964800000,
    "y": 1,
    "sc": "2211"
}, {"x": 1594051200000, "y": 7, "sc": "2209"}, {"x": 1594137600000, "y": 4, "sc": "2210"}, {
    "x": 1594224000000,
    "y": 5,
    "sc": "2214"
}, {"x": 1594310400000, "y": 10, "sc": "2224"}, {"x": 1594569600000, "y": 17, "sc": "2220"}, {
    "x": 1594656000000,
    "y": 14,
    "sc": "2220"
}, {"x": 1594742400000, "y": 12, "sc": "2222"}, {"x": 1594828800000, "y": 10, "sc": "2221"}, {
    "x": 1594915200000,
    "y": 14,
    "sc": "2232"
}, {"x": 1595174400000, "y": 11, "sc": "2223"}, {"x": 1595260800000, "y": 12, "sc": "2230"}, {
    "x": 1595347200000,
    "y": 7,
    "sc": "2240"
}, {"x": 1595433600000, "y": 10, "sc": "2243"}, {"x": 1595520000000, "y": 8, "sc": "2256"}, {
    "x": 1595779200000,
    "y": 10,
    "sc": "2247"
}, {"x": 1595865600000, "y": 12, "sc": "2250"}, {"x": 1595952000000, "y": 13, "sc": "2265"}, {
    "x": 1596038400000,
    "y": 15,
    "sc": "2265"
}, {"x": 1596124800000, "y": 15, "sc": "2275"}, {"x": 1596384000000, "y": 22, "sc": "2265"}, {
    "x": 1596470400000,
    "y": 19,
    "sc": "2261"
}, {"x": 1596556800000, "y": 24, "sc": "2261"}, {"x": 1596643200000, "y": 15, "sc": "2261"}, {
    "x": 1596729600000,
    "y": 18,
    "sc": "2271"
}, {"x": 1596988800000, "y": 17, "sc": "2268"}, {"x": 1597075200000, "y": 13, "sc": "2268"}, {
    "x": 1597161600000,
    "y": 11,
    "sc": "2267"
}, {"x": 1597248000000, "y": 5, "sc": "2272"}, {"x": 1597334400000, "y": 5, "sc": "2287"}, {
    "x": 1597593600000,
    "y": 5,
    "sc": "2284"
}, {"x": 1597680000000, "y": 5, "sc": "2286"}, {"x": 1597766400000, "y": 5, "sc": "2286"}, {
    "x": 1597852800000,
    "y": 5,
    "sc": "2289"
}, {"x": 1597939200000, "y": 5, "sc": "2303"}, {"x": 1598198400000, "y": 5, "sc": "2311"}];
/*同类排名百分比*/
var Data_rateInSimilarPersent = [[1371657600000, 6.5800], [1371744000000, 7.2800], [1372003200000, 5.4800], [1372089600000, 7.4000], [1372176000000, 6.2300], [1372262400000, 6.2300], [1372348800000, 5.8700], [1372521600000, 4.9700], [1372608000000, 5.9300], [1372694400000, 5.3900], [1372780800000, 5.3900], [1372867200000, 5.1200], [1372953600000, 5.0400], [1373212800000, 5.6600], [1373299200000, 5.9300], [1373385600000, 6.7400], [1373472000000, 8.0900], [1373558400000, 7.4300], [1373817600000, 5.9300], [1373904000000, 6.4700], [1373990400000, 5.3600], [1374076800000, 5.3100], [1374163200000, 6.0400], [1374422400000, 5.5700], [1374508800000, 4.2100], [1374595200000, 5.4400], [1374681600000, 5.1300], [1374768000000, 7.3600], [1375027200000, 6.6500], [1375113600000, 6.9100], [1375200000000, 7.4400], [1375286400000, 8.9700], [1375372800000, 9.6200], [1375632000000, 12.2100], [1375718400000, 12.9800], [1375804800000, 16.2800], [1375891200000, 16.4600], [1375977600000, 13.7500], [1376236800000, 16.5400], [1376323200000, 18.8000], [1376409600000, 25.3100], [1376496000000, 19.3500], [1376582400000, 14.7400], [1376841600000, 14.8900], [1376928000000, 11.9100], [1377014400000, 12.5900], [1377100800000, 12.3500], [1377187200000, 11.2500], [1377446400000, 10.3200], [1377532800000, 11.0300], [1377619200000, 8.5800], [1377705600000, 10.7800], [1377792000000, 15.5000], [1378051200000, 12.9600], [1378137600000, 16.1400], [1378224000000, 26.3900], [1378310400000, 26.9900], [1378396800000, 43.2000], [1378656000000, 83.1300], [1378742400000, 92.0500], [1378828800000, 89.6400], [1378915200000, 89.8800], [1379001600000, 91.6500], [1379260800000, 92.1600], [1379347200000, 87.6500], [1379433600000, 90.3500], [1379865600000, 95.4900], [1379952000000, 95.0100], [1380038400000, 94.5600], [1380124800000, 94.8000], [1380211200000, 95.3400], [1380470400000, 91.5900], [1381161600000, 93.4100], [1381248000000, 93.6500], [1381334400000, 92.4700], [1381420800000, 93.7200], [1381680000000, 91.5500], [1381766400000, 91.3100], [1381852800000, 89.4400], [1381939200000, 89.7200], [1382025600000, 90.0500], [1382284800000, 89.7200], [1382371200000, 88.7900], [1382457600000, 90.9300], [1382544000000, 83.7200], [1382630400000, 71.5600], [1382889600000, 53.0100], [1382976000000, 53.2400], [1383062400000, 85.9400], [1383148800000, 77.8800], [1383235200000, 64.8400], [1383494400000, 52.7600], [1383580800000, 50.0], [1383667200000, 30.4100], [1383753600000, 23.6800], [1383840000000, 12.9800], [1384099200000, 12.8700], [1384185600000, 13.7900], [1384272000000, 5.9500], [1384358400000, 7.5300], [1384444800000, 6.3200], [1384704000000, 64.0100], [1384790400000, 54.6700], [1384876800000, 68.4100], [1384963200000, 67.0500], [1385049600000, 74.3200], [1385308800000, 66.8200], [1385395200000, 37.3000], [1385481600000, 45.8400], [1385568000000, 64.0400], [1385654400000, 53.6700], [1385913600000, 39.6000], [1386000000000, 55.9300], [1386086400000, 76.2900], [1386172800000, 73.3800], [1386259200000, 60.9800], [1386518400000, 22.8200], [1386604800000, 14.0300], [1386691200000, 9.5600], [1386777600000, 8.1900], [1386864000000, 12.4500], [1387123200000, 9.2500], [1387209600000, 9.4500], [1387296000000, 6.7800], [1387382400000, 4.3800], [1387468800000, 3.9000], [1387728000000, 4.6000], [1387814400000, 4.8100], [1387900800000, 6.5200], [1387987200000, 5.8700], [1388073600000, 8.4100], [1388332800000, 6.7400], [1388419200000, 9.9100], [1388592000000, 12.3900], [1388678400000, 9.9100], [1388937600000, 5.4300], [1389024000000, 5.00], [1389110400000, 3.4800], [1389196800000, 3.2600], [1389283200000, 2.8000], [1389542400000, 2.6100], [1389628800000, 2.8300], [1389715200000, 2.8300], [1389801600000, 3.0400], [1389888000000, 2.8000], [1390147200000, 2.1700], [1390233600000, 2.6100], [1390320000000, 4.3500], [1390406400000, 3.7000], [1390492800000, 5.1600], [1390752000000, 3.6800], [1390838400000, 4.1100], [1390924800000, 7.5800], [1391011200000, 4.7100], [1391702400000, 3.8100], [1391961600000, 17.3800], [1392048000000, 18.4500], [1392134400000, 13.0300], [1392220800000, 30.7900], [1392307200000, 21.7600], [1392566400000, 27.3300], [1392652800000, 2.9700], [1392739200000, 3.3800], [1392825600000, 2.7400], [1392912000000, 3.9600], [1393171200000, 3.5700], [1393257600000, 1.6800], [1393344000000, 2.1000], [1393430400000, 3.1500], [1393516800000, 1.2400], [1393776000000, 1.2600], [1393862400000, 1.2500], [1393948800000, 2.0700], [1394035200000, 2.0700], [1394121600000, 2.4500], [1394380800000, 2.4700], [1394467200000, 2.2600], [1394553600000, 2.8700], [1394640000000, 2.4600], [1394726400000, 2.0200], [1394985600000, 2.6700], [1395072000000, 2.6600], [1395158400000, 2.2500], [1395244800000, 3.0700], [1395331200000, 2.6200], [1395590400000, 2.4500], [1395676800000, 1.8400], [1395763200000, 2.6500], [1395849600000, 1.8400], [1395936000000, 2.2100], [1396195200000, 1.4200], [1396281600000, 1.4200], [1396368000000, 1.8300], [1396454400000, 1.8300], [1396540800000, 1.8000], [1396886400000, 22.7600], [1396972800000, 39.6300], [1397059200000, 82.7200], [1397145600000, 82.1600], [1397404800000, 87.6500], [1397491200000, 89.4300], [1397577600000, 75.4100], [1397664000000, 87.8300], [1397750400000, 87.3700], [1398009600000, 91.6800], [1398096000000, 16.9700], [1398182400000, 23.9900], [1398268800000, 7.4400], [1398355200000, 7.5400], [1398614400000, 8.5100], [1398700800000, 3.9600], [1398787200000, 5.0800], [1399219200000, 4.1500], [1399305600000, 4.1500], [1399392000000, 6.5200], [1399478400000, 6.1300], [1399564800000, 5.4700], [1399824000000, 1.5800], [1399910400000, 1.5800], [1399996800000, 1.5800], [1400083200000, 2.1700], [1400169600000, 1.9500], [1400428800000, 1.9800], [1400515200000, 1.9800], [1400601600000, 0.7900], [1400688000000, 1.1900], [1400774400000, 1.1700], [1401033600000, 2.5600], [1401120000000, 1.3800], [1401206400000, 11.2400], [1401292800000, 9.8600], [1401379200000, 9.9600], [1401724800000, 7.3000], [1401811200000, 4.9300], [1401897600000, 5.7200], [1401984000000, 5.4700], [1402243200000, 4.5400], [1402329600000, 11.2400], [1402416000000, 20.7100], [1402502400000, 15.5800], [1402588800000, 28.9300], [1402848000000, 48.5200], [1402934400000, 21.1000], [1403020800000, 11.6400], [1403107200000, 13.8100], [1403193600000, 24.0300], [1403452800000, 18.3100], [1403539200000, 18.3100], [1403625600000, 18.8600], [1403712000000, 35.3600], [1403798400000, 36.4900], [1404057600000, 47.0100], [1404144000000, 30.9800], [1404230400000, 29.4900], [1404316800000, 53.3200], [1404403200000, 42.6100], [1404662400000, 52.1500], [1404748800000, 36.5200], [1404835200000, 15.6200], [1404921600000, 12.8900], [1405008000000, 17.8500], [1405267200000, 32.6200], [1405353600000, 52.3400], [1405440000000, 51.9500], [1405526400000, 45.7200], [1405612800000, 60.0400], [1405872000000, 65.5000], [1405958400000, 80.9000], [1406044800000, 86.9900], [1406131200000, 92.2300], [1406217600000, 93.3600], [1406476800000, 95.5500], [1406563200000, 96.1400], [1406649600000, 95.5600], [1406736000000, 94.8000], [1406822400000, 94.6900], [1407081600000, 93.0600], [1407168000000, 94.4100], [1407254400000, 95.3800], [1407340800000, 95.5700], [1407427200000, 96.2100], [1407686400000, 95.9600], [1407772800000, 95.9600], [1407859200000, 96.1500], [1407945600000, 97.3100], [1408032000000, 97.3500], [1408291200000, 97.5100], [1408377600000, 97.3200], [1408464000000, 97.3200], [1408550400000, 97.7000], [1408636800000, 98.1200], [1408896000000, 98.2800], [1408982400000, 97.9000], [1409068800000, 97.9000], [1409155200000, 97.7100], [1409241600000, 98.1200], [1409500800000, 97.7200], [1409587200000, 97.9100], [1409673600000, 97.1500], [1409760000000, 97.1500], [1409846400000, 97.5700], [1410192000000, 97.5400], [1410278400000, 97.5300], [1410364800000, 97.9200], [1410451200000, 97.9500], [1410710400000, 98.3000], [1410796800000, 98.8700], [1410883200000, 98.8700], [1410969600000, 98.8700], [1411056000000, 98.7000], [1411315200000, 99.2500], [1411401600000, 99.2500], [1411488000000, 99.4400], [1411574400000, 98.8700], [1411660800000, 99.0700], [1411920000000, 98.5000], [1412006400000, 98.5200], [1412697600000, 97.5600], [1412784000000, 97.5600], [1412870400000, 97.5900], [1413129600000, 97.3700], [1413216000000, 97.1800], [1413302400000, 96.9900], [1413388800000, 96.9900], [1413475200000, 96.8500], [1413734400000, 96.6200], [1413820800000, 96.4300], [1413907200000, 96.4300], [1413993600000, 94.5500], [1414080000000, 94.1000], [1414339200000, 94.5900], [1414425600000, 96.4600], [1414512000000, 96.2700], [1414598400000, 96.6400], [1414684800000, 96.7000], [1414944000000, 97.2100], [1415030400000, 97.5800], [1415116800000, 97.5800], [1415203200000, 98.3400], [1415289600000, 96.5300], [1415548800000, 95.9300], [1415635200000, 95.3800], [1415721600000, 95.7600], [1415808000000, 94.8400], [1415894400000, 94.7400], [1416153600000, 95.4000], [1416240000000, 96.6900], [1416326400000, 96.3200], [1416412800000, 96.5100], [1416499200000, 96.1900], [1416758400000, 96.1400], [1416844800000, 95.9600], [1416931200000, 95.5900], [1417017600000, 95.9700], [1417104000000, 95.3000], [1417363200000, 95.4400], [1417449600000, 94.7100], [1417536000000, 95.4400], [1417622400000, 95.6200], [1417708800000, 94.7900], [1417968000000, 94.8900], [1418054400000, 94.7100], [1418140800000, 94.8900], [1418227200000, 95.9900], [1418313600000, 96.0500], [1418572800000, 95.9900], [1418659200000, 95.2600], [1418745600000, 94.7200], [1418832000000, 94.9000], [1418918400000, 95.3400], [1419177600000, 94.9000], [1419264000000, 95.2600], [1419350400000, 95.6400], [1419436800000, 94.9200], [1419523200000, 93.9500], [1419782400000, 93.6600], [1419868800000, 93.6700], [1419955200000, 93.7800], [1420387200000, 93.3000], [1420473600000, 93.1200], [1420560000000, 92.9300], [1420646400000, 92.9500], [1420732800000, 92.5400], [1420992000000, 92.0400], [1421078400000, 92.2200], [1421164800000, 92.9300], [1421251200000, 92.5700], [1421337600000, 92.7600], [1421596800000, 92.4200], [1421683200000, 92.2200], [1421769600000, 92.5700], [1421856000000, 92.2100], [1421942400000, 93.1100], [1422201600000, 93.3000], [1422288000000, 93.3000], [1422374400000, 92.0600], [1422460800000, 91.5200], [1422547200000, 91.3900], [1422806400000, 87.5500], [1422892800000, 88.0900], [1422979200000, 87.9500], [1423065600000, 87.2300], [1423152000000, 84.7600], [1423411200000, 83.2700], [1423497600000, 82.0100], [1423584000000, 85.7900], [1423670400000, 84.7100], [1423756800000, 87.6300], [1424016000000, 88.3900], [1424102400000, 90.2600], [1424793600000, 83.8700], [1424880000000, 83.7200], [1424966400000, 82.3800], [1425225600000, 84.6600], [1425312000000, 80.9500], [1425398400000, 56.6100], [1425484800000, 61.5500], [1425571200000, 59.0100], [1425830400000, 67.7200], [1425916800000, 28.5700], [1426003200000, 47.6300], [1426089600000, 51.1400], [1426176000000, 53.3300], [1426435200000, 50.1800], [1426521600000, 57.5200], [1426608000000, 36.4700], [1426694400000, 1.5700], [1426780800000, 3.5400], [1427040000000, 9.4400], [1427126400000, 11.1500], [1427212800000, 0.7000], [1427299200000, 0.8700], [1427385600000, 0.8400], [1427644800000, 3.3100], [1427731200000, 1.7400], [1427817600000, 7.6700], [1427904000000, 32.2300], [1427990400000, 64.4300], [1428336000000, 45.1200], [1428422400000, 51.9200], [1428508800000, 13.5400], [1428595200000, 60.3000], [1428854400000, 89.6200], [1428940800000, 87.5600], [1429027200000, 60.6200], [1429113600000, 78.6800], [1429200000000, 92.8100], [1429459200000, 95.8400], [1429545600000, 95.8400], [1429632000000, 99.1300], [1429718400000, 99.1300], [1429804800000, 99.1700], [1430064000000, 99.3100], [1430150400000, 99.3100], [1430236800000, 99.3100], [1430323200000, 99.3400], [1430668800000, 99.6500], [1430755200000, 99.6500], [1430841600000, 99.6500], [1430928000000, 99.6500], [1431014400000, 99.6700], [1431273600000, 99.6600], [1431360000000, 98.6300], [1431446400000, 98.2800], [1431532800000, 98.2800], [1431619200000, 98.6800], [1431878400000, 98.3000], [1431964800000, 98.3000], [1432051200000, 97.7900], [1432137600000, 97.7900], [1432224000000, 97.8700], [1432483200000, 97.7900], [1432569600000, 97.6200], [1432656000000, 97.6200], [1432742400000, 97.6200], [1432828800000, 97.7000], [1433088000000, 97.6100], [1433174400000, 97.6100], [1433260800000, 97.6100], [1433347200000, 97.6100], [1433433600000, 97.8700], [1433692800000, 97.6200], [1433779200000, 97.6200], [1433865600000, 97.7900], [1433952000000, 97.7900], [1434038400000, 97.8700], [1434297600000, 98.1400], [1434384000000, 98.4800], [1434470400000, 98.8100], [1434556800000, 98.1300], [1434643200000, 97.3800], [1434988800000, 97.1100], [1435075200000, 98.4700], [1435161600000, 96.7700], [1435248000000, 46.2300], [1435507200000, 3.9100], [1435593600000, 38.1300], [1435680000000, 2.7200], [1435766400000, 1.7000], [1435852800000, 1.6400], [1436112000000, 2.0400], [1436198400000, 1.7000], [1436284800000, 2.2100], [1436371200000, 1.1900], [1436457600000, 0.9800], [1436716800000, 2.0300], [1436803200000, 2.2000], [1436889600000, 2.2000], [1436976000000, 2.0300], [1437062400000, 1.9600], [1437321600000, 2.2000], [1437408000000, 2.2000], [1437494400000, 2.0300], [1437580800000, 1.5200], [1437667200000, 1.4700], [1437926400000, 2.0300], [1438012800000, 2.0300], [1438099200000, 2.0300], [1438185600000, 2.0300], [1438272000000, 1.9600], [1438531200000, 2.0300], [1438617600000, 2.2000], [1438704000000, 2.0300], [1438790400000, 1.8600], [1438876800000, 2.1200], [1439136000000, 1.8500], [1439222400000, 1.8600], [1439308800000, 1.8600], [1439395200000, 1.8600], [1439481600000, 2.1100], [1439740800000, 2.0200], [1439827200000, 1.6800], [1439913600000, 2.0200], [1440000000000, 1.8500], [1440086400000, 2.2800], [1440345600000, 2.1800], [1440432000000, 2.1900], [1440518400000, 2.1900], [1440604800000, 2.1900], [1440691200000, 2.1100], [1440950400000, 2.1800], [1441036800000, 1.6800], [1441123200000, 2.1100], [1441555200000, 1.6800], [1441641600000, 2.1800], [1441728000000, 2.5100], [1441814400000, 2.0100], [1441900800000, 1.6200], [1442160000000, 1.6700], [1442246400000, 1.6800], [1442332800000, 1.6800], [1442419200000, 1.6800], [1442505600000, 1.6200], [1442764800000, 1.6700], [1442851200000, 1.6700], [1442937600000, 1.5100], [1443024000000, 1.6700], [1443110400000, 1.6200], [1443369600000, 1.6600], [1443456000000, 2.1700], [1443542400000, 2.1000], [1444233600000, 80.4300], [1444320000000, 8.0500], [1444579200000, 6.6400], [1444665600000, 2.500], [1444752000000, 1.8200], [1444838400000, 6.6200], [1444924800000, 11.2400], [1445184000000, 2.8200], [1445270400000, 2.1700], [1445356800000, 1.3300], [1445443200000, 1.3300], [1445529600000, 1.2800], [1445788800000, 1.8200], [1445875200000, 3.0000], [1445961600000, 2.0000], [1446048000000, 2.1600], [1446134400000, 4.4900], [1446393600000, 3.1500], [1446480000000, 4.8300], [1446566400000, 2.6600], [1446652800000, 4.4900], [1446739200000, 58.1700], [1446998400000, 5.3100], [1447084800000, 3.1600], [1447171200000, 6.00], [1447257600000, 16.3100], [1447344000000, 3.3700], [1447603200000, 3.8200], [1447689600000, 3.00], [1447776000000, 80.6700], [1447862400000, 93.00], [1447948800000, 96.1500], [1448208000000, 97.6700], [1448294400000, 98.1700], [1448380800000, 98.1700], [1448467200000, 98.1700], [1448553600000, 98.0800], [1448812800000, 97.8500], [1448899200000, 98.0100], [1448985600000, 98.1800], [1449072000000, 98.1800], [1449158400000, 98.4100], [1449417600000, 99.0100], [1449504000000, 98.5100], [1449590400000, 97.5200], [1449676800000, 98.1800], [1449763200000, 96.8200], [1450022400000, 98.3400], [1450108800000, 98.3500], [1450195200000, 98.3500], [1450281600000, 98.6700], [1450368000000, 98.8800], [1450627200000, 97.5300], [1450713600000, 97.1900], [1450800000000, 98.3500], [1450886400000, 97.8500], [1450972800000, 98.5700], [1451232000000, 98.3500], [1451318400000, 97.8500], [1451404800000, 97.7000], [1451491200000, 97.4800], [1451836800000, 97.2100], [1451923200000, 94.9000], [1452009600000, 95.2300], [1452096000000, 86.3500], [1452182400000, 56.4000], [1452441600000, 8.1800], [1452528000000, 7.7200], [1452614400000, 5.4200], [1452700800000, 11.4800], [1452787200000, 5.6900], [1453046400000, 3.8800], [1453132800000, 4.4300], [1453219200000, 4.0900], [1453305600000, 3.9200], [1453392000000, 3.7700], [1453651200000, 3.9000], [1453737600000, 3.4300], [1453824000000, 3.2600], [1453910400000, 3.5800], [1453996800000, 3.7600], [1454256000000, 3.4000], [1454342400000, 3.9000], [1454428800000, 3.9000], [1454515200000, 3.4000], [1454601600000, 3.2800], [1455465600000, 1.7700], [1455552000000, 1.600], [1455638400000, 1.600], [1455724800000, 1.600], [1455811200000, 1.6800], [1456070400000, 1.7400], [1456156800000, 1.7500], [1456243200000, 2.2200], [1456329600000, 2.0600], [1456416000000, 1.8300], [1456675200000, 2.3600], [1456761600000, 2.2100], [1456848000000, 2.9800], [1456934400000, 2.3500], [1457020800000, 1.9600], [1457280000000, 2.0200], [1457366400000, 2.0200], [1457452800000, 2.0200], [1457539200000, 2.0200], [1457625600000, 1.9500], [1457884800000, 2.1700], [1457971200000, 2.1700], [1458057600000, 2.1700], [1458144000000, 2.0200], [1458230400000, 2.2400], [1458489600000, 2.4600], [1458576000000, 2.4700], [1458662400000, 2.4700], [1458748800000, 2.4700], [1458835200000, 2.2300], [1459094400000, 2.4500], [1459180800000, 2.1400], [1459267200000, 2.1400], [1459353600000, 2.1400], [1459440000000, 2.0600], [1459785600000, 2.7400], [1459872000000, 2.6000], [1459958400000, 2.7500], [1460044800000, 2.8000], [1460304000000, 4.7200], [1460390400000, 4.1200], [1460476800000, 5.4800], [1460563200000, 4.1100], [1460649600000, 3.5200], [1460908800000, 3.1600], [1460995200000, 5.7400], [1461081600000, 18.2100], [1461168000000, 32.1200], [1461254400000, 17.0800], [1461513600000, 1.9600], [1461600000000, 15.0800], [1461686400000, 5.5800], [1461772800000, 3.6200], [1461859200000, 1.3100], [1462204800000, 1.0400], [1462291200000, 1.0400], [1462377600000, 1.0400], [1462464000000, 1.2900], [1462723200000, 1.1800], [1462809600000, 1.1900], [1462896000000, 1.0400], [1462982400000, 0.8900], [1463068800000, 0.8600], [1463328000000, 0.7400], [1463414400000, 1.0400], [1463500800000, 1.0400], [1463587200000, 1.0400], [1463673600000, 1.0000], [1463932800000, 1.0300], [1464019200000, 1.0300], [1464105600000, 1.1800], [1464192000000, 1.1700], [1464278400000, 1.2800], [1464537600000, 1.0200], [1464624000000, 1.0200], [1464710400000, 1.6100], [1464796800000, 1.0200], [1464883200000, 1.1300], [1465142400000, 1.3100], [1465228800000, 1.0200], [1465315200000, 1.1300], [1465747200000, 1.0200], [1465833600000, 1.0200], [1465920000000, 1.0200], [1466006400000, 1.0100], [1466092800000, 1.1300], [1466352000000, 1.1500], [1466438400000, 1.0100], [1466524800000, 1.0100], [1466611200000, 1.0000], [1466697600000, 1.1100], [1466956800000, 1.0000], [1467043200000, 0.7100], [1467129600000, 0.7100], [1467216000000, 0.8200], [1467302400000, 0.8200], [1467561600000, 0.7100], [1467648000000, 0.7100], [1467734400000, 0.7000], [1467820800000, 0.8400], [1467907200000, 0.9500], [1468166400000, 0.8400], [1468252800000, 0.7000], [1468339200000, 0.8400], [1468425600000, 0.7000], [1468512000000, 0.5400], [1468771200000, 0.4200], [1468857600000, 0.4200], [1468944000000, 0.4200], [1469030400000, 0.4100], [1469116800000, 0.5300], [1469376000000, 0.4100], [1469462400000, 0.4100], [1469548800000, 0.4100], [1469635200000, 0.4100], [1469721600000, 0.5300], [1469980800000, 0.4100], [1470067200000, 0.4100], [1470153600000, 0.5500], [1470240000000, 0.4100], [1470326400000, 0.6600], [1470585600000, 0.4100], [1470672000000, 0.4100], [1470758400000, 0.4100], [1470844800000, 0.4100], [1470931200000, 1.1800], [1471190400000, 59.3200], [1471276800000, 32.4800], [1471363200000, 29.8200], [1471449600000, 77.9700], [1471536000000, 83.9800], [1471795200000, 78.3400], [1471881600000, 56.1700], [1471968000000, 33.2400], [1472054400000, 31.7300], [1472140800000, 23.2600], [1472400000000, 16.6700], [1472486400000, 18.9700], [1472572800000, 1.4600], [1472659200000, 0.9300], [1472745600000, 1.2800], [1473004800000, 1.4500], [1473091200000, 2.7700], [1473177600000, 36.0600], [1473264000000, 45.1400], [1473350400000, 35.4100], [1473609600000, 6.8300], [1473696000000, 52.5600], [1473782400000, 50.1900], [1474214400000, 18.2400], [1474300800000, 16.0600], [1474387200000, 21.2400], [1474473600000, 18.2600], [1474560000000, 9.1500], [1474819200000, 1.5500], [1474905600000, 1.6800], [1474992000000, 1.6700], [1475078400000, 2.0500], [1475164800000, 2.1100], [1476028800000, 0.7600], [1476115200000, 1.7900], [1476201600000, 0.7700], [1476288000000, 0], [1476374400000, 0], [1476633600000, 0], [1476720000000, 0.2500], [1476806400000, 0.2500], [1476892800000, 0.5000], [1476979200000, 0.4800], [1477238400000, 1.6200], [1477324800000, 3.7400], [1477411200000, 2.8700], [1477497600000, 5.9500], [1477584000000, 41.9200], [1477843200000, 85.5700], [1477929600000, 91.5900], [1478016000000, 80.5900], [1478102400000, 81.2800], [1478188800000, 76.4800], [1478448000000, 80.0500], [1478534400000, 77.1100], [1478620800000, 45.5400], [1478707200000, 69.9600], [1478793600000, 78.8900], [1479052800000, 73.2600], [1479139200000, 0.8500], [1479225600000, 0.9700], [1479312000000, 2.4200], [1479398400000, 0.1200], [1479657600000, 0.3600], [1479744000000, 4.4800], [1479830400000, 20.4600], [1479916800000, 22.5700], [1480003200000, 65.8600], [1480262400000, 67.7000], [1480348800000, 53.5700], [1480435200000, 22.5900], [1480521600000, 27.5300], [1480608000000, 5.7600], [1480867200000, 0], [1480953600000, 0.2300], [1481040000000, 0.9200], [1481126400000, 0.9300], [1481212800000, 0.6700], [1481472000000, 0.8000], [1481558400000, 1.1500], [1481644800000, 1.1500], [1481731200000, 1.6000], [1481817600000, 1.5500], [1482076800000, 1.5900], [1482163200000, 1.5800], [1482249600000, 1.5800], [1482336000000, 1.3500], [1482422400000, 1.8600], [1482681600000, 2.2400], [1482768000000, 2.2300], [1482854400000, 2.0100], [1482940800000, 1.8900], [1483027200000, 1.9500], [1483372800000, 2.00], [1483459200000, 1.7800], [1483545600000, 1.8900], [1483632000000, 1.8400], [1483891200000, 1.6700], [1483977600000, 1.7800], [1484064000000, 1.7800], [1484150400000, 1.8900], [1484236800000, 1.8400], [1484496000000, 1.4400], [1484582400000, 1.7700], [1484668800000, 1.2100], [1484755200000, 1.5400], [1484841600000, 1.2800], [1485100800000, 1.0900], [1485187200000, 1.1000], [1485273600000, 1.2000], [1485360000000, 0.9500], [1486051200000, 1.4500], [1486310400000, 1.2700], [1486396800000, 1.2600], [1486483200000, 1.1500], [1486569600000, 1.5700], [1486656000000, 1.5300], [1486915200000, 1.4400], [1487001600000, 1.3400], [1487088000000, 0.9300], [1487174400000, 0.8200], [1487260800000, 0.900], [1487520000000, 0.9100], [1487606400000, 0.7100], [1487692800000, 0.7100], [1487779200000, 0.7000], [1487865600000, 0.5900], [1488124800000, 0.7000], [1488211200000, 0.6900], [1488297600000, 0.7900], [1488384000000, 0.7800], [1488470400000, 0.7700], [1488729600000, 1.4600], [1488816000000, 1.1500], [1488902400000, 1.1500], [1488988800000, 1.3400], [1489075200000, 1.4100], [1489334400000, 4.1000], [1489420800000, 3.0500], [1489507200000, 6.6500], [1489593600000, 2.4500], [1489680000000, 2.0300], [1489939200000, 8.1200], [1490025600000, 2.4200], [1490112000000, 2.4900], [1490198400000, 2.3100], [1490284800000, 1.9100], [1490544000000, 1.1800], [1490630400000, 1.8200], [1490716800000, 2.6400], [1490803200000, 1.7300], [1490889600000, 2.0600], [1491321600000, 1.9000], [1491408000000, 2.8900], [1491494400000, 2.6600], [1491753600000, 2.9700], [1491840000000, 4.5900], [1491926400000, 11.1600], [1492012800000, 13.8400], [1492099200000, 10.5300], [1492358400000, 16.0400], [1492444800000, 22.3400], [1492531200000, 18.3500], [1492617600000, 17.8900], [1492704000000, 20.1700], [1492963200000, 19.6900], [1493049600000, 18.5600], [1493136000000, 22.0700], [1493222400000, 21.3700], [1493308800000, 24.7000], [1493654400000, 24.4100], [1493740800000, 54.9000], [1493827200000, 50.9600], [1493913600000, 54.3300], [1494172800000, 2.1800], [1494259200000, 1.5700], [1494345600000, 1.4800], [1494432000000, 1.4800], [1494518400000, 1.4500], [1494777600000, 1.6500], [1494864000000, 1.3000], [1494950400000, 1.4600], [1495036800000, 1.5500], [1495123200000, 1.3500], [1495382400000, 1.0300], [1495468800000, 1.3700], [1495555200000, 2.4100], [1495641600000, 1.4600], [1495728000000, 1.6000], [1496160000000, 1.7900], [1496246400000, 2.0500], [1496332800000, 2.1700], [1496592000000, 2.4500], [1496678400000, 2.0300], [1496764800000, 1.6800], [1496851200000, 1.7600], [1496937600000, 1.7200], [1497196800000, 2.1500], [1497283200000, 2.0600], [1497369600000, 2.3100], [1497456000000, 2.3900], [1497542400000, 2.4200], [1497801600000, 3.8500], [1497888000000, 7.9600], [1497974400000, 8.5200], [1498060800000, 10.6600], [1498147200000, 12.8200], [1498406400000, 19.4600], [1498492800000, 21.7400], [1498579200000, 16.2600], [1498665600000, 6.1700], [1498752000000, 6.1100], [1499011200000, 7.4400], [1499097600000, 9.1400], [1499184000000, 17.4200], [1499270400000, 20.1800], [1499356800000, 45.1200], [1499616000000, 21.9400], [1499702400000, 14.2400], [1499788800000, 5.3400], [1499875200000, 10.0100], [1499961600000, 23.4000], [1500220800000, 15.6800], [1500307200000, 16.3500], [1500393600000, 68.00], [1500480000000, 86.2400], [1500566400000, 92.3700], [1500825600000, 93.4600], [1500912000000, 86.3600], [1500998400000, 85.5700], [1501084800000, 87.6400], [1501171200000, 90.5000], [1501430400000, 93.6100], [1501516800000, 93.6700], [1501603200000, 94.0700], [1501689600000, 91.3600], [1501776000000, 91.4200], [1502035200000, 88.1300], [1502121600000, 95.8300], [1502208000000, 96.1500], [1502294400000, 95.9900], [1502380800000, 95.8200], [1502640000000, 95.9100], [1502726400000, 95.6700], [1502812800000, 95.6000], [1502899200000, 95.8300], [1502985600000, 95.9800], [1503244800000, 96.3200], [1503331200000, 96.6400], [1503417600000, 96.0200], [1503504000000, 95.6200], [1503590400000, 96.1000], [1503849600000, 96.0300], [1503936000000, 96.2600], [1504022400000, 96.1800], [1504108800000, 96.5700], [1504195200000, 96.3300], [1504454400000, 96.1100], [1504540800000, 96.3500], [1504627200000, 96.6800], [1504713600000, 96.9100], [1504800000000, 96.8300], [1505059200000, 96.7700], [1505145600000, 96.2200], [1505232000000, 96.5300], [1505318400000, 96.3800], [1505404800000, 95.8500], [1505664000000, 95.4700], [1505750400000, 94.7800], [1505836800000, 92.6700], [1505923200000, 93.3300], [1506009600000, 91.2300], [1506268800000, 78.4200], [1506355200000, 50.0], [1506441600000, 78.4800], [1506528000000, 81.9900], [1506614400000, 95.2800], [1507478400000, 89.0700], [1507564800000, 93.0100], [1507651200000, 93.4000], [1507737600000, 95.2000], [1507824000000, 94.5200], [1508083200000, 95.3500], [1508169600000, 95.9700], [1508256000000, 95.1000], [1508342400000, 90.2800], [1508428800000, 83.3600], [1508688000000, 14.2600], [1508774400000, 10.3100], [1508860800000, 79.9700], [1508947200000, 73.8600], [1509033600000, 81.1700], [1509292800000, 9.9600], [1509379200000, 5.8600], [1509465600000, 3.6300], [1509552000000, 2.9300], [1509638400000, 2.8700], [1509897600000, 2.9100], [1509984000000, 3.0000], [1510070400000, 4.3100], [1510156800000, 7.4800], [1510243200000, 21.7100], [1510502400000, 79.4700], [1510588800000, 36.8300], [1510675200000, 8.3100], [1510761600000, 7.6900], [1510848000000, 4.3300], [1511107200000, 1.2900], [1511193600000, 1.2200], [1511280000000, 0.8400], [1511366400000, 1.2100], [1511452800000, 0.8900], [1511712000000, 0.9900], [1511798400000, 1.0600], [1511884800000, 1.2100], [1511971200000, 0.9100], [1512057600000, 1.0300], [1512316800000, 1.0600], [1512403200000, 0.8300], [1512489600000, 0.9800], [1512576000000, 1.0600], [1512662400000, 0.8100], [1512921600000, 0.9800], [1513008000000, 0.9100], [1513094400000, 0.6100], [1513180800000, 0.9100], [1513267200000, 0.8900], [1513526400000, 1.0600], [1513612800000, 0.9800], [1513699200000, 1.0600], [1513785600000, 0.9800], [1513872000000, 1.1100], [1514131200000, 1.1300], [1514217600000, 0.8300], [1514304000000, 0.8300], [1514390400000, 0.9100], [1514476800000, 0.8900], [1514822400000, 0.9100], [1514908800000, 1.1300], [1514995200000, 0.8300], [1515081600000, 1.3300], [1515340800000, 1.7400], [1515427200000, 0.8300], [1515513600000, 0.7600], [1515600000000, 0.8300], [1515686400000, 0.4400], [1515945600000, 0.6800], [1516032000000, 0.5300], [1516118400000, 0.5300], [1516204800000, 0.5300], [1516291200000, 0.5900], [1516550400000, 0.4600], [1516636800000, 1.6800], [1516723200000, 2.0600], [1516809600000, 1.3000], [1516896000000, 1.4900], [1517155200000, 0.3800], [1517241600000, 0.3800], [1517328000000, 0.3800], [1517414400000, 0.3800], [1517500800000, 0.2200], [1517760000000, 0.3800], [1517846400000, 0.2300], [1517932800000, 0.1500], [1518019200000, 0.2300], [1518105600000, 0.2200], [1518364800000, 0.1500], [1518451200000, 0.3100], [1518537600000, 0.3700], [1519228800000, 0.8400], [1519315200000, 0.8200], [1519574400000, 1.0600], [1519660800000, 0.7600], [1519747200000, 0.7600], [1519833600000, 0.7600], [1519920000000, 0.7400], [1520179200000, 1.9000], [1520265600000, 3.4900], [1520352000000, 2.0500], [1520438400000, 1.9700], [1520524800000, 2.0800], [1520784000000, 2.8100], [1520870400000, 2.4300], [1520956800000, 1.7500], [1521043200000, 1.8200], [1521129600000, 1.7100], [1521388800000, 1.6700], [1521475200000, 1.9800], [1521561600000, 1.8300], [1521648000000, 1.5200], [1521734400000, 1.0500], [1521993600000, 1.3000], [1522080000000, 1.6800], [1522166400000, 1.3700], [1522252800000, 1.2200], [1522339200000, 1.4200], [1522598400000, 1.6000], [1522684800000, 1.1400], [1522771200000, 1.0400], [1523203200000, 1.1400], [1523289600000, 1.4500], [1523376000000, 1.6000], [1523462400000, 1.6000], [1523548800000, 1.4200], [1523808000000, 1.4500], [1523894400000, 1.4500], [1523980800000, 1.9200], [1524067200000, 1.3800], [1524153600000, 1.1200], [1524412800000, 0.9200], [1524499200000, 1.1500], [1524585600000, 1.1500], [1524672000000, 0.8400], [1524758400000, 0.7500], [1525190400000, 1.2200], [1525276800000, 1.3000], [1525363200000, 1.7200], [1525622400000, 3.5200], [1525708800000, 8.1100], [1525795200000, 84.7700], [1525881600000, 76.3600], [1525968000000, 41.0900], [1526227200000, 2.3700], [1526313600000, 3.0600], [1526400000000, 2.6800], [1526486400000, 2.1500], [1526572800000, 2.7800], [1526832000000, 3.6900], [1526918400000, 3.0000], [1527004800000, 2.4600], [1527091200000, 1.8400], [1527177600000, 1.3500], [1527436800000, 1.6100], [1527523200000, 1.0800], [1527609600000, 1.0800], [1527696000000, 1.0800], [1527782400000, 0.9000], [1528041600000, 0.6200], [1528128000000, 0.4600], [1528214400000, 0.3100], [1528300800000, 0.3100], [1528387200000, 0.3800], [1528646400000, 0.3100], [1528732800000, 0.3100], [1528819200000, 0.3100], [1528905600000, 0.3800], [1528992000000, 0.3000], [1529337600000, 0.3100], [1529424000000, 0.3100], [1529510400000, 0.3800], [1529596800000, 0.3000], [1529856000000, 0.3100], [1529942400000, 0.3100], [1530028800000, 0.3100], [1530115200000, 0.3900], [1530201600000, 0.6000], [1530460800000, 0.3100], [1530547200000, 0.3800], [1530633600000, 0.4600], [1530720000000, 0.4600], [1530806400000, 0.3000], [1531065600000, 0.3100], [1531152000000, 0.3100], [1531238400000, 0.3100], [1531324800000, 0.3100], [1531411200000, 0.3000], [1531670400000, 0.3100], [1531756800000, 0.6200], [1531843200000, 0.3100], [1531929600000, 0.3800], [1532016000000, 1.2800], [1532275200000, 3.1500], [1532361600000, 0.6900], [1532448000000, 0.7700], [1532534400000, 0.7700], [1532620800000, 0.6000], [1532880000000, 0.3800], [1532966400000, 0.8500], [1533052800000, 0.6900], [1533139200000, 1.3900], [1533225600000, 0.5300], [1533484800000, 0.6900], [1533571200000, 1.0000], [1533657600000, 0.8500], [1533744000000, 0.9300], [1533830400000, 1.3600], [1534089600000, 2.2400], [1534176000000, 2.3900], [1534262400000, 1.1600], [1534348800000, 1.4700], [1534435200000, 1.2800], [1534694400000, 1.3100], [1534780800000, 1.0800], [1534867200000, 0.9200], [1534953600000, 1.2300], [1535040000000, 1.5800], [1535299200000, 3.8500], [1535385600000, 5.0800], [1535472000000, 6.5400], [1535558400000, 8.6900], [1535644800000, 7.4500], [1535904000000, 15.4100], [1535990400000, 47.3600], [1536076800000, 16.0200], [1536163200000, 16.7300], [1536249600000, 9.9600], [1536508800000, 7.5500], [1536595200000, 11.9000], [1536681600000, 7.7000], [1536768000000, 6.6300], [1536854400000, 3.5000], [1537113600000, 3.3300], [1537200000000, 4.5500], [1537286400000, 54.6700], [1537372800000, 37.8600], [1537459200000, 76.1700], [1537804800000, 19.2000], [1537891200000, 22.6800], [1537977600000, 25.3200], [1538064000000, 64.3200], [1538928000000, 7.4700], [1539014400000, 1.8100], [1539100800000, 1.8900], [1539187200000, 2.3400], [1539273600000, 2.0000], [1539532800000, 1.5900], [1539619200000, 1.1300], [1539705600000, 1.0600], [1539792000000, 0.9900], [1539878400000, 1.0400], [1540137600000, 1.0600], [1540224000000, 1.0600], [1540310400000, 0.9800], [1540396800000, 0.9800], [1540483200000, 1.2600], [1540742400000, 1.0600], [1540828800000, 1.1300], [1540915200000, 1.1400], [1541001600000, 1.4400], [1541088000000, 1.9200], [1541347200000, 3.6700], [1541433600000, 2.5500], [1541520000000, 1.3500], [1541606400000, 1.4200], [1541692800000, 1.2500], [1541952000000, 1.3400], [1542038400000, 1.2700], [1542124800000, 1.3500], [1542211200000, 1.6400], [1542297600000, 1.4600], [1542556800000, 2.9700], [1542643200000, 1.6300], [1542729600000, 1.6300], [1542816000000, 1.5600], [1542902400000, 1.1700], [1543161600000, 1.2500], [1543248000000, 0.7400], [1543334400000, 0.8900], [1543420800000, 0.8100], [1543507200000, 1.0100], [1543766400000, 1.3900], [1543852800000, 1.1700], [1543939200000, 1.2500], [1544025600000, 1.3800], [1544112000000, 1.3600], [1544371200000, 2.7600], [1544457600000, 2.8400], [1544544000000, 2.6300], [1544630400000, 5.7500], [1544716800000, 9.1200], [1544976000000, 9.6700], [1545062400000, 6.7300], [1545148800000, 4.4800], [1545235200000, 3.5400], [1545321600000, 4.0500], [1545580800000, 4.8300], [1545667200000, 4.9100], [1545753600000, 3.8100], [1545840000000, 3.5300], [1545926400000, 2.3400], [1546358400000, 2.8000], [1546444800000, 2.8100], [1546531200000, 3.0500], [1546790400000, 4.3900], [1546876800000, 5.4000], [1546963200000, 17.6500], [1547049600000, 35.1800], [1547136000000, 94.1100], [1547395200000, 74.6400], [1547481600000, 94.7600], [1547568000000, 98.2800], [1547654400000, 95.6900], [1547740800000, 99.4300], [1548000000000, 97.9200], [1548086400000, 69.5100], [1548172800000, 91.1900], [1548259200000, 98.2800], [1548345600000, 99.1600], [1548604800000, 99.0700], [1548691200000, 99.2900], [1548777600000, 99.2900], [1548864000000, 99.1500], [1548950400000, 99.0200], [1549814400000, 99.3000], [1549900800000, 99.0900], [1549987200000, 99.3700], [1550073600000, 99.3700], [1550160000000, 99.0400], [1550419200000, 99.0300], [1550505600000, 98.9600], [1550592000000, 99.1700], [1550678400000, 99.2400], [1550764800000, 99.2500], [1551024000000, 99.1000], [1551110400000, 99.1000], [1551196800000, 99.1100], [1551283200000, 99.3200], [1551369600000, 99.3300], [1551628800000, 99.2500], [1551715200000, 99.2600], [1551801600000, 98.9900], [1551888000000, 98.8600], [1551974400000, 99.1400], [1552233600000, 99.3300], [1552320000000, 99.5300], [1552406400000, 99.3400], [1552492800000, 99.4000], [1552579200000, 99.4100], [1552838400000, 99.2700], [1552924800000, 99.2800], [1553011200000, 99.1400], [1553097600000, 99.0100], [1553184000000, 99.1600], [1553443200000, 99.0900], [1553529600000, 98.9600], [1553616000000, 99.0300], [1553702400000, 99.0300], [1553788800000, 99.1700], [1554048000000, 99.0900], [1554134400000, 98.9000], [1554220800000, 99.1000], [1554307200000, 99.1100], [1554652800000, 98.9700], [1554739200000, 98.9700], [1554825600000, 98.7800], [1554912000000, 98.9100], [1554998400000, 98.8600], [1555257600000, 98.2700], [1555344000000, 98.5200], [1555430400000, 98.5300], [1555516800000, 98.4100], [1555603200000, 98.6800], [1555862400000, 98.4100], [1555948800000, 98.1600], [1556035200000, 98.1700], [1556121600000, 97.8700], [1556208000000, 97.9500], [1556467200000, 97.8100], [1556553600000, 97.7800], [1557072000000, 90.2400], [1557158400000, 90.3200], [1557244800000, 91.3100], [1557331200000, 92.8000], [1557417600000, 97.1100], [1557676800000, 90.1500], [1557763200000, 87.8200], [1557849600000, 94.4300], [1557936000000, 93.3800], [1558022400000, 87.9700], [1558281600000, 37.7900], [1558368000000, 50.5900], [1558454400000, 4.9200], [1558540800000, 2.8900], [1558627200000, 2.1400], [1558886400000, 2.2600], [1558972800000, 1.8400], [1559059200000, 1.5300], [1559145600000, 0.8600], [1559232000000, 0.6100], [1559491200000, 0.3700], [1559577600000, 0.3100], [1559664000000, 0.1800], [1559750400000, 0.1200], [1560096000000, 0.1200], [1560182400000, 0.3000], [1560268800000, 0.2400], [1560355200000, 0.3000], [1560441600000, 0.1800], [1560700800000, 0.3000], [1560787200000, 0.1800], [1560873600000, 0.4200], [1560960000000, 0.5400], [1561046400000, 0.6500], [1561305600000, 0.7700], [1561392000000, 0.8900], [1561478400000, 1.1800], [1561564800000, 1.0700], [1561651200000, 0.6500], [1561910400000, 1.1200], [1561996800000, 1.0000], [1562083200000, 0.2900], [1562169600000, 0.1800], [1562256000000, 0.1800], [1562515200000, 0.2900], [1562601600000, 0.1800], [1562688000000, 0.2400], [1562774400000, 0.2300], [1562860800000, 0.2300], [1563120000000, 0.3500], [1563206400000, 0.4100], [1563292800000, 0.5200], [1563379200000, 0.4100], [1563465600000, 0.4600], [1563724800000, 0.4100], [1563811200000, 0.6400], [1563897600000, 0.6400], [1563984000000, 1.7900], [1564070400000, 2.5300], [1564329600000, 2.7100], [1564416000000, 2.8200], [1564502400000, 3.2800], [1564588800000, 2.9900], [1564675200000, 1.3200], [1564934400000, 0.4000], [1565020800000, 5.5200], [1565107200000, 3.9700], [1565193600000, 40.1700], [1565280000000, 9.3000], [1565539200000, 1.6600], [1565625600000, 4.9300], [1565712000000, 5.5500], [1565798400000, 2.6300], [1565884800000, 5.5700], [1566144000000, 99.0900], [1566230400000, 98.5700], [1566316800000, 97.6100], [1566403200000, 95.1700], [1566489600000, 96.6200], [1566748800000, 95.4800], [1566835200000, 96.1100], [1566921600000, 95.7700], [1567008000000, 95.3200], [1567094400000, 97.0400], [1567353600000, 97.8600], [1567440000000, 99.0400], [1567526400000, 99.3800], [1567612800000, 99.6600], [1567699200000, 99.6700], [1567958400000, 99.6600], [1568044800000, 99.6600], [1568131200000, 99.6600], [1568217600000, 99.7200], [1568563200000, 99.7800], [1568649600000, 99.6700], [1568736000000, 99.6700], [1568822400000, 99.500], [1568908800000, 98.6700], [1569168000000, 97.4400], [1569254400000, 96.6700], [1569340800000, 96.9500], [1569427200000, 97.2400], [1569513600000, 98.0800], [1569772800000, 97.9700], [1570464000000, 98.9600], [1570550400000, 98.9600], [1570636800000, 98.9600], [1570723200000, 99.4600], [1570982400000, 99.4500], [1571068800000, 98.9100], [1571155200000, 98.2500], [1571241600000, 97.4300], [1571328000000, 97.5600], [1571587200000, 96.7300], [1571673600000, 97.4400], [1571760000000, 97.0600], [1571846400000, 97.0700], [1571932800000, 96.9200], [1572192000000, 97.1300], [1572278400000, 97.2300], [1572364800000, 94.5200], [1572451200000, 92.2000], [1572537600000, 95.6900], [1572796800000, 97.0200], [1572883200000, 99.0300], [1572969600000, 98.8700], [1573056000000, 99.0800], [1573142400000, 98.1200], [1573401600000, 97.5800], [1573488000000, 96.0200], [1573574400000, 95.6400], [1573660800000, 96.9000], [1573747200000, 96.1700], [1574006400000, 95.9400], [1574092800000, 3.5800], [1574179200000, 2.8300], [1574265600000, 2.6600], [1574352000000, 3.2300], [1574611200000, 3.4500], [1574697600000, 56.0700], [1574784000000, 1.8000], [1574870400000, 4.4900], [1574956800000, 8.2500], [1575216000000, 2.2100], [1575302400000, 3.6800], [1575388800000, 1.4700], [1575475200000, 1.0500], [1575561600000, 0.7300], [1575820800000, 0.5700], [1575907200000, 0.6800], [1575993600000, 0.6200], [1576080000000, 0.5200], [1576166400000, 1.1400], [1576425600000, 2.2800], [1576512000000, 95.3600], [1576598400000, 96.4400], [1576684800000, 92.0700], [1576771200000, 92.2700], [1577030400000, 93.3700], [1577116800000, 94.5500], [1577203200000, 95.5800], [1577289600000, 97.2900], [1577376000000, 95.5800], [1577635200000, 98.8800], [1577721600000, 98.7800], [1577894400000, 98.5200], [1577980800000, 98.2200], [1578240000000, 97.6000], [1578326400000, 97.1900], [1578412800000, 97.0400], [1578499200000, 97.2900], [1578585600000, 96.9500], [1578844800000, 95.9100], [1578931200000, 94.9900], [1579017600000, 96.0200], [1579104000000, 96.3200], [1579190400000, 97.0100], [1579449600000, 98.2200], [1579536000000, 98.2700], [1579622400000, 98.1700], [1579708800000, 97.6800], [1580659200000, 1.5600], [1580745600000, 15.3400], [1580832000000, 14.6100], [1580918400000, 83.6100], [1581004800000, 87.2000], [1581264000000, 90.9000], [1581350400000, 93.9600], [1581436800000, 95.1100], [1581523200000, 94.3700], [1581609600000, 94.3300], [1581868800000, 96.5100], [1581955200000, 95.6200], [1582041600000, 95.6900], [1582128000000, 97.8300], [1582214400000, 98.1300], [1582473600000, 97.8800], [1582560000000, 97.7300], [1582646400000, 98.9700], [1582732800000, 98.9700], [1582819200000, 97.9000], [1583078400000, 98.3300], [1583164800000, 97.9500], [1583251200000, 98.6800], [1583337600000, 99.0300], [1583424000000, 99.0300], [1583683200000, 98.3400], [1583769600000, 99.1700], [1583856000000, 98.9300], [1583942400000, 99.0300], [1584028800000, 97.9200], [1584288000000, 90.1700], [1584374400000, 7.4400], [1584460800000, 3.1900], [1584547200000, 4.3300], [1584633600000, 34.1200], [1584892800000, 7.7900], [1584979200000, 7.1100], [1585065600000, 38.7100], [1585152000000, 3.0100], [1585238400000, 5.4200], [1585497600000, 0.5200], [1585584000000, 0.3800], [1585670400000, 0.3300], [1585756800000, 0.3800], [1585843200000, 0.4700], [1586188800000, 1.3300], [1586275200000, 2.1300], [1586361600000, 1.5200], [1586448000000, 1.3700], [1586707200000, 1.0400], [1586793600000, 1.1800], [1586880000000, 0.8500], [1586966400000, 0.9500], [1587052800000, 0.7500], [1587312000000, 0.3300], [1587398400000, 0.3300], [1587484800000, 0.1400], [1587571200000, 0.6100], [1587657600000, 0.3700], [1587916800000, 0.6500], [1588003200000, 0.6100], [1588089600000, 1.0300], [1588176000000, 1.3500], [1588694400000, 52.7600], [1588780800000, 9.5700], [1588867200000, 30.5200], [1589126400000, 4.1100], [1589212800000, 2.6200], [1589299200000, 3.0400], [1589385600000, 2.5700], [1589472000000, 2.4700], [1589731200000, 1.5400], [1589817600000, 0.4700], [1589904000000, 0.2800], [1589990400000, 0.3700], [1590076800000, 0.3700], [1590336000000, 0.4200], [1590422400000, 0.2800], [1590508800000, 0.2800], [1590595200000, 0.2800], [1590681600000, 0.2800], [1590940800000, 0.5100], [1591027200000, 0.4200], [1591113600000, 0.2800], [1591200000000, 0.1900], [1591286400000, 0.1800], [1591545600000, 0.1800], [1591632000000, 0.2300], [1591718400000, 0.0900], [1591804800000, 0.0900], [1591891200000, 0.0900], [1592150400000, 0.0900], [1592236800000, 0.3700], [1592323200000, 0.3700], [1592409600000, 0.5900], [1592496000000, 7.5200], [1592755200000, 3.6900], [1592841600000, 78.1400], [1592928000000, 77.1700], [1593360000000, 1.2700], [1593446400000, 75.1900], [1593532800000, 93.2200], [1593619200000, 99.4100], [1593705600000, 99.8200], [1593964800000, 99.9500], [1594051200000, 99.6800], [1594137600000, 99.8200], [1594224000000, 99.7700], [1594310400000, 99.5500], [1594569600000, 99.2300], [1594656000000, 99.3700], [1594742400000, 99.4600], [1594828800000, 99.5500], [1594915200000, 99.3700], [1595174400000, 99.5100], [1595260800000, 99.4600], [1595347200000, 99.6900], [1595433600000, 99.5500], [1595520000000, 99.6500], [1595779200000, 99.5500], [1595865600000, 99.4700], [1595952000000, 99.4300], [1596038400000, 99.3400], [1596124800000, 99.3400], [1596384000000, 99.0300], [1596470400000, 99.1600], [1596556800000, 98.9400], [1596643200000, 99.3400], [1596729600000, 99.2100], [1596988800000, 99.2500], [1597075200000, 99.4300], [1597161600000, 99.5100], [1597248000000, 99.7800], [1597334400000, 99.7800], [1597593600000, 99.7800], [1597680000000, 99.7800], [1597766400000, 99.7800], [1597852800000, 99.7800], [1597939200000, 99.7800], [1598198400000, 99.7800]];
/*规模变动 mom-较上期环比*/
var Data_fluctuationScale = {
    "categories": ["2019-06-30", "2019-09-30", "2019-12-31", "2020-03-31", "2020-06-30"],
    "series": [{"y": 0.42, "mom": "-12.35%"}, {"y": 0.46, "mom": "9.87%"}, {"y": 0.46, "mom": "0.47%"}, {
        "y": 0.50,
        "mom": "9.01%"
    }, {"y": 0.43, "mom": "-15.42%"}]
};
/*持有人结构*/
var Data_holderStructure = {
    "series": [{"name": "机构持有比例", "data": [0.0, 38.26, 36.95, 27.15]}, {
        "name": "个人持有比例",
        "data": [100.0, 61.74, 63.05, 72.85]
    }, {"name": "内部持有比例", "data": [0.0, 0.0, 0.0049, 0.0051]}],
    "categories": ["2018-06-30", "2018-12-31", "2019-06-30", "2019-12-31"]
};
/*资产配置*/
var Data_assetAllocation = {
    "series": [{
        "name": "股票占净比",
        "type": null,
        "data": [19.73, 20.11, 19.23, 19.8],
        "yAxis": 0
    }, {"name": "债券占净比", "type": null, "data": [109.7, 112.9, 116.59, 112.59], "yAxis": 0}, {
        "name": "现金占净比",
        "type": null,
        "data": [3.56, 5.21, 4.29, 6.04],
        "yAxis": 0
    }, {"name": "净资产", "type": "line", "data": [1.5133865007, 1.3744185412, 1.3330553692, 0.9489050904], "yAxis": 1}],
    "categories": ["2019-09-30", "2019-12-31", "2020-03-31", "2020-06-30"]
};
/*业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']*/
var Data_performanceEvaluation = {
    "avr": "55.00",
    "categories": ["选证能力", "收益率", "抗风险", "稳定性", "管理规模"],
    "dsc": ["反映基金挑选证券而实现风险调整\u003cbr\u003e后获得超额收益的能力", "根据阶段收益评分，反映基金的盈利能力", "反映基金投资收益的回撤情况", "反映基金投资收益的波动性", "根据基金的资产规模评分"],
    "data": [60.0, 100.0, 10.0, 10.0, 50.0]
};
/*现任基金经理*/
var Data_currentFundManager = [{
    "id": "30197761",
    "pic": "https://pdf.dfcfw.com/pdf/H8_JPG30197761_1.jpg",
    "name": "彭海平",
    "star": 3,
    "workTime": "7年又231天",
    "fundSize": "9.05亿(5只基金)",
    "power": {
        "avr": "47.60",
        "categories": ["经验值", "收益率", "抗风险", "稳定性", "择时能力"],
        "dsc": ["反映基金经理从业年限和管理基金的经验", "根据基金经理投资的阶段收益评分，反映\u003cbr\u003e基金经理投资的盈利能力", "反映基金经理投资的回撤控制能力", "反映基金经理投资收益的波动", "反映基金经理根据对市场的判断，通过\u003cbr\u003e调整仓位及配置而跑赢业绩的基准能力"],
        "data": [87.0, 14.90, 74.50, 32.70, 84.30],
        "jzrq": "2020-08-21"
    },
    "profit": {
        "categories": ["任期收益", "同类平均", "沪深300"],
        "series": [{
            "data": [{"name": null, "color": "#7cb5ec", "y": 44.4612}, {
                "name": null,
                "color": "#414c7b",
                "y": 13.46
            }, {"name": null, "color": "#f7a35c", "y": 48.53}]
        }],
        "jzrq": "2020-08-21"
    }
}];
/*申购赎回*/
var Data_buySedemption = {
    "series": [{"name": "期间申购", "data": [0.22, 0.12, 0.44, 0.07]}, {
        "name": "期间赎回",
        "data": [0.19, 0.17, 0.36, 0.18]
    }, {"name": "总份额", "data": [0.61, 0.57, 0.65, 0.54]}],
    "categories": ["2019-09-30", "2019-12-31", "2020-03-31", "2020-06-30"]
};
/*同类型基金涨幅榜（页面底部通栏）*/
var swithSameType = [['006030_南方昌元转债A_9.70', '006031_南方昌元C_9.67', '005246_国泰可转债债券_8.92', '006482_广发可转债债券A_7.75', '006483_广发可转债债券C_7.72'], ['006030_南方昌元转债A_34.68', '006031_南方昌元C_34.52', '000003_中海可转债债券A_28.23', '000004_中海可转债债券C_28.13', '050019_博时转债增强债券A_27.12'], ['360013_光大信用添益债券A_19.95', '360014_光大信用添益债券C_19.79', '006482_广发可转债债券A_18.87', '006483_广发可转债债券C_18.63', '006030_南方昌元转债A_17.88'], ['000297_鹏华可转债债券_44.42', '001045_华夏可转债增强债券A_37.54', '710301_富安达增强收益债券A_36.68', '710302_富安达增强收益债券C_36.09', '005461_南方希元转债_35.68'], ['320021_诺安双利债券发起_74.00', '000297_鹏华可转债债券_58.76', '470058_汇添富可转换债券A_50.64', '002459_华夏鼎利债券发起式A_49.85', '002460_华夏鼎利债券发起式C_49.48']];