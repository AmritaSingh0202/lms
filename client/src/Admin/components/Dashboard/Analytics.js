// import React from 'react';
// import { Line} from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const cardClasses = 'bg-white p-4 rounded-lg shadow-lg flex-1 lg:w-[218px]';
const iconClasses = 'rounded-full p-2';
const textClasses = 'text-muted-foreground';
const valueClasses = 'text-2xl font-bold text-card-foreground';
const changeClasses = 'flex items-center space-x-1';

// const Analytics = () => {
//   const salesData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Course Overview',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0)',
//         borderColor: 'rgba(75,192,192,10)',
//       },
//     ],
//   };

//   const incomeData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//     datasets: [
//       {
//         label: "Admin Revenue",
//         data: [75, 69, 90, 91, 66, 65, 50],
//         fill: false,
//         backgroundColor: "rgba(255,69,0,0.2)",
//         borderColor: "rgba(255,69,0,1)",
//       },
//     ],
//   };

//   const ordersData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Requested Withdrawal',
//         data: [55, 49, 70, 71, 46, 45, 30],
//         fill: false,
//         backgroundColor: 'rgba(128,128,128,0)',
//         borderColor: 'rgba(128,128,128,10)',
//       },
//     ],
//   };

//   const visitorsData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Students Visited',
//         data: [85, 79, 100, 101, 76, 75, 60],
//         fill: false,
//         backgroundColor: 'rgba(0,0,255,0)',
//         borderColor: 'rgba(0,0,255,10)',
//       },
//     ],
//   };

  return (
    <div className=" flex lg:space-x-4 space-y-3 p-3 bg-transparent lg:flex-row flex-col ">
      <Card
        iconUrl="https://img.icons8.com/?size=100&id=X4XkP0y69kF1&format=png&color=000000"
        title="Course Overview"
        value="12,000"
        change="2.00%"
        graphData={salesData}
        iconBgColor="bg-gray-300"
      />
      <Card
        iconUrl="https://img.icons8.com/?size=100&id=FxcjMqAjmqCG&format=png&color=000000"
        title="Admin Revenue"
        value="$30.000"
        change="10.56%"
        graphData={incomeData}
        iconBgColor="bg-purple-300"
      />
      <Card
        iconUrl="https://img.icons8.com/?size=100&id=36950&format=png&color=000000"
        title="Requested Withdrawal"
        value="200"
        change="1.00%"
        graphData={ordersData}
        iconBgColor="bg-blue-500"
      />
      <Card
        iconUrl="https://img.icons8.com/?size=100&id=wedvG5aPAzPV&format=png&color=000000"
        title="Students Visited"
        value="10,000"
        change="6.56%"
        graphData={visitorsData}
        iconBgColor="bg-red-500"
      />
    </div>
  );


// const Card = ({ iconUrl, title, value, change, graphData, iconBgColor }) => {
//   return (
//     <div className={cardClasses}>
//       <div className="flex items-center space-x-2 mb-2">
//         <div className={`${iconBgColor} text-white ${iconClasses}`}>
//           <img aria-hidden="true" alt={`${title}-icon`} src={iconUrl} />
//         </div>
//         <div className={textClasses}>{title}</div>
//       </div>
//       <div className={valueClasses}>{value}</div>
//       <div className={changeClasses}>
//         <span className="text-blue-500">{change}</span>
//       </div>
//       <div className="mt-2">
//         <Line data={graphData} />
//       </div>
//     </div>
//   );
// };

// export default Analytics;
