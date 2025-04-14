const dataByYear = {
    2024: { 
        total: 25781, 
        injured: 32023, 
        dead: 3202,
        regions: {
            labels: ["Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київська", "Київ", "Кіровоградська", "Луганська", "Львівська", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернігівська", "Чернівецька"],
            values: [694, 909, 2379, 541, 897, 433, 842, 996, 2038, 2167, 826, 0, 2307, 2167, 1118, 2088, 975, 773, 884, 572, 1493, 183, 757, 699, 672, 538]
        },
        reasons: {
            labels: ["Порушення швидкості", "Порушення правил маневрування", "Порушення правил проїзду перехресть", "Порушення правил проїзду пішохідних переходів", "Недотримання дистанції", "Керування транспортним засобом у стані сп\'яніння", "Перехід пішоходів у невстановленому місці", "Виїзд на смугу зустрічного руху", "Порушення правил надання безперешкодного проїзду", "Порушення правил обгону", "Перевтома, сон за кермом", "Інше"],
            values: [10163, 5735, 2444, 2026, 1389, 1000, 728, 455, 329, 327, 55, 1130]
        }
    },
    2023: { 
        total: 23642, 
        injured: 29502, 
        dead: 3053,
        regions: {
            labels: ["Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київська", "Київ","Кіровоградська", "Луганська", "Львівська", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернігівська", "Чернівецька"],
            values: [695, 818, 2140, 583, 1016, 469, 803, 907, 1807, 1894, 782, 0, 2001, 1060, 1568, 974, 719, 711, 563, 1404, 155, 727, 675, 661, 510]
        },
        reasons: {
            labels: ["Порушення швидкості", "Порушення правил маневрування", "Порушення правил проїзду перехресть", "Порушення правил проїзду пішохідних переходів", "Недотримання дистанції", "Керування транспортним засобом у стані сп\'яніння", "Перехід пішоходів у невстановленому місці", "Виїзд на смугу зустрічного руху", "Порушення правил надання безперешкодного проїзду", "Порушення правил обгону", "Перевтома, сон за кермом", "Інше"],
            values: [9857, 5191, 2014, 1642, 1148, 942, 781, 470, 290, 267, 66, 708]
        }
    },
    2022: { 
        total: 18628, 
        injured: 23145, 
        dead: 2791,
        regions: {
            labels: ["Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київська", "Київ", "Кіровоградська", "Луганська", "Львівська", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернігівська", "Чернівецька"],
            values: [611, 578, 1737, 371, 795, 435, 565, 805, 1267, 1487, 609, 33, 1797, 776, 1157, 789, 623, 604, 540, 867, 75, 624, 545, 558, 371]
        },
        reasons: {
            labels: ["Порушення швидкості", "Порушення правил маневрування", "Порушення правил проїзду перехресть", "Порушення правил проїзду пішохідних переходів", "Недотримання дистанції", "Керування транспортним засобом у стані сп\'яніння", "Перехід пішоходів у невстановленому місці", "Виїзд на смугу зустрічного руху", "Невиконання водіями вимог сигналів регулювання", "Неочікуваний виїзд на проїзну частину", "Порушення правил обгону", "Порушення правил надання безперешкодного проїзду", "Інше"],
            values: [8030, 3846, 1467, 1443, 843, 790, 593, 418, 236, 233, 184, 184, 361]
        }
    },
    2021: { 
        total: 24521, 
        injured: 29738, 
        dead: 3238,
        regions: {
            labels: ["Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київська", "Київ", "Кіровоградська", "Луганська", "Львівська", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернігівська", "Чернівецька"],
            values: [591, 599, 2063, 1049, 931, 457, 1183, 871, 1669, 2024, 619, 301, 1902, 1073, 1445, 1010, 738, 737, 623, 1591, 662, 672, 646, 592, 373]
        },
        reasons: {
            labels: ["Порушення швидкості", "Порушення правил маневрування", "Порушення правил проїзду перехресть", "Порушення правил проїзду пішохідних переходів", "Недотримання дистанції", "Перехід пішоходів у невстановленому місці", "Керування транспортним засобом у стані сп\'яніння", "Виїзд на смугу зустрічного руху", "Неочікуваний виїзд на проїзну частину", "Невиконання водіями вимог сигналів регулювання", "Порушення правил обгону", "Порушення правил надання безперешкодного проїзду", "Інше"],
            values: [10024, 5022, 2115, 1854, 1457, 877, 843, 575, 413, 259, 250, 247, 585]
        }
    },
    2020: { 
        total: 26140, 
        injured: 31974, 
        dead: 3541,
        regions: {
            labels: ["Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київська", "Київ", "Кіровоградська", "Луганська", "Львівська", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернігівська", "Чернівецька"],
            values: [738, 728, 2288, 1044, 985, 542, 1259, 751, 1948, 2077, 635, 288, 1926, 998, 1843, 1023, 798, 648, 552, 1913, 736, 699, 768, 611, 442]
        },
        reasons: {
            labels: ["Порушення швидкості", "Порушення правил маневрування", "Порушення правил проїзду перехресть", "Порушення правил проїзду пішохідних переходів", "Недотримання дистанції", "Перехід пішоходів у невстановленому місці", "Керування транспортним засобом у стані сп\'яніння", "Виїзд на смугу зустрічного руху", "Неочікуваний виїзд на проїзну частину", "Невиконання водіями вимог сигналів регулювання", "Порушення правил обгону", "Порушення правил надання безперешкодного проїзду", "Перевтома, сон за кермом", "Інше"],
            values: [10521, 5522, 2352, 1860, 1445, 992, 911, 643, 403, 335, 285, 245, 111, 515]
        }
    }
};

let currentYear = 2024;
let currentChartType = "total";
let chart;

function changeYear(year) {
    currentYear = year;
    const yearData = dataByYear[currentYear];
    const allYears = ["2024", "2023", "2022", "2021", "2020"];
    let cmpr = document.getElementById('compareYear');
    let dlink1 = document.getElementById("dLinkE");
    let dlink2 = document.getElementById("dLinkP");
    document.getElementById("title").innerText = `Статистика ДТП за ${year} рік`;
    document.getElementById("total").innerText = `${yearData.total}`;
    document.getElementById("injured").innerText = `${yearData.injured}`;
    document.getElementById("reg").innerText = `${Math.max.apply(Math, yearData.regions.values)}`;
    document.getElementById("res").innerText = `${yearData.reasons.labels[0]}`;

    updateChart(currentChartType);

    cmpr.innerHTML = '';
    allYears.filter(y => y != currentYear).forEach(y => {
        let newOption = document.createElement("option");
        newOption.value = y;
        newOption.textContent = y;
        cmpr.appendChild(newOption);
    });

    dlink1.href = `./${year}/Дані за ${year} рік.xlsx`;
    dlink1.download = `Дані за ${year} рік`;
    dlink2.href = `./${year}/Дані за ${year} рік.pdf`;
    dlink2.download = `Дані за ${year} рік`;
}

function updateChart(type) {
    currentChartType = type;
    const yearData = dataByYear[currentYear];
    let compareYear = document.getElementById("compareYear").value;
    const compareYearData = dataByYear[compareYear];
    const selection = document.getElementById('selection');

    let chartData;
    let chartType = "bar";
    let infoText = "";
    let chartPosition = "bottom";
    let legendDisplay = true;

    if (type === "total") {
        chartData = {
            labels: [`${currentYear}`, compareYear],
            datasets: [{ label: "Кількість ДТП", data: [yearData.total, compareYearData.total], backgroundColor: "red" }]
        };
        infoText = `Динаміка кількості дорожньо-транспортних пригод у ${currentYear} та ${compareYear} роках. \nУ ${currentYear} році сталося ${yearData.total} ДТП, що на ${Math.abs(yearData.total - compareYearData.total)} ${yearData.total >= compareYearData.total ? 'більше' : 'менше'}, ніж у ${compareYear} році.`;
        selection.style.display = "block";
    } 
    else if (type === "injured") {
        chartData = {
            labels: ["Травмовано", "Загинуло"],
            datasets: [{ label: `${currentYear}`, data: [yearData.injured, yearData.dead], backgroundColor: "gold" },
            {label: compareYear, data: [compareYearData.injured, compareYearData.dead], backgroundColor: "silver" }],
        };
        infoText = `У ${currentYear} році було травмовано ${yearData.injured} осіб та у результаті ДТП загинуло ${yearData.dead} осіб.`;
        selection.style.display = "block";
    } 
    else if (type === "regions") {
        chartData = {
            labels: yearData.regions.labels,
            datasets: [{ label: "ДТП по областях", data: yearData.regions.values, backgroundColor: ["#DB995A", "#BE8451", "#A06E48", "#654236", "#9E8B6B", "#D6D4A0", "#D8A56B", "#DA7635", "#DE6228", "#E24E1B"]}]
        };
        const ind = Math.max.apply(Math, yearData.regions.values);
        const index = yearData.regions.values.indexOf(ind);
        infoText = `У ${currentYear} році найчастішим місцем для ДТП стала ${yearData.regions.labels[index]} область, в якій сталося ${ind} ДТП.`;
        selection.style.display = "none";
        legendDisplay = false;
    } 
    else if (type === "reasons") {
        chartData = {
            labels: yearData.reasons.labels,
            datasets: [{ data: yearData.reasons.values, backgroundColor: ["#5F0F40", "#771830", "#A72910", "#CB4E02", "#E28504", "#F1AD03", "#C2B102", "#8EA604", "#5A7D40", "#335F6D", "#26547C", "#5A7D6D", "#95AC5D", "#F6F740"]}]
        };
        chartType = "pie";
        infoText = `Основною причиною ДТП у ${currentYear} стало ${yearData.reasons.labels[0]}, спричинивше ${yearData.reasons.values[0]} ДТП. \nНа другому місці знаходиться ${yearData.reasons.labels[1]} з ${yearData.reasons.values[1]} ДТП.`
        chartPosition = "right";
        selection.style.display = "none";
    }

    document.getElementById("infoBox").innerText = infoText;

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("accidentsChart").getContext("2d");
    chart = new Chart(ctx, {
        type: chartType,
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 3.5,
            barPercentage: 0.4,
            borderWidth: 2,
            plugins: {
                legend: {
                    position: chartPosition,
                    display: legendDisplay
                }
            }
        }
    });
}

updateChart("total");