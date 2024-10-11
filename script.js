
let transactions = [
    { id: 1, title: "Orange", description: "Orange", price: 100, category: "fruits", sold: true, image: "image.jpg" },
    { id: 2, title: "Apple", description: "Red", price: 200, category: "fruits", sold: false, image: "image.jpg" },
    { id: 1, title: "Lilly", description: "White", price: 50, category: "flower", sold: true, image: "image.jpg" },
    { id: 2, title: "Rose", description: "Red", price: 40, category: "flower", sold: true, image: "image.jpg" },

    // Add more sample transactions
  ];
  
  let statistics = {
    totalSale: 100000,
    totalSoldItems: 55,
    totalUnsoldItems: 15
  };
  
  let chartData = {
    labels: ['0-100', '100-200', '200-300', '300-400', '400-500', '500-600'],
    datasets: [20, 40, 60, 80, 20, 30]
  };
  
  let currentMonth = 'March';
  let currentPage = 1;
  
  // Populate transactions
  function populateTransactions() {
    const transactionBody = document.getElementById('transaction-body');
    transactionBody.innerHTML = '';
    
    transactions.forEach(transaction => {
      const row = `
        <tr>
          <td>${transaction.id}</td>
          <td>${transaction.title}</td>
          <td>${transaction.description}</td>
          <td>${transaction.price}</td>
          <td>${transaction.category}</td>
          <td>${transaction.sold ? "Yes" : "No"}</td>
          <td><img src="${transaction.image}" alt="${transaction.title}" width="50"></td>
        </tr>
      `;
      transactionBody.innerHTML += row;
    });
  }
  
  // Populate statistics
  function populateStatistics() {
    document.getElementById('total-sale').innerText = statistics.totalSale;
    document.getElementById('total-sold-items').innerText = statistics.totalSoldItems;
    document.getElementById('total-unsold-items').innerText = statistics.totalUnsoldItems;
  }
  
  // Create chart
  function createBarChart() {
    const ctx = document.getElementById('bar-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Number of Items',
          data: chartData.datasets,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
  
  // Update month
  document.getElementById('month-dropdown').addEventListener('change', function() {
    currentMonth = this.value;
    document.getElementById('selected-month').innerText = currentMonth;
    document.getElementById('chart-month').innerText = currentMonth;
    
    // Call the function to update based on new month selection (API call in real scenarios)
    populateTransactions();
    populateStatistics();
    createBarChart();
  });
  
  // Pagination
  document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    // Fetch new page of transactions (API call in real scenarios)
    populateTransactions();
  });
  
  document.getElementById('previous').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      populateTransactions();
    }
  });
  
  // Initial population
  populateTransactions();
  populateStatistics();
  createBarChart();