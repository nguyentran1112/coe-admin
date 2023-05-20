import * as React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import AppBarCustom from "../components/AppBarCustom";
import ActionAreaCard from "../components/ActionAreaCard";
import img from "../constants";
import {useSelector} from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Doanh thu',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '2023',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2022',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const data1 = {
  labels: ['Completed', 'Assigment', 'Unassigment'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
       
      ],
      borderWidth: 1,
    },
  ],
};



const Dashboard = () => {
  const selector = useSelector((state) => state)
  const maintenance = selector?.maintenance.listMaintenance
  const maintenanceC = maintenance.filter((item) => item.status == 'completed')
  const maintenanceA = maintenance.filter((item) => item.status == 'assigned')  
  const maintenanceU = maintenance.filter((item) => item.status == 'unassigned')  
  console.log(maintenanceA)
  const dataTemp = {
    labels: ['Completed', 'Assigment', 'Unassigment'],
    datasets: [
      {
        label: '# of Votes',
        data: [maintenanceC.length, maintenanceA.length, maintenanceU.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <AppBarCustom />
      <div style={{ padding: 24, display: "flex", alignItems: "center" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Đơn bảo trì"
              quantity={selector?.maintenance.listMaintenance.length}
              img={img.fix}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Nhân viên hoạt động"
              quantity = {selector?.employee?.listEmployee.length}
              img={img.employeeImg}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Khách hàng hoạt động"
              quantity = {selector?.client?.listClient.length}
              img={img.client}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Tổng doanh thu"
              quantity="1"
              img={img.money}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ActionAreaCard
              title="Đánh giá từ khách hàng"
              quantity="1"
              img={img.rate}
            />
          </Grid>
          <Grid item xs={6} md={2}>
           
          </Grid>
        </Grid>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{width: '70%', padding: '24px'}}>
          <Bar options={options} data={data} />
      </div>
      <div style={{width: '30%', padding: '24px'}}>
      <Pie  data={dataTemp} />
      </div>
      </div>
      
      
    </div>
  );
};
export default Dashboard;
