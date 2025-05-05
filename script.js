async function initApp() {
    try {
      const response = await fetch('data.json');
      const dataByYear = await response.json();
  
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
            datasets: [{
              label: "Кількість ДТП",
              data: [yearData.total, compareYearData.total],
              backgroundColor: "red"
            }]
          };
          infoText = `Динаміка кількості дорожньо-транспортних пригод у ${currentYear} та ${compareYear} роках. \nУ ${currentYear} році сталося ${yearData.total} ДТП, що на ${Math.abs(yearData.total - compareYearData.total)} ${yearData.total >= compareYearData.total ? 'більше' : 'менше'}, ніж у ${compareYear} році.`;
          selection.style.display = "block";
        } else if (type === "injured") {
          chartData = {
            labels: ["Травмовано", "Загинуло"],
            datasets: [
              {
                label: `${currentYear}`,
                data: [yearData.injured, yearData.dead],
                backgroundColor: "gold"
              },
              {
                label: compareYear,
                data: [compareYearData.injured, compareYearData.dead],
                backgroundColor: "silver"
              }
            ]
          };
          infoText = `У ${currentYear} році було травмовано ${yearData.injured} осіб та у результаті ДТП загинуло ${yearData.dead} осіб.`;
          selection.style.display = "block";
        } else if (type === "regions") {
          chartData = {
            labels: yearData.regions.labels,
            datasets: [{
              label: "ДТП по областях",
              data: yearData.regions.values,
              backgroundColor: ["#DB995A", "#BE8451", "#A06E48", "#654236", "#9E8B6B", "#D6D4A0", "#D8A56B", "#DA7635", "#DE6228", "#E24E1B"]
            }]
          };
          const ind = Math.max.apply(Math, yearData.regions.values);
          const index = yearData.regions.values.indexOf(ind);
          infoText = `У ${currentYear} році найчастішим місцем для ДТП стала ${yearData.regions.labels[index]} область, в якій сталося ${ind} ДТП.`;
          selection.style.display = "none";
          legendDisplay = false;
        } else if (type === "reasons") {
          chartData = {
            labels: yearData.reasons.labels,
            datasets: [{
              data: yearData.reasons.values,
              backgroundColor: ["#5F0F40", "#771830", "#A72910", "#CB4E02", "#E28504", "#F1AD03", "#C2B102", "#8EA604", "#5A7D40", "#335F6D", "#26547C", "#5A7D6D", "#95AC5D", "#F6F740"]
            }]
          };
          chartType = "pie";
          infoText = `Основною причиною ДТП у ${currentYear} стало ${yearData.reasons.labels[0]}, спричинивше ${yearData.reasons.values[0]} ДТП. \nНа другому місці знаходиться ${yearData.reasons.labels[1]} з ${yearData.reasons.values[1]} ДТП.`;
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
      window.changeYear = changeYear;
      window.updateChart = updateChart;
      window.getCurrentChartType = () => currentChartType;
      updateChart("total");
  
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  }

initApp();