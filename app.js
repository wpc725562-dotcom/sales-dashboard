/**
 * Sales Dashboard - App Logic
 * Renders KPI cards, ECharts charts, and data table from mock data.
 * Uses ECharts 5 (loaded from CDN) for all visualizations.
 */

"use strict";

(() => {
  const D = MOCK_DATA; // shorthand

  // ---------- Init ----------
  function init() {
    renderDate();
    renderKPIs();
    renderRevenueChart();
    renderCategoryChart();
    renderSourceChart();
    renderOrdersChart();
    renderProductsChart();
    renderTable();
    window.addEventListener("resize", resizeAllCharts);
  }

  function renderDate() {
    const now = new Date();
    document.getElementById("date-display").textContent =
      now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }

  // ---------- KPI Cards ----------
  function renderKPIs() {
    const grid = document.getElementById("kpi-grid");
    grid.innerHTML = D.kpis
      .map(
        (k) => `
      <article class="card kpi-card">
        <p class="kpi-card__label">${k.label}</p>
        <p class="kpi-card__value">${k.value}</p>
        <p class="kpi-card__delta ${k.up ? "kpi-card__delta--up" : "kpi-card__delta--down"}">
          ${k.delta}
        </p>
      </article>`
      )
      .join("");
  }

  // ---------- Chart helpers ----------
  const charts = [];

  function makeChart(elId) {
    const el = document.getElementById(elId);
    const chart = echarts.init(el);
    charts.push(chart);
    return chart;
  }

  function resizeAllCharts() {
    charts.forEach((c) => c.resize());
  }

  /** Shared tooltip + color scheme */
  const BASE_OPTS = {
    tooltip: { trigger: "axis", backgroundColor: "#fff", borderColor: "#e5e7eb" },
    grid: { left: 40, right: 16, top: 20, bottom: 30, containLabel: false },
    color: ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"],
  };

  // ---------- 1. Revenue Trend (line) ----------
  function renderRevenueChart() {
    const chart = makeChart("revenue-chart");
    chart.setOption({
      ...BASE_OPTS,
      tooltip: { ...BASE_OPTS.tooltip, trigger: "axis" },
      xAxis: { type: "category", data: D.revenueMonths, axisLabel: { fontSize: 11 } },
      yAxis: { type: "value", axisLabel: { formatter: " $ {value}" } },
      series: [
        {
          data: D.revenueValues,
          type: "line",
          smooth: true,
          areaStyle: { color: "rgba(99, 102, 241, 0.15)" },
          lineStyle: { width: 3 },
          symbol: "circle",
          symbolSize: 6,
        },
      ],
    });
  }

  // ---------- 2. Sales by Category (bar) ----------
  function renderCategoryChart() {
    const chart = makeChart("category-chart");
    chart.setOption({
      ...BASE_OPTS,
      grid: { left: 50, right: 16, top: 20, bottom: 30 },
      xAxis: { type: "category", data: D.categories, axisLabel: { fontSize: 10, rotate: 15 } },
      yAxis: { type: "value" },
      series: [{ data: D.categoryValues, type: "bar", barWidth: "60%", borderRadius: [4, 4, 0, 0] }],
    });
  }

  // ---------- 3. Traffic Sources (pie) ----------
  function renderSourceChart() {
    const chart = makeChart("source-chart");
    chart.setOption({
      ...BASE_OPTS,
      grid: { left: 0, right: 0, top: 0, bottom: 0 },
      tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
      series: [
        {
          type: "pie",
          radius: ["35%", "65%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: true,
          label: { show: true, formatter: "{b}", fontSize: 11 },
          emphasis: { label: { show: true, fontSize: 14, fontWeight: "bold" } },
          data: D.sources,
        },
      ],
    });
  }

  // ---------- 4. Weekly Orders (bar) ----------
  function renderOrdersChart() {
    const chart = makeChart("orders-chart");
    chart.setOption({
      ...BASE_OPTS,
      xAxis: { type: "category", data: D.weekDays, axisLabel: { fontSize: 11 } },
      yAxis: { type: "value" },
      series: [{ data: D.weekOrders, type: "bar", barWidth: "50%", borderRadius: [4, 4, 0, 0] }],
    });
  }

  // ---------- 5. Top Products (horizontal bar) ----------
  function renderProductsChart() {
    const chart = makeChart("products-chart");
    chart.setOption({
      ...BASE_OPTS,
      grid: { left: 90, right: 16, top: 10, bottom: 10 },
      xAxis: { type: "value" },
      yAxis: { type: "category", data: D.topProducts, axisLabel: { fontSize: 10 } },
      series: [{ data: D.topProductSales, type: "bar", barWidth: "60%", borderRadius: [0, 4, 4, 0] }],
    });
  }

  // ---------- 6. Recent Orders Table ----------
  function renderTable() {
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = D.orders
      .map(
        (o) => `
      <tr>
        <td>${o.id}</td>
        <td>${o.customer}</td>
        <td>${o.product}</td>
        <td>${o.amount}</td>
        <td><span class="badge badge--${o.status.toLowerCase()}">${o.status}</span></td>
      </tr>`
      )
      .join("");
  }

  // ---------- Start ----------
  document.addEventListener("DOMContentLoaded", init);
})();