// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// interface Props {
//   data: {
//     E: number;
//     S: number;
//     T: number;
//     J: number;
//   };
// }

// const ResultChart: React.FC<Props> = ({ data }) => {
//   const chartData = {
//     labels: ['E', 'S', 'T', 'J'],
//     datasets: [
//       {
//         label: 'Scores',
//         data: [data.E, data.S, data.T, data.J],
//         backgroundColor: [
//           'rgba(75, 192, 192, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)'
//         ]
//       }
//     ]
//   };

//   return <Bar data={chartData} />;
// };

// export default ResultChart;






import React from 'react';
import { Bar } from 'react-chartjs-2';

interface Props {
  data: { [key: string]: number }
}

const ResultsPage: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: ['E', 'S', 'T', 'J'],
    datasets: [{
      data: [data.E, data.S, data.T, data.J],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
    }]
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
}

export default ResultsPage;


