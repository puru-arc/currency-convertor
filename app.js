
// const populate = async ( value, currency)=>{
//     let mystr ="";
//     // url= "https://api.currencyapi.com/v3/latest?apikey=cur_live_XGa9yBXgWx2j3Ew4ZVO8lNTAbIwIeENaXW4YdgBr&base_currency=" + currency;
//     // let response=  await fetch(url)
//     // let rjson = await response.json()

//     let rjson = `{
//         "meta": {
//           "last_updated_at": "2024-04-01T23:59:59Z"
//         },
//         "data": {
//           "ADA": {
//             "code": "ADA",
//             "value": 1.6041929724
//           },
//           "AED": {
//             "code": "AED",
//             "value": 3.6722703718
//           },
//           "AFN": {
//             "code": "AFN",
//             "value": 71.1554694348
//           },
//           "ALL": {
//             "code": "ALL",
//             "value": 95.7135677491
//           },
//           "AMD": {
//             "code": "AMD",
//             "value": 393.6397249374
//           },
//           "ANG": {
//             "code": "ANG",
//             "value": 1.786330202
//           },
//           "AOA": {
//             "code": "AOA",
//             "value": 834.1689827011
//           },
//           "ARB": {
//             "code": "ARB",
//             "value": 0.6355420866
//           },
//           "ARS": {
//             "code": "ARS",
//             "value": 857.5221403008
//           },
//           "AUD": {
//             "code": "AUD",
//             "value": 1.5413801912
//           },
//           "AVAX": {
//             "code": "AVAX",
//             "value": 0.019392896
//           },
//           "AWG": {
//             "code": "AWG",
//             "value": 1.79
//           },
//           "AZN": {
//             "code": "AZN",
//             "value": 1.7
//           },
//           "BAM": {
//             "code": "BAM",
//             "value": 1.8203701838
//           },
//           "BBD": {
//             "code": "BBD",
//             "value": 2
//           },
//           "BDT": {
//             "code": "BDT",
//             "value": 110.111206412
//           },
//           "BGN": {
//             "code": "BGN",
//             "value": 1.8076801868
//           },
//           "BHD": {
//             "code": "BHD",
//             "value": 0.376
//           },
//           "BIF": {
//             "code": "BIF",
//             "value": 2862.6712896385
//           },
//           "BMD": {
//             "code": "BMD",
//             "value": 1
//           },
//           "BNB": {
//             "code": "BNB",
//             "value": 0.0017199556
//           },
//           "BND": {
//             "code": "BND",
//             "value": 1.3516002559
//           },
//           "BOB": {
//             "code": "BOB",
//             "value": 6.9258112301
//           },
//           "BRL": {
//             "code": "BRL",
//             "value": 5.055120531
//           },
//           "BSD": {
//             "code": "BSD",
//             "value": 1
//           },
//           "BTC": {
//             "code": "BTC",
//             "value": 0.0000143233
//           },
//           "BTN": {
//             "code": "BTN",
//             "value": 83.3890016825
//           },
//           "BWP": {
//             "code": "BWP",
//             "value": 13.7946024881
//           },
//           "BYN": {
//             "code": "BYN",
//             "value": 3.2651633593
//           },
//           "BYR": {
//             "code": "BYR",
//             "value": 32651.644661755
//           },
//           "BZD": {
//             "code": "BZD",
//             "value": 2
//           },
//           "CAD": {
//             "code": "CAD",
//             "value": 1.357240232
//           },
//           "CDF": {
//             "code": "CDF",
//             "value": 2784.7133608946
//           },
//           "CHF": {
//             "code": "CHF",
//             "value": 0.9050301382
//           },
//           "CLF": {
//             "code": "CLF",
//             "value": 0.0261500037
//           },
//           "CLP": {
//             "code": "CLP",
//             "value": 985.2869076697
//           },
//           "CNY": {
//             "code": "CNY",
//             "value": 7.2286510038
//           },
//           "COP": {
//             "code": "COP",
//             "value": 3860.5035561633
//           },
//           "CRC": {
//             "code": "CRC",
//             "value": 500.6312029961
//           },
//           "CUC": {
//             "code": "CUC",
//             "value": 1
//           },
//           "CUP": {
//             "code": "CUP",
//             "value": 24
//           },
//           "CVE": {
//             "code": "CVE",
//             "value": 102.6716726312
//           },
//           "CZK": {
//             "code": "CZK",
//             "value": 23.5470443465
//           },
//           "DAI": {
//             "code": "DAI",
//             "value": 0.9969671059
//           },
//           "DJF": {
//             "code": "DJF",
//             "value": 177.721
//           },
//           "DKK": {
//             "code": "DKK",
//             "value": 6.9461410996
//           },
//           "DOP": {
//             "code": "DOP",
//             "value": 59.1196787967
//           },
//           "DOT": {
//             "code": "DOT",
//             "value": 0.1088426862
//           },
//           "DZD": {
//             "code": "DZD",
//             "value": 135.3182363756
//           },
//           "EGP": {
//             "code": "EGP",
//             "value": 47.1561079138
//           },
//           "ERN": {
//             "code": "ERN",
//             "value": 15
//           },
//           "ETB": {
//             "code": "ETB",
//             "value": 57.2008958718
//           },
//           "ETH": {
//             "code": "ETH",
//             "value": 0.0002848764
//           },
//           "EUR": {
//             "code": "EUR",
//             "value": 0.9311701753
//           },
//           "FJD": {
//             "code": "FJD",
//             "value": 2.2578203776
//           },
//           "FKP": {
//             "code": "FKP",
//             "value": 0.79698705
//           },
//           "GBP": {
//             "code": "GBP",
//             "value": 0.7970401019
//           },
//           "GEL": {
//             "code": "GEL",
//             "value": 2.6981503942
//           },
//           "GGP": {
//             "code": "GGP",
//             "value": 0.7969869322
//           },
//           "GHS": {
//             "code": "GHS",
//             "value": 13.182401398
//           },
//           "GIP": {
//             "code": "GIP",
//             "value": 0.7969873469
//           },
//           "GMD": {
//             "code": "GMD",
//             "value": 59.0396587007
//           },
//           "GNF": {
//             "code": "GNF",
//             "value": 8555.5348609256
//           },
//           "GTQ": {
//             "code": "GTQ",
//             "value": 7.783551018
//           },
//           "GYD": {
//             "code": "GYD",
//             "value": 209.1571611441
//           },
//           "HKD": {
//             "code": "HKD",
//             "value": 7.8235515093
//           },
//           "HNL": {
//             "code": "HNL",
//             "value": 24.676603251
//           },
//           "HRK": {
//             "code": "HRK",
//             "value": 6.7472911041
//           },
//           "HTG": {
//             "code": "HTG",
//             "value": 134.2741147114
//           },
//           "HUF": {
//             "code": "HUF",
//             "value": 367.0530030818
//           },
//           "IDR": {
//             "code": "IDR",
//             "value": 15868.093842386
//           },
//           "ILS": {
//             "code": "ILS",
//             "value": 3.6844104643
//           },
//           "IMP": {
//             "code": "IMP",
//             "value": 0.7969871473
//           },
//           "INR": {
//             "code": "INR",
//             "value": 83.3252404706
//           },
//           "IQD": {
//             "code": "IQD",
//             "value": 1308.3411945058
//           },
//           "IRR": {
//             "code": "IRR",
//             "value": 42005.982483244
//           },
//           "ISK": {
//             "code": "ISK",
//             "value": 140.0749357622
//           },
//           "JEP": {
//             "code": "JEP",
//             "value": 0.7969868611
//           },
//           "JMD": {
//             "code": "JMD",
//             "value": 153.9162517342
//           },
//           "JOD": {
//             "code": "JOD",
//             "value": 0.71
//           },
//           "JPY": {
//             "code": "JPY",
//             "value": 151.5817479605
//           },
//           "KES": {
//             "code": "KES",
//             "value": 131.569926134
//           },
//           "KGS": {
//             "code": "KGS",
//             "value": 89.852961348
//           },
//           "KHR": {
//             "code": "KHR",
//             "value": 4032.9578828407
//           },
//           "KMF": {
//             "code": "KMF",
//             "value": 457.768385703
//           },
//           "KPW": {
//             "code": "KPW",
//             "value": 899.9999934039
//           },
//           "KRW": {
//             "code": "KRW",
//             "value": 1351.7715737989
//           },
//           "KWD": {
//             "code": "KWD",
//             "value": 0.3065800586
//           },
//           "KYD": {
//             "code": "KYD",
//             "value": 0.83333
//           },
//           "KZT": {
//             "code": "KZT",
//             "value": 446.662470801
//           },
//           "LAK": {
//             "code": "LAK",
//             "value": 21104.694318842
//           },
//           "LBP": {
//             "code": "LBP",
//             "value": 89558.855722335
//           },
//           "LKR": {
//             "code": "LKR",
//             "value": 301.9718960529
//           },
//           "LRD": {
//             "code": "LRD",
//             "value": 192.828310138
//           },
//           "LSL": {
//             "code": "LSL",
//             "value": 18.9516637395
//           },
//           "LTC": {
//             "code": "LTC",
//             "value": 0.0100498777
//           },
//           "LTL": {
//             "code": "LTL",
//             "value": 3.2155157434
//           },
//           "LVL": {
//             "code": "LVL",
//             "value": 0.6545018116
//           },
//           "LYD": {
//             "code": "LYD",
//             "value": 4.8359006786
//           },
//           "MAD": {
//             "code": "MAD",
//             "value": 10.1040912249
//           },
//           "MATIC": {
//             "code": "MATIC",
//             "value": 1.0480752688
//           },
//           "MDL": {
//             "code": "MDL",
//             "value": 17.6190226504
//           },
//           "MGA": {
//             "code": "MGA",
//             "value": 4367.681101577
//           },
//           "MKD": {
//             "code": "MKD",
//             "value": 57.1286103626
//           },
//           "MMK": {
//             "code": "MMK",
//             "value": 2094.727908778
//           },
//           "MNT": {
//             "code": "MNT",
//             "value": 3400.2580811092
//           },
//           "MOP": {
//             "code": "MOP",
//             "value": 8.1029810309
//           },
//           "MRO": {
//             "code": "MRO",
//             "value": 356.999828
//           },
//           "MRU": {
//             "code": "MRU",
//             "value": 39.9002699622
//           },
//           "MUR": {
//             "code": "MUR",
//             "value": 46.3901591049
//           },
//           "MVR": {
//             "code": "MVR",
//             "value": 15.4498918561
//           },
//           "MWK": {
//             "code": "MWK",
//             "value": 1733.7108883198
//           },
//           "MXN": {
//             "code": "MXN",
//             "value": 16.6114927538
//           },
//           "MYR": {
//             "code": "MYR",
//             "value": 4.7240807764
//           },
//           "MZN": {
//             "code": "MZN",
//             "value": 63.73778939
//           },
//           "NAD": {
//             "code": "NAD",
//             "value": 18.8270833407
//           },
//           "NGN": {
//             "code": "NGN",
//             "value": 1424.1742971466
//           },
//           "NIO": {
//             "code": "NIO",
//             "value": 36.2984018718
//           },
//           "NOK": {
//             "code": "NOK",
//             "value": 10.9603513218
//           },
//           "NPR": {
//             "code": "NPR",
//             "value": 134.2462258827
//           },
//           "NZD": {
//             "code": "NZD",
//             "value": 1.6799402664
//           },
//           "OMR": {
//             "code": "OMR",
//             "value": 0.3841300634
//           },
//           "OP": {
//             "code": "OP",
//             "value": 0.285131446
//           },
//           "PAB": {
//             "code": "PAB",
//             "value": 0.9992001613
//           },
//           "PEN": {
//             "code": "PEN",
//             "value": 3.7322407396
//           },
//           "PGK": {
//             "code": "PGK",
//             "value": 3.7976807415
//           },
//           "PHP": {
//             "code": "PHP",
//             "value": 56.249876704
//           },
//           "PKR": {
//             "code": "PKR",
//             "value": 277.8839188556
//           },
//           "PLN": {
//             "code": "PLN",
//             "value": 3.9980607319
//           },
//           "PYG": {
//             "code": "PYG",
//             "value": 7420.6205776332
//           },
//           "QAR": {
//             "code": "QAR",
//             "value": 3.6396606382
//           },
//           "RON": {
//             "code": "RON",
//             "value": 4.628760899
//           },
//           "RSD": {
//             "code": "RSD",
//             "value": 108.6558129039
//           },
//           "RUB": {
//             "code": "RUB",
//             "value": 92.2735534207
//           },
//           "RWF": {
//             "code": "RWF",
//             "value": 1286.1357527383
//           },
//           "SAR": {
//             "code": "SAR",
//             "value": 3.7454706151
//           },
//           "SBD": {
//             "code": "SBD",
//             "value": 8.3557966602
//           },
//           "SCR": {
//             "code": "SCR",
//             "value": 14.469691725
//           },
//           "SDG": {
//             "code": "SDG",
//             "value": 601.5
//           },
//           "SEK": {
//             "code": "SEK",
//             "value": 10.7983915331
//           },
//           "SGD": {
//             "code": "SGD",
//             "value": 1.3525401583
//           },
//           "SHP": {
//             "code": "SHP",
//             "value": 0.7970401165
//           },
//           "SLL": {
//             "code": "SLL",
//             "value": 22632.530981971
//           },
//           "SOL": {
//             "code": "SOL",
//             "value": 0.0051791079
//           },
//           "SOS": {
//             "code": "SOS",
//             "value": 571.5236297164
//           },
//           "SRD": {
//             "code": "SRD",
//             "value": 35.0295359389
//           },
//           "STD": {
//             "code": "STD",
//             "value": 22914.972762808
//           },
//           "STN": {
//             "code": "STN",
//             "value": 22.9149694998
//           },
//           "SVC": {
//             "code": "SVC",
//             "value": 8.75
//           },
//           "SYP": {
//             "code": "SYP",
//             "value": 13001.873439303
//           },
//           "SZL": {
//             "code": "SZL",
//             "value": 18.9218529036
//           },
//           "THB": {
//             "code": "THB",
//             "value": 36.5871048698
//           },
//           "TJS": {
//             "code": "TJS",
//             "value": 11.0198111229
//           },
//           "TMT": {
//             "code": "TMT",
//             "value": 3.5
//           },
//           "TND": {
//             "code": "TND",
//             "value": 3.1210105202
//           },
//           "TOP": {
//             "code": "TOP",
//             "value": 2.3614204709
//           },
//           "TRY": {
//             "code": "TRY",
//             "value": 32.1970360414
//           },
//           "TTD": {
//             "code": "TTD",
//             "value": 6.7774411105
//           },
//           "TWD": {
//             "code": "TWD",
//             "value": 32.0602663542
//           },
//           "TZS": {
//             "code": "TZS",
//             "value": 2577.7072442083
//           },
//           "UAH": {
//             "code": "UAH",
//             "value": 39.3497074534
//           },
//           "UGX": {
//             "code": "UGX",
//             "value": 3884.438335641
//           },
//           "USD": {
//             "code": "USD",
//             "value": 1
//           },
//           "USDC": {
//             "code": "USDC",
//             "value": 0.996887826
//           },
//           "USDT": {
//             "code": "USDT",
//             "value": 0.9963229428
//           },
//           "UYU": {
//             "code": "UYU",
//             "value": 37.5924062767
//           },
//           "UZS": {
//             "code": "UZS",
//             "value": 12700.197165381
//           },
//           "VEF": {
//             "code": "VEF",
//             "value": 3620973.8600067
//           },
//           "VES": {
//             "code": "VES",
//             "value": 36.2097398759
//           },
//           "VND": {
//             "code": "VND",
//             "value": 24807.638108428
//           },
//           "VUV": {
//             "code": "VUV",
//             "value": 120.7010137068
//           },
//           "WST": {
//             "code": "WST",
//             "value": 2.7687802751
//           },
//           "XAF": {
//             "code": "XAF",
//             "value": 610.8564814914
//           },
//           "XAG": {
//             "code": "XAG",
//             "value": 0.039855152
//           },
//           "XAU": {
//             "code": "XAU",
//             "value": 0.0004445849
//           },
//           "XCD": {
//             "code": "XCD",
//             "value": 2.7
//           },
//           "XDR": {
//             "code": "XDR",
//             "value": 0.754440106
//           },
//           "XOF": {
//             "code": "XOF",
//             "value": 610.8564889657
//           },
//           "XPD": {
//             "code": "XPD",
//             "value": 0.0009976274
//           },
//           "XPF": {
//             "code": "XPF",
//             "value": 111.0564825455
//           },
//           "XPT": {
//             "code": "XPT",
//             "value": 0.0011079329
//           },
//           "XRP": {
//             "code": "XRP",
//             "value": 1.6297466195
//           },
//           "YER": {
//             "code": "YER",
//             "value": 249.8529753359
//           },
//           "ZAR": {
//             "code": "ZAR",
//             "value": 18.9456830987
//           },
//           "ZMK": {
//             "code": "ZMK",
//             "value": 9001.2
//           },
//           "ZMW": {
//             "code": "ZMW",
//             "value": 24.9632244969
//           },
//           "ZWL": {
//             "code": "ZWL",
//             "value": 361.9
//           }
//         }
//       }`
   

//     for (let data of object.keys(rjson["data"])){
//         console.log(key);

//       mystr+=   `   <tr>
//                     <td>${key}</td>
//                     <td>${rjson["data"][key]["code"]}</td>
//                     <td>${math.round(rjson["data"][key]["value"]* value)}</td>
//                     </tr>`
        

//     }
// const tbody= document.querySelector('tbody');  //select the table body
// tbody.innerHTML=   mystr;
// }

// const btn = document.querySelector(".btn");
// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
    
//     const value= parseInt(document.querySelector("input[name='quantity']").value);
//     const Currency= document.querySelector("select[name='currency']").value;
//     populate(value,Currency);
// })


console.log("main js is working ");

const populate = async (value,currency)=>{
 let mystr= ""
 url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_XGa9yBXgWx2j3Ew4ZVO8lNTAbIwIeENaXW4YdgBr&base_currency=" +currency;

let response = await fetch(url)
let rJson = await response.json()
document.querySelector(".output").style.display = "block"

for (let key of Object.keys(rJson["data"])) {
    mystr += ` <tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                </tr> 
            `
}
const tableBody = document.querySelector("tbody");
tableBody.innerHTML = mystr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
e.preventDefault()
const value = parseInt(document.querySelector("input[name='quantity']").value);
const currency = document.querySelector("select[name='currency']").value
populate(value, currency)
})