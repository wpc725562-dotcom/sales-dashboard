/**
 * Mock data for the dashboard.
 * In a real project this would come from a REST API or database.
 * Keeping it in a separate file makes swapping to real data trivial.
 */

"use strict";

const MOCK_DATA = {
  // ---- KPI summary ----
  kpis: [
    { label: "Total Revenue", value: "$128,450", delta: "+12.4%", up: true },
    { label: "Orders", value: "2,847", delta: "+8.1%", up: true },
    { label: "Active Users", value: "9,204", delta: "+3.2%", up: true },
    { label: "Conversion Rate", value: "4.8%", delta: "-0.6%", up: false },
  ],

  // ---- Revenue trend (monthly) ----
  revenueMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  revenueValues: [8200, 9300, 10100, 11800, 12400, 13200, 12800, 14500, 13900, 15200, 16100, 17400],

  // ---- Sales by category ----
  categories: ["Electronics", "Clothing", "Home", "Books", "Sports", "Toys"],
  categoryValues: [420, 310, 265, 180, 150, 95],

  // ---- Traffic sources ----
  sources: [
    { name: "Organic Search", value: 4200 },
    { name: "Direct", value: 2600 },
    { name: "Social Media", value: 1900 },
    { name: "Referral", value: 1200 },
    { name: "Email", value: 800 },
  ],

  // ---- Weekly orders (Mon-Sun) ----
  weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  weekOrders: [320, 285, 410, 365, 520, 680, 590],

  // ---- Top products ----
  topProducts: ["Wireless Headphones", "Smart Watch", "Backpack", "Desk Lamp", "Keyboard"],
  topProductSales: [980, 840, 720, 640, 590],

  // ---- Recent orders table ----
  orders: [
    { id: "#10482", customer: "Emma Wilson", product: "Wireless Headphones", amount: "$129.99", status: "Completed" },
    { id: "#10481", customer: "Liam Johnson", product: "Smart Watch", amount: "$199.00", status: "Completed" },
    { id: "#10480", customer: "Olivia Brown", product: "Backpack", amount: "$59.50", status: "Pending" },
    { id: "#10479", customer: "Noah Davis", product: "Desk Lamp", amount: "$45.00", status: "Completed" },
    { id: "#10478", customer: "Ava Martinez", product: "Keyboard", amount: "$89.99", status: "Refunded" },
    { id: "#10477", customer: "Elijah Garcia", product: "Wireless Headphones", amount: "$129.99", status: "Completed" },
    { id: "#10476", customer: "Sophia Lee", product: "Smart Watch", amount: "$199.00", status: "Pending" },
  ],
};
